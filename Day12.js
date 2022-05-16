console.log("working...")



function changeDirection(){
    const element = document.getElementsByClassName("card");
    // console.log(element);
    element[0].style.flexDirection = "column";
    const element2 = document.getElementsByClassName("card1");
    element2[0].style.backgroundColor = "brown";

}

function changeimage(){
    const element1 = document.getElementsByTagName("img");
    // console.log(element);
    element1[0].src = "https://frontendmasters.com/static-assets/learn/og-learning-path-javascript.jpg";
    element1[0].style.width = "200px";

    const element3 = document.getElementById("msg")
    element3.innerHTML = `<b>changed</b> <i>changed</i>`
   
    element3.style.color = "green"
}

let element4 = document.createElement("div");
element4.className = "newdiv";
element4.id = "newDiv";
element4.setAttribute("for","value");
element4.innerText = "Hello i have "
console.log(element4);
document.querySelector("p.msg1").appendChild(element4);

let element5 = document.createElement("img");
element5.className = "image1";
element5.setAttribute("src","https://static.javatpoint.com/images/javascript/javascript_logo.png");
console.log(element5);
document.querySelector("p#msg").appendChild(element5);
