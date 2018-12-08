// from data.js
var tableData = data;

// YOUR CODE HERE!

var table = d3.select("table table-striped");

var tbody = d3.select("tbody");

tableData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
});
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(x => x.datetime === inputValue);

  console.log(filteredData);

  d3.selectAll("tbody tr").remove();

  filteredData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
});
});

  ;});

  
  