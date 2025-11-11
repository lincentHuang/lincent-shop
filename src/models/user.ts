import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: "Please enter your full name." },
    email: {
      type: String,
      required: true,
      error: "Please enter your email address.",
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: "please enter your password.",
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    image: {
      type: String,
      default:
        "https://plus.unsplash.com/premium_photo-1683147746302-f5d920cede15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    },
    emailVerified: { type: Boolean, default: false },
    defaultPaymentMethod: { type: String },
    addresses: [
      {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
          required: true,
        },
        address1: {
          type: String,
          required: true,
        },
        address2: {
          type: String,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        active: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
