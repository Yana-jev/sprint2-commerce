document.addEventListener('DOMContentLoaded', function () {
	var form = document.querySelector('.needs-validation');

	form.addEventListener('submit', function (event) {
		if (!form.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}

		form.classList.add('was-validated');

		var fName = document.getElementById("fName");

		if (fName.validity.patternMismatch) {
			document.getElementById('errorName').innerHTML = 'This field is required and must have, at least,3 characters';
		} else {
			document.getElementById('errorName').innerHTML = '';
		}
	});
});
