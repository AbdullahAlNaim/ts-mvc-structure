const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.get('/', (req: any, res: any) => {
  res.send('hello world');
})

app.listen(port, () => {
  console.log(`listening to port ${port}`);
})