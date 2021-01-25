require("dotenv").config({ path: '.env' });

const express = require("express");
const app = express();
const basicRouter = require("../backend/routes/basicRouter");
const cors = require("cors");

// Activate PORT
app.listen(process.env.PORT, () => {
    console.log("Listening to PORT " + process.env.PORT);
});

// Use Middleware
app.use(express.json());

// Enable Cross-Origin-Resource-Sharing (CORS)
app.use(cors());
app.use("/", basicRouter);