$(document).ready(function () {
    var dbURL = "https://shareddb-g.hosting.stackcp.net";
    var dbName = "drmrzd-373116ae";
    var dbUser = "dremerz";
    var dbPW = "dremerz85";

    $("#engageForma").submit(function () {
        console.log('hello there');
        $.ajax({
            type: "POST",
            url: "https://shareddb-g.hosting.stackcp.net/drmrzd-373116ae/",
            username: "jdury",
            password: "jdury420",
            data: {
                ACTIVITY: "an Activity",
                POJECT: "TESTING",
                ENV: "STG9"
            },
            success: function () {
                alert("success");
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    });
});

$("#submit").click(function () {
    $.post($("#engageForm").attr("action"),
        $("#myForm :input").serializeArray(),
        function (info) {
            $("#result").html(info);
        });
});

$("#engageForm").submit(function () {
    return false;
});