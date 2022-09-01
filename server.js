import express from 'express';
const PORT = 1337;
const app = express();

app.get('/login', (req, res) => {
  res.send('hello derrrrrr');
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
