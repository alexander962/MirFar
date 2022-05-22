jQuery(document).ready(function() {
  let linksArray = Array.from($(".catalog__list_item"));
  linksArray.map((item, index) => {
    $(item).hover(function () {
        let elemActive = $(this);
        for (let i = 0; i < linksArray.length; i++) {
          if (elemActive[0] === linksArray[i]) {
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