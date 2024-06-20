import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Story } from './models/storyModel.js'; 
import cors from "cors";

const app = express();

app.use(express.json(),cors());

app.post('/add/story', async(request,response) =>{

    try{
        
        if( !request.body.storyName ||
            !request.body.storyPoint
        ){
            return response.status(400).send({message: "Send all the required fields - story Name and story Point"});
        }

        const story = {
            storyName: request.body.storyName,
            storyPoint: request.body.storyPoint,
        };

        const newStory = await Story.create(story);

        return response.status(201).send(newStory);

    }catch(error){

        console.log(error.message);
        return response.status(500).send({message: error.message});
    }
});

app.get('/fetch/stories',async(request,response)=>{

    try{

        const stories = await Story.find();

        if(!stories.length){
            return response.status(404).send({message: "No user stories found"});
        }

        return response.status(201).send(stories);

    }catch(error){

        console.log(error.message);
        return response.status(500).send({message: error.message});
    }

});

app.delete('/delete/story/:storyId', async(request,response)=>{

    try{

        const { storyId } = request.params;

        const result = await Story.findByIdAndDelete(storyId);

        if(!result){
            return response.status(400).json({message: "User Story not found"});
        }

        return response.status(200).send({message:"User story deleted successfully"});

    }catch(error){

        console.log(error.message);
        return response.status(500).send({message: error.message});
    }

});

app.delete('/delete/stories', async(request,response)=>{

    try{

        const result = await Story.deleteMany();

        if(result.deletedCount>0){

            return response.status(200).send({message:"All user stories are deleted from sprint!"});
        }

        return response.status(400).json({message:"Sprint is empty, Nothing to delete"});

    }catch(error){

        console.log(error.message);
        return response.status(500).send({message:error.message});
    }
});

mongoose
    .connect(mongoDBURL,{
        autoIndex: true,
    })
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is running on PORT : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
    



