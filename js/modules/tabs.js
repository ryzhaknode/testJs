function tabs(tabHeader, tabs, tabContent, activeTab, display = "block") {
  const headerTab = document.querySelector(tabHeader);
  const tabBtn = document.querySelectorAll(tabs);
  const contentTabs = document.querySelectorAll(tabContent);

  function tabClassRemove() {
    tabBtn.forEach((item) => {
      item.classList.remove(activeTab);
    });

    contentTabs.forEach((item) => {
      item.style.display = "none";
    });
  }

  function tabClassAdd(i = 0) {
    tabBtn[i].classList.add(activeTab);
    contentTabs[i].style.display = display;
  }

  tabClassRemove();
  tabClassAdd();

  headerTab.addEventListener("click", function (e) {
    const target = e.target;
    if (
      target & target.classList.contains(tabs.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabs.replace(/\./, ""))
    ) {
      tabBtn.forEach((item, index) => {
        if (item == target || item == target.parentNode) {
          tabClassRemove();
          tabClassAdd(index);
        }
      });
    }
  });
}

export default tabs;
