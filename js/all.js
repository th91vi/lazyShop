// lazyLoading com intersectioObserver
var targets = document.querySelectorAll('img');
var lazyload = target => {
    var io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var img = entry.target;
                var src = img.getAttribute('data-img');
                img.setAttribute('src', src);
                observer.disconnect();
            }
        })
    });
    io.observe(target);
};
targets.forEach(lazyload);