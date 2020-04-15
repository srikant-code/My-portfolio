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


if(screen.width < 1000){
    document.getElementById("heroHireme").setAttribute("data-aos-delay", 0);
    document.getElementById("heroResume").setAttribute("data-aos-delay", 100);
    document.getElementById("discover").setAttribute("data-aos-delay", 200);
    document.getElementById("discover").setAttribute("data-aos-delay", 000);
    document.getElementById("discover").setAttribute("data-aos-delay", 100);
}
else{
    document.getElementById("heroHireme").setAttribute("data-aos-delay", 1800);
    document.getElementById("heroResume").setAttribute("data-aos-delay", 1800);
    document.getElementById("discover").setAttribute("data-aos-delay", 2000);
    document.getElementById("contactHireme").setAttribute("data-aos-delay", 1200);
    document.getElementById("contactContactme").setAttribute("data-aos-delay", 1400);
}


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


(function() {
    'use strict';
    var section = document.querySelectorAll("section");
    var sections = {};
    var i = 0;
    
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
    
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
            var activenav = document.getElementById('activeNav');
            activenav.setAttribute("id","");
            document.querySelector('a[href*=' + i + ']').setAttribute("id","activeNav");
        }
      }
    };
  
  })();