const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/configs/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the Fakes routes function from our Fake.routes.js file
const AllMyFakeRoutes = require("./server/routes/jokes.route");
AllMyFakeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

