let todolist = JSON.parse(localStorage.getItem('todolist')) || [];
let menuvariable=true;
function adddata() {
    togetdata();
    todisplay();
}
function openmenu(){
    const innermenu=document.querySelector('.menu');
    if(menuvariable){
    
innermenu.innerHTML=
`
<button class="completedtask" onclick="completedtasks(); completedtaskbtn();">Completed Tasks</button>
<button class="incompletedtask" onclick="pendingtasks();">Pending Tasks</button>
<button class="alltasks" onclick="alltasks();">All Tasks</button>`;
menuvariable=false;
}
else{
    innermenu.innerHTML='';
    menuvariable=true;
}
}
function togetdata() {
    const todoinput = document.querySelector('.input');
    const name = todoinput.value;
    const duedateinput = document.querySelector('.duedate');
    const date = duedateinput.value;
    if(name && date){
    todolist.push({ name, date,completed:false });
    localStorage.setItem('todolist', JSON.stringify(todolist));
    todoinput.value = '';
    duedateinput.value = '';}
    else if(name){
        alert('you have not entered deadline of task');
    }else{
        alert('you have not entered name of task');
    }
}
function resetdata(){
    todolist=[];
    localStorage.setItem('todolist', JSON.stringify(todolist));
    todisplay();
}
function todisplay() {
    const displayDiv = document.querySelector('.display');
    displayDiv.innerHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const item = todolist[i];
        const completedclass=item.completed?'greentick':'tickmark';
        displayDiv.innerHTML +=
            `<div class="checking">
              <button onclick="taskchecking(${i});" class="checkbutton ">
               <img class="${completedclass}" src="${item.completed?
                'green-check-mark-icon-tick-symbol-in-color-vector-26012951.jpg':'shape_circle.png'}"> </button><p>${item.name}</p></div>
                <p>${item.date}</p> 
                <button class="deletebutton delbutton" onclick="datadelete(${i});">delete</button>
            `;
    }
}
function addtask(event){
    console.log(event.key);
    if(event.key==='Enter'){
        adddata();
    }
}

function datadelete(index) {
    todolist.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(todolist));
    todisplay();
}
function taskchecking(index){
    const checkButton = document.querySelectorAll('.checkbutton')[index];
    if (checkButton.innerHTML.includes('shape_circle.png')) {
        checkButton.innerHTML =
         '<img class="greentick" src="green-check-mark-icon-tick-symbol-in-color-vector-26012951.jpg">';
        todolist[index].completed=true;
        localStorage.setItem('todolist', JSON.stringify(todolist));
        todisplay();
    } else {
        checkButton.innerHTML = '<img class="tickmark" src="shape_circle.png">';
        todolist[index].completed=false;
    
    }
}
function completedtasks(){
    const displayDiv = document.querySelector('.display');
   
    displayDiv.innerHTML='';
for (let i = 0; i < todolist.length; i++){
    const item = todolist[i];
   if(item.completed){
    const completedclass = item.completed ? 'greentick' : 'tickmark';
displayDiv.innerHTML+=`<div class="checking">
              <button onclick="taskchecking(${i});" class="checkbutton ">
               <img class="${completedclass}" src="${item.completed?
                'green-check-mark-icon-tick-symbol-in-color-vector-26012951.jpg':'shape_circle.png'}"> </button><p>${item.name}</p></div>
                <p>${item.date}</p> 
                <button class="deletebutton delbutton" onclick="datadelete(${i});">delete</button>
            `;
   }
   
}

}
function pendingtasks(){

    const displayDiv = document.querySelector('.display');
   
    displayDiv.innerHTML='';
for (let i = 0; i < todolist.length; i++){
    const item = todolist[i];
   if(!item.completed){
    const completedclass = item.completed ? 'greentick' : 'tickmark';
displayDiv.innerHTML+=`<div class="checking">
              <button onclick="taskchecking(${i});" class="checkbutton ">
               <img class="${completedclass}" src="${item.completed?
                'green-check-mark-icon-tick-symbol-in-color-vector-26012951.jpg':'shape_circle.png'}"> </button><p>${item.name}</p></div>
                <p>${item.date}</p> 
                <button class="deletebutton delbutton" onclick="datadelete(${i});">delete</button>
            `;
   }
   
}
}
function alltasks(){
    todisplay();
    
}

todisplay();
