const{default : mongoose } = require('mongoose')

const userSchema = new mongoose.Schema(
    {
             userName : {type: String , required: true },
             email : {type: String , required :true , unique :true},
             password : {type : String , required : true},
             role : {type : String , default : 'user'},
             bookings :[{type : mongoose.Schema.Types.ObjectId, ref : 'Booking'}]
             
    }, {timestamps :  true}
  
)

const UserModal = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModal ;