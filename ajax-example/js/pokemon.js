
$(document).ready(function(){
    $.ajax({
      method: 'GET',

      // The URL for the request
      url: 'https://pokeapi.co/api/v2/pokemon/1/',

      // The type of data we want back
      dataType: 'json',

      // Code to run if the request succeeds; the JSON
      // response is passed to the function as an argument.
      success: onSuccess
  })
  function onSuccess(responseData) {
    var name=responseData.name
    var height=responseData.height
    console.log(name+height)
    $('#poki-name').html(name)
    $('#poki-height').html(height)
  }
})
