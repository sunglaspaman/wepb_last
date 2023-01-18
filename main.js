let img = document.getElementById("image");


let names = new Array(6);
let rand;
let url;
let data;

//alert(names);

for (let i = 0; i < 6; i++) {


    img = document.getElementById(`image${i+1}`);
    rand = Math.floor(Math.random() * (906 - 1) + 1);
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`;

    url = `https://pokeapi.co/api/v2/pokemon/${rand}`;
    names[i] = rand;
    

    //     fetch(url)
    //         .then((response) => {
    //             //alert(response.value);
    //             return response.text();
    //         }).then(text => names[rand])
    //         .catch(err => console.error(`Fetch problem: ${err.message}`));
    //     ;
}

//alert(names);

//test
alert(names);



let ballAt;
function check() {
    //alert("8");
    for (let i = 0; i < 6; i++) {
        if (form.mail.value == String(names[i])) {
            ballAt = document.getElementById(`ball${i+1}`);
            ballAt.src = pb;
            alert("good");
        }
    }
}



let pb = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png`;





