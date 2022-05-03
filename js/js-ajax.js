let forms = document.querySelectorAll("form");
let popupWrapper = document.querySelectorAll(".popup_wrapper");
let warning = document.querySelector("#warning");
let success = document.querySelector("#success");
popupWrapper.forEach(function(popup){
    popup.addEventListener('click',function(e){
        if(e.target == this){
            this.querySelector('div').classList.remove('active')
            setTimeout(()=>{this.classList.remove('active')},300)
        }
    })
})

forms.forEach((form)=>{
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/");
        if (!formData.get('persRight')){
            warning.classList.add('active')
            setTimeout(()=>{
                warning.querySelector('.modal_warning').classList.add('active')
            },0);
            warning.querySelector('.warning_info').innerText = 'Пожалуйста, подтвердите пользовательское соглашение!';
        }
        else if(!formData.get('clientName') || !formData.get('clientPhone')){
            warning.classList.add('active')
            setTimeout(()=>{
                warning.querySelector('.modal_warning').classList.add('active')
            },0);
            warning.querySelector('.warning_info').innerText = 'Пожалуйста, заполните контактные данные!';
        }
        else if(!formData.get('g-recaptcha-response')){
            warning.classList.add('active')
            setTimeout(()=>{
                warning.querySelector('.modal_warning').classList.add('active')
            },0);
            warning.querySelector('.warning_info').innerText = 'Пожалуйста, подтвердите, что вы не робот!';
        }
        else{
            xhr.send(formData);
            xhr.onload = () => {
                if (xhr.response == "false") {
                    warning.classList.add('active')
                    setTimeout(()=>{
                        warning.querySelector('.modal_warning').classList.add('active')
                    },0);
                    warning.querySelector('.warning_info').innerText = 'Произошла ошибка!';
                } else if (xhr.response == "captch") {
                    warning.classList.add('active')
                    setTimeout(()=>{
                        warning.querySelector('.modal_warning').classList.add('active')
                    },0);
                    warning.querySelector('.warning_info').innerText = 'Пожалуйста, подтвердите, что вы не робот!';
                } 
                else if(xhr.response == "true") {
                    success.classList.add('active')
                    setTimeout(()=>{
                        success.querySelector('.modal_success').classList.add('active')
                    },0);
                    if(form.classList.contains('form_modal')){
                        form.parentElement.style.display = 'none'
                    }
                }
            };
        };
    });
})