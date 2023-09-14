const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  const keyInfo = [
    { label: 'Key', value: event.key === ' ' ? 'Space' : event.key },
    { label: 'KeyCode', value: event.keyCode },
    { label: 'Code', value: event.code }
  ];

  insert.innerHTML = keyInfo.map(info => `
    <div class="key">
      ${info.value} 
      <small>${info.label}</small>
    </div>
  `).join('');
});
