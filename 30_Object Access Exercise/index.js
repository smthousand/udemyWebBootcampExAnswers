// In index.js, you'll find a restaurant object that contains a name, address, city, state, and zipcode. 
// Your task to is to create a variable named fullAddress that points to a string using the information from restaurant. 
// fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object.
// To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.    For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:
// fullAddress //"64 Johnson Ave, Brooklyn, NY 11206"

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
const fullAddress = `${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode}`;