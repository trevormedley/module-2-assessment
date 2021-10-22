///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce(function(prev, cur) {
    return prev + cur.price;
  }, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

let calcFinalPrice = (cartTotal, couponValue, tax) => {
    return ((cartTotal + (cartTotal * (tax * 1)) - couponValue));
}

console.log(calcFinalPrice(100, 10, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
The properties I thought would be valuable to the restaurant are Customer Name, Phone Number, Email, Delivery, and Address. Customer named will be inputed as a string and is very important so that our restaraunt knows the name of the customer we are serving. Phone number will also be inputed as a string, and is important so that if anything happens to the order we have a reliable way to contact the customer. Email will also be inputed as a string and is important to have a backup means of communication, as well as send the customer updates on their order. The delivery input will be a boolean, if the input is false, it will ask the user to input a time for pick up, and if it is true the user will continue to input delivery information. The final input is  address, this will be input as a string and be necessary in case the customer chooses to have their order delivered.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customerObject = [
    {
        customerName : 'Trevor Medley',
        phoneNumber : '(586) 453-4521',
        email : 'trevormedley10@gmail.com',
        delivery : true,
        address : '1234 Boolean Lane',
    }
]