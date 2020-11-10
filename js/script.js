document.addEventListener('invalid', (function () {
  return function (e) {
      e.preventDefault();
      document.getElementById("Name").focus();
  };
})(), true);