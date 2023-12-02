function copyText (obj) {
    let id = obj.id;
    id = id.toString().slice(-1);
    id = 'code-text-' + id;
    let text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(function() {
        new Noty({
            type: 'success',
            timeout: 1500,
            text: 'Вы скопировали код в буфер обмена!',
        }).show();
        console.log('Текст успешно скопирован в буфер обмена');
    }, function(err) {
        console.error('Произошла ошибка при копировании текста: ', err);
    });
};