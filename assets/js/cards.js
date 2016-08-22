'use strict';

(function($){
  $(document).ready(function() {
    $(document).on('click', '#print-cards', function(event) {
      event.preventDefault();
      var url = $(this).attr('href') ;

      if( $('#views-form-cards-page input:checkbox:checked').length > 0 ) {
        $('#views-form-cards-page input:checkbox:checked').each(function (index) {

          if (index == 0) {
            url += '?cards[]='+$(this).val();
          }else{
            url += '&cards[]='+$(this).val();
          }
        });
        window.location = url;
      }
    });
  });
}(jQuery));
