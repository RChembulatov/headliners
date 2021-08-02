$(document).ready(function () {
  // кнопка наверх
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      $(".pageup").css("display", "block");
    } else {
      $(".pageup").css("display", "none");
    }
  });

  $(".pageup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  // кнопка наверх

  //scroll to block
  function scrollForElem(selector) {
    selector.on("click", "a", function (event) {
      // исключаем стандартную реакцию браузера
      event.preventDefault();

      // получем идентификатор блока из атрибута href
      var id = $(this).attr("href"),
        // находим высоту, на которой расположен блок
        top = $(id).offset().top - 10;

      // анимируем переход к блоку, время: 800 мс
      $("body,html").animate({ scrollTop: top }, 800);
    });
  }
  scrollForElem($(".nav__list"));
  scrollForElem($(".price__buttons"));
  //scroll to block

  //Мобильное меню
  $(".header__burger").click(function () {
    $(".header__burger, .header__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".nav__item, main").click(function () {
    $(".header__burger, .header__nav").removeClass("active");
    $("body").removeClass("lock");
  });
  //Мобильное меню

  //modal
  $("#callback_button").click(function () {
    $(".modal").toggleClass("active");
  });

  function closeModal(btn, elem) {
    btn.click(function () {
      elem.removeClass("active");
    });
  }
  closeModal($(".modal__close"), $(".modal"));
  closeModal($(".thanks__close"), $(".thanks"));
  //modal

  // Отправка формы
  $("form.send").submit(function () {
    var mythis = $(this);
    $.ajax({
      type: "POST",
      url: "/mail/index.php",
      data: $(this).serialize(),
      beforeSend: function (xhr, textStatus) {
        mythis.find(".submit").attr("disabled", true);
      },
      success: function (data) {
        mythis.trigger("reset");
        mythis.find(".submit").attr("disabled", false);

        $(".thanks").addClass("active");

        $(".modal.active").removeClass("active");
      },
      error: function (jqXHR, text, error) {
        mythis.html(error);
      },
    });
    return false;
  });
});
