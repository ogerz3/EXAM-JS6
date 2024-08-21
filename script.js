document.addEventListener('DOMContentLoaded', async function () {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  try {
      const response = await fetch('https://raw.githubusercontent.com/diyor011/apibest/master/api.json');
      const data = await response.json();
      
      renderProducts(data);

      const searchInput = document.querySelector('input');
      
      searchInput.addEventListener('input', function () {
          const filteredData = data.filter(item => item.name.toLowerCase().includes(searchInput.value.toLowerCase()));
          renderProducts(filteredData);
      });
  } catch (error) {
      console.error('Error:', error);
  }

  function renderProducts(data) {
      wrapper.innerHTML = '';
      data.forEach(item => {
          const div = document.createElement('div');
          div.className = 'card';
          div.innerHTML = `
              <img src="${item.pic}" alt="${item.name}"></img>
              <h1>${item.name}</h1>
              <p>${item.fulldesc}</p>
          `;
          wrapper.appendChild(div);
      });
      document.body.append(wrapper);
  }
});
