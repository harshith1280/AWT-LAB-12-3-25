//crud.js

class Crud {
    constructor() {
        this.data = [];
    }

    // Create operation
    create(item) {
        this.data.push(item);
        return item;
    }

    // Read operation
    read() {
        return this.data;
    }

    // Update operation
    update(index, newItem) {
        if (index >= 0 && index < this.data.length) {
            this.data[index] = newItem;
            return newItem;
        }
        throw new Error('Index out of bounds');
    }
    
    // Delete Operation

    delete(index) {
        if (index >= 0 && index < this.data.length) {
            return this.data.splice(index, 1);
        }
        throw new Error('Index out of bounds');
    }
}

module.exports = CRUD;
