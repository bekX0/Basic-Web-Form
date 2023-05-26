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
