// Сделал название переменных 
function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
  // Подключаю условия при которых кнопка будет работать
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Показать больше";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Показать меньше";
      more.style.display = "inline";
    }
  }
