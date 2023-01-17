const productModel=require('../model/product_model')

async function getAllProducts(){
    return await productModel.find()
}

async function getProductByPrice(price){
    return await productModel.findOne({price:price})
}

async function addNewproduct(name,price,quantity){
   await productModel.insertMany([{
        name:name,
        price:price,
        quantity:quantity
    }]);
    return `${name} Added successfully to database...`;
}

async function deleteaproduct(name){
    await productModel.deleteOne({name:name})
    return `${name} Deleted successfully from database...`;
}
module.exports={
    getAllProducts,
    getProductByPrice,
    addNewproduct,
    deleteaproduct
}