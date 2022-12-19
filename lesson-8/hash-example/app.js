const bcrypt = require("bcrypt")

const hashPassword = async(password) => {
    // const salt = await bcrypt.genSalt(10)
    // console.log(salt);
    const result = await bcrypt.hash(password, 10);
    // console.log(result);
    const result1 = await bcrypt.compare(password, result)
    console.log(result1);
    const result2 = await bcrypt.compare("123457", result)
    console.log(result2);
}

hashPassword("123456")