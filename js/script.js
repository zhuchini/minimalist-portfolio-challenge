const headerContentMarkup = `
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
    </div>
    <div class="menu" id="myTopNav">
      <a href="index.html?linkindex=0" class="link">Home</a>
      <a href="portfolio.html?linkindex=1" class="link">Portfolio</a>
      <a href="contact.html?linkindex=2" class="link">Contact Me</a>
      <a href="javascript:void(0);" class="bar-icon" onclick="menuBarMobile()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
`
const footerContentMarkup = `
  <div class="left-footer">
    <div class="logo-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#FAFAFA" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
    </div>
    <div class="menu-2">
      <a href="index.html?linkindex=0" class="link-2">Home</a>
      <a href="portfolio.html?linkindex=1" class="link-2">Portfolio</a>
      <a href="contact.html?linkindex=2" class="link-2">Contact Me</a>
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

  // console.log(value ? value : 0);
  return value ? value : 0
}

// let activeIndex = Number.parseInt(getParamByKey('linkindex'));
// let testArr = ['test', '2', 'three'];

// testArr.forEach((val, index) => console.log(index === activeIndex))

function highlightActiveLink() {
  // call getParamByKey('linkindex')
  const activeLinkIndex = Number.parseInt(getParamByKey('linkindex'));

  document.querySelectorAll('.link').forEach((linkNode, index) => {
    if (activeLinkIndex === index) {
      // add active-page to proper link node
      linkNode.classList.add('active-page')
    }
  });
}

highlightActiveLink();

function menuBarMobile() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  };
};
