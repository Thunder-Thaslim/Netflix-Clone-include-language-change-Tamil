const container = document.querySelector('.image-gallery');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
let accordian = document.getElementsByClassName("FAQ__title");


scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -450, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({ left: 450, behavior: 'smooth' });
});
/* auto scroll
 setInterval(() => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
}, 3000);
*/



for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}



async function changeLanguage(lang) {
  let response = await fetch("languages.json");
  let translations = await response.json();
  document.getElementById("center_para_h1").textContent = translations[lang].center_para_h1;
  document.getElementById("center_para_h2").textContent = translations[lang].center_para_h2;
  document.getElementById("center_para_h3").textContent = translations[lang].center_para_h3;
  document.getElementById("page2top_h2").textContent = translations[lang].page2top_h2;
  document.getElementById("features_head_h2").textContent = translations[lang].features_head_h2;
  document.getElementById("rectangle_h1").textContent = translations[lang].rectangle_h1;
  document.getElementById("rectangle_p1").textContent = translations[lang].rectangle_p1;
  document.getElementById("rectangle_h2").textContent = translations[lang].rectangle_h2;
  document.getElementById("rectangle_p2").textContent = translations[lang].rectangle_p2;
  document.getElementById("rectangle_h3").textContent = translations[lang].rectangle_h3;
  document.getElementById("rectangle_p3").textContent = translations[lang].rectangle_p3;
  document.getElementById("rectangle_h4").textContent = translations[lang].rectangle_h4;
  document.getElementById("rectangle_p4").textContent = translations[lang].rectangle_p4;
  document.getElementById("FAQ__heading").textContent = translations[lang].FAQ__heading;
  document.getElementById("FAQ__title_h1").textContent = translations[lang].FAQ__title_h1;
  document.getElementById("FAQ__visible_p1").textContent = translations[lang].FAQ__visible_p1;
  document.getElementById("FAQ__visible_p2").textContent = translations[lang].FAQ__visible_p2;
  document.getElementById("FAQ__title_h2").textContent = translations[lang].FAQ__title_h2;
  document.getElementById("FAQ__visible_p21").textContent = translations[lang].FAQ__visible_p21;
  document.getElementById("FAQ__title_h3").textContent = translations[lang].FAQ__title_h3;
  document.getElementById("FAQ__visible_p31").textContent = translations[lang].FAQ__visible_p31;
  document.getElementById("FAQ__visible_p32").textContent = translations[lang].FAQ__visible_p32;
  document.getElementById("FAQ__title_h4").textContent = translations[lang].FAQ__title_h4;
  document.getElementById("FAQ__visible_p4").textContent = translations[lang].FAQ__visible_p4;
  document.getElementById("FAQ__title_h5").textContent = translations[lang].FAQ__title_h5;
  document.getElementById("FAQ__visible_p5").textContent = translations[lang].FAQ__visible_p5;
  document.getElementById("FAQ__title_h6").textContent = translations[lang].FAQ__title_h6;
  document.getElementById("FAQ__visible_p61").textContent = translations[lang].FAQ__visible_p61;
  document.getElementById("FAQ__visible_p62").textContent = translations[lang].FAQ__visible_p62;
  document.getElementById("footer_email").textContent = translations[lang].footer_email;
}

document.getElementById("languagesSelect").addEventListener("change", function() {
  changeLanguage(this.value);
});



