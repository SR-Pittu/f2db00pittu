const mongoose = require("mongoose")
const unversitySchema = mongoose.Schema({
    University_Name:  {
        type: String,
        required: [true, "Name required"]
    },
    University_Location: String,
    Number_of_Courses_Offered: {
        type: Number,
        min: [50, "Min value is 50"],
        max: [600, "Max value is 600"]
    }
})
module.exports = mongoose.model("university",
    unversitySchema)