function appendCharacter(character) {
    document.getElementById("result").value += character;
  }
  
  function deleteCharacter() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    var result = document.getElementById("result").value;
    var answer = eval(result);
    document.getElementById("result").value = answer;
  }
  