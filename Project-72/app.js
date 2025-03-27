const input = document.querySelectorAll(".controls input");

function handleUpdate(){
    this.name == "base" ? (suffix = "") : (suffix = "px");
    document.documentElement.style.setProperty(
        `--${this.name}`, this.value + suffix
    );
}

input.forEach((input) => input.addEventListener("change", handleUpdate));