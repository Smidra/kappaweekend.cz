    window.addEventListener('load', function () {
          var childrenOfBody = document.querySelector('body').children;
            for(var i = 0; i < childrenOfBody.length; i++){
                if(!childrenOfBody[i].classList.contains('doNotRemove')){
                    childrenOfBody[i].classList.add("transparent");
                }
            }
    })