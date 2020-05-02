function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightboxoverlay').classList.remove('hidden');

  document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
  unhideLightbox("largerpic");
}

document.getElementById('resumepic').onclick = unhideLightbox1;

function closedLightbox(lightboxID) {
  document.getElementById('lightboxoverlay').classList.add('hidden');
  document.getElementById(lightboxID).classList.remove('hidden');
}

function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

document.getElementById('lightboxoverlay').onclick = closeAllLightboxes;
