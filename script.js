/* ── QUIZ DATA ── */
const QUIZ = [
  {
    q:{uk:'Коли вперше відзначався День Землі?', hu:'Mikor ünnepelték először a Föld Napját?'},
    opts:{uk:['1950 р.','1970 р.','1980 р.','1990 р.'], hu:['1950-ben','1970-ben','1980-ban','1990-ben']},
    ans:1,
    exp:{uk:'День Землі вперше відзначався 22 квітня 1970 року у США. Ідею запропонував сенатор Гейлорд Нельсон.', hu:'A Föld Napját először 1970. április 22-én ünnepelték az USA-ban. Az ötletet Gaylord Nelson szenátor javasolta.'}
  },
  {
    q:{uk:'Скільки відсотків води на Землі є прісною?', hu:'A Földön lévő víz hány százaléka édesvíz?'},
    opts:{uk:['3%','10%','25%','50%'], hu:['3%','10%','25%','50%']},
    ans:0,
    exp:{uk:'Лише 3% всієї води на Землі є прісною, і більша частина закрита у льодовиках та підземних запасах.', hu:'A Földön lévő víz csupán 3%-a édesvíz, és nagy része gleccserekben és föld alatti készletekben van.'}
  },
  {
    q:{uk:'На скільки градусів Цельсія потеплів клімат Землі за останнє сторіччя?', hu:'Hány Celsius-fokkal melegedett fel a Föld éghajlata az elmúlt évszázadban?'},
    opts:{uk:['0.2°C','1.1°C','3.5°C','5.0°C'], hu:['0,2°C','1,1°C','3,5°C','5,0°C']},
    ans:1,
    exp:{uk:'Середня температура Землі зросла приблизно на 1.1°C порівняно з доіндустріальним рівнем.', hu:'A Föld átlaghőmérséklete körülbelül 1,1°C-kal emelkedett az iparosítás előtti szinthez képest.'}
  },
  {
    q:{uk:'Скільки мільярдів дерев щороку втрачає планета?', hu:'Hány milliárd fát veszít el a bolygó évente?'},
    opts:{uk:['1 млрд','5 млрд','15 млрд','30 млрд'], hu:['1 milliárd','5 milliárd','15 milliárd','30 milliárd']},
    ans:2,
    exp:{uk:'Щороку планета втрачає близько 15 мільярдів дерев через вирубку, пожежі та зміни у землекористуванні.', hu:'A bolygó évente körülbelül 15 milliárd fát veszít kivágás, tűz és területhasználati változások miatt.'}
  },
  {
    q:{uk:'Скільки млн тонн пластику потрапляє в океани щороку?', hu:'Hány millió tonna műanyag kerül az óceánokba évente?'},
    opts:{uk:['1 млн т','8 млн т','20 млн т','50 млн т'], hu:['1 millió t','8 millió t','20 millió t','50 millió t']},
    ans:1,
    exp:{uk:'За оцінками науковців, щороку у світові океани потрапляє близько 8 мільйонів тонн пластикових відходів.', hu:'Tudósok becslései szerint évente körülbelül 8 millió tonna műanyaghulladék kerül a világ óceánjaiba.'}
  },
  {
    q:{uk:'На скільки відсотків скоротились популяції диких тварин з 1970 року?', hu:'Hány százalékkal csökkent a vadon élő állatok populációja 1970 óta?'},
    opts:{uk:['20%','45%','68%','90%'], hu:['20%','45%','68%','90%']},
    ans:2,
    exp:{uk:'За даними WWF, з 1970 по 2016 рік популяції хребетних тварин скоротились у середньому на 68%.', hu:'A WWF adatai szerint 1970 és 2016 között a gerincesek populációi átlagosan 68%-kal csökkentek.'}
  },
  {
    q:{uk:'Де знаходиться Карпатський біосферний заповідник?', hu:'Hol található a Kárpáti Bioszféra Rezervátum?'},
    opts:{uk:['Карпати, Польща','Закарпатська обл., Україна','Румунія, Карпати','Словаччина'], hu:['Kárpátok, Lengyelország','Kárpátalja, Ukrajna','Románia, Kárpátok','Szlovákia']},
    ans:1,
    exp:{uk:'Карпатський біосферний заповідник розташований у Закарпатській області України і є найбільшим заповідником країни.', hu:'A Kárpáti Bioszféra Rezervátum Ukrajna Kárpátalja megyéjében található, és az ország legnagyobb rezervátuma.'}
  },
  {
    q:{uk:'Який газ є основним парниковим газом, що спричиняє потепління?', hu:'Melyik gáz a fő üvegházhatású gáz, amely felmelegedést okoz?'},
    opts:{uk:['Кисень (O₂)','Азот (N₂)','Вуглекислий газ (CO₂)','Водень (H₂)'], hu:['Oxigén (O₂)','Nitrogén (N₂)','Szén-dioxid (CO₂)','Hidrogén (H₂)']},
    ans:2,
    exp:{uk:'Вуглекислий газ (CO₂) — найважливіший парниковий газ антропогенного походження. Його концентрація зросла на 50% з початку індустріалізації.', hu:'A szén-dioxid (CO₂) a legfontosabb emberi tevékenységből eredő üvegházhatású gáz. Koncentrációja 50%-kal nőtt az iparosítás kezdete óta.'}
  },
  {
    q:{uk:'Яке місто є столицею України?', hu:'Melyik város Ukrajna fővárosa?'},
    opts:{uk:['Харків','Львів','Одеса','Київ'], hu:['Harkiv','Lviv','Odessza','Kijev']},
    ans:3,
    exp:{uk:'Київ — столиця та найбільше місто України, розташоване на берегах річки Дніпро. Місто з понад 1500-річною історією.', hu:'Kijev Ukrajna fővárosa és legnagyobb városa, a Dnyipro folyó partján. Több mint 1500 éves történelemmel rendelkező város.'}
  },
  {
    q:{uk:'Скільки країн беруть участь у святкуванні Дня Землі?', hu:'Hány ország vesz részt a Föld Napja ünneplésen?'},
    opts:{uk:['Близько 50','Близько 100','Близько 193','Близько 250'], hu:['Kb. 50','Kb. 100','Kb. 193','Kb. 250']},
    ans:2,
    exp:{uk:'День Землі відзначається більш ніж у 193 країнах світу. У заходах беруть участь понад 1 мільярд людей щороку.', hu:'A Föld Napját több mint 193 országban ünneplik. Az eseményeken évente több mint 1 milliárd ember vesz részt.'}
  }
];

