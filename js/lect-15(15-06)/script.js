import { test } from "./Comman.js";
import { NavItem } from "./Comman.js";


test()
function printNavbar(){
     let str = "";
     NavItem.forEach((index,i)=>{
          str+=` <li>${index}</li>`
     })
     console.log(str);
     document.getElementById('navItems').innerHTML=str;
}

window.onload= printNavbar();