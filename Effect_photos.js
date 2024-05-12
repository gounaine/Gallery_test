function display_jpg1(){
    const photos = document.querySelectorAll('.img');
    photos.forEach(photo => {photo.addEventListener("click",()=>{
        removeClasseimage();
        photo.classList.add('img');
        let photoVerification = photo.getAttribute('src');
      
            document.querySelector(".gallery_B").innerHTML = '<img src="' + photoVerification + '" alt="Photo 3">';
    })});
   function removeClasseimage(){
    photos.forEach(photo=>{
        photo.classList.remove('img');
    })
   }
    

}function modeN(){
     document.querySelector('.body').classList.remove('body');
};




    







