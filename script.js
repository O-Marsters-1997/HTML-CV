/*==================== GENERATE PDF ====================*/ 
// PDF generated area

let areaCv = document.getElementById('id')

let resumeButton = document.getElementById("resume-button")


// Html2pdf options


// Function to call areaCv and Html2Pdf options 
function generateResume() {
    html2pdf(areaCv)
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {


    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    // scaleCV()

    // 2. The PDF is generated
    generateResume()

    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
})