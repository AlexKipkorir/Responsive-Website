let hamburger =document.querySelector(".header .nav-bar .nav-list .hamburger");
let mobile_menu=document.querySelector(".header .nav-bar .nav-list ul");
let mobile_menu_item=document.querySelector(".header .nav-bar .nav-list ul li a");
let header=document.querySelector(".header .container");

hamburger.addEventListener("click",()=>{
 hamburger.classList.toggle("active");
 mobile_menu.classList.toggle("active");
}
);

// document.addEventListener("scroll", () =>{
//     var scroll_position = window.scrollY;
//     if(scroll_position > 250){
//         header.style .backgroundColor == "#29323c";
//     }
//     else{
//         header .style .backgroundColor == "transparent"
//     }
// });

mobile_menu_item.forEach = (item=>{
    item.addEventListener("click", ()=>{
        hamburger.classList.toggle("active");
        mobile_menu.classList.toggle("active");

    })
})









// let hamburger =document.querySelector(" .header .nav-bar .nav-list .hamburger");
// let mobile_menu =document.querySelector(" .header .nav-bar .nav-list .ul");
// let btn =hamburger.querySelector(" .header .nav-bar .nav-list .hamburger .fa-bars");



// hamburger.onclick = function () {
//      if(
//         hamburger.classList.contains("fa-bars")){
//             hamburger.classList.replace("fa-bars", "fa-times");

//         }
//         else{
//             hamburger.classList.replace("fa-times", "fa-bars")
//         }


     



// }