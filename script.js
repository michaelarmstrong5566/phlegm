let h1 = document.getElementsByTagName("h1")[0];
console.log(h1)

h1.addEventListener("mouseover", myFunction);

function myFunction() {
  document.getElementById("demo")
  console.log("moused over");
}
