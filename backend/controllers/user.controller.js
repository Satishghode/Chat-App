
// this is an getUserFormSiderbar 
export const getUsersFormSidebar = (req, res,) => {
    try {
        console.log('call form getUsersFormSidebar');
        
    } catch (error) {
        console.log('error in getMessage controller', error.message);
        res.status(500).json({ error : " Internal server Error " });
    }
}