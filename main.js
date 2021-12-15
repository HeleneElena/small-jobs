let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

    let todoList = [];

    if(localStorage.getItem('todo')) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        displayMessages();
    }

addButton.addEventListener('click', function() {
    if(!addMessage.value) return;
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        impotant: false
    };
    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
});

function displayMessages() {
    let displayMessage = '';
    if (todoList.length === 0) todo.innerHTML = '';
    todoList.forEach( function(item, index) {
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${index}' ${item.checked ? 'checked' : ''}>
            <label for='item_${index}' class="${item.impotant ? 'impotant' : ''}">${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function(event) {
    let idInput = event.target.getAttribute('id');
    let valueLabel = todo.querySelector('[for=' + idInput + ']').innerHTML;
    
    todoList.forEach( function(item) {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});

todo.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    todoList.forEach( function(item, i) {
        if (item.todo === event.target.innerHTML) {
            if (event.ctrlKey || event.metaKey) {
                todoList.splice(i, 1);
            } else {
                item.impotant = !item.impotant;
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});



