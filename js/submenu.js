jQuery(document).ready(function() {
  let linksArray = $(".content__menu_item-block");
  linksArray.each((_, item) => {
    {var $elem = $(item);}
    $elem.on('click', (e) => {
        let $elemActive = $(e.currentTarget);
        if ($elemActive.hasClass("content__menu_item-active")) {
          $elemActive.removeClass("content__menu_item-active");
          $elemActive.next().removeClass("content__submenu_active");
        } else {
          $elemActive.addClass("content__menu_item-active");
          $elemActive.next().addClass("content__submenu_active");
        }
      }
    );
  })
});