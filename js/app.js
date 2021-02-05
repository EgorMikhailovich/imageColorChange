const bg = document.querySelector('.bg')
const img = document.querySelector('img')

bg.style.width = img.width + 'px'
bg.style.height = img.height + 'px'

function myFunction() {
	var x = document.getElementById("favcolor");
	var currentVal = x.value;
	  document.getElementById("demo").innerHTML = currentVal;
	  const color = currentVal
	  const r = parseInt(color.substr(1,2), 16)
	  const g = parseInt(color.substr(3,2), 16)
	  const b = parseInt(color.substr(5,2), 16)
	  console.log(`red: ${r}, green: ${g}, blue: ${b}`);
	  bg.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${randomColor()})`

  }
// function randomColor () {
// 	return Math.floor(Math.random() * 255)
// }

// bg.addEventListener('click', () => {
// 	bg.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`
// })