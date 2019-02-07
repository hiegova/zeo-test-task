# zeo-test-task - Тестовое задание на позицию Junior JavaScript Engineer
## Задача сделать Pop Up

![popup-img-example](https://github.com/hiegova/zeo-test-task/raw/master/popup-img-example.png)

Просто страница с кнопкой по нажатию на которую появляется Pop Up на полупрозрачном фоне по нажатию на фон, крестик и Cancel попап просто закрывается, по нажатию на Uninstall попап закрывается и появляется системный alert с текстом “DONE”

Попап фиксированной ширины и всегда располагается по центру экрана. Как по горизонтали так и по вертикали.
Поддержка последних версий браузеров.
Используем шрифт Open Sans

Используем HTML, CSS (или любой препроцессор), vanilla JS или jQuery (главное без jQuery UI).

Будет плюсом:
- если появление и скрытие будет анимировано;
- если будет использован task runner для сборки проекта;
- BEM

## Описание реализации
Используемые инструменты:
- Cборка проекта - **Webpack 4+**
- HTML-шаблонизатор - **Pug**
- CSS-препроцессор - **SCSS**
- Обработка сценариев - **Vanilla JS**
- Методология - **BEM**

Работа Pop Up и CSS-анимация реализованы обработкой событий *onlick* с добавлением/удалением CSS-классов.
