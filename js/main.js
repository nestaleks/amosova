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



  console.log(Instafeed)
  var feed = new Instafeed({
    accessToken: InstagramToken,
    transform: function(item) {
      var d = new Date(item.timestamp);
      item.date = [d.getDate(), d.getMonth(), d.getYear()].join('/');
      return item;
    }
  });
  
  feed.run();