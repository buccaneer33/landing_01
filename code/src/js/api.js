/*window.onload = function () {
  function showSlide(imgSrc){
  //  alert(imgSrc);

  var getSlide = document.getElementById('slide__latest');
  getSlide.style.backgroundImage = 'url('+imgSrc+')';
  document.getElementById('slide7').checked = true;
}


  function Menu(elem) {

      this.getSrc = function(imgSrc) {showSlide(imgSrc);};
      var self = this;
      elem.onclick = function(e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
  	    var imgSrc = target.src;
        if (action) {
          self[action](imgSrc);
        }
      };
    }

new Menu(galleryFresh);

};*/
