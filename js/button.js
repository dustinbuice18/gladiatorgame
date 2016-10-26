function move() {
  var elem = document.getElementById("progressbar");
  var width = elem.style.width;
  if (width ==  "") {
    width = 100;
  } else {
    width = Number(width.replace("%", ""));
  }
  // elem.style.width= width + ".9%";

    if (width >= 1) {
        elem.style.width= (width + 2) + "%";

    } else {
      console.log("Your dead!!!")
    } if (width <= 99) {
      elem.style.width= (width + 2) + "%";

    } else {
      elem.style.width=(width + 0) + "%";
    }

  }


  function move3() {
    var elem = document.getElementById("progressbar");
    var width = elem.style.width;
    if (width ==  "") {
      width = 100;
    } else {
      width = Number(width.replace("%", ""));
    }
    // elem.style.width= width + ".9%";

      if (width >= 4) {
          elem.style.width= (width - 5) + "%";

      } else {
        console.log("Your dead!!!")
      }
    }


    function move4() {
      var elem = document.getElementById("progressbar2");
      var width = elem.style.width;
      if (width ==  "") {
        width = 100;
      } else {
        width = Number(width.replace("%", ""));
      }
      // elem.style.width= width + ".9%";

        if (width >= 1) {
            elem.style.width= (width + 2) + "%";

        } else {
          console.log("Your dead!!!")
        } if (width <= 99) {
          elem.style.width= (width + 2) + "%";

        } else {
          elem.style.width=(width + 0) + "%";
        }

      }


      function move2() {
        var elem = document.getElementById("progressbar2");
        var width = elem.style.width;
        if (width ==  "") {
          width = 100;
        } else {
          width = Number(width.replace("%", ""));
        }
        // elem.style.width= width + ".9%";

          if (width >= 4) {
              elem.style.width= (width - 5) + "%";

          } else {
            console.log("Your dead!!!")
          }
        }
