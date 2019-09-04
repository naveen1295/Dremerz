function hideThing(){
  var requestType = document.getElementById("reasonSelect");
  var staging = document.getElementById("stageSelection");
  var suite = document.getElementById("suiteCombos");

  if (requestType.value != "Automation Development"){
    staging.hidden=false

    if (requestType.value == "Regression Run"){
      suite.hidden=false
    }
    else{
      suite.hidden=true
    }
  }
  else{
    staging.hidden=true
    suite.hidden=false
  }
}

function loadNav() {
  var element = document.getElementById("header");
  element.insertAdjacentHTML('afterbegin',
    '<div class="container-fluid">' +
      '<div class="row">' +
        '<div class="col-lg-1"></div>'+
        '<div class="col-lg-1"><img style="padding-top:10px" src="../images/TFA.png" height="50"></div>'+
        '<div class="col-lg-8"><h2 style="align:center"><img src="../images/Quantum_Logo.png" width="60" height="50" alt=""' +
        'style="margin-right: 1ch">TFA Enterprise QA Automation Dashboard</h2></div>' +
        '<div class="col-lg-1"><img style="padding-top:10px" src="../images/Tosca.png" height="50"></div>' +
        '<div class="col-lg-1"></div>'+
      '</div>'+
    '</div>');


  var element = document.getElementById("navbar");
  element.insertAdjacentHTML('afterbegin',
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
    '<a class="nav-link Report" href="../main/Report.html" style="margin: 2px 20px 2px 20px; text-align: centre">Automation Report</a>' +
    '</li>' +

    '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other</a>' +
      '<div class="dropdown-menu" aria-labelledby="dropdown01">' +
        '<a class="dropdown-item" href="../main/DocTest.html">Document Testing</a>' +
        '<a class="dropdown-item" href="../main/InflightData.html">Test Data Creation</a>' +
      '</div>' +
    '</li>' +

    '</ul>' +
    '</div>' +
    '<a class="nav-link Request float-right" href="../main/EngageUs.html" >Engage us</a>');
}