console.log("Welcome to notes app. This is app.js");
showImages();

// If user adds a note, add it to the localStorage


var loadFile = function(event){
  var url = URL.createObjectURL(event.target.files[0]);
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  
  
  notesObj.push(url);

  localStorage.setItem("notes", JSON.stringify(notesObj));

  notesObj = [];

  showImages();
}

function showImages(){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <img class="img-thumbnail mystyle" src="${element}" class="card-text">
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Image</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = '<h5 style="margin-left = 20%">Nothing to show! Click on "Upload Images" to make a new collection.</h5>';
  }
}


function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showImages();
}