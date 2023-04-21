let divisions = document.getElementsByTagName("div");
for (let i = 0; i < divisions.length; i++) {
    divisions[i].addEventListener('click', function() {
        this.classList.toggle("show-description");
    });
}