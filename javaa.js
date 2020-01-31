let score = 0;
let obj = {
    score: 0,
    cariSual: 0,
    suallar: [
        { 'sual': 'Baki paytaxtdirmi?', 'cavab': 'y' },
        { 'sual': 'Bayraqda uch reng var', 'cavab': 'y' },
        { 'sual': 'Nikoraqua Azerbaycanin rayonudur', 'cavab': 'n' }
    ],

    novbetiSualiVer: function () {
        if (this.cariSual == this.suallar.length) {
            return false;
        }
        let sual = this.suallar[this.cariSual];
        this.cariSual++;
        return sual;
    }
}

window.currSual = false;


window.onkeypress = function (e) {
        let userInput = e.key;
        // function scoreUptdate() {
        //     document.querySelector("scoree").innerHTML = "Score: " + score;
        // }
        for(i =0; i<obj.suallar.length;i++){
        if (userInput === 'c') {
            let a = obj.novbetiSualiVer()
            window.currSual = a;
            if (!a) {
                alert('Son')
                document.getElementById('scoree').innerHTML= 'Game Over: ' + score
                
                return;
                
            }
            document.getElementById("questions").innerHTML = "Questions : " + a.sual;
            return;
            
        }

        console.log(window.currSual);

        if (userInput === window.currSual.cavab) {
        
            alert("Perfect")
            score++
            document.getElementById("scoree").innerHTML="Score " + score
            return;
            // scoreUptdate()
        } else {
            alert("Wrong")
            break;
        }

    }

}
































