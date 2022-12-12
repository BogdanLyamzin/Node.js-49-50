const mongoose = require("mongoose")

const app = require('./app')

const {DB_HOST, PORT = 3000} = process.env;

// (async()=>{
//   try {
//     await mongoose.connect(DB_HOST);
//     app.listen(3000)
//   }
//   catch(error) {
//     console.log(error.message);
//     process.exit(1)
//   }
// })()

// const connectDatabase = async() => {
//   try {
//     await mongoose.connect(DB_HOST);
//     app.listen(3000)
//   }
//   catch(error) {
//     console.log(error.message);
//     process.exit(1)
//   }
// }

// connectDatabase()

mongoose.connect(DB_HOST)
  .then(()=> app.listen(PORT))
  .catch(error => {
    console.log(error.message);
    process.exit(1)
  })

