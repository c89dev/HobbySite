mode1 = true;
mode2 = false;
mode3 = false;

function initTheme() {
    document.getElementById("main").style.background = "linear-gradient(rgba(250, 250, 250, 1), rgba(12, 128, 182, 1))";
}


function applyTheme() {
    if (mode1 != false) {
        document.getElementById("main").style.background = "linear-gradient(rgba(250, 250, 250, 1), rgba(12, 128, 182, 1))";
    }

    else if (mode2 != false) {
        document.getElementById("main").style.background = "linear-gradient(rgba(52, 141, 25, 1), rgba(0, 0, 0, 1))";
    }

    else if (mode3 != false) {
        document.getElementById("main").style.background = "linear-gradient(rgba(216, 152, 182, 1), rgba(110, 49, 77, 1))";
    }

}

// function demoOne(){
//     document.getElementById("demo1").classList.
// }

function coolTheme() {
    mode2 = false;
    mode3 = false;
    mode1 = true;

    console.log("cooltheme ran")

}

function cyberTheme() {
    mode1 = false;
    mode3 = false;
    mode2 = true;

    console.log("cybertheme ran")
}

function funkyTheme() {
    mode1 = false;
    mode2 = false;
    mode3 = true;

    console.log("Funkytheme ran")
}


function hoverCoding() {
    document.getElementById("cat1").innerHTML = "Coding";
    document.getElementById("desc").innerHTML = "My coding journey so far will show some projects I have managed to complete, like a small unity game, a web app and more. ";
}

function hoverDrawing() {
    document.getElementById("cat1").innerHTML = "Drawing";
    document.getElementById("desc").innerHTML = "I have been learning to draw and paint digitally for the last couple years. It is a very deep and difficult skill to master.";
}

function hoverModeling() {
    document.getElementById("cat1").innerHTML = "3D Modeling";
    document.getElementById("desc").innerHTML = "I enjoy the whole process of designing, modeling, texturing and rigging 3D game assets.";
}

function hoverMusic() {
    document.getElementById("cat1").innerHTML = "Music";
    document.getElementById("desc").innerHTML = "For many years I studied guitar, but lately moved more on to electronic music and exploring new genres.";
}



