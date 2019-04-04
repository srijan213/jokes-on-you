$(document).ready(function() {
  let defaultFirstName = "Night";
  let defaultLastName = "King";
  let troll = {
    firstName: defaultFirstName,
    lastName: defaultLastName
  };
  let jokeRequest;

  let nameChecker = (firstName, lastName) => {
    if ($.trim(firstName)) troll.firstName = firstName;
    if ($.trim(lastName)) troll.lastName = lastName;
  };

  let jokeGenerator = () => {
    $.ajax({
      url: jokeRequest,
      method: "get"
    }).done(function(response) {
      $("#joke--line").text(response.value.joke);
    });
  };
  $("#joke--button").on("click", function() {
    let firstName = $("#first--name").val();
    let lastname = $("#last--name").val();
    nameChecker(firstName, lastname);
    jokeRequest = `
    http://api.icndb.com/jokes/random?firstName=${troll.firstName}&lastName=${
      troll.lastName
    }`;
    jokeGenerator();
  });
});
