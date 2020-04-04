let shift;
let alt;
if(!localStorage.getItem('leng')){localStorage.setItem('leng', 'eng')}
window.onload = () => {
    const keyboard = new Keyboard(keys);
    keyboard.render();
}
class Keyboard{
    constructor(arrOfKeys){
        this.arrOfKeys = arrOfKeys;
        this.div =document.createElement('DIV');
    }
    render(){
        this.div.setAttribute("id","keyboard");
        document.body.append(this.div)
        this.update()
    }
    update(){
        document.getElementById("keyboard").innerText="";
        this.div.innerText = "";
        for (let i = 0; i < this.arrOfKeys.length; i++) {
            for (let n = 0; n < this.arrOfKeys[i].length; n++) {
               document.getElementById("keyboard").append(this.createKey(this.arrOfKeys[i][n],i+1,localStorage.getItem('leng')));
            }
        }
    }
    createKey(obj,row,leng){

    }
}
const keys =[
[    
    {
    "id":"backquote",
    "class":"key letter",
    "eng":["`","~"],
    "ru":["ё","Ё"],
    },
    {
    "id":"digit1",
    "class":"key letter",
    "eng":["1","!"],
    "ru":["1","!"],
    },
    {
    "id":"digit2",
    "class":"key letter",
    "eng":["2","@"],
    "ru":["2",'"'],
    },
    {
    "id":"digit3",
    "class":"key letter",
    "eng":["3","#"],
    "ru":["3","№"],
    },
    {
    "id":"digit4",
    "class":"key letter",
    "eng":["4","$"],
    "ru":["4",";"],
    },
    {
    "id":"digit5",
    "class":"key letter",
    "eng":["5","%"],
    
    },
    {
    "id":"digit6",
    "class":"key letter",
    "eng":["6","^"],
    "ru":["6",":"],
    },
    {
    "id":"digit7",
    "class":"key letter",
    "eng":["7","&"],
    "ru":["7","?"],
    },
    {
    "id":"digit8",
    "class":"key letter",
    "eng":["8","*"],
    
    },
    {
    "id":"digit9",
    "class":"key letter",
    "eng":["9","("],
    
    },
    {
    "id":"digit0",
    "class":"key letter",
    "eng":["0",")"],
    
    },
    {
    "id":"minus",
    "class":"key letter",
    "eng":["-","_"],
    },
    {
    "id":"equal",
    "class":"key letter",
    "eng":["=","+"],
    },
    
    {
    "id":"backspace",
    "class":"key func",
    "eng":["Backspace","Backspace"],
    },
],
[   
    {
    "id":"tab",
    "class":"key func",
    "eng":["Tab","Tab"],
    },
    {
    "id":"keyq",
    "class":"key letter",
    "eng":["q","Q"],
    "ru":["й","Й"],
    },
    {
    "id":"keyw",
    "class":"key letter",
    "eng":["w","W"],
    "ru":["ц","Ц"],
    },
    {
    "id":"keye",
    "class":"key letter",
    "eng":["e","E"],
    "ru":["у","У"],
    },
    {
    "id":"keyr",
    "class":"key letter",
    "eng":["r","R"],
    "ru":["к","К"],
    },
    {
    "id":"keyt",
    "class":"key letter",
    "eng":["t","T"],
    "ru":["е","Е"],
    },
    {
    "id":"keyy",
    "class":"key letter",
    "eng":["y","Y"],
    "ru":["н","Н"],
    },
    {
    "id":"keyu",
    "class":"key letter",
    "eng":["u","U"],
    "ru":["г","Г"],
    },
    {
    "id":"keyi",
    "class":"key letter",
    "eng":["i","I"],
    "ru":["ш","Ш"],
    },
    {
    "id":"keyo",
    "class":"key letter",
    "eng":["o","O"],
    "ru":["щ","Щ"],
    },
    {
    "id":"keyp",
    "class":"key letter",
    "eng":["p","P"],
    "ru":["з","З"],
    },
    {
    "id":"bracketleft",
    "class":"key letter",
    "eng":["[","{"],
    "ru":["х","Х"],
    },
    {
    "id":"bracketright",
    "class":"key letter",
    "eng":["]","}"],
    "ru":["ъ","Ъ"],
    },
    {
    "id":"backslash",
    "class":"key letter",
    "eng":["\\","|"],
    "ru":["\\","/"],
    },
    {
    "id":"delete",
    "class":"key func",
    "eng":["Delete","DELETE"],
    }
],
[
    {
    "id":"capslock",
    "class":"key func",
    "eng":["CapsLock","CapsLock"],
    },
    {
    "id":"keya",
    "class":"key letter",
    "eng":["a","A"],
    "ru":["ф","Ф"],
    },
    {
    "id":"keys",
    "class":"key letter",
    "eng":["s","S"],
    "ru":["ы","Ы"],
    },
    {
    "id":"keyd",
    "class":"key letter",
    "eng":["d","D"],
    "ru":["в","В"],
    },
    {
    "id":"keyf",
    "class":"key letter",
    "eng":["f","F"],
    "ru":["а","А"],
    },
    {
    "id":"keyg",
    "class":"key letter",
    "eng":["g","G"],
    "ru":["п","П"],
    },
    {
    "id":"keyh",
    "class":"key letter",
    "eng":["h","H"],
    "ru":["р","Р"],
    },
    {
    "id":"keyj",
    "class":"key letter",
    "eng":["j","J"],
    "ru":["о","О"],
    },
    {
    "id":"keyk",
    "class":"key letter",
    "eng":["k","K"],
    "ru":["л","Л"],
    },
    {
    "id":"keyl",
    "class":"key letter",
    "eng":["l","L"],
    "ru":["д","Д"],
    },
    {
    "id":"semicolon",
    "class":"key letter",
    "eng":[";",":"],
    "ru":["ж","Ж"],
    },
    {
    "id":"quote",
    "class":"key letter",
    "eng":["'",'"'],
    "ru":["э","Э"],
    },
    {
    "id":"enter",
    "class":"key func",
    "eng":["Enter","Enter"],
    }
],
[
    {
    "id":"leng",
    "class":"key func",
    "eng":["🌍","🌍"],
    },
    {
    "id":"shiftleft",
    "class":"key func",
    "eng":["Shift","Shift"],
    },
    
    {
    "id":"keyz",
    "class":"key letter",
    "eng":["z","Z"],
    "ru":["я","Я"],
    },
    {
    "id":"keyx",
    "class":"key letter",
    "eng":["x","X"],
    "ru":["ч","Ч"],
    },
    {
    "id":"keyc",
    "class":"key letter",
    "eng":["c","C"],
    "ru":["с","С"],
    },
    {
    "id":"keyv",
    "class":"key letter",
    "eng":["v","V"],
    "ru":["м","М"],
    },
    {
    "id":"keyb",
    "class":"key letter",
    "eng":["b","B"],
    "ru":["и","И"],
    },
    {
    "id":"keyn",
    "class":"key letter",
    "eng":["n","N"],
    "ru":["т","Т"],
    },
    {
    "id":"keym",
    "class":"key letter",
    "eng":["m","M"],
    "ru":["ь","Ь"],
    },
    {
    "id":"comma",
    "class":"key letter",
    "eng":[",","<"],
    "ru":["б","Б"],
    },
    {
    "id":"period",
    "class":"key letter",
    "eng":[".",">"],
    "ru":["ю","Ю"],
    },
    {
    "id":"slash",
    "class":"key letter",
    "eng":["/","?"],
    "ru":[".",","],
    },
    {
    "id":"arrowup",
    "class":"key func",
    "eng":["⇪","⇪"],
    },
    {
    "id":"shiftright",
    "class":"key func",
    "eng":["Shift","Shift"],
    }
],
[
    {
    "id":"controlleft",
    "class":"key func",
    "eng":["Control","CONTROL"],
    },
    {
    "id":"metaleft",
    "class":"key func",
    "eng":["Meta","META"],
    },
    {
    "id":"altleft",
    "class":"key func",
    "eng":["Alt","Alt"],
    },
    {
    "id":"space",
    "class":"key letter",
    "eng":["\ ","\ "],
    },
    {
    "id":"altright",
    "class":"key func",
    "eng":["Alt","Alt"],
    },
    {
    "id":"controlright",
    "class":"key func",
    "eng":["Control","CONTROL"],
    },
    
    {
    "id":"arrowleft",
    "class":"key func",
    "eng":["⇦","⇦"],
    },
    {
    "id":"arrowdown",
    "class":"key func",
    "eng":["⇩","⇩"],
    },
    {
    "id":"arrowright",
    "class":"key func",
    "eng":["⇨","⇨"],
    },
    ]
]