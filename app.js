const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//adding a task...input value empty alert from the web js
function addTask(){
    if(inputBox.value === '' ){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
      //the input field does not clear after the writing the text to clear

      inputBox.value  = '';
      saveData()
}
// this is my code on how to delete...this was before the span
// function deleteTask(){
//      if(listContainer)


//     let li = document.deleteElement("li");
//     li.innerHTML = inputBox.value;
//         listContainer.removeChild(li);
// 
//adding the event listener e is event object 
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

//storing into the browser local storage (api)
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()