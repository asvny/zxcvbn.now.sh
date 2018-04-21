const zxcvbn = require('zxcvbn');
const { json } = require('micro');
const cors = require('micro-cors');

async function handler(req, res) {
	let { password } = await json(req);

	if(!password) {
		return {
			error: 'Empty value for "password" field'
		};
	}

	let response = zxcvbn(password);

	return response;
}


module.exports = cors({ allowMethods: ['POST'] })(handler);