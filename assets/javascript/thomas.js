$("#searchButton").on("click", function() {
    $("#results").empty()
    console.log("hello")
    var search = $('#terms').val();
    var start = $("#StartDate").val();
    var end = $("#endDate").val();
    var number = $("#optionSelected option:selected").text()
    if (end.length === 4) {
        end = end + "0101"
    }
    if (start.length === 4) {
        start = start + "0101"
    }
    if (start.length === 0) {
        start = "19000101"
    }
    if (end.length === 0) {
        end = "20190119"
    }
    console.log(end)
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + search + 
    "&facet_field=day_of_week&facet=true&begin_date=" + start +"&end_date=" + end + "&api-key=qA9Fif1b9ph1xmd3Ognfo60Lq39yQnib"

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response)
        var results = response.response.docs

            for (i=0; i < number; i++) {
            var div = $("<div>");
            var space = $("<br>");

            var title = results[i].headline.main;
            var url = results[i].web_url;

            var headline = $("<p>").text("Title: " + title).css("textDecoration", "underline");
            var link = $("<a>").text("URL: " + url).attr("href", url);
            

            div.prepend(link);
            div.prepend(headline);
            div.prepend(space)
            

            $("#results").prepend(div);
            }
        
    })
})

$("#clear").on("click", function() {
    $("#results").empty()
})