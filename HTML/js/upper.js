//uppercase
    $(document).ready(function () {
        $('#bt').on('click', function () {
            $('#t1')
            // clone(true,true) means -> .clone( [withDataAndEvents ] [, deepWithDataAndEvents ] )
              .clone(true, true)
              .attr('id', 'cloned_t')
              .appendTo('#cloned');
        });
        
        // Get values from the cloned textboxes.
        $('input').on('change', function () {
            var b = this.value;
          var str = b.toUpperCase();
             alert(str);
        });
      });
