const form = document.querySelector('form')

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector("#results");

    if(height<=0 || isNaN(height) || height==''){
        const value=document.createTextNode("Enter a valid number");
        result.appendChild(value);
    }
    else if(weight<=0 || isNaN(weight) || weight==''){
        const value=document.createTextNode("Enter a valid number");
        result.appendChild(value); //Appending values keeps adding to it again and again, find another way out
    }
    else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML=`BMI of subject is: ${BMI}`;
        if (BMI<18.6){
            document.querySelector("#underweight").style.color="yellow"
        }
        else if (BMI>=18.6 && BMI<=24.9){
            document.querySelector("#normal").style.color="green"
        }
        else{
            document.querySelector("#overweight").style.color="red"
        }
        
    }
    

})
