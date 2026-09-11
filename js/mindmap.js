/**
 * FurLife Veterinary Development Control Center - Interactive Mindmap / Tree Engine
 * Renders an expandable hierarchical branch tree with checkable tasks,
 * progress propagation, dual grouping (by Phases or by Domains), zoom controls and search.
 */

(function() {
  'use strict';

  // Mindmap Internal State
  const mapState = {
    groupBy: 'phase', // 'phase' or 'domain'
    filterPendingOnly: false,
    searchQuery: '',
    zoomLevel: 1.0,
    collapsedNodes: new Set(), // Set of node keys that are collapsed
    initialized: false
  };

  // Predefined Clinical Domains for domain grouping
  const DOMAINS_CONFIG = [
    {
      id: 'dom-core',
      name: 'Arquitectura, Seguridad & Acceso',
      icon: '🛡️',
      color: '#365B6D',
      moduleNums: [1, 2, 3, 43, 44, 45, 46]
    },
    {
      id: 'dom-people',
      name: 'Gestión de Personas & Clientes',
      icon: '👥',
      color: '#4A768C',
      moduleNums: [4, 5, 6, 7]
    },
    {
      id: 'dom-clinical',
      name: 'Expediente Médico & Consultas',
      icon: '🩺',
      color: '#40BFB4',
      moduleNums: [8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
      id: 'dom-hospital',
      name: 'Cirugía, Internación & Lab',
      icon: '🏥',
      color: '#0D9488',
      moduleNums: [17, 18, 19, 20, 21]
    },
    {
      id: 'dom-operations',
      name: 'Agenda, Citas & Servicios',
      icon: '📅',
      color: '#2563EB',
      moduleNums: [22, 23, 24, 25]
    },
    {
      id: 'dom-petcare',
      name: 'Estética, Guardería & Hotel',
      icon: '✂️',
      color: '#D97706',
      moduleNums: [26, 27, 28]
    },
    {
      id: 'dom-inventory',
      name: 'Inventario, Kardex & Proveedores',
      icon: '📦',
      color: '#EA580C',
      moduleNums: [29, 30, 31, 32]
    },
    {
      id: 'dom-finance',
      name: 'Caja, Facturación & Pagos',
      icon: '💳',
      color: '#059669',
      moduleNums: [33, 34, 35]
    },
    {
      id: 'dom-comm',
      name: 'Comunicación, Calidad & Ranking',
      icon: '💬',
      color: '#7C3AED',
      moduleNums: [36, 37, 38, 39, 40, 41, 42, 47]
    },
    {
      id: 'dom-ai',
      name: 'Luna Asistente & IA Clínica',
      icon: '🤖',
      color: '#8B5CF6',
      moduleNums: [48, 49, 50]
    },
    {
      id: 'dom-devops',
      name: 'QA, Deploy, Infra & Docs',
      icon: '🚀',
      color: '#475569',
      moduleNums: [51, 52, 53, 54, 55, 56, 57, 58, 59]
    }
  ];

  /**
   * Initialize Mindmap module
   */
  function initMindmap() {
    renderMindmap();
    bindMindmapControls();
    mapState.initialized = true;
  }

  /**
   * Helper to retrieve task state safely from window.furLifeApp or localStorage
   */
  function getTaskState(taskId) {
    try {
      const stored = localStorage.getItem('furlife_dev_control_center_state_v1');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed[taskId]) {
          return {
            status: parsed[taskId].status || 'Pendiente',
            completed: parsed[taskId].completed !== undefined ? parsed[taskId].completed : false,
            priority: parsed[taskId].priority || 'MEDIA',
            notes: parsed[taskId].notes || ''
          };
        }
      }
    } catch (e) {
      console.error(e);
    }
    return {
      status: 'Pendiente',
      completed: false,
      priority: 'MEDIA',
      notes: ''
    };
  }

  /**
   * Check if a node is collapsed
   */
  function isCollapsed(nodeKey) {
    return mapState.collapsedNodes.has(nodeKey);
  }

  /**
   * Toggle node collapse/expand
   */
  function toggleNode(nodeKey) {
    if (mapState.collapsedNodes.has(nodeKey)) {
      mapState.collapsedNodes.delete(nodeKey);
    } else {
      mapState.collapsedNodes.add(nodeKey);
    }
    renderMindmap();
  }

  /**
   * Build Hierarchical Tree Structure based on current grouping
   */
  function buildTreeData() {
    if (!window.FURLIFE_MODULES) return null;

    const root = {
      key: 'root',
      title: 'FurLife Veterinary Platform',
      icon: '🐾',
      subtitle: 'Ecosistema PetTech Profesional',
      children: []
    };

    if (mapState.groupBy === 'phase') {
      // Group by 4 Roadmap Phases
      const phasesMap = [
        { code: 'FASE 1 — MVP', name: 'Fase 1 — MVP Clínico & Operativo', icon: '⚡', color: '#365B6D' },
        { code: 'FASE 2 — OPERACIÓN AVANZADA', name: 'Fase 2 — Operación Avanzada & Quirófano', icon: '🏥', color: '#40BFB4' },
        { code: 'FASE 3 — ECOSISTEMA', name: 'Fase 3 — Ecosistema Pet, Hotel & Teleconsulta', icon: '🌐', color: '#D97706' },
        { code: 'FASE 4 — INTELIGENCIA / IA', name: 'Fase 4 — Inteligencia Artificial & ML', icon: '🤖', color: '#8B5CF6' }
      ];

      phasesMap.forEach(p => {
        const phaseNode = {
          key: `phase-${p.code}`,
          title: p.name,
          icon: p.icon,
          color: p.color,
          level: 1,
          children: []
        };

        // Find modules belonging to this phase
        const phaseMods = window.FURLIFE_MODULES.filter(m => m.phase === p.code);
        phaseMods.forEach(mod => {
          const modNode = {
            key: `mod-${mod.id}`,
            id: mod.id,
            num: mod.num,
            title: `${mod.num < 10 ? '0' + mod.num : mod.num}. ${mod.name}`,
            category: mod.category,
            level: 2,
            tasks: mod.tasks,
            children: mod.tasks.map(t => ({
              key: `task-${t.id}`,
              id: t.id,
              title: t.title,
              description: t.description,
              category: t.category,
              phase: t.phase,
              priority: t.priority,
              dependencies: t.dependencies,
              level: 3,
              isLeaf: true
            }))
          };
          phaseNode.children.push(modNode);
        });

        root.children.push(phaseNode);
      });

    } else {
      // Group by Clinical / Operational Domains
      DOMAINS_CONFIG.forEach(dom => {
        const domNode = {
          key: `dom-${dom.id}`,
          title: dom.name,
          icon: dom.icon,
          color: dom.color,
          level: 1,
          children: []
        };

        const domMods = window.FURLIFE_MODULES.filter(m => dom.moduleNums.includes(m.num));
        domMods.forEach(mod => {
          const modNode = {
            key: `mod-${mod.id}`,
            id: mod.id,
            num: mod.num,
            title: `${mod.num < 10 ? '0' + mod.num : mod.num}. ${mod.name}`,
            category: mod.category,
            level: 2,
            tasks: mod.tasks,
            children: mod.tasks.map(t => ({
              key: `task-${t.id}`,
              id: t.id,
              title: t.title,
              description: t.description,
              category: t.category,
              phase: t.phase,
              priority: t.priority,
              dependencies: t.dependencies,
              level: 3,
              isLeaf: true
            }))
          };
          domNode.children.push(modNode);
        });

        if (domNode.children.length > 0) {
          root.children.push(domNode);
        }
      });
    }

    return root;
  }

  /**
   * Calculate task metrics for any node recursively
   */
  function getNodeTaskMetrics(node) {
    let total = 0;
    let completed = 0;

    if (node.isLeaf) {
      const state = getTaskState(node.id);
      return {
        total: 1,
        completed: (state.completed || state.status === 'Completado') ? 1 : 0
      };
    }

    if (node.children) {
      node.children.forEach(child => {
        const m = getNodeTaskMetrics(child);
        total += m.total;
        completed += m.completed;
      });
    }

    return { total, completed };
  }

  /**
   * Render Root and Sub-trees in HTML
   */
  function renderMindmap() {
    const container = document.getElementById('mindmap-canvas');
    if (!container) return;

    const tree = buildTreeData();
    if (!tree) return;

    const rootMetrics = getNodeTaskMetrics(tree);
    const rootPercent = rootMetrics.total > 0 ? Math.round((rootMetrics.completed / rootMetrics.total) * 100) : 0;

    let html = `
      <div class="tree-root-wrapper" style="transform: scale(${mapState.zoomLevel}); transform-origin: top center;">
        
        <!-- Root Node -->
        <div class="tree-node tree-root-node">
          <div class="tree-node-content root-card">
            <div class="root-badge">${tree.icon}</div>
            <div class="root-text-group">
              <div class="root-title">${tree.title}</div>
              <div class="root-subtitle">${tree.subtitle}</div>
              <div class="root-progress-bar-wrap">
                <div class="root-progress-bar-fill" style="width: ${rootPercent}%;"></div>
              </div>
              <div class="root-progress-stats">${rootMetrics.completed} de ${rootMetrics.total} tareas (${rootPercent}%)</div>
            </div>
          </div>
        </div>

        <!-- Level 1 Branches (Phases or Domains) -->
        <div class="tree-branches-container">
          ${tree.children.map(branch => renderBranchHtml(branch)).join('')}
        </div>

      </div>
    `;

    container.innerHTML = html;
  }

  /**
   * Render a Level 1 Branch (Phase or Domain)
   */
  function renderBranchHtml(branch) {
    const metrics = getNodeTaskMetrics(branch);
    const percent = metrics.total > 0 ? Math.round((metrics.completed / metrics.total) * 100) : 0;
    const collapsed = isCollapsed(branch.key);

    return `
      <div class="tree-branch-group ${collapsed ? 'collapsed' : ''}" id="node-${branch.key}">
        <div class="tree-connector-line"></div>
        
        <!-- Branch Header Node -->
        <div class="tree-node tree-branch-node" onclick="window.furLifeMindmap.toggleNode('${branch.key}')">
          <div class="branch-pill" style="border-left: 4px solid ${branch.color || '#365B6D'};">
            <span class="branch-toggle-icon">${collapsed ? '➕' : '➖'}</span>
            <span class="branch-icon">${branch.icon}</span>
            <span class="branch-title">${branch.title}</span>
            <span class="branch-count-badge" style="background: ${branch.color || '#365B6D'};">${metrics.completed}/${metrics.total} (${percent}%)</span>
          </div>
        </div>

        <!-- Branch Children (Modules) -->
        ${!collapsed ? `
          <div class="tree-modules-container">
            ${branch.children.map(mod => renderModuleNodeHtml(mod)).join('')}
          </div>
        ` : ''}

      </div>
    `;
  }

  /**
   * Render a Level 2 Module Node
   */
  function renderModuleNodeHtml(mod) {
    const metrics = getNodeTaskMetrics(mod);
    const percent = metrics.total > 0 ? Math.round((metrics.completed / metrics.total) * 100) : 0;
    const collapsed = isCollapsed(mod.key);

    // Filter tasks if pending only is active
    let visibleTasks = mod.children;
    if (mapState.filterPendingOnly) {
      visibleTasks = visibleTasks.filter(t => {
        const s = getTaskState(t.id);
        return !s.completed && s.status !== 'Completado';
      });
    }

    if (mapState.searchQuery) {
      const q = mapState.searchQuery.toLowerCase();
      visibleTasks = visibleTasks.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.id.toLowerCase().includes(q) || 
        (t.description && t.description.toLowerCase().includes(q))
      );
    }

    return `
      <div class="tree-module-group ${collapsed ? 'collapsed' : ''}" id="node-${mod.key}">
        <div class="tree-subconnector-line"></div>
        
        <!-- Module Header Card -->
        <div class="tree-node tree-module-node" onclick="window.furLifeMindmap.toggleNode('${mod.key}')">
          <div class="module-leaf-card">
            <div class="module-leaf-top">
              <span class="module-toggle-mini">${collapsed ? '▶' : '▼'}</span>
              <span class="module-leaf-num">${mod.num < 10 ? '0' + mod.num : mod.num}</span>
              <span class="module-leaf-name">${mod.title}</span>
            </div>
            <div class="module-leaf-bottom">
              <div class="module-mini-track">
                <div class="module-mini-fill" style="width: ${percent}%;"></div>
              </div>
              <span class="module-mini-stat">${metrics.completed}/${metrics.total}</span>
            </div>
          </div>
        </div>

        <!-- Module Tasks (Level 3 Leaves with interactive check) -->
        ${!collapsed ? `
          <div class="tree-tasks-container">
            ${visibleTasks.map(task => renderTaskLeafHtml(task)).join('')}
          </div>
        ` : ''}

      </div>
    `;
  }

  /**
   * Render a Level 3 Task Leaf Node with Functional Checkbox
   */
  function renderTaskLeafHtml(task) {
    const s = getTaskState(task.id);
    const isCompleted = s.completed || s.status === 'Completado';

    let cardClass = 'task-leaf-node';
    if (isCompleted) cardClass += ' task-completed';
    else if (s.status === 'En desarrollo') cardClass += ' task-in-dev';
    else if (s.status === 'En pruebas') cardClass += ' task-in-qa';
    else if (s.status === 'Bloqueado') cardClass += ' task-blocked';

    let prioIcon = '🟡';
    if (s.priority === 'CRÍTICA') prioIcon = '🔴';
    else if (s.priority === 'ALTA') prioIcon = '🟠';
    else if (s.priority === 'BAJA') prioIcon = '🟢';

    return `
      <div class="${cardClass}" id="mindmap-task-${task.id}">
        <label class="task-leaf-checkbox-label" onclick="event.stopPropagation()">
          <input 
            type="checkbox" 
            class="task-leaf-input" 
            ${isCompleted ? 'checked' : ''} 
            onchange="window.furLifeMindmap.handleTaskCheck('${task.id}', this.checked)"
          />
          <span class="custom-checkmark"></span>
        </label>

        <div class="task-leaf-details" onclick="window.furLifeMindmap.inspectTask('${task.id}')">
          <div class="task-leaf-header">
            <span class="task-leaf-id">${task.id}</span>
            <span class="task-leaf-prio" title="Prioridad: ${s.priority}">${prioIcon}</span>
            <span class="task-leaf-status-text">${s.status}</span>
          </div>
          <div class="task-leaf-title">${escapeHtml(task.title)}</div>
        </div>
      </div>
    `;
  }

  /**
   * Bind Mindmap Controls Bar
   */
  function bindMindmapControls() {
    // Grouping Radios / Buttons
    const btnGroupPhase = document.getElementById('map-group-phase');
    const btnGroupDomain = document.getElementById('map-group-domain');

    if (btnGroupPhase) {
      btnGroupPhase.addEventListener('click', () => {
        mapState.groupBy = 'phase';
        btnGroupPhase.classList.add('active');
        if (btnGroupDomain) btnGroupDomain.classList.remove('active');
        renderMindmap();
      });
    }

    if (btnGroupDomain) {
      btnGroupDomain.addEventListener('click', () => {
        mapState.groupBy = 'domain';
        btnGroupDomain.classList.add('active');
        if (btnGroupPhase) btnGroupPhase.classList.remove('active');
        renderMindmap();
      });
    }

    // Zoom buttons
    const btnZoomIn = document.getElementById('map-zoom-in');
    const btnZoomOut = document.getElementById('map-zoom-out');
    const btnZoomReset = document.getElementById('map-zoom-reset');

    if (btnZoomIn) {
      btnZoomIn.addEventListener('click', () => {
        mapState.zoomLevel = Math.min(mapState.zoomLevel + 0.15, 1.6);
        applyZoom();
      });
    }

    if (btnZoomOut) {
      btnZoomOut.addEventListener('click', () => {
        mapState.zoomLevel = Math.max(mapState.zoomLevel - 0.15, 0.5);
        applyZoom();
      });
    }

    if (btnZoomReset) {
      btnZoomReset.addEventListener('click', () => {
        mapState.zoomLevel = 1.0;
        applyZoom();
      });
    }

    // Expand / Collapse all
    const btnExpandBranches = document.getElementById('map-expand-all');
    const btnCollapseBranches = document.getElementById('map-collapse-all');

    if (btnExpandBranches) {
      btnExpandBranches.addEventListener('click', () => {
        mapState.collapsedNodes.clear();
        renderMindmap();
      });
    }

    if (btnCollapseBranches) {
      btnCollapseBranches.addEventListener('click', () => {
        const tree = buildTreeData();
        if (tree && tree.children) {
          tree.children.forEach(b => {
            mapState.collapsedNodes.add(b.key);
            b.children.forEach(m => mapState.collapsedNodes.add(m.key));
          });
        }
        renderMindmap();
      });
    }

    // Filter Pending Only Chip
    const filterPendingCheckbox = document.getElementById('map-filter-pending');
    if (filterPendingCheckbox) {
      filterPendingCheckbox.addEventListener('change', (e) => {
        mapState.filterPendingOnly = e.target.checked;
        renderMindmap();
      });
    }

    // Search in mindmap
    const mapSearchInput = document.getElementById('map-search-input');
    if (mapSearchInput) {
      mapSearchInput.addEventListener('input', (e) => {
        mapState.searchQuery = e.target.value.trim();
        // If searching, auto expand all so matches are visible
        if (mapState.searchQuery) {
          mapState.collapsedNodes.clear();
        }
        renderMindmap();
      });
    }

    // Fullscreen toggle
    const btnFullscreen = document.getElementById('map-fullscreen-btn');
    const mapContainer = document.getElementById('view-mindmap');
    if (btnFullscreen && mapContainer) {
      btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          mapContainer.requestFullscreen().catch(err => {
            mapContainer.classList.toggle('standalone-fullscreen');
          });
        } else {
          document.exitFullscreen();
        }
      });
    }
  }

  function applyZoom() {
    const wrapper = document.querySelector('.tree-root-wrapper');
    const zoomLabel = document.getElementById('map-zoom-label');
    if (wrapper) {
      wrapper.style.transform = `scale(${mapState.zoomLevel})`;
    }
    if (zoomLabel) {
      zoomLabel.textContent = `${Math.round(mapState.zoomLevel * 100)}%`;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // EXPOSE GLOBAL API FOR MINDMAP
  // ==========================================================================
  window.furLifeMindmap = {
    init: initMindmap,
    toggleNode: toggleNode,
    
    /**
     * Handle clicking task checkbox directly on the map
     */
    handleTaskCheck(taskId, isChecked) {
      if (window.furLifeApp && typeof window.furLifeApp.toggleTaskCheckbox === 'function') {
        // Use main app controller so KPIs, localStorage and toast fire synchronously!
        window.furLifeApp.toggleTaskCheckbox(taskId, isChecked);
      } else {
        // Fallback
        const newStatus = isChecked ? 'Completado' : 'Pendiente';
        try {
          const stored = localStorage.getItem('furlife_dev_control_center_state_v1') || '{}';
          const parsed = JSON.parse(stored);
          if (!parsed[taskId]) parsed[taskId] = {};
          parsed[taskId].completed = isChecked;
          parsed[taskId].status = newStatus;
          localStorage.setItem('furlife_dev_control_center_state_v1', JSON.stringify(parsed));
        } catch (e) {
          console.error(e);
        }
      }

      // Re-render the map tree to propagate updated progress badges up the branches
      renderMindmap();
    },

    /**
     * Inspect task in modal when clicking on task details
     */
    inspectTask(taskId) {
      if (window.furLifeApp && typeof window.furLifeApp.openNotesModal === 'function') {
        window.furLifeApp.openNotesModal(taskId);
      }
    },

    /**
     * Refresh map externally if checklist view mutated state
     */
    refresh() {
      renderMindmap();
    }
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initMindmap();
    });
  } else {
    initMindmap();
  }

})();
