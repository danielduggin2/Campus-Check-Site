// Get all the anchor tags inside the nav menu
const navLinks = document.querySelectorAll('nav a');

// Loop through each anchor tag
navLinks.forEach((link) => {
  // Add a click event listener to each anchor tag
  link.addEventListener('click', (e) => {
    // Prevent the default behavior of the link (i.e., jumping to the anchor)
    e.preventDefault();

    // Get the target element's ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Get the target element
    const targetElem = document.getElementById(targetId);

    // Get the position of the target element relative to the top of the page
    const targetPos = targetElem.offsetTop;

    // Animate the scroll to the target element
    window.scrollTo({
      top: targetPos,
      behavior: 'smooth'
    });
  });
});
