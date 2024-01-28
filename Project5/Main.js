var sidebar=document.querySelector(".side-bar");

function showSidebar(){
    sidebar.style.left="0";
}
function closeSidebar(){
    sidebar.style.left="-50%";
}

function showAlert(){
    alert("Thanks for subscribing us!");
    document.querySelector(".Subscribe").textContent="Subscribed";
}
