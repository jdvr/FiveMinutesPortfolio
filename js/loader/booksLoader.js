var statusIcons = {
    "todo" : "fa fa-square-o",
    "inprogress": "fa fa-circle-o-notch fa-spin",
    "done": "fa fa-check-square-o"
};

var BookTemplate = (function(book){
    var data = '<div class="col-md-4"> <p>' + book.title() +  ' <i class="'+ statusIcons[book.status()] +'"></p>';

    return {
        html: function () {
            return data;
        }
    }
});

var BooksLoader = (function () {
    return {
        load: function () {
            books.forEach(function (book) {
                $("#books").append(new BookTemplate(book).html())
            });
        }
    };
}());

$(function(){
    BooksLoader.load();
});
