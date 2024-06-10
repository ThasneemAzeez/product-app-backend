const mongoose=require("mongoose")
const scheema = mongoose.Schema({
    "producttitle":"",
    "productcode":"",
    "description":"",
    "price":"",
    "brand":"",
    "manufacturingdate":"",
    "expirydate":""


})

let productmodel=mongoose.model("products",scheema);
module.exports={productmodel}