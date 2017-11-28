
var linkPesquisa = "https://opentdb.com/api.php?amount=10&type=boolean";
$.getJSON( linkPesquisa, function( data ) {


    //$(function() {
            $( ".result" ).html( data.results[0].question );
            $( "#correct_answer" ).html( data.results[0].correct_answer );
            $( "#incorrect_answers" ).html( data.results[0].incorrect_answers[0] );
    //});

    //$(function() {
        //$.get( linkPesquisa, function( data ) {

        //});
    //});
});


