document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
  e.preventDefault();
  var name = getInputVal('name');
  var message = getInputVal('message');
  function getInputVal(id){
  return document.getElementById(id).value;
}
  $.ajax('http://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  data: {
    title: name,
    body:  message,
    userId: 1
  }
}).then(function(data) {
  console.log(data);
  var myJSON = JSON.stringify(data);
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("objectvalue").innerHTML = myJSON;
  document.getElementById('contactForm').reset();
 
});
}

