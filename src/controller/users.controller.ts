import { generalResponse } from '@/common/helpers/generalReponse';
import UserRepo from '@/repository/users.repo';
import {Request,Response} from 'express'
export default class UserController{
    private userRepo = new UserRepo();
    /**
   * Add User API
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
     public createUser = (async (req: Request, res: Response) => {
        const data = await this.userRepo.createUsers(req.body);
        return generalResponse(req, res, data,  true);
      });

    /**
   * Get All User API
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
     public getAllUsers = (async (req: Request, res: Response) => {
      const data = await this.userRepo.getAllUsers();
      return generalResponse(req, res, data,  true);
    });

        /**
   * Update user api
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
        public updateUser = (async (req: Request, res: Response) => {
          const data = await this.userRepo.updateUser(req.params.id,req.body);
          return generalResponse(req, res, data,  true);
        });

               /**
   * Delete user api
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
               public deleteUser = (async (req: Request, res: Response) => {
                const data = await this.userRepo.deleteUser(req.params.id);
                return generalResponse(req, res, data,  true);
              });
}