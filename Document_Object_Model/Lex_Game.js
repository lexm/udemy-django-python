var squares = document.querySelectorAll('td');

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
