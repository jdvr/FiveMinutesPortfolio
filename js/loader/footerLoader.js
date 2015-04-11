var FooterItem = (function(title, content){
  var data = '<div class="footer-col col-md-4"> <h3>' + title + '</h3>' +content + '</div>';

    return {
        html: function(){
            return data;
        }
    }
});

function loadFooterItemsFromConfig(){

}

var FooterLoader = (function(){
    $("#footer-container").append()
});
