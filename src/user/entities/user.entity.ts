import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Exclude } from "class-transformer";

@Schema({
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})
export class User extends Document{
    @Prop()
    firstName: string;

    @Prop({
        type: 'string',
    })
    lastName: string;

    @Prop({
        type: 'String',
        unique:true
      })
      email: string;
    
      @Prop({
        type: 'String',
      })
      @Exclude()
      password: string;

    @Prop({
        type: 'Number',
        description: '0:deleted, 1:active',
        default: 0,
    })
    status: number;
}

export type UserType = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);