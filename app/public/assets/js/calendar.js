function createCalendar(containerId) {
    var container = document.getElementById(containerId);
    var calendarEl = document.createElement("table");
    var headerRow = document.createElement("tr");
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    // Créer l'en-tête du calendrier
    days.forEach(function (day) {
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(day));
      headerRow.appendChild(th);
    });
    calendarEl.appendChild(headerRow);
  
    // Calculer le nombre de jours dans le mois courant
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Ajouter des cellules vides jusqu'au premier jour du mois
    var row = document.createElement("tr");
    for (var i = 0; i < firstDay; i++) {
      row.appendChild(document.createElement("td"));
    }
  
    // Remplir le calendrier avec les jours
    for (var day = 1; day <= daysInMonth; day++) {
      if (row.children.length === 7) {
        calendarEl.appendChild(row);
        row = document.createElement("tr");
      }
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(day));
      row.appendChild(cell);
  
      if (day === today.getDate()) {
        cell.style.backgroundColor = "white"; // Marquer le jour actuel
      }
    }
  
    // Ajouter la dernière ligne s'il y a des jours restants
    if (row.children.length > 0) {
      while (row.children.length < 7) {
        row.appendChild(document.createElement("td")); // Ajouter des cellules vides si nécessaire
      }
      calendarEl.appendChild(row);
    }
  
    container.appendChild(calendarEl);
  }
  

  