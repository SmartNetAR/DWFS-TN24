
window.addEventListener('load', function(){
    const $buttons = document.querySelectorAll('button');
    const $span = document.querySelector('span');

    for (const $button of $buttons)
    {
        console.log($button.name)

        $button.addEventListener('click', handleClickButton)
        
    }

    $span.addEventListener('click', toBlack)
});

function handleClickButton(event)
{
    toBlack.bind(this)(event);
    toColorWhite.bind(this)(event);
}

// cambiar el fondo del elemento a negro // function
function toBlack(event)
{
    console.log("event to black", event.target.name)
    this.style.backgroundColor = 'black';
}

// cambiar el color del texto a blanco
function toColorWhite(event)
{
    console.log("event to color white", event.target.name)
    this.style.color = 'white';
}

