document.getElementById('openModalBtn').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;

    // Here, you can handle the form data as required, for example, you can send it to the server via AJAX

    // Close modal
    document.getElementById('modal').style.display = 'none';
});
