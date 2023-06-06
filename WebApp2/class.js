const ul = document.querySelector('ul');

var btnIP = false;

// let key;

let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
// itemsArray.forEach(addTask);
showList();


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
    //     //chosenDisplay("wrong input");
    // } else if (liName.value === '' || liClass.value === '' || liCountry.value === '' || liAge.value === '') {
    //     alert('Please fill in all the fields.');
    // }else {
    //     //chosenDisplay("correct input");
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

function showList(){


    // //chosenDisplay("1");
    // if(!btnIP){
        
        var optionsList = [];
        const classOption = document.getElementById('classOption');
        const countryOption = document.getElementById('countryOption');
        const allOption = document.getElementById('allOption');
        var optionsL = document.getElementById("listOptions");
        // var dis = "None";


        optionsL.disabled = true;
        // optionsL.options[0].style.display = "none";
        // for(j=0; j<options.length; j++){
        //     optionsList.push(options[j].value);
        // }

        // options.innerHTML ="";
        // //chosenDisplay("2");
        while (optionsL.options.length > 0) {
            optionsL.remove(0);

          }
        var option = document.createElement("option");
        option.value = "None";
        option.text = "---";

        // //chosenDisplay(itemsArray[i].class);
        
        // Add the option to the select element
        optionsL.appendChild(option);

        //chosenDisplay("erferferferfef  " +  optionsL.options.length);
        if(allOption.checked){
            // options.disabled = true;
            // displayOptions("All");
            // dis = "All";

        } else if(countryOption.checked){
            optionsL.disabled = false;
            for(i=0; i < itemsArray.length; i++){
            
                // var options = document.getElementById("classOptions");
                
      
                // Create a new option element
                if(!optionsList.includes(itemsArray[i].country)){
                    var option = document.createElement("option");
                    option.value = itemsArray[i].country;
                    option.text = itemsArray[i].country;
    
                    // //chosenDisplay(itemsArray[i].class);
                    
                    // Add the option to the select element
                    optionsL.appendChild(option);
                    optionsList.push(itemsArray[i].country)
                }
                
            }
            // dis = "Country";
            // displayOptions("Country");
        }else if (classOption.checked){
            optionsL.disabled = false;
            for(i=0; i < itemsArray.length; i++){
            
                // var options = document.getElementById("classOptions");
                
      
                // Create a new option element
                if(!optionsList.includes(itemsArray[i].class)){
                    var option = document.createElement("option");
                    option.value = itemsArray[i].class;
                    option.text = itemsArray[i].class;
    
                    // //chosenDisplay(itemsArray[i].class);
                    
                    // Add the option to the select element
                    optionsL.appendChild(option);
                    optionsList.push(itemsArray[i].class)
                }
                
            }
            // dis = "Class";
            // displayOptions("Class");
        }
        // displayOptions(dis);

        // displayOptions("All");
    
        // for(i=0; i < itemsArray.length; i++){
            
        //     // var options = document.getElementById("classOptions");
            
  
        //     // Create a new option element
        //     if(!optionsList.includes(itemsArray[i].class)){
        //         var option = document.createElement("option");
        //         option.value = itemsArray[i].class;
        //         option.text = itemsArray[i].class;

        //         //chosenDisplay(itemsArray[i].class);
                
        //         // Add the option to the select element
        //         options.appendChild(option);
        //         optionsList.push(itemsArray[i].class)
        //     }
            
        // }
        // displayOptions()



    // }

}

function displayOptions() {
    // var listItem = ul.querySelector("li");
    // listItem.remove();
    var count = 0;
     var average = [0,0];

    ul.innerHTML = "";
    var selectElement = document.getElementById("listOptions");
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    const classOption = document.getElementById('classOption');
    const countryOption = document.getElementById('countryOption');
    // const allOption = document.getElementById('allOption');
    // //chosenDisplay("chosenDisplay" + chosenDisplay);

    if (classOption.checked){
        //chosenDisplay(selectedOption);
        for(i=0; i < itemsArray.length; i++){

            if(itemsArray[i].class === selectedOption ){
                count ++;
                average[0] +=  parseInt(itemsArray[i].age);
                //chosenDisplay("itemsArray[i].age; " + itemsArray[i].age);
                average[1]++;
                addTask(itemsArray[i]);
            }
            
            
        }

    }else if(countryOption.checked){
        //chosenDisplay(selectedOption);
        for(i=0; i < itemsArray.length; i++){

            if(itemsArray[i].country === selectedOption ){
                count ++;
                average[0] +=  parseInt(itemsArray[i].age);
                //chosenDisplay("itemsArray[i].age; " + itemsArray[i].age);
                average[1]++;
                addTask(itemsArray[i]);
            }
            
            
        }

    } else{
        //chosenDisplay(selectedOption);
        for(i=0; i < itemsArray.length; i++){
            count ++;
            average[0] +=  parseInt(itemsArray[i].age);
            //chosenDisplay("itemsArray[i].age; " + itemsArray[i].age);
            average[1]++;

            addTask(itemsArray[i]);
        }
    }

    var numStudent = document.getElementById("numStudent");
    var aveAge = document.getElementById("aveAge");
    numStudent.textContent = "The total number of students: " + count;
    aveAge.textContent = "The average age of students: " + average[0]/average[1];
    //chosenDisplay("ave 0; " + average[0]);
    //chosenDisplay("ave 1; " + average[1]);

    
    // var selectedOptionDisplay = document.getElementById("selectedOption");
    // selectedOptionDisplay.textContent = "Selected Option: " + selectedOption;
  }







