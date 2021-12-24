document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

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
