//multiplicacao
function mult(){
$(document).ready(function(){
    $('input[type="text"]').keyup(function () {
      var val1 = parseInt($('.value1').val());
      var val2 = parseInt($('.value2').val());
              var sum = val1*val2;
              $("input#result").val(sum);
    });
    });
}
//divisao
function div(){
    $(document).ready(function(){
        $('input[type="text"]').keyup(function () {
          var val1 = parseInt($('.value1').val());
          var val2 = parseInt($('.value2').val());
                  var sum = val1/val2;
                  $("input#result").val(sum);
        });
        });
    }