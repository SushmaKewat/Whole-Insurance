import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './dbconnect/conn.js';
import router from './routes/router.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

const PORT = 8000;

dotenv.config({
	path: './.env',
});

connectDB();

/* const CORS_OPTIONS = {
	//allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
	origin: ['https://wholeinsurance.vercel.app', 'http://localhost:5172'],
	methods: ['GET', 'POST'],
	credentials: true,
	optionsSuccessStatus: 200,
};

//app.use(cors(CORS_OPTIONS));
app.options('*', cors(CORS_OPTIONS)); */

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* app.use(function (req, res, next) {
	//['http://localhost:5173', 'https://wholeinsurance.vercel.app/'];
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
 */
app.get('/', (req, res) => {
	try {
		return res.send('Welcome to the server');
	} catch (error) {
		console.log(error);
	}
});

//route splitting
app.use('/api/data', router);

app.get('*', (req, res) => {
	res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(PORT, () => {
	console.log(`The server is running on port ${PORT}`);
});
