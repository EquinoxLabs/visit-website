// this console is for, to see that the file is working or not
console.log("this is working");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



$(document).ready(function () {
  $("input:submit").click(function () {
    var a = $("#sname").val();
    var b = $("#semail").val();
    var c = $("#smobile").val();
    var c = $("#scompany").val();

    if (a != "" && b != "" && c != "") {
      setTimeout(function () {
        $("#sname").val();
        $("#semail").val();
        $("#smobile").val();
        $("#scompany").val();

        window.location.href = "thankyou.html";
      }, 1000);
    } else {
      alert("Please Fill all the details");
    }
  });
});
