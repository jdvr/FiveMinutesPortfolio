var ProfileLoader = (function(){
    function getKeys(){
        return Object.keys(profile);
    }

    function convertKeyToHtmlIds(key){
            return key.replace(/_/g, "-");
    }

    function fillHtmlData(){
        getKeys().forEach(function(key){
            $("#" + convertKeyToHtmlIds(key)).html(profile[key]);
        });
    }
    return {
        load: function(){
            fillHtmlData();
        }
    }
}());

$(function(){
    ProfileLoader.load()
});