$(document).ready(function () {
  var max_fields = 5;
  var wrapper = $(".input_fields_wrap");

  var x = 1;
  $(wrapper).on("click", ".add_field_button", function (e) {
    e.preventDefault();
    if (x < max_fields) {
      x++;
      $(this)
        .parent("div")
        .append(
          '<div><input type="text" name="mytext[]" placeholder="Enter class"/> <input type="text" name="mytext[]" placeholder="Enter Board"/> <input type="text" name="mytext[]" placeholder="Enter Marks"/> <input type="text" name="mytext[]" placeholder="Enter Division"/> <button class="add_field_button">+</button> <button class="remove_field">-</button><br><br></div>'
        );
    }
  });

  $(wrapper).on("click", ".remove_field", function (e) {
    e.preventDefault();
    $(this).parent("div").remove();
    x--;
  });
});
