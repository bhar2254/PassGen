/**
 * PassGen.ts
 * A Recreation of the Node.js variant located on GitHub (https://github.com/Indian-Hills-Community-College/PassGen)
 */

var returnResponses = [
  'Congratulations on your new password!',
  'Enjoy your new password!',
  'Have a password!',
  'You get a password!',
  'Don\'t use this everywhere!'
]

var getRandomInRange = (min, max) => {
  const randomBuffer = new Uint32Array(1)
  crypto.getRandomValues(randomBuffer)

  let randomNumber = randomBuffer[0] / (0xffffffff + 1)

  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(randomNumber * (max - min + 1)) + min
}

var getRandomResponse = () => {
  return returnResponses[getRandomInRange(0, returnResponses.length - 1)]
}

var headCode = `<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
	<head>
		<meta charset="utf8" />
		<title>PassGen | Home</title>
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<link rel="icon" type="image/x-icon" href="https://blaineharper.com/assets/favicon.ico">

		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css">
    <style>
    body {
      --bh-primary: hsla(208, 100%, 22%, 1);
      --bh-secondary: #F7C564;
    }
    .btn {
        font-weight: 700;
        font-size:15px;
        line-height:1.5;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Arial, Ubuntu, sans-serif;
    }
    .btn-primary {
        --bs-btn-bg: var(--bh-primary);
        --bs-btn-border-color: var(--bh-primary);
        --bs-btn-hover-bg: var(--bh-secondary);
        --bs-btn-hover-border-color: var(--bh-secondary);
    }

    @media only screen and (min-width: 992px) {
      .hide-on-shrink {
        display: block;
      }
      .navbar-right {
        margin-left:80%;
        position:absolute;
      }
    }
    
    @media only screen and (max-width: 992px) {
      .hide-on-shrink {
        display: none;
      }
    }
    
    </style>
		`

var navbar = `
<nav class="navbar navbar-expand-lg bg-dark sticky-top shadow-lg">
	<div class="container-fluid">
		<button class="my-1 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<a style="margin-left:10%; position:absolute;" class="navbar-brand hide-on-shrink" href="https://blaineharper.com">BlaineHarper.com</a>
			<ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://blaineharper.com/about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://blaineharper.com/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://blaineharper.com/posts">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://ai.blaineharper.com">AI</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://passgen.blaineharper.com">Password Generator</a>
        </li>
			</ul>
		</div>
	</div>
</nav>`

