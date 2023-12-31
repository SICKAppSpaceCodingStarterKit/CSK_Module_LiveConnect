/**
 * Customize icons for navigation tree
 *
 * List of available icons ("Font Awesome" collection)
 * <https://fontawesome.com/v4.7.0/icons/>
 */
document.addEventListener('sopasjs-ready', () => {
  // "Pairing" page
  const page_1 = document.querySelector('div.sopasjs-ui-navbar-wrapper > div > ul > li:nth-child(3) > a > i');
  page_1.classList.remove('fa-file');
  page_1.classList.add('fa-cloud');
  
  // "Parameters" page
  const page_2 = document.querySelector('div.sopasjs-ui-navbar-wrapper > div > ul > li:nth-child(4) > a > i');
  page_2.classList.remove('fa-file');
  page_2.classList.add('fa-wrench');
})