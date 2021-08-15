const dummyMediumText = [
  "Apple pie cheesecake shortbread sweet cupcake bear claw. Shortbread lollipop croissant sweet roll shortbread. Donut tootsie roll chocolate bar bear claw jelly beans jelly. Gummi bears sesame snaps jelly beans muffin marzipan bonbon cake apple pie powder. Muffin candy jelly beans tiramisu lollipop. Gingerbread cookie tootsie roll chocolate bar lemon drops jujubes.",
  "Pastry pastry shortbread soufflé dragée jelly beans. Brownie cupcake muffin sesame snaps jelly lollipop. Bear claw jelly cake gummi bears fruitcake powder chocolate cake sweet roll. Candy canes gummi bears muffin halvah oat cake. Chocolate bar jelly cotton candy soufflé candy lollipop halvah bonbon. Cheesecake powder muffin cupcake jelly beans apple pie chocolate jelly wafer. Pie cupcake topping icing oat cake pastry. Lemon drops pie jelly beans dessert cake tart. Jujubes liquorice macaroon tiramisu apple pie dragée chocolate macaroon gummies. Cotton candy jelly bear claw oat cake biscuit donut tart gummies.",
  "Jelly chocolate bar powder topping croissant. Pastry sweet donut chocolate cake dessert lemon drops sugar plum sesame snaps. Liquorice apple pie sweet liquorice candy canes candy oat cake. Dragée shortbread marshmallow toffee gummies jelly chocolate bar. Biscuit marshmallow jelly-o carrot cake bonbon cake. Fruitcake bear claw jelly beans chocolate bar chupa chups gummi bears marshmallow brownie. Soufflé gummies gummi bears brownie tootsie roll apple pie cheesecake dragée. Gummi bears dessert marshmallow croissant muffin chocolate bar chupa chups wafer apple pie.",
  "Jelly-o pie cake chupa chups carrot cake carrot cake chocolate bar powder chocolate. Topping marshmallow icing lemon drops liquorice bear claw tootsie roll jelly beans. Sweet pastry jelly beans sweet roll chupa chups pudding croissant. Dessert tart chocolate jujubes tiramisu danish caramels soufflé. Pastry sweet jelly-o sweet roll cake gummi bears. Marshmallow shortbread carrot cake caramels chocolate jelly-o cotton candy cake sweet roll.",
  "Dragée jelly soufflé jujubes sweet gingerbread pastry liquorice. Fruitcake candy canes sugar plum shortbread sweet gingerbread. Gingerbread macaroon lollipop jelly tootsie roll toffee. Jelly-o oat cake liquorice halvah cake cheesecake jelly marzipan. Donut tart gummies soufflé caramels sesame snaps bear claw dragée gummi bears. Sugar plum brownie pudding donut candy powder candy pastry. Sweet roll tiramisu marzipan wafer biscuit pastry. Lemon drops jujubes liquorice brownie wafer. Marzipan jelly beans chocolate cake chocolate cotton candy pudding fruitcake danish tiramisu.",
  "Chupa chups carrot cake tart lollipop jelly liquorice bear claw. Cotton candy marshmallow chupa chups sesame snaps candy canes dessert pudding. Topping ice cream croissant jelly beans chocolate bar fruitcake wafer tart. Oat cake bonbon ice cream wafer sesame snaps pudding danish icing marshmallow. Topping toffee macaroon macaroon donut biscuit tart. Cupcake cake muffin bear claw cheesecake marshmallow. Donut cake chupa chups jelly-o sugar plum pie lemon drops jelly-o chupa chups.",
  "Dessert chupa chups candy sweet apple pie sweet cake. Sugar plum biscuit jujubes bonbon wafer. Cake toffee lollipop biscuit cookie. Candy canes pie croissant muffin jelly-o marzipan jujubes jujubes tiramisu. Wafer cheesecake tiramisu carrot cake jelly-o jelly-o chocolate cake. Jelly-o tootsie roll marzipan lemon drops sugar plum cookie chocolate chocolate caramels.",
  "Pie tootsie roll marshmallow liquorice halvah halvah candy canes. Tiramisu apple pie dessert jujubes marzipan. Cotton candy soufflé dessert pie jujubes powder toffee. Toffee candy canes bonbon jelly candy. Tiramisu apple pie toffee gummies topping jelly beans jujubes danish ice cream. Marshmallow croissant cheesecake dessert sweet lemon drops tootsie roll tootsie roll soufflé.",
  "Cake pie powder toffee caramels. Chocolate bar pudding tart soufflé cupcake cotton candy. Lemon drops topping chupa chups ice cream lemon drops. Shortbread dessert cheesecake pudding bonbon wafer cotton candy toffee biscuit. Danish gingerbread lemon drops croissant topping sweet roll croissant. Fruitcake gummies gummi bears sweet biscuit candy jelly-o cake. Chupa chups candy donut gummies cake halvah biscuit. Sesame snaps cupcake biscuit lollipop gummies soufflé lollipop muffin.",
];

