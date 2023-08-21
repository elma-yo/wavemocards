const home = document.getElementById("home");
const profile = document.getElementById("profile");
const logout = document.getElementById("logout");

home.addEventListener("mouseover", function() {
    home.title = "點我回到首頁";
});
profile.addEventListener("mouseover", function() {
    profile.title = "管理我的帳戶";
});
logout.addEventListener("mouseover", function() {
    logout.title = "登出";
});