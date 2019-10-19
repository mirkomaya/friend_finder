$(document).ready(function () {

    $("#submitBtn").on("click", function (event) {

        event.preventDefault();

        var valid = true;

        if ($("#name").val().trim() === "" || $("#photo").val().trim() === "") {
            valid = false;
            alert("Please enter a valid name and photo");
        } else if ($("#question1").val() === "" || $("#question2").val() === "" || $("#question3").val() === "" || $("#question4").val() === "" || $("#question5").val() === "" || $("#question6").val() === "" || $("#question7").val() === "" || $("#question8").val() === "" || $("#question9").val() === "" || $("#question10").val() === "") {
            valid = false;
            alert("Please answer all questions");
        }
        if (valid) {
            var newUser = {
                name: $("#name").val().trim(),
                photo: $("#photo").val().trim(),
                scores: [
                    $("#question1").val(),
                    $("#question2").val(),
                    $("#question3").val(),
                    $("#question4").val(),
                    $("#question5").val(),
                    $("#question6").val(),
                    $("#question7").val(),
                    $("#question8").val(),
                    $("#question9").val(),
                    $("#question10").val()
                ]
            };

            console.log(newUser);

            var currentURL = window.location.origin;

            $.post(currentURL + "/api/friends", newUser, function (data) {
                $("#newFriend").text(data.name);
                $("#newFriendPic").attr("src", data.photo);
                $("#friendModal").modal("toggle");
            });

        } else (alert("Survey is incomplete!"));
    });
});
