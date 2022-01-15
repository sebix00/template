// const faqs = document.querySelectorAll(".faq");
// const imgs = document.querySelectorAll(".question__icon");
// const faqsCildren = document.querySelectorAll(".faq").children;
// faqs.forEach((faq) => {
//   faq.addEventListener("click", ()=> {
//     const x =faq.classList.toggle("active");
//     const z=faq.children;

//     if(x){const x=faq.children;
//             z[0].children[1].src="img/svg/caret-down-3.svg";

//     }
//     if(x===false){
//         z[0].children[1].src="img/SVG/caret-down.svg";

//     }
//     // if(!faq.classList.contains("active")){
//     //
//     // }

//   });
// });

const faqContainer = document.querySelector(".section-faq");

faqContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("question")) {
    const z = e.target.closest(".faq").classList.toggle("active");
    const x = e.target.querySelector(".question__icon");
    x.src = "img/svg/caret-down-3.svg";
    if (!z) {
      x.src = "img/SVG/caret-down.svg";
    }
  }
});
