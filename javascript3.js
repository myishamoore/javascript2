// 1. An array called `photoList` that contains the names of the photos as strings
// 2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
// 3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
//  4. logs the current photo name.
//  5. Otherwise, log "End of slideshow";
// 4. A `prevPhoto()` function that does the same thing, but backwards.
// 5. A function `getCurrentPhoto()` that returns the current photo from the list.




let slideShow= {
photoList: ['pic1','pic2','pic3'],
currentPhotoIndex:0, 
 nextphoto:function(){
	if(this.currentPhotoIndex<=this.photoList.length){
		this.currentPhotoIndex++
		console.log(this.photoList[this.currentPhotoIndex])
	}else{
		console.log('End of slideshow')
	}
      

},

prevPhoto:function(){
	if(this.currentPhotoIndex<=this.photoList.length){
		this.currentPhotoIndex--
		console.log(this.photoList[this.currentPhotoIndex])
    }else{
		console.log('End of slideshow')
	}
},

getCurrentPhoto:function(){
	return this.photoList[this.currentPhotoIndex]
}

}

console.log(slideShow.photoList);
console.log(slideShow.currentPhotoIndex);
console.log(slideShow.prevPhoto);
console.log(slideShow.getCurrentPhoto);
console.log(slideShow.nextphoto());
