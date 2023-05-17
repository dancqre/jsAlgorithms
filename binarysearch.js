const arr = [1,2,3,4,5,6,7,8];

///ЛИНЕЙНЫЙ ПОИСК (Обычный метод поиска элемента в массиве)

function searchElement(arr, el){

	//Добавлять к значению +1 пока условие не будет верно

	for(let i = 0; i < arr.length; i ++){
		if (arr[i] === el){
			return i;
		}
	}
	return -1
}

//////////////////////////////////////////////////////////


///////////////////////БИНАРНЫЙ  ПОИСК////////////////////
function searchElement2(arr,el){
	let left = -1;
	let right = arr.length;
	
	while (right - left > 1){
		//Находим середину массива
	 const mid = Math.floor((left + right) / 2)
     
	 //Если попался сразу нужный элемент
	 if (arr[mid] === el) {
		return mid;
	 }
	 if (arr[mid] > el) {
		 right = mid;
	 } else {
		left = mid;
	 }
	}
	return -1;
}