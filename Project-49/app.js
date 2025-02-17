const range = document.getElementById("range");

range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = document.getElementById("range-content");

    const range_width = getComputedStyle(e.target).getPropertyValue("width");
    const label_width = getComputedStyle(label).getPropertyValue("width");

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 10);

    const left = value * (num_width/100) - num_label_width/2 + scale(value);
    label.style.left = `${left}px`;
    label.innerHTML = value;
})

const scale = (num) => {
    return ((num) * (-20)) / 110;
}