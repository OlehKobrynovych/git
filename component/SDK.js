(function(global) {
    // Створюємо об'єкт SDK
    const ModalSDK = {
        modalContainer: null,

        init: async function(apiUrl) {
            try {
                // Виконуємо запит на сервер для отримання HTML контенту
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const content = await response.text();

                // Створюємо контейнер для модального вікна
                this.modalContainer = document.createElement('div');
                this.modalContainer.innerHTML = content;

                // Додаємо стилі для модального вікна
                this.modalContainer.style.position = 'fixed';
                this.modalContainer.style.top = '0';
                this.modalContainer.style.left = '0';
                this.modalContainer.style.width = '100%';
                this.modalContainer.style.height = '100%';
                this.modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Напівпрозорий чорний фон
                this.modalContainer.style.display = 'flex';
                this.modalContainer.style.justifyContent = 'center';
                this.modalContainer.style.alignItems = 'center';
                this.modalContainer.style.zIndex = '1000000'; // Забезпечує, що модальне вікно буде поверх всього іншого контенту

                // Додаємо контейнер на сторінку
                document.body.appendChild(this.modalContainer);

                // Виконуємо JS код з отриманого контенту
                const scriptTags = this.modalContainer.getElementsByTagName('script');
                for (let i = 0; i < scriptTags.length; i++) {
                    eval(scriptTags[i].textContent);
                }

            } catch (error) {
                console.error('Помилка при завантаженні модального вікна:', error);
            }
        },

        close: function() {
            if (this.modalContainer) {
                document.body.removeChild(this.modalContainer);
                this.modalContainer = null;
            } else {
                console.warn('Немає модального вікна для закриття');
            }
        }
    };

    // Експортуємо об'єкт SDK в глобальну область видимості
    global.ModalSDK = ModalSDK;

})(window);


///////////HTML///////////////////////////
<div id="modal-container" style="width: 300px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); overflow: hidden; position: relative;">
    <div style="position: relative; height: 200px; overflow: hidden;">
        <img src="https://your-server.com/path/to/image.jpg" alt="Image description" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div style="padding: 16px; text-align: center;">
        <h3 style="margin: 0; font-size: 18px;">skdflsdklfklsd</h3>
        <p style="margin: 4px 0; color: #666;">lslfksldfimfd</p>
        <div style="display: flex; align-items: center; justify-content: center; margin-top: 12px;">
            <div style="background-color: #f1f1f1; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-right: 10px;">
                R
            </div>
            <div>
                <p style="margin: 0; font-weight: bold;">lsdfsdf</p>
            </div>
        </div>
    </div>
    <div style="padding: 16px; text-align: center;">
        <button id="go-button" style="background-color: #007bff; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-size: 16px; cursor: pointer;">
            Go!
        </button>
    </div>
    <div id="close-button" style="display: none; position: absolute; top: 10px; right: 10px; background-color: #ff0000; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer;">
        &times;
    </div>
</div>

<script>
    // Логіка для кнопки Go
    document.getElementById('go-button').addEventListener('click', function() {
        // Відправка запиту на сервер про перехід користувача
        fetch('https://your-server.com/api/user-clicked', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ action: 'user-clicked-go' })
        }).then(response => {
            if (response.ok) {
                // Перехід на сайт після успішної відправки запиту
                window.location.href = 'https://docs.adsgram.ai/publisher/getting-started';
            } else {
                console.error('Не вдалося відправити запит на сервер');
            }
        }).catch(error => {
            console.error('Помилка:', error);
        });
    });

    // Логіка для появи кнопки закриття через 1 секунду
    setTimeout(function() {
        document.getElementById('close-button').style.display = 'flex';
    }, 1000);

    // Логіка для кнопки закриття
    document.getElementById('close-button').addEventListener('click', function() {
        document.getElementById('modal-container').remove();
    });
</script>





///////////////////////////////////////////////
// Приклад використання:
ModalSDK.init('https://your-server.com/api/get-modal-content');

// Щоб закрити модальне вікно:
ModalSDK.close();