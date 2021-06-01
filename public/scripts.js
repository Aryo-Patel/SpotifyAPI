
  function changeImage()
  {
  element=document.getElementById('imageToSwap')
  if (element.src.match("out"))
    {
    element.src="images/frah-reward.png";
    }
  else
    {
    element.src="images/frah-reward-onclick.png";
    }
  }

  function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }