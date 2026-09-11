/**
 * FurLife Veterinary Development Control Center - Master Application Controller
 * High-performance vanilla JavaScript, localStorage persistence, real-time KPI metrics,
 * multi-view support, advanced filters, search, and import/export capabilities.
 */

(function() {
  'use strict';

  // LocalStorage Key
  const STORAGE_KEY = 'furlife_dev_control_center_state_v1';
  const META_KEY = 'furlife_dev_control_center_meta_v1';

  // Global State
  const state = {
    activeTab: 'modules',
    searchQuery: '',
    filters: {
      phase: 'ALL',
      priority: 'ALL',
      status: 'ALL',
      module: 'ALL',
      quickChip: null
    },
    // User modified task states: { [taskId]: { status: string, completed: boolean, priority?: string, notes?: string } }
    tasksState: {},
    expandedModules: new Set(),
    activeModalTaskId: null,
    lastUpdated: null
  };

  // DOM Elements Cache
  let els = {};

  /**
   * Initialize application
   */
  function init() {
    loadStateFromStorage();
    cacheElements();
    bindEvents();
    renderAllViews();
    updateDashboardMetrics();
    renderLastUpdated();
  }

  /**
   * Load stored state from localStorage
   */
  function loadStateFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        state.tasksState = JSON.parse(stored);
      }
      const meta = localStorage.getItem(META_KEY);
      if (meta) {
        const metaObj = JSON.parse(meta);
        state.lastUpdated = metaObj.lastUpdated || null;
      }
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
      state.tasksState = {};
    }
  }

  /**
   * Save task state to localStorage
   */
  function saveStateToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasksState));
      state.lastUpdated = new Date().toISOString();
      localStorage.setItem(META_KEY, JSON.stringify({ lastUpdated: state.lastUpdated }));
      renderLastUpdated();
    } catch (e) {
      console.error('Error saving state to localStorage:', e);
    }
  }

  /**
   * Cache critical DOM elements
   */
  function cacheElements() {
    els = {
      // Views
      viewModules: document.getElementById('view-modules'),
      viewProcesses: document.getElementById('view-processes'),
      viewArchitecture: document.getElementById('view-architecture'),
      viewDataModels: document.getElementById('view-datamodels'),
      viewRoadmap: document.getElementById('view-roadmap'),
      viewMindmap: document.getElementById('view-mindmap'),
      viewLuna: document.getElementById('view-luna'),

      // KPIs
      kpiTotal: document.getElementById('kpi-total-val'),
      kpiCompleted: document.getElementById('kpi-completed-val'),
      kpiPending: document.getElementById('kpi-pending-val'),
      kpiDev: document.getElementById('kpi-dev-val'),
      kpiQA: document.getElementById('kpi-qa-val'),
      kpiBlocked: document.getElementById('kpi-blocked-val'),
      kpiMvpVal: document.getElementById('kpi-mvp-val'),
      kpiGeneralPercent: document.getElementById('overall-percent-val'),
      generalProgressBar: document.getElementById('overall-progress-bar'),

      // Filter elements
      searchInput: document.getElementById('filter-search'),
      filterPhase: document.getElementById('filter-phase'),
      filterPriority: document.getElementById('filter-priority'),
      filterStatus: document.getElementById('filter-status'),
      filterModule: document.getElementById('filter-module'),
      chipsContainer: document.getElementById('filter-chips'),

      // Containers
      modulesListContainer: document.getElementById('modules-list-container'),
      processesContainer: document.getElementById('processes-container'),
      archContainer: document.getElementById('arch-grid-container'),
      dataModelsContainer: document.getElementById('models-grid-container'),
      roadmapContainer: document.getElementById('roadmap-container'),

      // Buttons
      btnExportJson: document.getElementById('btn-export-json'),
      btnImportJson: document.getElementById('btn-import-json'),
      btnExportCsv: document.getElementById('btn-export-csv'),
      btnResetProgress: document.getElementById('btn-reset-progress'),
      btnExpandAll: document.getElementById('btn-expand-all'),
      btnCollapseAll: document.getElementById('btn-collapse-all'),

      // Modals
      notesModal: document.getElementById('modal-notes'),
      resetModal: document.getElementById('modal-reset'),
      importModal: document.getElementById('modal-import'),
      notesTextarea: document.getElementById('task-notes-textarea'),
      modalTaskTitle: document.getElementById('modal-task-title'),
      modalTaskMeta: document.getElementById('modal-task-meta'),

      // Toast
      toastContainer: document.getElementById('toast-container'),
      lastUpdateEl: document.getElementById('last-update-time')
    };
  }

  /**
   * Get all tasks across the entire platform
   */
  function getAllPlatformTasks() {
    const all = [];

    // Modules tasks
    if (window.FURLIFE_MODULES) {
      window.FURLIFE_MODULES.forEach(m => {
        m.tasks.forEach(t => {
          all.push({ ...t, source: 'module', parentName: m.name, moduleNum: m.num });
        });
      });
    }

    // Processes technical tasks
    if (window.FURLIFE_PROCESSES) {
      window.FURLIFE_PROCESSES.forEach(p => {
        p.techTasks.forEach(t => {
          all.push({ ...t, source: 'process', parentName: p.name, moduleNum: null });
        });
      });
    }

    // Architecture tasks
    if (window.FURLIFE_ARCHITECTURE) {
      window.FURLIFE_ARCHITECTURE.forEach(a => {
        a.tasks.forEach(t => {
          all.push({ ...t, source: 'architecture', parentName: a.name, moduleNum: null });
        });
      });
    }

    // Data models tasks
    if (window.FURLIFE_DATA_MODELS) {
      window.FURLIFE_DATA_MODELS.forEach(m => {
        m.tasks.forEach(t => {
          all.push({ ...t, source: 'datamodel', parentName: m.name, moduleNum: null });
        });
      });
    }

    return all;
  }

  /**
   * Get dynamic task effective state (merged with user modifications)
   */
  function getTaskEffectiveState(task) {
    const userState = state.tasksState[task.id] || {};
    return {
      status: userState.status || task.status || 'Pendiente',
      completed: userState.completed !== undefined ? userState.completed : (task.completed || false),
      priority: userState.priority || task.priority || 'MEDIA',
      notes: userState.notes !== undefined ? userState.notes : (task.notes || '')
    };
  }

  /**
   * Set task state and trigger update
   */
  function setTaskState(taskId, changes, silent = false) {
    if (!state.tasksState[taskId]) {
      state.tasksState[taskId] = {};
    }
    Object.assign(state.tasksState[taskId], changes);
    saveStateToStorage();
    if (!silent) {
      updateDashboardMetrics();
      updateTaskRowDom(taskId);
      updateModuleCardStats();
      updateRoadmapProgress();
      if (window.furLifeMindmap && typeof window.furLifeMindmap.refresh === 'function') {
        window.furLifeMindmap.refresh();
      }
    }
  }

  /**
   * Calculate overall statistics
   */
  function calculateMetrics() {
    const allTasks = getAllPlatformTasks();
    const total = allTasks.length;

    let completed = 0;
    let pending = 0;
    let inDev = 0;
    let inQA = 0;
    let blocked = 0;

    let mvpTotal = 0;
    let mvpCompleted = 0;

    allTasks.forEach(t => {
      const eff = getTaskEffectiveState(t);
      if (eff.completed || eff.status === 'Completado') {
        completed++;
      } else if (eff.status === 'En desarrollo') {
        inDev++;
      } else if (eff.status === 'En pruebas') {
        inQA++;
      } else if (eff.status === 'Bloqueado') {
        blocked++;
      } else {
        pending++;
      }

      // Check MVP phase
      if (t.phase && t.phase.includes('MVP')) {
        mvpTotal++;
        if (eff.completed || eff.status === 'Completado') {
          mvpCompleted++;
        }
      }
    });

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    const mvpPercent = mvpTotal > 0 ? Math.round((mvpCompleted / mvpTotal) * 100) : 0;

    return {
      total,
      completed,
      pending,
      inDev,
      inQA,
      blocked,
      percent,
      mvpTotal,
      mvpCompleted,
      mvpPercent
    };
  }

  /**
   * Update Dashboard KPI Cards and Progress Bars
   */
  function updateDashboardMetrics() {
    const metrics = calculateMetrics();

    if (els.kpiTotal) els.kpiTotal.textContent = metrics.total;
    if (els.kpiCompleted) els.kpiCompleted.textContent = metrics.completed;
    if (els.kpiPending) els.kpiPending.textContent = metrics.pending;
    if (els.kpiDev) els.kpiDev.textContent = metrics.inDev;
    if (els.kpiQA) els.kpiQA.textContent = metrics.inQA;
    if (els.kpiBlocked) els.kpiBlocked.textContent = metrics.blocked;
    if (els.kpiMvpVal) els.kpiMvpVal.textContent = `${metrics.mvpPercent}%`;

    if (els.kpiGeneralPercent) els.kpiGeneralPercent.textContent = `${metrics.percent}%`;
    if (els.generalProgressBar) els.generalProgressBar.style.width = `${metrics.percent}%`;

    // Fill small progress bars in cards
    const cardCompletedFill = document.querySelector('.card-completed .kpi-progress-bar-fill');
    if (cardCompletedFill) cardCompletedFill.style.width = `${metrics.percent}%`;

    const cardMvpFill = document.querySelector('.card-mvp .kpi-progress-bar-fill');
    if (cardMvpFill) cardMvpFill.style.width = `${metrics.mvpPercent}%`;
  }

  /**
   * Render Last Updated Time
   */
  function renderLastUpdated() {
    if (!els.lastUpdateEl) return;
    if (!state.lastUpdated) {
      els.lastUpdateEl.textContent = 'Sin cambios (Estado inicial)';
      return;
    }
    const date = new Date(state.lastUpdated);
    els.lastUpdateEl.textContent = `Último guardado: ${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
  }

  /**
   * Filter predicate for a task
   */
  function matchTaskFilter(task, moduleFilterOverride = null) {
    const eff = getTaskEffectiveState(task);

    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = (task.title || '').toLowerCase().includes(q);
      const matchDesc = (task.description || '').toLowerCase().includes(q);
      const matchId = (task.id || '').toLowerCase().includes(q);
      const matchParent = (task.parentName || '').toLowerCase().includes(q);
      const matchNotes = (eff.notes || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchId && !matchParent && !matchNotes) {
        return false;
      }
    }

    // Phase
    if (state.filters.phase !== 'ALL') {
      if (task.phase !== state.filters.phase) {
        return false;
      }
    }

    // Priority
    if (state.filters.priority !== 'ALL') {
      if (eff.priority !== state.filters.priority) {
        return false;
      }
    }

    // Status
    if (state.filters.status !== 'ALL') {
      if (eff.status !== state.filters.status) {
        return false;
      }
    }

    // Module
    const modToTest = moduleFilterOverride || state.filters.module;
    if (modToTest !== 'ALL') {
      if (task.source === 'module' && task.moduleNum !== parseInt(modToTest, 10)) {
        return false;
      }
    }

    // Quick Chips
    if (state.filters.quickChip) {
      if (state.filters.quickChip === 'pending' && (eff.completed || eff.status !== 'Pendiente')) return false;
      if (state.filters.quickChip === 'completed' && (!eff.completed && eff.status !== 'Completado')) return false;
      if (state.filters.quickChip === 'blocked' && eff.status !== 'Bloqueado') return false;
      if (state.filters.quickChip === 'mvp_critica') {
        const isMvp = (task.phase || '').includes('MVP');
        const isCritica = eff.priority === 'CRÍTICA';
        if (!isMvp || !isCritica) return false;
      }
    }

    return true;
  }

  /**
   * Render HTML for a single task row
   */
  function renderTaskRowHtml(task) {
    const eff = getTaskEffectiveState(task);
    const isCompleted = eff.completed || eff.status === 'Completado';

    let statusClass = 'task-row';
    if (isCompleted) statusClass += ' task-completed';
    else if (eff.status === 'En desarrollo') statusClass += ' task-in-dev';
    else if (eff.status === 'En pruebas') statusClass += ' task-in-qa';
    else if (eff.status === 'Bloqueado') statusClass += ' task-blocked';

    const statusSelectClass = `select-status status-${eff.status.toLowerCase().replace(/\s+/g, '-')}`;
    const prioSelectClass = `select-prio prio-${eff.priority.toLowerCase()}`;

    // Dependencies rendering
    let depsHtml = '';
    if (task.dependencies && task.dependencies.length > 0) {
      const depBadges = task.dependencies.map(d =>
        `<span class="dep-tag" onclick="window.furLifeApp.jumpToTask('${d}')" title="Clic para buscar dependencia">${d}</span>`
      ).join(' ');
      depsHtml = `<div class="task-deps-group"><span>Depende de:</span> ${depBadges}</div>`;
    }

    // Notes indicator
    const hasNotes = eff.notes && eff.notes.trim().length > 0;
    const notesBtnClass = hasNotes ? 'task-notes-btn has-notes' : 'task-notes-btn';
    const notesBtnText = hasNotes ? '📝 Ver Notas' : '✍️ Nota';

    return `
      <div class="${statusClass}" id="task-row-${task.id}" data-task-id="${task.id}">
        <div class="task-checkbox-wrapper">
          <input type="checkbox" class="task-checkbox" ${isCompleted ? 'checked' : ''} onchange="window.furLifeApp.toggleTaskCheckbox('${task.id}', this.checked)" title="Marcar como completado" />
        </div>
        <div class="task-main-content">
          <div class="task-title-line">
            <span class="task-id-badge">${task.id}</span>
            <span class="task-title">${escapeHtml(task.title)}</span>
            <span class="task-category-badge">${task.category || 'General'}</span>
            <span class="badge-phase ${getPhaseBadgeClass(task.phase)}">${task.phase || 'MVP'}</span>
          </div>
          <div class="task-description">${escapeHtml(task.description)}</div>
          <div class="task-meta-bar">
            ${depsHtml}
            <button class="${notesBtnClass}" onclick="window.furLifeApp.openNotesModal('${task.id}')">${notesBtnText}</button>
          </div>
        </div>
        <div class="task-controls-group">
          <select class="control-select ${prioSelectClass}" onchange="window.furLifeApp.changeTaskPriority('${task.id}', this.value)" title="Cambiar prioridad">
            <option value="CRÍTICA" ${eff.priority === 'CRÍTICA' ? 'selected' : ''}>🔴 CRÍTICA</option>
            <option value="ALTA" ${eff.priority === 'ALTA' ? 'selected' : ''}>🟠 ALTA</option>
            <option value="MEDIA" ${eff.priority === 'MEDIA' ? 'selected' : ''}>🟡 MEDIA</option>
            <option value="BAJA" ${eff.priority === 'BAJA' ? 'selected' : ''}>🟢 BAJA</option>
          </select>
          <select class="control-select ${statusSelectClass}" onchange="window.furLifeApp.changeTaskStatus('${task.id}', this.value)" title="Cambiar estado">
            <option value="Pendiente" ${eff.status === 'Pendiente' ? 'selected' : ''}>☐ Pendiente</option>
            <option value="En desarrollo" ${eff.status === 'En desarrollo' ? 'selected' : ''}>🔵 En desarrollo</option>
            <option value="En pruebas" ${eff.status === 'En pruebas' ? 'selected' : ''}>🟡 En pruebas</option>
            <option value="Completado" ${eff.status === 'Completado' ? 'selected' : ''}>🟢 Completado</option>
            <option value="Bloqueado" ${eff.status === 'Bloqueado' ? 'selected' : ''}>🔴 Bloqueado</option>
          </select>
        </div>
      </div>
    `;
  }

  /**
   * Update a specific Task Row in the DOM without re-rendering everything
   */
  function updateTaskRowDom(taskId) {
    const rowEl = document.getElementById(`task-row-${taskId}`);
    if (!rowEl) return;

    // Find the task object
    const all = getAllPlatformTasks();
    const task = all.find(t => t.id === taskId);
    if (!task) return;

    const eff = getTaskEffectiveState(task);
    const isCompleted = eff.completed || eff.status === 'Completado';

    // Update checkbox
    const chk = rowEl.querySelector('.task-checkbox');
    if (chk) chk.checked = isCompleted;

    // Update classes
    rowEl.className = 'task-row';
    if (isCompleted) rowEl.classList.add('task-completed');
    else if (eff.status === 'En desarrollo') rowEl.classList.add('task-in-dev');
    else if (eff.status === 'En pruebas') rowEl.classList.add('task-in-qa');
    else if (eff.status === 'Bloqueado') rowEl.classList.add('task-blocked');

    // Update status select class
    const statusSelect = rowEl.querySelector('.select-status');
    if (statusSelect) {
      statusSelect.className = `control-select select-status status-${eff.status.toLowerCase().replace(/\s+/g, '-')}`;
      statusSelect.value = eff.status;
    }

    // Update priority select class
    const prioSelect = rowEl.querySelector('.select-prio');
    if (prioSelect) {
      prioSelect.className = `control-select select-prio prio-${eff.priority.toLowerCase()}`;
      prioSelect.value = eff.priority;
    }

    // Update notes button
    const notesBtn = rowEl.querySelector('.task-notes-btn');
    if (notesBtn) {
      const hasNotes = eff.notes && eff.notes.trim().length > 0;
      notesBtn.className = hasNotes ? 'task-notes-btn has-notes' : 'task-notes-btn';
      notesBtn.textContent = hasNotes ? '📝 Ver Notas' : '✍️ Nota';
    }
  }

  /**
   * Render View 1: 59 Modules
   */
  function renderModulesView() {
    if (!els.modulesListContainer || !window.FURLIFE_MODULES) return;

    let html = '';
    window.FURLIFE_MODULES.forEach(mod => {
      // Calculate module completion
      const totalModTasks = mod.tasks.length;
      let completedModTasks = 0;
      mod.tasks.forEach(t => {
        const eff = getTaskEffectiveState(t);
        if (eff.completed || eff.status === 'Completado') completedModTasks++;
      });
      const modPercent = totalModTasks > 0 ? Math.round((completedModTasks / totalModTasks) * 100) : 0;

      // Filter tasks within this module
      const visibleTasks = mod.tasks.filter(t => matchTaskFilter(t));

      // If filtering is active and no tasks match, we hide the module card
      if (visibleTasks.length === 0 && (state.searchQuery || state.filters.phase !== 'ALL' || state.filters.priority !== 'ALL' || state.filters.status !== 'ALL' || state.filters.quickChip || state.filters.module !== 'ALL')) {
        return;
      }

      const isExpanded = state.expandedModules.has(mod.id);

      html += `
        <div class="module-card ${isExpanded ? 'expanded' : ''}" id="mod-card-${mod.id}">
          <div class="module-header" onclick="window.furLifeApp.toggleModuleAccordion('${mod.id}')">
            <div class="module-header-left">
              <span class="module-chevron">▶</span>
              <span class="module-num-badge">${mod.num < 10 ? '0' + mod.num : mod.num}</span>
              <div class="module-info-group">
                <div class="module-title-row">
                  <span class="module-title">${mod.name}</span>
                  <span class="badge-phase ${getPhaseBadgeClass(mod.phase)}">${mod.phase}</span>
                </div>
                <div class="module-desc">${mod.description}</div>
              </div>
            </div>
            <div class="module-header-right" onclick="event.stopPropagation()">
              <div class="module-stats-compact">
                <span class="module-progress-text">${completedModTasks}/${totalModTasks} (${modPercent}%)</span>
                <div class="module-progress-mini-bar">
                  <div class="module-progress-mini-fill" style="width: ${modPercent}%"></div>
                </div>
              </div>
              <div class="module-actions-btn-group">
                <button class="module-btn-mini btn-complete-all" onclick="window.furLifeApp.batchSetModuleTasks('${mod.id}', true)" title="Marcar todas como completadas">✓ Todo</button>
                <button class="module-btn-mini" onclick="window.furLifeApp.batchSetModuleTasks('${mod.id}', false)" title="Desmarcar todas">↺ Vaciar</button>
              </div>
            </div>
          </div>
          <div class="module-body">
            <div class="tasks-list">
              ${visibleTasks.map(t => renderTaskRowHtml(t)).join('')}
            </div>
          </div>
        </div>
      `;
    });

    if (html === '') {
      html = `
        <div style="text-align: center; padding: 40px; background: white; border-radius: 10px; border: 1px dashed var(--fl-border);">
          <h3 style="color: var(--fl-primary); margin-bottom: 8px;">No se encontraron tareas</h3>
          <p style="color: var(--fl-text-muted); font-size: 14px;">Prueba ajustando los filtros o el término de búsqueda actual.</p>
          <button class="btn-primary" style="margin-top: 14px;" onclick="window.furLifeApp.clearAllFilters()">Limpiar todos los filtros</button>
        </div>
      `;
    }

    els.modulesListContainer.innerHTML = html;
  }

  /**
   * Update stats on module headers without full re-render
   */
  function updateModuleCardStats() {
    if (!window.FURLIFE_MODULES) return;

    window.FURLIFE_MODULES.forEach(mod => {
      const cardEl = document.getElementById(`mod-card-${mod.id}`);
      if (!cardEl) return;

      const totalModTasks = mod.tasks.length;
      let completedModTasks = 0;
      mod.tasks.forEach(t => {
        const eff = getTaskEffectiveState(t);
        if (eff.completed || eff.status === 'Completado') completedModTasks++;
      });
      const modPercent = totalModTasks > 0 ? Math.round((completedModTasks / totalModTasks) * 100) : 0;

      const progressTextEl = cardEl.querySelector('.module-progress-text');
      if (progressTextEl) {
        progressTextEl.textContent = `${completedModTasks}/${totalModTasks} (${modPercent}%)`;
      }

      const miniFillEl = cardEl.querySelector('.module-progress-mini-fill');
      if (miniFillEl) {
        miniFillEl.style.width = `${modPercent}%`;
      }
    });
  }

  /**
   * Render View 2: 37 End-to-End Processes
   */
  function renderProcessesView() {
    if (!els.processesContainer || !window.FURLIFE_PROCESSES) return;

    let html = '';
    window.FURLIFE_PROCESSES.forEach(proc => {
      const visibleTasks = proc.techTasks.filter(t => matchTaskFilter(t));

      // Filter check
      if (visibleTasks.length === 0 && (state.searchQuery || state.filters.phase !== 'ALL' || state.filters.priority !== 'ALL' || state.filters.status !== 'ALL' || state.filters.quickChip)) {
        return;
      }

      const totalTasks = proc.techTasks.length;
      let completedTasks = 0;
      proc.techTasks.forEach(t => {
        const eff = getTaskEffectiveState(t);
        if (eff.completed || eff.status === 'Completado') completedTasks++;
      });
      const procPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      const stepsListHtml = proc.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('');
      const modulesBadges = proc.relatedModules.map(m => `<span class="dep-tag" style="background:#E2E8F0; color:#334155;">${m}</span>`).join(' ');

      html += `
        <div class="process-card" id="proc-card-${proc.id}">
          <div class="process-header">
            <div class="process-title-group">
              <h3>
                <span class="module-num-badge" style="background-color: var(--fl-accent-dark);">${proc.num}</span>
                ${proc.name}
              </h3>
              <div style="display:flex; gap:8px; align-items:center; margin-top:6px;">
                <span class="badge-phase ${getPhaseBadgeClass(proc.phase)}">${proc.phase}</span>
                <span class="select-prio prio-${proc.priority.toLowerCase()}">${proc.priority}</span>
              </div>
            </div>
            <div class="module-stats-compact">
              <span class="module-progress-text">${completedTasks}/${totalTasks} (${procPercent}%)</span>
              <div class="module-progress-mini-bar">
                <div class="module-progress-mini-fill" style="width: ${procPercent}%"></div>
              </div>
            </div>
          </div>

          <div class="process-trigger-box">
            <strong>Inicio / Detonante:</strong> ${escapeHtml(proc.trigger)}
          </div>

          <div>
            <strong style="font-size: 13px; color: var(--fl-primary);">Pasos del proceso:</strong>
            <ul class="process-steps-list">
              ${stepsListHtml}
            </ul>
          </div>

          <div class="process-meta-grid">
            <div class="process-meta-item">
              <strong>Datos involucrados:</strong> ${escapeHtml(proc.data)}
            </div>
            <div class="process-meta-item">
              <strong>Módulos relacionados:</strong> ${modulesBadges}
            </div>
            <div class="process-meta-item" style="grid-column: 1 / -1;">
              <strong>Resultado esperado:</strong> ${escapeHtml(proc.expectedResult)}
            </div>
          </div>

          <div class="process-tech-tasks-section">
            <div class="process-tech-title">🛠️ Tareas técnicas requeridas para este proceso:</div>
            <div class="tasks-list">
              ${visibleTasks.map(t => renderTaskRowHtml(t)).join('')}
            </div>
          </div>
        </div>
      `;
    });

    els.processesContainer.innerHTML = html;
  }

  /**
   * Render View 3: 21 Architecture & Backend Areas
   */
  function renderArchitectureView() {
    if (!els.archContainer || !window.FURLIFE_ARCHITECTURE) return;

    let html = '';
    window.FURLIFE_ARCHITECTURE.forEach(area => {
      const visibleTasks = area.tasks.filter(t => matchTaskFilter(t));

      const totalTasks = area.tasks.length;
      let completedTasks = 0;
      area.tasks.forEach(t => {
        const eff = getTaskEffectiveState(t);
        if (eff.completed || eff.status === 'Completado') completedTasks++;
      });
      const percent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      html += `
        <div class="arch-card">
          <div class="arch-card-header">
            <div>
              <div class="arch-card-title">${area.name}</div>
              <div class="arch-card-desc">${area.description}</div>
            </div>
            <div class="module-stats-compact">
              <span class="module-progress-text">${completedTasks}/${totalTasks} (${percent}%)</span>
              <div class="module-progress-mini-bar">
                <div class="module-progress-mini-fill" style="width: ${percent}%"></div>
              </div>
            </div>
          </div>
          <div class="tasks-list">
            ${visibleTasks.map(t => renderTaskRowHtml(t)).join('')}
          </div>
        </div>
      `;
    });

    els.archContainer.innerHTML = html;
  }

  /**
   * Render View 4: 37 Data Models
   */
  function renderDataModelsView() {
    if (!els.dataModelsContainer || !window.FURLIFE_DATA_MODELS) return;

    let html = '';
    window.FURLIFE_DATA_MODELS.forEach(model => {
      const visibleTasks = model.tasks.filter(t => matchTaskFilter(t));

      const totalTasks = model.tasks.length;
      let completedTasks = 0;
      model.tasks.forEach(t => {
        const eff = getTaskEffectiveState(t);
        if (eff.completed || eff.status === 'Completado') completedTasks++;
      });
      const percent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      html += `
        <div class="model-card">
          <div class="model-card-header">
            <div>
              <span class="model-name">${model.name}</span>
              <span class="model-table-name">${model.table}</span>
            </div>
            <div class="module-stats-compact">
              <span class="module-progress-text">${completedTasks}/${totalTasks} (${percent}%)</span>
              <div class="module-progress-mini-bar">
                <div class="module-progress-mini-fill" style="width: ${percent}%"></div>
              </div>
            </div>
          </div>
          <div class="arch-card-desc" style="font-size:12px;">${model.description}</div>
          <div class="tasks-list" style="margin-top:6px;">
            ${visibleTasks.map(t => renderTaskRowHtml(t)).join('')}
          </div>
        </div>
      `;
    });

    els.dataModelsContainer.innerHTML = html;
  }

  /**
   * Render View 5: Roadmap
   */
  function renderRoadmapView() {
    if (!els.roadmapContainer || !window.FURLIFE_ROADMAP_PHASES) return;

    const allTasks = getAllPlatformTasks();

    let html = '';
    window.FURLIFE_ROADMAP_PHASES.forEach(phase => {
      // Calculate phase metrics
      const phaseTasks = allTasks.filter(t => t.phase === phase.code);
      const total = phaseTasks.length;
      let completed = 0;
      phaseTasks.forEach(t => {
        const eff = getTaskEffectiveState(t);
        if (eff.completed || eff.status === 'Completado') completed++;
      });
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

      let cardClass = 'roadmap-phase-card';
      if (phase.id === 'FASE-1') cardClass += ' phase-card-mvp';
      else if (phase.id === 'FASE-2') cardClass += ' phase-card-fase2';
      else if (phase.id === 'FASE-3') cardClass += ' phase-card-fase3';
      else if (phase.id === 'FASE-4') cardClass += ' phase-card-fase4';

      const deliverablesHtml = phase.deliverables.map(d =>
        `<div class="deliverable-item"><span class="deliverable-check">✓</span><span>${escapeHtml(d)}</span></div>`
      ).join('');

      const kpisHtml = phase.kpis.map(k => `<li>${escapeHtml(k)}</li>`).join('');

      html += `
        <div class="${cardClass}" id="roadmap-card-${phase.id}">
          <div class="roadmap-header">
            <div>
              <span class="roadmap-code">${phase.code}</span>
              <h3 class="roadmap-title">${phase.title}</h3>
            </div>
            <div style="text-align: right;">
              <span class="nav-badge" style="background:${phase.color}; color:#fff; font-size:12px; padding:4px 10px;">${phase.badge}</span>
              <div style="font-size:16px; font-weight:800; color:var(--fl-primary); margin-top:4px;">${completed}/${total} tareas (${percent}%)</div>
            </div>
          </div>

          <div class="progress-track" style="height: 10px; margin-bottom: 16px;">
            <div class="progress-fill-general" style="width: ${percent}%; background:${phase.color};"></div>
          </div>

          <div class="roadmap-goal">
            <strong>🎯 Objetivo de Fase:</strong> ${escapeHtml(phase.goal)}
          </div>

          <div style="margin-bottom: 10px; font-size:13px; font-weight:700; color:var(--fl-primary);">Entregables Clave de Desarrollo:</div>
          <div class="roadmap-deliverables-grid">
            ${deliverablesHtml}
          </div>

          <div style="font-size: 13px; color: #475569; background: #F1F5F9; padding: 10px 14px; border-radius: 6px;">
            <strong style="color: var(--fl-primary);">Criterios de Éxito / KPIs de Fase:</strong>
            <ul style="margin-left: 18px; margin-top: 4px;">
              ${kpisHtml}
            </ul>
          </div>
        </div>
      `;
    });

    els.roadmapContainer.innerHTML = html;
  }

  function updateRoadmapProgress() {
    // Only re-render if roadmap is active or visible
    if (state.activeTab === 'roadmap') {
      renderRoadmapView();
    }
  }

  /**
   * Render all views
   */
  function renderAllViews() {
    renderModulesView();
    renderProcessesView();
    renderArchitectureView();
    renderDataModelsView();
    renderRoadmapView();
  }

  /**
   * Switch Active View Tab
   */
  function switchTab(tabId) {
    state.activeTab = tabId;

    // Update tab buttons
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    // Toggle views visibility
    const views = {
      modules: els.viewModules,
      processes: els.viewProcesses,
      architecture: els.viewArchitecture,
      datamodels: els.viewDataModels,
      roadmap: els.viewRoadmap,
      mindmap: els.viewMindmap,
      luna: els.viewLuna
    };

    Object.keys(views).forEach(k => {
      if (views[k]) {
        views[k].style.display = (k === tabId) ? 'block' : 'none';
      }
    });

    // Re-render specific view if needed
    if (tabId === 'roadmap') renderRoadmapView();
    if (tabId === 'mindmap' && window.furLifeMindmap && typeof window.furLifeMindmap.refresh === 'function') {
      window.furLifeMindmap.refresh();
    }
  }

  /**
   * Bind DOM Events
   */
  function bindEvents() {
    // Tab switching
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Live search input
    if (els.searchInput) {
      els.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        renderAllViews();
      });
    }

    // Keyboard shortcuts: '/' to search, 'Escape' to close modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
          modal.classList.remove('active');
        });
        state.activeModalTaskId = null;
      } else if (e.key === '/' && document.activeElement !== els.searchInput && document.activeElement !== els.notesTextarea) {
        e.preventDefault();
        if (els.searchInput) els.searchInput.focus();
      }
    });

    // Close modal when clicking backdrop
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
          state.activeModalTaskId = null;
        }
      });
    });

    // Phase filter
    if (els.filterPhase) {
      els.filterPhase.addEventListener('change', (e) => {
        state.filters.phase = e.target.value;
        renderAllViews();
      });
    }

    // Priority filter
    if (els.filterPriority) {
      els.filterPriority.addEventListener('change', (e) => {
        state.filters.priority = e.target.value;
        renderAllViews();
      });
    }

    // Status filter
    if (els.filterStatus) {
      els.filterStatus.addEventListener('change', (e) => {
        state.filters.status = e.target.value;
        renderAllViews();
      });
    }

    // Module dropdown filter
    if (els.filterModule) {
      // Populate 59 modules
      if (window.FURLIFE_MODULES) {
        window.FURLIFE_MODULES.forEach(m => {
          const opt = document.createElement('option');
          opt.value = m.num;
          opt.textContent = `${m.num < 10 ? '0' + m.num : m.num}. ${m.name}`;
          els.filterModule.appendChild(opt);
        });
      }
      els.filterModule.addEventListener('change', (e) => {
        state.filters.module = e.target.value;
        renderAllViews();
      });
    }

    // Quick Chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const chipVal = chip.getAttribute('data-chip');
        if (state.filters.quickChip === chipVal) {
          state.filters.quickChip = null;
          chip.classList.remove('active');
        } else {
          document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
          state.filters.quickChip = chipVal;
          chip.classList.add('active');
        }
        renderAllViews();
      });
    });

    // Expand / Collapse all modules
    if (els.btnExpandAll) {
      els.btnExpandAll.addEventListener('click', () => {
        if (window.FURLIFE_MODULES) {
          window.FURLIFE_MODULES.forEach(m => state.expandedModules.add(m.id));
        }
        renderModulesView();
      });
    }

    if (els.btnCollapseAll) {
      els.btnCollapseAll.addEventListener('click', () => {
        state.expandedModules.clear();
        renderModulesView();
      });
    }

    // Export JSON
    if (els.btnExportJson) {
      els.btnExportJson.addEventListener('click', exportChecklistToJson);
    }

    // Import JSON
    if (els.btnImportJson) {
      els.btnImportJson.addEventListener('click', openImportModal);
    }

    // Export CSV
    if (els.btnExportCsv) {
      els.btnExportCsv.addEventListener('click', exportChecklistToCsv);
    }

    // Reset Progress
    if (els.btnResetProgress) {
      els.btnResetProgress.addEventListener('click', openResetModal);
    }
  }

  /**
   * Helper: Phase badge CSS class
   */
  function getPhaseBadgeClass(phase) {
    if (!phase) return 'phase-mvp';
    if (phase.includes('MVP')) return 'phase-mvp';
    if (phase.includes('2')) return 'phase-fase2';
    if (phase.includes('3')) return 'phase-fase3';
    if (phase.includes('4')) return 'phase-fase4';
    return 'phase-mvp';
  }

  /**
   * Helper: HTML escape
   */
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Show Toast Notification
   */
  function showToast(message, icon = '✓') {
    if (!els.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    els.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ==========================================================================
  // PUBLIC API EXPOSED ON WINDOW FOR HTML EVENT HANDLERS
  // ==========================================================================
  window.furLifeApp = {
    /**
     * Toggle individual task checkbox
     */
    toggleTaskCheckbox(taskId, isChecked) {
      const newStatus = isChecked ? 'Completado' : 'Pendiente';
      setTaskState(taskId, {
        completed: isChecked,
        status: newStatus
      });
      showToast(isChecked ? `Tarea ${taskId} completada` : `Tarea ${taskId} marcada como pendiente`, isChecked ? '🟢' : '⚪');
    },

    /**
     * Change status dropdown
     */
    changeTaskStatus(taskId, newStatus) {
      const isCompleted = (newStatus === 'Completado');
      setTaskState(taskId, {
        status: newStatus,
        completed: isCompleted
      });
      showToast(`Tarea ${taskId} actualizada a "${newStatus}"`, '🔵');
    },

    /**
     * Change priority dropdown
     */
    changeTaskPriority(taskId, newPriority) {
      setTaskState(taskId, {
        priority: newPriority
      });
      showToast(`Prioridad de ${taskId} cambiada a ${newPriority}`, '⚡');
    },

    /**
     * Toggle module accordion
     */
    toggleModuleAccordion(modId) {
      if (state.expandedModules.has(modId)) {
        state.expandedModules.delete(modId);
      } else {
        state.expandedModules.add(modId);
      }
      const cardEl = document.getElementById(`mod-card-${modId}`);
      if (cardEl) {
        cardEl.classList.toggle('expanded', state.expandedModules.has(modId));
      }
    },

    /**
     * Batch complete / uncomplete all tasks in a module
     */
    batchSetModuleTasks(modId, completed) {
      if (!window.FURLIFE_MODULES) return;
      const mod = window.FURLIFE_MODULES.find(m => m.id === modId);
      if (!mod) return;

      const newStatus = completed ? 'Completado' : 'Pendiente';
      mod.tasks.forEach(t => {
        setTaskState(t.id, { completed, status: newStatus }, true);
      });

      saveStateToStorage();
      updateDashboardMetrics();
      renderModulesView();
      showToast(completed ? `Todas las tareas de ${mod.name} completadas` : `Módulo ${mod.name} reiniciado a pendiente`, '📋');
    },

    /**
     * Open task notes modal
     */
    openNotesModal(taskId) {
      const all = getAllPlatformTasks();
      const task = all.find(t => t.id === taskId);
      if (!task) return;

      state.activeModalTaskId = taskId;
      const eff = getTaskEffectiveState(task);

      if (els.modalTaskTitle) els.modalTaskTitle.textContent = `${task.id}: ${task.title}`;
      if (els.modalTaskMeta) els.modalTaskMeta.textContent = `${task.phase} • Prioridad: ${eff.priority} • Estado actual: ${eff.status}`;
      if (els.notesTextarea) els.notesTextarea.value = eff.notes || '';

      if (els.notesModal) els.notesModal.classList.add('active');
    },

    /**
     * Save task notes from modal
     */
    saveTaskNotes() {
      if (!state.activeModalTaskId || !els.notesTextarea) return;
      const notes = els.notesTextarea.value.trim();

      setTaskState(state.activeModalTaskId, { notes });
      this.closeModal('modal-notes');
      showToast('Observaciones guardadas con éxito', '📝');
    },

    /**
     * Close modal
     */
    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
      state.activeModalTaskId = null;
    },

    /**
     * Clickable dependency jump
     */
    jumpToTask(taskId) {
      state.searchQuery = taskId;
      if (els.searchInput) els.searchInput.value = taskId;

      // Find which module contains this task and expand it
      if (window.FURLIFE_MODULES) {
        window.FURLIFE_MODULES.forEach(m => {
          if (m.tasks.some(t => t.id === taskId)) {
            state.expandedModules.add(m.id);
          }
        });
      }

      switchTab('modules');
      renderModulesView();
      showToast(`Filtrando por dependencia: ${taskId}`, '🔍');

      setTimeout(() => {
        const row = document.getElementById(`task-row-${taskId}`);
        if (row) {
          row.scrollIntoView({ behavior: 'smooth', block: 'center' });
          row.style.outline = '3px solid #40BFB4';
          row.style.transition = 'outline 0.3s ease';
          setTimeout(() => { row.style.outline = ''; }, 2500);
        }
      }, 150);
    },

    /**
     * Clear all active filters
     */
    clearAllFilters() {
      state.searchQuery = '';
      state.filters = {
        phase: 'ALL',
        priority: 'ALL',
        status: 'ALL',
        module: 'ALL',
        quickChip: null
      };
      if (els.searchInput) els.searchInput.value = '';
      if (els.filterPhase) els.filterPhase.value = 'ALL';
      if (els.filterPriority) els.filterPriority.value = 'ALL';
      if (els.filterStatus) els.filterStatus.value = 'ALL';
      if (els.filterModule) els.filterModule.value = 'ALL';
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));

      renderAllViews();
      showToast('Filtros reiniciados', '🔄');
    },

    /**
     * Confirm reset of all progress
     */
    confirmResetProgress() {
      state.tasksState = {};
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(META_KEY);
      state.lastUpdated = null;

      this.closeModal('modal-reset');
      renderAllViews();
      updateDashboardMetrics();
      renderLastUpdated();
      showToast('Progreso reiniciado. Todo ha vuelto a Pendiente.', '⚠️');
    },

    /**
     * Handle Import of JSON
     */
    executeImportJson() {
      const input = document.getElementById('json-import-textarea');
      if (!input) return;
      try {
        const parsed = JSON.parse(input.value);
        if (typeof parsed !== 'object' || parsed === null) {
          throw new Error('El JSON debe ser un objeto con tareas');
        }

        // Support both full export object or direct state object
        const importedTasks = parsed.tasksState || parsed;
        state.tasksState = importedTasks;
        saveStateToStorage();

        this.closeModal('modal-import');
        renderAllViews();
        updateDashboardMetrics();
        showToast('Checklist importado con éxito', '📥');
      } catch (err) {
        alert('Error al procesar el archivo JSON: ' + err.message);
      }
    },

    /**
     * File Picker helper for JSON import
     */
    handleFileImport(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const textarea = document.getElementById('json-import-textarea');
        if (textarea) textarea.value = e.target.result;
      };
      reader.readAsText(file);
    },

    /**
     * Luna simulation prompt trigger
     */
    askLunaPrompt(promptText) {
      switchTab('luna');
      showToast(`Consultando a Luna: "${promptText}"`, '🤖');
      const responseBox = document.getElementById('luna-chat-preview');
      if (responseBox) {
        responseBox.innerHTML = `
          <div style="background: #F8FAFC; border: 1px solid var(--fl-border-light); padding: 14px; border-radius: 8px; margin-top: 10px;">
            <div style="font-weight: 700; color: var(--fl-primary); margin-bottom: 4px;">🐾 Luna dice:</div>
            <p style="font-size: 13.5px; color: #334155; line-height: 1.4;">
              Para "${promptText}": Recuerda que en el MVP puedes acceder mediante el atajo de teclado <strong>Ctrl+K</strong> o navegar al módulo correspondiente en la barra de pestañas. ¡Las funciones clínicas siempre deben ser verificadas por el médico responsable!
            </p>
          </div>
        `;
      }
    }
  };

  /**
   * Export State to JSON File
   */
  function exportChecklistToJson() {
    const all = getAllPlatformTasks();
    const exportData = {
      platform: "FurLife Veterinary Development Control Center",
      exportedAt: new Date().toISOString(),
      version: "1.0.0",
      summaryMetrics: calculateMetrics(),
      tasksState: state.tasksState,
      tasksCatalog: all.map(t => ({
        id: t.id,
        title: t.title,
        description: t.description,
        category: t.category,
        phase: t.phase,
        priority: t.priority,
        status: getTaskEffectiveState(t).status,
        completed: getTaskEffectiveState(t).completed,
        notes: getTaskEffectiveState(t).notes,
        dependencies: t.dependencies
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FurLife_Checklist_Maestro_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Archivo JSON exportado correctamente', '📥');
  }

  /**
   * Export State to CSV File
   */
  function exportChecklistToCsv() {
    const all = getAllPlatformTasks();

    let csv = '\uFEFF'; // UTF-8 BOM for Excel compatibility
    csv += 'ID,Módulo/Sección,Título,Descripción,Fase,Prioridad,Estado,Completada,Dependencias,Notas\r\n';

    all.forEach(t => {
      const eff = getTaskEffectiveState(t);
      const row = [
        `"${t.id}"`,
        `"${(t.parentName || '').replace(/"/g, '""')}"`,
        `"${(t.title || '').replace(/"/g, '""')}"`,
        `"${(t.description || '').replace(/"/g, '""')}"`,
        `"${t.phase || ''}"`,
        `"${eff.priority || ''}"`,
        `"${eff.status || ''}"`,
        `"${eff.completed ? 'SÍ' : 'NO'}"`,
        `"${(t.dependencies || []).join('; ')}"`,
        `"${(eff.notes || '').replace(/"/g, '""')}"`
      ];
      csv += row.join(',') + '\r\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FurLife_Checklist_Desarrollo_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Archivo CSV exportado correctamente', '📊');
  }

  /**
   * Open Reset Confirmation Modal
   */
  function openResetModal() {
    if (els.resetModal) els.resetModal.classList.add('active');
  }

  /**
   * Open JSON Import Modal
   */
  function openImportModal() {
    if (els.importModal) els.importModal.classList.add('active');
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
