// gain reference to elements
const guestInput = document.getElementById('guestInput');
const addBtn = document.getElementById('addBtn');
const guestList = document.getElementById('guestList');
const categorySelect = document.getElementById('categoryType');

// add event listener to the button
addBtn.addEventListener('click', function() {
    const guestName = guestInput.value.trim();
    if (guestName !== "") {
        const li = document.createElement('li');
        li.textContent = guestName;

        // add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // add delete function to delete button
        deleteBtn.addEventListener('click', function() {
            guestList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        guestList.appendChild(li);
       
    guestInput.value = '';
        categorySelect.selectedIndex = 0; // reset category
    } else {
        alert('Please enter a guest name.');
    }

});  // clear the input field and reset category
      