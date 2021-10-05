function ratio(){
  let form = document.getElementById('form');
  let text = form[0];
  console.log(text);

  let fev1 = form[1];
  console.log(fev1.value);

  let fvc = form[2];
  console.log(fvc.value);

  let ratio = parseFloat(fev1.value)/parseFloat(fvc.value);
  //console.log(typeof ratio);
  console.log(ratio);

  document.getElementById("ratio").innerHTML = "FEV1/FVC ratio = " + (fev1.value/fvc.value).toFixed(2); 
  
  if(ratio > 0.7){
    document.getElementById("step-1").style.display="none";
    console.log("fev1/fvc > 0.7");
    }
  else {
    document.getElementById("step-1").style.display="block";
    console.log("fev1/fvc < 0.7")
  }  
}

function myFunction() {
  //window.open("copdai-pg-1.html", _self, true);
  window.open("", "Yogi_WindowName");
}

function openCity(evt, cityName){
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

