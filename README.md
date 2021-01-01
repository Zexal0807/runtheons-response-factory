# runtheons-response-factory

This reposity manage the response of Runtheons BackEnd

# Usage
- [getOption](https://github.com/Zexal0807/runtheons-response-factory#getOption "getOption")
- [setResponse](https://github.com/Zexal0807/runtheons-response-factory#setResponse "setResponse")
- [getOption](https://github.com/Zexal0807/runtheons-response-factory#getOption "getOption")

## getOption

```js
Object getOption(Express.Request req)
```
It receive a Express.Request Return an a object contains the response option that need to pass to send method
If no option will found return an empty object

## setResponse

```js
void setResponse(Express.Response res)
```
It receive a Express.Response and set the response to send 

## send

```js
void send(Object data, Object option)
```
It receive two object and send the response usign the option and passing the data, if the response is not set throw an errro