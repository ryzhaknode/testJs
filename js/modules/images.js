const images = () => {
  const imagesContainer = document.querySelector(".works");
  const divElement = document.createElement("div");
  const bigImage = document.createElement("img");

  divElement.classList.add("popup");
  divElement.appendChild(bigImage);
  imagesContainer.appendChild(divElement);

  divElement.style.justifyContent = "center";
  divElement.style.alignItems = "center";
  divElement.style.display = "none";

  imagesContainer.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target && target.classList.contains("preview")) {
      divElement.style.display = "flex";
    //   divElement.style.width = "50%";
      document.body.style.overflow = "hidden";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    }
    if (target && target.matches("div.popup")) {
      divElement.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};
export default images;
