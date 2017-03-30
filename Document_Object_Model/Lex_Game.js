var squares = document.querySelectorAll('td');
var restart = document.querySelector('.btn-primary');


restart.addEventListener('click', function() {
  squares.forEach(function(cur) {
    cur.textContent = '';
  })
})

function changeSquare() {
  var txt = this.textContent;
  switch(this.textContent) {
    case '': {
      this.textContent = 'X';
      break;
    }
    case 'X': {
      this.textContent = 'O';
      break;
    }
    case 'O': {
      this.textContent = '';
      break;
    }
  }
}

squares.forEach(function(cur) {
  cur.addEventListener('click', changeSquare);
})
