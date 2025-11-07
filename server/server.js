const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
);

//Making call to open ai to fetch questions
app.post('/api/questions', async (req, res) => {});

app.post('/api/evaluate', async (req, res) => {});

app.listen(PORT, () => {
    console.log('server is running on port 5000 ');
});
