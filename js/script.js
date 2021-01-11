const currentActiveLinkIndex = -1;

const headerContentMarkup = `
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
    </div>
    <div class="menu">
      <a href="index.html?linkindex=1" class="link">Home</a>
      <a href="portfolio.html?linkindex=2" class="link">Portfolio</a>
      <a href="contact.html?linkindex=3" class="link">Contact Me</a>
      <i class="fas fa-bars"></i>
    </div>
`
const footerContentMarkup = `
  <div class="left-footer">
    <div class="logo-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#FAFAFA" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
    </div>
    <div class="menu-2">
      <a href="index.html?linkindex=1" class="link-2">Home</a>
      <a href="portfolio.html?linkindex=2" class="link-2">Portfolio</a>
      <a href="contact.html?linkindex=3" class="link-2">Contact Me</a>
    </div>
  </div>
  <div class="right-footer">
    <div class="social-icons">
      <ul>
        <li><i class="fab fa-github" aria-hidden="true"></i></li>
        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
      </ul>
    </div>
  </div>
`
const headerContainer = document.querySelector('.header');
headerContainer.insertAdjacentHTML('afterbegin', headerContentMarkup);

const footerContainer = document.querySelector('.real-footer');
footerContainer.insertAdjacentHTML('afterbegin', footerContentMarkup);

function getParamByKey(key) {
  const params = new URLSearchParams(document.location.search.substring(1));
  let value = params.get(key);

  console.log(value);
}

getParamByKey('linkindex');

// document.querySelectorAll('.link').forEach(item => {
//   item.addEventListener('click', event => {
//     // event.classList.add('active-page');
//   })
// });

// $(document).ready(function() {
//   // 1st click you set the previous and current to the same
//   // on next click remove active from past index element, set active to currently clicked
//   $("a").click(function() {
//     $("a.active-page").addClass("active-page");
//     $(this).addClass("active-page");
//   });
// });
