//Задаємо данні масиву
const arr = [1, 44, 66, 333, 55123, 234, 1222, 132, 2, 8, 55]
//Створюємо функцію , яка вбирає в себе максимальне значення з массиву
function findMax(arr){
	//За замовчуванням, саме велике чісло - це перший елемент массиву.
	let max = arr[0];
    //Проходимось по кожному чіслу з масиву за допомогою циклу "for of" 
	for(let num of arr){
		//num - це наступне чісло, якщо воно більше за попереднє, присвоюємо нове значення для "max";
		if(max < num){
          max = num;
		}
	}
	//Повертаємо найбільше значення.
	return max;
}

console.log(findMax(arr));