const dummyShortText = [
  "Gingerbread donut macaroon topping oat cake gummi bears. Fruitcake tiramisu gummies tiramisu cupcake chupa chups apple pie chocolate bar cake. Dragée pudding gingerbread jelly beans cheesecake pudding tiramisu.",
  "Pudding donut chocolate bar candy canes croissant toffee. Cake biscuit jelly beans chocolate cake wafer marzipan gummies. Lemon drops sesame snaps jelly toffee lollipop. Wafer jujubes cake powder donut fruitcake.",
  "Tart muffin shortbread marshmallow brownie chupa chups chocolate topping. Chupa chups chupa chups danish apple pie lollipop sweet candy canes cake. Gummies cheesecake soufflé lollipop marzipan apple pie lollipop oat cake. Cotton candy chocolate bar fruitcake croissant tiramisu.",
  "Marzipan gummies cheesecake sweet gummi bears muffin fruitcake. Biscuit danish bonbon jujubes icing pudding. Marshmallow carrot cake marzipan chocolate cake sweet.",
  "Carrot cake oat cake pie topping danish chupa chups cheesecake. Candy canes muffin apple pie fruitcake donut shortbread marshmallow liquorice apple pie. Brownie pie chocolate cake pastry soufflé chupa chups oat cake tootsie roll gummi bears.",
  "Biscuit brownie shortbread bear claw jelly-o oat cake donut sweet tootsie roll. Candy sweet shortbread gingerbread pie muffin gummi bears fruitcake. Chupa chups oat cake dragée icing bear claw bear claw ice cream brownie sweet. Danish oat cake topping halvah croissant brownie liquorice brownie tiramisu.",
  "Powder donut jelly gummi bears chocolate bar marshmallow wafer oat cake. Cake soufflé danish dragée tootsie roll. Jelly-o tart tart cheesecake gummies caramels jujubes. Carrot cake chupa chups cake bear claw gingerbread oat cake.",
  "Sweet roll fruitcake topping sugar plum marshmallow lollipop candy cheesecake jelly-o. Biscuit bear claw tart shortbread gummi bears cake gummi bears cheesecake sweet roll. Wafer sweet dragée bonbon liquorice macaroon chocolate bar powder cupcake.",
  "Sweet roll caramels soufflé marshmallow macaroon powder. Jelly beans pudding carrot cake lollipop dragée shortbread marshmallow. Bear claw cake chocolate bar apple pie toffee pastry cake. Shortbread liquorice brownie croissant chupa chups dragée.",
];

