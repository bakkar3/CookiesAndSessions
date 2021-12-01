import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 5001;

app.use(cookieParser());
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "secret"
    })
);

app.get("/test", (req, res) => {
    res.send('this is an endpoint test');
});
 
app.listen(PORT, () => console.log(`API started on http://localhost:${PORT}`));
