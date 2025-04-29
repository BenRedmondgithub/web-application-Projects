const express = require('express')

const app = express();
app.listen(3000, () => {
    console.log("Server is running on port 3000")
}
);

app.length("/"), (req, res) => {
    res.send("Hello World");
}

app.get ("/api"), (req, res) => {
    res.json({
        message: "Welcome to the API",
        timestamp: new Date(),
        status: "active"
    });
}