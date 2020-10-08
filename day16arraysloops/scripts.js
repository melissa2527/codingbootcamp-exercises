
// TRAIN DEPARTURES - EXERCISE 2
// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];
// for (let i = 0; i < departures.length; i++) {
// const time_convert = (departures) => {
//         let hours = Math.floor(departures / 60);
//         let minutes = departures % 60;
//         return hours + ":" + minutes

        
//     }
// }
// console.log(time_convert(i))
// TRAIN LEVEL 1 - COMPLETE
// const trainTime = document.querySelector('.schedule');
// departures.forEach((time) => {
//         let hours = Math.floor(time / 60);
//         let minutes = Math.floor(time % 60);
       

//  trainTime.innerHTML += ` <li>${hours}:${minutes}</li>`  
// })

// TRAIN LEVEL 2
const departures = [ 
  {
    time: { hours: 8, minutes: 14,},
    train: 'Acela Express',
    no: 2153, 
    to: 'Washington, DC',
    status: '',
    track: 2
  }, 
  {
    time: {
    hours: 8, 
    minutes: 19,},
    train: 'New Haven Line',
    no: 1541, 
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14
  }, 
  {
    time: { hours: 8, minutes: 20,},
    train: 'Shore Line East',
    no: 1606, 
    to: 'Old Saybrook',
    status: 'On Time',
    track: 12
  },
  {
    time: { hours: 8, minutes: 37,}, 
    train: 'N.E. Regional',
    no: 190, 
    to: 'Boston South Station',
    status: 'On Time',
    track: 1
  }, 
  {
    time: { hours: 8, minutes: 40,},
    train: 'Shuttle',
    no: 490,
    to: 'Springfield',
    status: 'On Time',
    track: 3
  },
  {
    time: { hours: 8, minutes: 43,},
    train: 'N.E. Regional',
    no: 95,
    to: 'Newport News',
    status: 'On Time',
    track: 2
  }, 
  {
    time: { hours: 8, minutes: 50,},
    train: 'New Haven Line',
    no: 1545,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 8
  },
  {
    time: { hours: 9, minutes: 16,},
    train: 'Shore Line East',
    no: 1610,
    to: 'Old Saybrook',
    status: 'On Time',
    track: 10
  },
  {
    time: { hours: 9, minutes: 23,}, 
    train: 'New Haven Line',
    no: 1549,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14
  },
  {
    time: { hours: 9, minutes: 36,},
    train: 'Acela Express',
    no: 2150,
    to: 'Boston-South Sta.',
    status: 'On Time',
    track: 1
  },
  {
    time: { hours: 9, minutes: 46,}, 
    train: 'New Haven Line',
    no: 1551,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 8
  },
  {
    time: { hours: 10, minutes: 13 }, 
    train: 'N.E. Regional',
    no: 170,
    to: 'Boston South Station',
    status: 'On Time',
    track: 2
  },
  {
    time: 
    { hours: 10, minutes: 25 },
    train: 'New Haven Line',
    no: 170,
    to: 'Boston South Station',
    status: 'On Time',
    track: 2    
  },
];

const tbody = document.querySelector('.schedule');
departures.forEach((row) => {
  const rowElm = document.createElement('tr')
  rowElm.innerHTML += 
      `<td class="time">${row.time.hours}:${row.time.minutes}</td>
      <td class="train">${row.train}</td>
      <td class="no">${row.no}</td>
      <td class="to">${row.to}</td>
      <td class="status">${row.status}</td>
      <td class="track">${row.track}</td>
      <td><button class="delay--button">delay</button></td>`

      const delayBtn = rowElm.querySelector('.delay--button')
      delayBtn.addEventListener('click', () => {
        rowElm.classList.toggle('row-delayed')
      })

      tbody.appendChild(rowElm)
})

