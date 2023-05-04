const contacts = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      try {
        const allContacts = await contacts.listContacts();
        return console.table(allContacts, ['id', 'name', 'email', 'phone']);
      } catch (error) {
        console.log(error.message);
      }
    case 'get':
      const contactById = await contacts.getContactById(id);
      return console.log('contactById :>> ', contactById);
      try {
      } catch (error) {
        console.log(error.message);
      }
    case 'add':
      try {
        const newContact = await contacts.addContact(name, email, phone);
        return console.log('newContact :>> ', newContact);
      } catch (error) {
        console.log(error.message);
      }
    case 'remove':
      try {
        const removedContact = await contacts.removeContact(id);
        return console.log('removedContact :>> ', removedContact);
      } catch (error) {
        console.log(error.message);
      }
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
