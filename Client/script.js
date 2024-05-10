document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("changeColor");
  const head1 = document.getElementById("head1");
  const head2 = document.getElementById("head2");
  const head3 = document.getElementById("head3");

  //Changing the visibility of a few divs
  button.addEventListener("click", () => {
    if (head1.style.display === "block" || head1.style.display === "") {
      head1.style.display = "none";
      head2.style.display = "block";
      head3.style.display = "none";
    } else if (head2.style.display === "block") {
      head1.style.display = "none";
      head2.style.display = "none";
      head3.style.display = "block";
    } else {
      head1.style.display = "block";
      head2.style.display = "none";
      head3.style.display = "none";
    }
  });

  const button2 = document.getElementById("changeColor2");
  const divs = [
    document.getElementById("head4"),
    document.getElementById("head5"),
    document.getElementById("head6"),
    document.getElementById("head7"),
    document.getElementById("head8"),
    document.getElementById("head9"),
  ];
  let currentIndex = 0;

  //changing the visibility of alot of divs
  button2.addEventListener("click", () => {
    divs[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % divs.length;
    divs[currentIndex].style.display = "block";
  });
});
