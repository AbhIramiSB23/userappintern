const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://abhiramisb2004:CuCVhG68xCD9MKfD@cluster0.dfaltiw.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB connected')
}).catch((res)=>{
    console.log("DB not connected");
});