let employyees = []
function addEmployee() {
    let name = document.getElementById("name").value
    let empId = document.getElementById("empId").value
    let salary = parseFloat(document.getElementById("salary").value)
    let department = document.getElementById("department").value
    if (name === "" || empId === "" || isNaN(salary) || department === "") {
        alert("Please fill all the fields correctly.")
        return
    }
    let employee = {
        name: name,
        empId: empId,
        salary: salary,
        dep: department
    }
    employyees.push(employee)
    alert("Employee added successfully!")
    document.getElementById("name").value = ""
    document.getElementById("empId").value = ""
    document.getElementById("salary").value = ""
    document.getElementById("department").value = ""
}
function displayEmployees() {
    let output = "<h1>All Employee </h1>";
    employyees.forEach(emp => {
        output += `
          Name: ${emp.name}| 
          EmpId: ${emp.empId}|
          Salary: ${emp.salary}|
          Department: ${emp.dep}
          <br>`;
          alert(output)

          
    document.getElementById("output").innerHTML = output
    })
}

function filtersalary() {
    let filtered    = employyees.filter(emp => emp.salary > 50000)
    let output = "<h1>Employees with Salary > 50000</h1>"
    filtered.forEach(emp => {
        output += `
          Name: ${emp.name}|
          Salary: ${emp.salary}
          <br>`;
    });
    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = employyees.reduce((sum, emp) => sum + emp.salary, 0)
    document.getElementById("output").innerHTML = "<h1>Total Salary:</h1>"+ total
}
function averageSalary() {
    if (employyees.length === 0) {
        document.getElementById("output").innerHTML = "<h1>No employees to calculate average salary.</h1>"
        return
    }
        let total = employyees.reduce((sum, emp) => sum + emp.salary, 0)
        let average = total / employyees.length
        document.getElementById("output").innerHTML = "<h1>Average Salary:</h1>" + average.toFixed(2)
}
function countByDepartment() {
    let departmentCount = {}
    employyees.forEach(emp => {
        if (departmentCount[emp.dep]) {
            departmentCount[emp.dep]++}
        else {
            departmentCount[emp.dep] = 1
        }
        let output = "<h1>Employee Count by Department:</h1>"
        for (let dep in departmentCount) {
            output += `${dep}: ${departmentCount[dep]}<br>` 
        }
        document.getElementById("output").innerHTML = output
        })}