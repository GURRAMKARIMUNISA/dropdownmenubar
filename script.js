let navbar=document.querySelector(".navbar");
// sidebaropen close js code
let menuOpenBtn=document.querySelector(".navbar .bi-list")
let closeOpenBtn=document.querySelector(".nav-links .bi-x")
let navLinks=document.querySelector(".nav-links");
menuOpenBtn.addEventListener("click",()=>{
    navLinks.style.left="0";
});
closeOpenBtn.addEventListener("click",()=>{
    navLinks.style.left="-100%";
});
//sidebar sub menuopen close js code
let htmlcssArrow=document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show1");
});
let moreArrow=document.querySelector(".more-arrow");
moreArrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show2");
});
let jsArrow=document.querySelector(".js-arrow");
jsArrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show3");
});