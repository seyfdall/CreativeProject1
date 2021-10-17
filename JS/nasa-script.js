document.getElementById("nasaPicSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const url = "https://images-api.nasa.gov/search?q=" + document.getElementById("nasaPicInput").value + "&media_type=image";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            if (json.collection.items.length === 0) {
                alert("Your mother was a hamster and your father smells of elder berries - search better next time!!");
                return;
            }
            console.log(json.collection.items[0].links[0].href);
            console.log(json.collection.items[0].data[0]);
            document.getElementById("spacePic").src = json.collection.items[0].links[0].href;
            document.getElementById("spacePicDesc").innerHTML = json.collection.items[0].data[0].description;
            document.getElementById("spacePicName").innerHTML = json.collection.items[0].data[0].title;
        });
});

// document.getElementById("videoSearch").addEventListener("keyup", function(event) {
//     event.preventDefault();
//     const url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=P";
//     fetch(url)
//         .then(function(response) {
//             return response.json();
//         }).then(function(json) {
//             console.log(json);
//             console.log(json[0]);
//             console.log("Got " + json[0].city);
//             var everything;
//             everything = "<ul>";
//             for (let i = 0; i < json.length; i++) {
//                 everything += "<li> " + json[i].city;
//             };
//             everything += "</ul>";
//             document.getElementById("txtHint").innerHTML = everything;
//         });
// });