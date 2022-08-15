let taskbar =document.getElementsByClassName("task_bar")[0]
 let startmenu =document.getElementsByClassName("start_menu")[0]

 taskbar.addEventListener("click",()=>{
     if(startmenu.style.bottom =='50px'){
        startmenu.style.bottom ='-650px'
     }
     else{
        startmenu.style.bottom ='50px'
     }
 })