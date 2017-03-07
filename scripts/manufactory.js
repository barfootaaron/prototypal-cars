"use strict";

console.log('prototypes');

/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
var Car = function() {
  this.manufactured_date = Date.now();
};

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */
var MyFavoriteMake = function() {
  this.manufacturer = "Toyota";
};

// Set the prototype to a new Car instance
MyFavoriteMake.prototype = new Car();

/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
var MyFavoriteModel = function() {
  this.model = "4Runner";
  this.horsepower = "270hp";
  this.doors = 5;
  this.drivetrain = "4wd";
};
// Set the prototype to appropriate model you created above and set the model name argument
MyFavoriteModel.prototype = new MyFavoriteMake();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var myFirstFavoriteCar = new MyFavoriteModel();
myFirstFavoriteCar.plate_number = "I love my owner";
console.log(myFirstFavoriteCar);

var mySecondFavoriteCar = new MyFavoriteModel();
mySecondFavoriteCar.plate_number = "I love dogs";

var myThirdFavoriteCar = new MyFavoriteModel();
myThirdFavoriteCar.plate_number = "I love cats";

/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
var AnotherModel = function() {
  this.model = "Land Cruiser";
};
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */
 AnotherModel.prototype = new MyFavoriteMake();



/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */

var myBigCar = new AnotherModel;
myBigCar.plate_number = 'THE BIG ONE';
console.log(myBigCar);






