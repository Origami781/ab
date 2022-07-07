function addUser(){
    Username=document.getElementById("Username").value;
    localStorage.setItem("Username", Username);
    window.location="kwitter_room.html";
}

function getData(){
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    var div=<div></div>;
    function redirectBack(){
        window.location="kwitter_room.html";
    }
    
    //End code
    });});}
    getData();   
}