const config = require('./config/config');
const http = require('http');
const db = require('./config/db');
const app = require('./app');
const { highlight } = require('./helper/utils');

console.log(config);

const server = http.createServer(app);
let port = config.port || 6001;

server.listen(port, () => {
	console.log(`Server started on port ${highlight(port, 33)}`)
	db.sync()
	.then(() => {console.log(`Successfully connected to ${highlight(config.db, 36, 47)}.`)})
	.catch(e => console.log(e))
})