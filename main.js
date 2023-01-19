let img = document.getElementById("image");


let names = new Array(6);
let rand;
let url;
let data;

//alert(names);

for (let i = 0; i < 6; i++) {


    img = document.getElementById(`image${i + 1}`);
    rand = Math.floor(Math.random() * (906 - 1) + 1);
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`;

    url = `https://pokeapi.co/api/v2/pokemon-form/${rand}/`;
    //names[i] = rand;


    // fetch(url)
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error: ${response.status}`);
    //         }
    //         alert(response);
    //         return response.json();
    //     }).then((json) => data=json)
    //     .catch(err => console.error(`Fetch problem: ${err.message}`));
    // ;

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((a) =>
            //console.log(a),
            //alert(a.name)
            names[i] = a.name
        )
        .then((a) =>
            console.log(a),
            //alert(a.name)
            // names[i] = a.name
        );

    console.log (names[i]);
}

//alert(names);

//test




let ballAt;
function check() {
    //alert("8");
    for (let i = 0; i < 6; i++) {
        if (form.mail.value == String(names[i])) {
            ballAt = document.getElementById(`ball${i + 1}`);
            ballAt.src = pb;
            alert("good");
        }
    }
}



let pb = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png`;





