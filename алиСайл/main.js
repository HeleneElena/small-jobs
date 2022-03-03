const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = document.querySelector('.input__cities-from'),
      dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
      dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
      inputCitiesTo = document.querySelector('.input__cities-to'),
      inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Moskau', 'Regensburg', 'Minich', 'Berlin', 'Leipzig', 'Dresden', 'Kemerovo', 'Novosibirsk',
               'Prag', 'Barselona'];

  // 
  const getData = () => {
      const request = new XMLHttpRequest();   // объект запроса

      request.open('GET', url);

      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
            console.log(request.response);
        if (request.status === 200) {
            
        } else {
            console.error(request.status);
        }
      });
      request.send();
  };


// функция поиск городов
const showCity = (input, list) => {
        list.textContent = '';

        if (input.value !== '') {

            const filterCity = city.filter((item) => {
                const fixItem = item.toLowerCase();
                return fixItem.includes(input.value.toLowerCase());
            });
            filterCity.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('dropdown__city');
                li.textContent = item;
                list.append(li);
                console.log(li);
            });
        } 
    };

    const selectCity = (event, input, list) => {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'li') {
            input.value = target.textContent;
            list.textContent = '';
        }
    };

// обработчики событий
    inputCitiesFrom.addEventListener('input', () => {
        showCity(inputCitiesFrom, dropdownCitiesFrom);
    });
        
    inputCitiesTo.addEventListener('input', () => {
        showCity(inputCitiesTo, dropdownCitiesTo);
    });

    dropdownCitiesFrom.addEventListener('click', (event) => {
          selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
    });

    dropdownCitiesTo.addEventListener('click', (event) => {
          selectCity(event, inputCitiesTo, dropdownCitiesTo);
    });

  getData();