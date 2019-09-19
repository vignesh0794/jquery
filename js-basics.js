// $(document).ready(function() {

//     /* Retrieving an element's text */

//     //You can find any DOM element and it's text using this syntax:
//     // text() is a method offered by jQuery
//     $("h1").text(); //returns "jQuery Basics"
//     console.log($("h1").text())

//     //text() allows you to modify the text node
//     $("h1").text("naan change aagiten :P")
//     console.log($("li").text())
//     $("li").text("ellarum change aagunga")
//     $("#soonapaana").text("hi i am soonapaana")

//     $("#snakebabu").text("i am babu snake babu")
// });



$(document).ready(function(){
    $("button").click(function(){
        let a=$('#textbox').val();
        console.log(a)
        $("ul").append(`<li>${a}</li>`);
    });
})