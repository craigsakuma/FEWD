console.log('sanity check');

$(document).ready(function(){
  $('#show-data').click(function(){
    event.preventDefault();
    var resource=$('#resource').val();
    var refNumber=$('#ref-number').val();
    console.log(resource)
    console.log('https://swapi.co/api/'+resource+'/'+refNumber+'?format=json');
  //   $($.ajax({
  //     method: 'GET',

  //     // The URL for the request
  //     url: 'https://swapi.co/api/'+resource+'/'+number+'?format=json',

  //     // The type of data we want back
  //     dataType: 'json',

  //     // Code to run if the request succeeds; the JSON
  //     // response is passed to the function as an argument.
  //     success: onSuccess
  // }))
})

function onSuccess(responseData){
  console.log(responseData);
  var displayData = JSON.stringify(responseData);
  displayData = displayData.split(',').join(', ');
  $('#container').append('<div>'+ displayData +'</div>');
}
})

