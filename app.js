const app = {
  container: document.querySelector(".container"),

  render() {
    for (let i = 1; i <= 10; i++) {
      const button = `<div class="button">${i}</div>`;
      this.container.insertAdjacentHTML("beforeend", button);
    }
    this.init();
  },
  init() {
    const buttons = document.querySelectorAll(".button");
    const resetButton = document.querySelector(".reset-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.add("clicked");
      });
    });
    resetButton.addEventListener("click", () => {
      buttons.forEach((el) => el.classList.remove("clicked"));
    });
  },
};

app.render();
