import UserController from '@/controller/users.controller';
import {Router} from 'express'
export interface Routes {
    path?: string;
    router: Router;
  }
  
export class UserRoute implements Routes{
    public path = '/users';
    public router = Router();
    public userController = new UserController();

    constructor(){
        this.initializeRoutes();
    }
    private initializeRoutes() {
        // create users
        this.router.post(
          this.path,
          this.userController.createUser,
        )  

        // get all users
        this.router.get(
          this.path,
          this.userController.getAllUsers,
        )  

        // update user
        this.router.put(
          `${this.path}/:id`,
          this.userController.updateUser,
        )  

        // delete user
        this.router.delete(
          `${this.path}/:id`,
          this.userController.deleteUser
        )

      }

      
}
