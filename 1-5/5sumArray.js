function randomize(jumlah){

	let array=[];
	let ganjil=0;
	let sum=0;
	let i=1;

	while(array.length<jumlah){

		//console.log(ganjil);
		if (i%2==1) {
			ganjil=i;
			array.push(ganjil);
			
		}

		i++;
	}


	for(a in array){

		sum=sum+array[a];
		//onsole.log('a: '+sum)

	}

	return 'array: '+array + '\nsum: '+sum;
	// console.log('array: '+array);
	// console.log('sum: '+sum)

}
console.log(randomize(5));
