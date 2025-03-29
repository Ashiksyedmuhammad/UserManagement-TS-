import { User } from "./models/userSchema";
import { UserInterface,UserMethods } from "./interfaces";

export class UserServices implements UserMethods{
    public async newUser(user: UserInterface): Promise<UserInterface> {
        console.log(user);

        const newUserData = new User(user);
        return await newUserData.save()
    }
  async  getUserByEmail(email: string): Promise<UserInterface | null> {
    return await User.findOne({email})
   }
    public async getAllUser(): Promise<UserInterface[]> {
        return User.find();
    };
    public async updateUser(id: string, user: UserInterface): Promise<UserInterface | null> {
        const updateUserData = await User.findByIdAndUpdate(id,user,{new:true});
        return updateUserData;
    }
    public async deleteUser(id:string):Promise<UserInterface|null>{
        return User.findByIdAndDelete(id);
    }

    public async userDetails(id:string):Promise<UserInterface| null>{
        return await User.findById(id)
    }
}