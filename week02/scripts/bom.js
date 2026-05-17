//get the elements
const input = document.querySelector('#favchap');
const addbutton = document.querySelector('#addBtn');
const list = document.querySelector('#list');


addbutton.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.append(li);

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('aria-label', 'Close');
        deleteBtn.textContent = '❌';

        deleteBtn.addEventListener('click', function () {

            list.removeChild(li);
            input.focus();
        });
        li.appendChild(deleteBtn);

        list.appendChild(li);
        input.value = '';

    }
    input.focus();
});





