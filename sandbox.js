function fooBar(){

	if (2 > 1){
	    let foo = "foo";
	}
	console.log(foo);
    //foo does not exist here because of let

    if(3 > 2){
    	var bar = "bar";
    }
    console.log(bar);
    //bar DOES exist here because of var

}


let myResult;

function addTwo(numberone, numbertwo){
    myResult = numberone + numbertwo;
}

addTwo(1, 5);

console.log(myResult);