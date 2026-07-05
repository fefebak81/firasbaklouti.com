// Reveal animations
const revealElements = document.querySelectorAll(
".section h2,.section-intro,.card,.method-step,.case-study,.contact-form"
);

revealElements.forEach(el=>el.classList.add("reveal"));

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
},{threshold:.15});

revealElements.forEach(el=>observer.observe(el));

// Navbar shrink
const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.padding="8px 22px";
navbar.style.background="rgba(8,8,8,.92)";
navbar.style.boxShadow="0 20px 50px rgba(0,0,0,.35)";

}else{

navbar.style.padding="12px 22px";
navbar.style.background="rgba(10,10,10,.72)";
navbar.style.boxShadow="none";

}

});
