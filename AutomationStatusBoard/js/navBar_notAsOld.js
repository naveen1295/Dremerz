function loadNav() {
  var element = document.getElementById("headerNavDiv");
  element.insertAdjacentHTML('afterend',
    '<h2 style="text-align:center"><img src="../images/Quantum_Logo.png" width="60" height="50" alt=""' +
    'style="margin-right: 1ch">TFA Enterprise QA Automation Dashboard</h2>' +
    '<nav id=navbar class="navbar navbar-expand-md navbar-dark bg-dark">' +
    '<div class="collapse navbar-collapse" id="navbarNav">' +

    '<ul class="navbar-nav">' +

    '<li class="nav-item">' +
    '<a class="nav-link home" href="../main/Home.html" style="margin: 2px 20px 2px 20px; text-align: center;">Home</a>' +
    '</li>' +

    '<li class="nav-item">' +
    '<a class="nav-link catalogue" href="../main/AutomationCatalog.html" style="margin: 2px 20px 2px 20px; text-align: center;">Catalogue</a>' +
    '</li>' +

    '<li class="nav-item">' +
    '<a class="nav-link backlog" href="../main/Backlog.html" style="margin: 2px 20px 2px 20px; text-align: centre">Backlog</a>' +
    '</li>' +

    '<a class="nav-link current" href="../main/CurrentJobs.html" style="margin: 2px 20px 2px 20px; text-align: centre">In Progress Jobs</a>' +
    '</li>' +

    '<li class="nav-item">' +
    '<a class="nav-link completed" href="../main/CompletedJobs.html" style="margin: 2px 20px 2px 20px; text-align: centre">Completed Jobs</a>' +
    '</li>' +

    '<li class="nav-item">' +
    '<a class="nav-link inflights" href="../main/InflightData.html" style="margin: 2px 20px 2px 20px; text-align: centre">Test Data Creation</a>' +
    '</li>' +

  
    '<li class="nav-item">' +
    '<a class="nav-link Report" href="../main/Report.html" style="margin: 2px 20px 2px 20px; text-align: centre">Automation Report</a>' +
    '</li>' +



    '</ul>' +
    '</div>' +
    '<a class="nav-link Request float-right" href="../main/EngageUs.html" >Engage us</a>');
  console.log("");
}