var passwdGen = (args) => {
/* args 
    complexity
    separators
    wordList      !!! Not used yet
*/
  var getRandomInRange = (min, max) => {
    const randomBuffer = new Uint32Array(1)
    crypto.getRandomValues(randomBuffer)
  
    let randomNumber = randomBuffer[0] / (0xffffffff + 1)
  
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(randomNumber * (max - min + 1)) + min
  }

  let sampleWordList = ["a","able","about","absolute","accept","account","achieve","across","act","active","actual","add","address","admit","advertise","affect","afford","after","afternoon","again","against","age","agent","ago","agree","air","all","allow","almost","along","already","alright","also","although","always","america","amount","and","another","answer","any","apart","apparent","appear","apply","appoint","approach","appropriate","area","argue","arm","around","arrange","art","as","ask","associate","assume","at","attend","authority","available","aware","away","awful","baby","back","bad","bag","balance","ball","bank","bar","base","basis","be","bear","beat","beauty","because","become","bed","before","begin","behind","believe","benefit","best","bet","between","big","bill","birth","bit","black","bloke","blood","blow","blue","board","boat","body","book","both","bother","bottle","bottom","box","boy","break","brief","brilliant","bring","britain","brother","budget","build","bus","business","busy","but","buy","by","cake","call","can","car","card","care","carry","case","cat","catch","cause","cent","centre","certain","chair","chairman","chance","change","chap","character","charge","cheap","check","child","choice","choose","Christ","Christmas","church","city","claim","class","clean","clear","client","clock","close","closes","clothe","club","coffee","cold","colleague","collect","college","colour","come","comment","commit","committee","common","community","company","compare","complete","compute","concern","condition","confer","consider","consult","contact","continue","contract","control","converse","cook","copy","corner","correct","cost","could","council","count","country","county","couple","course","court","cover","create","cross","cup","current","cut","dad","danger","date","day","dead","deal","dear","debate","decide","decision","deep","definite","degree","department","depend","describe","design","detail","develop","die","difference","difficult","dinner","direct","discuss","district","divide","do","doctor","document","dog","door","double","doubt","down","draw","dress","drink","drive","drop","dry","due","during","each","early","east","easy","eat","economy","educate","effect","egg","eight","either","elect","electric","eleven","else","employ","encourage","end","engine","english","enjoy","enough","enter","environment","equal","especial","europe","even","evening","ever","every","evidence","exact","example","except","excuse","exercise","exist","expect","expense","experience","explain","express","extra","eye","face","fact","fair","fall","family","far","farm","fast","father","favour","feed","feel","few","field","fight","figure","file","fill","film","final","finance","find","fine","finish","fire","first","fish","fit","five","flat","floor","fly","follow","food","foot","for","force","forget","form","fortune","forward","four","france","free","friday","friend","from","front","full","fun","function","fund","further","future","game","garden","gas","general","germany","get","girl","give","glass","go","god","good","goodbye","govern","grand","grant","great","green","ground","group","grow","guess","guy","hair","half","hall","hand","hang","happen","happy","hard","hate","have","he","head","health","hear","heart","heat","heavy","hell","help","here","high","history","hit","hold","holiday","home","honest","hope","horse","hospital","hot","hour","house","how","however","hullo","hundred","husband","idea","identify","if","imagine","important","improve","in","include","income","increase","indeed","individual","industry","inform","inside","instead","insure","interest","into","introduce","invest","involve","issue","it","item","jesus","job","join","judge","jump","just","keep","key","kid","kill","kind","king","kitchen","knock","know","labour","lad","lady","land","language","large","last","late","laugh","law","lay","lead","learn","leave","left","leg","less","let","letter","level","lie","life","light","like","likely","limit","line","link","list","listen","little","live","load","local","lock","london","long","look","lord","lose","lot","love","low","luck","lunch","machine","main","major","make","man","manage","many","mark","market","marry","match","matter","may","maybe","mean","meaning","measure","meet","member","mention","middle","might","mile","milk","million","mind","minister","minus","minute","miss","mister","moment","monday","money","month","more","morning","most","mother","motion","move","mrs","much","music","must","name","nation","nature","near","necessary","need","never","new","news","next","nice","night","nine","no","non","none","normal","north","not","note","notice","now","number","obvious","occasion","odd","of","off","offer","office","often","okay","old","on","once","one","only","open","operate","opportunity","oppose","or","order","organize","original","other","otherwise","ought","out","over","own","pack","page","paint","pair","paper","paragraph","pardon","parent","park","part","particular","party","pass","past","pay","pence","pension","people","per","percent","perfect","perhaps","period","person","photograph","pick","picture","piece","place","plan","play","please","plus","point","police","policy","politic","poor","position","positive","possible","post","pound","power","practise","prepare","present","press","pressure","presume","pretty","previous","price","print","private","probable","problem","proceed","process","produce","product","programme","project","proper","propose","protect","provide","public","pull","purpose","push","put","quality","quarter","question","quick","quid","quiet","quite","radio","rail","raise","range","rate","rather","read","ready","real","realise","really","reason","receive","recent","reckon","recognize","recommend","record","red","reduce","refer","regard","region","relation","remember","report","represent","require","research","resource","respect","responsible","rest","result","return","rid","right","ring","rise","road","role","roll","room","round","rule","run","safe","sale","same","saturday","save","say","scheme","school","science","score","scotland","seat","second","secretary","section","secure","see","seem","self","sell","send","sense","separate","serious","serve","service","set","settle","seven","shall","share","she","sheet","shoe","shoot","shop","short","should","show","shut","sick","side","sign","similar","simple","since","sing","single","sir","sister","sit","site","situate","six","size","sleep","slight","slow","small","smoke","so","social","society","some","son","soon","sorry","sort","sound","south","space","speak","special","specific","speed","spell","spend","square","staff","stage","stairs","stand","standard","start","state","station","stay","step","stick","still","stop","story","straight","strategy","street","strike","strong","structure","student","study","stuff","stupid","subject","succeed","such","sudden","suggest","suit","summer","sun","sunday","supply","support","suppose","sure","surprise","switch","system","table","take","talk","tape","tax","tea","teach","team","telephone","television","tell","ten","tend","term","terrible","test","than","thank","the","then","there","therefore","they","thing","think","thirteen","thirty","this","thou","though","thousand","three","through","throw","thursday","tie","time","to","today","together","tomorrow","tonight","too","top","total","touch","toward","town","trade","traffic","train","transport","travel","treat","tree","trouble","true","trust","try","tuesday","turn","twelve","twenty","two","type","under","understand","union","unit","unite","university","unless","until","up","upon","use","usual","value","various","very","video","view","village","visit","vote","wage","wait","walk","wall","want","war","warm","wash","waste","watch","water","way","we","wear","wednesday","wee","week","weigh","welcome","well","west","what","when","where","whether","which","while","white","who","whole","why","wide","wife","will","win","wind","window","wish","with","within","without","woman","wonder","wood","word","work","world","worry","worse","worth","would","write","wrong","year","yes","yesterday","yet","you","young"];
  let retval = ''

  let complexity = args.complexity || 3
  let separators = args.separators || "+"
  let wordList = args.wordList || sampleWordList

  let separatorIndex = getRandomInRange(0, separators.length - 1)
  for(let i=0; i<complexity; i++){
    retval += sampleWordList[getRandomInRange(0, sampleWordList.length - 1)] + separators[separatorIndex]
  }

  retval += getRandomInRange(10, 99)

  return retval
};

