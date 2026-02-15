const{default : mongoose} = require('mongoose')

const bookingSchema = new mongoose.Schema(
    {
        startDate : {type : String , required : true},
        endDate : {type :String , required :true},
        productName : {type: String, required : true},
        price : {type :Number , required : true},
        offer : {type :String},
        image : {type : String , required : true},
        user : {type:mongoose.Schema.Types.ObjectId ,ref : 'User'}

    }, {timestamps :  true}

)
const BookingModal = mongoose.models.Booking || mongoose.model('Booking' , bookingSchema);

export default BookingModal;