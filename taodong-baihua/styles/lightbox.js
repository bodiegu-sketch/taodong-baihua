// 图表点击放大 — Lightbox
(function(){
  if (document.querySelector('.lightbox')) return; // already set up

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  const img = document.createElement('img');
  lb.appendChild(img);
  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '✕';
  closeBtn.onclick = function(e){ e.stopPropagation(); lb.classList.remove('open'); };
  document.body.appendChild(closeBtn);
  document.body.appendChild(lb);

  lb.addEventListener('click', function(){ lb.classList.remove('open'); });

  document.querySelectorAll('figure').forEach(function(fig){
    fig.addEventListener('click', function(){
      const src = fig.querySelector('img');
      if (!src) return;
      img.src = src.src;
      img.alt = src.alt || '';
      lb.classList.add('open');
    });
  });

  // ESC to close
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') lb.classList.remove('open');
  });
})();
