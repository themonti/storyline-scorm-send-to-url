function ExecuteScript(strId) {
    switch (strId) {
        case "6ExjV9v3WY6":
            Script1();
            break;
    }
}

function Script1() {
    sendURL();
}

function sendURL() {
    console.log("sendURL()  => " + player.GetVar("url"));
    //player.SetVar("campus_id", getAbsolutePath());
    // player.SetVar("campus_id", URLdomain);
    // player.SetVar("student_id", lmsAPI.GetStudentID());
    // player.SetVar("student_name", lmsAPI.GetStudentName());

    var urltemp = 'https://jsonplaceholder.typicode.com/posts/1';

    jQuery.ajax({
        type: "GET",
        cache: false,
        dataType: "html",
        url: urltemp,
        success: function(response) { console.log(response); },
    });
}


/***NO TOCAR**/
function findLMSAPI(win) {
    if (win.hasOwnProperty("GetStudentID")) return win;
    else if (win.parent == win) return null;
    else return findLMSAPI(win.parent);
}

function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

var lmsAPI = findLMSAPI(this);
var player = GetPlayer();
var URLdomain = window.location.host;