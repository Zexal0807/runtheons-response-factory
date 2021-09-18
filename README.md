# runtheons-response-factory

This reposity manage the response using Express.Response

# Index

- [getOption](https://github.com/Zexal0807/runtheons-response-factory#getOption)
- [setResponse](https://github.com/Zexal0807/runtheons-response-factory#setResponse)
- [getOption](https://github.com/Zexal0807/runtheons-response-factory#getOption)
  - [JSON](https://github.com/Zexal0807/runtheons-response-factory#JSON)
  - [FILE](https://github.com/Zexal0807/runtheons-response-factory#FILE)
  - [REDIRECT](https://github.com/Zexal0807/runtheons-response-factory#REDIRECT)

# getOption

```js
Object getOption(Express.Request req)
```

It receive a Express.Request Return an a object contains the response option that need to pass to send method
If no option will found return an empty object

# setResponse

```js
void setResponse(Express.Response res)
```

It receive a Express.Response and set the response to send

# send

```js
void send(Object data, Object option)
```

It receive two object and send the response usign the option and passing the data, if the response is not set throw an error, in option you can set the type of the return:

## JSON

This is the default return, data object will return as JSON object

## FILE

With is option the return will be a file, `data` must be a string and it is the filepath

Example

```js
const ResponseFactory = require("@runtheons/response-factory");
...
//Make Response with responseOption
ResponseFactory.setResponse(res);
ResponseFactory.send("./image/logo.png", { type: ResponseFactory.FILE});
```

## REDIRECT

With is option the return will be a redirect, `data` must be a string and it is the url where redirect

Example

```js
const ResponseFactory = require("@runtheons/response-factory");
...
//Make Response with responseOption
ResponseFactory.setResponse(res);
ResponseFactory.send("/index", { type: ResponseFactory.REDIRECT});
```
