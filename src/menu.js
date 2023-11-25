function createMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu-grid");

  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    menu.appendChild(box);

    const boxImage = document.createElement('div')
    boxImage.classList.add("img-hmburger")
    box.appendChild(boxImage)

    const image = document.createElement('img')
    image.classList.add("image-size")
    image.appendChild(boxImage)
    image.src = "https://img.icons8.com/fluency/48/hamburger.png"

    const textBox = document.createElement('div')
    box.appendChild(textBox)
    textBox.classList.add('text-for-food')
    textBox.textContent = "A kind of hamburger"
  }
}

function viewMenu(){
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createMenuPage())
}

export default viewMenu;
