//starting freelancer array with at least 2 objects [{name: 'Sam', occupation: 'Programmer', price: 50}]
const freelancer = [
    { name: "Stephen", occupation: "programmer", price: 50 },
    { name: "Tiffany", occupation: "artist", price: 75 },
];
//array of names
const names = ["Peter", "Alexi", "Becca", "Cameron", "Jacqueline"];

//array of occupations
const occupations = ["writer", "artist", "EA", "contractor", "singer"];


/**
 * create init function
 *
 *      1. select freelancer_container from DOM
 *      2. create DOM elements
 *          - table
 *          - thead
 *              - tr (header row)
 *          - tbody
 *      3. Add text to the header row where the text matches the object key of a freelancer
 *      4. Append header row to the thead
 *      5. Append thead and tbody to table
 *      6. Append table to freelancer_container
 *      7. Call the function created below to render the freelancer array
 *      8. Call the function created below to render the average price
 *
 */

const init = () => {
    const freelancer_container = document.querySelector('.freelancer_container');

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const header_row = document.createElement("tr");

    for (let key in freelancer[0]) {
        const th = document.createElement("th");
        th.textContent = key;
        header_row.append(th);
    }
    thead.append(header_row);
    table.append(thead);
    table.append(tbody);

    freelancer_container.append(table);
}



/**
 * Create function to render the freelancer array to the DOM
 *
 *      1. select tbody from DOM
 *      2. map over freelancer array
 *          2-1. create elements
 *              - tr
 *              - td (name)
 *              - td (occupation)
 *              - td (starting price)
 *          2-2. Add text to each td representing the value of the freelancer object
 *          2-3. Append tds to tr
 *          2-4. return tr
 *      3. replace children of tbody with the elements created in the map
 */

const freelancerArray = () => {
    const freeTable = document.querySelector("tbody");

    const freeElements = freelancer.map((freelancers) => {
        const row = document.createElement("tr");

        const freelancer_name = document.createElement("td");
        freelancer_name.textContent = freelancers.name;

        const freelancer_occupation = document.createElement("td");
        freelancer_occupation.textContent = freelancers.occupation;

        const freelancer_price = document.createElement("td");
        freelancer_price.textContent = freelancers.price;

        row.append(freelancer_name, freelancer_occupation, freelancer_price);

        return row;
    });

    freeTable.replaceChildren(...freeElements);
}

/**
 * Create a function to render the average freelancer price to the DOM
 *
 *      1. get average_price span and p tag from DOM
 *      2. call sum function with the freelancer array
 *      3. call avg function passing the calculated sum and the freelancer array
 *      4. update textContent of the span with the avg
 *          - if textContent doesn't work use innerHTML
 *      5. replace children of p tag with the updated span
 */

/**
 * Create function to sum all prices in our freelancer array
 */
const avg = () => {
    //total price
    const sum = freelancer.reduce((sum, item) => sum + item.price, 0);
    const average = sum / freelancer.length;
    const rounded = average.toFixed(2);
    return rounded;
}

/**
 *
 * Function to get average of given price with array
 *
 * @param {Number} totalPrice
 * @param {Array} arr
 * @returns Number
 */
//function avg(totalPrice, arr) {
//  return totalPrice / arr.length;
//}

/**
 * Create a function to add a new freelancer to the freelancer array
 *
 *      1. create variable for the new freelancer object
 *      2. set the name value of our new freelancer to a random name selected from our names array
 *      3. set the occupation value of our new freelancer to a random occupation selected from our occupations array
 *      4. generate random price for new freelancer
 *
 * new_freelancer --> {name: 'Alex', occupation: 'writer', price: 75 }
 *
 *      5. add new freelancer to the freelancers array
 *      6. Call the function created above to render the freelancer array
 *      7. Call the function created above to render the average price
 *
 */
const generateFreelancer = () => {

    const name = Math.floor(Math.random() * names.length);
    const occupation = Math.floor(Math.random() * occupations.length);
    const price = Math.floor(Math.random() * 125);
    const newFreelancer = { name: names[name], occupation: occupations[occupation], price: price };
    return newFreelancer;
}
const addFreelancer = () => {
    const newFreelancer = generateFreelancer();
    freelancer.push(newFreelancer);
    freelancerArray();
    const avgPrice = document.querySelector(".average_price")
    avgPrice.textContent = avg();
}


//  const newName = names[Math.floor(Math.random() * names.length)];
//   const newOccupation = occupations[Math.floor(Math.random() * occupations.length)];

//   freelancer.push(newName, newOccupation);
//  freelancerArray();

//setInterval calling the function that adds a new freelancer every second aka 1000 miliseconds
init();


setInterval(addFreelancer, 1000);
freelancerArray();
//call init function
