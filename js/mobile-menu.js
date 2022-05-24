jQuery(document).ready(function() {
  $(".item-burger").on("click", () => {
    $(".mobile-overlay").addClass("mobile-overlay__visible");
    $(".mobile-menu").addClass("mobile-menu__loaded");
  });

  $(".mobile-menu__close").on("click", () => {
    $(".mobile-overlay").removeClass("mobile-overlay__visible");
    $(".mobile-menu").removeClass("mobile-menu__loaded");
  });

  $(".mobile-menu__item").on("click", () => {
    $(".mobile-overlay").removeClass("mobile-overlay__visible");
    $(".mobile-menu").removeClass("mobile-menu__loaded");
  });

  $(".mobile-menu__item_catalog").on("click", () => {
    $(".mobile-catalog").addClass("mobile-catalog__loaded");
  });

  $(".mobile-catalog__close").on("click", () => {
    $(".mobile-overlay").removeClass("mobile-overlay__visible");
    $(".mobile-menu").removeClass("mobile-menu__loaded");
    $(".mobile-catalog").removeClass("mobile-catalog__loaded");
    $(".mobile-brands").removeClass("mobile-brands__loaded");
  });

  $(".mobile-brands__back").on("click", () => {
    $(".mobile-brands").removeClass("mobile-brands__loaded");
  });

  $(".mobile-brands__list_item").on("click", () => {
    $(".mobile-overlay").removeClass("mobile-overlay__visible");
    $(".mobile-menu").removeClass("mobile-menu__loaded");
    $(".mobile-catalog").removeClass("mobile-catalog__loaded");
    $(".mobile-brands").removeClass("mobile-brands__loaded");
  });

  let linksArray = $(".mobile-catalog__item");
  linksArray.each((_, item) => {
    {var $elem = $(item);}
    $elem.on('click', (e) => {
        let $elemActive = $(e.currentTarget);
        for (let i = 0; i < linksArray.length; i++) {
          if ($elemActive[0] === linksArray[i]) {
            $(".mobile-brands_text").text($elemActive.text());
            linksArray[i].classList.add("mobile-catalog__item_active")
          } else {
            linksArray[i].classList.remove("mobile-catalog__item_active")
          }
        }
      $(".mobile-brands").addClass("mobile-brands__loaded");
      }
    );
  })
});