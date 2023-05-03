const path = require('path');
const fs = require('fs/promises');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

/**
 * Requests the list of all contacts in database
 * @returns {array} list of objects of contacts
 */
async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

/**
 * Gets one contact according to its id
 * @param {string} contactId - id of contact
 * @returns {object} - object of contact or null, if no contact with such id in database
 */
async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(({ id }) => id === contactId);
  return result || null;
}

/**
 * Remove contact from database by its id
 * @param {string} contactId - id of contact
 * @returns {object} - object of deleted contact or null, if no contact with such id in database
 */
async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(({ id }) => id === contactId);
  if (index === -1) return null;
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

/**
 * Add new contact to database
 * @param {string} name - contact`s name
 * @param {string} email - contact`s email
 * @param {string} phone - contact`s phone number
 * @returns {object} - object of new contact
 */
async function addContact(name, email, phone) {
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
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
