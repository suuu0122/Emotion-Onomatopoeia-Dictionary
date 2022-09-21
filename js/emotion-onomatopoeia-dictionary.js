class Word{
    constructor(word, defintion, pictureUrl){
        this.word = word;
        this.defintion = defintion;
        this.pictureUrl = pictureUrl;
    }
}

class EmotionObject{
    constructor(emotion, description, color, onomatopoeia){
        this.emotion = emotion;
        this.description = description;
        this.color = color;
        this.onomatopoeia = onomatopoeia;
    }
}

//グローバル定数
const dictionary = {
    "bark":"the sound made by a dog",
    "grunt":"issue a low, animal-like noise",
    "roar":"make a loud noise, as of an animal",
    "whack":"the act of hitting vigorously",
    "smack":"a blow from a flat object (as an open hand)",
    "hiss":`make a sharp, elongated "s" sound`,
    "ahem":"the utterance of a sound similar to clearing the throat",
    "bawl":"cry loudly",
    "bling":"flashy, ostentatious jewelry",
    "boom":"a deep prolonged loud noise",
    "buzz":"the sound of rapid vibration",
    "caw":"utter a cry, characteristic of crows, rooks, or ravens",
    "chatter":"talk socially without exchanging too much information",
    "chant":"a repetitive song in which syllables are assigned to a tone",
    "clatter":"a continuous rattling sound as of hard objects falling or striking each other.",
    "clunk":"a heavy dull sound (as made by impact of heavy objects)",
    "crawl":"move forward on the hands and knees or by dragging the body close to the ground.",
    "flick":"throw or toss with a quick motion",
    "giggle":"a light, silly laugh.",
    "gargle":"an act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.",
    "honk":"the cry of a goose or any loud sound resembling it",
    "oink":"the short low gruff noise of the kind made by hogs",
    "whine":"a complaint uttered in a plaintive way",
    "waah":"sound made when crying by babies",
    "zing":"sound my by something energetic"
};

const pictureDictionary = {
    "bark":"img/german-shepherd-166972_1280.jpeg",
    "grunt":"img/nepal-419__480.jpeg",
    "roar":"img/lion-3317670_1280.jpeg",
    "whack":"img/boxer-2894025_1280.webp",
    "smack":"img/hammer-682767_1280.webp",
    "hiss":"img/cat-1739091_1280.jpeg",
    "ahem":"img/man-286476_1280.webp",
    "bawl":"img/smiley-822365_960_720.webp",
    "bling":"img/happy-new-year-3050088_1280.jpeg",
    "boom":"img/explosion-1325471_1280.jpeg",
    "buzz":"img/bees-4845211_1280.webp",
    "caw":"img/bird-2071185_1280.jpeg",
    "chatter":"img/istockphoto-1335187854-1024x1024.jpeg",
    "chant":"img/parchment-1527650__340.jpeg",
    "clatter":"img/clutter-4825256_1280.jpeg",
    "clunk":"img/steel-1968194_1280.webp",
    "crawl":"img/baby-2972221__340.jpeg",
    "flick":"img/disgust-15793_1280.webp",
    "giggle":"img/people-2604850_1280.webp",
    "gargle":"img/girl-smoke-cigarette-2198839_1280.webp",
    "honk":"img/geese-2105918_1280.webp",
    "oink":"img/pig-4030013_1280.jpeg",
    "whine":"img/girl-5115192_960_720.jpeg",
    "waah":"img/emotions-1988745_1280.webp",
    "zing":"img/fiber-optic-2749588_1280.webp"
};

const emotionPictureDictionary = {
    "angry": "img/angry.png",
    "happy": "img/happy.png",
    "bad": "img/bad.png",
    "sad": "img/sad.png",
    "surprised": "img/surprised.png",
    "fearful": "img/fearful.png",
    "disgusted": "img/disgusted.png"
}

const emotions = [
    new EmotionObject("angry", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
    new EmotionObject("happy", "feeling or showing pleasure or contentment.", "pink", ["bling","chatter","chant","giggle"]),
    new EmotionObject("bad", "not such as to be hoped for or desired; unpleasant or unwelcome.", "blue", ["ahem","clatter","clunk"]),
    new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"]),
    new EmotionObject("surprised", "to feel mild astonishment or shock.", "purple", ["boom","honk","zing"]),
    new EmotionObject("fearful", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"]),
    new EmotionObject("disgusted", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "orange", ["flick","gargle","oink"])
];

// 感情のすべての擬音語のWordオブジェクトの配列を返す
function getOnomatopoeiaWords(emotionObject) {
    let onomatopoeiaWordsArray = [];
    
    for (let i = 0; i < emotionObject.onomatopoeia.length; i++) {
        word = emotionObject.onomatopoeia[i];
        defintion = dictionary[word];
        pictureUrl = pictureDictionary[word];
        
        let currentWord = new Word(word, defintion, pictureUrl);
        onomatopoeiaWordsArray.push(currentWord);
    }

    return onomatopoeiaWordsArray;
}

// コンテナのHTMLを文字列を返す
// このコンテナの背景は感情の色で、コンテナの上部には、感情と感情の説明が表示される
// 次にこの感情の各擬音語とその定義、画像を含んだカードが表示される
function getHtmlContainerString(emotionObject) {
    let containerSection = '';

    containerSection += 
    `
        <div id="sec${emotionObject.emotion}" class="bg-${emotionObject.color} big-square p-2">
            <h2 class="text-white">${emotionObject.emotion}</h2>
            <p class="text-white">${emotionObject.description}</p>
    `;

    let onomatopoeiaWordsArray = getOnomatopoeiaWords(emotionObject);
    
    containerSection += '<div class="d-flex justify-content-md-between justify-content-center flex-wrap">';
    for (let i = 0; i < onomatopoeiaWordsArray.length; i++) {
        containerSection +=
        `
            <div class="col-md-5 col-10 d-flex emotion-card m-2" style="width: 20em; height: 15em">
                <div class="col-6 px-2">
                    <h4 class="py-2">${onomatopoeiaWordsArray[i].word}</h4>
                    <p>${onomatopoeiaWordsArray[i].defintion}</p>
                </div>
                <div class="col-6 d-flex justify-content-center align-items-center">
                    <div>
                        <img class="picture d-flex justify-content-end" src=${onomatopoeiaWordsArray[i].pictureUrl}>
                    </div>
                </div>
            </div>
        `
    }
    containerSection += '</div>'

    return containerSection;
}

let emotionsCategory = '<div class="d-flex justify-content-center align-items-center flex-wrap">';
for (let i = 0; i < emotions.length; i++) {
    let currentEmotion = emotions[i];
    emotionsCategory +=
    `
        <a href="#sec${currentEmotion.emotion}">
            <div class="col-md-4">
                <div class="card d-flex justify-content-center align-items-center text-center text-white m-3" style="width: 20rem; height: 15rem">
                    <div class="card-body bg-${currentEmotion.color}">
                        <img src=${emotionPictureDictionary[currentEmotion.emotion]} class="emotion-picture">
                        <h2 class="card-title">${currentEmotion.emotion}</h2>
                        <p class="card-text">${currentEmotion.description}</p>
                    </div>
                </div>
            </div>
        </a>
    `;
}
emotionsCategory += "</div>"

let containerSection = '<div class="d-flex flex-column">';
for (let i = 0; i < emotions.length; i++) {
    containerSection += getHtmlContainerString(emotions[i]);
    containerSection += "</div>"
}
containerSection += "</div>"

let htmlString =
`
${emotionsCategory}
${containerSection}
`;

document.getElementById("target").innerHTML = htmlString;
