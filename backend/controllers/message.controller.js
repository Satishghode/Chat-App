import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sentMessage = async (req, res) => {
    try {
        const {message} = req.body; // get the message from the request Object.
        const {id : receiverId   } = req.params; 
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participates : { $all: [senderId, receiverId] },
        })

        if(!conversation){
            conversation = await Conversation.create({
                participates : [senderId, receiverId]
            });
        }

        const newMessage = new Message( {
            senderId ,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await conversation.save();
        await newMessage.save();

        res.status(201).json(newMessage)
        
    } catch (error) {
        console.log('error in sendMessage Controller', error.message );
        res.status(500).json({ error : " Internal Server Error " })
    }
    
}