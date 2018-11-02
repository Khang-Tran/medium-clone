import app from '../../app';

const port = process.env.TEST_PORT || 4444;

app.listen(port, () => console.log(`Test server is listening on ${port}`));
