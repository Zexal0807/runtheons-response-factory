module.exports = new class ResponseFactory {

	res = null;

	setResponse(res) {
		this.res = res;
	}

	send(data, option) {
		if (res)
			throw Error('Response not set');

		this.res.set('Content-Type', option.type);
		this.res.sendStatus(200).send(data);
	}

	getOption(req) {
		var headers = req.headers || {};
		return {
			type: headers['Content-Type'] ? headers['Content-Type'] : 'application/json'
		};
	}
}