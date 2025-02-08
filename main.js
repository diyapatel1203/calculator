const key=document.querySelectorAll("#keyboard>div")
// console.log(key)
let bag=" "
for(let i=0; i<key.length; i++)
{
    
    key[i].addEventListener("click",(event)=>{
        let curretntkey = event.target.innerText;

        if(curretntkey=="C")
    {
        bag="";
        document.querySelector("#display").innerText="";
    }
    else if(curretntkey=="=")
    {
        console.log(bag);
        document.querySelector("#display").innerText=eval(bag);
    }
    else
    {
        bag=bag+curretntkey;
        document.querySelector("#display").innerText=bag;
    }
    })

    
}