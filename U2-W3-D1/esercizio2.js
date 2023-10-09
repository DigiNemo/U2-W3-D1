const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const contacts = [];

class Contact {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

const renderList = function () {
  const contactsList = document.querySelector("ul");
  contactsList.innerHTML = "";
  contacts.forEach((contact) => {
    const newLi = document.createElement("li");
    newLi.innerText = `Pet Name: ${contact.petName} 
    Owner Name: ${contact.ownerName} 
    Species: ${contact.species} 
    Breed: ${contact.breed}`;
    contactsList.appendChild(newLi);
  });
};

const formReference = document.querySelector("form");
formReference.addEventListener("submit", function (e) {
  e.preventDefault();
  const newContact = new Contact(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );

  console.log("CONTATTO CREATO", newContact);
  contacts.push(newContact);
  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";

  renderList();
});
