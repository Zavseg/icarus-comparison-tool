/* ═══════════════════════════════════════════════════════════════
   ICARUS ITEM COMPARER — app.js
   ═══════════════════════════════════════════════════════════════ */

'use strict';

// ── State ──────────────────────────────────────────────────────
let currentCategory = 'pickaxes';
let currentSort     = 'default';
let currentLang     = localStorage.getItem('icarus_lang') || 'en';
const selectedIds    = new Set();

// ── i18n Helper ────────────────────────────────────────────────
function t(key) {
  return I18N[currentLang][key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('icarus_lang', lang);
  updateStaticTranslations();
  buildCategoryNav();
  renderPickerPanel();
  renderComparePanel();
  
  // Update toggle state
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`lang-${lang}`).classList.add('active');
}

function updateStaticTranslations() {
  document.getElementById('logo-sub').textContent = t('app_sub');
  document.getElementById('header-desc').textContent = t('header_desc');
  document.getElementById('picker-title').textContent = t('cat_' + currentCategory);
  document.getElementById('picker-hint').textContent = t('picker-hint');
  document.getElementById('compare-title').textContent = t('ready_to_compare');
  document.getElementById('btn-clear').textContent = t('clear_all');
  document.getElementById('empty-text').textContent = t('empty_hint');
  
  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  sortSelect.options[0].textContent = t('sort_default');
  // (We could localize other sort options if we dynamicallly built them)
}

// ── Boot ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

// ══════════════════════════════════════════════════════════════
//  CATEGORY NAV
// ══════════════════════════════════════════════════════════════
function buildCategoryNav() {
  const nav = document.getElementById('category-nav');
  nav.innerHTML = '';
  Object.entries(ICARUS_DATA).forEach(([key, cat]) => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab';
    btn.id        = `tab-${key}`;
    btn.innerHTML = `<span class="cat-tab-icon">${cat.icon}</span>${t('cat_' + key)}`;
    btn.addEventListener('click', () => switchCategory(key));
    nav.appendChild(btn);
  });
}

function switchCategory(key) {
  currentCategory = key;
  selectedIds.clear();
  currentSort = 'default';
  
  // sync picker dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'default';

  // update tab active state
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${key}`)?.classList.add('active');

  // rebuild left picker
  renderPickerPanel();
  renderComparePanel();
}

function changeSort(val) {
  currentSort = val;
  renderPickerPanel();
}

// ══════════════════════════════════════════════════════════════
//  PICKER PANEL
// ══════════════════════════════════════════════════════════════
function renderPickerPanel() {
  const cat   = ICARUS_DATA[currentCategory];
  const grid  = document.getElementById('item-grid');
  const title = document.getElementById('picker-title');

  title.textContent = t('cat_' + currentCategory);
  grid.innerHTML    = '';

  // 1. Prepare items (sort if needed)
  let items = [...cat.items];
  if (currentSort !== 'default') {
    items.sort((a, b) => (b[currentSort] || 0) - (a[currentSort] || 0));
  }

  // 2. Render items
  items.forEach((item, index) => {
    // Add Group Header if it changes (only in default sort mode)
    if (currentSort === 'default' && cat.grouped && (index === 0 || item.group !== items[index - 1].group)) {
      const header = document.createElement('div');
      header.className = 'group-header';
      header.innerHTML = `<span>${item.group}</span>`;
      grid.appendChild(header);
    }

    const card = document.createElement('div');
    card.className   = 'item-card' + (selectedIds.has(item.id) ? ' selected' : '');
    card.dataset.id  = item.id;
    const tierLabel = item.tier === 'W' ? t('workshop') : (typeof item.tier === 'number' ? `${t('tier')} ${item.tier}` : item.tier);
    const dlcBadge = item.dlc === 'P' ? '<span class="dlc-badge" title="Prometheus DLC">P</span>' : 
                     item.dlc === 'H' ? '<span class="dlc-badge h-badge" title="Dangerous Horizons DLC">H</span>' : '';
    
    card.innerHTML   = `
      <div class="item-dot" style="background:${item.color}; color:${item.color}"></div>
      <div class="item-info">
        <div class="item-name">${item.name} ${dlcBadge}</div>
        <div class="item-meta">
          <span class="item-tier t${item.tier}">${tierLabel}</span>
          <span class="item-crafted-at">${item.craftedAt || ''}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => toggleItem(item.id));
    card.addEventListener('mouseenter', (e) => showTooltip(e, item));
    card.addEventListener('mouseleave', hideTooltip);

    grid.appendChild(card);
  });
}

