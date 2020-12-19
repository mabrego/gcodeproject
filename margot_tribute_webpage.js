var body = document.getElementsByTagName('body')[0];
var margotButton = document.getElementById('margotButton');
var barkoButton = document.getElementById('barkoButton');
var bottomSection = document.getElementById('threeColumns');

function enableMargotMode(){
    document.getElementById("hello").src = "sweetMargot.png";
    bottomSection.style.visibility = "visible";
    body.style.backgroundColor = '#85D6FF';
    body.style.color = 'black';
    document.getElementById("bioText").innerHTML = "Hi, my name is Margot. I'm a black and tan miniature dachshund from Maine. After learning how to open my eyes and crawl with my sisters and brothers, I left home when I was two months old to join my mom in Massachusetts. Most of my days are spent sniffing for hidden treasures and napping.";
    document.getElementById("likesItem").innerHTML = "Cuddling with my mom, playing with my toys, rolling around in the snow";
    document.getElementById("dislikesItem").innerHTML = "Bathtime";
    document.getElementById("septItem").innerHTML = "Learned to walk on a leash";
    document.getElementById("octItem").innerHTML = "First game of fetch in the park";
    document.getElementById("novItem").innerHTML = "Completed all puppy vaccines";
    document.getElementById("decItem").innerHTML = "First time unwrapping Christmas presents";
}

function enableBarkoMode(){
    document.getElementById("hello").src = "barko.png";
    bottomSection.style.visibility = "visible";
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    document.getElementById("bioText").innerHTML = "Hi, my name is Margot. I'm a black and tan miniature dachshund from Ruff Haus Dachshunds in Maine. As the name implies, I love rough housing. Nothing like getting a good bite or two in. Most of my days are spent barking at almost anything and crying when my mom leaves my side.";
    document.getElementById("likesItem").innerHTML = "Pooping";
    document.getElementById("dislikesItem").innerHTML = "When my mom leaves the room, when my mom doesn't give all of her attention to me, when my mom makes me sleep in my crate";
    document.getElementById("septItem").innerHTML = "Poop got bigger";
    document.getElementById("octItem").innerHTML = "Poop got bigger";
    document.getElementById("novItem").innerHTML = "Poop got bigger";
    document.getElementById("decItem").innerHTML = "Poop got bigger";
}

margotButton.addEventListener('click', enableMargotMode);
barkoButton.addEventListener('click', enableBarkoMode);
