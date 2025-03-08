const password = document.getElementById("password");
const bg = document.querySelector(".background-image");

password.addEventListener("input", (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurness = 20 - length * 2;
    console.log(input)
    console.log(length)
    console.log(blurness)
    bg.style.filter = `blur(${blurness}px)`;
});