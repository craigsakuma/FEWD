$(document).ready(function(){
  $('button').click(function(event){
    event.preventDefault();
    rpsShoot(this.id)
  })
})

function rpsShoot(user) {
  // pick rps for computer
  var rand=Math.floor(Math.random() * 3);
  var options = ['rock','paper','scissors']
  var computer = options[rand]

  // display picks on screen
  $('#computer').html('computer: '+computer);
  $('#user').html('user: '+user);

  // logic for determining winner
  if (computer===user) {
      $('#result').html('tie')
  } else if (user==='rock'){
    youWin(computer==='scissors');
  } else if (user==='paper') {
    youWin(computer==='rock');
  } else {
    youWin(computer==='paper');
  }

  function youWin(won) {
    if (won) {
      var humanScore = parseInt($('#humanScore').html());
      $('#result').html('you win');
      $('#humanScore').html(humanScore+1);
  } else {
      var computerScore = parseInt($('#computerScore').html());
      $('#result').html('you lose');
      $('#computerScore').html(computerScore+1);
    }
  }
}
