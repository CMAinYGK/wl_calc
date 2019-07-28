function squatCalc() {
	let squat = document.getElementById("squatNumber").value;
	document.getElementById("snatchNumber").innerHTML = Math.round(squat * 0.65);
	document.getElementById("pwrSnatchNumber").innerHTML = Math.round(
		squat * 0.55
	);
	document.getElementById("cnjNumber").innerHTML = Math.round(squat * 0.775);
	document.getElementById("pwrCleanNumber").innerHTML = Math.round(
		squat * 0.65
	);
	document.getElementById("ftSquatNumber").innerHTML = Math.round(
		squat * 0.875
	);
	document.getElementById("ftSquat").innerHTML = "Front Squat";
}

function frontSquatCalc() {
	let frontSquat = document.getElementById("squatNumber").value;
	document.getElementById("snatchNumber").innerHTML = Math.round(
		frontSquat * 0.9 * 0.8
	);
	document.getElementById("pwrSnatchNumber").innerHTML = Math.round(
		frontSquat * 0.9 * 0.8 * 0.8
	);
	document.getElementById("cnjNumber").innerHTML = Math.round(frontSquat * 0.9);
	document.getElementById("pwrCleanNumber").innerHTML = Math.round(
		frontSquat * 0.9 * 0.8
	);
	document.getElementById("ftSquat").innerHTML = "Back Squat";
	document.getElementById("ftSquatNumber").innerHTML = Math.round(
		frontSquat / 0.9
	);
};

function openCalc(event, calcType) {
	let i;
	let tabcontent;
	let tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(calcType).style.display = "block";
	event.currentTarget.className += " active";
};


function robi() {
	let total = document.getElementById("robitotal").value;
	let a = [
    0.000006386209266,
    0.000005183197783,
    0.000004259048574,
    0.000003606255594,
    0.000002995284257,
    0.0000025340212,
    0.000002251860969,
    0.000002058256392,
    0.000001871024806,
    0.000001501871444,
    0.00002645886266,
    0.00002161046356,
    0.00001629661631,
    0.00001386816515,
    0.00001157076467,
    0.00000937764965,
    0.000008175929892,
    0.000007167071831,
    0.000006314335523,
    0.000004765098749,
  ];
	let b = 3.321928095;
	let weightclass = document.querySelector('input[name="weightclass"]:checked').value;
	document.getElementById("robiOutput").innerHTML = a[weightclass] * (Math.pow(total, 3.321928095));
};

function qualifyingTotal() {
	let myTotal = document.getElementById("myTotal").value;
	let total = [
    [
      190,
      208,
      231,
      248,
      262,
      275,
      284,
      289,
      296,
      310,
      126,
      135,
      150,
      159,
      168,
      176,
      182,
      187,
      191,
      200
    ],
    [
      171,
      187,
      208,
      223,
      236,
      248,
      256,
      260,
      266,
      279,
      113,
      122,
      135,
      143,
      151,
      158,
      164,
      168,
      172,
      180
    ],
    [
      152,
      166,
      185,
      198,
      210,
      220,
      227,
      231,
      237,
      248,
      101,
      108,
      120,
      127,
      134,
      141,
      146,
      150,
      153,
      160
    ],
    [
      133,
      146,
      162,
      174,
      183,
      193,
      199,
      202,
      207,
      217,
      88,
      95,
      105,
      111,
      118,
      123,
      127,
      131,
      134,
      140
    ]
  ];
	let whichMeet = document.querySelector('input[name="whichMeet"]:checked').value;
	let qualClass = document.querySelector('input[name="qualClass"]:checked').value;
	let qualTotal = total[whichMeet][qualClass];

	if (myTotal >= qualTotal) {
		document.getElementById("doIQual").innerHTML =
			"Yes, you qualify. The minimum total is " + total[whichMeet][qualClass];
	} else {
		document.getElementById("doIQual").innerHTML =
			"No, you do not qualify. The minimum total is " + total[whichMeet][qualClass];
	};
};

// Display the default slider value

// Update the current slider value (each time you drag the slider handle)
const barType = document.querySelector('input[name="gender"]:checked').value;
const collar = document.querySelector('input[name="collar"]:checked').value;


function slideUpdate() {
	var slider = document.getElementById("slider");
	var output = document.getElementById("barweight");
	output.innerHTML = slider.value;

	function plateNeeds() {
		var plateWeight = (slider.value - 25);
		var side = plateWeight / 2;
		document.getElementById("test").innerHTML = side;


	}

	plateNeeds();



}
