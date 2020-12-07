function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          var Jpeople=response.people;
          var output="";
          for(var i=0;i<Jpeople.length;i++){
              output += "<li>"+ Jpeople[i].name +"</li>";
          }

       document.getElementById("demo").innerHTML = output;
      }
    };
    xhttp.open("GET","people.json", true);// xhttp.open("GET","ajax.txt", true);earlier it was txt file to access from our folder//
    xhttp.send();
  }