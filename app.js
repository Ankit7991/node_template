const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const expressValidation = require('express-validation');
const httpStatus = require('http-status');
const APIError = require('./helper/APIError');
const routes = require('./route');
const fs = require('fs');
// require('./cronjob');

dotenv.config();

const app = express();

// set morgan logs onto the server...
app.use(logger(`\x1b[37m\x1b[7m :date \x1b[0m \x1b[33m\x1b[1m:status\x1b[0m \x1b[2m:url\x1b[0m \x1b[1m\x1b[33m:method\x1b[0m :res[content-length] - :response-time ms`));

// set body parser...
app.use(bodyParser.urlencoded({
	limit: "50mb",
	extended: false
}));
app.use(bodyParser.json({ limit: "50mb" }));

// set cors...
app.use(cors());

// set helmet to protect server from malicious attacks...
app.use(helmet());
// app.use('upload/', express.static(__dirname + 'documents'));

// declare all the routes...
app.use('/api', routes);

app.use((err, req, res, next) => {
	console.log(`Internal server error: `, err);
	if (err instanceof expressValidation.ValidationError) {
		// validation error contains errors which is an array of error each containing message[]
		const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
		const error = new APIError(unifiedErrorMessage, err.status, true);
		return next(error);
	} else if (!(err instanceof APIError)) {
		const apiError = new APIError(err.message, err.status, err.name === 'UnauthorizedError' ? true : err.isPublic);
		return next(apiError);
	}
	return next(err);
});

app.use((req, res, next) => {
	const err = new APIError('API Not Found', httpStatus.NOT_FOUND, true);
	return next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status).json({
		error: {
			message: err.isPublic ? err.message : httpStatus[ err.status ],
		}
	});
}
);


module.exports = app;
