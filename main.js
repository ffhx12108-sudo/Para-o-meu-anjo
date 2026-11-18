
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Para Kemilly ❤️</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(160deg, #160005, #570013, #a0002b);
    color: white;
    font-family: Georgia, serif;
    overflow-x: hidden;
    min-height: 100vh;
}

/* FUNDO ANIMADO */

.background {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
}

.heart {
    position: absolute;
    bottom: -50px;
    color: #ff315b;
    animation: subir linear infinite;
    opacity: 0;
    text-shadow: 0 0 15px #ff174c;
}

@keyframes subir {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }
    15% { opacity: .8; }
    100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }
}

.spark {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #ffb6c8;
    border-radius: 50%;
    box-shadow: 0 0 12px #ff315b;
    animation: brilho 2s infinite alternate;
}

@keyframes brilho {
    from { opacity: .2; transform: scale(.5); }
    to { opacity: 1; transform: scale(1.5); }
}

/* CONTEÚDO */

main {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 70px 20px;
}

h1 {
    color: #ffd1dc;
    font-size: clamp(45px, 10vw, 75px);
    letter-spacing: 8px;
    text-shadow:
        0 0 10px #ff315b,
        0 0 30px #ff174c,
        0 0 60px #ff174c;
    animation: nomeBrilhando 3s infinite alternate;
}

@keyframes nomeBrilhando {
    from {
        text-shadow: 0 0 10px #ff315b;
        transform: scale(1);
    }
    to {
        text-shadow: 0 0 30px #ff315b, 0 0 60px #ff174c;
        transform: scale(1.04);
    }
}

.subtitle {
    margin-top: 20px;
    font-size: 18px;
    color: #ffdce5;
    line-height: 1.8;
}

.decoration {
    font-size: 35px;
    margin: 25px;
    animation: pulsar 2s infinite;
}

@keyframes pulsar {
    50% { transform: scale(1.2); }
}

/* PRESENTE */

.gift-section {
    margin-top: 140px;
    padding-bottom: 100px;
}

.gift-section h2 {
    font-size: 30px;
    color: #ffc0d0;
    margin-bottom: 15px;
}

.gift-section p {
    color: #ffdce5;
    margin-bottom: 50px;
}

