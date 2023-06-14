import 'jest';
import { NextFunction, Request, Response } from 'express';
import authMiddleware from '../../middleware/auth'
import jwt from 'jsonwebtoken';

describe("Test middleware jwt token", ()=>{

    let mockRequest: Partial<Request>;
    let mockResponse : Partial<Response>;
    let nextFunction: NextFunction = jest.fn();

    beforeEach(()=>{
        mockRequest =  {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
    });

    it("Simulate request without header", ()=>{
        mockRequest = {
            headers: {}
        }
        //Function to test
        authMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

        //Assert
        expect(mockResponse.status).toHaveBeenCalledWith(401);
        expect(mockResponse.json).toHaveBeenCalledWith({message: 'Token is mandatory'});
    })

    it("Simulate request with incorrect token", ()=>{
        mockRequest = {
            headers: {
                authorization: '1234'
            }
        }

        const expectedResponse = {
            message: 'Invalid Token'
        }

        authMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

        //Assert
        expect(mockResponse.status).toHaveBeenCalledWith(401);
        expect(mockResponse.json).toHaveBeenCalledWith(expectedResponse);
    })

    it("Simulate request with correct token", ()=>{
        const payload = {id: 1};
        const token = jwt.sign(payload, 'my-secret', {expiresIn: '1h'})
        mockRequest = {
            headers: {
                authorization: token
            }
        }

        authMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

        //Assert
        expect(mockResponse.json);
    })

})