function toggleItem(id) {
  if (selectedIds.has(id)) {
    selectedIds.delete(id);
  } else {
    selectedIds.add(id);
  }
  // sync card visual
  document.querySelectorAll('.item-card').forEach(c => {
    c.classList.toggle('selected', selectedIds.has(c.dataset.id));
  });
  renderComparePanel();
}

// ══════════════════════════════════════════════════════════════
//  COMPARE PANEL
// ══════════════════════════════════════════════════════════════
function clearSelection() {
  selectedIds.clear();
  renderPickerPanel();
  renderComparePanel();
}

function removeItem(id) {
  selectedIds.delete(id);
  // sync picker cards
  document.querySelectorAll(`.item-card[data-id="${id}"]`).forEach(c => c.classList.remove('selected'));
  renderComparePanel();
}

function renderComparePanel() {
  const emptyEl   = document.getElementById('empty-state');
  const contentEl = document.getElementById('compare-content');
  const tableEl   = document.getElementById('compare-table');

  if (selectedIds.size < 1) {
    emptyEl.style.display   = '';
    contentEl.style.display = 'none';
    return;
  }
  emptyEl.style.display   = 'none';
  contentEl.style.display = '';

  const cat   = ICARUS_DATA[currentCategory];
  const items = cat.items.filter(i => selectedIds.has(i.id));
  const cols  = items.length + 1; // +1 for label column

  // grid-template-columns: [label] [items...]
  const labelW  = '160px';
  const itemW   = '1fr';
  const gridCols = `${labelW} ${Array(items.length).fill(itemW).join(' ')}`;

  let html = '';

  // ── LEGEND ──
  html += `<div class="legend-row">
    <span><span class="legend-dot" style="background:rgba(77,208,160,0.4)"></span>${t('best_stat')}</span>
    <span><span class="legend-dot" style="background:rgba(255,82,82,0.3)"></span>${t('worst_stat')}</span>
  </div>`;

  // ── HEADER ROW ── (item names)
  html += `<div class="cmp-header-row" style="grid-template-columns:${gridCols}">`;
  html += `<div class="cmp-header-label"></div>`;  // blank label cell
  items.forEach(item => {
    const tierLabel = item.tier === 'W' ? t('workshop') : (typeof item.tier === 'number' ? `${t('tier')} ${item.tier}` : item.tier);
    const dlcBadge = item.dlc === 'P' ? '<span class="dlc-badge small">P</span>' : 
                     item.dlc === 'H' ? '<span class="dlc-badge h-badge small">H</span>' : '';
    html += `
      <div class="cmp-header-label" style="padding-top:14px">
        <div class="cmp-item-color-strip" style="background:${item.color}"></div>
        <div class="cmp-item-name">${item.name} ${dlcBadge}</div>
        <div class="cmp-item-tier t${item.tier}" style="background:${hexToRgba(item.color,0.18)};color:${item.color}">${tierLabel}</div>
        <button class="cmp-remove-btn" title="${t('remove_item')}" onclick="removeItem('${item.id}')">✕</button>
      </div>`;
  });
  html += '</div>';

  // ── STATS SECTION ──
  html += buildSectionDivider(t('section_stats'), gridCols);
  cat.stats.forEach(stat => {
    html += buildStatRow(stat, items, gridCols);
  });

  // ── SPECIAL SECTION ──
  const anySpecials = items.some(i => (i.special && i.special.length > 0) || i.setBonus);
  if (anySpecials) {
    html += buildSectionDivider(t('section_special'), gridCols);
    html += buildSpecialRow(items, gridCols);
  }

  // ── CRAFT SECTION ──
  html += buildSectionDivider(t('section_craft'), gridCols);
  html += buildCraftRow(items, gridCols);

  // ── DESC SECTION ──
  html += buildSectionDivider(t('section_desc'), gridCols);
  html += buildDescRow(items, gridCols);

  tableEl.innerHTML = html;

  // animate bars
  requestAnimationFrame(() => {
    tableEl.querySelectorAll('.cmp-bar-fill').forEach(el => {
      el.style.width = el.dataset.target + '%';
    });
  });
}

