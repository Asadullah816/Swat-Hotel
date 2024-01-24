const hero_section= document.querySelector(".hero-section")
const nav_header=document.querySelector(".header-area");
const observer= new IntersectionObserver((entries)=>{ 
    const ent = entries[0];
    console.log(ent)
    ent.isIntersecting==false ? nav_header.classList.add("sticky") :
    nav_header.classList.remove("sticky");
 }, {
    root:null,
    rootMargin:"",
    threshold:"",
});

observer.observe(hero_section);

