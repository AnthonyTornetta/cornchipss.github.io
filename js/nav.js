website.addOnLoad(() =>
{
    window.addEventListener('scroll', () =>
    {
        navUpdate();
    });

    navUpdate();

    function navUpdate()
    {
        let titlecard = document.getElementById('titlecard');

        if(titlecard !== null) 
        {
            let nav = document.getElementById('nav');

            if(nav !== null)
            {
                const navHeight = 70;
                if(window.scrollY + navHeight >= titlecard.offsetHeight)
                    nav.classList.remove('nav-transparent');
                else
                    nav.classList.add('nav-transparent');
            }
        }
    } 
});
