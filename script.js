let element = document.getElementById("id")
let btn = document.getElementById("btn")

function createPDF () {
    html2pdf(element)
}

btn.addEventListener("click", () => {
    createPDF();
})