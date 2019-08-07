// from data.js
var tableData = data;

// creating the variables to create the event listener for the button and populating my table
var filter_button = d3.select("#filter-btn")

var tbody = d3.select("tbody")

var resetbtn = d3.select("#reset-btn");


//building the table
// Use `Object.entries` to fill in each value
// Append a cell to the row for each value

  
function createTable(ufotable) {
    var row = tbody.append("tr");
    
    Object.entries(ufotable).forEach( ([key, value]) => {
    
    var cell = tbody.append("td");
    
    cell.text(value);
  });

//https://stackoverflow.com/questions/50996553/how-to-populate-an-html-table-from-javascript-object
createTable(tableData); 

//event listener on filter_button

filter_button.on("click", function() {
    
    d3.event.preventDefault(); 

    var inputDate = d3.select("#datetime").property("value");

    var inputCity = d3.select("#city").property("value");

    var inputState = d3.select("#state").property("value");

    var inputCountry = d3.select("#country").property("value"); 

    var inputShape = d3.select("#shape").property("value"); 

    var inputComments= d3.select("#comments").property("value"); 

    var FilteredData = tableData; 

if (inputDate != "") {
     FilteredData=  FilteredData.filter(data => data.datetime === inputDate);
};  

if (inputCity != "") {
    FilteredData=  FilteredData.filter(data => data.city === inputCity);
};  

if (inputState != "") {
    FilteredData=  FilteredData.filter(data => data.state === inputState);
};  

if (inputCountry != "") {
    FilteredData=  FilteredData.filter(data => data.country === inputCountry);
};  

if (inputShape != "") {
    FilteredData=  FilteredData.filter(data => data.shape === inputShape);
};  

if (inputComments != "") {
    FilteredData=  FilteredData.filter(data => data.comments === inputComments);
};  

elseif;{
    row.append.text("No records! Dumb bit"); 
  };

createTable(filteredData);

})
};

resetbtn.on("click", function() {
    tbody.html("");
    createTable(tableData)
})
    
    
    


    


