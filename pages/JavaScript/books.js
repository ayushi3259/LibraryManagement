document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const maxAllowedBooks = 3;
    const popupModal = document.getElementById('popupModal');
    const closeBtn = document.querySelector('.close');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const checkedBooks = document.querySelectorAll('input[type="checkbox"]:checked');

            if (checkedBooks.length > maxAllowedBooks) {
                // Display popup modal
                popupModal.style.display = 'block';
                this.checked = false; // Uncheck the current checkbox
            }
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        popupModal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popupModal) {
            popupModal.style.display = 'none';
        }
    });
});