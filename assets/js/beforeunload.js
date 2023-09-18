// 監聽 頁面關閉事件
$(document).mouseleave(function(e){
        window.onbeforeunload =  function () {
        window.onunload =  function () {
        alert('bye')
        }
        return '您確定要登出本系統？';
    }
});
$(document).mouseenter(function(e){
    window.onbeforeunload =  null
    window.onunload =  null
});