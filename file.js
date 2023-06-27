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

// featured section

const data = [
  {
    name: 'Milton Njonya',
    profession: 'CEO and Founder of  WEBDEV MENTORS.',
    Image: 'Images/speaker01.png',
    description: 'Created  WEBDEV MENTORS in 2010 to bring all web developer  across the world together widthout discrimination',
  },
  {
    name: 'Micheal Jean',
    profession: 'Senoir software Engineer at Microsoft.',
    Image: 'Images/speaker02.png',
    description: 'Created Global school in 2012 to bring all the student together across the world widthout discrimination',
  },
  {
    name: 'Mousa YAYA',
    profession: 'Senoir Developer at Microsoft.',
    Image: 'Images/speaker03.png',
    description: 'Created Global school in 2012 to bring all the student together across the world widthout discrimination',
  },
  {
    name: 'Mousa YAYA',
    profession: 'Professor of Information Technology at Harvard University..',
    Image: 'Images/speaker04.png',
    description: 'Created Global school in 2012 to bring all the student together across the world widthout discrimination',
  },
  {
    name: 'Mousa YAYA',
    profession: 'CEO and Founder of  WEBDEV MENTORS.',
    Image: 'Images/speaker05.png',
    description: 'Created Global school in 2012 to bring all the student together across the world widthout discrimination',
  },
  {
    name: 'Mousa YAYA',
    profession: 'CEO and Founder of  WEBDEV MENTORS.',
    Image: 'Images/speaker06.png',
    description: 'Created Global school in 2012 to bring all the student together across the world widthout discrimination',
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
    `;
});