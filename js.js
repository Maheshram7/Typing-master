let w = `space,earth,solar system,jupiter,mars,quatermoon,neptune, gibbous moon,mercury, pluto, half moon,saturn, venus,uranus, cresentmoon,
planet,	axial, tilt,
waning	,waxing,	asteroid belt,
asteroid,	black hole,	big bang,
astronaut	,comet,	binary star,
astronomer,	astronomy,	elliptical orbit,
density,	constellation,	deep space,
cosmonaut	,cosmos	,dwarf ,planet,
crater	,day	,dwarf star,
dust	,equinox	,inner planets,
eclipse,	ecliptic	,inferior planets,
galaxy,	lunar	,falling star,
meteorite,	meteor	,meteor shower,
meteoroid,	lens,	gravity,
full moon,	inertia,Milkyway,
mass,	magnitude	,outer ,planets,
nebula	,orbit	,shooting star,
rocket	,solar	,space ,exploration,
solstice	,star	,total eclipse,
umbra,	space	vernal ,equinox,
sky	satellite	,solar system,
new moon	,penumbra	,solar wind,
light-year	,rings	,partial eclipse,
observatory	phase	,orbital inclination,
universe,	zodiac,	space station,
sun	,starlight,	telescope`




function difficulty() {


    e = document.getElementById('easy');
    n = document.getElementById('normal');
    h = document.getElementById('hard');
    if (e.checked != false) {
        x = 10;
    } else if (n.checked != false) {
        x = 7;
    } else {
        x = 3;
    }
    document.getElementById('diff').style.display = 'none';
    document.getElementById('sub').setAttribute('disabled', true);
    document.getElementById('container').style.display = 'block';
    game(x);

}


function main() {

    location.reload();

}



words = w.split(',')
let word = ''
score = 0

function random() {
    word = words[Math.floor(Math.random() * words.length)];
    word = word.trim()
    document.getElementById('words').innerHTML = word
    words = words.filter(e => e !== word)


}


function reset() {

    document.getElementById('container').style.display = 'none'
    document.getElementById('over').style.display = 'block'
}



function game(x) {
    var time = setInterval(function() { startTime() }, 1000);
    let y = x
    console.log(y)
    var counter = y



    function startTime() {

        if (counter == 0) {
            clearInterval(time)
            reset()


        } else {
            counter--
        }

        document.getElementById('sec').innerHTML = counter;
    }

    document.getElementById('inp').addEventListener('keypress', function(e) {

        if (e.key === "Enter") {

            let x = document.getElementById('inp').value

            if (x.toLowerCase() == word.toLowerCase()) {
                counter += y
                startTime()
                score += 1
                document.getElementById('scor').innerHTML = score
                document.getElementById('scors').innerHTML = score
            } else {
                reset()

            }
            console.log(word)
            console.log(document.getElementById('inp').value)
            document.getElementById('inp').value = ''
            random()
        }


    })

}

random()
