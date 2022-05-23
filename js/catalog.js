jQuery(document).ready(function() {
  let linksArray = $(".catalog__list_item");
  linksArray.each((_, item) => {
    {var $elem = $(item);}
    $elem.hover((e) => {
      let $elemActive = $(e.currentTarget);
        for (let i = 0; i < linksArray.length; i++) {
          if ($elemActive[0] === linksArray[i]) {
            linksArray[i].classList.add("active")
          } else {
            linksArray[i].classList.remove("active")
          }
        }
      }
    );
  })

  $(".header__down_catalog").click(() => {
    if ($(".catalog").hasClass("visible")) {
      $(".catalog").removeClass("visible");
      $(".header__down_catalog_img").attr("src", "assets/svg/catalog-search.svg");
    } else {
      $(".catalog").addClass("visible");
      $(".header__down_catalog_img").attr("src", "assets/svg/close-catalog.svg");
    }
  })
});