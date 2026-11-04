let faqTitles = document.getElementsByClassName("faqTitle");

for (let i = 0; i < faqTitles.length; i++) {
  faqTitles[i].addEventListener("click", () => {
    let faqAnswer = faqTitles[i].nextElementSibling;

    faqAnswer.classList.toggle("hidden");
    faqAnswer.classList.toggle("visible");
    faqAnswer.classList.toggle("borderTop");

    let arrowIcon = faqTitles[i].querySelector(".material-symbols-outlined");
    arrowIcon.classList.toggle("normal");
    arrowIcon.classList.toggle("rotate");
  });
}

document.querySelector(".buttonNav").addEventListener("click", () => {
  document.querySelector(".menuPhone").classList.toggle("burguerMenu");
});



window.addEventListener('scroll', function(){
    var nav = document.querySelector('nav');
    var logo = this.document.querySelector('.heroLogo');
    nav.classList.toggle('active', window.scrollY > 50)
    logo.classList.toggle('active', window.scrollY > 50)

    
})
