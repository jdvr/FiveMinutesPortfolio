var FooterItem = (function (title, content) {
    var data = '<div class="footer-col col-md-4"> <h3>' + title + '</h3>' + content + '</div>';

    return {
        html: function () {
            return data;
        }
    }
});

function loadFooterItemsFromConfig() {
    return [
        new FooterItem(footer.left.title, footer.left.content),
        new FooterItem(footer.middle.title, footer.middle.content),
        new FooterItem(footer.right.title, footer.right.content)
    ]
}

var FooterLoader = (function () {
    return {
        load: function () {
            loadFooterItemsFromConfig().forEach(function (footerItem) {
                $("#footer-container").append(footerItem.html())
            });
        }
    };
}());

$(function(){
    FooterLoader.load();
});
