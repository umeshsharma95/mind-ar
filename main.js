

function take_snapshot() {
    const screenshotTarget = document.body;
    html2canvas(screenshotTarget).then(canvas => {
        // to image as png use below line
        // const base64image = canvas.toDataURL("image/png");
        // show the image in window use below line
        // window.location.href = base64image;
        
        // screenshot appended to the body as canvas
        document.body.appendChild(canvas);  
        dataURL = canvas.toDataURL();  
        // to print the screenshot in console use below line
        // console.log(dataURL);
        
        // following line is optional and it is to save the screenshot
        // on the server side. It initiates an ajax call
        saveBase64AsFile(dataURL); 
    });  
}

function saveBase64AsFile(base64, fileName='download') {
    var link = document.createElement("a");
    document.body.appendChild(link); // for Firefox
    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
}

function takeScreenshot() {
	var screenshot = document.documentElement
		.cloneNode(true);
	screenshot.style.pointerEvents = 'none';
	screenshot.style.overflow = 'hidden';
	screenshot.style.webkitUserSelect = 'none';
	screenshot.style.mozUserSelect = 'none';
	screenshot.style.msUserSelect = 'none';
	screenshot.style.oUserSelect = 'none';
	screenshot.style.userSelect = 'none';
	screenshot.dataset.scrollX = window.scrollX;
	screenshot.dataset.scrollY = window.scrollY;
	var blob = new Blob([screenshot.outerHTML], {
		type: 'text/html'
	});
	return blob;
}

function generate() {
	window.URL = window.URL || window.webkitURL;
	window.open(window.URL
		.createObjectURL(takeScreenshot()));
}

const container = document.getElementById("container");
const captureButton = document.getElementById("capture-button");
const previewContainer = document.getElementById("preview-container");
const downloadButton = document.getElementById("download-button");

captureButton.addEventListener("click", async () => {
  const canvas = await html2canvas(container);
  const imageURL = canvas.toDataURL();
  saveBase64AsFile(imageURL)
});