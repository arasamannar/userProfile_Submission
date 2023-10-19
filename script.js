const form = document.querySelector("form");
const tableBody = document.querySelector('table tbody');
form.addEventListener('submit', function (e) {
    e.preventDefault();

   
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const email = document.getElementById('email').value


    const newRow = document.createElement('tr');
    newRow.innerHTML = 
        `<td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${country}</td>
        <td>${state}</td>
        <td>${pincode}</td>
        <td>${food.join(',')}</td>`;

   
    tableBody.appendChild(newRow);

   
    form.reset();
})