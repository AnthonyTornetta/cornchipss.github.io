function tickList(id, seconds)
{
    var list = document.getElementById(id);
    if(!list)
        throw new Error('id ' + id + ' not found.');

    if(list.tagName !== 'UL' && list.tagName !== 'OL')
        throw new Error('Element with id ' + id + ' must be a ul or ol');

    var currentId = 1;
    var children = list.childNodes;    

    for(var i = 0; i < children.length; i++)
    {
        var c = children[i];

        if(c.nodeName === '#text')
            c.remove(i--); // removes those stupid list newlines
        else
        {
            c.classList.add('transparent');
            c.classList.add('fadeable');

            if(i === 0)
                c.style.display = 'inline';
        }
    }

    document.getElementById(id).style.display = 'inline';

    var tickAnimation = function()
    {
        if(currentId === children.length)
            currentId = 0;

        var prevChild = currentId === 0 ? children[children.length - 1] : children[currentId - 1];
        var child = children[currentId];

        var transitionDuration = parseFloat(getComputedStyle(child)['transitionDuration']);

        prevChild.classList.add('transparent');

        setTimeout(function()
        {
            child.style.display = 'inline';
            prevChild.style.display = 'none';

            setTimeout(function()
            {
                child.classList.remove('transparent');
                currentId++;

                setTimeout(tickAnimation, 1000 * seconds);
            }, 100);
        }, transitionDuration * 1000);
    };

    tickAnimation();
}