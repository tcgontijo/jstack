import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express(),
      port = 3001;
    app.listen(port, () => {
      console.log(`😎 Server is runnig on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar ao MongoDB'));
