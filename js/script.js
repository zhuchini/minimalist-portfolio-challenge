const headerContentMarkup = `
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
    </div>
    <div class="menu">
      <a href="index.html" class="link active-page">Home</a>
      <a href="portfolio.html" class="link">Portfolio</a>
      <a href="contact.html" class="link">Contact Me</a>
    </div>
`
const footerContentMarkup = `
  <div class="left-footer">
    <div class="logo-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#FAFAFA" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
    </div>
    <div class="menu-2">
      <a href="index.html" class="link-2">Home</a>
      <a href="portfolio.html" class="link-2">Portfolio</a>
      <a href="contact.html" class="link-2">Contact Me</a>
    </div>
  </div>
  <div class="right-footer">
    <div class="social-icons">
      <ul>
        <li><i class="fab fa-github" ></i></li>
        <li><i class="fab fa-twitter" ></i></li>
        <li><i class="fab fa-linkedin" ></i></li>
      </ul>
    </div>
  </div>
`

const headerContainer = document.querySelector('.header');
headerContainer.insertAdjacentHTML('afterbegin', headerContentMarkup);

const footerContainer = document.querySelector('.real-footer');
footerContainer.insertAdjacentHTML('afterbegin', footerContentMarkup);