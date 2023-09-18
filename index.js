

const details = document.querySelector(".contact-display");

const arr = [];



  

    function add() {
        let name = (document.getElementById("name").value);
        let number = (document.getElementById("number").value);
          arr.push({name:name , number : number});
            details.innerHTML = ""
            for(
                let i = 0; i < arr.length ; i++
                
            ){
            const innerElem = `<div>
            <p>Name:${arr[i].name}</p>
            <p>Number:${arr[i].number}</p>
            </div>`;
            details.innerHTML += innerElem;
            } 
        
         }
