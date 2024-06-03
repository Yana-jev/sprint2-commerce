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
				document.getElementById('errorName').innerHTML = 'Это поле обязательно к заполнению и должно содержать не менее 3 символов, состоящих только из букв';
			} else {
				document.getElementById('errorName').innerHTML = '';
			}
		});
	});
