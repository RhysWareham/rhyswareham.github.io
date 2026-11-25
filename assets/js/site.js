(function () {
  'use strict';

  var PROJECTS = window.PROJECTS || [];
  var CATEGORY = { igaming: 'iGaming', indie: 'Indie & personal', jam: 'Game jam', uni: 'University' };
  var FIRST_PAGE = 9;

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var byId = function (id) { for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) return PROJECTS[i]; return null; };

  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z"/></svg>',
    github: '<svg class="fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4.5v1.5A3.5 3.5 0 0 0 8 11M16 6h3.5v1.5A3.5 3.5 0 0 1 16 11M12 13v4M8.5 20h7M10 17h4v3h-4z"/></svg>'
  };

  /* ---------------- Year ---------------- */
  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Theme ---------------- */
  var root = document.documentElement;
  var themeBtn = $('#themeToggle');
  var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function currentTheme() {
    return root.dataset.theme || (darkQuery && darkQuery.matches ? 'dark' : 'light');
  }
  function syncThemeButton() {
    var t = currentTheme();
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    var meta = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < meta.length; i++) meta[i].setAttribute('content', t === 'dark' ? '#14120F' : '#F4EFE6');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeButton();
    });
    syncThemeButton();
    if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener('change', syncThemeButton);
  }

  /* ---------------- Nav: border on scroll, active section ---------------- */
  var nav = $('#nav');
  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window) {
    var links = {};
    $$('.nav__links a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var a = links[e.target.id];
        if (!a) return;
        if (e.isIntersecting) {
          for (var k in links) links[k].classList.remove('is-active');
          a.classList.add('is-active');
        } else {
          a.classList.remove('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['royal-rift', 'work', 'about', 'contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  function observeReveals(els) {
    if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }
  observeReveals($$('.reveal'));

  /* ---------------- Royal Rift screenshots ---------------- */
  var riftShot = $('#riftShot');
  $$('.rift__thumbs button').forEach(function (btn, _, all) {
    btn.addEventListener('click', function () {
      riftShot.src = btn.dataset.src;
      riftShot.alt = btn.dataset.alt;
      all.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
    });
  });

  /* ---------------- Royal Rift demo ---------------- */
  var DEMO = window.ROYAL_RIFT_DEMO;
  var demoBtn = $('#playDemo');
  var demoModal = $('#demoModal');
  var demoFrame = $('#demoFrame');
  function openDemo() {
    if (!DEMO) return;
    demoFrame.innerHTML = '<iframe src="' + esc(DEMO) + '" title="Royal Rift demo" allow="autoplay; fullscreen" allowfullscreen></iframe>';
    demoModal.showModal();
  }
  if (DEMO && demoBtn) {
    demoBtn.disabled = false;
    $('#playDemoLabel').textContent = 'Play the demo';
    demoBtn.addEventListener('click', openDemo);
  }
  function closeDemo() { if (demoModal.open) demoModal.close(); demoFrame.innerHTML = ''; }
  $('#demoClose').addEventListener('click', closeDemo);
  demoModal.addEventListener('close', function () { demoFrame.innerHTML = ''; });
  demoModal.addEventListener('click', function (e) { if (e.target === demoModal) closeDemo(); });

  /* ---------------- Project grid ---------------- */
  var grid = $('#grid');
  var showAllBtn = $('#showAll');
  var filter = 'all';
  var expanded = false;

  function listFor(f) {
    return f === 'all' ? PROJECTS.slice() : PROJECTS.filter(function (p) { return p.category === f; });
  }

  function thumbHtml(p) {
    if (p.thumb && p.thumb.yt) {
      var id = esc(p.thumb.yt);
      return '<img src="https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg" data-fallback="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="" loading="lazy" decoding="async">';
    }
    return '<img src="' + esc(p.thumb) + '" alt="" loading="lazy" decoding="async"' + (p.pixel ? ' class="pixel-img"' : '') + '>';
  }

  function badgeHtml(p) {
    return p.badge ? '<span class="badge badge--' + esc(p.badge.tone) + '">' + esc(p.badge.label) + '</span>' : '';
  }

  function cardHtml(p, i) {
    return '<li style="animation-delay:' + Math.min(i, 8) * 40 + 'ms">' +
      '<a class="card" href="#work/' + esc(p.id) + '" aria-label="' + esc(p.title + ': ' + p.summary) + '">' +
        '<div class="card__media">' + thumbHtml(p) + badgeHtml(p) +
          (p.video ? '<span class="card__play" aria-hidden="true">' + ICON.play + '</span>' : '') +
        '</div>' +
        '<div class="card__body">' +
          '<p class="card__kicker">' + esc(p.studio) + ' · ' + esc(p.year) + '</p>' +
          '<h3 class="card__title">' + esc(p.title) + '</h3>' +
          '<p class="card__summary">' + esc(p.summary) + '</p>' +
          '<div class="card__tags">' + (p.tech || []).slice(0, 3).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '</div>' +
      '</a></li>';
  }

  // YouTube serves a tiny grey placeholder (not an error) when there's no HD thumbnail.
  function wireFallbacks(scope) {
    $$('img[data-fallback]', scope).forEach(function (img) {
      var swap = function () { if (img.dataset.fallback) { img.src = img.dataset.fallback; img.removeAttribute('data-fallback'); } };
      img.addEventListener('error', swap);
      img.addEventListener('load', function () { if (img.naturalWidth && img.naturalWidth <= 120) swap(); });
    });
  }

  function renderGrid() {
    var list = listFor(filter);
    var limited = filter === 'all' && !expanded && list.length > FIRST_PAGE;
    var shown = limited ? list.slice(0, FIRST_PAGE) : list;
    grid.innerHTML = shown.map(cardHtml).join('');
    wireFallbacks(grid);
    showAllBtn.hidden = !limited;
    if (limited) showAllBtn.textContent = 'Show all ' + list.length + ' projects';
  }

  $$('#filters button').forEach(function (btn) {
    var f = btn.dataset.filter;
    btn.querySelector('span').textContent = listFor(f).length;
    btn.addEventListener('click', function () {
      filter = f;
      $$('#filters button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      renderGrid();
    });
  });

  showAllBtn.addEventListener('click', function () {
    var firstNew = FIRST_PAGE;
    expanded = true;
    renderGrid();
    var next = grid.children[firstNew] && grid.children[firstNew].querySelector('a');
    if (next) next.focus({ preventScroll: true });
  });

  renderGrid();

  /* ---------------- Project window ---------------- */
  var modal = $('#projectModal');
  var body = $('#pBody');
  var lastFocus = null;
  var currentId = null;

  function navList() {
    // Step through what's visible in the grid's current filter, so prev/next feels natural.
    var list = listFor(filter);
    return list.some(function (p) { return p.id === currentId; }) ? list : PROJECTS;
  }

  function linkBtn(l) {
    var icon = l.kind === 'github' ? ICON.github : l.kind === 'play' ? ICON.play : ICON.link;
    var cls = l.kind === 'play' ? 'btn btn--primary' : 'btn';
    return '<a class="' + cls + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + icon + esc(l.label) + '</a>';
  }

  function projectHtml(p) {
    var list = navList();
    var idx = list.indexOf(p);
    var prev = list[(idx - 1 + list.length) % list.length];
    var next = list[(idx + 1) % list.length];

    var media = '';
    if (p.video) {
      media = '<div class="video" data-yt="' + esc(p.video) + '">' +
        '<img src="https://i.ytimg.com/vi/' + esc(p.video) + '/maxresdefault.jpg" data-fallback="https://i.ytimg.com/vi/' + esc(p.video) + '/hqdefault.jpg" alt="">' +
        '<button class="video__play" type="button" aria-label="Play the ' + esc(p.title) + ' video"><span>' + ICON.play + 'Play video</span></button>' +
      '</div>';
    } else if (p.gallery && p.gallery.length) {
      var g0 = p.gallery[0];
      media = '<div class="video video--still"><img src="' + esc(g0.src) + '" alt="' + esc(g0.alt) + '"></div>';
    }

    var meta = [
      ['Role', p.role],
      ['Made at', p.studio],
      ['When', p.when],
      ['Team', p.team],
      ['Tech', (p.tech || []).join(', ')]
    ].filter(function (m) { return m[1]; })
     .map(function (m) { return '<div><dt>' + m[0] + '</dt><dd>' + esc(m[1]) + '</dd></div>'; }).join('');

    var links = (p.links || []).map(linkBtn);
    if (p.id === 'royal-rift') {
      links.unshift(DEMO
        ? '<button class="btn btn--primary" type="button" data-action="demo">' + ICON.play + 'Play the demo</button>'
        : '<span class="btn" aria-disabled="true" style="cursor:default;box-shadow:none;border-style:dashed">Playable demo coming soon</span>');
    }

    var overview = '<section class="p-section"><h3>Overview</h3>' +
      (p.overview || []).map(function (para) { return '<p>' + para + '</p>'; }).join('') +
      (p.award ? '<p class="p-award">' + ICON.trophy + '<span>' + esc(p.award) + '</span></p>' : '') +
      (links.length ? '<div class="p-links">' + links.join('') + '</div>' : '') +
    '</section>';

    var built = p.built && p.built.length
      ? '<section class="p-section"><h3>What I built</h3><ul class="p-list">' + p.built.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></section>'
      : '';

    var galleryItems = (p.gallery || []).slice(p.video ? 0 : 1);
    var gallery = galleryItems.length
      ? '<div class="p-gallery">' + galleryItems.map(function (g) {
          return '<a href="' + esc(g.src) + '" target="_blank" rel="noopener"><img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy"' + (g.pixel ? ' class="pixel-img"' : '') + '></a>';
        }).join('') + '</div>'
      : '';

    return '<header class="p-head">' + badgeHtml(p) +
        '<h2 class="p-title" id="pTitle">' + esc(p.title) + '</h2>' +
        '<p class="p-summary">' + esc(p.summary) + '</p>' +
      '</header>' +
      media +
      '<dl class="p-meta">' + meta + '</dl>' +
      '<div class="p-cols' + (built ? '' : ' p-cols--single') + '">' + overview + built + '</div>' +
      gallery +
      '<nav class="p-foot" aria-label="More projects">' +
        '<a href="#work/' + esc(prev.id) + '" data-replace><small>← Previous</small><span>' + esc(prev.title) + '</span></a>' +
        '<a href="#work/' + esc(next.id) + '" data-replace><small>Next →</small><span>' + esc(next.title) + '</span></a>' +
      '</nav>';
  }

  function openProject(id) {
    var p = byId(id);
    if (!p) return false;
    currentId = id;
    var list = navList();
    var idx = list.indexOf(p);
    $('#pCrumb').textContent = CATEGORY[p.category] + ' · ' + (idx + 1) + '/' + list.length;
    body.innerHTML = projectHtml(p);
    body.scrollTop = 0;
    wireFallbacks(body);
    $('#pPrev').dataset.target = list[(idx - 1 + list.length) % list.length].id;
    $('#pNext').dataset.target = list[(idx + 1) % list.length].id;
    if (!modal.open) {
      lastFocus = document.activeElement;
      modal.showModal();
    }
    document.title = p.title + ' · Rhys Wareham';
    return true;
  }

  function goTo(id) { location.replace('#work/' + id); }

  function route() {
    var m = /^#work\/([\w-]+)$/.exec(location.hash);
    if (m && openProject(m[1])) return;
    closeProject();
  }

  // Tidy up after the window closes. Runs from our own close calls and from the
  // dialog's close event (Esc), whichever comes first; the second call does nothing.
  function afterClose() {
    if (currentId === null) return;
    currentId = null;
    body.innerHTML = '';
    document.title = 'Rhys Wareham · Gameplay Programmer';
    if (/^#work\//.test(location.hash)) history.replaceState(null, '', location.pathname + location.search + '#work');
    // Put focus back on the card that opened the window, if it's still there.
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  }
  function closeProject() {
    if (modal.open) modal.close();
    afterClose();
  }

  modal.addEventListener('close', afterClose);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeProject(); });
  $('#pClose').addEventListener('click', closeProject);
  $('#pPrev').addEventListener('click', function () { goTo(this.dataset.target); });
  $('#pNext').addEventListener('click', function () { goTo(this.dataset.target); });
  modal.addEventListener('keydown', function (e) {
    if (e.target.closest('input, textarea, iframe')) return;
    if (e.key === 'ArrowLeft') goTo($('#pPrev').dataset.target);
    if (e.key === 'ArrowRight') goTo($('#pNext').dataset.target);
  });

  body.addEventListener('click', function (e) {
    var play = e.target.closest('.video__play');
    if (play) {
      var box = play.parentNode;
      box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(box.dataset.yt) +
        '?autoplay=1&rel=0&modestbranding=1" title="Project video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      return;
    }
    var rep = e.target.closest('a[data-replace]');
    if (rep) { e.preventDefault(); goTo(rep.getAttribute('href').slice(6)); return; }
    if (e.target.closest('[data-action="demo"]')) { closeProject(); openDemo(); }
  });

  window.addEventListener('hashchange', route);
  route();

  /* ---------------- Copy email ---------------- */
  var toastEl = $('#toast');
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 2400);
  }
  var copyBtn = $('#copyEmail');
  copyBtn.addEventListener('click', function () {
    var email = copyBtn.dataset.email;
    var done = function () { copyBtn.textContent = 'Copied!'; toast('Email copied to your clipboard'); setTimeout(function () { copyBtn.textContent = 'Copy'; }, 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done, function () { location.href = 'mailto:' + email; });
    } else {
      location.href = 'mailto:' + email;
    }
  });

  /* ---------------- A little secret ---------------- */
  var code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  var pos = 0;
  document.addEventListener('keydown', function (e) {
    var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === code[pos] ? pos + 1 : (key === code[0] ? 1 : 0);
    if (pos === code.length) { pos = 0; cheat(); }
  });
  function cheat() {
    toast('Cheat accepted: +30 lives');
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colours = ['#DF4527', '#FFC93C', '#2E9E62', '#6C4CE0', '#FFFBF5'];
    var layer = document.createElement('div');
    layer.className = 'confetti';
    for (var i = 0; i < 90; i++) {
      var bit = document.createElement('i');
      bit.style.left = Math.random() * 100 + 'vw';
      bit.style.background = colours[i % colours.length];
      bit.style.animationDuration = 1.6 + Math.random() * 1.8 + 's';
      bit.style.animationDelay = Math.random() * 0.5 + 's';
      var s = 6 + Math.random() * 8;
      bit.style.width = bit.style.height = s + 'px';
      layer.appendChild(bit);
    }
    document.body.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 4200);
  }
})();
