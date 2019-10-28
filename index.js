// Your code here
function createEmployeeRecord(employee) {
  employee.forEach(function(e) {
    e.fullName = '${e.firstName} ${e.familyName}'
  })
}
