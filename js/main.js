// мобільне меню
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuClose = document.querySelector('.menu__close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu--open');
});
menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu--open');
});

//закриття бургера після кліку на посилання
$('.menu__btn').on('click', function () {
	$('.menu__list').addClass('menu--open');
  });
  
  $( '.menu__link' ).on("click", function(){
	$('.menu__list').removeClass('menu--open');
  });


  function onEntry(entry) { 
    entry.forEach(change => { 
      if (change.isIntersecting) { 
       change.target.classList.add('element-show'); 
       
      } 
    }); 
  } 
      let options = { 
    threshold: [0.5] }; 
  let observer = new IntersectionObserver(onEntry, options); 
  let elements = document.querySelectorAll('.services__item-img'); 
   
  for (let elm of elements) { 
    observer.observe(elm); 
  }