document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

// const sections = document.querySelectorAll('section')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/

// function scrollTop() {
//     const scrollTop = document.getElementById('scroll-top');

//     if (this.scrollY >= 200)
//         {scrollTop.classList.add('show-scroll')
//     } else {
//         scrollTop.classList.remove('show-scroll')
//     }
// }
// window.addEventListener('scroll', scrollTop);
