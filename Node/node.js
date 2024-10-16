// менеджер NVM для переходц між різними версіями ноди
Для MacOS и Linux: https://gitwhub.com/nvm-sh/nvm

Для Windows: https://github.com/coreybutler/nvm-windows
Для Windows: https://github.com/nvm-sh/nvm


// nvm install <version> [arch]: Версія може бути конкретною версією, «останньою» для останньої поточної версії або «lts» для останньої версії LTS. Додатково вкажіть, чи інсталювати 32- або 64-розрядну версію (за замовчуванням для системної арки). Встановіть [arch] на "all", щоб інсталювати 32-ТА 64-розрядні версії. Додайте --insecureв кінець цієї команди, щоб обійти перевірку SSL віддаленого сервера завантаження.
// nvm use <version> [arch]: Перейти на використання вказаної версії. За бажанням використовуйте latest, ltsабо newest. newestце остання встановлена ​​версія. Додатково вкажіть 32/64-розрядну архітектуру. nvm use <arch>продовжить використовувати вибрану версію, але перейде в режим 32/64 біт. Щоб отримати інформацію про використання useв певному каталозі (або за допомогою .nvmrc), зверніться до проблеми №16 .
// nvm list [available]: Перелік інсталяцій node.js. Введіть availableу кінці, щоб відобразити список версій, доступних для завантаження.
// nvm on: Увімкнути керування версіями node.js.
// nvm off: Вимкнути керування версіями node.js (нічого не видаляє).
// nvm arch [32|64]: Показати, чи працює вузол у 32- або 64-бітному режимі. Укажіть 32 або 64, щоб замінити архітектуру за замовчуванням.
// nvm check: Перевірте процес NVM4W на наявність відомих проблем.
// nvm current: Показати активну версію.
// nvm proxy [url]: установіть проксі для завантажень. Залиште [url]поле порожнім, щоб побачити поточний проксі. [url]Щоб видалити проксі, встановіть значення «немає».
// nvm uninstall <version>: видаліть певну версію.
// nvm root <path>: Встановіть каталог, де nvm має зберігати різні версії node.js. Якщо <path>не встановлено, буде показано поточний корінь.
// nvm version: відображає поточну запущену версію NVM для Windows.
// nvm node_mirror <node_mirror_url>: Встановіть дзеркало вузла. Люди в Китаї можуть використовувати https://npmmirror.com/mirrors/node/
// nvm npm_mirror <npm_mirror_url>: Встановіть дзеркало npm. Люди в Китаї можуть використовувати https://npmmirror.com/mirrors/npm/