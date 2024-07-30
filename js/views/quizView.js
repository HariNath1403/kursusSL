import Master from "./masterView.js";

class QuizViews extends Master {
  displayTest() {
    this.quizAuthorization.style.display = "none";
    this.quizPg.style.display = "flex";
  }
  displaySubmission() {
    this.quizPg.style.display = "none";
    this.quizAuthorization.style.display = "flex";
    this.quizSubmitted.style.display = "block";
  }
  displayScoreBoard() {
    this.quizAuthorization.style.display = "none";
    this.quizScores.style.display = "block";
  }

  collectAns() {
    const participantName = document.getElementById("name").value;
    const participantFacility = document.querySelector(
      'input[name="facility"]:checked'
    ).value;
    const ques1 = document.querySelector(
      'input[name="ques--1"]:checked'
    )?.value;
    const ques2 = document.querySelector(
      'input[name="ques--2"]:checked'
    )?.value;
    const ques3 = document.querySelector(
      'input[name="ques--3"]:checked'
    )?.value;
    const ques4 = document.querySelector(
      'input[name="ques--4"]:checked'
    )?.value;
    const ques5 = document.querySelector(
      'input[name="ques--5"]:checked'
    )?.value;
    const ques6 = document.querySelector(
      'input[name="ques--6"]:checked'
    )?.value;
    const ques7 = document.querySelector(
      'input[name="ques--7"]:checked'
    )?.value;
    const ques8 = document.querySelector(
      'input[name="ques--8"]:checked'
    )?.value;
    const ques9 = document.querySelector(
      'input[name="ques--9"]:checked'
    )?.value;
    const ques10 = document.querySelector(
      'input[name="ques--10"]:checked'
    )?.value;

    const participantArr = [
      new Date(Date.now()).toLocaleString(),
      participantName,
      participantFacility,
      [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10],
    ];

    return participantArr;
  }

  getScore(arr) {
    let score = 0;
    for (let i = 0; i < this.quizAnswers.length; i++) {
      const correctAns = this.quizAnswers[i];
      const participantAns = arr[i];
      if (correctAns === participantAns) score++;
    }
    return score;
  }
  async updateScoreMarkup(arr) {
    const refDate = arr[1];
    const refWinner = arr[2];
    const refFirstRunnerUp = arr[3];
    const refSecondRunnerUp = arr[4];

    return `<h2 class="quiz__scores--header">Papan Skor</h2>
            <h3 class="quiz__scores--sub">
              <span class="quiz__scores--sub--txt">Keputusan pada</span>
              <span class="quiz__scores--sub--date">${refDate}</span>
            </h3>
            <div class="podium quiz__scores--figure">
              <div class="step step-1">
                <div class="medal">🥇</div>
                <h2>1st</h2>
                <p id="winner">${refWinner}</p>
              </div>
              <div class="step step-2">
                <div class="medal">🥈</div>
                <h2>2nd</h2>
                <p id="first-runner-up">${refFirstRunnerUp}</p>
              </div>
              <div class="step step-3">
                <div class="medal">🥉</div>
                <h2>3rd</h2>
                <p id="second-runner-up">${refSecondRunnerUp}</p>
              </div>
            </div>`;
  }

  async updateScoreBoard(arr) {
    const markup = await this.updateScoreMarkup(arr);
    this.quizScores.innerHTML = "";
    this.quizScores.insertAdjacentHTML("beforeend", markup);
  }

  showSpinner() {
    document.getElementById("spinner").style.display = "flex";
  }

  hideSpinner() {
    document.getElementById("spinner").style.display = "none";
  }

  displayTestHandler(handler) {
    this.quizDisplayBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      if (this.authorizationPassword.value === "tampin123") {
        this.authorizationPassword.value = "";
        handler();
      }
    });
  }

  displayScorestHandler(handler) {
    this.quizDisplayBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      if (this.authorizationPassword.value === "jaws74") {
        this.authorizationPassword.value = "";
        handler();
      }
    });
  }

  submitQuizHandler(handler) {
    this.quizSubmissionBtn.addEventListener("click", (ev) => {
      const participant = document.getElementById("name");
      const participantName = document.getElementById("name")?.value;
      const participantFacility = document.querySelector(
        'input[name="facility"]:checked'
      )?.value;

      ev.preventDefault();
      try {
        handler();
      } catch (err) {
        console.log(err);
        this.quizPg.scrollIntoView({ behavior: "smooth" });
        participant.focus();
        alert("Sila isi nama dan fasiliti anda!");
      }
    });
  }
}

export default new QuizViews();
