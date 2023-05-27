//Parte 2
const userInput = document.querySelector('.txt-box')
const tblCSV = document.querySelector('#CSVTable')
function convertCSV() {
  var lines = userInput.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var row = tblCSV.insertRow();
    var cells = lines[i].split(',');

    for (var j = 0; j < cells.length; j++) {
      var cell = tblCSV.insertCell().innerText = (i === 0 ? 'th' : 'td');
      cell.textContent = cells[j];
      row.appendChild(cell);
    }
    tblCSV.appendChild(row);
  }
  return tblCSV;
}

convertCSV();
