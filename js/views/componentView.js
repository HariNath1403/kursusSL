import Master from "./masterView.js";

class ComponentViews extends Master {
  turnPg(no) {
    let ref;
    if (no === 0) {
      ref = 3;
    } else if (no === 4) {
      ref = 1;
    } else {
      ref = no;
    }
    this.aboutImg.src = `../../imgs/about--${ref}.avif`;

    return ref;
  }

  generateMarkupImgArr(n) {
    return `<img
        src="imgs/book/page ${n}.jpg"
        alt="Book"
        class="book__carousel--opts--img"
        data-opt="${n}"
      />`;
  }

  generateMainBookImg(n) {
    return `<img
                src="imgs/book/page ${n}.jpg"
                alt="Book"
                class="book__carousel--main--img"
              />`;
  }

  switchPics(no) {
    const pics = [1, 2, 3, 4];
    pics.splice(no - 1, 1);
    const markup = pics.map((no) => this.generateMarkupImgArr(no)).join("");
    this.carouselOpts.innerHTML = "";
    this.carouselMainImg.innerHTML = "";

    this.carouselOpts.insertAdjacentHTML("beforeend", markup);
    this.carouselMainImg.insertAdjacentHTML(
      "beforeend",
      this.generateMainBookImg(no)
    );
  }

  loadNavMenu() {
    this.navPg.style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";
  }

  hideNavMenu() {
    this.navPg.style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  }

  handlerTurnLeft(handler) {
    this.aboutBtnLeft.addEventListener("click", (ev) => {
      ev.preventDefault();
      handler();
    });
  }

  handlerTurnRight(handler) {
    this.aboutBtnRight.addEventListener("click", (ev) => {
      ev.preventDefault();
      handler();
    });
  }

  handlerSelectBookPic(handler) {
    this.carouselOpts.addEventListener("click", (ev) => {
      if (ev.target.tagName === "IMG") {
        const dataOpt = +ev.target.dataset.opt;
        handler(dataOpt);
      }
    });
  }

  handlerShowNav(handler) {
    this.navLoadBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      handler();
    });
  }

  handlerCloseNav(handler) {
    this.navExitBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      handler();
    });
  }

  handlerGotoNav(handler) {
    this.navLinks.forEach((link) => link.addEventListener("click", handler));
  }
}

export default new ComponentViews();
