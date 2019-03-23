const animer = () => {
    let tl = anime.timeline({
        // easing: 'easeInOutExpo',
        duration: 750
    });
    tl.add({
        targets: '.main',
        margin: 15,
    })
    anime({
        targets: '.child',
        translateX: [
            { value: 38, duration: 450, delay: 500 }
        ],
        easing: 'easeInOutExpo'
    });
    anime({
        targets: '.child1',
        translateY: [
            { value: 38, duration: 450, delay: 500 }
        ],
        easing: 'easeInOutExpo'
    });
    if(window.innerWidth < 1024) {
        tl.add({
            targets: '.content',
            opacity: [
                { value: 1, duration: 450, delay: 500 }
            ],
            easing: 'easeInOutExpo'
        })
    }else {
        anime({
            targets: '.content',
            opacity: [
                { value: 1, duration: 450, delay: 500 }
            ],
            easing: 'easeInOutExpo'
        });
    }
    anime({
        targets: '.image',
        opacity: [
            { value: 1, duration: 450, delay: 500 }
        ],
        easing: 'easeInOutExpo'
    });
}

const httptext = async () => {
    let context = document.querySelectorAll('#context')[0]
    $.ajax({
        url: "https://api.imjad.cn/hitokoto/?encode=jsc&charset=utf-8&length=30",
        dataType: "jsonp",
        async: true,
        jsonp: "callback",
        jsonpCallback: "hitokoto",
        success: function(result) {
            context.innerHTML = result.hitokoto
            animer()
        },
        error: function() {
            context.innerHTML = '少女祈祷中～～～'
            animer()
        }
    });
}

window.onload = () => {
    httptext()
}