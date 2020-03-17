//javascript-challenge homework

// from data.js > log the array of dictionary 111 objects
var tableData = data;
console.log(tableData);

//reference table, table body
var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");

// Function to add the table data ----------------------
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

// Reference the filter button --------------------
var filterButton = d3.select("#filter-btn");
var inputElement0 = d3.select("#datetime"); 
var inputElement1 = d3.select("#city");
var inputElement2 = d3.select("#state");
// -------------------------------------------------

filterButton.on("click", function() 
{
    d3.event.preventDefault();
    //clear content in table body
    tbody.html("");    
    
    var inputValue0 = inputElement0.property("value");
        console.log(`Date value entered was : ${inputValue0}`);
    var inputValue1 = inputElement1.property("value");
        console.log(`City value entered was ${inputValue1}`);
    var inputValue2 = inputElement2.property("value");
        console.log(`State value entered was ${inputValue2}`);
   
    var filteredResults = tableData.filter(datum => datum.datetime === inputValue0 || datum.city === inputValue1 || datum.state === inputValue2);
        console.log(filteredResults);
        filteredResults.forEach((datum) => {
            var row = tbody.append("tr");
                
        Object.entries(datum).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        populateTable(filteredResults);
    }); 
});
// -------------------------------------------------


//Reference the reset button & add reset/reload function
var resetButton = d3.select("#reset-btn");

resetButton.on("click", function resetForm () {
    tbody.html("");
    var form = d3.select("form");
    window.location.reload();
    populateTable(tableData);
    return true;
});
// --------------------------------------------------
