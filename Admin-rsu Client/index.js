const menuLinks = document.querySelectorAll('.menu-link');

function handleClick(event) {
    menuLinks.forEach(link => {
        link.classList.remove('bg-success', 'text-white');
        link.classList.add('text-success'); 
    });

 
    const clickedLink = event.currentTarget;
    clickedLink.classList.add('bg-success', 'text-white');
    clickedLink.classList.remove('text-success');
}


menuLinks.forEach(link => {
    link.addEventListener('click', handleClick);
});

