const ul = document.querySelector('ul');

var btnIP = false;

// let key;

let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
// itemsArray.forEach(addTask);
showClass();


function addTask(text){

    

    const li = document.createElement('li');

    var labName = document.createElement('label');
    labName.textContent = 'Name:    ';

    var liName = document.createElement('input');
    liName.type = 'text';
    // liName.pattern = "[A-Za-z]+";
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

    

    // if(/[^a-zA-Z]/.test(liName.value) || /[^a-zA-Z]/.test(liCountry.value) || /[^0-9]/.test(liAge.value)){
    //     alert('Invalid input:\nName and Country should only contain letters.\nAge should only contain numbers.');
    //     console.log("wrong input");
    // } else if (liName.value === '' || liClass.value === '' || liCountry.value === '' || liAge.value === '') {
    //     alert('Please fill in all the fields.');
    // }else {
    //     console.log("correct input");
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

        ul.appendChild(li);
        
    //     return true;

    // }


    
  
  
}

function showClass(){


    // console.log("1");
    // if(!btnIP){
        var optionsList = [];
        var options = document.getElementById("classOptions");
        // console.log("2");
    
        for(i=0; i < itemsArray.length; i++){
            
            // var options = document.getElementById("classOptions");
            
  
            // Create a new option element
            if(!optionsList.includes(itemsArray[i].class)){
                var option = document.createElement("option");
                option.value = itemsArray[i].class;
                option.text = itemsArray[i].class;

                console.log(itemsArray[i].class);
                
                // Add the option to the select element
                options.appendChild(option);
                optionsList.push(itemsArray[i].class)
            }
            
        }
        displayOption()


    // }

}

function displayOption() {
    // var listItem = ul.querySelector("li");
    // listItem.remove();
    var count = 0;
     var average = [0,0];

    ul.innerHTML = "";
    var selectElement = document.getElementById("classOptions");
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;

    if (selectedOption === "All"){
        console.log(selectedOption);
        for(i=0; i < itemsArray.length; i++){
            count ++;
            average[0] +=  parseInt(itemsArray[i].age);
            console.log("itemsArray[i].age; " + itemsArray[i].age);
            average[1]++;

            addTask(itemsArray[i]);
        }

    }else{
        console.log(selectedOption);
        for(i=0; i < itemsArray.length; i++){

            if(itemsArray[i].class === selectedOption ){
                count ++;
                average[0] +=  parseInt(itemsArray[i].age);
                console.log("itemsArray[i].age; " + itemsArray[i].age);
                average[1]++;
                addTask(itemsArray[i]);
            }
            
            
        }

    }

    var numStudent = document.getElementById("numStudent");
    var aveAge = document.getElementById("aveAge");
    numStudent.textContent = "The total number of students: " + count;
    aveAge.textContent = "The average age of students: " + average[0]/average[1];
    console.log("ave 0; " + average[0]);
    console.log("ave 1; " + average[1]);

    
    // var selectedOptionDisplay = document.getElementById("selectedOption");
    // selectedOptionDisplay.textContent = "Selected Option: " + selectedOption;
  }







