import express from 'express';
 
const app = express();
const PORT = 5001;
 
app.get("/test", (req, res) => {
    res.send('this is an endpoint test');
});
 
app.listen(PORT, (req, res) => {
    console.log(`API listening on port ${PORT}`);
});
