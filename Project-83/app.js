let body = document.body;
let themer = document.querySelector(".themer");
const followButtons = document.querySelectorAll(".follow-button")

themer.addEventListener("click", toggleTheme);

function toggleTheme(){
    if(body.className === "light-theme"){
        body.className = "dark-theme";
        themer.innerHTML = "Light"
    }else{
        body.className = "light-theme";
        themer.innerHTML = "Dark";
    }
}

followButtons.forEach((btn)=> {
    btn.addEventListener("click", (e) => followUnFollow(e.targt))
})

function followUnFollow(button){
    button.classList.toggle("followed");
    if(button.innerHTML == "Follow") button.innerHTML = "Unfollow";
    else button.innerHTML = "Follow";
}