const input = document.querySelector('input');
const button = document.querySelector('#enviar');
const ul = document.querySelector('ul');

const tarefas = [];

function elementCreator(task) {
    const li = document.createElement('li');
    li.textContent = task;
    
    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';
    buttonDelete.addEventListener('click', () => {
        const index = tarefas.indexOf(task);
        if (index !== -1) {
            tarefas.splice(index, 1);
            renderTasks();
        };
    });
    
    li.appendChild(buttonDelete);
    ul.appendChild(li);
};

function renderTasks() {
    ul.innerHTML = '';
    tarefas.forEach(task => {
        elementCreator(task);
    });
}

button.addEventListener('click', () => {
    tarefas.push(input.value);
    renderTasks();
    console.log(tarefas);
    input.value = "";
});