// /*==================== DARK LIGHT THEME ====================*/ 


document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById("theme-button");
    let isDark = false;

    themeButton.addEventListener('click', e => {
        console.log(e)
        if (!isDark) {
            document.body.classList.add("dark-theme")
            isDark = true;
            themeButton.classList.remove("bx-moon")
            themeButton.classList.add("bx-sun")
            themeButton.style.color = "white"
        } else {
            document.body.classList.remove("dark-theme")
            isDark = false;
            themeButton.classList.remove("bx-sun")
            themeButton.classList.add("bx-moon")
            themeButton.style.color = "black"
        }
        
    })
}) 


// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'

// const changeTheme = () => {
//     // Previously selected topic (if user selected)
//     const selectedTheme = localStorage.getItem('selected-theme')
//     const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     console.log("hello")
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })
// }

