  //For our industry image change
  const image=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"]
  const ourHeadername=["Healthcare","Retail","Finance","Manufacturing","Insurance","Education"]
  let currentImageIndex = 0
  let currentHeaderIndex =0

  function updateImage(){
    const imageElement=document.getElementById("imageLoad")
    const headerElement=document.getElementById("our-header")
    const imagepath=`./assets/img/our-industries/${image[currentImageIndex]}`;
    imageElement.setAttribute("src",imagepath)
    const headername=ourHeadername[currentHeaderIndex]
    headerElement.innerText=headername 
  }

  document.getElementById("backwardBtn").addEventListener("click",function(){
    if(currentImageIndex<image.length-1){
      currentImageIndex++;
      currentHeaderIndex++;
    }
    else{
        currentImageIndex = 0;
        currentHeaderIndex = 0;
    }
    updateImage()
  })

  document.getElementById("forwardBtn").addEventListener("click",function(){
    if(currentImageIndex>0){
      currentImageIndex--;
      currentHeaderIndex--;
    }
    else{
        currentImageIndex = image.length - 1;
        currentHeaderIndex = ourHeadername.length - 1;
    }
    updateImage()
  })
  updateImage()


