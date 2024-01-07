
document.addEventListener('DOMContentLoaded', function() {
  const navList = document.createElement('ul');
  navList.innerHTML = `
  <audio controls loop autoplay="true">
    <source src="/audio/Muziek.mp3" type="audio/mpeg">
  </audio>
  <ul class="helebar">
    <li><a class="navbar" href="/index.html">Home</a></li>
    <li><a class="navbar" href="/news.html">Nieuws</a></li>
    <li><a class="navbar" href="/Afleveringen.html">Afleveringen</a></li>
    <li><a class="navbar" href="/Achtergrondinformatie.html">Achtergrondinformatie</a></li>
    <li><a class="navbar" href="/Blog.html">Blog</a></li>
     <li><a class="navbar" href="/Geschiedenis.html">B&B door de jaren heen</a></li>
   <li><a class="navbar" href="/Quiz.html">Quiz</a></li>
    <li><a class="navbar" href="/Contact.html">Contact</a></li>
    <li><a class="navbar" href="/Merchandise.html">Merchandise</a></li>
    <li class="logo"><img class="logo" src="/Afbeeldingen/logo/patmat outline.svg""></li>
  </ul>
  `;
  document.body.insertBefore(navList, document.body.firstChild);
});
