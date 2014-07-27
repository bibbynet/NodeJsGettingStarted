import mongoose = require("mongoose");

module BF {

    var userSchema = new mongoose.Schema(
        {
            Name: { type: String, unique: true },
            Age: { type: Number },
            Birthday: { type: Date, default: Date.now() },
            IsRich: { type: Boolean }
        });

    export interface IUser extends mongoose.Document {
        Name: string;
        Age: number;
        Birthday: Date;
        IsRich: boolean;
    }

    export var UserRepository = mongoose.model<IUser>("User", userSchema);

}

export = BF;