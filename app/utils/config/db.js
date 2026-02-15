const {default : mongoose} = require('mongoose');

const DBConnection = async () => {

    try {
        await mongoose.connect(process.env.Mongo_URi);
        console.log("Db connected succesfully");
        
    } catch (error) {

       console.log(`Error was there ${error} `);   
        
    }
}
export default DBConnection;