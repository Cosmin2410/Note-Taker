let addNoteBtn = document.querySelector('.submit');
let container = document.querySelector('.note-app');

addNoteBtn.addEventListener('click', addNote);

function addNote(e) {
  let textInput = document.querySelector('.text').value;

  let div = document.createElement('div');
  div.className = 'note-bubble';
  container.appendChild(div);

  let title = document.createElement('h2');
  title.className = 'title number';
  div.appendChild(title);

  let span = document.createElement('span');
  span.className = 'span-name';
  span.appendChild(document.createTextNode(0));
  title.appendChild(span);
  span.style.display = 'none';

  let value = document.querySelector('.span-name').innerHTML;
  value++;
  document.querySelector('.span-name').innerHTML = value;

  title.appendChild(document.createTextNode(`Note ${value}`));

  let text = document.createElement('p');
  text.className = 'text-bubble';
  text.appendChild(document.createTextNode(textInput));
  div.appendChild(text);

  let button = document.createElement('button');
  button.className = 'view-detail';
  button.appendChild(document.createTextNode('View More'));
  div.appendChild(button);

  button.addEventListener('click', viewMore);

  function viewMore(e) {
    div.classList.toggle('active');
  }

  document.querySelector('.text').value = '';

  let deleteNote = document.createElement('button');
  deleteNote.className = 'dlt-button';
  deleteNote.appendChild(document.createTextNode('Delete Note'));
  div.appendChild(deleteNote);

  deleteNote.addEventListener('click', deleteNoteFc);
  function deleteNoteFc(e) {
    if (e.target.classList.contains('dlt-button')) {
      let div = e.target.parentElement;
      div.style.display = 'none';
    }
  }
}
