function filter(currentTag){
  $(".layout-tag-page h1").text(currentTag);
  $(".layout-tag-page article").filter(function( index ) {
    return !$( this ).data("tags").includes(currentTag);
  })
  .hide("fast");
  var articlesToShow = $(".layout-tag-page article").filter(function( index ) {
    return $( this ).data("tags").includes(currentTag);
  });
  
  articlesToShow.show("fast");
  console.log(articlesToShow.length);
  //if ( (".layout-tag-page article:visible").length == 0 ){
    //console.log("nothing found");
  //}
}

$( "#search a" ).click(function() {
  var currentTag = $(this).text();
  filter(currentTag);
});

$(function() {
  currentTag = window.location.hash.slice(1);
  console.log("currentTag = " + currentTag);
  if (currentTag == "") {
    currentTag = "Featured";
    console.log("currentTag = " + currentTag);
  }
  filter(currentTag);
});
