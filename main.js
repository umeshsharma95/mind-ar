// function saveBase64AsFile(base64, fileName='download') {
//     var link = document.createElement("a");
//     document.body.appendChild(link); // for Firefox
//     link.setAttribute("href", base64);
//     link.setAttribute("download", fileName);
//     link.click();
// }

// function takeScreenshot() {
// 	var screenshot = document.documentElement
// 		.cloneNode(true);
// 	screenshot.style.pointerEvents = 'none';
// 	screenshot.style.overflow = 'hidden';
// 	screenshot.style.webkitUserSelect = 'none';
// 	screenshot.style.mozUserSelect = 'none';
// 	screenshot.style.msUserSelect = 'none';
// 	screenshot.style.oUserSelect = 'none';
// 	screenshot.style.userSelect = 'none';
// 	screenshot.dataset.scrollX = window.scrollX;
// 	screenshot.dataset.scrollY = window.scrollY;
// 	var blob = new Blob([screenshot.outerHTML], {
// 		type: 'text/html'
// 	});
// 	return blob;
// }

// const container = document.getElementById("container");
// const captureButton = document.getElementById("capture-button");
// const previewContainer = document.getElementById("preview-container");
// const downloadButton = document.getElementById("download-button");

// captureButton.addEventListener("click", async () => {
//   const canvas = await html2canvas(container);
//   const imageURL = canvas.toDataURL();
//   saveBase64AsFile(imageURL)
// });

const loadAnimation = () => {
	var christmasFall = document.getElementById('christmas_fall');
	var christmasVan = document.getElementById('christmas_van');
	// var animItem = bodymovin.loadAnimation({
	//   container: christmasFall,
	//   renderer: 'svg',
	//   loop: true,
	//   path: './christmas_fall.json'
	// });
	var animItem = bodymovin.loadAnimation({
		container: christmasVan,
		renderer: 'svg',
		loop: true,
		path: './christmas_van.json'
	});
  }

document.addEventListener("DOMContentLoaded", function() {
	loadAnimation()
})