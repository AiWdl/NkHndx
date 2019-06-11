 var images=new Array();
 images[ 1 ]="https://googledrive.com/host/0B_NYyhgKKzI1S0RkcFU4b1NBa0U/Fondo-deslizante1.jpg";
 images[ 2 ]="https://googledrive.com/host/0B_NYyhgKKzI1S0RkcFU4b1NBa0U/Fondo-deslizante2.jpg";
 images[ 3 ]="https://googledrive.com/host/0B_NYyhgKKzI1S0RkcFU4b1NBa0U/Fondo-deslizante3.jpg";
 images[ 4 ]="https://googledrive.com/host/0B_NYyhgKKzI1S0RkcFU4b1NBa0U/Fondo-deslizante4.jpg";
 images[ 5 ]="https://googledrive.com/host/0B_NYyhgKKzI1S0RkcFU4b1NBa0U/Fondo-deslizante5.jpg";
   Array.prototype.shuffle = function() {
   var len = this.length;
   var i = len;
   while (i--) {
   var p = parseInt(Math.random()*len);
   var t = this[i];
   this[i] = this[p];
   this[p] = t;
   }
 };
   images.shuffle();
   $(images).each(function(){
  $('<img/>')[0].src = this;
   });
   var index = 0;
 $.backstretch(images[index], {speed: 1000});
   var slideshow = setInterval(function() {
   index = (index >= images.length - 1) ? 0 : index + 1;
     $.backstretch(images[index]);
   }, 10000);