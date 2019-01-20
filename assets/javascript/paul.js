

function articleSearch () {
// run API to search database and return articles related to subject terms

    // create variables with default values
    var searchTerms = "";
    var numArticles = 0;
    var startYear = 19000101;
    var endYear = 20191231;

    var queryString = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var myAPIKey = "6c3c74f2-54f8-4e5c-aa47-c4eb1e70320d";
    
    $.ajax({
        url: queryString,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    });




};




$(document).on("click", ".startSearch", articleSearch);