.gift {
    position: relative;
    width: 180px;
    height: 150px;
    margin: auto;
    cursor: pointer;
    transition: transform .4s;
    filter: drop-shadow(0 0 25px #ff174c);
}

.gift:hover {
    transform: scale(1.08);
}

.gift-box {
    position: absolute;
    bottom: 0;
    width: 180px;
    height: 110px;
    background: linear-gradient(135deg, #ed1748, #8b001e);
    border-radius: 5px 5px 12px 12px;
    border: 2px solid #ff8da9;
}

.gift-box::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 100%;
    background: #ffd1dc;
    left: 75px;
}

.gift-lid {
    position: absolute;
    top: 25px;
    left: -10px;
    width: 200px;
    height: 35px;
    background: #ff315b;
    border: 2px solid #ff9bb2;
    border-radius: 7px;
    z-index: 3;
    transition: transform 1s, opacity 1s;
}

.gift-lid::before {
    content: "";
    position: absolute;
    height: 35px;
    width: 30px;
    background: #ffd1dc;
    left: 83px;
}

.bow {
    position: absolute;
    top: -8px;
    left: 65px;
    z-index: 4;
    font-size: 45px;
    transition: 1s;
}

.gift-text {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    animation: pulsar 1.5s infinite;
    letter-spacing: 2px;
}

.gift.open .gift-lid {
    transform: translateY(-120px) rotate(-25deg);
    opacity: 0;
}

.gift.open .bow {
    transform: translateY(-100px) rotate(30deg);
    opacity: 0;
}

.gift.open {
    transform: scale(.85);
}

/* CARTA ROMÂNTICA */

.letter {
    display: none;
    max-width: 650px;
    margin: 55px auto 0;
    padding: 35px 28px;
    background: #fff5f6;
    color: #3d0716;
    border: 2px solid #ff9bb2;
    border-radius: 18px;
    box-shadow: 0 0 45px #ff315b80;
    text-align: left;
    line-height: 1.9;
    animation: carta 1.5s ease forwards;
}

.letter h2 {
    text-align: center;
    color: #a0002b;
    margin-bottom: 25px;
    font-size: 30px;
    font-weight: bold;
}

.letter p {
    color: #3d0716;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 2;
    font-weight: 500;
    text-align: justify;
}

.signature {
    color: #a0002b;
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    margin-top: 30px;
}

@keyframes carta {
    from {
        opacity: 0;
        transform: translateY(60px) scale(.8);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

footer {
    position: relative;
    z-index: 2;
    padding: 30px;
    color: #ffb3c4;
    text-align: center;
    font-size: 14px;
}

@media(max-width: 480px) {
    main {
        padding: 55px 16px;
    }

    .letter {
        padding: 25px 20px;
    }

    .letter p {
        font-size: 17px;
    }

    h1 {
        letter-spacing: 5px;
    }
}
</style>
</head>

<body>

<div class="background" id="background"></div>

<main>

    <div class="decoration">❤️</div>

    <h1>KEMILLY</h1>

    <p class="subtitle">
        Fiz tudo isso especialmente para você, meu amor.
        <br>
        Você é uma das pessoas mais especiais da minha vida.
    </p>

    <div class="decoration">🌹</div>

    <section class="gift-section">

        <h2>Tenho algo para você...</h2>

        <p>
            Desça um pouquinho e descubra sua surpresa, meu amor.
        </p>

        <div class="gift" id="gift" onclick="abrirPresente()">
            <div class="gift-lid"></div>
            <div class="bow">🎀</div>
            <div class="gift-box"></div>
        </div>

        <div class="gift-text" id="giftText">
            ✨ APERTE EM MIM ✨
        </div>

        <div class="letter" id="letter">

            <h2>❤️ Uma carta para você ❤️</h2>

            <p>
                Meu amor, eu queria encontrar as palavras perfeitas
                para explicar tudo o que sinto por você, mas a verdade
                é que nenhum texto seria grande o suficiente para
                descrever o tamanho do meu carinho.
            </p>

            <p>
                Desde que você chegou na minha vida, tudo ganhou
                um significado diferente. Seu sorriso se tornou
                uma das minhas coisas favoritas, sua voz consegue
                melhorar meus dias e até os momentos mais simples
                ficam especiais quando estou com você.
            </p>

            <p>
                Quero que você saiba que não precisa ser perfeita
                para ser incrível aos meus olhos. Eu amo seus
                detalhes, seu jeitinho, suas manias, suas qualidades
                e até aquelas pequenas coisas que talvez você nem
                perceba que faz.
            </p>

            <p>
                Eu quero estar ao seu lado nos dias felizes,
                mas também nos dias difíceis. Quero ser alguém
                em quem você possa confiar, alguém que te faça
                sorrir quando estiver triste e que nunca deixe
                você esquecer o quanto é importante.
            </p>

            <p>
                Se eu pudesse escolher novamente entre todas
                as pessoas desse mundo, ainda escolheria você.
                Não porque tudo seja perfeito, mas porque é com
                você que eu quero construir momentos, colecionar
                lembranças e viver histórias que um dia vamos
                recordar com um sorriso no rosto.
            </p>

            <p>
                Obrigado por existir, por fazer parte da minha
                vida e por me proporcionar sentimentos tão
                bonitos. Espero conseguir demonstrar todos os
                dias o quanto você é amada e especial para mim.
            </p>

            <p>
                Eu não prometo que todos os dias serão fáceis,
                mas prometo que, enquanto estivermos juntos,
                nunca vou deixar de valorizar o que temos.
            </p>

            <p>
                Você é meu carinho favorito, meu pensamento
                mais bonito e uma das melhores partes da minha vida.
            </p>

            <p>
                Eu te amo muito, meu amor. Mais do que essas
                palavras conseguem explicar. ❤️
            </p>

            <div class="signature">
                Com todo meu amor, para sempre. ❤️
            </div>

        </div>

    </section>

</main>

<footer>
    Feito com muito amor, especialmente para você. ❤️
</footer>

<script>

// CORAÇÕES FLUTUANTES

const background = document.getElementById("background");

function criarCoracao() {
    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️", "💕", "💗", "💖", "♥"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 8) + "s";

    background.appendChild(heart);

    setTimeout(() => heart.remove(), 13000);
}

setInterval(criarCoracao, 350);

// PARTÍCULAS DE LUZ

function criarBrilho() {
    const spark = document.createElement("div");

    spark.className = "spark";

    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = Math.random() * 100 + "vh";

    background.appendChild(spark);

    setTimeout(() => spark.remove(), 4000);
}

setInterval(criarBrilho, 250);

// ABRIR PRESENTE

let aberto = false;

function abrirPresente() {

    if (aberto) return;

    aberto = true;

    const gift = document.getElementById("gift");
    const letter = document.getElementById("letter");
    const text = document.getElementById("giftText");

    gift.classList.add("open");

    text.innerHTML = "🎁 Uma surpresa feita com amor!";

    setTimeout(() => {

        letter.style.display = "block";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 900);
}

</script>

</body>
</html>

