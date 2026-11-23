import express from 'express';
const app = express();

app.get('/', (_req, res) => {
	res.json({ message: "Calendly API chal raha hai" });
});

app.get('/health' , (_req , res) => {
	res.json({
		status: "ok",
		time : new Date().toISOString()

	})
})

export default app;