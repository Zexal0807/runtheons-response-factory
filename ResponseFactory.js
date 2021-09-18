module.exports = new(class ResponseFactory {
	FILE = "file";
	JSON = "application/json";
	REDIRECT = "redirect";

	res = null;

	setResponse(res) {
		this.res = res;
	}

	send(data, option) {
		if (this.res == null || this.res == undefined) {
			throw Error("Response not set");
		}

		this.res.status(200);

		switch (option.type) {
			case this.FILE:
				this.res.sendFile(data.data);
				break;
			case this.REDIRECT:
				this.res.redirect(data.data);
				break;
			case this.JSON:
			default:
				this.res.set("Content-Type", option.type);
				this.res.send(data);
				break;
		}
	}

	getOption(req) {
		var headers = req.headers || {};
		return {
			headers: req.headers,
			type: headers["Content-Type"] ? headers["Content-Type"] : this.JSON,
			req: req,
		};
	}
})();