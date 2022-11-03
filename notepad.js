console.log("hi windi");
showNotes();
//ADD EVENT LISTENER
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(notes);
  }
  noteobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(noteobj));
  addtxt.value = "";
  console.log(noteobj);
  showNotes();
});
//FUNCTION TO SHOW COMMENTS FROM LOCAL STORAGE
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(notes);
  }
  let html = "";
  noteobj.forEach(function (element, index) {
    html += ` <div class="noteCard mx-2 my-2 card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Card ${index + 1}</h5>
      <p class="card-text">
        ${element}
      </p>
      <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">DELETE NOTES</button>
    </div>
</div>
    `;
  });
  let notesElm = document.getElementById("notes");
  if (noteobj.length != 0) {
    notesElm.innerHTML = html;
  }
  else{
    notesElm.innerHTML=`nothing to show`;
  }
}

//FUNCTION TO DELETE NOTES
function deletenotes(index)
{
    console.log('I AM DELETING',index);
    let notes = localStorage.getItem("notes"); 
    if (notes == null) {
        noteobj = [];
      } 
      else {
        noteobj = JSON.parse(notes);
      }
      noteobj.splice(index,1);
      localStorage.setItem("notes", JSON.stringify(noteobj));
      showNotes();
}

//function to search
let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval=search.value;
    console.log('INPUT HITTED',inputval);
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})
