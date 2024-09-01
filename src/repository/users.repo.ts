import BaseRepository from "@/common/helpers/base.repository";
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
      const newUser = await Users.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: body.password,
      });

      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Unable to create user");
    }
  };
}
