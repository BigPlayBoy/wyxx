// 写入Cookie
export const set = (name, value, { maxAge, domain, path, secure } = {}) => {
    console.log("");
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    }
    if(domain){
        cookieText+=`; domain=${domain}`;
    }
    if(path){
        cookieText+=`; path=${path}`;
    }
    if(secure){
        cookieText+=`; secure`;
    }
    console.log(cookieText);
    document.cookie=cookieText;
    return ;
}
// 通过name获取cookie的值
export const get=name=>{
    name=`${encodeURIComponent(name)}`;

   const cookies= document.cookie.split('; ');
   for(const item of cookies){
       const [cookieName,cookieValue]=item.split('=');
       if (cookieName===name){
           return decodeURIComponent(cookieValue);
       }
   }
   return ;
};
export const remove =(name,{domain,path}={})=>{
set(name,' ',{domain,path,maxAge:0});
}