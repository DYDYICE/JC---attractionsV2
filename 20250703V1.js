document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.attraction-card').forEach(function(card) {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
  });
});
