

function menuButtonEffects () {
	var navBarToggle = document.getElementById('js-navbar-toggle');
	var clickCount = 0;

					window.addEventListener('scroll', function changeToggleColor() {
											if (window.pageYOffset != 0) {
												navBarToggle.style.backgroundColor = 'rgba(53, 53, 53, .86)';
											}
										});

					navBarToggle.addEventListener('click', function () {
	    				clickCount++;
	    				if (clickCount%2==0){
							navBarToggle.innerHTML = '&#9776;';
                            navBarToggle.style.color = '#fff';
                            navBarToggle.style.backgroundColor = 'rgba(53, 53, 53, .86)';
	    				}else{
							navBarToggle.innerHTML = '&#10006;';
                            navBarToggle.style.color = '#fb8c00';
                            navBarToggle.style.backgroundColor = '#fff';
	    				}
					});
			};

function openMobileNav () {
				var mainNav = document.getElementById('js-menu');
				var navBarToggle = document.getElementById('js-navbar-toggle');

					navBarToggle.addEventListener('click', function () {
					    
					    mainNav.classList.toggle('active');
						}
					);
			};