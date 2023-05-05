const path = require('path');
const fs = require('fs/promises');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

/**
 * Get the list of all contacts in database
 * @returns {array} - list of objects of contacts
 */
async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Get one contact according to its id
 * @param {string} contactId - id of contact
 * @returns {object} - contact or null, if no contact with such id in database
 */
async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find(({ id }) => id === contactId);
    return result || null;
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Remove contact from database by its id
 * @param {string} contactId - id of contact
 * @returns {object} - deleted contact or null, if no contact with such id in database
 */
async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(({ id }) => id === contactId);
    if (index === -1) return null;
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Add new contact to database
 * @param {string} name - contact`s name
 * @param {string} email - contact`s email
 * @param {string} phone - contact`s phone number
 * @returns {object} - new contact
 */
async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
