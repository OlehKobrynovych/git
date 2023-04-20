{/* <a href="viber://forward?text=Пример!">Viber</a>
<a href="whatsapp://send?text=Привет!">WhatsApp</a> */}
<a href="fb-messenger://share/?link=Пример!">Facebook Messenger</a>


function ShareButton() {
    const shareLink = 'https://example.com'; // посилання, яке ви хочете поділитися
    const onClick = () => {
      // Перевіряємо, чи додаток Telegram встановлено на пристрої
      if (/android/i.test(navigator.userAgent)) {
        window.location.href = `intent://send?text=${shareLink}#Intent;scheme=telegram;package=org.telegram.messenger;end;`;
      } else if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
        window.location.href = `tg://msg?text=${shareLink}`;
      } else {
        alert('Вам потрібно встановити додаток Telegram, щоб поділитися');
      }
      
      // Перевіряємо, чи додаток Messenger встановлено на пристрої
      if (/android/i.test(navigator.userAgent)) {
        window.location.href = `intent://send?text=${shareLink}#Intent;scheme=fb-messenger;package=com.facebook.orca;end;`;
      } else if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
        window.location.href = `fb-messenger://share?link=${shareLink}`;
      } else {
        alert('Вам потрібно встановити додаток Messenger, щоб поділитися');
      }
      
      // Перевіряємо, чи додаток Viber встановлено на пристрої
      if (/android/i.test(navigator.userAgent)) {
        window.location.href = `intent://send?text=${shareLink}#Intent;scheme=viber;package=com.viber.voip;end;`;
      } else if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
        window.location.href = `viber://forward?text=${shareLink}`;
      } else {
        alert('Вам потрібно встановити додаток Viber, щоб поділитися');
      }
    };
  
    return <button onClick={onClick}>Поділитися</button>;
  }



//   ========================================================

onCopyToClipboard(value) { 
    if (navigator.clipboard && navigator.clipboard.writeText) { 
        this.copyToClipboardMain(value) 
    } else { 
        this.copyToClipboardReserve(value); 
    } 
}, 

// this approach not fully cross browser 
copyToClipboardMain(linkToCopy) { 
    if (linkToCopy) { 
        navigator.clipboard.writeText(linkToCopy).then(function() { 
            console.log('Async: Copying to clipboard was successful!'); 
        }, function(err) { 
            console.error('Async: Could not copy text: ', err); 
        }); 
    } 
}, 

// this approach is not recommended 
copyToClipboardReserve(linkToCopy) { 
    if (linkToCopy) { 
        this.appendTempTextarea(linkToCopy); 

        try { 
            document.execCommand('copy'); 
        } catch (err) { 
            console.log('Oops, unable to copy'); 
        } 
    } 
}, 

appendTempTextarea(linkToCopy) { 
    if (linkToCopy) { 
        const textarea = document.createElement('textarea'); 
        textarea.className = 'temp-textarea'; 
        textarea.style.opacity = '0'; 
        document.body.append(textarea); 

        const tempInput = document.querySelector('.temp-textarea'); 
        tempInput.value = linkToCopy; 
        tempInput.select(); 
        tempInput.focus(); 

        setTimeout(() => { 
            tempInput.remove(); 
        }, 0); 
    } 
},
onCopyToClipboard(value)

// де value - це дані які ти хочеш щоб збереглися в памяті
  