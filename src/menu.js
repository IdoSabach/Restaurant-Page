function createMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu-grid");

  for (let i = 0; i < 4; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    menu.appendChild(box);

    const boxImage = document.createElement('div')
    boxImage.classList.add("img-hmburger")
    box.appendChild(boxImage)

    const image = document.createElement('img')
    image.classList.add("image-size")
    boxImage.appendChild(image)
    image.src = "./images/icons8-hamburger-96.png"

    const textBox = document.createElement('div')
    box.appendChild(textBox)
    textBox.classList.add('text-for-food')
    textBox.textContent = "A kind of hamburger"
  }

  return menu
}
export default createMenuPage;

