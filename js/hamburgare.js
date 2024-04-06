const burger = document.getElementById('burger')
const link_list = document.getElementById('link_list')

function toggleMenu() {
  link_list.classList.toggle('links_visible')
  burger.classList.toggle('burger_in_x_form')
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

toggleMenu()

burger.addEventListener('click', toggleMenu)