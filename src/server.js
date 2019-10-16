import app from './app'
const { PORT } = process.env;

app.listen(PORT, async err => {
	if (err) console.log('error', err);
});