const dummyLargeText = [
  "Powder apple pie marshmallow cake cupcake lollipop carrot cake topping dessert. Candy dragée ice cream tootsie roll caramels liquorice icing icing. Tootsie roll danish biscuit marzipan sugar plum lemon drops apple pie gummies. Brownie shortbread toffee pudding chupa chups pudding chupa chups gingerbread. Carrot cake cupcake sweet roll cheesecake sweet roll toffee jelly beans fruitcake. Tart chupa chups cookie halvah halvah. Liquorice lollipop cake carrot cake cookie marshmallow muffin toffee pastry. Danish sweet sugar plum gummies chupa chups oat cake cake marshmallow sweet. Macaroon sweet roll sesame snaps chocolate cake bear claw oat cake sesame snaps biscuit. Fruitcake topping pie marzipan bonbon brownie pudding macaroon. Bonbon bear claw jelly-o icing ice cream brownie soufflé. Sesame snaps ice cream caramels tart halvah chupa chups gummi bears chocolate cake tootsie roll. Muffin sesame snaps chocolate fruitcake liquorice chocolate.",
  "Cake wafer jelly cupcake caramels danish chocolate. Dragée jujubes topping croissant pudding candy canes lemon drops. Topping candy jelly beans toffee bonbon biscuit cookie chocolate bar tootsie roll. Cheesecake pie jujubes fruitcake cake ice cream jelly-o jujubes. Cake jujubes cotton candy gummi bears cotton candy pudding macaroon cheesecake marshmallow. Cake macaroon shortbread halvah sweet roll topping chocolate cake lollipop. Ice cream pudding biscuit muffin chocolate cake. Jujubes chocolate bar soufflé marshmallow fruitcake. Halvah chupa chups cookie jelly beans carrot cake sugar plum marzipan gummies. Carrot cake gummies ice cream muffin bonbon cake bonbon tootsie roll. Cheesecake chocolate cake tart chocolate cake biscuit gummies. Fruitcake croissant pudding cupcake cake cheesecake.",
  "Jelly-o cake shortbread toffee powder chocolate cake wafer. Candy pie soufflé jelly-o cake muffin halvah danish. Toffee marzipan cheesecake fruitcake jujubes. Toffee icing oat cake tootsie roll danish dessert chocolate bar bear claw gummies. Biscuit brownie icing jelly beans dessert oat cake bear claw. Gummi bears chocolate cheesecake chocolate bar muffin brownie liquorice brownie bonbon. Bonbon cupcake caramels tart icing marzipan candy canes bonbon. Croissant liquorice cake marshmallow powder cake chocolate bar marshmallow. Topping candy dessert candy sugar plum candy brownie. Chocolate liquorice carrot cake jujubes powder croissant. Carrot cake cotton candy jelly-o jelly-o shortbread cookie. Macaroon cake ice cream jelly pie icing jelly-o tart. Cake ice cream cookie chupa chups wafer jujubes toffee ice cream candy canes.",
  "Bonbon pastry apple pie jelly-o icing chupa chups dessert. Halvah pudding chupa chups jelly beans cookie. Gummies donut gingerbread liquorice liquorice cheesecake liquorice cake gummies. Caramels halvah bonbon jujubes tiramisu cheesecake halvah jelly caramels. Wafer bonbon carrot cake biscuit halvah halvah bonbon jelly. Pudding macaroon jelly gummies lemon drops. Pastry powder pie jelly beans danish macaroon cheesecake lollipop. Danish sweet roll caramels candy jujubes croissant bonbon apple pie. Halvah dessert halvah biscuit shortbread gummi bears. Croissant toffee fruitcake jelly-o bear claw gingerbread. Ice cream wafer pie bear claw topping muffin soufflé toffee cake. Chocolate cake lemon drops macaroon carrot cake soufflé marzipan gummies jelly-o. Cookie soufflé chocolate wafer candy canes.",
  "Cupcake halvah donut soufflé cotton candy dragée lemon drops sesame snaps cheesecake. Topping lollipop halvah danish toffee carrot cake jelly gummies apple pie. Caramels jelly beans caramels chocolate chupa chups fruitcake fruitcake carrot cake. Marshmallow sugar plum topping toffee cupcake biscuit bonbon jelly-o. Icing cake bear claw lollipop marshmallow jelly donut candy canes candy canes. Toffee macaroon marzipan sesame snaps tart sweet roll caramels dragée. Pastry cupcake gingerbread tiramisu powder pie jelly beans donut donut. Dessert soufflé oat cake wafer pie icing powder jelly cake. Candy ice cream danish topping lollipop caramels topping toffee bear claw. Bonbon powder shortbread cookie brownie ice cream. Sweet sesame snaps bear claw brownie toffee cake chocolate. Fruitcake candy canes fruitcake chocolate bar gummies bear claw. Tootsie roll fruitcake carrot cake biscuit bear claw chupa chups sweet. Topping liquorice soufflé cupcake halvah cake.",
  "Sesame snaps apple pie cotton candy marzipan powder cotton candy biscuit. Chocolate cake marzipan donut bonbon sesame snaps marzipan. Chocolate jelly-o tootsie roll chocolate cake dessert dessert halvah. Pudding chupa chups pastry pastry jujubes biscuit jelly danish. Tiramisu donut dessert candy canes sweet roll soufflé. Donut dragée halvah sweet roll marzipan shortbread sesame snaps chupa chups. Bonbon gummi bears pastry ice cream marzipan toffee fruitcake. Sugar plum cheesecake powder sugar plum pie ice cream pastry fruitcake. Croissant oat cake lemon drops caramels candy gummi bears candy. Marzipan oat cake marshmallow chupa chups macaroon croissant ice cream. Pudding danish cake sweet gingerbread dessert pie icing. Biscuit tiramisu cupcake candy canes tiramisu jelly beans. Gummi bears chocolate danish lollipop cupcake chocolate bar. Pastry cotton candy tootsie roll marshmallow chupa chups donut.",
  "Caramels sesame snaps tootsie roll candy croissant bonbon sesame snaps jelly-o. Lollipop jelly beans dessert liquorice liquorice icing shortbread pie cookie. Caramels chocolate bar caramels sugar plum biscuit cotton candy chupa chups. Bear claw soufflé wafer marshmallow topping. Pastry biscuit brownie toffee dragée icing cake. Cupcake chocolate bar shortbread cake powder ice cream gingerbread gummies apple pie. Liquorice candy halvah jujubes pudding brownie sweet roll marzipan shortbread. Lollipop ice cream icing gummies cake chocolate chocolate cake shortbread. Brownie brownie candy canes lollipop sesame snaps candy pastry. Lollipop sesame snaps tiramisu carrot cake pie oat cake. Lemon drops gummies biscuit pie biscuit. Candy canes sweet muffin carrot cake wafer chupa chups. Marzipan danish gummies shortbread halvah soufflé gingerbread donut liquorice. Cake pie donut biscuit shortbread.",
  "Apple pie candy donut cookie croissant bonbon dragée. Gingerbread bear claw croissant muffin croissant powder icing chocolate bar cookie. Fruitcake pastry jujubes cake toffee carrot cake carrot cake. Sugar plum croissant jelly beans powder shortbread carrot cake cotton candy ice cream chocolate. Sugar plum oat cake macaroon tart lemon drops cookie biscuit sweet roll wafer. Biscuit gummi bears lollipop marzipan cookie apple pie apple pie macaroon. Wafer sweet roll danish chocolate cake brownie danish ice cream marshmallow pudding. Cheesecake donut chupa chups sweet cotton candy. Cake bear claw danish brownie biscuit candy canes candy canes tiramisu pie. Liquorice icing candy chocolate cake pie sesame snaps cake. Liquorice chupa chups donut pie lemon drops cheesecake. Jelly-o topping brownie apple pie lollipop gingerbread cheesecake sugar plum. Cupcake cotton candy powder jelly tootsie roll cake gingerbread. Pie jujubes caramels jelly marshmallow caramels chocolate bar.",
  "Lemon drops lollipop dessert jelly-o sweet dessert. Topping donut tootsie roll soufflé brownie tootsie roll cheesecake toffee halvah. Sweet roll bear claw fruitcake chocolate bar sweet. Cupcake sesame snaps bear claw marshmallow danish sweet roll cake fruitcake fruitcake. Gingerbread cheesecake marshmallow halvah wafer dessert. Gummies gummi bears cake cake dragée pudding. Cookie halvah croissant halvah bonbon marzipan danish oat cake. Wafer dragée oat cake chocolate icing. Carrot cake cotton candy tootsie roll candy danish lollipop cotton candy cake. Brownie tootsie roll sesame snaps sweet roll sweet roll jelly-o. Soufflé tart topping apple pie halvah chocolate cake tiramisu shortbread. Marshmallow sesame snaps pudding macaroon candy canes. Sesame snaps jelly-o bear claw apple pie liquorice ice cream. Lollipop tiramisu fruitcake sugar plum sugar plum jujubes.",
];

