import { serialize, addURLData, serializeJSON } from "./utils.js";
const HTTP_GET = "GET";
const HTTP_POST = "POST";
const CONTENT_TYPE_FORM_URLENCODED = 'application/x-www-form-urlencoded';
const CONTENT_TYPE_JSON = 'application/json';
// import (serialize)
const DEFAULTS = {
    method: HTTP_GET,
    // 请求头携带的数据
    params: null,
    // 请求体携带数据
    data: null,
    contentType: CONTENT_TYPE_FORM_URLENCODED,
    responseType: '',
    timeoutTime: 0,
    withCredentials: false,

    success() { },
    httpCodeError() { },
    error() { },
    abort() { },
    timeout() { }
}
// Ajax类
class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);
        console.log(this.options);
        this.init();
    }

    // 初始化
    init() {
        const xhr = new XMLHttpRequest();
        this.xhr = xhr;

        this.bindEvents();

        xhr.open(this.options.method, this.url + this.addParam(), true);
        this.setResponseType();
        this.setCookie();
        this.setTimeout();
        this.sendData();
        
    }
    // 事件监听
    bindEvents() {
        const xhr = this.xhr;
        const { success, httpCodeError, error, abort, timeout } = this.options;
        xhr.addEventListener('load', () => {
            if (this.ok()) {
                // console.log(xhr.response);
                success(xhr.response, xhr);
            } else {
                httpCodeError(xhr.status, xhr);
            }
        }, false);
        // 当请求遇到错误时，将触发ERROR事件
        xhr.addEventListener('error', () => {
            error(xhr);
        }, false);
        xhr.addEventListener('abort', () => {
            abort(xhr);
        }, false);
        xhr.addEventListener('timeout', () => {
            timeout(xhr);
        }, false);
    }
    // 检测响应的HTTP状态码是否正常
    ok() {
        const xhr = this.xhr;
        return ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304);
    }
    // 在地址上添加数据
    addParam() {
        const { params } = this.options;
        if (!params) return '';
        return addURLData(this.url, serialize(params));

    }
    setResponseType() {
        this.xhr.responseType = this.options.responseType;
    }
    setCookie() {
        if (this.withCredentials) {

            this.xhr.withCredentials = this.options.withCredentials;
        }

    }
    setTimeout() {
        const { timeoutTime } = this.options;
        if (timeoutTime > 0) {

            this.xhr.timeout = timeoutTime;
        }
    }
    // 发送请求
    sendData() {
        const xhr = this.xhr;
        if (!this.isSendData()) {
            return xhr.send(null);
        }
        let resultData = null;
        if (this.isFormData()) {
            resultData = this.options.data;
        } else if (this.isFormURLEncodedData()) {
            // 发送application/x-www-form-urlencoded格式的数据
            this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
            resultData = serialize(this.options.data);
        } else if (this.isJSONData()) {
            this.setContentType(CONTENT_TYPE_JSON);
            resultData = serializeJSON(this.options.data);
        } else {
            // 发送其他数据的格式
            this.setContentType();
            resultData = this.options.data;
        }

        xhr.send(resultData);
    }
    // 是否需要使用send发送数据
    isSendData() {
        const { data, method } = this.options;
        if (!data) {
            return false;
        }
        if (method.toLowerCase() === HTTP_GET.toLowerCase()) {
            return false;
        }
        return true;
    }
    // 是否发送FormData格式的数据
    isFormData() {
        // 判断data数据是否是FromData格式
        return this.options.data instanceof FormData;
    }
    isFormURLEncodedData() {
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED);
    }
    isJSONData() {
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
    }
    // 设置Content-Type
    setContentType(contentType = this.options.contentType) {
        if (!contentType) return;
        this.xhr.setRequestHeader('Content-Type',contentType);
    }
    // 获取XHR对象
    getXHR(){
        return this.xhr;
    }
} 
// export {getXHR};
export default Ajax;