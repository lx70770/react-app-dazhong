import 'whatwg-fetch';
import 'es6-promise';

//抽象post方法，传入的请求值是一个对象时，将该对象转化成 fetch 需要的字符

function ObjtoParams(obj) {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result =result.slice(1);
    }
    return result;
}

//发送post请求
export default function post(url, paramsObj) {
    let result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: ObjtoParams(paramsObj)
    })
}