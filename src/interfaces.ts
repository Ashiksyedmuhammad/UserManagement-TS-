export interface UserInterface {
    _id?:String;
    first_name : string;
    last_name : string;
    email : string;
    phone : Number;
};

export interface UserMethods{
    newUser(user:UserInterface):Promise<UserInterface>;
    getUserByEmail(email : string):Promise<UserInterface| null>
    getAllUser():Promise<UserInterface[]>;
    updateUser(id:String, user:UserInterface):Promise<UserInterface|null>;
    deleteUser(id:String):Promise<UserInterface|null>;
    userDetails(id:String):Promise<UserInterface|null>;
}