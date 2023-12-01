import express from 'express';
import loaderApp from './app';

const app = express();

// Load App
loaderApp(app);

app.listen(3000, () => {
  console.log(`Server listen on PORT 3000`);
});

export default app;
