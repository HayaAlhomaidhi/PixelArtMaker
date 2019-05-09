// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
	event.preventDefault (); 

	// get the grid 
	var table = document.getElementById("pixelCanvas");
	table.innerHTML = "";

	// Size of the Grid
	var numberOfColumn = parseInt(document.getElementById("inputWidth").value);
	var numberOfRows = parseInt(document.getElementById("inputHeight").value);

	// Nested loops to creat cells
	for (var i = 0; i < numberOfColumn; i++) {
		var row = table.insertRow(i);
		for (var j = 0; j < numberOfRows; j++) {
			var cell = row.insertCell(j);
		}
	}

	// colorpicker for the backgound 
	document.querySelectorAll('#pixelCanvas td').forEach(e => e.addEventListener("click", function() {
		var color = document.getElementById("colorPicker").value;
		this.style.background = color;
	}));
}
	// submit button 
	document.getElementById("submit_button").onclick = makeGrid;

