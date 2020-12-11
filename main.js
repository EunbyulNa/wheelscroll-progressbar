$(document).ready(function() {

  //Refresh scrollTop
  window.onbeforeunload = function () {
   window.scrollTo(0,0);
};

//wheel scroll
var scrollEvent = false;
var sectionIndex = 0;

  $('html, body').on('mousewheel', function (e) {
    e.preventDefault();
    var mouseValue = e.originalEvent.wheelDelta;
    var sectionHeight = $('#first').height();

    if( mouseValue > 1 && sectionIndex >=1 && scrollEvent == false ){
      scrollEvent = true;
      sectionIndex --;
      $('html, body').stop().animate( {scrollTop: sectionHeight * sectionIndex},
                                      {duration: 900,
                                       complete: function(){scrollEvent = false;}
                                      });
      } else if (mouseValue < 1 && sectionIndex < 3 && scrollEvent == false) {
        scrollEvent = true;
        sectionIndex ++;
        $('html, body').stop().animate( {scrollTop : sectionHeight * sectionIndex},
                                        {duration:900,
                                        complete: function() {scrollEvent = false;}
                                      });
      }//else if ends
   })

  //pregress bar
  $(window).scroll(function() {
  var sct = $(window).scrollTop();
  var skill = $('.skill_wrap').offset().top;

  if( sct  > skill - 500  ) {
    var skillMain = $('.skill_list > div');

    skillMain.each( function () {
      var progressWrap = $(this).find('.gauge');
      var progressBar = progressWrap.find('.bar');
      var progressText = progressWrap.next('.percent');
      var progressNum = progressText.attr('data-num');

      progressBar.animate( { 'width' : progressNum + '%'  }, 2000);


      setInterval(textNum, 100);
       function textNum() {
        var currentWidth = progressBar.width() / progressWrap.width() * 100;

        progressText.text(Math.ceil(currentWidth) + '%');
      };
    });
  };
})

});
