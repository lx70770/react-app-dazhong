/*使用localStorage*/
export default {
    getItem: function (key) {
            return localStorage.getItem(key);
    },
    setItem: function (key, value) {
            // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            localStorage.setItem(key, value)
    }
}