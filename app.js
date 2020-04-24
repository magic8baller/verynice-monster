const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('HELLO world');
});
app.get('/test', (req, res) => {
	res.status(418).send('YASS I WORK')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}~`));
