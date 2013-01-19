
(function( $ ) {

    $.fn.mosaic = function(options) {
     var defaults={
         'colNum': 4,
         'margin': 20,
         'imgWidth': 250
     } 

    var options = $.extend( defaults , options );


    this.each(function(){
           var totalHeight = 0;
           var obj = $(this);
           var opt = options;
           $('img',obj).each(function(){
               totalHeight += $(this).height();
           }); 
          
           var colHeight = totalHeight/opt.colNum;
           obj.css({'position':'relative'});
           var xPos = 0;
           var yPos = 0;

           $('li',obj).each(function(){
              $(this).css({
                   'position': 'absolute',
                   'top': yPos,
                   'left': xPos,
              }); 


              var scale = $('img',this).width()/opt.imgWidth;
              var imgheight = $('img',this).height();

              $('img', this).css({
                  'width' :opt.imgWidth,
                  'height' : $('img',this).height()/scale
              });

              yPos += $('img',this).height() + opt.margin;
              if(yPos > colHeight) {
                  yPos = 0;
                  xPos += opt.imgWidth + opt.margin;
                  console.log('Too Tall');
              }

           });
    });
  };
})( jQuery ); 