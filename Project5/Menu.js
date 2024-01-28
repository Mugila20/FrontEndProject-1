var menuContainer=document.getElementById("menu");
var search=document.getElementById("search");
var menulist=menuContainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase();
    
    for(i=0;i<menulist.length;i++){
        var menuName=menulist[i].querySelector("p").textContent;

        if(menuName.toUpperCase().indexOf(enteredValue)<0){
            menulist[i].style.display="none";
        }
        else{
            menulist[i].style.display="block";
        }
    }
})

