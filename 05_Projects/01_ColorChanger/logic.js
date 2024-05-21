const buttons=document.querySelectorAll('.button');

buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        document.body.style.backgroundColor=event.target.id;
    })
})