const toTopBtn = document.querySelector('.to-top-btn');

const displayBtn = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      toTopBtn.style.display = "flex";
      toTopBtn.style.flexDirection = "column";
      toTopBtn.style.justifyContent = "center";
      toTopBtn.style.alignItems = "center";
      console.log('tester gzip.')
    } else {
      toTopBtn.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  toTopBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
  });
};

displayBtn();
scrollToTop();