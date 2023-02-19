const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("DB Connected successfully!"))
        .catch((error) => console.log(error));
};

module.exports = connectDB;
