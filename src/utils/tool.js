/* eslint-disable no-unused-expressions */
function isString (obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
let tool = {
    showTime: function (datetime) {
        let show_day = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        let todaynum = new Date().getTime();
        let datenum = new Date(datetime).getTime();
        let isToday = (todaynum - datenum < 86400000) && (todaynum - datenum > 0);
        let isTomorrow = (datenum - todaynum < 86400000) && (datenum - todaynum > 0);
        let isAcquired = (datenum - todaynum < 86400000 * 2) && (datenum - todaynum > 86400000);
        let time = new Date(datetime);
        let month = time.getMonth();
        let date = time.getDate();
        let day = time.getDay();
        month = month + 1;
        month < 10 ? month = '0' + month : month;
        if (isToday) {
            return '今天' + month + '月' + date + '日';
        } else if (isTomorrow) {
            return '明天' + month + '月' + date + '日';
        } else if (isAcquired) {
            return '后天' + month + '月' + date + '日';
        } else {
            return show_day[day] + month + '月' + date + '日';
        }
    },
    handleImg: function (url) {
        return url.replace(/w.h/g, '128.180');
    },
    formatDate: function (dateTime, fmt) { // author: meizz
        var isStr = isString(dateTime);
        if (dateTime !== undefined && dateTime !== '' && dateTime !== null) {
            var time = dateTime;
            if (isStr) {
                time = new Date(dateTime.replace(/-/g, '/'));
            } else {
                time = new Date(dateTime);
            }
            var o = {
                'M+': time.getMonth() + 1, // 月份
                'd+': time.getDate(), // 日
                'h+': time.getHours(), // 小时
                'm+': time.getMinutes(), // 分
                's+': time.getSeconds(), // 秒
                'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
                'S': time.getMilliseconds() // 毫秒
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
                }
            }
            return fmt;
        } else {
            return '';
        }
    }
}
module.exports = tool;