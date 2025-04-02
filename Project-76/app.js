const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");

button.addEventListener("click", getRandomJoke);

function getRandomJoke(){
    const ajax = new XMLHttpRequest();

    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                console.log("Error");
            }
        })
        .then(data => displayJoke.innerHTML = data.value);
}