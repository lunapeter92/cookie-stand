'use strict';

const seattle = {
  name: 'Seattle',
  customersPerHour: 0,
  cookiesPerHour: [16,20,35,48,56,77,93,144,119,84,61,23,42,57],
  getAvgCust: function(){
   this.customersPerHour = getCustomerCount(23, 65);
  },
  getCookiePerHour: function(){
    this.cookiesPerHour.push(getHourlyCookieSales(this.customersPerHour, 6.3));
  }
  
}

seattle.getAvgCust()
seattle.getCookiePerHour();

function getCustomerCount(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getHourlyCookieSales(cust, avgCookies){
  return Math.floor(cust / avgCookies);
}

function returnCookies(){
  for(let i = 0; i < seattle.cookiesPerHour.length; i++){
    const cookie = document.createElement('li')
   orderedList.appendChild(cookie)
    cookie.textContent = `${seattle.cookiesPerHour[i]}`;
  }
}


const divEl = document.getElementById('cookiesales');
const headerEl = document.createElement('h2');
headerEl.textContent = `${seattle.name}`;
divEl.appendChild(headerEl);
const orderedList = document.createElement('ol');
divEl.appendChild(orderedList);
// // const custList = document.createElement('li');
// const cookieList = document.createElement('li');
// // orderedList.appendChild(custList);
// orderedList.appendChild(cookieList);
// custList.textContent = `Customers: ${seattle.customersPerHour}`;
//  custList.textContent = `Cookies: ${seattle.cookiesPerHour}`;
returnCookies();
