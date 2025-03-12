// index.js

const CRUD = require('./crud');

const crud = new CRUD();

// Create
console.log('Creating items...');
crud.create({ id: 1, name: 'Item 1' });
crud.create({ id: 2, name: 'Item 2' });
console.log('Items after creation:', crud.read());

// Read
console.log('Reading items...');
const items = crud.read();
console.log('Current items:', items);

// Update
console.log('Updating item at index 0...');
crud.update(0, { id: 1, name: 'Updated Item 1' });
console.log('Items after update:', crud.read());

// Delete
console.log('Deleting item at index 1...');
crud.delete(1);
console.log('Items after deletion:', crud.read());
