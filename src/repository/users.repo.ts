import BaseRepository from "@/common/helpers/base.repository";
import { hashPassword } from "@/common/helpers/passwordHashing";
import Users from "@/models/user.models";

export default class UserRepo extends BaseRepository<Users> {
  constructor() {
    super(Users.name);
  }

  // Create a new user
  readonly createUsers = async (body: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }) => {
    try {
      const securePassword = await hashPassword(body.password)
      const newUser = await Users.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password:securePassword,
      });

      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Unable to create user");
    }
  };

  // Get All Users
  readonly getAllUsers = async () => {
    try {
      const users = await Users.findAll();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Unable to fetch users");
    }
  };

  // Update User Api
  readonly updateUser = async (id: string, body: {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
  }) => {
    try {
      const data = await Users.findOne({
        where:{
          id,
        }
      })
      if(data){
        const [updated] = await Users.update(body, {
          where: {
            id,
          }
        })
      }
      else{
        console.error("No User Exist");
      }
     
    }
    catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Unable to update user");
    }
  }

   // Delete Users
   readonly deleteUser = async (id:string) => {
    try {
     const data = await Users.findOne({
      where:{
        id
      }
     })
     if(data){
      const deletedRecord = await Users.destroy({
        where:{
          id
        }
      }) 
     }
     else{
      console.error("No User Exist");
     }
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Unable to fetch users");
    }
  };
}
