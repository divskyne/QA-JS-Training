     var number = 2;
    function printMsg(print,div) {
        var node = document.getElementById(div);
        node.innerHTML = print;
    }
    //alert(number);
    //console.log(number);
    //document.write(number);
    function square(number) {
      return number*number;
    }
    function sum(n1,n2,n3)
    {
      return n1+n2+n3;
    } 
    function calculateIt(val)
    {
		//console.log(document.getElementById('firstValue').value);
		var n1 = document.getElementById('firstValue').value;
		var n2 = document.getElementById('secondValue').value;
		var n3 = document.getElementById('textArea');
		if(n1 == ""||n2=="")
		{
			n3.innerText = "Please enter values into both fields!";
		}
		else if (val === 'a')
		{
			n3.innerHTML = parseInt(n1)+parseInt(n2);
		}
		else if (val === 'b')
		{
			n3.innerHTML = parseInt(n1)-parseInt(n2);
		}
		else if (val === 'c')
		{
			n3.innerHTML = parseInt(n1)*parseInt(n2);
		}
		else if (val === 'd')
		{
			n3.innerHTML = parseInt(n1)/parseInt(n2);
		}
    }
     document.write(square(number));
    document.write(sum(6,5,7)); 

     function displaySum()
    {
    	return sum(5,6,7);
    }
    
    var Person = {name:"Bob", age:12, occupation:"JobLess", string: function() {
      return this.name +" "+ this.age +" "+ this.occupation;
    }
  };
  
  function changeAge()
    {
        console.log(Person.age);
    	Person.age++;
    	return "age of person: "+Person.age;
    }
    document.write(Person.string());
    var mattString = "\"He said \"My name is Matt\" \" ";
    function printString()
    {
        var node = document.getElementById("third");
        node.innerHTML = mattString;
    }
    function stringMatt()
    {
        return mattString;
    }
    function upperString(print,div) {
        var node = document.getElementById(div);
        node.innerHTML = print.toUpperCase();
    }

    function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person1("John", "Doe", 50, "blue");
var myMother = new Person1("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);

function fizzBuzz()
{
	for (var i = 1; i <= 100; i++)
    {
        if(i%3==0&&i%5==0)
        {
            console.log("FizzBuzz");
        }
        else if(i%3==0)
        {
            console.log("Fizz");
        }
        else if(i%5==0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}
//fizzBuzz();

function gameDivide()
{
	var num = Math.floor((Math.random() * 1000) + 1);
	while(num!=1)
	{
		console.log(num);
		if (num%3==0)
		{
			num=num/3;
		}
		else
		{
			num--;
		}
	}
}
gameDivide();