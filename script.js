function save() {
  if(!(document.getElementById("confirm").checked)){
    return;
  }
  let genders = [];
  for(var i= 0; i<3;i++){
    genders.push(document.getElementById(`gender-${i}`));
  }
  let gender;
  for(var i= 0; i<3;i++){
    if(genders[i].checked == true){
      gender= genders[i];
    }
  }

  let data = [];

  data.push(document.getElementById("name").value);
  data.push(document.getElementById("surname").value);
  data.push(document.getElementById("age").value);
  data.push(document.getElementById("email").value);
  
  data.forEach((val, index) => {
    if(val === ""){
      data[index]="empty";
    }
  });
  console.log(data)

  data = data.join("__");
  var file = new Blob([data], {type:"text"});

  var link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "data.txt";
  link.click();
}


function read(){
  var file = new XMLHttpRequest();
  file.open("GET", "data.txt");
  file.onreadystatechange = function(){
    if(file.readyState === 4){
      var allData = file.responseText;
      console.log(allData);
    }
  }
  file.send();
}

function getData(){
  var allData;
  var file = new XMLHttpRequest();
  file.open("GET", "data.txt");
  file.onreadystatechange = function(){
    if(file.readyState === 4){
      allData = file.responseText;
      analyzeData(allData);
    }
  }
  file.send();
}

function analyzeData(data){
  // console.log(data.split("\n"));
  var dataList = data.split("\n");
  dataList.forEach(element => {
    var row = element.split("_");

  var infoBox = document.createElement("div");
  infoBox.className = "info-box";

  var nameRow = document.createElement("div");
  nameRow.className = "fullname info-row";
  var nameTitle = document.createElement("p");
  nameTitle.className = "row-title";
  nameTitle.innerHTML = "Full Name: ";
  var nameValue = document.createElement("p");
  nameValue.className = "p-w-value";
  nameValue.innerHTML = row[0] +" " +row[1]
  nameRow.appendChild(nameTitle);
  nameRow.appendChild(nameValue);


  var ageRow = document.createElement("div");
  ageRow.className = "age info-row";
  var ageTitle = document.createElement("p");
  ageTitle.className = "row-title";
  ageTitle.innerHTML = "Age: ";
  var ageValue = document.createElement("p");
  ageValue.className = "p-w-value";
  ageValue.innerHTML = row[2];
  ageRow.appendChild(ageTitle);
  ageRow.appendChild(ageValue);


  var genderRow = document.createElement("div");
  genderRow.className = "gender info-row";
  var genderTitle = document.createElement("p");
  genderTitle.className = "row-title";
  genderTitle.innerHTML = "Gender: ";
  var genderValue = document.createElement("p");
  genderValue.className = "p-w-value";
  genderValue.innerHTML = row[3];
  genderRow.appendChild(genderTitle);
  genderRow.appendChild(genderValue);


  var mailRow = document.createElement("div");
  mailRow.className = "mail info-row";
  var mailTitle = document.createElement("p");
  mailTitle.className = "row-title";
  mailTitle.innerHTML = "E-mail: ";
  var mailValue = document.createElement("p");
  mailValue.className = "p-w-value";
  mailValue.innerHTML = row[4];
  mailRow.appendChild(mailTitle);
  mailRow.appendChild(mailValue);

  infoBox.appendChild(nameRow);
  infoBox.appendChild(ageRow);
  infoBox.appendChild(genderRow);
  infoBox.appendChild(mailRow);

  var list = document.getElementById("table");

  list.appendChild(infoBox);
  });
}
