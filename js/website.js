const onloads = [];

var website =
{
    addOnLoad: (func) =>
    {
        onloads.push(func);
    }
};

window.addEventListener('load', () =>
{
    onloads.forEach(f => f());
});