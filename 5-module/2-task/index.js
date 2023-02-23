function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');
  toggleTextButton.onclick = () => text.hidden = !text.hidden;
}
