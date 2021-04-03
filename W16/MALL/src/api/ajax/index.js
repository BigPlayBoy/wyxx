import Ajax from './Ajax.js';
import {
    ERROR_HTTP_CODE, ERROR_HTTP_CODE_TEXT,
    ERROR_REQUST, ERROR_REQUST_TEXT,
    ERROR_TIME_OUT, ERROR_TIME_OUT_TEXT,
    ERROR_ABORT, ERROR_ABORT_TEXT
} from './constants.js'
// import {getXHR} from './Ajax.js';
const ajax = (url, options) => {
    // 使用Promise修改我们封装好的Ajax
    let xhr;
    const p = new Promise((resolve, reject) => {
        xhr = new Ajax(url, {
            ...options,
            ...{
                success(response) {
                    resolve(response);
                },
                httpCodeError(status) {
                    reject({
                        type: ERROR_HTTP_CODE,
                        text: `${ERROR_HTTP_CODE_TEXT}:${status}`
                    })
                },
                error() {
                    reject({
                        type: ERROR_REQUST,
                        text: `${ERROR_REQUST_TEXT}`
                    })
                },
                abort() {
                    reject({
                        type: ERROR_ABORT,
                        text: `${ERROR_ABORT_TEXT}`
                    })
                },
                timeout() {
                    reject({
                        type: ERROR_TIME_OUT,
                        text: `${ERROR_TIME_OUT_TEXT}`
                    })
                }

            }
        }).getXHR();
    });
    p.xhr = xhr;
    p.ERROR_HTTP_CODE = ERROR_HTTP_CODE;
    p.ERROR_REQUST    = ERROR_REQUST;
    p.ERROR_TIME_OUT  = ERROR_TIME_OUT;
    p.ERROR_ABORT     = ERROR_ABORT;
    return p;
    // return new Ajax(url, options).getXHR();
}
const get = (url, options) => {
    return  ajax(url, { ...options, method: "GET" });
}
const getJSON = (url, options) => {
    return ajax(url, { ...options, method: "GET", responseType: "json" });
}
const post = (url, options) => {
    return  ajax(url, { ...options, method: "POST" });
}
export { ajax, get, getJSON, post }