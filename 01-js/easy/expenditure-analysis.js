/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/



var allcategories = [];
var transarray = [];


function calculateTotalSpentByCategory(transactions) {

  for (var i=0; i<transactions.length; i++){
    if (allcategories.includes(transactions[i].category) !== true){
      allcategories.push(transactions[i].category)
      transarray.push({
        category : transactions[i].category,
        totalSpent : transactions[i].price 
      })

    }
    else{
      for (var j = 0; j< transarray.length; j++){
        if (transactions[i].category === transarray[j].category){
          transarray[j].totalSpent += transactions[i].price
        }
      }
    }

  }

return transarray
}



module.exports = calculateTotalSpentByCategory;
