let PresetCounter = 1;

document.getElementById("color").innerText = "PRESET 1";

document.addEventListener('keydown', function(e) {
  var key = e.key + e.location;
  if (e.keyCode == 89) {
    PresetCounter = PresetCounter + 1;
    console.log(PresetCounter)

  } if (PresetCounter === 1) {

    document.getElementById("color").style.backgroundColor = "#6b5b95";
    document.getElementById("color").innerHTML = "PRESET 1";
    
    if (key ==="Shift1") {
      document.getElementById('sample1').play();
    } if (key === "Shift2") {
        document.getElementById('sample2').play();
      }
  }
  
  if (PresetCounter === 2) {

    document.getElementById("color").style.backgroundColor = "#feb236";
    document.getElementById("color").innerHTML = "PRESET 2";

  if (key ==="Shift1") {
    document.getElementById('sample3').play();
  } if (key === "Shift2") {
      document.getElementById('sample4').play();
    }
  }

  if (PresetCounter === 3) {

    document.getElementById("color").style.backgroundColor = "#82b74b";
    document.getElementById("color").innerHTML = "PRESET 3";

  if (key ==="Shift1") {
    document.getElementById('sample5').play();
  } if (key === "Shift2") {
      document.getElementById('sample6').play();
    }
}
  if (PresetCounter === 4) {

    document.getElementById("color").style.backgroundColor = "#c94c4c";
    document.getElementById("color").innerHTML = "PRESET 4";

  if (key ==="Shift1") {
    document.getElementById('sample7').play();
  } if (key === "Shift2") {
      document.getElementById('sample8').play();
  
  }
} if (PresetCounter === 5) {
  PresetCounter = 1;
  document.getElementById("color").innerText = "PRESET 1";

  document.getElementById("color").style.backgroundColor = "#6b5b95";

}
});

