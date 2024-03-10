document.addEventListener("DOMContentLoaded", function() {
    var save_btn = document.getElementById('save-btn');
    var edit_btn = document.getElementById('edit-btn');
    edit_btn.addEventListener('click', function() {
        console.log('edit');
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute('disabled');
        }
        edit_btn.setAttribute('disabled', 'disabled');
        edit_btn.classList.add('btn--disabled');
        save_btn.removeAttribute('disabled');
        save_btn.classList.remove('btn--disabled');
        showInfoNotice('Ban co the chinh sua thong tin');
    })

    save_btn.addEventListener('click', function() {
        console.log('save');
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('disabled', 'disabled');
        }
        save_btn.setAttribute('disabled', 'disabled');
        save_btn.classList.add('btn--disabled');
        edit_btn.removeAttribute('disabled');
        edit_btn.classList.remove('btn--disabled');
        showSuccessNotice('Ban da luu thong tin thanh cong');
    })
});