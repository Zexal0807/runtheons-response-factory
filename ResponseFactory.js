module.exports = class ResponseFactory {

    res = null;

    constructor(res) {
        this.res = res;
    }

    send(data = {}, option = {}) {
        this.res.json(data);
    }

}