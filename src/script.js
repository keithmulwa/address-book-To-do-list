function Contact(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
  
  function AddressBook() {
    this.contacts = [];
  }
  
  AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
  };
  
  AddressBook.prototype.findContact = function(fullName) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i] && this.contacts[i].fullName() === fullName) {
        return this.contacts[i];
      }
    }
    return false;
  };
  
  AddressBook.prototype.deleteContact = function(fullName) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i] && this.contacts[i].fullName() === fullName) {
        this.contacts.splice(i, 1);
        return true;
      }
    }
    return false;
  };
  