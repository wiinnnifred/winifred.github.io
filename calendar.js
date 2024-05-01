//Search Bar
function searchTable() {
    var input = document.getElementById("search-input").value.toLowerCase();
    var table = document.getElementById("my-table");
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 1; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      var match = false;
  
      for (var j = 0; j < cells.length; j++) {
        if (cells[j].innerText.toLowerCase().indexOf(input) > -1) {
          match = true;
          break;
        }
      }
  
      if (match) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }

  //Filter button

  function filterPastDates() {
    var table = document.getElementById("my-table");
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 1; i < rows.length; i++) {
      var dateCell = rows[i].getElementsByTagName("td")[3];
      var date = new Date(dateCell.innerText);
      var today = new Date();
  
      if (date < today) {
        rows[i].classList.add("past");
      } else {
        rows[i].classList.remove("past");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var calendarCells = document.querySelectorAll("#my-table td:nth-child(4)");
    for (var i = 0; i < calendarCells.length; i++) {
      var date = new Date(calendarCells[i].innerText);
      if (date < new Date()) {
        calendarCells[i].classList.add("past");
      }
    }
  });

  //Browse button
  const button = document.getElementById('browse');
const input = document.getElementById('search-input');

button.addEventListener('click', function() {
  input.focus();
});