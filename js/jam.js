;( function ($) {
  var jam = {
    contentLoaded: function(context) {
      context.find('[data-apply-selector]').each( function() {
        var self = $(this);
        self.find( self.data('applySelector') ).each( function() {
          var target = $(this);
          target.addClass( self.data('applyClass') );
        } )
      } )
    }
  };
  $( function(){ jam.contentLoaded( $( document.body ) ) } )
} (jQuery) );
