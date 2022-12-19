const jwt = require("jsonwebtoken")
require("dotenv").config()

const {SECRET_KEY} = process.env;

const payload = {
    id: "63a0ac5f3ea6c176540d89fa"
}

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"})
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTBhYzVmM2VhNmMxNzY1NDBkODlmYSIsImlhdCI6MTY3MTQ3NTUyNSwiZXhwIjoxNjcxNTU4MzI1fQ._ikCBit-Fzn7f8t5LUeiN-zWlndFTOFZwksQIqUWhY4"
    const payload = jwt.verify(token, SECRET_KEY);
    jwt.verify(invalidToken, SECRET_KEY)
}
catch(error) {
    console.log(error.message);
}