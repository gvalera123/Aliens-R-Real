// YOUR CODE HERE!
var tbody = d3.select("tbody");

var filteredData = data;

function buildTable(dataTable) {
    dataTable.forEach((UFOReport) => {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
        });
    });
}   

  // Select submit button
  var submit = d3.select("#filter-btn")

  // Select input
  submit.on("click", () => {

      d3.event.preventDefault();  

      var inputElement = d3.select("#datetime");

  //Get Value
      var inputValue = inputElement.property("value");

  //Log variables
      console.log(inputElement);
      console.log(data);

  //Filter Data
      filteredData = filteredData.filter(dt => dt.datetime === inputValue);
      tbody._groups[0][0].innerHTML="";
      buildTable(filteredData);
     


  });

  buildTable(filteredData);


