// const btns = document.querySelectorAll(".open-close-btns");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-answer");
//   });
// });

const questions = document.querySelectorAll(".question-box");

questions.forEach((question) => {
  const btn = question.querySelector(".open-close-btns");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-answer");
      }
    });
    question.classList.toggle("show-answer");
  });
});
