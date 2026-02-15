const{default : mongoose} = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        title : {type : String , required : true},
        price : {type : Number , required : true},
        offer : {type : String},
        amen : {type : String , default : ['AC','Gyser','wifi','Tv', 'elevator']},
        desc : {type : String , required : true},
        image : {type : String , required : true}

    }, {timestamps :  true}
)

const ProductModel = mongoose.models.products || mongoose.model('products' , productSchema)

export default ProductModel ;