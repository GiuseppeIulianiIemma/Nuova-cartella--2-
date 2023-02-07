<script>
// JavaScript code
  function toggleDarkMode() {
  let header = document.querySelector("header");
  let sections = document.querySelectorAll("section");
  let footer = document.querySelector("footer");
  let currentColor = header.style.backgroundColor;
  if (currentColor === "rgb(51, 51, 51)") {
    header.style.backgroundColor = "#f2f2f2";
  footer.style.backgroundColor = "#f2f2f2";
  header.style.color = "#333";
  footer.style.color = "#333";
    sections.forEach(section => {
    section.style.backgroundColor = "#333";
  section.style.color = "#fff";
    });
  } else {
    header.style.backgroundColor = "#333";
  footer.style.backgroundColor = "#333";
  header.style.color = "#fff";
  footer.style.color = "#fff";
    sections.forEach(section => {
    section.style.backgroundColor = "#f2f2f2";
  section.style.color = "#333";
    });
  }
}
</script>