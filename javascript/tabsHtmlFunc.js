function displayTab(e,id)
    {
        const tab= document.getElementById(`${id}`);
        
        const activeTab=document.querySelector(".active___container__tab");
       
       setTimeout(()=>
       {
        activeTab.classList.remove("active___container__tab");
        tab.classList.add("active___container__tab");
       },250)
       
    }