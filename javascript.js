
  
    const themeBtn = document.getElementById('themeToggle');
    const root = document.documentElement;
    const saved = localStorage.getItem('metaai_theme');
    if(saved==='light') root.classList.add('light');

    themeBtn.addEventListener('click',()=>{
      root.classList.toggle('light');
      localStorage.setItem('metaai_theme',root.classList.contains('light')? 'light':'dark');
      themeBtn.textContent = root.classList.contains('light')? '🌞' : '🌙';
    })
    