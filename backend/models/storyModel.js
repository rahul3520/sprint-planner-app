import mongoose from "mongoose";

const storySchema = mongoose.Schema({storyName:{type:String,required:true},storyPoint:{type:String,required:true}},{timestamps: true});

export const Story = mongoose.model('Story',storySchema);
