const page = (() => {
  const clearHTML = () => {
    main.innerHTML = ""
  }
  const main = document.getElementById("content");
  const newDiv = document.createElement('div')
  const attributes = 
    ["content", 
    "navbar", 
    "tab",
    "about", 
    "menu", 
    "contact", 
    "tabContent",
    "selected",
    "unselected"
  ];
  const tabText = ["About", "Menu", "Contact Us"]
  const navBar = () => {
    newDiv.classList.add(attributes[1]);
    main.appendChild(newDiv);
  };
  const tabs = () => {
    const navbar = document.querySelector(".navbar")
  
    for(let i = 0; i < 3; i++) {
      const newTab = document.createElement("div")
        newTab.classList.add(attributes[2])
        newTab.setAttribute("data-tab", attributes[i+3])
        newTab.textContent = tabText[i]
        navbar.appendChild(newTab)
    }
    const selected = document.querySelector("[data-tab='about']") //placeholder
    selected.classList.toggle("selected")                         //delete later
  }
  const tabContent = () => {
    const tabContent = document.createElement("div")
    tabContent.classList.add(attributes[6])
    main.appendChild(tabContent)
  }
  const bottomBar = () => {
    const bottomBar = document.createElement("div")
    bottomBar.classList.add("bottomBar")
    bottomBar.innerHTML = "Designed by Jon Naske [github logo]"
    main.appendChild(bottomBar)
  }  
  const build = () => {
    clearHTML()
    navBar()
    tabs()
    // tabContent()
    bottomBar()
  }
  return {
    clearHTML,
    navBar,
    tabs,
    tabContent,
    build,
    bottomBar
  }
  

})()
export default page;