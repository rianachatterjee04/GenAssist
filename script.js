document.getElementById('toggle-notebook').addEventListener('click', function(e) {
    e.preventDefault();
    var details = document.getElementById('more-notebook');
    if (details.style.display === 'none') {
      details.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      details.style.display = 'none';
      this.textContent = 'Read More';
    }
  });
  