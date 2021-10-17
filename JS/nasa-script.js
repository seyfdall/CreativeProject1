document.getElementById("picutreSearch").addEventListener("keyup", function(event) {
    event.preventDefault();
    const url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=P";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            console.log(json[0]);
            console.log("Got " + json[0].city);
            var everything;
            everything = "<ul>";
            for (let i = 0; i < json.length; i++) {
                everything += "<li> " + json[i].city;
            };
            everything += "</ul>";
            document.getElementById("txtHint").innerHTML = everything;
        });
});

document.getElementById("videoSearch").addEventListener("keyup", function(event) {
    event.preventDefault();
    const url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=P";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            console.log(json[0]);
            console.log("Got " + json[0].city);
            var everything;
            everything = "<ul>";
            for (let i = 0; i < json.length; i++) {
                everything += "<li> " + json[i].city;
            };
            everything += "</ul>";
            document.getElementById("txtHint").innerHTML = everything;
        });
});