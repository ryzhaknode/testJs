const checkNumInputs = (modal) => {
  const stateModal = document.querySelectorAll(modal);
  stateModal.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });
};

export default checkNumInputs;
