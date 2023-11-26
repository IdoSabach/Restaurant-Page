function createContactPage() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phone = document.createElement("div");
  contact.classList.add("phone");
  contact.appendChild(phone);
  phone.textContent = "Phone Number : 123-456-789";

  const address = document.createElement("div");
  contact.classList.add("address");
  contact.appendChild(address);
  address.textContent = "Address : The nation of Israel is alive and well!";

  const imageAddress = document.createElement("img");
  contact.classList.add("address-image");
  contact.appendChild(imageAddress);
  imageAddress.src = "./images/mapForWeb.png";
  imageAddress.style.width = '850px'

  return contact;
}

export default createContactPage;
