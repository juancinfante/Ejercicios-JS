document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){
  
  let titulo = document.getElementById('title').value;
  let desc = document.getElementById('description').value;
  let taskView = document.getElementById('tasks');
  
  taskView.innerHTML += `<div>
  <div class="cardm">
    <p>${titulo} - ${desc}</p>
    <a class="btn btn-danger" id="btnDelete" onclick="deleteTask()">DELETE</a>
  </div>
</div>`;


  e.preventDefault()
}



function deleteTask(){
  let btnDlt = document.getElementById('btnDelete');
  btnDlt.parentElement.remove()
}