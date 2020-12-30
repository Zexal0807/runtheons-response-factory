module.exports = class ResponseFactory {

    res = null;

    setResponse(res) {
        this.res = res;
    }

    send(data = {}, option = {}) {
        this.res.json(data);
    }

}