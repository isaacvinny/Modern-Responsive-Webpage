let toggleUl = document.querySelector("nav ul");
toggleUl.style.maxHeight = "0px";

function toggleNavEffect(){
    if (toggleUl.style.maxHeight === "0px"){
        toggleUl.style.maxHeight = "500px";
    } else{
        toggleUl.style.maxHeight = "0px";
    }
}