// ──────────────────────────────────────────────────────────────
//  ROW BUILDERS
// ──────────────────────────────────────────────────────────────
function buildSectionDivider(label, gridCols) {
  // number of extra cells = selectedIds.size
  const extra = selectedIds.size;
  let html = `<div class="cmp-divider" style="grid-template-columns:${gridCols}">`;
  html += `<div class="cmp-divider-cell label-side"></div>`;
  for (let i = 0; i < extra; i++) {
    html += `<div class="cmp-divider-cell">${label}</div>`;
  }
  html += '</div>';
  return html;
}

function buildStatRow(stat, items, gridCols) {
  // collect values
  const values = items.map(item => item[stat.key] ?? null);
  const nums   = values.filter(v => v !== null);
  const best   = stat.higher ? Math.max(...nums) : Math.min(...nums);
  const worst  = stat.higher ? Math.min(...nums) : Math.max(...nums);

  let html = `<div class="cmp-stat-row" style="grid-template-columns:${gridCols}">`;

  // label cell
  html += `<div class="cmp-cell stat-label-cell"><span class="cmp-stat-label">${t('stat_' + stat.key)}</span></div>`;

  items.forEach((item, idx) => {
    const val = values[idx];
    const isBest  = nums.length > 1 && val === best;
    const isWorst = nums.length > 1 && val === worst && best !== worst;
    const cls = isBest ? ' is-best' : isWorst ? ' is-worst' : '';
    html += `<div class="cmp-cell${cls}">`;

    if (val === null) {
      html += `<span style="color:var(--text-dim)">—</span>`;
    } else if (stat.type === 'bar') {
      const pct    = Math.round((val / stat.max) * 100);
      const color  = isBest ? '#4DD0A0' : isWorst ? '#FF7070' : item.color;
      html += `
        <div class="cmp-bar-wrap">
          <div class="cmp-bar-top">
            <span class="cmp-bar-num" style="color:${color}">${fmt(val)}</span>
            <span class="cmp-bar-unit">${stat.unit}</span>
          </div>
          <div class="cmp-bar-track">
            <div class="cmp-bar-fill" data-target="${pct}"
                 style="background:${color}; width:0%"></div>
          </div>
        </div>`;
    } else {
      // plain number
      const color = isBest ? '#4DD0A0' : isWorst ? '#FF7070' : 'var(--text-primary)';
      html += `<span class="cmp-value-num" style="color:${color}">${fmt(val)}<span class="cmp-value-unit">${stat.unit}</span></span>`;
    }

    html += '</div>';
  });

  html += '</div>';
  return html;
}

function buildSpecialRow(items, gridCols) {
  let html = `<div class="cmp-stat-row" style="grid-template-columns:${gridCols}">`;
  html += `<div class="cmp-cell stat-label-cell"><span class="cmp-stat-label">${t('label_bonuses')}</span></div>`;
  items.forEach(item => {
    html += `<div class="cmp-cell">`;
    let content = '';
    
    if (item.setBonus) {
      content += `<div class="cmp-set-bonus">💠 <b>${t('label_set_bonus')}:</b> ${item.setBonus}</div>`;
    }
    
    if (item.special && item.special.length > 0) {
      content += `<div class="cmp-specials">`;
      item.special.forEach(s => {
        content += `<span class="cmp-special-tag">⚡ ${s}</span>`;
      });
      content += '</div>';
    }
    
    if (!content) {
      content = `<span style="color:var(--text-dim); font-size:0.8rem">${t('no_bonuses')}</span>`;
    }
    
    html += content + '</div>';
  });
  html += '</div>';
  return html;
}

