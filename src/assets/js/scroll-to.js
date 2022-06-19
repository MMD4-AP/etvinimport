const scrollTo = document.querySelector(".scroll-to");
const headerHeight = document.querySelector(".header-wrapper").scrollHeight;
const heightToScroll = scrollTo.previousElementSibling.scrollHeight + headerHeight;

scrollTo.addEventListener("click", () => {
    scrollBy(0, heightToScroll -window.scrollY);
});