/* ── QUIZ STATE ── */
let qIdx = 0, qScore = 0, qAnswered = false;

function startQuiz() {
  qIdx = 0; qScore = 0; qAnswered = false;
  document.getElementById('qres').classList.remove('show');
  document.getElementById('qcard').style.display = 'block';
  document.getElementById('qprog').style.display = 'block';
  const card = document.getElementById('qcard');
  card.className = 'qcard';
  renderQ();
}

function renderQ() {
  const L = LANG;
  const q = QUIZ[qIdx];
  qAnswered = false;

  // progress bar
  document.getElementById('qbar').style.width = (qIdx / QUIZ.length * 100) + '%';
  document.getElementById('qpnum').textContent = L === 'uk'
    ? `Питання ${qIdx+1} з ${QUIZ.length}` : `${qIdx+1}. kérdés / ${QUIZ.length}-ből`;
  document.getElementById('qpscore').textContent = L === 'uk'
    ? `Очки: ${qScore}` : `Pontok: ${qScore}`;
  document.getElementById('qnum').textContent = String(qIdx+1).padStart(2,'0') + ' / ' + String(QUIZ.length).padStart(2,'0');
  document.getElementById('qtext').textContent = q.q[L];

  // reset feedback + next
  const fb = document.getElementById('qfb');
  fb.className = 'qfeedback'; fb.textContent = '';
  const nxt = document.getElementById('qnext');
  nxt.classList.remove('show');
  nxt.textContent = qIdx < QUIZ.length - 1
    ? (L === 'uk' ? 'Далі →' : 'Tovább →')
    : (L === 'uk' ? 'Результат 🏆' : 'Eredmény 🏆');

  // render options with letter badges
  const letters = ['A','B','C','D'];
  const opts = document.getElementById('qopts');
  opts.innerHTML = '';
  q.opts[L].forEach((o, i) => {
    const b = document.createElement('button');
    b.className = 'qopt';
    b.innerHTML = `<span class="qopt-letter">${letters[i]}</span>${o}`;
    b.onclick = () => selectOpt(i, b);
    opts.appendChild(b);
  });
}

