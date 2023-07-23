// function mouseOver(){
//     this.style.backgroundColor = "rgba(146, 143, 148, 0.3)";
//     this.style.cursor = "pointer";
//     this.style.color = "blueviolet";
// }
// function mouseOut(){
//     this.style.background = "none";
//     this.style.color = "aliceblue";
// }
// const menuBar = document.getElementById("menuBar").children;
// for (let i = 0; i < menuBar.length; i++) {
//   menuBar[i].addEventListener("mouseover", mouseOver);
//   menuBar[i].addEventListener("mouseout", mouseOut);
// }
// const dropDown = document.getElementById("dropDown-content").children;
// for (let i = 0; i < dropDown.length; i++) {
//   dropDown[i].addEventListener("mouseover",mouseOver);
//   dropDown[i].addEventListener("mouseout", mouseOut);
// }

// const slides = document.getElementsByClassName('slide');
// let index = 0;
// slideShow(index);
// function nextSlide(){
//     index+=1;
//     if(index>=slides.length){
//         index=0;
//     }
//     console.log(index);
//     slideShow(index);
// }

// function prevSlide(){
//     index-=1;
//     if(index<0){
//         index= slides.length-1;
//     }
//     console.log(index);
//     slideShow(index);
// }

// function slideShow(index){

//     for(let i=0; i<slides.length; i++){
//         slides[i].style.display = 'none';
//     }
//     slides[index].style.display = 'block';
// }
// setInterval(nextSlide, 2000)

function formValidation(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;

  const namePattern = new RegExp(/^[A-Za-z \s]*$/);
  const emailPattern = new RegExp(
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  );
  const numberPattern = new RegExp(/^\d{3}-\d{3}-\d{3}$/);
  const nameTest = namePattern.test(name);
  const emailTest = emailPattern.test(email);
  const numberTest = numberPattern.test(number);
  try {
    var isError = false;
    if (!nameTest) throw "Invalid Name!";
    if (name == "") throw "Name field required";
    if (!emailTest) throw "Invalid email";
    if (email == "") throw "Email field required";
    if (!numberTest) throw "Invalid Phone Number";
    if (number == "") throw "Phone Number Required";
  } catch (error) {
    alert(error);
    isError = true;
  }

  if (!isError) {
    record(name, email, number);
  }
}
let recordArray = new Array();

function record(name, email, number) {
    let newRecord = {};
  newRecord.id = recordArray.length+1;
  newRecord.name = name;
  newRecord.email = email;
  newRecord.number = number;
  recordArray.push(newRecord);
  const recordTable = document.getElementById("recordTable");

  let newRow = document.createElement("tr");
  for (let key in newRecord) {
    let newColumn = document.createElement("td");
    newColumn.innerHTML = newRecord[key];
    newRow.appendChild(newColumn);
  }
  recordTable.appendChild(newRow);
  console.log(recordTable.children);


}
function sortRecordById(recordArray){
    const idArray = recordArray.map((element)=> element.id);
    idArray.sort();
    const newRecordArray = new Array();
    for (let i = 0; i < id.length; i++) {
        
        for (let j = 0; j < recordArray.length; j++) {
            if(idArray[i] == recordArray[j].id){
                newRecordArray.push(recordArray[j]);
            }
        }
        
    }
    console.log(idArray);
}

function arrangedTable(newRecordArray){
        const tableCols = document.getElementsByTagName('td');
        console.log(tableCols);
        for (let i = 0; i < tableCols.length-4; i = i+4) {
            tableCols[i].innerHTML = newRecordArray[i].id;
            tableCols[i+1].innerHTML = newRecordArray[i].name;
            tableCols[i+2].innerHTML = newRecordArray[i].email;
            tableCols[i+3].innerHTML = newRecordArray[i].number;
            // console.log(ta);
        }
        // console.log(tableRows[2].innerHTML);
}