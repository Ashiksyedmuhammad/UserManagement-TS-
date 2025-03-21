import { Router } from "express";
import {AdminController} from './controllers/adminController';
import {UserServices} from './taskManager';

const router: Router = Router();
const UserService = new UserServices();
const adminController = new AdminController(UserService);


router.get('/',adminController.loadHome);
router.get('/users/:id', adminController.userDetails)
router.post('/users',adminController.addUser)
router.put('/users/:id',adminController.updateUser);
router.delete('/user/:id',adminController.deleteUser);



export default router