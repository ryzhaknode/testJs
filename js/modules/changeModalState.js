import checkNumInputs from "./checkNumInputs";
const changeModalState = (state) => {
  const balconIcons = document.querySelectorAll(".balcon_icons_img");
  const modalWidth = document.querySelectorAll("#width");
  const modalHeight = document.querySelectorAll("#height");
  const modalSelect = document.querySelectorAll("#view_type");
  const modalcCheckBox = document.querySelectorAll(".checkbox");

  const cleanForm = document.querySelector("#clean_form");
  checkNumInputs("#width");
  checkNumInputs("#height");

  // start
  state["balcon"] = 0;
  state["type"] = modalSelect[0].value;
  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Cold") : (state[prop] = "Hot");
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }
  bindActionToElems("click", balconIcons, "balcon");
  bindActionToElems("input", modalWidth, "width");
  bindActionToElems("input", modalHeight, "heigth");
  bindActionToElems("change", modalSelect, "type");
  bindActionToElems("change", modalcCheckBox, "profile");
  //   bindActionToElems("click", balconIcons, "balcon");
  cleanForm.addEventListener("submit", () => {
    state = {};
    modalcCheckBox.forEach((box, j) => {
      box.checked = false;
      state["balcon"] = 0;
      state["type"] = modalSelect[0].value;
    });
  });
};

export default changeModalState;
