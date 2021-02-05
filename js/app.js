const bg = document.querySelector('.bg')
const img = document.querySelector('img')

bg.style.width = img.width + 'px'
bg.style.height = img.height + 'px'

function myFunction() {
	var x = document.getElementById("favcolor");
	
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("my-image");
	ctx.drawImage(img, 0, 0);
	var imgData = ctx.getImageData(0, 0, img.width, img.height);

	var currentVal = x.value;
	  document.getElementById("demo").innerHTML = currentVal;
	  const color = currentVal
	  const r = parseInt(color.substr(1,2), 16)
	  const g = parseInt(color.substr(3,2), 16)
	  const b = parseInt(color.substr(5,2), 16)
	  console.log(`red: ${r}, green: ${g}, blue: ${b}`);
	//   bg.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${randomColor()})`


	// invert colors
	var i;
	for (i = 0; i < imgData.data.length; i += 4) {
	//  imgData.data[i] = 255 - imgData.data[i];
	//  imgData.data[i+1] = 255 - imgData.data[i+1];
	//  imgData.data[i+2] = 255 - imgData.data[i+2];
	//  imgData.data[i+3] = 255;
	imgData.data[i] =  (imgData.data[i] + r)%255;
	imgData.data[i+1] =  (imgData.data[i+1] +g)%255;
	imgData.data[i+2] =  (imgData.data[i+2] + b)%255;
	imgData.data[i+3] = 255;

	}
	ctx.putImageData(imgData, 0, 0);
	  
	  
  }
function randomColor () {
	return Math.floor(Math.random() * 255)
}

// bg.addEventListener('click', () => {
// 	bg.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`
// })