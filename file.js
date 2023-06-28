/* eslint-disable no-plusplus */
const Menu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const nav = document.querySelector('.nav-items');
Menu.addEventListener('click', () => {
  nav.style.visibility = 'visible';
  closeMenu.style.display = 'block';
  Menu.style.display = 'none';
});
closeMenu.addEventListener('click', () => {
  nav.style.visibility = 'hidden';
  closeMenu.style.display = 'none';
  Menu.style.display = 'block';
});

console.log('Hi');
// active classes
const tabs = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const Path = window.location.href;
  console.log(Path);
  tabs.forEach((link) => {
    if (link.href === Path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveLink();

tabs.forEach((link) => {
  link.addEventListener('click', () => {
    tabs.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});

const data = [
  {
    name: 'Milton Njonya',
    profession: 'CEO and Founder of  WEBDEV MENTORS',
    Image: 'Images/speaker01.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  },
  {
    name: 'Micheal Jean',
    profession: 'Senoir software Engineer at Microsoft',
    Image: 'Images/speaker02.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  },
  {
    name: 'Martin Bah',
    profession: 'Senoir Developer at Microsoft',
    Image: 'Images/speaker03.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  },
  {
    name: 'David Ngong',
    profession: 'Professor of Information Technology at Harvard University',
    Image: 'Images/speaker04.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  },
  {
    name: 'Milton Njonya',
    profession: 'CEO and Founder of  WEBDEV MENTORS',
    Image: 'Images/speaker05.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  },
  {
    name: 'Milton Njonya',
    profession: 'CEO and Founder of  WEBDEV MENTORS',
    Image: 'Images/speaker06.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  },
];

const btnMore = document.getElementById('btn-more');
const btnHide = document.getElementById('btn-hide');
document.querySelector('.speaker').innerHTML = data.map((item, index) => {
  let className = '';
  if (index !== 0 && index !== 1) {
    className = 'hide-card';
  }

  btnMore.addEventListener('click', () => {
    const hideCard = document.querySelectorAll('.hide-card');
    for (let i = 0; i < hideCard.length; i++) {
      hideCard[i].style.display = 'flex';
    }
    btnHide.style.display = 'block';
    btnMore.style.display = 'none';
  });

  btnHide.addEventListener('click', () => {
    const hideCard = document.querySelectorAll('.hide-card');
    for (let i = 0; i < hideCard.length; i++) {
      hideCard[i].style.display = 'none';
    }
    btnHide.style.display = 'none';
    btnMore.style.display = 'block';
  });
  return `
    <div class = "container">
       <div class = "speaker-card ${className}">
         <div class="image-container">
                <img src="${item.Image}" alt="speaker" />
            </div>
             <div class="speaker-card-text">
                <h3 >${item.name}</h3>
                <h4>${item.profession}.</h4>
                <p>${item.description}</p>
            </div>
            </div>
            </div>
    `;
});