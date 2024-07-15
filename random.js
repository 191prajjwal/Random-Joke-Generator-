
let para=document.getElementById("para")
let btn=document.getElementById("btn")

btn.addEventListener("click",()=>
    {  let joke=fetch("https://official-joke-api.appspot.com/random_joke")

        joke.then((result1)=>{return result1.json()}).then((result2)=>{
    
            para.innerHTML=`<h4 style="display:inline-block;color:white;background-color:tomato;padding:5px">Setup :</h4> <span style="background-color:purple;color:white;padding:5px">${result2.setup}</span> <br/><h4 style="display:inline-block;color:white;background-color:tomato;padding:5px">Punchline :</h4> <span style="background-color:green;color:white;padding:5px"> ${result2.punchline}</span>`;
           
            btn.innerText="Generate New Joke"
        
    
            
        })
    })


