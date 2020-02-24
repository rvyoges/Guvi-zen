function myfunction()
{
   var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var country=document.getElementById("country").value;
    var state=document.getElementById("state").value;
    var city=document.getElementById("city").value;
    var gender
    var martialstatus
    var selectedItems="";
    var radioButtons = document.getElementsByName("gender");
    for (var x = 0; x < radioButtons.length; x ++) {
      if (radioButtons[x].checked) {
    gender=radioButtons[x].value;}
      }

    var marraigeButtons = document.getElementsByName("martialstatus");
    for (var x = 0; x < marraigeButtons.length; x ++) {
      if (marraigeButtons[x].checked) {
    martialstatus=marraigeButtons[x].value;}
      }

      var fav_places = document.getElementsByName("fav_places");
      for (var x = 0; x < fav_places.length; x ++) {
        if (fav_places[x].type="checkbox"  &&fav_places[x].checked=="true") {
      selectedItems+=fav_places[x].value+"\n";}
        }
    console.log(name,email,password,country,state,city,gender,martialstatus,selectedItems)
     
        
}