var src_default = {
  async fetch(request, env, ctx) {
    const url = request.url;
    function getParameterByName(name) {
      name = name.replace(/[\[\]]/g, "\\$&");
      name = name.replace(/\//g, "/");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
      if (!results)
        return null;
      else if (!results[2])
        return "";
      else if (results[2]) {
        results[2] = results[2].replace(/\//g, "/");
      }
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    function rawHtmlResponse(html) {
      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=UTF-8"
        }
      });
    }
    async function BadRequestException(reason) {
      this.status = 400;
      this.statusText = "Bad Request";
      this.reason = reason;
    }
    const { host, protocol, pathname } = new URL(request.url);
    if ("https:" !== protocol || "https" !== request.headers.get("x-forwarded-proto")) {
      throw new BadRequestException("Please use a HTTPS connection.");
    }
    switch (pathname) {
      case "/": {        
        let queryComplexity = getParameterByName("complexity") || 3;
        let querySeparators = getParameterByName("separators") || '#+-=!'

        let bodyContent = ''

        bodyContent += `
        <script type="text/javascript">
          function copyPasswordToClipboard(id) {		
          //	Copy the text inside the text field
            let content = document.getElementById(\`\${id}\`).innerText

          //	Apply it to the clipboard
            navigator.clipboard.writeText(content);
          
          //	Alert user
          //	alert("Copied the text: " + content);
          }
        </script>`

        bodyContent += `
        <div class='m-3 text-muted'>
          Copy any of the passwords below for a secure and memorable password. If none of these suit your interests, refresh the page for another selection.  
          <br>Inspired by <a href="https://xkcd.com/936/">XKCD</a> and <a href="https://xkpasswd.net/s/">xkpasswd</a>.  
          <hr class="my-3">
          <div>
            <iframe class="col-12" src="/embed" style="min-height:40vh;"></iframe>
          </div>`
        
        bodyContent += `
          </div>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script type="text/javascript">
          $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          });
        </script>`
        return rawHtmlResponse(`
          ${headCode}
          ${navbar}
          </head>
          <body style="background-color: var(--bh-primary);">
            <div class="d-flex flex-column justify-content-center align-items-center" style="min-height: 90vh;">
              <div class="container my-5">
                <div class="row">
                  <div class="col-lg-8 col-xs-12 mx-auto">
                    <div class="text-white rounded" style="background-color:hsl(238deg, 6%, 14%);">
                      <div class='container p-3'>
                        ${bodyContent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
        `)
      }
      case "/embed": {        
        let queryComplexity = getParameterByName("complexity") || 3;
        let querySeparators = getParameterByName("separators") || '#+-=!'

        let bodyContent = ''

        bodyContent += `
          <form method="GET" class="col-11 text-center" action="/embed/return">
            <div class="row mb-3">
              <div class="col-4 col-md-2 col-lg-1 ms-auto">
                <label class="mb-1" for="complexity">Complexity</label>
                <input class="form-control mb-1 bg-secondary" name="complexity" value="${queryComplexity}" placeholder="${queryComplexity}" type="number"></input>
              </div>
              <div class="col-4 col-md-2 col-lg-1 me-auto">
                <label class="mb-1" for="separators">Separators</label>
                <input class="form-control mb-1 bg-secondary" name="separators" value="${querySeparators}" placeholder="${querySeparators}" type="text"></input>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Generate</button>
          </form>`
        
        bodyContent += `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>`

        return rawHtmlResponse(`
        ${headCode}
          <style>
            body {
              background-color: hsl(240deg, 6%, 14%);
            }
          </style>
          </head>
          <body>
            <div class="text-white">
              <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                ${bodyContent}
              </div>
            </div>
          </body>
        </html>
      `)
      }
      case "/embed/return": {        
        let queryComplexity = getParameterByName("complexity") || 3;
        let querySeparators = getParameterByName("separators") || '#+-=!'

        let bodyContent = ''

        bodyContent += `
        <style>
          body {
            background-color: hsl(240deg, 6%, 14%);
          }
        </style>
        <script type="text/javascript">
          function copyPasswordToClipboard(id) {		
          //	Copy the text inside the text field
            let content = document.getElementById(\`\${id}\`).innerText

          //	Apply it to the clipboard
            navigator.clipboard.writeText(content);
          
          //	Alert user
          //	alert("Copied the text: " + content);
          }
        </script>`

        bodyContent += `<div class="fs-4 text-center mt-3">${getRandomResponse()}</div>
          <div class="text-center py-3"><div class="text-wrap text-break" id="passwordOut1">${passwdGen({complexity: queryComplexity, separators: querySeparators})}</div>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button id="back" data-toggle="tooltip" data-html="true" title="Pass Copied!" data-trigger="click" class="my-3 btn btn-secondary" onclick="location.href='/embed'">Edit</button>
              <button id="passwordOut1Button" data-toggle="tooltip" data-html="true" title="Pass Copied!" data-trigger="click" class="my-3 btn btn-secondary" onclick="copyPasswordToClipboard('passwordOut1')">Copy to Clipboard</button>
              <button id="refresh" data-toggle="tooltip" data-html="true" title="Pass Copied!" data-trigger="click" class="my-3 btn btn-primary" onclick="history.go(0);">Regenerate</button> 
            </div>
          </div>
          `
        
        bodyContent += `
          </div>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script type="text/javascript">
          $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          });
        </script>`

          return rawHtmlResponse(`
          ${headCode}
            </head>
            <body>
              <div class="text-white">
                <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                  ${bodyContent}
                </div>
              </div>
            </body>
          </html>
        `)
      }
    }
    const redirectURL = await env.NAMESPACE.get(pathname);
    if (!redirectURL) {
      return new Response("Not Found.", { status: 404 });
    }
    return Response.redirect(redirectURL, 301);
  }
};

export {
  src_default as default
};
