function loadNav() {
    var element = document.getElementById("navbar");
    element.insertAdjacentHTML('afterbegin','<a class="navbar-brand" href="../main/AutomationStatus.html"></a>'+
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
      '<span class="navbar-toggler-icon"></span>'+
    '</button>'+
    '<div class="collapse navbar-collapse" id="navbarNav">'+
      '<ul class="navbar-nav">'+
        '<li class="nav-item active">'+
          '<a class="nav-link" href="../main/AutomationStatus.html">Current Jobs<span class="sr-only">(current)</span></a>'+
        '</li>'+
        '<li class="nav-item dropdown">'+
            '<a class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other</a>'+
            '<div class="dropdown-menu" aria-labelledby="dropdown01">'+
            '<a class="dropdown-item" href="../suites/suiteindex.html">Document Testing</a>'+
            '<a class="dropdown-item" href="../suites/contractactivation.html">Contract Activation</a>'+
            '<a class="dropdown-item" href="../suites/tunesuite.html">Tune</a>'+
            '<a class="dropdown-item" href="../suites/ugfv.html">UGFV</a>'+
            '</div>'+
        '</li>'+
        '<li class="nav-item">'+
          '<a class="nav-link" href="../main/CompletedJobsList.html">Completed Jobs</a>'+
        '</li>'+
        '<li class="nav-item">'+
            '<a class="nav-link" href="../main/InflightData.html">Request Inflights</a>'+
        '</li>'+
      '</ul>'+
    '</div>');
    console.log("");
}