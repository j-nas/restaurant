import page from "./pageLoad";
import aboutTab from "./about";
import contactTab from "./contact";
import menuTab from "./menu";
page.build();
aboutTab.render();
// document.onload(aboutTab())
const tabSelection = (() => {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("selected");
      });
      tab.classList.toggle("selected");
      handler(tab.dataset.tab);
    });
  });
  const handler = (tab) => {
    const oldContent = document.querySelector(".tabContent");
    switch (tab) {
      case "about":
        oldContent.remove();
        aboutTab.render();
        break;
      case "menu":
        oldContent.remove();
        menuTab.render();
        break;
      case "contact":
        oldContent.remove();
        contactTab.render();
        break;
    }
  };
  return {
    handler,
  };
})();
tabSelection.handler("about");
