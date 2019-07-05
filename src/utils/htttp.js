import axios from 'axios';

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
            }).catch(function (error) {
                alert('发生错误,请检查网络设置或联系技术人员');
            }).then(function () {
            });
        });
    }
}

export default Api;