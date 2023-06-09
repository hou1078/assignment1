let buttonRef = document.querySelector(".DarkTheme");

function ChangeTheme() {
  document.body.classList.toggle("changetodark");
  if (buttonRef.textContent === 'Dark Theme') {
    buttonRef.textContent = "Light Theme";
  } else {
    buttonRef.textContent = "Dark Theme";
  }
}
buttonRef.addEventListener('click', ChangeTheme);

const textarea = document.querySelector("#textarea");
const saveBtn = document.querySelector(".Save");
const cancelBtn = document.querySelector(".Cancel");
const newBtn = document.querySelector(".NewNotes");

function hideTextareaAndButtons() {
  textarea.classList.add("hidden");
  saveBtn.classList.add("hidden");
  cancelBtn.classList.add("hidden");
  textarea.value = "";
  hide=true
}

function NewNotes() {
  textarea.classList.remove("hidden");
  saveBtn.classList.remove("hidden");
  cancelBtn.classList.remove("hidden");
}

cancelBtn.addEventListener("click", hideTextareaAndButtons);
function Visiblity() {
  if (hide=true) {
    NewNotes();
  } else {
    textarea.value = ""; 
    hideTextareaAndButtons();
  }
};
newBtn.addEventListener("click",Visiblity)

const notesArray = [
    {title: "note one", body: "this is my first note"},
    {title: "note two", body: "this is my second note"}
  ];
  
  const sidebar = document.querySelector(".AddList");
  
  function addNote() {
    const title = prompt("Please enter the title of your note:");
    const body = textarea.value;
    const note = {title: title, body: body};
    notesArray.push(note);
    const noteList = document.createElement("li");
    noteList.textContent = title;
    sidebar.appendChild(noteList);
  }
  
  document.querySelector(".Save").addEventListener("click", addNote);
  
  function displayNoteBody(event) {
    if (event.target.tagName === "LI") {
      const clickedTitle = event.target.textContent;
      const clickedNote = notesArray.find(note => note.title === clickedTitle);
      textarea.value = clickedNote.body;
    }
  }
  
  sidebar.addEventListener("click", displayNoteBody);
  