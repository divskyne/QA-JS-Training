function exposeSuperHero()
{
    var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function()
    {
        var superHeroes = request.response;

        var myH1 = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(myH1);

        for (const hero in superHeroes.members) {
            //console.log(superHeroes.members[hero]);
            //if(superHeroes.members[hero].name=="Molecule Man")
            //{
                var myH1 = document.createElement('h1');
                myH1.innerText = "Secret Identity"+": "+superHeroes.members[hero].secretIdentity;
                document.getElementsByTagName('body')[0].appendChild(myH1);
                
                //console.log("Secret Identity"+": "+superHeroes.members[hero].secretIdentity);
               //console.log("Power: ");
                for (power in superHeroes.members[hero].powers) {
                    var myH3 = document.createElement('h3');
                    myH3.innerText = superHeroes.members[hero].powers[power];
                    document.getElementsByTagName('body')[0].appendChild(myH3);
                //console.log(superHeroes.members[hero].powers[power]);   
                }
        //}
        }
    }
} 

function findDetail()
{
    var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    var n1 = document.getElementById('firstValue').value;
    request.onload = function()
    {
        var People = request.response;

        for (details in People) {
            //console.log(superHeroes.members[hero]);
            if(People[details].nm==n1)
            {
                var myH3 = document.createElement('h3');
                myH3.innerText = People[details].cty+"\n"+People[details].hse+"\n"+People[details].yrs+"\n";
                document.getElementsByTagName('body')[0].appendChild(myH3);
                console.log(People[details].cty+"\n"+People[details].hse+"\n"+People[details].yrs+"\n");
            }
        }
    }
}

function changeText()
{
    var span = document.getElementById("mouse");
    console.log(span.innerHTML);
    
    if(span.innerHTML=="The Shafeeq")
    {
        span.innerHTML = "I hate you";
    }
    else if(span.innerHTML=="I hate you")
    {
        span.innerHTML = "The Shafeeq";
    }
    //span.innerHTML = document.getElementById('textInField').value;
}

var number = 10;
function movingMouse()
{
    var span = document.getElementById("mouse");
    span.style.top = (window.event.clientY)+"px";
    span.style.left = (window.event.clientX)+"px";
    if(window.event.altKey)
    {
        number++;
    }
     else if (window.event.ctrlKey)
    {
        number--;
    } 
    span.style.fontSize = number+"px";
    
}
function changeColour(colour)
{
    var span = document.getElementById("mouse");
    console.log(colour);
    span.style.backgroundColor = colour;
}
function toggleVisibility()
{
    var span = document.getElementById("mouse");
    console.log(span.style.visibility);
    if (span.style.visibility=="hidden")
    {
        span.style.visibility = "visible";
    }
    else if (span.style.visibility=="visible")
    {
        span.style.visibility = "hidden";
    }
    else if(span.style.visibility=="")
    {
        span.style.visibility = "hidden";
    }
}
var person =
{
    name: "First",
    age: 25,
    job: "Engineer",
    assistants: [{name:"FSub"},{name:"FSub2"},{name:"FSub2"}],
    toString: function() { return "Name: "+this.name+" "+"Age: "+this.age}
};
//console.log(JSON.stringify(person));