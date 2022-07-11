let character = 0;
const fullText = "StarField visualizer using p5.js By Xavier Loera"
document.addEventListener('DOMContentLoaded', () => {
    typeText()
}, {once : true})

const typeText = () => { //types inner text
    if(character < fullText.length) {
        document.getElementById("divElement").innerHTML += fullText.charAt(character)
        character++
        let spread = Math.floor(Math.random() * 150 )+ 50
        setTimeout(typeText,spread);
    }
}
