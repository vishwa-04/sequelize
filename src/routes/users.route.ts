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
        // create academy
        this.router.post(
          this.path,
          this.userController.createUser,
        )  
      }
}
