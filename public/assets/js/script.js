$(function() {
    $(".newBurger").on("submit", function(event) {
      event.preventDefault();

      if (!$("#burgerName").val().trim()) {
        return
      }

      let newBurger = {
        burger: $("#burgerName").val().trim()
      }

      $.post("/api/burger", newBurger, function() {
        window.location.href = "/";
      });
    })

    $(document).on("click", "#devour", function() {
        let id = $(this).attr('data-id');
        console.log(id)

        let justEaten = {
          devoured: true
        }

        $.ajax({
          method: "PUT",
          url: `/api/burger/${id}`,
          data: justEaten
        })
          .then(function() {
            window.location.href = "/";
          });

    })
});


