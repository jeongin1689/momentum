const toDoTextArea = document.querySelector(".js-to-do .js-add-to-do");
const toDoDeleteBtn = document.querySelector(".js-delete-button");

function getTodo() {
  toDoTextArea.oninput = (e) => {
    console.log("oninput", e.target.value);
    toDoDeleteBtn.style.display = "block";
  }
}
getTodo();