import mongoose from 'mongoose';

const userSignUpSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: String,
        default: () => {
            return new Date().toLocaleString()
        }
    },
    updatedAt: {
        required: false,
        type: String
    },
    displayName: {
        required: false,
        type: String,
    }
})

userSignUpSchema.pre('save', function(next) {
    if (!this.displayName) {
        this.displayName = this.username;
    }
    next();
});

export const User = mongoose.model("UserSignUp", userSignUpSchema) 