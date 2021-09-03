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

}