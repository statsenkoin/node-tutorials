const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.table(allContacts, ['id', 'name', 'email', 'phone']);
    case 'get':
      const contactById = await contacts.getContactById(id);
      return console.log('contactById :>> ', contactById);
      return;
    case 'add':
      const newContact = await contacts.addContact(name, email, phone);
      return console.log('newContact :>> ', newContact);
    case 'remove':
      const removedContact = await contacts.removeContact(id);
      return console.log('removedContact :>> ', removedContact);
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction({ action: 'list' });

// invokeAction({ action: 'get', id: 'rsKkOQUi80UsgVPCcLZZW' });

// invokeAction({
//   action: 'add',
//   name: 'John Smith',
//   email: 'john.smith@mail.com',
//   phone: '(123) 222-33-44',
// });

// invokeAction({ action: 'remove', id: 'cju19uXkuGfhrUQ2zDsDd' });
