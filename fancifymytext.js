function bigger() {
    alert("Hello, world!");
    document.getElementById("textarea").style.fontSize = "24pt";
  }

  function fancyShmancy() {
    alert("Font weight changed to bold, font color changed to blue, font decoration changed to underline.");
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "Blue";
    document.getElementById("textarea").style.textDecoration = "underline";
  }

  function boringBetty() {
    alert("Font weight changed to normal.");
    document.getElementById("textarea").style.fontWeight = "normal";
  }

  function uppercaseText() {
    document.getElementById("textarea").value = document.getElementById("textarea").value.toUpperCase();
    var str = document.getElementById("textarea").value;
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("textarea").value = str;
  }