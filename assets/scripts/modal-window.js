let modal = $modal({
    content: `
    
    <section>
    <h2 class="modal-title blue">о бренде</h2>
    <div class="about">
    <p class="brand__text">Vitasystem — безалкогольный негазированный низкокалорийный напиток, обогащенный
      витаминами, минералами, пребиотиками и пробиотиками. В линейке представлены 3 ярких
      фруктовых вкуса: «Малина-Шиповник», «Помело-Клубника», «Яблоко-Мята».</p>
      <p class="brand__text">Отличительной особенностью Vitasystem Immuno и Vitasystem Active являются уникальные
      пищевые волокна Fibersol®-2 IP, которые обладают питательными свойствами, нормализуют
      глюкозу и способствуют общей здоровой среде желудочно-кишечного тракта. А для тех,
      кто предпочитает следить не только за здоровьем, но и за своей фигурой, отлично подойдет
      Vitasystem Detox с пониженным содержанием сахара.</p>
     <p class="brand__text mob-none"> В современном ритме жизни очень важно укреплять иммунитет и держать себя в тонусе.
     Vitasystem не только прекрасно утоляет жажду и тонизирует, но и позволяет организму
      восполнить недостаток жизненно необходимых веществ. А уникальная витаминная формула
      помогает поддерживать высокий уровень продуктивности в течение всего дня.</p>
  </div>
  <h2 class="modal-title blue">преимущества</h2>
  <div class="pluses-box">
    <div class="pluses-box__colomn">
    <div class="pluses-box__item"><img class="pluses-box__img" src="./assets/img/save.png" alt=""/><p><span class="brand__text_bold">СОХРАНЯЕМ ВИТАМИНЫ</span> <br><span class="mob-none">Термоусадочная непрозрачная
      пленка на упаковке не пропускает
      солнечный свет и сохраняет витамины</span></p></div>
    <div class="pluses-box__item"><img class="pluses-box__img"  src="./assets/img/berry2.png" alt=""/><p><span class="brand__text_bold">НАТУРАЛЬНЫЕ
      АРОМАТИЗАТОРЫ
      И ЭКСТРАКТЫ</span><br><span class="mob-none">Используем только натуральные
        ароматизаторы: ягоды и фрукты</span></p></div>
      </div>
      <div class="pluses-box__colomn">
    <div class="pluses-box__item"><img class="pluses-box__img" src="./assets/img/lub.png" alt=""/><p><span class="brand__text_bold">БЕЗ КОНСЕРВАНТОВ</span><br><span class="mob-none">В производстве используется технология
      горячего розлива, что обеспечивает
      длительный срок хранения напитка
      без добавления консервантов</span></p></div>
    <div class="pluses-box__item"><img class="pluses-box__img" src="./assets/img/form.png" alt=""/><p><span class="brand__text_bold">ФОРМУЛА, РАЗРАБОТАННАЯ
      НЕМЕЦКИМИ СПЕЦИАЛИСТАМИ</span><br><span class="mob-none">Уникальная формула напитка
        разработана в Германии и содержит
        дефицитные группы витаминов
        и микроэлементов</span></p></div>
      </div>
  </div>
  </section>`,
});


document.addEventListener("click", function (e) {
    if (e.target.dataset.toggle === "modal") {
        modal.show();
    }
});