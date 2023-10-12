document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

function pressionada(letra){
  const audio = new Audio(letra+".mp3");
  audio.play();
}
  


const palavrasHangul = [
  "나", "이", "그", "우리", "뭐", "저", "이렇게", "것", "그렇게", "수",
  "하다", "않다", "없다", "있다", "나다", "우리나라", "사람", "말", "그렇다", "알다",
  "그것", "어떻다", "그리고", "그녀", "더", "우리나라사람", "그러나", "일", "이다", "크다",
  "때", "지금", "다른", "가다", "안", "많다", "안녕하다", "그런데", "그리다", "마음",
  "생각", "그대로", "곳", "시간", "또", "말하다", "속", "때문", "어떤", "만",
  "나라", "어디", "손", "좋다", "일이다", "그러다", "물", "그렇지만", "영화", "거의",
  "모르다", "나무", "시작", "그렇게하다", "이름", "우리나라사람들", "하나", "보다", "모든", "가장",
  "아니다", "전", "받다", "그림", "아이", "이렇다", "먹다", "속담", "그런", "아직",
  "우리들", "물론", "어떻게", "연구", "문제", "약", "학교", "하늘", "영어", "사회",
  "어렵다", "많이", "시대", "프로그램", "어머니", "다시", "흥미", "그러니까", "앞", "어디다",
  "보이다", "아프다", "이유", "어느", "평소", "마치", "작다", "언제", "바로", "그래서",
];

const palavrasRomanizadas = [
  "na", "i", "geu", "uri", "mwo", "jeo", "ireohge", "geot", "geureohge", "su",
  "hada", "anhda", "eopda", "itda", "nada", "urinara", "saram", "mal", "geureohda", "alda",
  "geugeot", "eotteohda", "geurigo", "geunyeo", "deo", "urinarasaram", "geureona", "il", "ida", "keuda",
  "ttae", "jigeum", "dareun", "gada", "an", "manhda", "annyeonghada", "geureohdene", "geurida", "maeum",
  "saenggak", "geudaero", "got", "sigan", "tto", "malhada", "sok", "ddaemun", "eotteon", "man",
  "nara", "eodi", "son", "johda", "ilida", "geureoda", "mul", "geureohjiman", "yeonghwa", "geoeui",
  "moreuda", "namu", "sijak", "geureoghada", "ireum", "urinarasaramdeul", "hana", "boda", "modeun", "gajang",
  "anida", "jeon", "batda", "geurim", "ai", "ireohda", "meokda", "sokdam", "geureon", "ajik",
  "urideul", "mollon", "eotteohge", "yeongu", "munje", "yak", "hakgyo", "haneul", "yeongeo", "sahoe",
  "eoryeopda", "manhi", "sidae", "peurogeuraem", "eomeoni", "dasi", "heungmi", "geureonikka", "ap", "eodida",
  "boida", "apheuda", "iyu", "eoneu", "pyeongso", "machi", "jakda", "eonje", "baro", "geuraeseo",
];

const palavrasPortugues = [
  "Eu", "Isso", "Aquele", "Nós", "O quê", "Aquele", "Desta forma", "Coisa", "Daquela forma", "Número",
  "Fazer", "Não fazer", "Não ter", "Ter", "Vir", "Nosso país", "Pessoa", "Linguagem", "Daquela forma", "Saber",
  "Isso", "Como", "E", "Ela", "Mais", "Pessoas do nosso país", "Mas", "Dia", "Ser", "Grande",
  "Quando", "Agora", "Outro", "Ir", "Não", "Muito", "Oi", "No entanto", "Desenhar", "Coração",
  "Pensar", "Como está", "Lugar", "Tempo", "De novo", "Falar", "Dentro", "Por causa de", "Que tipo de", "Dez",
  "País", "Onde", "Mão", "Bom", "Trabalho", "Assim", "Água", "Mas", "Filme", "Quase",
  "Não saber", "Árvore", "Começar", "Fazer isso", "Nome", "Pessoas do nosso país", "Um", "Ver", "Todos", "Mais",
  "Não", "Antes", "Receber", "Imagem", "Criança", "Desta forma", "Comer", "Provérbio", "Aquele", "Ainda",
  "Nós", "Claro", "Como", "Pesquisa", "Problema", "Medicina", "Escola", "Céu", "Inglês", "Sociedade",
  "Difícil", "Muitos", "Era", "Programa", "Mãe", "Novamente", "Interesse", "Então", "Frente", "Onde",
  "Ver", "Doente", "Razão", "Qualquer", "Normalmente", "Como", "Pequeno", "Quando", "Direto", "Portanto",
];
