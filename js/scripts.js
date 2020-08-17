$(document).ready(function () {
  const flavors = ["chocolate", "vanillla", "strawberry"];
  flavors.forEach(function(flavor) {
    $("ul").append("<li> I like " + flavor + " ice cream!</li>");
  });
});