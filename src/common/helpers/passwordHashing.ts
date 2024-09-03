import bcrypt from 'bcrypt'

export const hashPassword = async(password:string):Promise<string> =>{
const salt = 10;
return await bcrypt.hash(password,salt);
}

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
  };