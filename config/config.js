require('dotenv').config();

let env = process.env;
let isProd = ['prod', 'production'].includes((env.env || env.mod)?.toLocaleLowerCase());
let config = {
	port: env.dev_port || 5001,
	db: env.dev_db,
	db_user: env.dev_db_user,
	db_pass: env.dev_db_pass
}


if (isProd){
	config = {
		port: env.prod_port || 6001,
		db: env.prod_db,
		db_user: env.prod_db_user,
		db_pass: env.prod_db_pass
	}
}

console.log(`Server is starting in ${isProd ? 'Production mode.' : 'Development mode. To start production mode use \x1b[31m\x1b[7m mod=prod npm start \x1b[0m'}`);

module.exports = config;