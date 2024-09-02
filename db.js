const mongoose=require('mongoose');

const connectDB= async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://bivekwangkhem6001:${process.env.DB_PASSWORD}@cluster0.nmk9s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=connectDB;