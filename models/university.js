const mongoose = require("mongoose")
const unversitySchema = mongoose.Schema({
    University_Name: String,
    University_Location: String,
    Number_of_Courses_Offered: Number
})
module.exports = mongoose.model("university",
    unversitySchema)