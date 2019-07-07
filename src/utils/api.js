import axios from 'axios';
function toFormData(obj) {
    var query = '';
    var name, value, fullSubName, subName, subValue, innerObj, i;

    for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
            for (i = 0; i < value.length; ++i) {
                subValue = value[i];
                fullSubName = name;
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += toFormData(innerObj) + '&';
            }
        } else if (value instanceof Object) {
            for (subName in value) {
                subValue = value[subName];
                fullSubName = name + '[' + subName + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += toFormData(innerObj) + '&';
            }
        } else if (value !== undefined && value !== null) {
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
    }
    return query.length ? query.substr(0, query.length - 1) : query;
}
let Api = {
    get: function (url, params, successCallback, errorCallback) {
        params['random'] = Math.floor(Math.random() * (100000 + 1));
        return new Promise(function (resolve, reject) {
            axios.get('https://bird.ioliu.cn/v2/?url=http://m.maoyan.com' + url, {
                params: params
            }).then(function (res) {
                if (res.status === 200) {
                    successCallback(res.data);
                } else {
                    if (errorCallback && errorCallback instanceof Function) {
                        reject(res);
                        errorCallback(res.data.message);
                    }
                }
            }).then(function () {
            });
        });
    },
    post: function (url, params, successCallback, errorCallback) {
        params['random'] = Math.floor(Math.random() * (100000 + 1));
        return new Promise(function (resolve, reject) {
            axios.post('https://bird.ioliu.cn/v2/?url=http://m.maoyan.com' + url, params, {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                transformRequest: [function (data) {
                    return typeof data === 'object' && String(data) !== '[object File]' ? toFormData(data) : data;
                }]
            }).then(function (res) {
                if (res.status === 200) {
                    successCallback(res.data);
                } else {
                    if (errorCallback && errorCallback instanceof Function) {
                        reject(res);
                        errorCallback(res.data.message);
                    }
                }
            }).then(function () {
            });
        });
    }
}

export default Api;