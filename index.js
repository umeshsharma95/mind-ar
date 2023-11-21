document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	let arSystem;
	sceneEl.addEventListener('loaded', function () {
	  arSystem = sceneEl.systems["mindar-image-system"];
	});
  const nextButtonWrapper = document.querySelector('.nextButtonWrapper');
	
  [0, 1, 2, 3, 4].forEach((_, index) => {
    const imageTarget = document.getElementById(
      `mindar-image-target_${index}`
    );
    imageTarget.addEventListener('targetFound', (event) => {
      console.log('targetFound', index);
      nextButtonWrapper.style.display = 'flex'
      const nextButton = document.querySelector('#nextButton');
      nextButton.addEventListener('click', () => {
        console.log('nextButton click');
        window.location.replace("./main.html")
      })
    });
    imageTarget.addEventListener('targetLost', (event) => {
      console.log('target lost');
      nextButtonWrapper.style.display = 'none'
    });
  });

});




