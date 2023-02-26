let express = require("express");
let app = express();
let port = 3000;
app.use(express.static("public"));




app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');;
});

app.get("/projects", (req, res) => {
    res.sendFile(__dirname + '/projects.html');;  
});

app.listen(port, () => {
    console.log("Listening...");
});