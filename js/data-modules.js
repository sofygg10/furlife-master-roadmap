// FurLife Master Checklist - Data Modules (59 Modules)
// Generated automatically with exact structure and granular tasks
window.FURLIFE_MODULES = [
  {
    "id": "MOD-01",
    "num": 1,
    "name": "Arquitectura general del sistema",
    "category": "Infraestructura & Core",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Definición del diseño de software, estructura modular, contratos de API, patrones multi-tenant y estándares de código de FurLife.",
    "tasks": [
      {
        "id": "MOD-01-001",
        "title": "Definir patrón de arquitectura modular/hexagonal",
        "description": "Establecer la separación estricta entre capas de dominio, casos de uso, adaptadores e infraestructura.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-002",
        "title": "Diseñar arquitectura multi-tenant y aislamiento de datos",
        "description": "Definir estrategia multi-inquilino (tenant_id por clínica con Row-Level Security en PostgreSQL).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-01-003",
        "title": "Definir especificación de API RESTful y OpenAPI 3.1",
        "description": "Configurar generación de documentación Swagger interactiva y contratos de schemas.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-01-004",
        "title": "Estructurar proyecto frontend y Design System FurLife",
        "description": "Configurar componentes base, tokens de diseño con la paleta FurLife (#365B6D, #40BFB4, #E3F7F7) y tipografía.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-005",
        "title": "Implementar middleware de contexto de tenant y correlación",
        "description": "Inyectar tenant_id y x-request-id en cada request HTTP para trazabilidad transversal.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-01-006",
        "title": "Configurar sistema centralizado de manejo de excepciones",
        "description": "Estandarizar respuestas de error HTTP bajo la especificación RFC 7807 (Problem Details).",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-01-007",
        "title": "Diseñar capa de abstracción de almacenamiento (Storage Driver)",
        "description": "Permitir almacenamiento agnóstico en S3/GCS para fotos clínicas, radiografías y PDF de recetas.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-008",
        "title": "Configurar bus de eventos interno para desacoplamiento",
        "description": "Implementar pub/sub en memoria o Redis para eventos de dominio (ej: cita_creada, stock_agotado).",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-009",
        "title": "Configurar linters, formateadores y hooks de pre-commit",
        "description": "Establecer ESLint, Prettier, Black/Ruff y Husky para calidad estricta de código.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-010",
        "title": "Diseñar estrategia de versionado de API (/v1, /v2)",
        "description": "Garantizar retrocompatibilidad ante futuras aplicaciones de propietarios e integraciones.",
        "category": "API",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-011",
        "title": "Implementar soporte para internacionalización (i18n) y zonas horarias",
        "description": "Asegurar timestamps en UTC y formateo local de fecha/hora por sede de clínica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-012",
        "title": "Crear pruebas de humo de arranque de arquitectura",
        "description": "Validar ciclo de vida de conexión DB, Redis, endpoints de salud (/health/live y /health/ready).",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-005"
        ],
        "notes": ""
      },
      {
        "id": "MOD-01-013",
        "title": "Diseñar convención de nombres y estructura de base de datos",
        "description": "Estandarizar nombres snake_case para tablas y columnas, llaves primarias id y campos de auditoría.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-014",
        "title": "Configurar sistema de gestión de migraciones de base de datos",
        "description": "Herramienta de migraciones versionadas y reproducibles (Alembic / Prisma / Flyway / Knex).",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-015",
        "title": "Definir estándares de observabilidad y métricas de negocio",
        "description": "Contadores para citas creadas, consultas cerradas, facturación generada y latencias de API.",
        "category": "Arquitectura",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-01-016",
        "title": "Validar rendimiento de arranque y empaquetado del bundle",
        "description": "Asegurar que el bundle inicial no supere los presupuestos de tamaño web.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-02",
    "num": 2,
    "name": "Registro, autenticación y acceso",
    "category": "Seguridad & Acceso",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Onboarding de clínicas y veterinarios, autenticación segura basada en JWT/sesiones HttpOnly, recuperación de contraseña y 2FA.",
    "tasks": [
      {
        "id": "MOD-02-001",
        "title": "Modelar entidades de credenciales, usuarios y tokens",
        "description": "Definir tabla de usuarios, hashes bcrypt/argon2id, estados de cuenta y expiración.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-002",
        "title": "Implementar endpoint de registro de clínica y administrador inicial",
        "description": "Registrar simultáneamente al usuario maestro, su clínica asociada y roles de inicio.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-003",
        "title": "Implementar endpoint de inicio de sesión con JWT seguro",
        "description": "Generar Access Tokens de corta duración y Refresh Tokens rotativos almacenados en HttpOnly cookies.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-004",
        "title": "Crear interfaz de Login moderna con paleta FurLife",
        "description": "Diseñar formulario accesible, validaciones en tiempo real y feedback de errores.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-005",
        "title": "Crear interfaz de Onboarding y Registro para Clínicas",
        "description": "Wizard paso a paso con datos de la clínica, veterinario responsable y credenciales.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-006",
        "title": "Implementar flujo de recuperación de contraseña vía email",
        "description": "Tokens seguros criptográficos con tiempo límite de expiración de 15 minutos.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-007",
        "title": "Crear vista de restablecimiento de contraseña",
        "description": "Pantalla de cambio de clave con medidor de fuerza y validación de coincidencia.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-006"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-008",
        "title": "Implementar autenticación de doble factor (2FA / TOTP)",
        "description": "Soporte para apps de autenticación (Google Authenticator) con código QR y códigos de respaldo.",
        "category": "Seguridad",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-009",
        "title": "Implementar bloqueo automático por intentos fallidos y Rate Limiting",
        "description": "Proteger endpoints de auth contra ataques de fuerza bruta usando Redis bucket limiter.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-010",
        "title": "Implementar revocación global de sesiones e invalidación de tokens",
        "description": "Permitir cerrar sesión en todos los dispositivos tras cambio de clave.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-011",
        "title": "Implementar detección y cierre por inactividad de sesión clínica",
        "description": "Modal de advertencia tras 15 minutos de inactividad para proteger datos médicos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-012",
        "title": "Crear tests unitarios y de integración para flujos de autenticación",
        "description": "Cobertura de casos de credenciales inválidas, tokens vencidos y bloqueo por IP.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-02-013",
        "title": "Diseñar pantalla de confirmación de email con código OTP de 6 dígitos",
        "description": "Alternativa accesible de activación por código numérico de 6 dígitos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-02-014",
        "title": "Implementar registro de dispositivos y navegadores de confianza",
        "description": "Detectar inicios de sesión desde nuevas ubicaciones y notificar por email.",
        "category": "Seguridad",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-02-015",
        "title": "Configurar política estricta de complejidad de contraseñas",
        "description": "Mínimo 10 caracteres, mayúsculas, minúsculas, números y símbolos sin palabras de diccionario.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-02-016",
        "title": "Validar accesibilidad WCAG en todos los formularios de acceso",
        "description": "Etiquetas accesibles, foco visible y mensajes de error anunciados a lectores de pantalla.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-03",
    "num": 3,
    "name": "Roles y permisos",
    "category": "Seguridad & Acceso",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Sistema granular de control de acceso basado en roles (RBAC) para proteger historiales médicos, finanzas y operaciones clínicas.",
    "tasks": [
      {
        "id": "MOD-03-001",
        "title": "Diseñar matriz de roles y permisos del ecosistema FurLife",
        "description": "Definir roles base: SuperAdmin, Director Médico, Veterinario Titular, Veterinario Asistente, Recepcionista, Groomer, Auxiliar.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-03-002",
        "title": "Modelar tablas de Roles, Permisos y Asignaciones por Tenant",
        "description": "Permitir que las clínicas creen roles personalizados con permisos específicos.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-03-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-03-003",
        "title": "Implementar middleware / guard de autorización en backend",
        "description": "Validar permisos requeridos (ej: 'clinical_record:write', 'cash_register:close') en cada ruta.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-03-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-03-004",
        "title": "Crear directiva / componente de protección de interfaz en frontend",
        "description": "Ocultar botones, menús y vistas según los permisos del usuario logueado.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-03-005",
        "title": "Construir panel de administración de roles y permisos para clínicas",
        "description": "Interfaz intuitiva con interruptores por módulo para directores de clínica.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-03-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-03-006",
        "title": "Implementar permisos de solo lectura para auditores o pasantes",
        "description": "Garantizar que no puedan alterar diagnósticos, prescripciones ni saldos de caja.",
        "category": "Seguridad",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-03-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-03-007",
        "title": "Bloquear acceso a módulos veterinarios a personal de estética",
        "description": "Restringir la visualización de datos médicos confidenciales para estilistas y recepcionistas sin rol médico.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-03-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-03-008",
        "title": "Pruebas de penetración y escalado de privilegios de roles",
        "description": "Verificar que solicitudes manipuladas en API no permitan saltarse restricciones de rol.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-03-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-04",
    "num": 4,
    "name": "Gestión del veterinario",
    "category": "Gestión Profesional",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Perfiles profesionales, números de matrícula/cédula profesional, especialidades, firma digital, sellos y disponibilidad horaria.",
    "tasks": [
      {
        "id": "MOD-04-001",
        "title": "Modelar entidad de Veterinario con credenciales profesionales",
        "description": "Campos: cédula profesional, colegio de veterinarios, especialidades, firma y sello digital.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-04-002",
        "title": "Crear endpoints CRUD para el perfil profesional del veterinario",
        "description": "Gestión de biografía, títulos universitarios, especialidades y horarios de atención.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-04-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-04-003",
        "title": "Desarrollar pantalla de configuración de perfil del veterinario",
        "description": "Formulario con foto de perfil, datos de contacto profesional y matrícula médica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-04-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-04-004",
        "title": "Implementar módulo de carga y almacenamiento seguro de firma digital y sello",
        "description": "Permitir subir trazo digital o imagen PNG de firma con fondo transparente cifrado para recetas.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-007"
        ],
        "notes": ""
      },
      {
        "id": "MOD-04-005",
        "title": "Definir configuración de horarios y disponibilidad semanal",
        "description": "Definición de turnos, días de descanso y duración estándar por consulta (ej: 30 min).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-04-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-04-006",
        "title": "Soporte para veterinario independiente vs veterinario adscrito a clínica",
        "description": "Permitir modalidad de veterinario autónomo sin sede física fija (a domicilio).",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-04-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-04-007",
        "title": "Implementar gestión de reemplazos o vacaciones de veterinarios",
        "description": "Bloqueo de agenda y reasignación de pacientes durante ausencias.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-04-005"
        ],
        "notes": ""
      },
      {
        "id": "MOD-04-008",
        "title": "Pruebas de validación de cédulas profesionales y unicidad",
        "description": "Verificar que una cédula no pueda duplicarse dentro de la misma jurisdicción.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-04-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-05",
    "num": 5,
    "name": "Gestión de la clínica",
    "category": "Gestión Empresarial",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Configuración institucional, sedes, salas de consulta, quirófanos, datos fiscales, logotipo y personalización de marca.",
    "tasks": [
      {
        "id": "MOD-05-001",
        "title": "Modelar entidad Clínica y sedes operativas",
        "description": "Campos: razón social, nombre comercial, RFC/NIT/CIF, dirección, teléfonos, logo, config operativa.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-05-002",
        "title": "Crear endpoints de configuración y actualización de clínica",
        "description": "Permitir actualizar información institucional, horarios de guardia y teléfonos de urgencias.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-05-003",
        "title": "Construir pantalla de configuración general de la clínica",
        "description": "Panel administrativo con subida de logotipo, pie de página de recetas y datos fiscales.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-05-004",
        "title": "Modelar y gestionar espacios físicos (consultorios, quirófanos, jaulas)",
        "description": "Catálogo de recursos físicos asignables en agenda para evitar solapamientos.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-05-005",
        "title": "Soporte para gestión multi-sede dentro de la misma organización",
        "description": "Permitir cambiar entre sedes manteniendo inventario y agenda independientes.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-05-006",
        "title": "Configuración de servicios habilitados por clínica (Médico, Estética, Guardería)",
        "description": "Permitir activar o desactivar módulos según los servicios reales de la clínica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-05-007",
        "title": "Pruebas de aislamiento de configuración entre diferentes clínicas",
        "description": "Asegurar que la configuración de una clínica nunca impacte a otra (Multi-tenant audit).",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-06",
    "num": 6,
    "name": "Gestión de empleados",
    "category": "Gestión de Personal",
    "phase": "FASE 1 — MVP",
    "priority": "ALTA",
    "description": "Directorio de colaboradores, recepcionistas, asistentes, estilistas, invitaciones por email, turnos y comisiones.",
    "tasks": [
      {
        "id": "MOD-06-001",
        "title": "Modelar entidad Empleado vinculada a Usuario y Clínica",
        "description": "Campos: cargo, rol, fecha ingreso, salario base, esquema comisiones, estado activo/inactivo.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-03-002",
          "MOD-05-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-06-002",
        "title": "Implementar sistema de invitación de empleados vía enlace de un solo uso",
        "description": "Envío de correo con token único para que el empleado complete su registro y clave.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-06-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-06-003",
        "title": "Construir tabla y vista de gestión de empleados",
        "description": "Listado con filtros por rol, estado, búsqueda por nombre y botón de invitar empleado.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-06-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-06-004",
        "title": "Desarrollar formulario de alta y edición de empleado",
        "description": "Asignación de rol, sedes autorizadas, horario laboral y datos de contacto.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-06-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-06-005",
        "title": "Implementar desactivación y revocación inmediata de accesos de empleado",
        "description": "Deshabilitar acceso al sistema sin borrar registros históricos ni auditoría médica.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-06-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-06-006",
        "title": "Configuración de esquema de comisiones por servicio o venta (Estética/Veterinaria)",
        "description": "Cálculo porcentual de comisiones para peluqueros y médicos por consulta/vacuna.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-06-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-06-007",
        "title": "Pruebas de envío de invitaciones y expiración de enlaces de acceso",
        "description": "Verificar que invitaciones vencidas o reutilizadas arrojen error controlado.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-06-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-07",
    "num": 7,
    "name": "Propietarios/clientes",
    "category": "Gestión de Pacientes & CRM",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Ficha completa del tutor/cliente, canales de contacto, dirección, historial financiero, consentimiento de datos y múltiples mascotas asociadas.",
    "tasks": [
      {
        "id": "MOD-07-001",
        "title": "Modelar entidad Propietario/Cliente con datos de contacto",
        "description": "Campos: nombre, apellidos, identificación fiscal/DNI, teléfono principal, WhatsApp, email, dirección.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-002",
        "title": "Crear endpoints CRUD para Propietarios con validación de duplicados",
        "description": "Búsqueda predictiva por teléfono o documento para evitar duplicidad de clientes.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-003",
        "title": "Construir interfaz de alta rápida de Propietario durante admisión",
        "description": "Modal rápido o formulario ágil para recepción sin bloquear la atención médica de urgencia.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-004",
        "title": "Desarrollar perfil 360° del Propietario con pestañas de información",
        "description": "Pestañas: Mascotas asociadas, Historial de citas, Facturas/Deudas, Documentos firmados, Notas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-005",
        "title": "Implementar registro de tutor secundario o contacto de emergencia",
        "description": "Permitir asociar pareja, familiar o paseador autorizado con teléfono de respaldo.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-006",
        "title": "Implementar registro de consentimiento de protección de datos (RGPD/Habeas Data)",
        "description": "Checkbox auditable con fecha, IP y versión del aviso de privacidad aceptado.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-007",
        "title": "Construir buscador predictivo global de clientes con autocompletado",
        "description": "Búsqueda instantánea por nombre, teléfono, email o nombre de cualquiera de sus mascotas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-008",
        "title": "Implementar exportación de ficha de cliente y balance de cuenta",
        "description": "Generación de informe en PDF con resumen de servicios y saldo acumulado.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-009",
        "title": "Pruebas de validación de teléfonos internacionales y formato de documentos",
        "description": "Validación estricta de números E.164 para envíos fiables por WhatsApp/SMS.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-07-010",
        "title": "Validar formato de DNI/RFC/RUT/CIF según el país de la clínica",
        "description": "Algoritmo de comprobación de dígitos verificadores de documentos fiscales.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-07-011",
        "title": "Implementar libreta de direcciones para tutores que solicitan atención a domicilio",
        "description": "Múltiples direcciones geolocalizadas con indicaciones de acceso.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-07-012",
        "title": "Ficha de consentimiento para recepción de recordatorios por WhatsApp y Email",
        "description": "Interruptores granulares para marketing vs notificaciones operativas obligatorias.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-07-013",
        "title": "Implementar historial consolidado de facturas y deudas del cliente",
        "description": "Visualización de total pagado en el año, saldo pendiente y límite de crédito si aplica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-07-014",
        "title": "Validar experiencia de búsqueda predictiva en dispositivos móviles",
        "description": "Búsqueda ultra-rápida desde smartphone con teclado numérico para teléfonos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-08",
    "num": 8,
    "name": "Mascotas/pacientes",
    "category": "Gestión de Pacientes & CRM",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Ficha biológica del paciente: especie, raza, edad, sexo, estado reproductivo, microchip, color, foto, alertas médicas y tutor asociado.",
    "tasks": [
      {
        "id": "MOD-08-001",
        "title": "Diseñar estructura de datos del paciente",
        "description": "Definir entidad Mascota/Paciente con atributos demográficos, biológicos y clínicos.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-08-002",
        "title": "Crear modelo/base de datos de paciente",
        "description": "Implementar tabla patients en PostgreSQL con tipos de datos estrictos y llaves foráneas.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-003",
        "title": "Crear endpoint para registrar paciente",
        "description": "Endpoint POST /api/v1/patients con autenticación JWT y asignación automática de tenant_id.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-004",
        "title": "Crear formulario de registro",
        "description": "Componente reactivo ergonómico para recepción y veterinarios con diseño FurLife.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-005",
        "title": "Validar campos obligatorios",
        "description": "Validaciones en frontend y backend (nombre, especie, sexo, tutor) con Zod/Pydantic.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-006",
        "title": "Registrar especie",
        "description": "Selector de especie con catálogo estandarizado (Canino, Felino, Ave, Roedor, Reptil, Exótico).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-007",
        "title": "Registrar raza",
        "description": "Autocompletado dependiente de la especie seleccionada con más de 400 razas y opción 'Mestizo'.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-006"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-008",
        "title": "Registrar sexo",
        "description": "Selector de género (Macho / Hembra) con impacto en validaciones reproductivas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-009",
        "title": "Registrar fecha de nacimiento",
        "description": "Selector con cálculo dinámico en tiempo real de edad en años, meses y días o modo edad estimada.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-010",
        "title": "Registrar peso",
        "description": "Captura de peso en kilogramos con precisión decimal y registro en histórico de curvas de peso.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-011",
        "title": "Registrar color",
        "description": "Campo de color de pelaje, marcas distintivas o señas particulares del animal.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-012",
        "title": "Registrar microchip",
        "description": "Captura y validación de 15 dígitos numéricos conforme a estándares internacionales ISO 11784/11785.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-013",
        "title": "Registrar esterilización",
        "description": "Control de estado reproductivo (Entero / Castrado / Esterilizada) con fecha de procedimiento si aplica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-008"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-014",
        "title": "Asociar propietario",
        "description": "Buscador predictivo por teléfono o nombre de tutor para vincular al paciente a su cliente responsable.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-015",
        "title": "Subir fotografía",
        "description": "Carga multimedia con recorte cuadrado centrado, compresión WebP y almacenamiento seguro en S3.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-016",
        "title": "Generar identificador único",
        "description": "Creación de código alfanumérico único para expediente y generación de código QR identificativo.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-017",
        "title": "Crear perfil del paciente",
        "description": "Vista resumen 360° con foto, datos biológicos, badges de alerta médica (alergias, agresividad) y accesos rápidos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-016"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-018",
        "title": "Crear historial cronológico",
        "description": "Línea de tiempo médica interactiva que agrupa consultas, vacunas, cirugías, recetas y laboratorios.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-017"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-019",
        "title": "Implementar búsqueda",
        "description": "Buscador instantáneo en vivo por nombre de paciente, folio, microchip o nombre del tutor.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-020",
        "title": "Implementar filtros",
        "description": "Filtros multidimensionales por especie, estado (activo, hospitalizado, fallecido), raza y veterinario habitual.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-019"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-021",
        "title": "Implementar edición",
        "description": "Modal y formulario de actualización de datos con trazabilidad de cambios.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-022",
        "title": "Implementar eliminación lógica",
        "description": "Soft-delete con archivado de expediente para preservar historial legal y contable sin borrar de base de datos.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-023",
        "title": "Controlar permisos",
        "description": "Restricción de acceso para que solo personal autorizado de la clínica pueda consultar o editar expedientes.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-024",
        "title": "Registrar auditoría",
        "description": "Logueo inmutable de creación, visualización y modificación del paciente con IP, usuario y timestamp.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-025",
        "title": "Crear pruebas",
        "description": "Suite completa de pruebas unitarias, de integración y E2E para el ciclo de vida del paciente.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-026",
        "title": "Validar experiencia móvil",
        "description": "Optimización táctil de ficha y registro de paciente en smartphones para uso en campo o a domicilio.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-017"
        ],
        "notes": ""
      },
      {
        "id": "MOD-08-027",
        "title": "Validar experiencia desktop",
        "description": "Atajos de teclado y distribución de alta densidad de información para pantallas clínicas en consultorio.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-017"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-09",
    "num": 9,
    "name": "Historia clínica",
    "category": "Expediente Médico",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Línea de tiempo unificada e inmutable de la vida médica de la mascota, anamnesis histórica, bloqueos legales y exportación en PDF.",
    "tasks": [
      {
        "id": "MOD-09-001",
        "title": "Modelar arquitectura del expediente clínico electrónico",
        "description": "Estructura polimórfica que enlaza consultas, vacunas, cirugías, recetas y laboratorios en una sola línea de tiempo.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-09-002",
        "title": "Implementar inmutabilidad y sellado temporal de entradas clínicas",
        "description": "Bloqueo estricto de modificación tras 24 horas de cerrado el acto médico para cumplimiento legal.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-09-003",
        "title": "Construir vista de línea de tiempo cronológica del paciente",
        "description": "Timeline interactivo con filtros por tipo de evento (Consultas, Vacunas, Cirugías, Laboratorios).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-09-004",
        "title": "Desarrollar motor de generación de Historia Clínica completa en PDF",
        "description": "Renderizado server-side de informe oficial con membrete de clínica, firma y sello profesional.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-04-004",
          "MOD-05-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-09-005",
        "title": "Implementar sistema de notas de evolución y adendas médicas",
        "description": "Si se requiere corregir información pasada, registrar adenda con fecha, autor y motivo del cambio.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-09-006",
        "title": "Crear visor rápido de antecedentes patológicos y quirúrgicos",
        "description": "Widget lateral permanente con alergias, cirugías previas y enfermedades crónicas destacadas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-09-007",
        "title": "Control de accesos y registro estricto de lecturas de historia clínica",
        "description": "Loguear qué usuario visualizó cada historial clínico para auditoría de confidencialidad.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-03-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-09-008",
        "title": "Pruebas de integridad de sellado inmutable y generación de PDF",
        "description": "Verificar que ningún usuario (incluso admin) pueda alterar diagnósticos cerrados sin dejar rastro.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-10",
    "num": 10,
    "name": "Consultas veterinarias",
    "category": "Expediente Médico",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Flujo de atención médica estructurado bajo metodología SOAP (Subjetivo, Objetivo, Análisis, Plan), motivos de consulta y cierre de caso.",
    "tasks": [
      {
        "id": "MOD-10-001",
        "title": "Modelar entidad Consulta Médica con estructura SOAP",
        "description": "Campos: motivo, anamnesis (S), examen físico (O), diagnósticos diferenciales/definitivos (A), plan terapéutico (P).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-10-002",
        "title": "Crear endpoints para inicio, guardado borrador y cierre de consulta",
        "description": "Permitir auto-guardado en tiempo real mientras el veterinario redacta para evitar pérdida de datos.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-10-003",
        "title": "Desarrollar editor clínico ergonómico para atención médica",
        "description": "Formulario rápido con pestañas SOAP, plantillas de texto predefinidas y soporte para dictado.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-10-004",
        "title": "Integrar creación instantánea de receta médica desde la consulta",
        "description": "Añadir fármacos sin salir de la pantalla de consulta y vincular al plan terapéutico.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-10-005",
        "title": "Integrar solicitud de exámenes complementarios y procedimientos",
        "description": "Generar órdenes de laboratorio o rayos X directamente desde la pestaña de plan médico.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-10-006",
        "title": "Implementar vinculación de consulta con cita previa de agenda",
        "description": "Actualizar automáticamente el estado de la cita a 'En atención' y luego a 'Finalizada'.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-10-007",
        "title": "Generar resumen de consulta para el propietario",
        "description": "Hoja explicativa en lenguaje amigable para enviar por WhatsApp o imprimir al tutor.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-10-008",
        "title": "Pruebas de concurrencia y guardado automático en consulta",
        "description": "Validar recuperación de borrador ante desconexión de red accidental durante la consulta.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-10-009",
        "title": "Diseñar selector de motivos de consulta frecuentes con 1 clic",
        "description": "Atajos para motivos comunes: Control sano, Vacunación, Vómitos/Diarrea, Prurito, Cojera.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-10-010",
        "title": "Implementar temporizador de duración de consulta en vivo",
        "description": "Cronómetro discreto para que el veterinario conozca el tiempo dedicado al paciente.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-10-011",
        "title": "Módulo de comparación de fotos clínicas anteriores durante la consulta",
        "description": "Comparar estado de dermatitis o cicatrización respecto a la consulta anterior.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-10-012",
        "title": "Implementar botón de emergencia para conversión inmediata a Hospitalización o Cirugía",
        "description": "Traspaso de datos clínicos a orden de quirófano o internación sin reescribir nada.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-10-013",
        "title": "Pruebas de estrés de guardado masivo concurrente en horas pico de clínicas",
        "description": "Garantizar persistencia con 100 veterinarios guardando consultas al mismo tiempo.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-11",
    "num": 11,
    "name": "Signos vitales y examen físico",
    "category": "Expediente Médico",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Parámetros fisiológicos por especie: peso, temperatura, FC, FR, TLLC, mucosas, pulso, condición corporal y curvas de crecimiento.",
    "tasks": [
      {
        "id": "MOD-11-001",
        "title": "Modelar tabla de Signos Vitales y Examen Físico sistemático",
        "description": "Campos: peso (kg), temperatura (°C), FC (lpm), FR (rpm), TLLC (seg), color mucosas, condición corporal (1-9).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-11-002",
        "title": "Implementar motor de validación de rangos fisiológicos por especie",
        "description": "Alertar visualmente si la frecuencia cardíaca o temperatura están fuera de rango normal para gato o perro.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-11-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-11-003",
        "title": "Construir gráfica interactiva de evolución de peso en el tiempo",
        "description": "Gráfica con Chart.js/SVG para visualizar pérdida o ganancia de peso a lo largo de las visitas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-11-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-11-004",
        "title": "Desarrollar componente de examen físico por sistemas",
        "description": "Checklist rápido: Sistema Respiratorio, Cardiovascular, Digestivo, Tegumentario, Neurológico, Linfático, Ocular.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-11-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-11-005",
        "title": "Selector visual de condición corporal (Body Condition Score 1 a 9)",
        "description": "Ilustraciones interactivas para clasificar peso bajo, ideal, sobrepeso u obesidad canina/felina.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-11-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-11-006",
        "title": "Pruebas de validación de entradas numéricas y límites extremos",
        "description": "Verificar que no se permitan pesos negativos ni temperaturas imposibles (>45°C o <30°C).",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-11-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-12",
    "num": 12,
    "name": "Diagnósticos y antecedentes",
    "category": "Expediente Médico",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Codificación diagnóstica estandarizada, diagnósticos presuntivos vs definitivos, antecedentes familiares, alergias y morbilidades.",
    "tasks": [
      {
        "id": "MOD-12-001",
        "title": "Modelar entidad Diagnóstico con codificación veterinaria",
        "description": "Campos: código patología, nombre, tipo (presuntivo, diferencial, definitivo), estado (activo, resuelto, crónico).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-12-002",
        "title": "Precargar diccionario ontológico de enfermedades veterinarias",
        "description": "Catálogo basado en SNOMED CT Vet / VeNom Coding Group con más de 200 patologías frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-12-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-12-003",
        "title": "Construir componente de búsqueda rápida de diagnósticos con tags",
        "description": "Autocompletado predictivo para que el veterinario seleccione diagnósticos en un clic.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-12-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-12-004",
        "title": "Módulo de gestión de Alergias y Reacciones Adversas",
        "description": "Alerta roja persistente en la cabecera del paciente al seleccionar un fármaco con hipersensibilidad.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-12-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-12-005",
        "title": "Línea de tiempo de patologías crónicas y seguimiento de evolución",
        "description": "Listado de enfermedades crónicas activas (ej: Insuficiencia Renal, Diabetes, Dermatitis Atópica).",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-12-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-12-006",
        "title": "Pruebas de filtrado y búsqueda de diagnósticos por sinónimos",
        "description": "Validar que buscar 'sarna' muestre 'escabiosis' y términos asociados.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-12-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-13",
    "num": 13,
    "name": "Vacunación",
    "category": "Medicina Preventiva",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Registro de biológicos aplicados, número de lote, fecha de vencimiento del frasco, revacunación, calendario y carnet oficial.",
    "tasks": [
      {
        "id": "MOD-13-001",
        "title": "Modelar entidad Vacuna y Registro de Inmunización",
        "description": "Campos: biológico (Rabia, Séxtuple, Triple Felina, etc.), laboratorio fabricante, lote, vencimiento, fecha revacunación.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-13-002",
        "title": "Configurar calendarios de vacunación estándar por especie y edad",
        "description": "Esquemas pediátricos (cachorros 6, 8, 12 semanas) y refuerzos anuales de adultos.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-13-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-13-003",
        "title": "Construir formulario de registro rápido de vacuna con descuento de stock",
        "description": "Al registrar vacuna, descontar automáticamente la dosis del inventario por lote.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-13-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-13-004",
        "title": "Generar Carnet Digital de Vacunación oficial en PDF con código QR",
        "description": "Diseño profesional con sello de la clínica y fechas de próximos refuerzos para el tutor.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-13-003",
          "MOD-04-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-13-005",
        "title": "Motor de cálculo automático de fecha del próximo refuerzo",
        "description": "Sugerir fecha recomendada (ej: 21 días o 1 año) con posibilidad de ajuste manual.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-13-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-13-006",
        "title": "Generación de recordatorios automáticos de revacunación",
        "description": "Encolar notificaciones para WhatsApp/Email 7 días antes del vencimiento del refuerzo.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-13-005"
        ],
        "notes": ""
      },
      {
        "id": "MOD-13-007",
        "title": "Pruebas de validación de lotes vencidos de vacunas",
        "description": "Impedir registrar la aplicación de una vacuna cuyo lote esté vencido en inventario.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-13-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-13-008",
        "title": "Diseñar matriz visual de plan de vacunación canino y felino",
        "description": "Cuadrícula con semanas de vida recomendadas y marcas de vacunas aplicadas vs pendientes.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-13-009",
        "title": "Implementar registro de reacciones adversas post-vacunales",
        "description": "Captura de anafilaxia, inflamación local o letargo con alerta clínica persistente.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-13-010",
        "title": "Generación de certificado oficial de Vacunación Antirrábica para viajes",
        "description": "Documento con folio oficial, datos del médico, número de lote y validez internacional.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-13-011",
        "title": "Soporte para vacunas aplicadas en otra clínica externa",
        "description": "Registro en expediente con mención de procedencia sin descontar stock propio.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-14",
    "num": 14,
    "name": "Desparasitación",
    "category": "Medicina Preventiva",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Control de antiparasitarios internos y externos, principio activo, dosis según peso actual, frecuencia y recordatorios.",
    "tasks": [
      {
        "id": "MOD-14-001",
        "title": "Modelar entidad Desparasitación interna y externa",
        "description": "Campos: tipo (interna, externa, combinada), producto, principio activo, peso registrado, dosis, vía de administración.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-14-002",
        "title": "Desarrollar formulario de aplicación de desparasitante",
        "description": "Cálculo de dosis recomendada según el peso registrado en la sesión.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-14-001",
          "MOD-11-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-14-003",
        "title": "Conexión automática con inventario y lotes de antiparasitarios",
        "description": "Descontar pipetas o comprimidos del almacén de farmacia de la clínica.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-14-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-14-004",
        "title": "Visualización de historial de desparasitaciones en el expediente",
        "description": "Tabla cronológica de control de parásitos en la ficha del paciente.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-14-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-14-005",
        "title": "Configurar alertas de próxima desparasitación recomendada (trimestral/mensual)",
        "description": "Alertar en el dashboard cuando un paciente tenga su desparasitación vencida.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-14-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-14-006",
        "title": "Pruebas de registro y concordancia de dosis según peso",
        "description": "Validar que no se receten dosis fuera de la ventana de seguridad por kg de peso.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-14-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-15",
    "num": 15,
    "name": "Medicamentos",
    "category": "Farmacología & Terapéutica",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Vademécum veterinario, principios activos, concentraciones, formas farmacéuticas, vías de administración y calculadora posológica.",
    "tasks": [
      {
        "id": "MOD-15-001",
        "title": "Modelar catálogo de Medicamentos y Principios Activos",
        "description": "Campos: nombre comercial, principio activo, concentración (ej: 50mg/ml), forma (comprimido, jarabe, inyectable), vía, dosis min/max por kg.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-15-002",
        "title": "Precargar vademécum básico veterinario (antibióticos, AINEs, analgesia)",
        "description": "Base de datos con más de 150 medicamentos de uso veterinario común con dosis recomendadas.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-15-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-15-003",
        "title": "Construir calculadora posológica inteligente integrada",
        "description": "Ingresar peso del paciente y obtener automáticamente el volumen (ml) o fracción de pastilla a administrar.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-15-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-15-004",
        "title": "Implementar alertas de contraindicaciones por especie",
        "description": "Bloquear fármacos tóxicos para gatos (ej: Paracetamol/Acetaminofén, Permetrinas) con alerta sonora y modal crítico.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-15-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-15-005",
        "title": "Gestión de medicamentos de control especial / psicotrópicos",
        "description": "Registro especial con requerimiento de doble confirmación médica y libro de control.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-15-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-15-006",
        "title": "Pruebas de cálculo posológico y casos límite de toxicidad",
        "description": "Verificar exactitud matemática de fórmulas de cálculo de dosis con tolerancia cero de error.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-15-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-16",
    "num": 16,
    "name": "Recetas",
    "category": "Farmacología & Terapéutica",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Prescripción digital, posología, instrucciones claras para el tutor, firma/sello digital, código QR de validación y envío por WhatsApp.",
    "tasks": [
      {
        "id": "MOD-16-001",
        "title": "Modelar entidad Receta Médica y detalle de renglones prescritos",
        "description": "Campos: folio único, consulta_id, veterinario_id, instrucciones generales, fecha emisión, fecha caducidad de receta.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-001",
          "MOD-15-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-16-002",
        "title": "Construir interfaz de prescripción rápida en consulta",
        "description": "Agregar múltiples medicamentos con autocompletado de dosis, frecuencia (cada X horas) y duración (días).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-16-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-16-003",
        "title": "Generar PDF de Receta Oficial con membrete, firma y código QR",
        "description": "Diseño profesional imprimible o descargable con verificación pública de autenticidad vía QR.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-16-001",
          "MOD-04-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-16-004",
        "title": "Implementar envío de receta digital por WhatsApp y Correo",
        "description": "Compartir enlace seguro al PDF directamente al celular del propietario en un clic.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-16-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-16-005",
        "title": "Plantillas de recetas frecuentes para tratamientos comunes",
        "description": "Guardar combos (ej: protocolo de otitis externa, gastroenteritis viral) para prescribir en un clic.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-16-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-16-006",
        "title": "Pruebas de formato de impresión y legibilidad en dispositivos móviles",
        "description": "Asegurar que las instrucciones de dosis sean legibles y claras para evitar errores del tutor.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-16-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-17",
    "num": 17,
    "name": "Procedimientos",
    "category": "Atención Médica Quirúrgica",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "ALTA",
    "description": "Curaciones, sondajes uretrales, limpiezas dentales con ultrasonido, fluidoterapia ambulatoria, sedaciones y vendajes.",
    "tasks": [
      {
        "id": "MOD-17-001",
        "title": "Modelar catálogo y registros de Procedimientos Menores",
        "description": "Campos: nombre procedimiento, código, insumos utilizados, profesional ejecutor, tiempo empleado, complicaciones.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-17-002",
        "title": "Formulario de registro de ejecución de procedimiento",
        "description": "Captura de técnica utilizada, sedación empleada y estado de recuperación inmediata.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-17-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-17-003",
        "title": "Descargo automático de insumos utilizados en procedimiento",
        "description": "Descontar jeringas, agujas, gasas, soluciones antisépticas del stock de clínica.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-17-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-17-004",
        "title": "Integración de cobro automático de procedimientos en caja",
        "description": "Agregar el concepto del procedimiento al ticket de cobro del paciente.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-17-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-17-005",
        "title": "Pruebas de flujo de registro y consumo de material en procedimientos",
        "description": "Verificar consistencia de inventario tras registrar un procedimiento menor.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-17-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-18",
    "num": 18,
    "name": "Cirugías",
    "category": "Atención Médica Quirúrgica",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "CRÍTICA",
    "description": "Quirófano, consentimiento quirúrgico informado, protocolo anestésico, hoja transquirúrgica, cirujano, ayudante y cuidados postoperatorios.",
    "tasks": [
      {
        "id": "MOD-18-001",
        "title": "Modelar entidad Cirugía y Protocolo Quirúrgico",
        "description": "Campos: tipo intervención, cirujano principal, anestesista, protocolo anestésico, hora inicio/fin, monitorización, sutura usada.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-18-002",
        "title": "Generación y firma digital del Consentimiento Quirúrgico Informado",
        "description": "Documento legal donde el propietario autoriza riesgos de anestesia y procedimiento quirúrgico.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-18-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-18-003",
        "title": "Hoja de monitorización transquirúrgica en tiempo real",
        "description": "Registro minuto a minuto de saturación de O2 (SpO2), presión arterial, CO2 espirado y gas anestésico.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-18-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-18-004",
        "title": "Registro de indicaciones postquirúrgicas y alta de quirófano",
        "description": "Plan de analgesia, antibioterapia de cobertura y cita de retiro de puntos a los 10 días.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-18-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-18-005",
        "title": "Descargo en paquete de insumos quirúrgicos (Kits de cirugía)",
        "description": "Descargo en un clic del kit de esterilización, campos quirúrgicos, guantes e hilos de sutura.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-18-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-18-006",
        "title": "Pruebas de integridad legal del consentimiento firmado",
        "description": "Asegurar que el consentimiento firmado quede sellado con timestamp y no pueda alterarse.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-18-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-19",
    "num": 19,
    "name": "Hospitalización",
    "category": "Cuidados Críticos & Internación",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "CRÍTICA",
    "description": "Censo de jaulas/caniles, control horario de fluidoterapia, medicación pautada, curvas de evolución, alimentación y alta médica.",
    "tasks": [
      {
        "id": "MOD-19-001",
        "title": "Modelar entidades de Hospitalización, Jaulas y Registros Horarios",
        "description": "Campos: jaula_id, fecha_ingreso, motivo, diagnóstico presuntivo, veterinario a cargo, estado crítico/estable, fecha_alta.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-19-002",
        "title": "Construir panel visual de Censo de Hospitalización (Cages Board)",
        "description": "Vista tipo mapa de jaulas con código de colores según gravedad del paciente y badges de alerta.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-19-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-19-003",
        "title": "Hoja de indicaciones y medicación horaria (Kardex de enfermería)",
        "description": "Checklist por turnos para marcar medicamentos aplicados, dosis y firma del auxiliar.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-19-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-19-004",
        "title": "Monitoreo de fluidoterapia y velocidad de infusión",
        "description": "Cálculo de ritmo de goteo (gotas/min o ml/h) y balance hídrico de entradas/salidas.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-19-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-19-005",
        "title": "Generación de informe de evolución para tutores",
        "description": "Resumen diario con fotos del paciente para enviar a los tutores durante la hospitalización.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-19-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-19-006",
        "title": "Flujo de Alta Médica y liquidación de costos de internación",
        "description": "Cálculo automático de días de estancia, fármacos administrados y emisión del informe de alta.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-19-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-19-007",
        "title": "Pruebas de cambio de turno y persistencia de registros de hospitalización",
        "description": "Validar que la hoja de medicación se mantenga íntegra al cambiar de turno de enfermería.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-19-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-20",
    "num": 20,
    "name": "Exámenes de laboratorio",
    "category": "Diagnóstico por Imagen & Lab",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "CRÍTICA",
    "description": "Órdenes de laboratorio, hemograma, perfiles bioquímicos, urianálisis, coprológicos, citologías, adjuntos de PDF y analizadores en clínica.",
    "tasks": [
      {
        "id": "MOD-20-001",
        "title": "Modelar entidad Orden de Laboratorio y Parámetros Analíticos",
        "description": "Campos: tipo prueba, parámetros analizados, valores numéricos, unidades, rangos de referencia por especie, interpretación.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-09-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-20-002",
        "title": "Construir generador de solicitudes y órdenes de estudio",
        "description": "Impresión de volantes de envío a laboratorios externos o derivación interna.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-20-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-20-003",
        "title": "Captura manual de resultados con detección visual de anormalidades",
        "description": "Marcar en rojo o amarillo valores fuera del rango fisiológico canino o felino.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-20-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-20-004",
        "title": "Carga y visor integrado de informes de laboratorio en PDF",
        "description": "Almacenamiento seguro en S3 y visualizador PDF en el expediente del paciente.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-007"
        ],
        "notes": ""
      },
      {
        "id": "MOD-20-005",
        "title": "Gráfica comparativa de parámetros en el tiempo (ej: Creatinina, ALT)",
        "description": "Evolución histórica de analíticas para monitorear pacientes renales o hepáticos.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-20-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-20-006",
        "title": "Integración con equipos de laboratorio in-house (IDEXX / Zoetis / Heska)",
        "description": "Módulo de recepción automática de resultados vía protocolos HL7/ASTM.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-20-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-20-007",
        "title": "Pruebas de validación de rangos de laboratorio por especie y edad",
        "description": "Asegurar que los rangos de referencia de un cachorro difieran correctamente de un adulto.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-20-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-21",
    "num": 21,
    "name": "Documentos y archivos",
    "category": "Gestión Documental",
    "phase": "FASE 1 — MVP",
    "priority": "ALTA",
    "description": "Repositorio digital de consentimientos, radiografías (DICOM/JPEG), ecografías, contratos de custodia, recetas pasadas y firmas.",
    "tasks": [
      {
        "id": "MOD-21-001",
        "title": "Modelar entidad Documento y Archivo adjunto",
        "description": "Campos: paciente_id, propietario_id, nombre, categoría (rayos X, consentimiento, biopsia), tipo_mime, url_s3, tamaño, sha256.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-007"
        ],
        "notes": ""
      },
      {
        "id": "MOD-21-002",
        "title": "Implementar subida multipart segura con URLs prefirmadas",
        "description": "Subida directa a S3/GCS sin sobrecargar el servidor de backend con archivos pesados.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-21-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-21-003",
        "title": "Construir galería multimedia clínica del paciente",
        "description": "Galería con zoom, rotación y comparación de imágenes antes/después de tratamientos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-21-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-21-004",
        "title": "Generador de plantillas de consentimientos legales configurables",
        "description": "Editor para que cada clínica personalice sus textos de eutanasia, anestesia y cirugías.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-21-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-21-005",
        "title": "Soporte para visualización básica de estudios DICOM",
        "description": "Integración de visor ligero HTML5 Canvas para radiografías digitales veterinarias.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-21-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-21-006",
        "title": "Pruebas de seguridad de archivos y limitación de extensiones ejecutables",
        "description": "Bloquear subida de archivos maliciosos (.exe, .sh, scripts) y validar tipos MIME reales.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-21-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-22",
    "num": 22,
    "name": "Agenda",
    "category": "Operaciones & Citas",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Calendario multidisciplinario por veterinario, sala, quirófano y peluquería, vistas diaria, semanal y mensual, prevención de solapes.",
    "tasks": [
      {
        "id": "MOD-22-001",
        "title": "Modelar arquitectura de Agenda y Recursos de Calendario",
        "description": "Entidades para slots de tiempo, bloqueos por feriados/vacaciones, capacidad de consultorios.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-04-001",
          "MOD-05-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-22-002",
        "title": "Construir interfaz de calendario interactiva (Día, Semana, Mes, Timeline)",
        "description": "Vistas dinámicas con drag-and-drop para reprogramar citas de forma intuitiva.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-22-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-22-003",
        "title": "Filtro multidimensional de agenda por profesional y tipo de servicio",
        "description": "Permitir visualizar solo médicos veterinarios, solo peluquería o vista combinada de clínica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-22-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-22-004",
        "title": "Motor de detección y prevención de conflictos y solapamientos de citas",
        "description": "Impedir que un veterinario o un quirófano sean agendados dos veces a la misma hora.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-22-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-22-005",
        "title": "Sincronización con calendarios externos (Google Calendar / iCal)",
        "description": "Exportar eventos de citas del veterinario a su calendario personal de Google/Apple.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-22-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-22-006",
        "title": "Pruebas de rendimiento del calendario con alta densidad de citas",
        "description": "Asegurar renderizado fluido con más de 200 citas simultáneas en pantalla.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-22-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-22-007",
        "title": "Diseñar código de colores unificado para tipos de citas en calendario",
        "description": "Azul para consulta general, verde para vacunas, violeta para cirugías, naranja para estética.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-22-008",
        "title": "Implementar vista multi-profesional en columnas simultáneas",
        "description": "Permitir a recepción ver la disponibilidad de todos los veterinarios lado a lado.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-22-009",
        "title": "Módulo de bloqueo de horarios no laborables y pausas de almuerzo",
        "description": "Impedir citas en horarios de colación del personal de la clínica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-22-010",
        "title": "Atajos de teclado para navegación rápida de fechas (Hoy, Siguiente semana, Mes)",
        "description": "Agilidad máxima para recepción en momentos de atención telefónica rápida.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-23",
    "num": 23,
    "name": "Citas",
    "category": "Operaciones & Citas",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Ciclo completo de la cita: reserva, confirmación, reprogramación, llegada a sala de espera, no-show y cancelación justificada.",
    "tasks": [
      {
        "id": "MOD-23-001",
        "title": "Modelar entidad Cita con estados del ciclo de atención",
        "description": "Estados: Programada, Confirmada, En Sala de Espera, En Consulta, Finalizada, Cancelada, No asistió (No-Show).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-22-001",
          "MOD-07-001",
          "MOD-08-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-23-002",
        "title": "Crear endpoints para agendamiento, confirmación y cancelación de citas",
        "description": "Validación de disponibilidad y envío de eventos de notificación.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-23-003",
        "title": "Desarrollar modal ergonómico de agendamiento rápido de cita",
        "description": "Búsqueda reactiva de paciente/tutor, selección de motivo, duración estimada y recordatorio.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-23-004",
        "title": "Módulo de Sala de Espera virtual con tiempo de espera en vivo",
        "description": "Recepcionista marca llegada del paciente; el veterinario ve la alerta en su pantalla.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-23-005",
        "title": "Gestión de políticas de cancelación y registro de causas de inasistencia",
        "description": "Estadística de No-Shows por cliente para optimizar la ocupación de la clínica.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-23-006",
        "title": "Pruebas de cambio de estado de cita e impacto en sala de espera",
        "description": "Verificar sincronización de estados entre recepción y consultorio médico.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-004"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-24",
    "num": 24,
    "name": "Teleconsultas",
    "category": "Operaciones & Citas",
    "phase": "FASE 3 — ECOSISTEMA",
    "priority": "MEDIA",
    "description": "Orientación veterinaria remota, sala de video WebRTC cifrada, chat sincrónico, triaje virtual y receta digital a distancia.",
    "tasks": [
      {
        "id": "MOD-24-001",
        "title": "Modelar sesiones de Teleorientación y salas virtuales",
        "description": "Campos: cita_id, sala_token, duración, estado de conexión, notas de triaje remoto.",
        "category": "Base de Datos",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-24-002",
        "title": "Integrar proveedor WebRTC (LiveKit / Daily.co / Twilio Video)",
        "description": "Conexión segura de audio y video de baja latencia apta para conexiones móviles.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-24-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-24-003",
        "title": "Construir sala de videollamada con expediente flotante",
        "description": "El veterinario puede examinar al animal en video mientras consulta y anota en el historial médico.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-24-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-24-004",
        "title": "Disclaimers legales y límites de la teleorientación veterinaria",
        "description": "Aviso explícito al tutor indicando que la teleorientación no reemplaza el examen físico presencial.",
        "category": "Seguridad",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-24-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-24-005",
        "title": "Pruebas de reconexión y calidad de transmisión WebRTC",
        "description": "Validar comportamiento ante caídas de ancho de banda en videollamada.",
        "category": "QA",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-24-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-25",
    "num": 25,
    "name": "Servicios veterinarios",
    "category": "Catálogo & Tarifas",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Catálogo maestro de prestaciones médicas, tarifas por horario o urgencia, duración estimada e impuestos aplicables.",
    "tasks": [
      {
        "id": "MOD-25-001",
        "title": "Modelar catálogo de Servicios y Procedimientos Médicos",
        "description": "Campos: código, nombre, categoría, precio_base, iva_porcentaje, duración_minutos, requiere_profesional.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-25-002",
        "title": "CRUD administrativo de servicios con categorías clínicas",
        "description": "Configuración de consultas generales, urgencias nocturnas, ecografías, vacunas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-25-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-25-003",
        "title": "Soporte para tarifas diferenciadas por horario (horario diurno vs urgencias 24h)",
        "description": "Cálculo automático de recargo por atención fuera de horario laboral.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-25-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-25-004",
        "title": "Asociación de servicios con insumos predeterminados",
        "description": "Vincular un servicio con insumos que se consumen automáticamente al prestarlo.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-25-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-25-005",
        "title": "Pruebas de consistencia de precios e impuestos en catálogo de servicios",
        "description": "Validar cálculos con impuestos incluidos y desglosados.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-25-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-26",
    "num": 26,
    "name": "Estética canina y felina",
    "category": "Servicios Complementarios",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "ALTA",
    "description": "Peluquería canina/felina, baños, cortes de raza, deslanado, uñas, ficha estética, fotos antes/después y alerta de hallazgos veterinarios.",
    "tasks": [
      {
        "id": "MOD-26-001",
        "title": "Modelar entidad Ficha de Estética y Servicios Grooming",
        "description": "Campos: tipo servicio (baño, corte higiénico, corte de raza, deslanado, uñas), estilista, tipo de pelo, productos usados.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-26-002",
        "title": "Construir agenda independiente para área de estética/peluquería",
        "description": "Gestión de turnos por tina y mesa de corte sin mezclar con consultas médicas.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-22-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-26-003",
        "title": "Ficha técnica de estilismo: antes y después con fotos",
        "description": "Subida de fotografías del estado del pelaje a la llegada y resultado final entregado al tutor.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-26-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-26-004",
        "title": "Sistema de Alerta de Hallazgo Clínico en Peluquería (Groomer -> Veterinario)",
        "description": "Si el estilista detecta bultos, pulgas, garrapatas u otitis, generar alerta directa para interconsulta médica.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-26-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-26-005",
        "title": "Consumo automático de insumos de peluquería (champú medicado, acondicionador)",
        "description": "Descargo de porciones de insumos cosméticos del inventario general.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-26-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-26-006",
        "title": "Configuración de activación/desactivación del módulo de Estética por clínica",
        "description": "Ocultar completamente el módulo si la clínica no ofrece servicios de peluquería.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-006"
        ],
        "notes": ""
      },
      {
        "id": "MOD-26-007",
        "title": "Pruebas de envío de alerta de hallazgo clínico al panel médico",
        "description": "Verificar que la notificación aparezca en tiempo real en la pantalla del veterinario de turno.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-26-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-26-008",
        "title": "Catálogo de tipos de corte por raza (Schnauzer, Caniche, Bichón, Cocker)",
        "description": "Guía visual con fotos de referencia para estilistas y clientes.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-26-009",
        "title": "Registro de comportamiento del animal en peluquería (miedo al agua, reactivo a turbina)",
        "description": "Notas de seguridad para el groomer en futuras sesiones de baño.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-26-010",
        "title": "Generación de tarjeta digital de baño y corte para redes sociales del tutor",
        "description": "Tarjeta con diseño FurLife y fotos antes/después para compartir por WhatsApp.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-26-011",
        "title": "Cálculo de comisión individual para estilistas por servicio concluido",
        "description": "Módulo de liquidación quincenal o mensual para el área de estética.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-27",
    "num": 27,
    "name": "Guardería",
    "category": "Servicios Complementarios",
    "phase": "FASE 3 — ECOSISTEMA",
    "priority": "MEDIA",
    "description": "Daycare diurno para mascotas, check-in matutino, check-out vespertino, bitácora de comportamiento, socialización y alimentación.",
    "tasks": [
      {
        "id": "MOD-27-001",
        "title": "Modelar entidad Estancia de Guardería y Patios de Recreo",
        "description": "Campos: fecha, hora_entrada, hora_salida, patio_asignado, comportamiento con otros perros, alimentación, cuidador.",
        "category": "Base de Datos",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-27-002",
        "title": "Construir panel de Check-in y Check-out rápido de Guardería",
        "description": "Registro con escaneo de código QR de la mascota y verificación de vacunas obligatorias al día.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-27-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-27-003",
        "title": "Bitácora diaria de actividades y reportes de comportamiento",
        "description": "Envío de resumen al tutor sobre nivel de energía, juegos e ingesta de agua.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-27-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-27-004",
        "title": "Validación automática de vacunas vigentes para admitir en guardería",
        "description": "Bloquear check-in si la vacuna séxtuple o de tos de las perreras (Bordetella) está vencida.",
        "category": "Seguridad",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-13-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-27-005",
        "title": "Pruebas de control de aforo por patio de recreo",
        "description": "Verificar que el sistema no permita exceder el límite de perros por cuidador.",
        "category": "QA",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-27-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-28",
    "num": 28,
    "name": "Hotel/hospedaje",
    "category": "Servicios Complementarios",
    "phase": "FASE 3 — ECOSISTEMA",
    "priority": "MEDIA",
    "description": "Alojamiento nocturno, reservas de suites/habitaciones, dietas especiales, administración de medicamentos crónicos y reporte a tutores.",
    "tasks": [
      {
        "id": "MOD-28-001",
        "title": "Modelar entidad Reserva de Hotel y Habitaciones/Suites",
        "description": "Campos: fecha_checkin, fecha_checkout, tipo_habitacion, dieta_especial, pertenencias dejadas, medicacion_requerida.",
        "category": "Base de Datos",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-08-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-28-002",
        "title": "Calendario de ocupación hotelera y gestión de disponibilidad",
        "description": "Vista de ocupación por habitación con control de noches reservadas y checkout tardío.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-28-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-28-003",
        "title": "Inventario de pertenencias y hoja de custodia al ingreso",
        "description": "Registro fotográfico de correas, mantas, juguetes y medicamentos entregados por el tutor.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-28-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-28-004",
        "title": "Liquidación de noches de hospedaje y cargos adicionales de cuidado",
        "description": "Cálculo en caja de tarifas por noche y suplementos por días festivos.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-28-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-28-005",
        "title": "Pruebas de reservas solapadas en la misma suite de hospedaje",
        "description": "Garantizar disponibilidad real de caniles y habitaciones de hotel.",
        "category": "QA",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-28-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-29",
    "num": 29,
    "name": "Inventario",
    "category": "Inventario & Logística",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Kardex en tiempo real, múltiples almacenes (farmacia, quirófano, estética), lotes, caducidades, stock mínimo y alertas automáticas.",
    "tasks": [
      {
        "id": "MOD-29-001",
        "title": "Modelar arquitectura de Inventario, Lotes y Movimientos de Kardex",
        "description": "Tablas de Existencias, Lotes con fecha de caducidad, Almacenes y Registro de Movimientos (inmutables).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-29-002",
        "title": "Construir tabla de inventario con filtros por almacén, categoría y caducidad",
        "description": "Vista tabular con semáforos de stock: óptimo (verde), bajo (amarillo), crítico/agotado (rojo).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-29-003",
        "title": "Implementar motor de descuento First-Expired, First-Out (FEFO)",
        "description": "Al prescribir o consumir un producto, seleccionar y descontar prioritariamente el lote más próximo a caducar.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-29-004",
        "title": "Sistema de alertas tempranas de productos próximos a vencer (30, 60, 90 días)",
        "description": "Widget en dashboard con listado de fármacos en riesgo de caducidad para promocionar o rotar.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-29-005",
        "title": "Módulo de Ajustes de Inventario manuales (mermas, roturas, conteos físicos)",
        "description": "Registro auditable de variaciones con justificación obligatoria del empleado responsable.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-29-006",
        "title": "Soporte de importación masiva de inventario vía archivo Excel / CSV",
        "description": "Carga rápida inicial del stock de la clínica con validación previa de columnas y errores.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-29-007",
        "title": "Control de transferencias de inventario entre sedes o almacenes internos",
        "description": "Movimiento de fármacos del almacén central a farmacia de consultorio o quirófano.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-29-008",
        "title": "Pruebas de concurrencia en transacciones de stock (evitar stock negativo)",
        "description": "Validar que operaciones simultáneas de venta no dejen existencias en números negativos.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-29-009",
        "title": "Diseñar selector de almacén predeterminado por área (Farmacia, Quirófano, Tienda)",
        "description": "Asignar de qué almacén se descontarán los consumos según el rol y ubicación.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-29-010",
        "title": "Implementar reporte de Valorización Total del Inventario (al costo y a la venta)",
        "description": "Conocer el valor financiero en mercancía inmovilizada en la clínica.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-29-011",
        "title": "Módulo de Conteos Físicos de Inventario con pistola de código de barras",
        "description": "Comparar conteo real vs teórico y generar ajustes de merma auditables en un clic.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-29-012",
        "title": "Exportación de Kardex por producto a hoja de cálculo Excel",
        "description": "Auditoría contable completa de cada entrada, salida y saldo.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-30",
    "num": 30,
    "name": "Productos",
    "category": "Inventario & Logística",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Catálogo de artículos vendibles: alimentos secos y húmedos, accesorios, antiparasitarios, medicamentos OTC y juguetes.",
    "tasks": [
      {
        "id": "MOD-30-001",
        "title": "Modelar catálogo maestro de Productos",
        "description": "Campos: código de barras/EAN, SKU, nombre, marca, categoría, costo compra, precio venta, margen, iva, stock mínimo.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-30-002",
        "title": "Construir formulario CRUD de productos con lector de código de barras",
        "description": "Soporte para pistolas de código de barras USB/Bluetooth en el campo de búsqueda y alta.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-30-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-30-003",
        "title": "Gestión de categorías y subcategorías de retail pet",
        "description": "Árbol de categorías: Alimentos (Perro, Gato), Farmacia, Higiene, Snacks, Juguetes, Accesorios.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-30-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-30-004",
        "title": "Cálculo automático de márgenes de utilidad y precios sugeridos",
        "description": "Definir porcentaje de margen deseado y calcular precio final con o sin impuestos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-30-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-30-005",
        "title": "Pruebas de unicidad de código de barras y SKU por clínica",
        "description": "Garantizar que no existan productos duplicados con el mismo código de barras.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-30-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-31",
    "num": 31,
    "name": "Proveedores",
    "category": "Inventario & Logística",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "ALTA",
    "description": "Directorio de laboratorios y distribuidores, condiciones comerciales, órdenes de compra y recepción de mercadería con lote.",
    "tasks": [
      {
        "id": "MOD-31-001",
        "title": "Modelar catálogo de Proveedores y Distribuidores",
        "description": "Campos: razón social, RFC/CIF, asesor comercial, teléfono, email de pedidos, plazo de crédito (días).",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-31-002",
        "title": "Construir módulo de Órdenes de Compra a proveedores",
        "description": "Generador de pedidos formales con lista de productos bajo stock mínimo sugeridos por el sistema.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-31-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-31-003",
        "title": "Módulo de Recepción de Mercadería y cotejo de factura de compra",
        "description": "Ingreso directo a stock registrando número de lote del fabricante y fecha de caducidad real.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-31-002",
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-31-004",
        "title": "Historial de compras y variación de costo histórico por producto",
        "description": "Seguimiento de inflación o cambios de precio del proveedor en el tiempo.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-31-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-31-005",
        "title": "Pruebas de conciliación de recepción de mercadería vs orden de compra",
        "description": "Verificar que recepciones parciales de producto actualicen el saldo pendiente.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-31-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-32",
    "num": 32,
    "name": "Consumos de productos",
    "category": "Inventario & Logística",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Descargo automático y manual de insumos médicos utilizados en consultas, hospitalización, cirugías y peluquería.",
    "tasks": [
      {
        "id": "MOD-32-001",
        "title": "Modelar entidad Consumo de Insumo vinculada al acto clínico",
        "description": "Campos: acto_id (consulta, cirugia, hospitalizacion, estetica), producto_id, lote_id, cantidad, costo_unitario.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-32-002",
        "title": "Trigger / Evento de descargo automático al guardar consulta o procedimiento",
        "description": "Descontar automáticamente del stock las unidades aplicadas durante la atención.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-32-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-32-003",
        "title": "Interfaz rápida de registro de consumo de material gastable en quirófano",
        "description": "Botones rápidos para gasas, suturas, jeringas y sueros en la pantalla de cirugía.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-32-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-32-004",
        "title": "Reporte de costos de materiales por procedimiento realizado",
        "description": "Permitir a la gerencia conocer la rentabilidad real descontando el costo del material gastado.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-32-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-32-005",
        "title": "Pruebas de sincronización de stock tras consumos masivos en urgencias",
        "description": "Asegurar que el stock se actualice de inmediato en todos los puntos de la clínica.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-32-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-33",
    "num": 33,
    "name": "Caja",
    "category": "Finanzas & Facturación",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Apertura de turno, fondo inicial, control de ingresos y egresos en efectivo, arqueo ciego, cierre diario y conciliación de diferencias.",
    "tasks": [
      {
        "id": "MOD-33-001",
        "title": "Modelar entidades de Sesión de Caja, Movimientos de Efectivo y Cierres",
        "description": "Campos: caja_id, usuario_apertura, saldo_inicial, fecha_apertura, usuario_cierre, saldo_contado, saldo_esperado, diferencia.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-33-002",
        "title": "Construir flujo de Apertura de Caja con fondo inicial de cambio",
        "description": "Pantalla obligatoria para recepcionista antes de poder registrar cobros del día.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-33-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-33-003",
        "title": "Módulo de Registro de Entradas y Salidas varias de efectivo (Caja Chica)",
        "description": "Registro de pagos a mensajeros, compra de café, fletes con recibo y justificación.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-33-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-33-004",
        "title": "Construir pantalla de Arqueo Ciego y Cierre de Caja",
        "description": "El cajero cuenta y digita el efectivo físico sin conocer el saldo teórico para evitar manipulaciones.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-33-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-33-005",
        "title": "Generar reporte de Cierre Z de Caja en PDF / Ticket térmico",
        "description": "Desglose de cobros por forma de pago (Efectivo, Tarjeta, Transferencia) y sobrantes/faltantes.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-33-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-33-006",
        "title": "Auditoría de reapertura excepcional de caja por supervisores",
        "description": "Si se reabre una caja cerrada, requerir clave de gerente y loguear en auditoría.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-33-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-33-007",
        "title": "Pruebas de validación matemática de arqueo de caja",
        "description": "Verificar cálculo exacto de sumatorias de cobros, egresos y cálculo de discrepancias.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-33-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-33-008",
        "title": "Control de múltiples cajas simultáneas (Caja Mostrador 1, Mostrador 2, Peluquería)",
        "description": "Soporte para clínicas grandes con varios puestos de recepción operando a la vez.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-33-009",
        "title": "Impresión de recibo térmico de egreso de caja chica",
        "description": "Comprobante físico de salida de dinero para compras operativas menores.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-33-010",
        "title": "Notificación automática por email o WhatsApp al director de clínica al cerrar caja",
        "description": "Resumen ejecutivo con total recaudado, formas de pago y diferencias del turno.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-34",
    "num": 34,
    "name": "Facturación",
    "category": "Finanzas & Facturación",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Emisión de tickets de venta, facturas con desglose de impuestos, notas de crédito, descuentos y preparación para facturación electrónica fiscal.",
    "tasks": [
      {
        "id": "MOD-34-001",
        "title": "Modelar entidad Factura/Venta y Detalle de Renglones",
        "description": "Campos: serie, folio correlativo, cliente_id, subtotal, descuentos, base_imponible, iva, total, estado (pagada, pendiente, cancelada).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-34-002",
        "title": "Construir Punto de Venta (POS) rápido para recepción y mostrador",
        "description": "Carrito de venta que agrupa consultas médicas, vacunas, servicios de estética y productos de tienda.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-34-003",
        "title": "Generar Ticket de venta en formato estándar térmico 80mm y 58mm",
        "description": "Formato optimizado para impresoras térmicas de tickets con logo de la clínica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-34-004",
        "title": "Generar Factura oficial en PDF formato A4 membretada",
        "description": "Comprobante con datos fiscales completos del cliente y de la clínica para deducciones.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-34-005",
        "title": "Emisión de Notas de Crédito y Anulaciones con reversión de inventario",
        "description": "Anulación controlada que reingresa los productos al almacén y registra el motivo.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-34-006",
        "title": "Diseño de capa de integración para Facturación Electrónica por país",
        "description": "Estructurar adaptadores modulares para CFDI (México), DIAN (Colombia), SII (Chile), VeriFactu (España).",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-34-007",
        "title": "Pruebas de cálculo de redondeo de centavos y retenciones de impuestos",
        "description": "Validar que la suma de subtotales e impuestos coincida al céntimo en cualquier condición.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-34-008",
        "title": "Diseñar pantalla de búsqueda y reedición rápida de tickets del día",
        "description": "Reimpresión de tickets o corrección de comprobantes recién emitidos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-34-009",
        "title": "Soporte para facturación masiva a final de mes para criaderos o convenios corporativos",
        "description": "Agrupar todas las atenciones del mes de un cliente en una sola factura unificada.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "MOD-34-010",
        "title": "Validación estricta de folios fiscales correlativos sin huecos",
        "description": "Garantizar cumplimiento legal fiscal en series numéricas continuas.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-35",
    "num": 35,
    "name": "Pagos",
    "category": "Finanzas & Facturación",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Múltiples métodos de pago (efectivo, tarjeta, transferencia, links de pago), pagos divididos (split-payment), abonos y cuentas por cobrar.",
    "tasks": [
      {
        "id": "MOD-35-001",
        "title": "Modelar entidad Transacción de Pago vinculada a Factura",
        "description": "Campos: factura_id, metodo_pago (efectivo, datáfono, transferencia, stripe, link), monto, referencia_bancaria, fecha_pago.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-35-002",
        "title": "Soporte para Pagos Mixtos / Divididos (Split Payments)",
        "description": "Permitir que un cliente pague parte en efectivo y el restante con tarjeta o transferencia.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-35-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-35-003",
        "title": "Gestión de Cuentas por Cobrar y Abonos a cuenta de clientes",
        "description": "Control de saldo pendiente de clientes con historial de abonos parciales.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-35-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-35-004",
        "title": "Integración con pasarela de pagos online (Stripe / MercadoPago)",
        "description": "Generación de enlaces de cobro por WhatsApp para que el tutor pague desde su teléfono.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-35-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-35-005",
        "title": "Pruebas de conciliación de pagos y validación de referencias bancarias",
        "description": "Verificar que una factura no se marque 'Pagada' hasta cubrir el total exacto.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-35-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-36",
    "num": 36,
    "name": "Plantillas",
    "category": "Productividad & Herramientas",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "ALTA",
    "description": "Modelos preconfigurados de anamnesis, recetas frecuentes, protocolos quirúrgicos, indicaciones de alta y mensajes predefinidos.",
    "tasks": [
      {
        "id": "MOD-36-001",
        "title": "Modelar entidad Plantilla Clínica y Administrativa",
        "description": "Campos: clínica_id, usuario_creador, modulo_destino (anamnesis, receta, alta, consentimiento), titulo, contenido_json, variables_reemplazo.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-36-002",
        "title": "Construir editor de plantillas con variables dinámicas",
        "description": "Soporte para etiquetas automáticas como {{nombre_paciente}}, {{especie}}, {{peso}}, {{tutor_nombre}}.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-36-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-36-003",
        "title": "Catálogo de plantillas oficiales FurLife precargadas",
        "description": "Plantillas base de gastroenteritis, otitis, vacunación cachorros, esterilización y recomendaciones post-operatorias.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-36-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-36-004",
        "title": "Selector de inserción rápida de plantilla con atajo de teclado",
        "description": "Comando rápido (ej: escribir '/' o botón rápido) en el editor de consulta médica.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-36-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-36-005",
        "title": "Pruebas de renderizado de variables dinámicas en plantillas",
        "description": "Validar que ninguna variable quede sin reemplazar al generar el documento final.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-36-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-37",
    "num": 37,
    "name": "Reportes",
    "category": "Business Intelligence & Métricas",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "ALTA",
    "description": "Métricas financieras, ocupación de agenda, retención de clientes, morbilidad por especie, ventas por categoría y comisiones del personal.",
    "tasks": [
      {
        "id": "MOD-37-001",
        "title": "Diseñar vistas materializadas / queries analíticas para métricas",
        "description": "Agregaciones de facturación diaria, ticket promedio, servicios más rentables y ocupación de citas.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-001",
          "MOD-23-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-37-002",
        "title": "Construir panel interactivo de Reportes Financieros",
        "description": "Gráficas de ingresos vs gastos, comparativas mensuales y flujo de caja con filtros de fecha.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-37-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-37-003",
        "title": "Construir informe epidemiológico y de morbilidad veterinaria",
        "description": "Gráfica de patologías más diagnosticadas por especie, estacionalidad de enfermedades parasitarias.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-12-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-37-004",
        "title": "Módulo de cálculo y reporte de comisiones por profesional",
        "description": "Liquidación periódica de comisiones ganadas por médicos y estilistas según servicios concluidos.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-06-006"
        ],
        "notes": ""
      },
      {
        "id": "MOD-37-005",
        "title": "Exportador universal de reportes a Excel, CSV y PDF",
        "description": "Descarga de cualquier tabla analítica con un clic para contabilidad externa.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-37-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-37-006",
        "title": "Pruebas de exactitud en agregaciones financieras y márgenes",
        "description": "Auditar sumas contables cruzadas entre facturación y reportes analíticos.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-37-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-38",
    "num": 38,
    "name": "Notificaciones",
    "category": "Comunicación & Notificaciones",
    "phase": "FASE 1 — MVP",
    "priority": "ALTA",
    "description": "Centro de notificaciones interno, alertas push de navegador, recordatorios programados por cron y avisos de stock crítico.",
    "tasks": [
      {
        "id": "MOD-38-001",
        "title": "Modelar entidad Notificación interna y canales de despacho",
        "description": "Campos: usuario_id, tenant_id, tipo (sistema, cita, stock, urgencia), titulo, mensaje, enlace, leida (boolean).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-38-002",
        "title": "Construir Centro de Notificaciones en barra superior de la app",
        "description": "Campana con badge numérico, dropdown con últimos avisos y marcar todas como leídas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-38-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-38-003",
        "title": "Implementar WebSockets / SSE para notificaciones en tiempo real",
        "description": "Avisos instantáneos cuando un paciente llega a recepción o entra una reserva online.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-38-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-38-004",
        "title": "Motor de colas y cron jobs para recordatorios programados",
        "description": "Worker en segundo plano para procesar recordatorios de citas 24h antes y desparasitaciones.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-38-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-38-005",
        "title": "Pruebas de entrega de notificaciones y manejo de fallos en colas",
        "description": "Garantizar que caídas de red reintenten el envío sin duplicar mensajes al usuario.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-38-004"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-39",
    "num": 39,
    "name": "Comunicación con propietarios",
    "category": "Comunicación & Notificaciones",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "ALTA",
    "description": "Integración con WhatsApp Business API, plantillas oficiales de mensajería, confirmación de citas con 1 clic y seguimiento post-consulta.",
    "tasks": [
      {
        "id": "MOD-39-001",
        "title": "Modelar logs de mensajes y estados de entrega al cliente",
        "description": "Campos: cliente_id, canal (whatsapp, email, sms), plantilla_usada, estado (enviado, entregado, leido, fallido), costo.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-39-002",
        "title": "Integrar cliente WhatsApp Business Cloud API / Twilio",
        "description": "Envío automatizado de mensajes de confirmación de cita con botones interactivos de 'Confirmar' o 'Reprogramar'.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-39-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-39-003",
        "title": "Bandeja de historial de comunicaciones dentro del expediente del cliente",
        "description": "Permitir al veterinario ver qué mensajes se han enviado al tutor y cuándo.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-39-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-39-004",
        "title": "Flujo de seguimiento automatizado a las 48h post-consulta médica",
        "description": "Mensaje automático preguntando cómo evoluciona la mascota tras iniciar tratamiento.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-39-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-39-005",
        "title": "Pruebas de webhook de recepción de confirmación de citas vía WhatsApp",
        "description": "Validar que la respuesta del tutor actualice automáticamente la cita a 'Confirmada' en la agenda.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-39-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-40",
    "num": 40,
    "name": "Calificaciones y reseñas",
    "category": "Calidad & Reputación",
    "phase": "FASE 3 — ECOSISTEMA",
    "priority": "MEDIA",
    "description": "Encuestas de satisfacción post-atención (NPS, CSAT), comentarios de tutores, moderación de opiniones y métricas de calidad de servicio.",
    "tasks": [
      {
        "id": "MOD-40-001",
        "title": "Modelar entidad Reseña y Puntuación por Atención",
        "description": "Campos: cita_id, clinica_id, profesional_id, estrellas (1-5), nps_score (0-10), comentario, visibilidad_publica, fecha.",
        "category": "Base de Datos",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-40-002",
        "title": "Envío automático de micro-encuesta de satisfacción al finalizar la cita",
        "description": "Enlace móvil ligero de 2 preguntas enviado tras salir de la clínica.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-40-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-40-003",
        "title": "Panel de gestión de reputación y respuesta a reseñas para la clínica",
        "description": "Permitir a la gerencia responder públicamente o gestionar quejas privadas.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-40-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-40-004",
        "title": "Cálculo del Net Promoter Score (NPS) global de la clínica y profesionales",
        "description": "Métrica de calidad del servicio para incentivos internos del equipo.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-40-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-40-005",
        "title": "Pruebas de prevención de reseñas fraudulentas o duplicadas",
        "description": "Asegurar que solo clientes que hayan tenido una consulta finalizada puedan calificar.",
        "category": "QA",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-40-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-41",
    "num": 41,
    "name": "Ranking de veterinarios/clínicas",
    "category": "Calidad & Reputación",
    "phase": "FASE 3 — ECOSISTEMA",
    "priority": "BAJA",
    "description": "Algoritmo de posicionamiento en el directorio público FurLife según calidad, rapidez de atención, especialidades y opiniones verificadas.",
    "tasks": [
      {
        "id": "MOD-41-001",
        "title": "Modelar métricas de reputación para directorio FurLife",
        "description": "Campos: rating_promedio, tasa_respuesta, verificacion_cedula, numero_atenciones_exitosas, badge_verificado.",
        "category": "Base de Datos",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-40-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-41-002",
        "title": "Diseñar algoritmo de visibilidad equilibrada en directorio público",
        "description": "Ponderación justa sin penalizar clínicas nuevas, priorizando opiniones auditadas.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-41-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-41-003",
        "title": "Vista de perfil público de la clínica para captación de nuevos tutores",
        "description": "Página de aterrizaje optimizada con fotos de instalaciones, equipo médico y botón de agendar.",
        "category": "Frontend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-41-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-41-004",
        "title": "Pruebas de algoritmo de ranking y prevención de manipulación de notas",
        "description": "Validar resistencia ante granjas de reseñas o valoraciones atípicas.",
        "category": "QA",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-41-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-42",
    "num": 42,
    "name": "Dashboard",
    "category": "Experiencia de Usuario & Control",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Tablero principal operativo en tiempo real: citas del día, sala de espera activa, pacientes hospitalizados, alertas de stock y accesos rápidos.",
    "tasks": [
      {
        "id": "MOD-42-001",
        "title": "Diseñar arquitectura de widgets del Dashboard de FurLife",
        "description": "Widgets modulares configurables según el rol del usuario (Veterinario, Recepción, Administrador).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-42-002",
        "title": "Desarrollar KPIs principales del día (Citas, Pacientes atendidos, Facturado, Stock bajo)",
        "description": "Tarjetas superiores con métricas clave y comparativas con la semana anterior.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-42-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-42-003",
        "title": "Construir widget de Agenda y Sala de Espera del día",
        "description": "Listado de pacientes programados para hoy con selector rápido de inicio de consulta médica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-42-004",
        "title": "Construir widget de Pacientes Hospitalizados y Alertas Clínicas",
        "description": "Visualización rápida de pacientes en estado crítico y tratamientos pendientes de aplicar.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-19-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-42-005",
        "title": "Barra de Acceso Rápido flotante (Nueva Consulta, Nuevo Paciente, Cobro Express)",
        "description": "Atajos de teclado universales (ej: Ctrl+K / Cmd+K) para ejecutar acciones inmediatas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-42-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-42-006",
        "title": "Pruebas de rendimiento y recarga de datos del Dashboard en vivo",
        "description": "Garantizar carga de inicio del dashboard en menos de 800ms con datos completos.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-42-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-43",
    "num": 43,
    "name": "Configuración",
    "category": "Gestión Empresarial",
    "phase": "FASE 1 — MVP",
    "priority": "ALTA",
    "description": "Ajustes del sistema: datos de empresa, moneda principal, tipos de cambio, formato de fechas, zonas horarias y personalización de marca.",
    "tasks": [
      {
        "id": "MOD-43-001",
        "title": "Modelar parámetros de configuración por Tenant en formato Clave-Valor / JSONB",
        "description": "Estructura flexible para almacenar configuraciones globales y por módulo sin alterar esquemas.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-43-002",
        "title": "Construir centro de configuración modular con pestañas de ajuste",
        "description": "Secciones: General, Facturación, Agenda, Notificaciones, Impresión de Recetas, Seguridad.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-43-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-43-003",
        "title": "Configuración de moneda local y separadores de miles/decimales",
        "description": "Adaptación para pesos mexicanos, colombianos, euros, dólares con formateo estricto.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-43-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-43-004",
        "title": "Personalización de encabezados y pies de página para documentos oficiales",
        "description": "Editor con previsualización en vivo para recetas, consentimientos y presupuestos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-43-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-43-005",
        "title": "Pruebas de persistencia y aplicación inmediata de configuraciones globales",
        "description": "Verificar que el cambio de zona horaria se refleje al instante en el calendario de citas.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-43-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-44",
    "num": 44,
    "name": "Seguridad",
    "category": "Seguridad & Compliance",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Protección integral contra OWASP Top 10, saneamiento de entradas, Content Security Policy, cifrado en reposo y en tránsito (TLS 1.3).",
    "tasks": [
      {
        "id": "MOD-44-001",
        "title": "Implementar cabeceras de seguridad estrictas (HSTS, CSP, X-Frame-Options)",
        "description": "Evitar ataques de Clickjacking, MIME-sniffing y restricciones de script injection.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-005"
        ],
        "notes": ""
      },
      {
        "id": "MOD-44-002",
        "title": "Validación estricta y saneamiento de entradas en frontend y backend (Zod/Joi)",
        "description": "Prevenir ataques de Inyección SQL y Cross-Site Scripting (XSS) en todos los formularios.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-44-003",
        "title": "Cifrado de datos sensibles en reposo en base de datos (AES-256)",
        "description": "Cifrar identificaciones fiscales, contraseñas y datos biométricos o firmas digitales.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-44-004",
        "title": "Protección contra Cross-Site Request Forgery (Anti-CSRF Tokens)",
        "description": "Configurar tokens sincronizados en solicitudes de mutación de estado.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-02-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-44-005",
        "title": "Implementar escaneo automatizado de dependencias y vulnerabilidades (Trivy / Snyk)",
        "description": "Integración en CI/CD para bloquear commits con vulnerabilidades conocidas (CVEs).",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-009"
        ],
        "notes": ""
      },
      {
        "id": "MOD-44-006",
        "title": "Pruebas de penetración automatizadas (OWASP ZAP) en entorno de staging",
        "description": "Verificar que los escaneos de seguridad pasen con cero vulnerabilidades críticas o altas.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-44-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-45",
    "num": 45,
    "name": "Auditoría",
    "category": "Seguridad & Compliance",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Bitácora inmutable de eventos del sistema (quién, qué, cuándo, IP), registro de modificaciones en historias clínicas, inventario y caja.",
    "tasks": [
      {
        "id": "MOD-45-001",
        "title": "Modelar tabla de Audit Logs con diferencias JSONB (diff_before y diff_after)",
        "description": "Campos: id, tenant_id, usuario_id, accion (CREATE, UPDATE, DELETE), tabla, registro_id, ip, user_agent, timestamp.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-45-002",
        "title": "Implementar interceptores / triggers automáticos de auditoría en backend",
        "description": "Registrar automáticamente el antes y después en cambios de expedientes, cajas y stock.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-45-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-45-003",
        "title": "Construir visor de auditoría para directores de clínica y oficiales de cumplimiento",
        "description": "Buscador forense con filtros por usuario, fecha, tipo de operación y registro médico.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-45-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-45-004",
        "title": "Garantizar inmutabilidad y permisos de solo lectura absoluta en tabla de logs",
        "description": "Revocar permisos de UPDATE y DELETE a nivel de usuario de base de datos en la tabla audit_logs.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-45-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-45-005",
        "title": "Pruebas de integridad forense y verificación de no-repudio",
        "description": "Comprobar que cualquier intento de alteración o borrado de logs genere alerta crítica.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-45-004"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-46",
    "num": 46,
    "name": "Protección de datos",
    "category": "Seguridad & Compliance",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Cumplimiento de normativas de privacidad (RGPD, LOPD, Habeas Data), consentimiento informado, derecho al olvido y exportación de datos.",
    "tasks": [
      {
        "id": "MOD-46-001",
        "title": "Mapeo de flujo de datos personales y clasificación de confidencialidad",
        "description": "Inventariar qué datos de tutores y pacientes se recopilan, procesan y almacenan.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-46-002",
        "title": "Implementar flujo de solicitud de descarga de datos (Derecho de Portabilidad)",
        "description": "Generación de archivo JSON/ZIP con todos los datos y expedientes asociados al tutor.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-46-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-46-003",
        "title": "Implementar proceso de anonimización y derecho de supresión de datos personales",
        "description": "Anonimizar datos del tutor manteniendo las historias clínicas anónimas para estadística médica legal.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-46-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-46-004",
        "title": "Gestión de políticas de cookies, aviso legal y consentimientos expresos",
        "description": "Banners y registros de aceptación con versión exacta del aviso aceptado.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-07-006"
        ],
        "notes": ""
      },
      {
        "id": "MOD-46-005",
        "title": "Pruebas de cumplimiento de anonimización y borrado seguro",
        "description": "Validar que la anonimización no rompa la integridad referencial de consultas ni facturas.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-46-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-47",
    "num": 47,
    "name": "Integraciones externas",
    "category": "Ecosistema & APIs",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "ALTA",
    "description": "Webhooks de salida, pasarelas de pago (Stripe, Mercado Pago), WhatsApp API, laboratorios externos y software de contabilidad.",
    "tasks": [
      {
        "id": "MOD-47-001",
        "title": "Modelar entidad Webhook y suscripciones de eventos de clínica",
        "description": "Campos: tenant_id, url_destino, eventos_suscritos (ej: cita.creada, pago.registrado), secret_key, estado.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-47-002",
        "title": "Implementar motor de disparo seguro de Webhooks con firma HMAC-SHA256",
        "description": "Permitir a clínicas conectar su CRM o software contable externo con reintentos exponenciales.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-47-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-47-003",
        "title": "Construir panel de configuración de integraciones para la clínica",
        "description": "Activación guiada de API keys de WhatsApp, Stripe, terminales bancarias y laboratorios.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-47-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-47-004",
        "title": "Conector para exportación contable hacia QuickBooks / ContaPyme / Sage",
        "description": "Mapeo de cuentas contables para conciliar ventas e inventario automáticamente.",
        "category": "Backend",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-34-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-47-005",
        "title": "Pruebas de simulación de fallas de red en webhooks y reintentos (Dead Letter Queue)",
        "description": "Asegurar que webhooks caídos no bloqueen la operación de la clínica.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-47-002"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-48",
    "num": 48,
    "name": "Luna — asistente IA",
    "category": "Inteligencia Artificial",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Asistente inteligente FurLife: orientación por el sistema, búsquedas en lenguaje natural, resúmenes de expediente y comandos rápidos.",
    "tasks": [
      {
        "id": "MOD-48-001",
        "title": "Diseñar arquitectura del asistente Luna (Capa de orquestación y safety limits)",
        "description": "Definir límites estrictos: rol puramente asistencial administrativo, sin emisión de diagnósticos médicos.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-48-002",
        "title": "Construir interfaz flotante de Luna en la barra lateral o modal interactivo",
        "description": "Componente conversacional con el diseño visual FurLife, respuestas rápidas y atajos visuales.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-48-003",
        "title": "Implementar motor de intenciones administrativas simuladas para MVP",
        "description": "Respuestas inmediatas para: '¿Cómo agendar una cita?', '¿Dónde registro un nuevo lote?', 'Resumen del día'.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-48-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-48-004",
        "title": "Comandos de navegación rápida asistida por texto",
        "description": "Escribir 'ir a vacunas de Rocky' y redirigir inmediatamente a la pestaña de vacunas del paciente.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-48-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-48-005",
        "title": "Generador de borradores de mensajes para clientes con Luna",
        "description": "Redactar recordatorios amables de cobro o indicaciones post-atención para WhatsApp.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-48-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-48-006",
        "title": "Conexión con LLM seguro mediante Function Calling (Fase posterior)",
        "description": "Integrar modelo con endpoints para consultar agenda, buscar pacientes y redactar plantillas.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-48-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-48-007",
        "title": "Pruebas de barreras de seguridad (Prompt Injection & Medical Safety Guardrails)",
        "description": "Verificar que Luna rechace responder preguntas médicas directas sin advertir consultar al veterinario.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-48-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-49",
    "num": 49,
    "name": "Inteligencia artificial clínica futura",
    "category": "Inteligencia Artificial",
    "phase": "FASE 4 — INTELIGENCIA / IA",
    "priority": "ALTA",
    "description": "Soporte al diagnóstico diferencial, sugerencias de dosis con verificación humana, detección de interacciones farmacológicas y radiología asistida.",
    "tasks": [
      {
        "id": "MOD-49-001",
        "title": "Definir protocolo ético y legal de IA como Soporte a la Decisión Clínica (CDSS)",
        "description": "Establecer que ningún algoritmo reemplaza la firma o criterio del médico veterinario.",
        "category": "Seguridad",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-48-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-49-002",
        "title": "Motor de detección de interacciones medicamentosas potencialmente letales",
        "description": "Al prescribir dos fármacos incompatibles, mostrar alerta científica con bibliografía de soporte.",
        "category": "Backend",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-15-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-49-003",
        "title": "Asistente de Diagnóstico Diferencial basado en síntomas y signos clínicos",
        "description": "Sugerir posibles patologías candidatas ordenadas por probabilidad a partir de la anamnesis.",
        "category": "Backend",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-12-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-49-004",
        "title": "Módulo de visión por computadora para pre-análisis de radiografías óseas y torácicas",
        "description": "Detección de patrones de fracturas o cardiomegalia con mapas de calor (Grad-CAM) para revisión médica.",
        "category": "Backend",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-21-005"
        ],
        "notes": ""
      },
      {
        "id": "MOD-49-005",
        "title": "Sistema de validación clínica obligatoria con firma de consentimiento del veterinario",
        "description": "Registrar explícitamente en el expediente si el veterinario aceptó o descartó la sugerencia de la IA.",
        "category": "Seguridad",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-49-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-49-006",
        "title": "Pruebas de sensibilidad, especificidad y sesgo en sugerencias clínicas",
        "description": "Auditoría de falsos positivos y falsos negativos en casos clínicos de prueba históricos.",
        "category": "QA",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-49-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-50",
    "num": 50,
    "name": "Modelo ML FurLife futuro",
    "category": "Inteligencia Artificial",
    "phase": "FASE 4 — INTELIGENCIA / IA",
    "priority": "ALTA",
    "description": "Pipeline de Machine Learning de extremo a extremo: predicción de abandono de tratamientos, demanda de citas y agrupamiento epidemiológico.",
    "tasks": [
      {
        "id": "MOD-50-001",
        "title": "Diseño de pipeline de extracción, anonimización y preparación de datasets",
        "description": "Garantizar desidentificación total de propietarios y mascotas antes del preprocesamiento de datos.",
        "category": "Base de Datos",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-46-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-50-002",
        "title": "Feature Engineering y control estricto de Data Leakage temporal",
        "description": "Construcción de variables predictivas respetando líneas temporales para evitar filtración de futuro.",
        "category": "Backend",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-50-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-50-003",
        "title": "Entrenamiento de modelo de predicción de inasistencia (No-Show Prediction)",
        "description": "Algoritmo para anticipar ausencias en agenda y sugerir recordatorios reforzados o sobrecupo seguro.",
        "category": "Backend",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-50-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-50-004",
        "title": "Modelo de predicción de abandono de tratamientos crónicos (Churn & Compliance)",
        "description": "Identificar pacientes diabéticos o renales en riesgo de suspender la medicación pautada.",
        "category": "Backend",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-50-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-50-005",
        "title": "Implementación de MLOps: versionado de modelos con MLflow / DVC y registro de artefactos",
        "description": "Trazabilidad completa de hiperparámetros, métricas ROC-AUC, F1 y código de entrenamiento.",
        "category": "DevOps",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-50-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-50-006",
        "title": "Despliegue de microservicio de inferencia de baja latencia con monitoreo de Data Drift",
        "description": "Alertar automáticamente cuando la distribución de datos clínicos reales se desvíe del set de entrenamiento.",
        "category": "Backend",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-50-005"
        ],
        "notes": ""
      },
      {
        "id": "MOD-50-007",
        "title": "Módulo de Explicabilidad del modelo (SHAP / LIME)",
        "description": "Mostrar al veterinario qué factores influyeron en la predicción de la IA de forma transparente.",
        "category": "Frontend",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-50-006"
        ],
        "notes": ""
      },
      {
        "id": "MOD-50-008",
        "title": "Pruebas de estrés y benchmarking de inferencia de modelos en producción",
        "description": "Asegurar tiempos de respuesta de inferencia menores a 120ms sin degradar la aplicación principal.",
        "category": "QA",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-50-006"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-51",
    "num": 51,
    "name": "Pruebas",
    "category": "Calidad & Testing",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Estrategia integral de testing automatizado: Unit tests, Integration tests, E2E tests, pruebas de contratos de API y pruebas de concurrencia.",
    "tasks": [
      {
        "id": "MOD-51-001",
        "title": "Configurar frameworks de pruebas unitarias (Jest/Vitest para frontend, Pytest para backend)",
        "description": "Configuración de mocks, entornos de base de datos en memoria para pruebas rápidas y fiables.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-51-002",
        "title": "Implementar pruebas unitarias de lógica médica y cálculos críticos",
        "description": "Cobertura del 100% en calculadora posológica, conteo de stock FEFO y conciliaciones de caja.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-15-003",
          "MOD-29-003",
          "MOD-33-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-51-003",
        "title": "Implementar pruebas de integración de endpoints de API con Base de Datos real",
        "description": "Verificar flujos completos de creación de expedientes, cierre de consultas y generación de cobros.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-51-004",
        "title": "Automatizar pruebas End-to-End con Playwright o Cypress",
        "description": "Simular flujos reales de recepción, atención médica, emisión de receta y cobro en mostrador.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-51-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-51-005",
        "title": "Pruebas de aislamiento multi-inquilino (Tenant Leaks Prevention)",
        "description": "Validar automáticamente que ningún request de una clínica pueda acceder a datos de otra.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-51-006",
        "title": "Configurar reportes de cobertura automatizados con umbral mínimo del 85%",
        "description": "Bloquear el paso a producción en CI/CD si la cobertura de código baja del umbral pactado.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-51-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-52",
    "num": 52,
    "name": "Calidad",
    "category": "Calidad & Testing",
    "phase": "FASE 1 — MVP",
    "priority": "ALTA",
    "description": "Análisis estático de código (SonarQube), control de deuda técnica, accesibilidad web (WCAG 2.1 AA) y consistencia de interfaz.",
    "tasks": [
      {
        "id": "MOD-52-001",
        "title": "Integrar escaneo continuo de calidad de código con SonarQube / CodeClimate",
        "description": "Detección temprana de duplicación de código, complejidad ciclomática y malos olores (code smells).",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-009"
        ],
        "notes": ""
      },
      {
        "id": "MOD-52-002",
        "title": "Auditoría de accesibilidad web WCAG 2.1 nivel AA",
        "description": "Garantizar contraste de color adecuado con la paleta FurLife, navegación completa por teclado y lectores de pantalla.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-52-003",
        "title": "Validación de compatibilidad Cross-Browser (Chrome, Safari, Edge, Firefox)",
        "description": "Asegurar renderizado uniforme de calendarios, tablas y gráficas en todos los navegadores modernos.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-52-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-52-004",
        "title": "Revisión sistemática de experiencia de usuario en tablets y móviles",
        "description": "Optimizar pantallas críticas (admisión de urgencias, hospitalización) para uso clínico en iPads y tablets Android.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-42-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-52-005",
        "title": "Pruebas de regresión visual automatizadas",
        "description": "Detectar desviaciones no deseadas en componentes del Design System en cada versión.",
        "category": "QA",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-52-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-53",
    "num": 53,
    "name": "Rendimiento",
    "category": "Arquitectura & DevOps",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Optimización de consultas SQL, indexación estratégica, caching distribuido con Redis, compresión Brotli y tiempos de carga óptimos.",
    "tasks": [
      {
        "id": "MOD-53-001",
        "title": "Auditoría e indexación óptima de base de datos (B-Tree, GIN para búsquedas de texto)",
        "description": "Garantizar que búsquedas entre 500,000 registros respondan en menos de 30 milisegundos.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-53-002",
        "title": "Estrategia de caché distribuida con Redis para catálogos y catálogos estáticos",
        "description": "Cachear razas, vademécum y configuraciones institucionales con invalidación inteligente.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-53-003",
        "title": "Optimización de carga frontend (Code Splitting, Lazy Loading de rutas y componentes)",
        "description": "Empaquetado eficiente para bundle inicial menor a 200KB y First Contentful Paint < 1.2s.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-53-004",
        "title": "Compresión HTTP con Brotli / Gzip y políticas de cache de activos estáticos",
        "description": "Servicio eficiente de imágenes y fuentes a través de CDN con encabezados Cache-Control inmutables.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-53-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-53-005",
        "title": "Pruebas de carga y estrés con k6 / Locust (500 solicitudes concurrentes)",
        "description": "Comprobar estabilidad de la API sin degradación de latencia bajo picos de apertura matutina de clínicas.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-53-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-54",
    "num": 54,
    "name": "Escalabilidad",
    "category": "Arquitectura & DevOps",
    "phase": "FASE 2 — OPERACIÓN AVANZADA",
    "priority": "ALTA",
    "description": "Arquitectura stateless para escalado horizontal de contenedores, réplicas de lectura de base de datos y particionamiento de tablas.",
    "tasks": [
      {
        "id": "MOD-54-001",
        "title": "Garantizar arquitectura Backend 100% Stateless",
        "description": "Sesiones y tokens desacoplados del nodo ejecutor para permitir escalado horizontal sin pérdida de estado.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-54-002",
        "title": "Configuración de réplicas de lectura de base de datos (Read Replicas)",
        "description": "Desviar consultas pesadas de reportes y analítica hacia réplicas para no saturar el nodo primario de escritura.",
        "category": "Base de Datos",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-54-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-54-003",
        "title": "Particionamiento de tablas masivas por rango de tiempo (audit_logs, movimientos_kardex)",
        "description": "Mantener rendimiento óptimo de consultas históricas particionando por año y mes.",
        "category": "Base de Datos",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-45-001",
          "MOD-29-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-54-004",
        "title": "Implementar colas de procesamiento asíncrono con Celery / BullMQ / RabbitMQ",
        "description": "Procesar PDFs pesados, envíos masivos y backups fuera del ciclo de vida del request HTTP.",
        "category": "Backend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-54-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-54-005",
        "title": "Pruebas de auto-escalado horizontal de pods/contenedores",
        "description": "Validar que un incremento brusco de tráfico active nuevos contenedores sin errores 502/504.",
        "category": "DevOps",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-54-001"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-55",
    "num": 55,
    "name": "Deploy",
    "category": "Arquitectura & DevOps",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Pipeline de CI/CD automatizado, contenedores Docker multi-etapa, despliegues sin tiempo de inactividad (Zero Downtime) y rollbacks automáticos.",
    "tasks": [
      {
        "id": "MOD-55-001",
        "title": "Crear Dockerfiles multi-stage optimizados para frontend y backend",
        "description": "Imágenes seguras, mínimas (Alpine/Distroless), sin secretos embebidos y ejecutadas sin privilegios root.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-55-002",
        "title": "Configurar pipeline de CI/CD en GitHub Actions / GitLab CI",
        "description": "Compilación, pase de tests, auditoría de seguridad y despliegue automático por ramas (dev, staging, main).",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-55-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-55-003",
        "title": "Estrategia de despliegue Zero Downtime (Blue/Green o Rolling Updates)",
        "description": "Garantizar que actualizar una versión no interrumpa las consultas médicas que estén en curso en las clínicas.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-55-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-55-004",
        "title": "Automatización de migraciones de base de datos con verificación previa",
        "description": "Ejecución de migraciones en modo transaccional y rollback automático en caso de fallo de schema.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-55-005",
        "title": "Gestión segura de variables de entorno y secretos con Vault o AWS Secrets Manager",
        "description": "Inyección segura de claves de producción sin almacenarlas en repositorios de código.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-55-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-55-006",
        "title": "Pruebas de procedimiento de Rollback de versión en menos de 60 segundos",
        "description": "Simular fallo en producción y verificar regreso inmediato a la versión estable previa.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-55-003"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-56",
    "num": 56,
    "name": "Monitoreo",
    "category": "Arquitectura & DevOps",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Observabilidad transversal: métricas con Prometheus/Grafana, rastreo de errores en tiempo real con Sentry, logs centralizados y alertas.",
    "tasks": [
      {
        "id": "MOD-56-001",
        "title": "Integrar Sentry para captura de errores en tiempo real en frontend y backend",
        "description": "Reporte instantáneo con stacktrace desofuscado (sourcemaps), contexto de usuario y URL.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-006"
        ],
        "notes": ""
      },
      {
        "id": "MOD-56-002",
        "title": "Configurar exportador de métricas Prometheus y dashboards Grafana",
        "description": "Monitorización de uso de CPU, RAM, pool de conexiones DB, tasa de errores 5xx y tiempos de respuesta.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-56-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-56-003",
        "title": "Endpoints de comprobación de salud del sistema (/healthz, /readyz)",
        "description": "Verificación del estado activo de la base de datos, Redis, almacenamiento y servicios externos.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-005"
        ],
        "notes": ""
      },
      {
        "id": "MOD-56-004",
        "title": "Centralización y agregación de logs estructurados en JSON (ELK / Loki)",
        "description": "Indexación y búsqueda rápida de logs para depuración ágil de incidentes clínicos.",
        "category": "DevOps",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-56-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-56-005",
        "title": "Configurar alertas automáticas en Slack / PagerDuty ante degradación del servicio",
        "description": "Notificar de inmediato al equipo de guardia si la latencia supera los 2 segundos o hay errores 500.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-56-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-56-006",
        "title": "Pruebas de disparo y recepción de alertas críticas ante corte de conexión DB",
        "description": "Validar que la notificación llegue al canal de emergencia en menos de 2 minutos.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-56-005"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-57",
    "num": 57,
    "name": "Backup y recuperación",
    "category": "Continuidad del Negocio & DR",
    "phase": "FASE 1 — MVP",
    "priority": "CRÍTICA",
    "description": "Copias de seguridad automatizadas georreplicadas, Point-in-Time Recovery (PITR), plan de recuperación ante desastres (RPO < 1h, RTO < 4h).",
    "tasks": [
      {
        "id": "MOD-57-001",
        "title": "Configurar backups automatizados diarios y continuos de base de datos (WAL-G / pgBackRest)",
        "description": "Copias continuas de transacciones para posibilitar recuperación punto en el tiempo (PITR).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-57-002",
        "title": "Cifrado de backups con llaves asimétricas y georreplicación en región secundaria",
        "description": "Almacenar copias cifradas fuera de la región primaria para proteger contra caídas de datacenter.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-57-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-57-003",
        "title": "Redactar y documentar el Plan de Recuperación ante Desastres (Disaster Recovery Plan)",
        "description": "Procedimiento paso a paso para restaurar el servicio completo en caso de incidente mayor.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-57-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-57-004",
        "title": "Simulacro periódico trimestral de restauración completa de datos",
        "description": "Ejecutar una prueba en ambiente estéril restaurando un backup y verificando consistencia de datos médicos.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-57-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-57-005",
        "title": "Validación de cumplimiento de objetivos RPO (< 1 hora) y RTO (< 4 horas)",
        "description": "Auditar métricas de recuperación para garantizar continuidad del negocio a las clínicas.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-57-004"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-58",
    "num": 58,
    "name": "Documentación técnica",
    "category": "Documentación & Conocimiento",
    "phase": "FASE 1 — MVP",
    "priority": "ALTA",
    "description": "Especificación interactiva OpenAPI/Swagger, diagramas de arquitectura modelo C4, diccionario de datos y guías de incorporación para desarrolladores.",
    "tasks": [
      {
        "id": "MOD-58-001",
        "title": "Generar y mantener portal interactivo de documentación de API (Swagger UI / Redoc)",
        "description": "Catálogo completo de endpoints con ejemplos de payloads de petición y respuesta.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-58-002",
        "title": "Elaborar diagramas de arquitectura C4 (Contexto, Contenedores, Componentes)",
        "description": "Documentación visual de la topología de servicios, bases de datos y flujos de integración.",
        "category": "Arquitectura",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-58-003",
        "title": "Construir Diccionario de Datos exhaustivo con descripción de cada tabla y campo",
        "description": "Guía de referencia de entidades, relaciones foráneas, índices y reglas de integridad.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-58-004",
        "title": "Redactar Guía de Onboarding para nuevos desarrolladores (Setup local con Docker Compose)",
        "description": "Instrucciones de clonación, configuración de variables de entorno y ejecución en 1 comando.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-55-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-58-005",
        "title": "Pruebas de reproducibilidad del entorno de desarrollo local desde cero",
        "description": "Verificar que un desarrollador nuevo pueda levantar el proyecto sin errores en menos de 15 minutos.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-58-004"
        ],
        "notes": ""
      }
    ]
  },
  {
    "id": "MOD-59",
    "num": 59,
    "name": "Documentación de usuario",
    "category": "Documentación & Conocimiento",
    "phase": "FASE 1 — MVP",
    "priority": "ALTA",
    "description": "Manuales interactivos por rol (veterinario, recepcionista, administrador), micro-tutoriales guiados en la interfaz (tours), preguntas frecuentes y videos.",
    "tasks": [
      {
        "id": "MOD-59-001",
        "title": "Elaborar manual de usuario para Médicos Veterinarios",
        "description": "Guía paso a paso de atención clínica: uso de SOAP, receta digital, vacunas y solicitud de exámenes.",
        "category": "Documentación",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-10-003"
        ],
        "notes": ""
      },
      {
        "id": "MOD-59-002",
        "title": "Elaborar manual de usuario para Personal de Recepción y Mostrador",
        "description": "Guía operativa de agendamiento, cobro en caja, registro de tutores y check-in en sala de espera.",
        "category": "Documentación",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-23-004",
          "MOD-33-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-59-003",
        "title": "Elaborar manual de usuario para Administradores de Clínica y Gerencia",
        "description": "Guía de configuración de sedes, permisos de empleados, reportes financieros y gestión de inventario.",
        "category": "Documentación",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-05-003",
          "MOD-37-002"
        ],
        "notes": ""
      },
      {
        "id": "MOD-59-004",
        "title": "Implementar tours interactivos en la aplicación (Onboarding guiado con Shepherd.js / Intro.js)",
        "description": "Recorridos visuales con pasos destacados para nuevos usuarios en su primer inicio de sesión.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-01-004"
        ],
        "notes": ""
      },
      {
        "id": "MOD-59-005",
        "title": "Construir Centro de Ayuda y Preguntas Frecuentes (FAQ) accesible desde la barra superior",
        "description": "Buscador de artículos de soporte y resolución de dudas comunes directamente en la app.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-59-001"
        ],
        "notes": ""
      },
      {
        "id": "MOD-59-006",
        "title": "Pruebas de usabilidad y comprensión de los manuales con personal de clínica real",
        "description": "Sesiones de testeo para validar que recepcionistas y veterinarios operen sin fricción.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [
          "MOD-59-004"
        ],
        "notes": ""
      }
    ]
  }
];
