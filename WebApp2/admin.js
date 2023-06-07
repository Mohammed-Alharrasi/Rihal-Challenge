const nightModeToggle = document.getElementById('nightModeToggle');

// Event listener for night mode toggle button
nightModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night-mode'); // Toggles the 'night-mode' class on the body element
});

const ul = document.querySelector('ul'); // Selects the <ul> element

var btnIP = false; // Indicates whether a button is in progress (e.g., modifying or removing)

let itemsArray = localStorage.getItem('items') ? // Retrieve the items from localStorage, if available
  JSON.parse(localStorage.getItem('items')) : [];

showList(); // Calls the function to display the initial list based on the selected options

function addTask(text) {
  const li = document.createElement('li'); // Create a new <li> element

  // Create label and input elements for each task detail
  var labName = document.createElement('label');
  labName.textContent = 'Name:    ';

  var liName = document.createElement('input');
  liName.type = 'text';
  liName.id = "liName"
  liName.value = text.name; 
  liName.readOnly = true;
  liName.style.backgroundColor = 'transparent';

  var labClass = document.createElement('label');
  labClass.textContent = 'Class:  ';

  var liClass = document.createElement('input');
  liClass.type = 'text';
  liClass.value = text.class; 
  liClass.readOnly = true;
  liClass.style.backgroundColor = 'transparent';

  var labCountry = document.createElement('label');
  labCountry.textContent = 'Country:  ';

  var liCountry = document.createElement('input');
  liCountry.type = 'text';
  liCountry.value = text.country;
  liCountry.readOnly = true;
  liCountry.style.backgroundColor = 'transparent';

  var labAge = document.createElement('label');
  labAge.textContent = 'Age:  ';

  var liAge = document.createElement('input');
  liAge.type = 'number';
  liAge.value = text.age; 
  liAge.readOnly = true;
  liAge.style.backgroundColor = 'transparent';

  // Validate the input
  if(/[^a-zA-Z]/.test(liName.value) || /[^a-zA-Z]/.test(liCountry.value) || /[^0-9]/.test(liAge.value)){
    alert('Invalid input:\nName and Country should only contain letters.\nAge should only contain numbers.');
    console.log("wrong input");
  } else if (liName.value === '' || liClass.value === '' || liCountry.value === '' || liAge.value === '') {
    alert('Please fill in all the fields.');
  } else {
    console.log("correct input");
    // Append the label and input elements to the list item
    li.appendChild(labName);
    li.appendChild(liName);
    li.appendChild(document.createElement('br'));

    li.appendChild(labClass);
    li.appendChild(liClass);
    li.appendChild(document.createElement('br'));

    li.appendChild(labCountry);
    li.appendChild(liCountry);
    li.appendChild(document.createElement('br'));

    li.appendChild(labAge);
    li.appendChild(liAge);
    li.appendChild(document.createElement('br'));

    ul.appendChild(li); // Append the list item to the <ul> element
    
    return true; // Indicates that the task was successfully added
  }
}

function add() {
  if(!btnIP) { // Check if a button is not in progress
    var nameS = document.getElementById('name').value;
    var clas = document.getElementById('class').value;
    var country = document.getElementById('country').value;
    var age = document.getElementById('age').value;
    const info = {
      name: nameS,
      class: clas,
      country: country,
      age: age,
    }

    dataAdded = addTask(info); // Call the addTask function to add the task details to the list
    if(dataAdded) {
      itemsArray.push(info); // Add the task information to the itemsArray
      localStorage.setItem('items', JSON.stringify(itemsArray)); // Store the itemsArray in localStorage
    }
  }
}

function del() {
  if(!btnIP) { // Check if a button is not in progress
    localStorage.clear(); // Clear the localStorage
    ul.innerHTML = ''; // Clear the <ul> element
    itemsArray = []; // Reset the itemsArray to an empty array
  }
}


