
/*import data from './data.json' assert {type: 'json'}; */
loadInfomation('daily');
async function loadInfomation(id){
  let bgColors=[
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
  ];
  const response = await fetch('data.json');
  let timeframes;
  const data = await response.json();
  let secondSection = document.querySelector('.second-section');
  if(id == 'daily' ){
  timeframes = data.map(item=> item.timeframes.daily);
  }
  if(id == 'weekly'){
    timeframes = data.map(item=> item.timeframes.weekly);
  }
  if(id == 'monthly'){
    timeframes = data.map(item=> item.timeframes.monthly);
  }

  secondSection.innerHTML= '';
  data.forEach((element,index)=>{
    let title = element.title;
    if(title == 'Self Care') title= 'Self-care';
    secondSection.innerHTML += `
    <div class="card">
    <div class="card__background" style="background-color: ${bgColors[index]};">
      <img class="card__image" src="./images/icon-${title.toLowerCase()}.svg" alt="">

    </div>
    <div class="card__details">
      <div class="card__activity">
        <p class="card__title">${title}</p>
        <img class="card__image" src="./images/icon-ellipsis.svg" alt="three dots">
      </div>
      <div class="card__hours">
        <p class="card__hour">${timeframes[index].current}</p>
        <p class="card__previous">Previous - ${timeframes[index].previous}hrs</p>

      </div>


    </div>

  </div>

    `;
})
}