function buildCraftRow(items, gridCols) {
  // Crafted At row
  let html = `<div class="cmp-stat-row" style="grid-template-columns:${gridCols}">`;
  html += `<div class="cmp-cell stat-label-cell"><span class="cmp-stat-label">${t('label_bench')}</span></div>`;
  items.forEach(item => {
    html += `<div class="cmp-cell"><span style="font-size:0.85rem">${item.craftedAt || '—'}</span></div>`;
  });
  html += '</div>';

  // Crafting cost row
  html += `<div class="cmp-stat-row" style="grid-template-columns:${gridCols}">`;
  html += `<div class="cmp-cell stat-label-cell"><span class="cmp-stat-label">${t('label_recipe')}</span></div>`;
  items.forEach(item => {
    html += `<div class="cmp-cell"><div class="cmp-cost-list">`;
    if (item.craftCost) {
      if (Array.isArray(item.craftCost)) {
        item.craftCost.forEach(c => {
          html += `<div class="cmp-cost-item">${c}</div>`;
        });
      } else {
        html += `<div class="cmp-cost-item">${item.craftCost}</div>`;
      }
    } else {
      html += `<span style="color:var(--text-dim)">—</span>`;
    }
    html += '</div></div>';
  });
  html += '</div>';

  return html;
}

function buildDescRow(items, gridCols) {
  let html = `<div class="cmp-stat-row" style="grid-template-columns:${gridCols}">`;
  html += `<div class="cmp-cell stat-label-cell"><span class="cmp-stat-label">${t('label_description')}</span></div>`;
  items.forEach(item => {
    html += `<div class="cmp-cell"><p class="cmp-desc">${item.description || '—'}</p></div>`;
  });
  html += '</div>';
  return html;
}

// ══════════════════════════════════════════════════════════════
//  TOOLTIP
// ══════════════════════════════════════════════════════════════
const tooltipEl = document.getElementById('tooltip');

function showTooltip(e, item) {
  const cat = ICARUS_DATA[currentCategory];
  let lines = '';
  cat.stats.forEach(s => {
    const val = item[s.key];
    if (val !== undefined) {
      lines += `<div><span style="color:var(--text-muted)">${t('stat_' + s.key)}:</span> <b>${fmt(val)}${s.unit}</b></div>`;
    }
  });
  if (item.setBonus) {
    lines += `<div style="margin-top:6px;color:#ba68c8">💠 <b>${t('label_set_bonus')}:</b> ${item.setBonus}</div>`;
  }
  if (item.special && item.special.length > 0) {
    lines += `<div style="margin-top:6px;color:#90caf9">⚡ ${item.special.join('<br/>⚡ ')}</div>`;
  }

  tooltipEl.innerHTML = `
    <div style="font-weight:700;margin-bottom:6px;color:${item.color}">${item.name}</div>
    ${lines}
  `;
  positionTooltip(e);
  tooltipEl.classList.add('visible');
}

function positionTooltip(e) {
  const x = e.clientX + 16;
  const y = e.clientY + 8;
  tooltipEl.style.left = Math.min(x, window.innerWidth - 280) + 'px';
  tooltipEl.style.top  = Math.min(y, window.innerHeight - 150) + 'px';
}

function hideTooltip() {
  tooltipEl.classList.remove('visible');
}

document.addEventListener('mousemove', (e) => {
  if (tooltipEl.classList.contains('visible')) positionTooltip(e);
});

// ══════════════════════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════════════════════
function fmt(n) {
  if (n === Infinity) return "∞";
  const locale = currentLang === 'ua' ? 'uk-UA' : 'en-US';
  if (Number.isInteger(n)) return n.toLocaleString(locale);
  return n.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}
