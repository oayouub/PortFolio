const nav = document.querySelector("nav");
const topbtn = document.querySelector(".topbtn");
const about = document.getElementById('about');
const project = document.getElementById('project');
const contact = document.getElementById('contact');

let lastScroll = 0;

//nav dynamique
window.addEventListener('scroll', (e)=>{
    
    if(window.scrollY < lastScroll){
        nav.style.top = 0;
    }else{
        nav.style.top = "-60px";
    }
    lastScroll = window.scrollY;

});
//boutton remonter la page
window.addEventListener('scroll', (e)=>{
    
 
    if(window.scrollY < 1){
        topbtn.style.opacity = '0';
    }else{
        topbtn.style.opacity = '100';
    }
});
topbtn.addEventListener('click',(e)=>{
window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
})
})
about.addEventListener('click',(e)=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
    });
project.addEventListener('click',(e)=>{
    window.scrollTo({
        top:1400,
        left:0,
        behavior: "smooth"
    })
})
competence.addEventListener('click',(e)=>{
    window.scrollTo({
        top:730,
        left:0,
        behavior: "smooth"
    })
})
contact.addEventListener('click',(e)=>{
    window.scrollTo({
        top:1700,
        left:0,
        behavior: "smooth"
    })
})
btnContact.addEventListener('click',(e)=>{
    window.scrollTo({
        top:1700,
        left:0,
        behavior: "smooth"
    })
})
// galerie filtre
 window.onload = ()=>{
    let filters = document.querySelectorAll('.filtre li');

    for(let filter of filters){
        filter.addEventListener('click',function(){
            let tag = this.id;
            
            let images = document.querySelectorAll('#galerie li');
            for(let image of images){
                image.classList.replace("active", "inactive");
                if(tag in image.dataset || tag === "tout"){
                    image.classList.replace('inactive','active');
                }
            }
        })
    }
 }
//  text appear
// window.onload = ()=>{
//     let txtsApear = document.querySelectorAll('#txtApear')

//     for(let txtApear of txtsApear){
//         window.addEventListener('click',(e)=>{
//             if(window.scrollY > 0){
                
//                 txtApear.style.opacity ="1";
//                 txtApear.style.transform = 'translateY(0)';
//               console.log(window.scrollY);
//             }
//         })
//     }
// }