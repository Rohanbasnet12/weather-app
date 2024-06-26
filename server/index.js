import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.json({
        "users": [
            "userOne",
            "userTwo",
            "userThree",
        ]
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})