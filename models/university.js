const mongoose = require("mongoose")
const unversitySchema = mongoose.Schema({
    University_Name:  {
        type: String,
        required: [true, "Name required"]
    },
    University_Location: String,
    Number_of_Courses_Offered: {
        type: Number,
        min: [10, "Min value is 10"],
        max: [400, "Max value is 400"]
    }
})
module.exports = mongoose.model("university",
    unversitySchema)