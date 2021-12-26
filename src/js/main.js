// Header section
// Add event listener on arrow to reveal contact information

const revealContactDetails = () => {

    const contactDetails = document.getElementsByClassName("contact-wrapper")[0]
    const showContactDetails = document.getElementsByClassName("show-contact-details")[0]
    const header = document.getElementsByClassName("header")[0]
    const contactLink = document.querySelectorAll(".contact-link")
    const iconWrap = document.getElementById("header-icon-wrapper")

    if (contactDetails.classList.contains('contact-hidden')){
            contactDetails.classList.remove('contact-hidden')
            header.classList.add('header-max-height')
            header.classList.add('header-max-height')
            showContactDetails.classList.add('show-contact-details-active')
            iconWrap.classList.add("header-icon-wrapper-extra");
        } else {
            contactLink.forEach( element => {
                element.style.display = "none";
                setTimeout(() => {
                    element.style.display = "block";
                }, 450);
            })
            contactDetails.classList.add('contact-hidden')
            header.classList.remove('header-max-height')
            showContactDetails.classList.remove('show-contact-details-active')
            iconWrap.classList.remove("header-icon-wrapper-extra");
        }
    }

document.querySelectorAll(".show-contact-details").forEach(element =>  {
    element.addEventListener('click', (e) => {
        revealContactDetails()  
    });
});




// Footer section
// Add event listner to show pop up index section

const revealPopUpSection = () => {
    const btn = document.getElementById("pop-up-index-button");
    const pop = document.querySelector(".pop-up-index-wrapper");
    if (pop.classList.contains("pop-up-index-invisible")) {
        pop.classList.remove("pop-up-index-invisible")
        btn.classList.add("pop-up-index-button-active");
    } else {
        pop.classList.add("pop-up-index-invisible")
        btn.classList.remove("pop-up-index-button-active");
    };
}
document.querySelector("#pop-up-index-button").addEventListener('click', (e) => {
    revealPopUpSection()
})

/*==================== scale-pdf ====================*/ 

const scale = async ()=> {
    body = document.querySelector("body");
    body.classList.add("scale-cv")
}

const unscale = async () => {
  body = document.querySelector("body");
  body.classList.remove("scale-cv");
};

/*==================== GENERATE PDF ====================*/ 
// PDF generated area

let areaCv = document.getElementById('id')
let resumeButton = document.getElementById("resume-button")


// Html2pdf options

// Function to call areaCv and Html2Pdf options 
async function generateResume() {
    scale();
    await html2pdf(areaCv)
    unscale()
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    // scaleCV()
    // 2. The PDF is generated
    generateResume()
    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
})




