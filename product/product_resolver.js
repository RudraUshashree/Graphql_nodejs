const productController = require('./productGraphql_controller');

module.exports={
    Query:{
        product: ()=>{
           return productController.getAllProducts();
        },
        productByPrice: (_,args)=>{
             return productController.getProductByPrice(args.price);
        }
    },
    Mutation:{
        addproduct: (_,args)=>{
           return productController.addNewproduct(args.name,args.price,args.quantity);
        },
        deleteproduct:(_,args)=>{
            return productController.deleteaproduct(args.name)
        }
    }
}