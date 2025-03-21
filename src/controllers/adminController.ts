import { Request,Response } from "express";
import { UserInterface,UserMethods } from "../interfaces";;


export class AdminController{
    private userService : UserMethods;

    constructor (userService : UserMethods){
        this.userService = userService
    }
    public loadHome = async (req: Request, res: Response):Promise<void>=>{
        try {
            const user = await this.userService.getAllUser();
            if(user){
                res.render('user',{user})
            }else{
                res.status(400).json({
                    success : false,
                    message : 'Failed to Fetch Users'
                });
            }
        } catch (error) {
            res.status(500).json({
                success : false,
                messsage : "An Error Occured While Load Users"
            });
        }
    }
    
    public addUser = async (req:Request,res:Response):Promise<void>=>{

        const {first_name,last_name,email,phone} = req.body;
        console.log(first_name,last_name,email,phone);

        if(!first_name|| !last_name|| !email|| !phone){
            res.status(404).json({success: false,message:'All Field Data is Required'})
        }

        try {
            const newUser: UserInterface = {first_name,last_name,email,phone}
            const user :UserInterface = await this.userService.newUser(newUser);
            if(user){
                res.status(201).json({user,success:true})
            }else{
                res.status(400).json({success:false,message:'Failed to Add User'})
            }
        } catch (error) {
            res.status(500).json({
                success : false,
                message : 'An Error Occured While  Adding New User'
            })
        }
    }

    public updateUser = async(req:Request,res:Response):Promise<void>=>{
        const {id} = req.params;
        const {first_name,last_name,email,phone} = req.body;
        try {
            const updateUser = await this.userService.updateUser(id,{first_name,last_name,email,phone})
            if(updateUser){
                res.status(200).json({
                    updateUser,
                    success : true,
                });
            }else{
                res.status(400).json({
                    success : false,
                    message : 'Failed to Update User'
                })
            }
        } catch (error) {
            res.status(500).json({
                success : false,
                message : 'An Error Occured While Load Users'
            })
        }
    }

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
    
        try {
            const deletedUser = await this.userService.deleteUser(id);
            if (deletedUser) {
                res.status(200).json({
                    user: deletedUser,
                    success: true
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                });
            }
        } catch (error) {
            console.error('Delete user error:', error);
            res.status(500).json({
                success: false,
                message: 'An Error Occurred While Deleting The User'
            });
        }
    }
    
    public userDetails = async (req:Request, res:Response):Promise<void>=>{
        const {id} = req.params;

        try {
            const user = await this.userService.userDetails(id)

            if(user){
                res.status(200).json({
                    user,
                    success : true
                })
            }else{
                res.status(400).json({
                    success : false,
                    message : 'Failed to Fetch User'
                });
            }
        } catch (error) {
            res.status(500).json({
                success : false,
                message : 'An Error Occurred While Fetching The User'
            });
        }
    }


}