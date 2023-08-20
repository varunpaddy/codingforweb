const assignmentButtons = document.querySelectorAll('.assignment-btn');
const submissionButtons = document.querySelectorAll('.submission-btn');

assignmentButtons.forEach(button => {
  button.addEventListener('click', () => {
    assignmentButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

submissionButtons.forEach(button => {
  button.addEventListener('click', () => {
    submissionButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
