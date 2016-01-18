function filter(currentTag){

  // if hash is empty
  //
  if (currentTag == "" && window.location.pathname == "/stories/") {
    currentTag = "Featured";
    //console.log("currentTag = " + currentTag);
  }

  // Setting visibility
  //
  $(".page-stories-index h1").text(currentTag);
  $(".page-stories-index article").filter(function( index ) {
    return !$( this ).data("tags").includes(currentTag);
  })
  .hide("fast");
  var articlesToShow = $(".page-stories-index article").filter(function( index ) {
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
  if(articlesToShow.length == 0 && window.location.pathname == "/stories/"){
    //console.log("articlesToShow = " + articlesToShow.length);
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

  //scroll to h1
  var body = $("html, body");
  var scrollTo = $(".page-stories-index h1").offset().top;
  body.stop().animate({scrollTop: scrollTo }, '200', 'swing');
});

$(function() {
  // Put *Featured* right after *Newest*
  $( "#search a" ).filter(function( index ) {
    return $( this ).text() == "Featured";
  }).insertAfter("#search a:first");

  currentTag = window.location.hash.slice(1);
  filter(currentTag);
});
