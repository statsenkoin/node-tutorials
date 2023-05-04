# Node-tutorials

This repository consists of several parts - test tasks from the NodeJs course.

Each task located in a separate branch.

## hw01 - is a simple CLI application that simulates access to file in a database.

It consists of local json file as a database and a set of function to get data from this database.

### Usage

#### To run the application

1. Clone this repository to your locale PC;
2. Add dependencies in the project directory, open the console (bash is
   recommended) and run:
   ```
   npm i  //or
   npm install
   ```

#### Options

Open your preferred CLI to have access to:

- get a list of all contacts (name, email, phone number, contact`s id);
- get chosen contact by its id;
- add a new contact to the database;
- delete contact.

#### To get a list of all contacts, input in console

```
node index.js --action="list"
//or in short
node index -a list
```

![List of contacts](https://monosnap.com/image/hgySWQ7K3spnywLPm8ayzeVKH0Q0SR)

#### To get chosen contact by its id

```
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
//or in short
node index -a get -i 05olLMgyVQdWRwgKfg5J6
```

![Get contact by id](https://monosnap.com/image/TXEl7fLjZXmMisahyGQwAzhoGldb6j)

#### To add new contact

```
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
//or in short
node index -a add -n Mango -e mango@gmail.com -p 322-22-22
```

![Add new contact](https://monosnap.com/image/PPvVkBp7CPrHwQYyfGrjYIq4Plr9Wz)

#### To delete contact

```
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
//or in short
node index -a remove -i qdggE76Jtbfd9eWJHrssH
```

![Remove contact](https://monosnap.com/image/gtLeTNKofLcd32M2AEgntZYuD6aYxF)
