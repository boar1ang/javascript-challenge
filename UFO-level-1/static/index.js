//javascript-challenge homework

// from data.js > log the array of dictionary 111 objects
var tableData = data;
console.log(tableData);

//reference table, table body
var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");

// Function to add table data ----------------------
function populateTable(tableData) {
    tbody.innerHTML = ("");
    tableData.forEach((datum) => {
        var row = tbody.append("tr");
        console.log(datum);

    Object.entries(datum).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
} 
populateTable(tableData);
cell.text.toUpperCase();
// ------------------------------------------------

var filterButton = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");

var resetButton = d3.select("#reset-btn");
var inputElement = d3.select("#city");

// -------------------------------------------------
filterButton.on("click", function() {
    d3.event.preventDefault();
    tbody.HTML("");
    
    var inputValue = inputElement.property("value");
        console.log(inputElement);
        console.log(`Value entered was : ${inputValue}`);

    var filteredResults = tableData.filter(datum => tableData.datetime === inputValue);
        console.log(filteredResults);
});

resetButton.on("click", function resetForm () {
    tbody.HTML("");
    var form = d3.select("form");
    form.submit();
    form.reset();
    return false;

})