const mongoose = require("mongoose");
const url = `${process.env.DATABASE_PROVIDER}://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`;

mongoose.connect(url, { 'useNewUrlParser': true })
.then((db) => {
    console.log("######MongoDb Connection created successfully.######");
}).catch((err)=>{
    console.log(err);
})