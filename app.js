function data(){
     
     fName = document.getElementById('Fname').value;
     fProfile = document.getElementById('Fprofile').value;
     sName = document.getElementById('Sname').value;
     sProfile = document.getElementById('Sprofile').value;
     
     table();
}
function table (){
      
    var table = document.getElementById('table');
    table.innerHTML = " <table class='table'><tr><th>Username</th><th>Profile</th></tr><tr><td>"+fName+"</td><td>"+fProfile+"</td></tr></table><br><hr><button id='Inter' type='button' onclick='inter()' >InterChange</button><hr><table class='table'><tr><th>Username</th><th>Profile</th></tr><tr><td>"+sName+"</td><td>"+sProfile+"</td></tr></table>";

}
function inter(){
    //alert("hello");
    var IsProfile = fProfile;
    fProfile = sProfile;
    sProfile = IsProfile;
    
    table();
}
