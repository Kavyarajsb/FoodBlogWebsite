const mongoose = require('mongoose') //db
mongoose.connect('mongodb+srv://Kavyarajsb2000:kavya2000@cluster0.hlvfkab.mongodb.net/BlogWebsite?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})