function selectOpt(i, btn) {
  if (qAnswered) return;
  qAnswered = true;
  const q = QUIZ[qIdx];
  const L = LANG;
  const all = document.querySelectorAll('.qopt');
  all.forEach(b => b.disabled = true);

  if (i === q.ans) {
    btn.classList.add('correct');
    qScore++;
  } else {
    btn.classList.add('wrong');
    all[q.ans].classList.add('correct');
  }

  const fb = document.getElementById('qfb');
  fb.className = i === q.ans ? 'qfeedback ok show' : 'qfeedback bad show';
  fb.textContent = (i === q.ans
    ? (L === 'uk' ? '✅ Правильно! ' : '✅ Helyes! ')
    : (L === 'uk' ? '❌ Неправильно. ' : '❌ Helytelen. '))
    + q.exp[L];

  document.getElementById('qpscore').textContent = L === 'uk' ? `Очки: ${qScore}` : `Pontok: ${qScore}`;
  document.getElementById('qnext').classList.add('show');
}

function nextQ() {
  const card = document.getElementById('qcard');
  card.classList.add('slide-out-left');
  setTimeout(() => {
    qIdx++;
    if (qIdx >= QUIZ.length) {
      card.classList.remove('slide-out-left');
      card.style.display = 'none';
      document.getElementById('qprog').style.display = 'none';
      showResult();
    } else {
      renderQ();
      card.className = 'qcard slide-in-right';
      setTimeout(() => card.classList.remove('slide-in-right'), 420);
    }
  }, 340);
}

function showResult() {
  const L = LANG;
  const res = document.getElementById('qres');
  res.classList.add('show');

  document.getElementById('qscoreNum').textContent = qScore + ' / ' + QUIZ.length;

  // emoji + stars
  const pct = qScore / QUIZ.length;
  const emoji = pct === 1 ? '🏆' : pct >= .8 ? '🌟' : pct >= .6 ? '🌳' : pct >= .4 ? '🌿' : '🌱';
  document.getElementById('qemoji').textContent = emoji;

  const starFull  = Math.round(pct * 5);
  const starsEl = document.getElementById('qstars');
  starsEl.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const s = document.createElement('span');
    s.textContent = i < starFull ? '⭐' : '☆';
    starsEl.appendChild(s);
  }

  let msg = '';
  if (qScore <= 3)      msg = L==='uk' ? 'Є куди рости! Не здавайся — спробуй ще.' : 'Van hova fejlődni! Ne add fel!';
  else if (qScore <= 6) msg = L==='uk' ? 'Непогано! Ти добре знаєш природу.'       : 'Nem rossz! Jól ismered a természetet.';
  else if (qScore <= 8) msg = L==='uk' ? 'Чудово! Ти справжній еколог 🌿'          : 'Nagyszerű! Igazi ökológus vagy 🌿';
  else                  msg = L==='uk' ? 'Ідеально! Ти справжній захисник Землі! 🌍': 'Tökéletes! Igazi Föld-védő vagy! 🌍';
  document.getElementById('qscoreTxt').textContent = msg;

  // update progress bar to 100%
  document.getElementById('qbar').style.width = '100%';
}

/* ── STATE ── */
let LANG = 'uk', THEME = 'dark', mobOpen = false;

/* ── ROUTER ── */
function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('p-' + id).classList.add('active');
  document.querySelectorAll('[data-p]').forEach(a => a.classList.toggle('on', a.dataset.p === id));
  window.scrollTo({top:0,behavior:'instant'});
  setTimeout(runReveal, 80);
  if (id === 'home') setTimeout(initFX, 90);
  if (id === 'quiz') { startQuiz(); }
  closeMob();
  return false;
}
function goM(id){ go(id); return false; }

/* ── MOBILE ── */
function toggleMob(){
  mobOpen = !mobOpen;
  document.getElementById('hbg').classList.toggle('open', mobOpen);
  document.getElementById('mob').classList.toggle('open', mobOpen);
}
function closeMob(){
  mobOpen = false;
  document.getElementById('hbg').classList.remove('open');
  document.getElementById('mob').classList.remove('open');
}

