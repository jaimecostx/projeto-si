function FunctionColor() {

  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
} 


var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

function FunctionAlert() {
  alert("Este link redireciona para uma página externa!");
}

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