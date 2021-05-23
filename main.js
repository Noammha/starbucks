//the animation on selected tab
function  opentab(event,movingborder,arrayOfButtons)
{
    const active = document.querySelector('.active');
    const target=event.target;
    const sizesOfButton=target.getBoundingClientRect();
    movingborder.style.transition="0.5s"
    const width = sizesOfButton.width;
    const height = sizesOfButton.height;
    const left = sizesOfButton.left + window.pageXOffset;
    const top = sizesOfButton.top + window.pageYOffset;
    movingborder.style.width=`calc(${width}px + 20px)`;
    movingborder.style.height=`${height}px`;
    movingborder.style.top=`calc(${top}px - 5px)`;
    movingborder.style.left=`calc(${left}px - 10px)`;
    active.classList.remove('active');
    target.classList.add('active')
    
    
    
}
// setting up the initial position of the moving border
function Setup()
{
    const movingBorder=document.querySelector('.moving__border');
    const mainPosition = document.querySelector('.active');
    const sizesOfButton=mainPosition.getBoundingClientRect();
    const width = sizesOfButton.width;
    const height = sizesOfButton.height;
    const left = sizesOfButton.left + window.pageXOffset;
    const top = sizesOfButton.top + window.pageYOffset;
    movingBorder.style.width=`calc(${width}px + 20px)`;
    movingBorder.style.height=`${height}px`;
    movingBorder.style.top=`calc(${top}px - 5px)`;
    movingBorder.style.left=`calc(${left}px - 10px)`;

}
//moving border on resize
function resize(movingborder)
{
    // movingBorder.style.transform='none';
    movingBorder.style.transition="0s"
    const active = document.querySelector('.active');
    const left=active.getBoundingClientRect().left+window.pageXOffset;
    const top =active.getBoundingClientRect().top+window.pageYOffset;
    movingborder.style.left=`calc(${left}px - 10px)`;
    movingborder.style.top=`calc(${top}px - 5px)`;
    
}
    function displayTab(e,id)
    {
        const tab= document.getElementById(`${id}`);
        
        const activeTab=document.querySelector(".active___container__tab");
       activeTab.classList.remove("active___container__tab");
       tab.classList.add("active___container__tab");
    }
    const movingBorder=document.querySelector(".moving__border")
    const active = document.querySelector('.active');
    const nodeOfButtons=document.querySelectorAll('.tab__button');
    const arrayOfButtons=[...nodeOfButtons];
    arrayOfButtons.forEach(arrayOfButton => {
        arrayOfButton.addEventListener("click",function (e)
        {
            opentab(e,movingBorder,arrayOfButtons);
        })
    })
    window.addEventListener("resize",function()
    {
        resize(movingBorder);
    })
    


