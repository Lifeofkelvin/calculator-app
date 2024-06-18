function del() {
  var value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.lenghht - 1);
}

var two = document.getElementById("two");
two.addEventListener("click", () => {
  var body = document.querySelector("body");
  var toggle = document.getElementById("circle");
  body.classList.add("active1");
  body.classList.remove("active2");
  toggle.style.left = "36%";
});

var one = document.getElementById("one");
one.addEventListener("click", () => {
  var body = document.querySelector("body");
  var toggle = document.getElementById("circle");
  body.classList.remove("active1");
  body.classList.remove("active2");
  toggle.style.left = "2px";
});

var three = document.getElementById("three");
three.addEventListener("click", () => {
  var body = document.querySelector("body");
  var toggle = document.getElementById("circle");
  body.classList.add("active2");
  body.classList.remove("active1");
  toggle.style.left = "75%";
});
