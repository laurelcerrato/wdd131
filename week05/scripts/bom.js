//get the elements
const input = document.querySelector('#favchap');
const addbutton = document.querySelector('#addBtn');
const list = document.querySelector('#list');

let chaptersArray = function getChapterList()  {
    
};

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


addbutton.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});


function displayList(item) {

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



}




function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.lenght - 1);
    chaptersArray = chaptersArray.filter((item => item !== chapter));
    setChapterList();
}








