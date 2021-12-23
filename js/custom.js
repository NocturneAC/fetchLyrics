    // fetch utilizing .then() below...
var fetchLyrics1 = function(){ 
    e.preventDefault();
    var songTitle = $("#songTitle").val();
    var artistInput = $("#artistInput").val();
    console.log(songTitle);
    console.log(artistInput);
    fetch(`https://api.lyrics.ovh/v1/${artistInput}/${songTitle}`)
        .then(response => response.json())
        .then(data => {

        $(".lyricSpace").text("Loading . . .")
        console.log(data);
        $(".lyricSpace").text(data.lyrics);
        console.log(data.lyrics);
    });
}
//  async / await refactor below...

function fetchLyrics ();

let response = await fetch(`https://api.lyrics.ovh/v1/${artistInput}/${songTitle}`);
let lyrics = await response.json();
console.log(lyrics);

$("form").on("submit", function(e){
    fetchLyrics1();
});

// create an async function and have its execution on form submit ^^^

// global variables, .then. async 