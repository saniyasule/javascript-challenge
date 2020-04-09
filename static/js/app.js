// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildtable(tableData) {
    tbody.html("");
}
tableData.forEach((datarow) => {
    var row = tbody.append("tr");
    Object.entries(datarow).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
}); 


//date_to_filter = []
var filterButton = d3.select("#filter-btn")
filterButton.on("click", function() {
    tbody.html("")
    var filterTab = d3.select(".form-control")
    var inputDate = filterTab.property("value")
    console.log(inputDate)
    var filteredData = tableData.filter(element => 
        element.datetime === inputDate)
        console.log(filteredData)
    filteredData.forEach((info) => {
        var row = tbody.append("tr")
        Object.entries(info).forEach(([key,value]) => {
            var cell = row.append("td")
            cell.text(value)
        })
    })
    
})