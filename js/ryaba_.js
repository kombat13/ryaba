const dataURL = "https://api.myjson.com/bins/jcmhn";
const $container = $(".container");
const $button = $(".button");

$.getJSON(dataURL)
  .done(function (answer) {
    $container.append(JSON.stringify(answer));
  })

button.on("click"
function handleButton() {
  $.getJSON
  // взять данные по dataUrl, вытащить их и передать в handleData
  //  $.getJSON(dataURL, /* url */
  //    function (data) {
  //      console.log(data);
  //    }
  //  );
}
)



// function handleData(data) {
//   // кажется, какой-то из этих способов сработает
//   //const var1 = $("input[name=var1]")[0].value()
//   //const var1 = $("input[name=var1]").value()
//   //const var1 = $("input[name=var1]")[0].default()

//   // надо сделать так чтобы сообщения подменились на значения из формы
//   let text = "Здесь могла быть ваша реклама";
//   $("#result").text(text);
// }

// function init() {
//   $("#button-fetch").click(handleButton);
// }

$(document).ready(init);