const titleText = document.getElementById('title_text');
const form = document.getElementById("form");
const amount = document.getElementById("amount");
const short = document.getElementById("short");
const large = document.getElementById("large");
const result = document.getElementById("result");
const text = document.getElementById("text");
const loader = document.getElementById("loader");

function showDummyText() {
  loader.style.display = "none";
  text.style.display = "block";
  titleText.style.marginTop = '5%';
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  loader.style.display = "block";
  text.style.display = "none";
  setTimeout(showDummyText, 1000);

  //For Short
  if (short.checked == true) {
    const shortValue = Number(amount.value);
    const random = Math.floor(Math.random() * dummyShortText.length);
    //for empty, negative and greater than 9
    if (isNaN(shortValue) || shortValue <= 0 || shortValue > 9) {
      result.innerHTML = `<p>${dummyShortText[random]}</p>`;
    } else {
      const sliceShortArry = dummyShortText.slice(0, shortValue);
      const finalShortArray = sliceShortArry
        .map(function (singleShortDummy) {
          return `<p>${singleShortDummy}</p>`;
        })
        .join("");
      //display final short dummy text
      result.innerHTML = finalShortArray;
    }
  }else if (large.checked == true) {
    const largeValue = Number(amount.value);
    const random = Math.floor(Math.random() * dummyLargeText.length);
    //for empty, negative and greater than 9
    if (isNaN(largeValue) || largeValue <= 0 || largeValue > 9) {
      result.innerHTML = `<p>${dummyLargeText[random]}</p>`;
    } else {
      const sliceLargeArry = dummyLargeText.slice(0, largeValue);
      const finalLargeArray = sliceLargeArry
        .map(function (singleLargeDummy) {
          return `<p>${singleLargeDummy}</p>`;
        })
        .join("");
      //display final short dummy text
      result.innerHTML = finalLargeArray;
    }
  } else {
    //For Medium
    const mediumValue = Number(amount.value);
    const random = Math.floor(Math.random() * dummyMediumText.length);
    //for empty, negative and greater than 9
    if (isNaN(mediumValue) || mediumValue <= 0 || mediumValue > 9) {
      result.innerHTML = `<p>${dummyMediumText[random]}</p>`;
    } else {
      const sliceMediumArry = dummyMediumText.slice(0, mediumValue);
      const finalMediumArray = sliceMediumArry
        .map(function (singleMediumDummy) {
          return `<p>${singleMediumDummy}</p>`;
        })
        .join("");

      //display final medium dummy text
      result.innerHTML = finalMediumArray;
    }
  }
});

const copyButton = document.getElementById("btn-copy");

 // use clipboard api moving forward
 copyButton.addEventListener("click", async function (event) {
  const result = document.getElementById("result").textContent;
    await navigator.clipboard.writeText(result);
    

    copyAlert("Text Copied to Clipboard");
});

function copyAlert(error) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-success text-center';

  alertDiv.appendChild(document.createTextNode(error));

  const alert_div = document.querySelector('.alert-div');
  const heading = document.querySelector('.heading');

  alert_div.insertBefore(alertDiv, heading);
  setTimeout(clearAlert, 1300);
}

function clearAlert(){
  document.querySelector('.alert').remove();
}
