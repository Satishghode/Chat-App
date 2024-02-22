import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next ) => {
    try {
        // get the cookies from the requestObject using the cookies parser.
        const token = req.cookies.jwt;
        // check the cookies available or not 
        if(!token ){
            return res.status(400).json({ error : " Unauthorized - No token Provided " });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // verify the token using verify method  

        if(!decoded){
            return res.status(401).json({ error : "Unauthorized - Invalid Token "  })
        }

        const user = await User.findById(decoded.userId).select("-password"); // find user inside the database using findById method if user is present in the database then return the user Object 

        // if the user is not Found then return the status code 401 and error message 
        if(!user){
            return res.status(401).json({ error : "User not Found ! "  })
        }
     
        req.user = user; // if all ok then sent the user to next method using requset Object 

        next(); // move to the next method 
        
    } catch (error) {
        console.log('error in protectRoute middleware', error.message );    
        res.status(500).json({ error : " Internal Server Error " })
    }
}

export default protectRoute;