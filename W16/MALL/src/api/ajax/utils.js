// 工具函数
const serialize = function (params) {
    const results = [];
    for (const [key, value] of Object.entries(params)) {
        results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);

    }
    return results.join("&");
}
const serializeJSON = function (params) {
    return JSON.stringify(params);
}
const addURLData=(url,data)=>{
    if(!data) return '';
    const mask=url.includes("?")?'&':'?';
    return `${mask}${data}`;
}

export {serialize,addURLData,serializeJSON};