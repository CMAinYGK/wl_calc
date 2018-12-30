function squatCalc() {
  var squat = document.getElementById("squatNumber").value;
  document.getElementById("snatchNumber").innerHTML = (Math.round(squat*0.65));
  document.getElementById("pwrSnatchNumber").innerHTML = (Math.round(squat*0.55));
  document.getElementById("cnjNumber").innerHTML = (Math.round(squat*0.775));
  document.getElementById("pwrCleanNumber").innerHTML = (Math.round(squat*0.65));
  document.getElementById("ftSquatNumber").innerHTML = (Math.round(squat*0.875));
}

function frontSquatCalc() {
  var frontSquat = document.getElementById("squatNumber").value;
  document.getElementById("snatchNumber").innerHTML = (Math.round((frontSquat*0.90)*0.8));
  document.getElementById("pwrSnatchNumber").innerHTML = (Math.round(((frontSquat*0.90)*0.8)*0.8));
  document.getElementById("cnjNumber").innerHTML = (Math.round(frontSquat*0.90));
  document.getElementById("pwrCleanNumber").innerHTML = (Math.round((frontSquat*0.90)*0.8));
  document.getElementById("ftSquat").innerHTML = "Back Squat";
  document.getElementById("ftSquatNumber").innerHTML = (Math.round(frontSquat/0.9));
}
