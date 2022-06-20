//Lab03 : Jigisha Pragnesh Padhiyar
//Creating Onclick table using JS

var bodyobject =  document.body;
function displayonclick(){   
var one = document.createElement('table');
var two = document.createElement('tbody');
let r1  = document.createElement("tr");
let c1  = document.createElement("td");
let c2  = document.createElement("td");
let c3  = document.createElement("td");
c1.innerText = "Box1";
c2.innerText = "Box2";
c3.innerText = "Box3";
r1.appendChild(c1);
r1.appendChild(c2);
r1.appendChild(c3);
let r2 = document.createElement("tr");
let c4 = document.createElement("td");
let c5 = document.createElement("td");
let c6 = document.createElement("td");
c4.innerText = "Box4";
c5.innerText = "Box5";
c6.innerText = "Box6";
r2.appendChild(c4);
r2.appendChild(c5);
r2.appendChild(c6);
let r3 = document.createElement("tr");
let c7 = document.createElement("td");
let c8 = document.createElement("td");
let c9 = document.createElement("td");
c7.innerText = "Box7";
c8.innerText = "Box8";
c9.innerText = "Box9";
r3.appendChild(c7);
r3.appendChild(c8);
r3.appendChild(c9);
let r4 = document.createElement("tr");
let c10 = document.createElement("td");
let c11 = document.createElement("td");
let c12 = document.createElement("td");
c10.innerText = "Box10";
c11.innerText = "Box11";
c12.innerText = "Box12";
r4.appendChild(c10);
r4.appendChild(c11);
r4.appendChild(c12);
let r5 = document.createElement("tr");
let c13 = document.createElement("td");
let c14 = document.createElement("td");
let c15 = document.createElement("td");
c13.innerText = "Box13";
c14.innerText = "Box14";
c15.innerText = "Box15";
r5.appendChild(c13);
r5.appendChild(c14);
r5.appendChild(c15);
c1.className ="cellOdd"
 c3.className = "cellOdd"
 c5.className = "cellOdd"
 c7.className = "cellOdd"
 c9.className="cellOdd"
 c11.className="cellOdd"
 c13.className="cellOdd"
 c15.className= "cellOdd"

c2.className = "cellEven"
c4.className = "cellEven"
c6.className = "cellEven"
c8.className="cellEven"
c10.className="cellEven"
c12.className="cellEven"
c14.className= "cellEven"

two.appendChild(r1);
two.appendChild(r2);
two.appendChild(r3);
two.appendChild(r4);
two.appendChild(r5);
one.appendChild(two);
one.id = "Display_table";
bodyobject.appendChild(one);
one.setAttribute("border","2px");

var x = document.getElementById('Display_table');
var disp = x.getElementsByTagName('tr');
var target = null;

if(!(x>1))
    alert("The table has already been generated");

for (var i=0; i<disp.length; i++)
{
    target = disp[i].getElementsByTagName("td");
    for (var n=0; n<target.length;n++)
    {
        target[n].onmouseover = function(event){
        
            var msg = document.getElementById("message"); 
            bodyobject.insertBefore(msg,one);   
            msg.style.display="block";   
            var x = event.target;
            msg.innerText = x.innerText;
            
        }
       

    }

}


}


let btnclick = document.getElementById('btn');
btnclick.addEventListener('click',displayonclick);






