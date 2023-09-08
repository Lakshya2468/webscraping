const data =[
    {
        id:1,
        i:"images/iphone.png",
        name:"Iphone 14 Pro Max",
        price:"Rs-120000"
    },
    {
        
        id:2,
        i:"images/samsungtab.png",
        name:"Samsung S6",
        price:"Rs-80000"
    },
    {
       
        id:3,
        i:"images/Watch.png",
        name:"Boat Strome",
        price:"Rs-3000"
    },
    {
        
        id:4,
        i:"images/dell.png",
        name:"HP Gaming",
        price:"Rs-90000"
    },
    {
      
        id:5,
        i:"images/boathedphone.png",
        name:"Boat V5",
        price:"Rs-2000"
    },
    {
       
        id:6,
        i:"images/redmi.png",
        name:"Redmi note 12 pro",
        price:"Rs-20000"
    },
    {
      
        id:7,
        i:"images/dellgame.png",
        name:"Dell Gaming",
        price:"Rs-110000"
    },
    {
        
        id:8,
        i:"images/applewatch.png",
        name:"Apple Watch",
        price:"Rs-50000"
    }
];




const nameCard=document.querySelector('.image');

const method =()=>{
  for(let i=0;i<data.length;i++)
  {
    const div=document.createElement('div');
    div.classList.add('dd');
    div.innerHTML=`
        <img src=${data[i].i} alt="">
        <h1 class="hh" >${data[i].name}</h1>
        <p class="colour">${data[i].price}</p>
        <button type="button" class="btn btn-light" style="color: grey;">Buy Now</button>
    `
    nameCard.appendChild(div)
  }
}
method()





function getvalue(){
    const namevalue=document.querySelector('.lakshya');
    const inputValue=document.getElementById('name').value;
    console.log(inputValue);
    let filteredData = data.filter(pd => pd.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim()))
    console.log({"filteredData":filteredData})
    namevalue.innerHTML=(" ");
    for(let j=0;j<filteredData.length;j++)
    {
        // if(inputValue==filteredData[j].name)
        // {
            const div=document.createElement('div');
            div.classList.add('ssl');
            div.innerHTML=`
            <img class="size" src=${filteredData[j].i} alt="">
            <h1 class="hh">${filteredData[j].name}</h1>
            <p class="colour">${filteredData[j].price}</p>
            <button type="button" class="btn btn-light" style="color: grey;">Buy Now</button>
        `
        namevalue.appendChild(div)
        document.querySelector('.valuename').style.display = 'none';
        }
       
    }
    
// }
