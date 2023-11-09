// 4 Pillars of DOM

// 1) Selection of an Element
// 2) Changing Html
// 3) Changing Css
// 4) Event Listner: We move mouse or press keyboard or anything in listens that,

// Syntax-
//document.querySelector("Element Name")

/*
    Selection of Element
        let a = document.querySelector("h1")
        console.log(a);
*/

/*
    Changing of element 
        let a =  document.querySelector("h1")
        a.innerHTML = ("HUIUHUIUHI")
*/

/* 
    Selection of CSS
        let c = document.querySelector("h1")
        c.style.color = "Yellow"
        c.style.backgroundColor = "Purple"
*/

/* 
    Event Listner 
        let a = document.querySelector("h1")
        a.addEventListener("click", function() {
                a.innerHTML = ("Dekh kaun aaya Wapas")
                a.style.color = "Yellow"
                a.style.backgroundColor = "Purple"  
        })
*/

/*  BULB
    let bulb = document.querySelector("#bulb");
    let btn = document.querySelector("#buttonOn");
    let text = document.querySelector("h1");
    let flag = 0   
    
    btn.addEventListener("click", function () {
        if(flag == 0){
             bulb.style.backgroundColor = "Yellow";
             bulb.style.boxShadow =  "5px 5px 25px 18px yellow";
             bulb.style.border  = "0px";
             text.innerHTML = "Bahor Tez Ho Rahe Ho";
             console.log("Click")
             flag = 1

            }else{
                bulb.style.backgroundColor = "Transparent";
                text.innerHTML = "Hann Ab Sahi hai!";
                bulb.style.boxShadow =  "0px 0px 0px yellow";
                bulb.style.border  = "2px solid black";
                console.log("Click")
                flag = 0
               } 
        });
*/
/*
    let a = document.querySelectorAll("h2") #To select all at once it gives Nodelist which is similar to array
    console.log(a);
    a.forEach(function(e) {
    console.log(e);
    });
*/


// document.getElementById("box") Select id
// document.getElementsByClassName("box")   Select box




var box = document.querySelector("#box")
    // box.innerHTML = "<h4> HEYLLOOO</h4>" 
    box.textContent = "<h4> Heyylooo</h5>"
