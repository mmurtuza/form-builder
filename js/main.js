
// var addNewRow = document.getElementById('addRow');
// var activityNumber = 2;



// document.getElementById('addItem').addEventListener('click', function () {

//     addNewRow.innerHTML += '<tr><td>' + activityNumber + '</td><td><label>Activity Log: </label><br/><input type="text" name="actlog' + activityNumber + '" class="required"></td><td><label>Time: </label><br/><input type="time" name="time' + activityNumber + '" class="required"></td></tr>';

// });

let myForm = document.getElementById('myForm');
let formData = new FormData(myForm);
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
    for (let [key, value] of fd) {
        console.log(`${key}: ${value}`)
    }
});


// window.onload = function () {

//     // Initialize the activityNumber
//     var activityNumber = 3;

//     // Select the add_activity button
//     var addButton = document.getElementById("addItem");

//     // Select the table element
//     var tracklistTable = document.getElementById("addRow");

//     // Attach handler to the button click event
//     addButton.onclick = function () {

//         // Add a new row to the table using the correct activityNumber
//         tracklistTable.innerHTML += '<tr><td>' + activityNumber + '</td><td><label>Activity Log: </label><br/><input type="text" name="actlog' + activityNumber + '" class="required"></td><td><label>Time: </label><br/><input type="time" name="time' + activityNumber + '" class="required"></td></tr>';

//         // Increment the activityNumber
//         activityNumber += 1;
//     }

// }