/* ── LANGUAGE ── */
function setLang(l) {
  LANG = l;
  document.documentElement.setAttribute('data-lang', l);
  ['buk','bhu','buk2','bhu2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('on', (id.includes('uk')) ? l==='uk' : l==='hu');
  });
  document.querySelectorAll('[data-uk]').forEach(el => {
    const v = el.getAttribute('data-' + l);
    if (v !== null) el.innerHTML = v;
  });
  document.querySelector('.logo').innerHTML =
    l === 'uk' ? '🌍 День <span>Землі</span>' : '🌍 Föld <span>Napja</span>';
  // re-render quiz if active
  if (document.getElementById('p-quiz').classList.contains('active') && qAnswered === false && qIdx < QUIZ.length) {
    renderQ();
  }
}

/* ── THEME ── */
function toggleTheme() {
  THEME = THEME === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', THEME);
  document.getElementById('tknob').textContent = THEME === 'dark' ? '🌙' : '☀️';
}

/* ── MAP FLY ── */
function flyTo(lat, lng, name, desc, btn) {
  const isWide = name === 'Карпати';
  const d = isWide ? 350000 : 55000;
  const src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${d}!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1714000000002`;
  const fr = document.getElementById('mframe');
  fr.style.opacity = '0';
  setTimeout(() => { fr.src = src; fr.style.opacity = '1'; }, 320);
  document.getElementById('miName').textContent = name;
  document.getElementById('miDesc').textContent = desc;
  const info = document.getElementById('minfo');
  info.classList.remove('show');
  setTimeout(() => info.classList.add('show'), 450);
  document.querySelectorAll('.pin-btn').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  if (window.innerWidth <= 900) showTab(false);
}

function showTab(side) {
  const s = document.getElementById('mapSide');
  const c = document.getElementById('mapCont');
  const ts = document.getElementById('tabS');
  const tm = document.getElementById('tabM');
  if (side) {
    s.style.display='flex'; c.style.display='none';
    ts.classList.add('on'); tm.classList.remove('on');
  } else {
    s.style.display='none'; c.style.display='block';
    ts.classList.remove('on'); tm.classList.add('on');
  }
}

/* ── HERO FX ── */
let fxDone = false;
function initFX() {
  if (fxDone) return; fxDone = true;
  // aurora
  const aw = document.getElementById('aurWrap');
  for (let i = 0; i < 5; i++) {
    const r = document.createElement('div'); r.className = 'ar';
    const s = 100 + i * 90;
    r.style.cssText = `width:${s}px;height:${s}px;--d:${5+i*1.2}s;--dl:-${i*1.5}s`;
    aw.appendChild(r);
  }
  // particles
  const pp = document.getElementById('fxP');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div'); p.className = 'px';
    const s = Math.random()*7+2;
    p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${5+Math.random()*7}s;--dl:-${Math.random()*10}s`;
    pp.appendChild(p);
  }
  // leaves
  const lp = document.getElementById('fxL');
  '🍃🌿🍀🌱🍂🌾'.split('').forEach(em => {
    for (let j = 0; j < 4; j++) {
      const l = document.createElement('div'); l.className = 'lf'; l.textContent = em;
      l.style.cssText = `left:${Math.random()*100}%;--d:${13+Math.random()*15}s;--dl:-${Math.random()*24}s;--fs:${.9+Math.random()*1.4}rem`;
      lp.appendChild(l);
    }
  });
}

/* ── REVEAL ── */
function runReveal() {
  const pg = document.querySelector('.page.active');
  if (!pg) return;
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in');
  }), {threshold:.1, rootMargin:'0px 0px -40px 0px'});
  pg.querySelectorAll('.rv,.rvL,.rvR').forEach(el => { el.classList.remove('in'); obs.observe(el); });
}

/* ── COUNTERS ── */
function counter(id, target, suffix) {
  const el = document.getElementById(id); if (!el) return;
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; obs.unobserve(el);
    let n = 0; const step = target/60;
    const t = setInterval(()=>{ n=Math.min(n+step,target); el.textContent=Math.floor(n)+suffix; if(n>=target)clearInterval(t); }, 20);
  }), {threshold:.5});
  obs.observe(el);
}

/* ── NAV SHRINK ── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.height = window.scrollY > 50 ? '52px' : '62px';
}, {passive:true});

/* ── INIT ── */
go('home');
counter('c1', 193, '');
counter('c2', 1970, '');
counter('c3', 54, '+');

