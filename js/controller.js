import componentView from "./views/componentView.js";
import quizView from "./views/quizView.js";

import * as model from "./model.js";
import * as config from "./config.js";

let curAboutPic = 1;

const changeAboutPic = function (no) {
  curAboutPic = componentView.turnPg(no);
};

const switchOutBookPics = function (no) {
  componentView.switchPics(no);
};

const showNavMenu = function () {
  componentView.loadNavMenu();
};

const closeNavMenu = function () {
  componentView.hideNavMenu();
};

const initComponents = function () {
  componentView.handlerTurnLeft(() => {
    changeAboutPic(curAboutPic - 1);
  });
  componentView.handlerTurnRight(() => {
    changeAboutPic(curAboutPic + 1);
  });
  componentView.handlerSelectBookPic(switchOutBookPics);

  componentView.handlerShowNav(showNavMenu);
  componentView.handlerCloseNav(closeNavMenu);
  componentView.handlerGotoNav(closeNavMenu);
};

initComponents();

const displayPostTest = function () {
  quizView.displayTest();
};
const displayScores = async function () {
  quizView.showSpinner();
  quizView.displayScoreBoard();
  const retrievedArr = await config.fetchMasterData();
  console.log(retrievedArr);
  await quizView.updateScoreBoard(retrievedArr);
  quizView.hideSpinner();
};

const submitQuiz = async function () {
  const participantData = quizView.collectAns();
  const participantAns = participantData.pop();
  const participantScore = quizView.getScore(participantAns);
  participantData.push(participantScore);
  console.log(participantData);
  quizView.displaySubmission();
  quizView.showSpinner();
  await model.postToGoogleSheets(config.googleSheetLink, participantData);
  quizView.hideSpinner();
};

const initQuiz = function () {
  quizView.displayTestHandler(displayPostTest);
  quizView.displayScorestHandler(displayScores);
  quizView.submitQuizHandler(submitQuiz);
};

initQuiz();

// Reveal Sections
const revealSections = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});
const allSections = document.querySelectorAll(".section");

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
