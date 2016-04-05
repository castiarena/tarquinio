var app = {
    init: function(){
        (function(win, doc){

            var gmap = new GMap({
                content: 'gmap',
                api:'AIzaSyC7fs5VBYtlQ7ZRK2dLFyPBBii-RNHOee8',
                libraries: 'places',
                position: { lat:-34.4207, lng:-58.585 }
            });

            console.log(gmap);
            var banner = doc.querySelector('.bg-banner');
            var left = doc.querySelector('.carousel-direction-left');
            var right = doc.querySelector('.carousel-direction-right');

            var action = function(){
                var clases = banner.className,
                    add = '';
                if(clases.match('banner1')){
                    add = ' bg-banner2';
                }else if(clases.match('banner2')){
                    add = ' bg-banner1';
                }

                banner.className = banner.className.replace(' bg-banner2','');
                banner.className = banner.className.replace(' bg-banner1','');
                banner.className = banner.className + add;
            };
            left.addEventListener('click',action);
            right.addEventListener('click',action);

        })(window,document);
    }
};

app.init();