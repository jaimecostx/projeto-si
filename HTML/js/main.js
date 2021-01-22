$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
//dark and light mode
function FunctionColor() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
} 

//collapse
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})
//aviso links
function FunctionAlert() {
  alert("Este link redireciona para uma página externa!");
}
//relogio front page
setInterval(function(){
  const clock = document.querySelector(".display");
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();
  if (sec<10){
    sec = '0'+sec;
  }if (min<10){
    min = '0'+min;
  }if(hr<10){
    hr = '0'+hr;
  }
  clock.textContent = hr + ":" + min + ":" + sec 
});
//pesquisa
function FunctionSearch() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
