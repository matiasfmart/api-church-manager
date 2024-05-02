import express from 'express';
import authRouter from './src/routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = 3000;

app.listen(PORT, () => {
    console.log('ready');
});

// app.get('/', (req, res) => {
//     res.json({ok : 'hello'})
// })
app.use(express.json());
app.use("/api/v1", authRouter);