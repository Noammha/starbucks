import  {opentab,Setup,resize,movingBorder,active,nodeOfButtons,arrayOfButtons} from './tabs.js';
arrayOfButtons.forEach(arrayOfButton => {
    arrayOfButton.addEventListener("click",function (e)
    {
        opentab(e,movingBorder);
    })
})
window.addEventListener("resize",function()
{
    resize(movingBorder);
})
Setup();