var tablinks=document.getElementsByClassName("tabs-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(name,Event){
  for(var tablink of tablinks){
    tablink.classList.remove("active-link");
    console.log("rem link");
  }
  for(var tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
    console.log("rem tab");
  }
  document.getElementById(name).classList.add("active-tab");
  console.log("add tab");
 
  document.getElementById(name+'s').classList.add("active-link");
  /*Event.currentTarget.classList.add("active-link");*/
  console.log("add link");
  
  
}