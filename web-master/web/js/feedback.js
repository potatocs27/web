
var text = document.getElementById("content");
var char = document.getElementById("count");
char.innerHTML = 0;

text.addEventListener("keydown", count);
text.addEventListener("backspace", count);

function count() {
    var len = text.value.length;
    char.innerHTML = len + 1;
}