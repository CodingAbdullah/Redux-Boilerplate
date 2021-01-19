require("dotenv").config({ path: '.env' });

const express = require("express");
const app = express();
const basicRouter = require("../backend/routes/basicRouter");

// Activate PORT
app.listen(process.env.PORT, () => {
    console.log("Listening to PORT" + process.env.PORT);
});

// Use middleware
app.use(express.json());
app.use("/", basicRouter);






