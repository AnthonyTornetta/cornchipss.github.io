function onewaychange(e)
{
    console.log(e);
    let returnTime = document.getElementById('two-way');

    returnTime.style.display = document.getElementById('oneway').value === 'oneway' ? 'none' : 'flex';
}

function formsubmit(e)
{
        // todo: something.
}
