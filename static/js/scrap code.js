data.forEach(function(createTable) {
    console.log(createTable);
    var row = tbody.append("tr");
    });
    
    // // Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(createTable) {
    var row = tbody.append("tr");
    Object.entries(createTable).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
});
});


var filteredDate = d3.select("#datetime").property("value");

var filteredstate = d3.select("#state").property("value").toLowerCase();

var filteredCity = d3.select("#city").property("value").toLowerCase();

var filteredcountry = d3.select("#country").property("value").toLowerCase();

var filteredshape = d3.select("#shape").property("value").toLowerCase();

var filteredcomments = d3.select()
