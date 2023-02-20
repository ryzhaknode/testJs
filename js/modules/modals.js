const modals = () => {
  function bindModal(
    targetSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true,
    scroll = calcScroll()
  ) {
    const target = document.querySelectorAll(targetSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modul]");

    target.forEach((item) => {
      item.addEventListener("click", function (e) {
        if (e.target) {
          e.preventDefault;
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        document.body.classList.add("modal-open");
      });
    });

    windows.forEach((item) => {
      item.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
      if (e.target == modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        document.body.classList.remove("modal-open");
      }
    });
    close.addEventListener("click", function () {
      windows.forEach((item) => {
        item.style.display = "none";
        document.body.style.marginRight = `0px`;
      });
      modal.style.display = "none";
      // document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    });
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.body.classList.add("modal-open");
    }, time);
  }

  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );

  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
  // bindModal(".rov > div", ".rov > div > a", "body");
  // showModalByTime(".popup", 10000);

  // function calcModals() {
  //   const balcons = document.querySelectorAll(".balcon_icons_img > img");
  //   const bigBalcons = document.querySelectorAll(".big_img > img");
  //   const balconsBtn = document.querySelector(".popup_calc_button");
  //   const popupContent = document.querySelector(".popup_calc");
  //   balconsBtn.addEventListener("click", function () {
  //     popupContent.style.display = "none";
  //   });

  //   function closeWindow() {
  //     bigBalcons.forEach((item) => {
  //       item.style.display = "none";
  //     });

  //     balcons.forEach((item) => {
  //       item.parentNode.classList.remove("do_image_more");
  //     });
  //   }

  //   function openWindow(i) {
  //     bigBalcons[i].style.display = "block";
  //     balcons[i].parentNode.classList.add("do_image_more");
  //   }

  //   balcons.forEach((item) => {
  //     item.addEventListener("click", (e) => {
  //       console.log(e.target);
  //       if (e.target) {
  //         balcons.forEach((item, index) => {
  //           if (item == e.target) {
  //             closeWindow();
  //             openWindow(index);
  //           }
  //         });
  //       }
  //     });
  //   });
  // }
  // calcModals();
};

export default modals;
