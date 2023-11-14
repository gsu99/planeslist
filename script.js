function openModal() {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("contentWrapper").style.display = "block";
  document.body.classList.add("modal-open");
}

function openSite() {
  document.getElementById("modal").style.display = "none";
  document.body.classList.remove("modal-open");
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function () {
 const checkboxes = document.querySelectorAll('input[type="checkbox"]');

 checkboxes.forEach(function (checkbox) {
    const storageValue = localStorage.getItem(checkbox.id);

    if (storageValue === 'true') {
      checkbox.checked = true;
    } else if (storageValue === 'false') {
      checkbox.checked = false;
    }

    checkbox.addEventListener('change', function () {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
 });
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    openSite();
  }
});
