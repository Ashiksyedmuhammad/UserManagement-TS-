import mongoose,{Schema,Document} from "mongoose";
import {UserInterface} from '../interfaces';

const userSchema : Schema = new mongoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name :{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phone:{
        type:Number,
        required : true
    }
});


export const User = mongoose.model<UserInterface>('User',userSchema);