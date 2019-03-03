var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/t.jpg') {
      myImage.setAttribute ('src','Images/N.jpg');
    } else {
      myImage.setAttribute ('src','Images/t.jpg');
    }
}

