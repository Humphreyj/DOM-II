const navLinks = document.querySelectorAll('.nav-link'),
      header = document.querySelector('header'),
      paragraphs = document.querySelectorAll('p'),
      buttons = document.querySelectorAll('button'),
      logoHeading = document.querySelector('.logo-heading'),
      textArea = document.querySelector('textarea'),
      contact = document.querySelector('.contact'),
      inputs = document.querySelectorAll('input'),
      submit = document.querySelector('.btn'),
      container = document.querySelector('.home'),
      body = document.querySelector('body'),
      footer = document.querySelector('footer');
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

//BODY - LOAD
adventure.addEventListener('load',(e) => {
    alert('Funs Bus loaded up!');
})
//BODY - LOAD
//BODY - WHEEL
body.addEventListener('wheel', (e) => {
    
    container.style.backgroundColor = `hsl(${hue}, 100%, 95%)`
    header.style.backgroundColor = `hsl(${hue}, 100%, 95%)`
    contact.style.backgroundColor = `hsl(${hue}, 100%, 95%)`
    footer.style.backgroundColor = `hsl(${hue}, 100%, 95%)`
    hue+= 20;
})
//BODY - WHEEL



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

//Inputs -Focus
    inputs.forEach(input => {
        input.addEventListener('focus' ,(e) => {
            container.style.opacity = '.4';
            header.style.display = 'none';
        })
    })

//Inputs -Focus

//Inputs -Blur
inputs.forEach(input => {
    input.addEventListener('blur' ,(e) => {
       container.style.opacity = '1';
       header.style.display = 'block';


       
    })
})

//Inputs -BLUR

//textArea - onchange
textArea.addEventListener('change', (e) => {
    textArea.style.backgroundColor = 'tomato';

})
//textArea - onchange

//SUBMIT - PREVENT DEFAULT
submit.addEventListener('click', (e) => {
    e.preventDefault();
    submit.textContent = 'Thank You!';
    
})
//SUBMIT - PREVENT DEFAULT