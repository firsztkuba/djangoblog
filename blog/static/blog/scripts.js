const boxes = document.querySelectorAll(".content-section")

window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.7;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("content-show")
        } else {
            box.classList.remove("content-show")
        }
    })
}