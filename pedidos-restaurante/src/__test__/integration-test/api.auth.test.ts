import 'jest';
import request from 'supertest';
import app from '../../index'
import jwt from 'jsonwebtoken';


beforeAll(()=>{
    app.listen(5000)
})


describe("API Endpoints", ()=>{

    it("[POST]->user exists /api/auth/signup", async ()=>{
        const payload = {
            name: 'Daniel',
            lastName: "Garces",
            email: 'tatanbmx@gmail.com',
            password: 'tatanbmx'
        }
        const response = await request(app).post("/api/auth/signup").send(payload)
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("User already exists");
    })

    it("[POST]-> new user /api/auth/signup", async ()=>{
        const payload = {
            name: 'Pedro',
            lastName: "Jimenez",
            email: 'j.j@gmail.com',
            password: 'jj.jimenes'
        }
        const response = await request(app).post("/api/auth/signup").send(payload)
        expect(response.status).toBe(200);
    })

    it("[POST]-> log in /api/auth/signin", async ()=>{
        const payload = {            
            email: 'tatanbmx@gmail.com',
            password: 'tatan123'
        }
        const response = await request(app).post("/api/auth/signin").send(payload)
        expect(response.status).toBe(200);
    })

    

})