function remove() {
    var rmBTN = document.getElementById('remove');
  
    if (rmBTN.textContent === 'remove' && !btnIP) {
      rmBTN.textContent = "Done Removing";
      btnIP = true;
      var listItems = document.querySelectorAll('#list li');
  
      listItems.forEach(function(li) {
        li.addEventListener('click', removeListItem); // Add click event listener to each list item
      });
    } else if (rmBTN.textContent === "Done Removing") {
      rmBTN.textContent = 'remove';
      btnIP = false;
      var listItems = document.querySelectorAll('#list li');
  
      listItems.forEach(function(li) {
        li.removeEventListener('click', removeListItem); // Remove click event listener from each list item
      });
    }
  }
  
  function removeListItem() {
    var li = this; // The clicked list item
    var index = -1;
    var info = li.getElementsByTagName("input"); // Get the input elements inside the list item
  
    // Find the index of the item in the itemsArray that matches the input values
    for (i = 0; i < itemsArray.length; i++) {
      if (itemsArray[i].name === info[0].value && itemsArray[i].class === info[1].value && itemsArray[i].country === info[2].value && itemsArray[i].age === info[3].value) {
        index = i;
        break;
      }
    }
  
    console.log('Removed item index:', index);
    li.parentNode.removeChild(li); // Remove the list item from the DOM
    itemsArray.splice(index, 1); // Remove the item from the itemsArray
    localStorage.clear(); // Clear the localStorage
    localStorage.setItem('items', JSON.stringify(itemsArray)); // Store the updated itemsArray in localStorage
  }
  
  function modify() {
    var modBTN = document.getElementById('modify');
  
    if (modBTN.textContent === 'modify' && !btnIP) {
      modBTN.textContent = "Done Modifying";
      btnIP = true;
      var listItems = document.querySelectorAll('#list li');
  
      for (i = 0; i < listItems.length; i++) {
        var data = listItems[i].getElementsByTagName("input");
        for (j = 0; j < data.length; j++) {
          data[j].readOnly = false; // Set the input fields to editable
        }
      }
    } else if (modBTN.textContent === "Done Modifying") {
      var listItems = document.querySelectorAll('#list li');
  
      for (i = 0; i < listItems.length; i++) {
        var data = listItems[i].getElementsByTagName("input");
        if (/[^a-zA-Z]/.test(data[0].value) || /[^a-zA-Z]/.test(data[2].value) || /[^0-9]/.test(data[3].value)) {
          alert('Invalid input:\nName and Country should only contain letters.\nAge should only contain numbers.');
        } else if (data[0].value === '' || data[1].value === '' || data[2].value === '' || data[3].value === '') {
          alert('Please fill in all the fields.');
        } else {
          modBTN.textContent = "modify";
          btnIP = false;
          for (j = 0; j < data.length; j++) {
            data[j].readOnly = true; // Set the input fields to read-only
          }
        }
      }
    }
  }
  
  function showList() {
    var optionsList = [];
    const classOption = document.getElementById('classOption');
    const countryOption = document.getElementById('countryOption');
    const allOption = document.getElementById('allOption');
    var optionsL = document.getElementById("listOptions");
  
    optionsL.disabled = true;
  
    while (optionsL.options.length > 0) {
      optionsL.remove(0); // Remove all options from the <select> element
    }
  
    var option = document.createElement("option");
    option.value = "None";
    option.text = "---";
    optionsL.appendChild(option);
  
    if (allOption.checked) {
      displayOptions();
    } else if (countryOption.checked) {
      optionsL.disabled = false;
      for (i = 0; i < itemsArray.length; i++) {
        if (!optionsList.includes(itemsArray[i].country)) {
          var option = document.createElement("option");
          option.value = itemsArray[i].country;
          option.text = itemsArray[i].country;
          optionsL.appendChild(option);
          optionsList.push(itemsArray[i].country);
        }
      }
    } else if (classOption.checked) {
      optionsL.disabled = false;
      for (i = 0; i < itemsArray.length; i++) {
        if (!optionsList.includes(itemsArray[i].class)) {
          var option = document.createElement("option");
          option.value = itemsArray[i].class;
          option.text = itemsArray[i].class;
          optionsL.appendChild(option);
          optionsList.push(itemsArray[i].class);
        }
      }
    }
  }
  
  function displayOptions() {
    var count = 0;
    var average = [0, 0];
  
    ul.innerHTML = "";
    var selectElement = document.getElementById("listOptions");
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    const classOption = document.getElementById('classOption');
    const countryOption = document.getElementById('countryOption');
  
    if (classOption.checked) {
      for (i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].class === selectedOption) {
          count++;
          average[0] += parseInt(itemsArray[i].age);
          average[1]++;
          addTask(itemsArray[i]);
        }
      }
    } else if (countryOption.checked) {
      for (i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].country === selectedOption) {
          count++;
          average[0] += parseInt(itemsArray[i].age);
          average[1]++;
          addTask(itemsArray[i]);
        }
      }
    } else {
      for (i = 0; i < itemsArray.length; i++) {
        count++;
        average[0] += parseInt(itemsArray[i].age);
        average[1]++;
        addTask(itemsArray[i]);
      }
    }
  
    var numStudent = document.getElementById("numStudent");
    var aveAge = document.getElementById("aveAge");
    if (isNaN(average[0] / average[1])) {
      numStudent.textContent = "The total number of students: " + count;
      aveAge.textContent = "The average age of students: " + count;
    } else {
      numStudent.textContent = "The total number of students: " + count;
      aveAge.textContent = "The average age of students: " + average[0] / average[1];
    }
  }
  