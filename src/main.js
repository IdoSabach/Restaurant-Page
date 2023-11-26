import createHomePage from "./home"
import createMenuPage from "./menu"
import createContactPage from "./contact"

const main = document.createElement('div')
main.classList.add("main")

function createHeader(){
  const header = document.createElement('header')
  header.classList.add('head')
  header.textContent = "Welcome to DDD"

  return header
}

function createNav(){
  const nav = document.createElement('div')
  nav.classList.add("sub-head")

  const homeBtn = document.createElement('button')
  homeBtn.classList.add('button-nav')
  homeBtn.textContent = "Home"
  nav.appendChild(homeBtn)
  homeBtn.addEventListener('click',function(){
    main.innerHTML = "";
    main.appendChild(createHomePage())
  })

  const menuBtn = document.createElement('button')
  menuBtn.classList.add('button-nav')
  menuBtn.textContent = "Menu"
  nav.appendChild(menuBtn)
  menuBtn.addEventListener('click',function(){
    main.innerHTML = "";
    main.appendChild(createMenuPage())
  })


  const contactBtn = document.createElement('button')
  contactBtn.classList.add('button-nav')
  contactBtn.textContent = "Contact"
  nav.appendChild(contactBtn)
  contactBtn.addEventListener('click',function(){
    main.innerHTML = "";
    main.appendChild(createContactPage())
  })

  return nav
}



function createFooter(){
  const footer = document.createElement('footer')
  footer.classList.add("footer")
  footer.textContent = "Build by Ido Sabach"

  const link = document.createElement('a')
  link.href = "https://github.com/IdoSabach"
  footer.appendChild(link)

  const imageFooter = document.createElement('img')
  imageFooter.classList.add("git-icon")
  imageFooter.src = "https://img.icons8.com/ios/50/000000/github--v1.png"
  imageFooter.style.width = "15px"
  imageFooter.style.height= "15px"
  link.appendChild(imageFooter)

  return footer
}

const content = document.getElementById("content");
function mainAllView(){
  content.appendChild(createHeader())
  content.appendChild(createNav())

  main.appendChild(createHomePage())
  content.append(main)
  content.appendChild(createFooter())
}

export default mainAllView;