import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


// sent message Functions user can sent the messages 
export const sentMessage = async (req, res) => {
    try {
        const {message} = req.body; // get the message from the request Object.
        const {id : receiverId   } = req.params; 
        const senderId = req.user._id;
        // it checks the receiverId and senderId present or not if it present the save the id 
        let conversation = await Conversation.findOne({
            participates : { $all: [senderId, receiverId] },
        })
        // if there is no conversation. then create th new conversation object
        if(!conversation){
            conversation = await Conversation.create({
                participates : [senderId, receiverId]
            });
        }
        // create the new message Object and stored in the newMessage object 
        const newMessage = new Message( {
            senderId ,
            receiverId,
            message,
        })
        //if there is messages present the add this messages.id in inside the conversation.messages 
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }



        // await conversation.save();
        // await newMessage.save();
        
        // Save the data at same time both models 
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage)
        
    } catch (error) {
        console.log('error in sendMessage Controller', error.message );
        res.status(500).json({ error : " Internal Server Error " })
    }
    
}