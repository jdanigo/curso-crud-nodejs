import { Request, Response } from "express";
import axios from 'axios';

const sendInvite = async (req: Request, res: Response): Promise<void> => {
 
    let { username } = req.body;

    //aplicar validaciones
    if(username){

        const isEmail = validateIsEmail(username);

        if(isEmail){
            // try {
            //     const result = await searchUsernames(username);
            //     username = result.items[0].login;
            // } catch (error) {
            //     throw new Error("Cannot get username");
            // }

            res.status(400).json({message: "Only accept usernames, cannot use email"});
            
        }

        const repoName = "curso-crud-nodejs";
            const token = "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";
            try {
                const result = await axios({
                    method: "PUT",
                    url: `https://api.github.com/repos/jdanigo/${repoName}/collaborators/${username}`,
                    headers: {
                        'Authorization': `token ${token}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                })
                console.log("mostrando resultado de invitacion", result);
                res.json({data: result.data});
                
            } catch (error) {
                res.status(500).json(error);
            }
    }else{
        res.status(400).json({message: "The username is mandatory"});
    }

    
    
}


const validateIsEmail = (username: string): boolean => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(username);
}

const searchUsernames = async (username: string) => {
    try {
        const result = await axios({
            method: "GET",
            url: `https://api.github.com/search/users?q=${username}+in:email`,
        })
        
        return result.data;
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export {
    sendInvite
}