(function () {
  $(document).ready(function () {
    if ($("form").has('input[name="phone"]').length > 0) {
      var telephone = $("form").find("input[name='phone']");

      $(telephone).mask("+7 (999) 999-99-99");
      $(telephone).keydown(function (event) {
        if (event.keyCode === 37 || event.keyCode === 39) {
          return false;
        }

        var value =
          $(this)
            .val()
            .replace(/[^\d;]/g, "") + event.key;

        if (
          value == "70" ||
          value == "71" ||
          value == "72" ||
          value == "75" ||
          value == "76" ||
          value == "77"
        ) {
          return false;
        }

        if (value === "789") {
          $(this).val("9").trigger("paste");

          return false;
        }
        if (value === "73") {
          $(this).val("").trigger("paste");

          return false;
        }
        if (value === "78") {
          $(this).val("").trigger("paste");

          return false;
        }
      });

      // Перемещаем курсор в начало экрана
      $(telephone).mouseup(function (event) {
        // Оставляем только цифры и удаляем первый символ
        var value = $(this)
          .val()
          .replace(/[^\d;]/g, "")
          .slice(1);

        $(this).val(value).trigger("input");
      });
    }

    //Запрет ввода, кроме букв
    $("input[name='name']").keypress(function (b) {
      var C = /[ a-zA-Zа-яА-Я]/;
      var a = b.which;
      var c = String.fromCharCode(a);
      return !!(a == 0 || a == 8 || a == 9 || a == 3 || c.match(C));
    });

    //Удаляем символы кроме букв при вставке
    $("input[name='name']").bind("keyup blur", function () {
      $(this).val(
        $(this)
          .val()
          .replace(/[^ a-zA-Zа-яА-Я]/g, "")
      );
    });
  });
})()