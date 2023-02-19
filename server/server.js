const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 4000;
const connectDB = require("./database/connect");
const morgan = require("morgan");
const cors = require("cors");
connectDB();

// Importing Routes

const blogRoutes = require("./routes/blog");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
    app.use(
        cors({
            origin: `${process.env.CLIENT_URL}`,
        })
    );
}

// API Middlewares

app.use("/api", blogRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
