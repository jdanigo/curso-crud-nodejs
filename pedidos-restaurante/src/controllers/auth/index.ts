import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const signUp = async (req: Request, res: Response) => {
    
    try {
        const findUser = await prisma.user.findUnique({
            where : { email: req.body.email}
        });
        if(!findUser){
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = await prisma.user.create({
                data: {
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashedPassword
                }
            })
            return res.status(200).json({data: newUser})
        }else{
            return res.status(400).json({message: "User already exists"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    
}

const signIn = async (req: Request, res: Response) => {

 const {email, password} = req.body;

try {
    //validate if user exists
    const findUser = await prisma.user.findUnique({
        where : { email: email}
    });
    
    if(!findUser){
        return res.status(400).json({message: 'User not found'});
    }

    //Validate if password is matched
    const isValidPassword = await bcrypt.compare(password, findUser.password);

    if(!isValidPassword){
        return res.status(400).json({message: 'Email or Password Is Invalid'});
    }

    const token = jwt.sign({id: findUser.id, name: findUser.name, email: findUser.email}, 'my-secret', {expiresIn: '1h'});

    return res.status(200).json({token});

    
} catch (error) {
    
}
 
    
}



export {
    signUp,
    signIn
}