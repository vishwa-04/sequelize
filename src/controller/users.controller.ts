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
}