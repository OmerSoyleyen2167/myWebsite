const headerMobileButton = document.getElementById("header-mobile-button")
const headerList = document.getElementById("header-list")
const headerMobileCloseButton = document.getElementById("header-mobile-close")

headerMobileButton.addEventListener("click", function(){
    headerMobileButton.style.display = "none";
    headerList.style.visibility = "visible";
})

headerMobileCloseButton.addEventListener("click",function(){
    headerMobileButton.style.display = "inline-block";
    headerList.style.visibility = "hidden";
})