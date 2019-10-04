const navLinks = document.querySelectorAll('.nav-link'),
      paragraphs = document.querySelectorAll('p'),
      logoHeading = document.querySelector('.logo-heading'),
      container = document.querySelector('.home'),
      body = document.querySelector('body');
console.log(logoHeading);


let hue = 89;
let pFont = 1.6;
//BODY - DBLCLICK
body.addEventListener('dblclick', (e) => {
    body.style.backgroundColor = 'black';
})
//BODY - DBL CLICK

//text-content - KEYPRESS
    
 console.log(paragraphs);
 body.addEventListener('keypress',(e) => {
    paragraphs.forEach(p => {
        p.style.fontSize = `${pFont}rem`;
        
        console.log(pFont);
        if(pFont == 1.7000000000000002) {
            pFont = 1.6;
        } 

 })
 pFont += .01;
 
 })
 
//text-content - KEYPRESS


//CONTAINER - WHEEL
container.addEventListener('wheel', (e) => {
    
    container.style.backgroundColor = `hsl(${hue}, 100%, 95%)`
    hue+= 20;
    console.log(hue);
    
})
//CONTAINER - WHEEL



//NAVIGATION LINKS - MOUSEOVER
navLinks.forEach(link => {
    link.addEventListener('mouseover',(e) => {
        link.style.fontSize = '1.8rem';
    })

    link.addEventListener('mouseleave', (e) => {
        link.style.fontSize = '1.6rem';
    })
})
//NAVIGATION LINKS - MOUSEOVER

//LOGO HEADING - click
logoHeading.addEventListener('click', (e) => {
    logoHeading.style.fontFamily = "'Almarai', sans-serif";
    logoHeading.style.color = 'tomato';
    logoHeading.style.borderBottom = '2px solid crimson';
    logoHeading.style.backgroundColor = '#111';
    logoHeading.style.padding = '2% 0%';
})
//LOGO HEADING - click