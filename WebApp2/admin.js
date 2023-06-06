const ul = document.querySelector('ul');

var btnIP = false;

let key = 0;

let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
itemsArray.forEach(addTask);

function addTask(text){

    const li = document.createElement('li');

    var labName = document.createElement('label');
    labName.textContent = 'Name:    ';

    var liName = document.createElement('input');
    liName.type = 'text';
    liName.pattern = "[A-Za-z]+";
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

    

    if(/[^a-zA-Z]/.test(liName.value) || /[^a-zA-Z]/.test(liCountry.value) || /[^0-9]/.test(liAge.value)){
        alert('Invalid input:\nName and Country should only contain letters.\nAge should only contain numbers.');
        console.log("wrong input");
    } else if (liName.value === '' || liClass.value === '' || liCountry.value === '' || liAge.value === '') {
        alert('Please fill in all the fields.');
    }else {
        console.log("correct input");
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

    }


    
  
  
  }

function add(){

    if(!btnIP){
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
    
    
        itemsArray.push(info);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addTask(info);

    }

}

function del(){
    if(!btnIP){
        localStorage.clear();
        ul.innerHTML = '';
        itemsArray = [];

    }
 
}



// function remove(){ //deletes item from localStorage

//     var liElements = ul.getElementsByTagName('li');
//     // console.log( liElements.length)

//     for (let i = liElements.length-1; i >= 0; i--) {
        
//         var liElement = liElements[i];

//         // var check = liElement.getElementsByTagName('input');
//         var check = liElement.querySelector('input[type="checkbox"]');
//         // var key = document.getElementById('items'); //gets key from user

//         if(check.checked){
//             // console.log( check.value);
            
//             liElement.style.color = 'red';
//             // console.log( key);
//             ul.removeChild(liElements[i]);
//             // itemsArray.splice(i,1);

//             var dataStored = localStorage.getItem('items') ?
//             JSON.parse(localStorage.getItem('items')) : []; 

//             dataStored.splice(i,1);



            
            


//             // var key = document.getElementById('items').value; //gets key from user
//             localStorage.removeItem("items"); //passes key to the removeItem method
//             // itemsArray = dataStored;
//             localStorage.setItem('items', JSON.stringify(dataStored));
//             // dataStored = '';

//             // console.log(dataStored);
//         // }


//         }


        
//     }

// }

// function remove() {
//     var rmBTN = document.getElementById('remove');
  
//     if (rmBTN.textContent === 'remove') {
//         rmBTN.textContent = "Done Removing";
//       var listItems = document.querySelectorAll('#list li');
  
//       listItems.forEach(function(li) {
//         li.addEventListener('click', removeListItem); // Add the click event listener
//       });
//     }
//     else if (rmBTN.textContent === "Done Removing") {
//         rmBTN.textContent = 'remove';
//       var listItems = document.querySelectorAll('#list li');
  
//       listItems.forEach(function(li) {
//         li.removeEventListener('click', removeListItem); // Remove the click event listener
//       });
//     } 
// }
  


// function removeListItem() {
//     var li = this;
//     li.parentNode.removeChild(li);
// }


function remove() {
    var rmBTN = document.getElementById('remove');
  
    if (rmBTN.textContent === 'remove' && !btnIP) {
        rmBTN.textContent = "Done Removing";
        btnIP = true;
        var listItems = document.querySelectorAll('#list li');

        listItems.forEach(function(li) {
        li.addEventListener('click', removeListItem);
        });
    } else if (rmBTN.textContent === "Done Removing") {
        rmBTN.textContent = 'remove';
        btnIP = false;
        var listItems = document.querySelectorAll('#list li');

        listItems.forEach(function(li) {
        li.removeEventListener('click', removeListItem);
        });
    }
  }
  
function removeListItem() {
    var li = this;
    li.parentNode.removeChild(li);
}
  




function modify() {
    var modBTN = document.getElementById('modify');
  
    if (modBTN.textContent === 'modify' && !btnIP) {
        modBTN.textContent = "Done Modifying";
        btnIP = true;
        var listItems = document.querySelectorAll('#list li');


        for(i =0; i< listItems.length; i++){
            var data = listItems[i].getElementsByTagName("input");
            for(j =0; j< data.length; j++){
                data[j].readOnly = false;
                // console.log(data[j]);
            }
        }

    }else if (modBTN.textContent === "Done Modifying") {
        
        var listItems = document.querySelectorAll('#list li');
        

        
        
            for(i =0; i< listItems.length; i++){
                var data = listItems[i].getElementsByTagName("input");
                if(/[^a-zA-Z]/.test(data[0].value) || /[^a-zA-Z]/.test(data[2].value) || /[^0-9]/.test(data[3].value)){
                    alert('Invalid input:\nName and Country should only contain letters.\nAge should only contain numbers.');
                }else if(data[0].value === '' || data[1].value === '' || data[2].value === '' || data[3].value === '') {
                    alert('Please fill in all the fields.');
                    // console.log("wrong input");
                }else {
                    modBTN.textContent = "modify";
                    btnIP = false;
                    for(j =0; j< data.length; j++){
                        data[j].readOnly = true;
                    }
                }

        }
        

        

    } 
}





