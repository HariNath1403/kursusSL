export default class Master {
  aboutImg = document.querySelector(".about__figure--img");
  aboutBtnLeft = document.querySelector(".about__figure--btn--left");
  aboutBtnRight = document.querySelector(".about__figure--btn--right");

  carouselMainImg = document.querySelector(".book__carousel--main");
  carouselOpts = document.querySelector(".book__carousel--opts");

  navPg = document.getElementById("nav");
  navLoadBtn = document.querySelector(".home__nav--menu");
  navExitBtn = document.querySelector(".nav__exit");
  navLinks = document.querySelectorAll(".nav__list--link");

  authorizationPassword = document.getElementById("password");
  quizAuthorization = document.getElementById("authorization");
  quizPg = document.getElementById("post-test");
  quizSubmitted = document.getElementById("test-submitted");
  quizScores = document.getElementById("score-board");

  quizDisplayBtn = document.querySelector(".quiz__authorization--submit");
  quizSubmissionBtn = document.querySelector(".quiz__form--submit");

  quizAnswers = ["a", "d", "c", "a", "b", "c", "d", "b", "b", "d"];
}
