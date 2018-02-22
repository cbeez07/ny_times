$(document).ready(function () {

    // var search = $("#searchTerm").val().trim();
    // var begin = $("#startYear").val() + '0101';
    // var end = $("#endYear").val() + '1231'


    //RETURN ARTICLE FUNCTION
    function returnArticles() {

        var search = $("#searchTerm").val().trim();
        var begin = $("#startYear").val() + '0101';
        var end = $("#endYear").val() + '1231'
        console.log(search);
        console.log(begin);
        console.log(end);

        var loop = $('#numberRecords').val();
        console.log(loop);

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "a70948b2459c4d24960ea4c356e00a49",
            'q': search,
            'fq': "The New York Times",
            'begin_date': begin,
            'end_date': end
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (response) {
            //DOM Manipulation
            if (loop == 0) {
                loop = 10;
                //COPY FOR LOOP HERE
                for (var i = 0; i < (loop + 1); i++) {
<<<<<<< HEAD
=======
>>>>>>> 04e87f0efd153e5e65b5a59a4157e0796363ed47
                    var articleURL = response.response.docs[i].web_url;
                    var resultOrder = response.response.docs[i] + 1;
                    var header = response.response.docs[i].headline.main;
                    var author = response.response.docs[i].byline.original;

                    var articleContent = '';
                    articleContent += '<a href="' + articleURL + '"><h3>' + header + '</h3></a>';
                    articleContent += '<p>' + author + '</p>';
                    console.log(articleContent);
                    $('.article-holder').append(articleContent);

                }
                //FOR LOOP ABOVE
            } else {
                for (var i = 0; i < (loop + 1); i++) {
<<<<<<< HEAD
=======
>>>>>>> 04e87f0efd153e5e65b5a59a4157e0796363ed47
                    var articleURL = response.response.docs[i].web_url;
                    var resultOrder = response.response.docs[i] + 1;
                    var header = response.response.docs[i].headline.main;
                    var author = response.response.docs[i].byline.original;

                    var articleContent = '';
                    articleContent += '<a href="' + articleURL + '"><h3>' + header + '</h3></a>';
                    articleContent += '<p>' + author + '</p>';

                    $('.article-holder').append(articleContent);
                }
            }
<<<<<<< HEAD
            // console.log(result);
        }).fail(function (err) {
            throw err;
=======
            console.log(result);
>>>>>>> 04e87f0efd153e5e65b5a59a4157e0796363ed47
        });

    }

    //EMPTY ARTICLE FUNCTION
    function emptyArticles() {
        $(".article-holder").empty();
    }

    //SERACH BUTTON
    $("#searchBtn").on('click', function () {
        event.preventDefault();
        //empty function
        emptyArticles();
        //return articles
        returnArticles();
    })

    //CLEAR BUTTON
    $("#clearBtn").on('click', function () {
        event.preventDefault();

        emptyArticles();
    })

});
