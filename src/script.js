const textArea = document.querySelector(".text-area");
let onChange = () => {
  const data = textArea.value;
  const charLength = data.length;
  const wordsNum = data.split(" ").length;
  const sentensesNum = data.split(".").length;


  document.getElementById("num-characters").innerHTML = charLength;
  document.getElementById("words-length").innerHTML = wordsNum - 1;
  document.getElementById("sentences-count").innerHTML = sentensesNum - 1;

};
textArea.addEventListener("input", onChange);
