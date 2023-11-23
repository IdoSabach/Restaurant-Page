function createHomePage(){
  const home = document.createElement("div")
  home.classList.add("home")

  const textOfHeadHome = document.createElement('div')
  textOfHeadHome.classList.add("text-of-head-main")
  textOfHeadHome.textContent = "The largest hamburger chain in the world!"
  home.appendChild(textOfHeadHome);

  const homeImg = document.createElement("img")
  homeImg.classList.add("ido-img")
  homeImg.src = "./images/ido-food.jpeg"
  home.appendChild(homeImg)
  
  const footerOfHome = document.createElement("div")
  footerOfHome.classList.add("footer-text")
  footerOfHome.textContent = "Order online or visit us!"
  home.appendChild(footerOfHome)
}

function viewHome(){
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createHomePage())
}

export default viewHome;

