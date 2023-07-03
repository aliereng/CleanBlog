const mongoose = require("mongoose")
const connectDb = async() => {
    try{
        mongoose.connect("mongodb+srv://<username>:<password>@cluster0.o1smq.mongodb.net/clean-blog?retryWrites=true&w=majority");
        console.log("veritabanı bağlantısı başarılı");
    }
    catch(err){
        console.error("veritabanı bağlantısı sırasında hata. hata: "+ err);
    }
}
module.exports = connectDb;