let todolist = JSON.parse(localStorage.getItem('todolist')) || [];

function adddata() {
    togetdata();
    todisplay();
}

function togetdata() {
    const todoinput = document.querySelector('.input');
    const name = todoinput.value;
    const duedateinput = document.querySelector('.duedate');
    const date = duedateinput.value;
    todolist.push({ name, date });
    localStorage.setItem('todolist', JSON.stringify(todolist));
    todoinput.value = '';
    duedateinput.value = '';
}
function resetdata(){
    todolist=[];
    todisplay();
}
function todisplay() {
    const displayDiv = document.querySelector('.display');
    displayDiv.innerHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const item = todolist[i];
        displayDiv.innerHTML +=
            `<div class="checking">
              <button onclick="taskchecking(${i});" class="checkbutton ">  <img class="tickmark" src="shape_circle.png"></button><p>${item.name}</p></div>
                <p>${item.date}</p> 
                <button class="deletebutton delbutton" onclick="datadelete(${i});">delete</button>
            `;
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
        checkButton.innerHTML = '<img class="greentick" src="green-check-mark-icon-tick-symbol-in-color-vector-26012951.jpg">';
    } else {
        checkButton.innerHTML = '<img class="tickmark" src="shape_circle.png">';
    }
}
todisplay();
