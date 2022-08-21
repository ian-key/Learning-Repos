const menu = {
    _courses: {
        appetizers: [],                             // Add empty arrays to hold multiple options for each course
        mains: [],
        desserts: []
    },

    get appetizers() {                              // Set getter to return 
        return this._courses.appetizers;
    },

    get mains() {
        return this._courses.mains;
    },

    get desserts() {
        return this._courses.desserts;
    },
    
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizersIn;
    },
    
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
            };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish)
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price for your meal is $${totalPrice}.`

    },
};

menu.addDishToCourse('appetizers', 'soup', 3.99);
menu.addDishToCourse('appetizers', 'fish', 4.99);
menu.addDishToCourse('appetizers', 'pate', 5.99);
menu.addDishToCourse('mains', 'chicken', 13.99);
menu.addDishToCourse('mains', 'beef', 12.99);
menu.addDishToCourse('mains', 'vegetables', 12.49);
menu.addDishToCourse('desserts', 'ice cream', 5.99);
menu.addDishToCourse('desserts', 'cheese', 5.99);
menu.addDishToCourse('desserts', 'cake', 5.99);

const meal = menu.generateRandomMeal();
console.log(meal);
