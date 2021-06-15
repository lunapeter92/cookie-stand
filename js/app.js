'use strict';

//Parent element where table will go.
const divEl = document.getElementById('cookiesales');

//Array with hours that store is open
const storeHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm']

//Constructor Method with basic properties for each store
function Store(name, minCust, maxCust, avgCookiesSold){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesSold = avgCookiesSold;
  this.cookiesSoldPerHour = [];
  //this.hourlyCustomerCount = []
  //Pushes each store data to store array  
  this.storeArray.push(this);
}

//Array that stores store data for each instance of store.
Store.prototype.storeArray = [];

//Array that stores hourly customer count
// Store.prototype.hourlyCustomerCount = [];

//Array that stores hourly cookie's sold
// Store.prototype.cookiesSoldPerHour = [];

//Protype function that gets random customer count per hour
Store.prototype.getCustomerCount = function(minCust, maxCust){
  let hourlyCustomers = Math.floor(Math.random() * (maxCust - minCust) + minCust);
  console.log(hourlyCustomers);
  return hourlyCustomers;
  //this.hourlyCustomerCount.push(hourlyCustomers);
}

//Prototype function that gets random customer count per hour
Store.prototype.getHourlyCookieSales = function(){
  // let hourlyCookieSales = cust * avgCookies;
  for(let i = 0; i < storeHours.length; i++){
    let hourlyCookieSales = this.getCustomerCount(this.minCust, this.maxCust) * this.avgCookiesSold;
    console.log(hourlyCookieSales);
    this.cookiesSoldPerHour.push(hourlyCookieSales);
  }
}


//Renders store DOM elements
Store.prototype.createStoreElements = function(){
  const articleEl = document.createElement('article');
  divEl.appendChild(articleEl);
  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl)
  const headerEl = document.createElement('thead');
  tableEl.appendChild(headerEl);
  const headerRow = document.createElement('tr');
  headerEl.appendChild(headerRow);
  const blankCell = document.createElement('td');
  headerRow.appendChild(blankCell);
  //render store hours header content
  for(let i = 0; i < storeHours.length; i++){
    const thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    headerRow.appendChild(thEl);
  }
  //creating table rows
  const row1 = document.createElement('tr');
  tableEl.appendChild(row1);
  const row1cell1 = document.createElement('td');
  row1.appendChild(row1cell1);
  row1cell1.textContent = this.name;
  for(let i = 0; i < this.cookiesSoldPerHour.length; i++){
    const salesCells = document.createElement('td');
    salesCells.textContent = this.cookiesSoldPerHour[i];
    row1.appendChild(salesCells);
  }
  // const row2 = document.createElement('tr');
  // tableEl.appendChild(row2);
  // const row3 = document.createElement('tr');
  // tableEl.appendChild(row3);
  // const row4 = document.createElement('tr');
  // tableEl.appendChild(row4);
  // const row5 = document.createElement('tr');
  // tableEl.appendChild(row5);
  // const row6 = document.createElement('tr');
  // tableEl.appendChild(row6);
  
}


// <!-- article
//           table
//             table header (Store Hours)
//             tr (6)
//             td (store name)
//               td (avg cookie per hour)
//               td (daily total)
//           /table
//          /article 
//     -->


//Global Function that renders all stores.
function renderAllStores(){
  for(let i = 0; i < Store.prototype.storeArray.length; i++){
    let currentStore = Store.prototype.storeArray[i];
    currentStore.getCustomerCount(currentStore.minCust, currentStore.maxCust);
    currentStore.getHourlyCookieSales();
    currentStore.createStoreElements();
  }
}


//declare stores
const store1 = new Store('Seattle', 25, 55, 6);
const store2 = new Store('Tokyo', 15, 23, 5);
const store3 = new Store('Dubai', 26, 31, 9);
const store4 = new Store('Paris', 23, 34, 7);
const store5 = new Store('Lima', 3, 7, 11);
console.log(store1);

renderAllStores();




// const seattle = {
//   name: '',
//   minCust,
//   maxCust,
//   customersPerHour: 0,
//   cookiesPerHour: [16,20,35,48,56,77,93,144,119,84,61,23,42,57],
//   getAvgCust: function(){
//    this.customersPerHour = getCustomerCount(23, 65);
//   },
//   getCookiePerHour: function(){
//     this.cookiesPerHour.push(getHourlyCookieSales(this.customersPerHour, 6.3));
//   }
  
// }

// seattle.getAvgCust()
// seattle.getCookiePerHour();





// function returnCookies(){
//   for(let i = 0; i < seattle.cookiesPerHour.length; i++){
//     const cookie = document.createElement('li')
//    orderedList.appendChild(cookie)
//     cookie.textContent = `${seattle.cookiesPerHour[i]}`;
//   }
// }


// const headerEl = document.createElement('h2');
// headerEl.textContent = `${seattle.name}`;
// divEl.appendChild(headerEl);
// const orderedList = document.createElement('ol');
// divEl.appendChild(orderedList);
// // // const custList = document.createElement('li');
// // const cookieList = document.createElement('li');
// // // orderedList.appendChild(custList);
// // orderedList.appendChild(cookieList);
// // custList.textContent = `Customers: ${seattle.customersPerHour}`;
// //  custList.textContent = `Cookies: ${seattle.cookiesPerHour}`;
// returnCookies();
