const express=require('express')
const path=require('path')
const {graphqlHTTP} = require('express-graphql')
const mongoose=require('mongoose')
const {makeExecutableSchema} = require('@graphql-tools/schema')
const {loadFilesSync}=require('@graphql-tools/load-files')

const PORT=process.env.PORT || 9000;
const app=express();
app.use(express.json());

const typesarr=loadFilesSync(path.join(__dirname,'**/*.graphql'))
const resolvearr=loadFilesSync(path.join(__dirname,'**/*resolver.js'))
const schema=makeExecutableSchema({
    typeDefs:typesarr,
    resolvers: resolvearr
    }    
);

mongoose.set('strictQuery', true);
const dburl = 'mongodb+srv://Ushashree:usha@cluster0.8pw2ran.mongodb.net/graphqlDB?retryWrites=true&w=majority';

mongoose.connect(dburl, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => console.log('Database is connected...'))
    .catch(err => console.log(err));


app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql:true
}))
    

app.listen(PORT, ()=>{
    console.log(`Server is running on port...${PORT}`);
});

