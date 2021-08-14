const httpStatus = require('http-status');

class response {
	constructor(status, data, success, _private) {
		this.status = typeof status === 'number' ? status : httpStatus[status || 'INTERNAL_SERVER_ERROR'];
		if (success){
			this.data = data;
		} else {
			this.error = {
				message: data
			};
		}
		this.success = Boolean(success);
		this.private = Boolean(_private);
	}
}


module.exports = response;