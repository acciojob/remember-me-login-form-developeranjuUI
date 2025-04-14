//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function(){
	const user = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const checkbox = document.getElementById('checkbox');
	const submit = document.getElementById('submit');
	const form = document.getElementById('loginForm');
	const existing = document.getElementById('existing');

	const savedName = localStorage.getItem('username');
	const savedPassword = localStorage.getItem('password');

	if(savedName && savedPassword){
		existing.style.display = 'inline-block';
	}

	form.addEventListener("submit", function(event){
		event.preventDefault();
		const username = user.value.trim();
		const password = passwordInput.value.trim();

		alert(`Logged in as ${username}`);

		if(checkbox.checked){
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);
			existing.style.display = 'inline-block';
		} else {
			localStorage.removeItem('username');
			localStorage.removeItem('password');
			existing.style.display = 'none';
		}
		form.reset();
	});
	existing.addEventListener('click', function(){
		const existingUser = localStorage.getItem('username');
		alert(`Logged in as ${savedName}`);
	})
	
})