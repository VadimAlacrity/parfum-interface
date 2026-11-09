let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#b45aa0";
let item = "";

const names = {
  1: "Coco Mademoiselle",
  2: "La Vie Est Belle",
  3: "Sauvage",
  4: "Boss Bottled",
};

for (let i = 1; i <= 4; i++) {
  document.getElementById("btn" + i).addEventListener("click", function () {
    if (tg.MainButton.isVisible && item === String(i)) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.setText("Информация: " + names[i]);
      item = String(i);
      tg.MainButton.show();
    }
  });
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(item);
});
