module.exports = new class ResponseFactory {

	res = null;

	setResponse(res) {
		this.res = res;
	}

	send(data, option) {
		if (this.res == null || this.res == undefined)
			throw Error('Response not set');

		this.res.status(200);
		this.res.set('Content-Type', option.type);
		this.res.send(data);
	}

	getOption(req) {
		var headers = req.headers || {};
		return {
			headers: req.headers,
			type: headers['Content-Type'] ? headers['Content-Type'] : 'application/json'
		};
	}
}