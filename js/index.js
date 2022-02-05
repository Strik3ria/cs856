const setActive = (activePage) => {
  let navEl = document.getElementById(activePage);
  navEl.classList.add("active");
};

const getNameParameter = (url) => {
  return url.split("?")[1].split("=")[1];
};

const properCaseWithSpace = (str) => {
  return str.match(/[A-Z][a-z]+/g).join(' ');
};
