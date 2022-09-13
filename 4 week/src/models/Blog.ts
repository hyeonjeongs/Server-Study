import mongoose from "mongoose";
import { BlogInfo } from "../interfaces/blog/BlogInfo";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        title: { type: String },
        subTitle: { type: String },
        type: { type: String },
    }

});

export default mongoose.model<BlogInfo & mongoose.Document>("Blog", BlogSchema);