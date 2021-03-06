$(document).ready(function(){
  $('#submit-btn').click(function(event){
    event.preventDefault();
    // capture city input and reset field
    var city = $('#city-type').val().toLowerCase().trim();
    $('#city-type').val('')
    // dictionary of classes and city aliases
    var cities = {'nyc':['new york', 'new york city', 'nyc'],
                  'sf':['san francisco','sf','bay area'],
                  'la':['los angeles','la','lax'],
                  'austin':['austin','atx'],
                  'sydney':['sydney','syd']
                  };
    // iterate through each class and array of aliases; change class if there's a match
    for (var each in cities){
        if (cities[each].indexOf(city)!=-1) {
            $('body').removeClass()
            $('body').addClass(each)
      }
    }
  })
})


// pseudo code
// create a dictionary with class names for each image as keys and arrays of aliases for the images as values
// when update button is pressed
//     store text from input in variable called city
//     for each key value pair in dictionary of images
//         compare city with each array of names for each city
//         if city matches string in list 
//             remove all classes from body
//             add class to body for city
