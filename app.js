AOS.init({
  duration: 1200,
})

// $("#tile-1 .nav-tabs a").click(function() {
//     var position = $(this).parent().position();
//     var width = $(this).parent().width();
//       $("#tile-1 .slider").css({"left":+ position.left,"width":width});
//   });
//   var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
//   var actPosition = $("#tile-1 .nav-tabs .active").position();
//   $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var ilist = document.images;

for(var i = 0; i < ilist.length; i++) {
        // found the banner
        ilist[i].onclick = (e) => {
          modal.style.display = "block";
          modalImg.src = e.target.src;
          captionText.innerHTML = e.target.alt;
        }    
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
modal.onclick = function() { 
    modal.style.display = "none";
}

GitHubCalendar(".calendar", "srikant-code", { responsive: true });