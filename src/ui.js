const addressBook = new AddressBook();

function displayContacts() {
  const contactsList = document.getElementById("contact-list");
  contactsList.innerHTML = "";

  addressBook.contacts.forEach(function(contact) {
    const li = document.createElement("li");
    li.innerText = contact.fullName();
    li.addEventListener("click", function() {
      displayContactDetails(contact);
    });
    contactsList.appendChild(li);
  });
}

function displayContactDetails(contact) {
  const details = document.getElementById("contact-details");
  details.innerHTML = `
    <p><strong>Name:</strong> ${contact.fullName()}</p>
    <p><strong>Phone:</strong> ${contact.phoneNumber}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
  `;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const firstNameInput = document.getElementById("first-name").value;
  const lastNameInput = document.getElementById("last-name").value;
  const phoneInput = document.getElementById("phone-number").value;
  const emailInput = document.getElementById("email").value;

  const newContact = new Contact(firstNameInput, lastNameInput, phoneInput, emailInput);
  addressBook.addContact(newContact);
  
  document.getElementById("contact-form").reset();
}

window.addEventListener("load", function() {
  document.getElementById("contact-form").addEventListener("submit", handleFormSubmit);
  document.getElementById("show-contacts").addEventListener("click", displayContacts);
});

  