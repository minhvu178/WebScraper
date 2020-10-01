var employeeDataPromise = d3.csv("employee.csv");

var successFCN = function(employeeData)
{
    console.log(employeeData)
    var rows = d3.select("table tbody")
      .selectAll("tr")
      .data(employeeData)
      .enter()
        .append("tr")
    
    rows.append("td")
        .text(function(employee){
        return employee.Firstname+' '+employee.Lastname+' '+employee.Longlastname;
    })
    
    rows.append("td")
        .text(function(employee){
        return employee.Title;
    })
    
    rows.append("td")
        .text(function(employee){
        return employee.Email;
    })
    
}

var failFCN = function(errorMsg)
{
    console.log("Something went wrong", errorMSG);
}

employeeDataPromise.then(successFCN,failFCN);