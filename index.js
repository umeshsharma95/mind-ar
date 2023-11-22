document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	let arSystem;
	sceneEl.addEventListener('loaded', function () {
	  arSystem = sceneEl.systems["mindar-image-system"];
	});
  const nextButtonWrapper = document.querySelector('.nextButtonWrapper');
	const scanningOverlay = document.querySelector('#example-scanning-overlay');

  [0, 1, 2, 3, 4].forEach((_, index) => {
    const imageTarget = document.getElementById(
      `mindar-image-target_${index}`
    );
    imageTarget.addEventListener('targetFound', (event) => {
      console.log('targetFound', index);
      loadAnimation()
      nextButtonWrapper.style.display = 'flex'
      scanningOverlay.style.display = 'none'
      const nextButton = document.querySelector('#nextButton');
      nextButton.addEventListener('click', () => {
        console.log('nextButton click');
        window.location.reload()
      })
    });
    imageTarget.addEventListener('targetLost', (event) => {
      console.log('target lost');
    });
  });

});

const loadAnimation = () => {
  var svgContainer = document.getElementById('svgContainer');
  var animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: './animation.json'
  });
}



