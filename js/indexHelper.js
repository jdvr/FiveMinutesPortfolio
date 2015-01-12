$(document).ready(function(){
  $(".project").hover(function(){
  		changeProjectDescriptionState($("#"+this.id).find(".project-description"));
    },function(){
    	changeProjectDescriptionState($("#"+this.id).find(".project-description"));
  });
});


function changeProjectDescriptionState (item) {
	item.animate({height: 'toggle'}, "fast","linear");
}