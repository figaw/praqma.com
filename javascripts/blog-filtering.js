function filter(currentTag){
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, '200', 'swing');

  // if hash is empty
  //
  if (currentTag == "" && window.location.pathname == "/blog/") {
    currentTag = "Featured";
    console.log("currentTag = " + currentTag);
  }

  // Setting visibility
  //
  $(".layout-tag-page h1").text(currentTag);
  $(".layout-tag-page article").filter(function( index ) {
    return !$( this ).data("tags").includes(currentTag);
  })
  .hide("fast");
  var articlesToShow = $(".layout-tag-page article").filter(function( index ) {
    return $( this ).data("tags").includes(currentTag);
  });
  articlesToShow.show("fast");

  // Highlighting links
  //
  $( "#search a" ).filter(function( index ) {
    return $( this ).text() != currentTag;
  })
  .removeClass("active");
  $( "#search a" ).filter(function( index ) {
    return $( this ).text() == currentTag;
  })
  .addClass("active");
  
  // Wrong hash
  //
  if(articlesToShow.length == 0 && window.location.pathname == "/blog/"){
    window.location.replace("/404.html");
  }
}

//$( "#search a" ).click(function() {
  //var currentTag = $(this).text();
  //filter(currentTag);
//});


$(window).on('hashchange', function() {
  currentTag = window.location.hash.slice(1);
  filter(currentTag);
});

$(function() {
  // Put *Featured* right after *Newest*
  $( "#search a" ).filter(function( index ) {
    return $( this ).text() == "Featured";
  }).insertAfter("#search a:first");

  currentTag = window.location.hash.slice(1);
  filter(currentTag);
});
