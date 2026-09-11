// FurLife Master Checklist - Architecture, Data Models, Roadmap & Luna AI
// Detailed technical specifications for engineering and product leadership
window.FURLIFE_ARCHITECTURE = [
  {
    "id": "ARCH-FE",
    "name": "Frontend",
    "description": "Arquitectura de interfaz cliente, componentes, gestión de estado y rendimiento.",
    "tasks": [
      {
        "id": "ARCH-FE-001",
        "title": "Configurar arquitectura SPA / SSR modular",
        "description": "Estructura de directorios por dominios funcionales (clinica, pacientes, citas, caja).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-FE-002",
        "title": "Implementar FurLife Design System y temas visuales",
        "description": "Configurar tokens CSS con la paleta FurLife (#365B6D, #40BFB4, #E3F7F7, #FFFFFF).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-FE-003",
        "title": "Configurar gestor de estado global reactivo (Zustand / Redux Toolkit / Pinia)",
        "description": "Manejo desacoplado de sesión activa, tenant, caja abierta y alertas.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-FE-004",
        "title": "Implementar capa de cliente HTTP con interceptores automáticos",
        "description": "Inyección de tokens JWT, manejo automático de refresco 401 y reintentos en 503.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-FE-005",
        "title": "Configurar Code Splitting y Lazy Loading por módulo",
        "description": "Carga bajo demanda de módulos pesados (Quirófano, Hospitalización, Reportes).",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-FE-006",
        "title": "Implementar persistencia offline y sincronización en borrador",
        "description": "Guardado local en IndexedDB/localStorage para que formularios no se pierdan.",
        "category": "Frontend",
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
    "id": "ARCH-BE",
    "name": "Backend",
    "description": "Arquitectura de servicios, lógica de dominio, patrones de diseño y controladores.",
    "tasks": [
      {
        "id": "ARCH-BE-001",
        "title": "Implementar Clean Architecture / Arquitectura Hexagonal",
        "description": "Separación estricta de Entidades de Dominio, Casos de Uso y Adaptadores de Entrada/Salida.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-BE-002",
        "title": "Diseñar capa de servicios transaccionales con Unit of Work",
        "description": "Garantizar atomicidad en operaciones compuestas (ej: cita + consulta + stock + cobro).",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-BE-003",
        "title": "Configurar inyección de dependencias y contenedor IoC",
        "description": "Facilitar desacoplamiento, pruebas unitarias y sustitución de adaptadores.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-BE-004",
        "title": "Implementar bus de eventos de dominio en memoria / Redis",
        "description": "Desacoplar efectos secundarios (envío de emails, actualización de estadísticas).",
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
    "id": "ARCH-API",
    "name": "API",
    "description": "Diseño RESTful, especificación OpenAPI, contratos de payload y versionado.",
    "tasks": [
      {
        "id": "ARCH-API-001",
        "title": "Estandarizar diseño RESTful y convenciones de endpoints",
        "description": "Nombres en plural, verbos HTTP correctos (GET, POST, PUT, PATCH, DELETE) y códigos de estado.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-API-002",
        "title": "Configurar generación de OpenAPI 3.1 / Swagger interactivo",
        "description": "Documentación viva sincronizada con los esquemas de código.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-API-003",
        "title": "Implementar Rate Limiting y Throttling por IP y por Tenant",
        "description": "Prevenir abuso y ataques de denegación de servicio en endpoints públicos.",
        "category": "API",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-API-004",
        "title": "Estrategia de versionado de API en URL (/api/v1/...)",
        "description": "Permitir evolucionar modelos sin romper clientes antiguos o apps móviles de tutores.",
        "category": "API",
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
    "id": "ARCH-DB",
    "name": "Base de datos",
    "description": "Diseño relacional PostgreSQL, multi-tenancy, índices y pool de conexiones.",
    "tasks": [
      {
        "id": "ARCH-DB-001",
        "title": "Implementar estrategia Multi-Tenant mediante tenant_id y RLS",
        "description": "Garantizar que una clínica jamás pueda leer ni escribir registros de otra clínica.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-DB-002",
        "title": "Configurar connection pooling optimizado (PgBouncer / HikariCP)",
        "description": "Gestión eficiente de miles de conexiones concurrentes sin saturar la RAM de la base de datos.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-DB-003",
        "title": "Estrategia de llaves primarias UUIDv7 para ordenamiento secuencial",
        "description": "Evitar fragmentación de índices B-Tree y permitir generación segura de IDs en cliente.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-DB-004",
        "title": "Configurar auditoría de consultas lentas (pg_stat_statements)",
        "description": "Alertar automáticamente sobre queries que superen los 100ms de ejecución.",
        "category": "Base de Datos",
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
    "id": "ARCH-AUTH",
    "name": "Autenticación",
    "description": "Gestión segura de identidades, tokens, sesiones HttpOnly y 2FA.",
    "tasks": [
      {
        "id": "ARCH-AUTH-001",
        "title": "Implementar hashing de contraseñas con Argon2id / bcrypt",
        "description": "Configurar costo computacional óptimo para proteger contra ataques con GPU.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-AUTH-002",
        "title": "Configurar Access Tokens JWT de corta duración (15 min)",
        "description": "Firmados con clave asimétrica RS256 o EdDSA con verificación en memoria.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-AUTH-003",
        "title": "Implementar Refresh Token Rotation almacenado en HttpOnly Cookies",
        "description": "Prevenir robo de tokens mediante XSS con invalidación de cadena de tokens en reúso.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-AUTH-004",
        "title": "Soporte para 2FA con TOTP (RFC 6238)",
        "description": "Códigos temporales compatibles con Google Authenticator y 1Password.",
        "category": "Seguridad",
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
    "id": "ARCH-RBAC",
    "name": "Autorización",
    "description": "Control de acceso basado en roles y políticas granulares por recurso.",
    "tasks": [
      {
        "id": "ARCH-RBAC-001",
        "title": "Diseñar motor de evaluación de políticas RBAC en memoria",
        "description": "Validación sub-milisegundo de permisos en cada endpoint de API.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-RBAC-002",
        "title": "Implementar autorización a nivel de recurso (ABAC / Ownership Guard)",
        "description": "Validar que el veterinario pertenezca a la clínica dueña del paciente que intenta atender.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-RBAC-003",
        "title": "Protección de rutas frontend basada en directivas de permisos",
        "description": "Redirección controlada si un usuario sin rol administrativo intenta acceder a finanzas.",
        "category": "Frontend",
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
    "id": "ARCH-STO",
    "name": "Storage",
    "description": "Almacenamiento en la nube (S3 / GCS), URLs prefirmadas y procesamiento multimedia.",
    "tasks": [
      {
        "id": "ARCH-STO-001",
        "title": "Configurar bucket seguro de S3 con acceso privado y URLs prefirmadas",
        "description": "Subidas directas cliente->S3 con expiración de URL en 10 minutos para radiografías y recetas.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-STO-002",
        "title": "Pipeline de procesamiento y optimización de imágenes a formato WebP",
        "description": "Reducción del peso de fotos de pacientes y consentimientos sin pérdida visual.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-STO-003",
        "title": "Políticas de retención y ciclo de vida de archivos en almacenamiento frío",
        "description": "Archivado automático de adjuntos de pacientes inactivos tras 5 años para ahorro de costos.",
        "category": "DevOps",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "ARCH-VAL",
    "name": "Validaciones",
    "description": "Esquemas de validación unificados en frontend y backend (Zod / Joi / Pydantic).",
    "tasks": [
      {
        "id": "ARCH-VAL-001",
        "title": "Definir esquemas de validación fuertemente tipados (Zod/Pydantic)",
        "description": "Validar formatos de fecha, teléfonos E.164, microchips de 15 dígitos y pesos positivos.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-VAL-002",
        "title": "Implementar middleware de validación automática de payloads en API",
        "description": "Rechazar peticiones mal formadas con código 422 y listado detallado de campos con error.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-VAL-003",
        "title": "Saneamiento universal contra inyecciones XSS en campos de texto enriquecido",
        "description": "Limpieza de etiquetas HTML en motivos de consulta y notas clínicas.",
        "category": "Seguridad",
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
    "id": "ARCH-ERR",
    "name": "Manejo de errores",
    "description": "Estandarización de respuestas RFC 7807 Problem Details y fallbacks de interfaz.",
    "tasks": [
      {
        "id": "ARCH-ERR-001",
        "title": "Estandarizar errores de backend con RFC 7807 (Problem Details for HTTP APIs)",
        "description": "Respuestas JSON con `type`, `title`, `status`, `detail`, `instance` y `error_code` unificado.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-ERR-002",
        "title": "Implementar Error Boundaries en Frontend con pantallas de recuperación",
        "description": "Evitar pantallas en blanco si un componente falla; mostrar botón de reintento.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-ERR-003",
        "title": "Diccionario de códigos de error de negocio en español e inglés",
        "description": "Mensajes claros para el usuario sin revelar detalles técnicos internos del servidor.",
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
    "id": "ARCH-LOG",
    "name": "Logs",
    "description": "Registro estructurado en formato JSON, correlación distribuida y recolección centralizada.",
    "tasks": [
      {
        "id": "ARCH-LOG-001",
        "title": "Configurar logger estructurado en formato JSON con niveles (info, warn, error)",
        "description": "Inclusión de timestamp ISO, tenant_id, user_id y trace_id en cada línea de log.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-LOG-002",
        "title": "Implementar propagación de ID de correlación (x-request-id)",
        "description": "Rastrear una solicitud a través de todos los componentes y servicios involucrados.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-LOG-003",
        "title": "Filtro de ofuscación de datos sensibles en logs (PII Masking)",
        "description": "Ocultar automáticamente contraseñas, números de tarjeta bancaria y tokens en los logs.",
        "category": "Seguridad",
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
    "id": "ARCH-AUD",
    "name": "Auditoría",
    "description": "Trazabilidad forense inmutable de cambios en datos críticos clínicos y contables.",
    "tasks": [
      {
        "id": "ARCH-AUD-001",
        "title": "Crear motor de captura de diferencias (diff JSON) en mutaciones",
        "description": "Guardar estado anterior y estado nuevo en cada UPDATE de historias clínicas y caja.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-AUD-002",
        "title": "Garantizar persistencia append-only en la tabla audit_logs",
        "description": "Restringir permisos para que ningún usuario de la base de datos pueda alterar registros de auditoría.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-AUD-003",
        "title": "Visor administrativo de auditoría para peritajes legales",
        "description": "Interfaz de consulta de actividad forense con filtros por usuario, fecha y expediente.",
        "category": "Frontend",
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
    "id": "ARCH-SEC",
    "name": "Seguridad",
    "description": "Mitigación OWASP Top 10, cabeceras HTTP seguras, CORS y cifrado.",
    "tasks": [
      {
        "id": "ARCH-SEC-001",
        "title": "Configurar cabeceras de seguridad estrictas (HSTS, CSP, X-Frame-Options, X-Content-Type)",
        "description": "Evitar ataques de Clickjacking y scripts maliciosos.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-SEC-002",
        "title": "Configurar políticas de CORS estrictas por origen permitido",
        "description": "Bloquear solicitudes desde dominios desconocidos en la API.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-SEC-003",
        "title": "Cifrado de campos sensibles en base de datos con AES-256",
        "description": "Cifrar identificaciones fiscales y datos médicos especialmente protegidos.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-SEC-004",
        "title": "Auditoría continua de dependencias con escaneo de vulnerabilidades (CVEs)",
        "description": "Bloquear builds automáticos que contengan vulnerabilidades con severidad alta o crítica.",
        "category": "DevOps",
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
    "id": "ARCH-BAK",
    "name": "Backups",
    "description": "Copias de seguridad continuas, snapshots automatizados y recuperación point-in-time.",
    "tasks": [
      {
        "id": "ARCH-BAK-001",
        "title": "Configurar backups automatizados diarios y continuos (WAL archiving / PITR)",
        "description": "Capacidad de restaurar la base de datos a cualquier segundo específico en caso de error humano.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-BAK-002",
        "title": "Replicación cruzada de copias en almacenamiento secundario fuera de región",
        "description": "Proteger la información contra incidentes mayores en el centro de datos principal.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-BAK-003",
        "title": "Script automatizado de prueba periódica de restauración de backup",
        "description": "Validar semanalmente que el backup generado sea 100% restaurable e íntegro.",
        "category": "DevOps",
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
    "id": "ARCH-ENV",
    "name": "Variables de entorno",
    "description": "Gestión centralizada y validación en arranque de secretos y configuraciones.",
    "tasks": [
      {
        "id": "ARCH-ENV-001",
        "title": "Implementar validador de variables de entorno al iniciar la aplicación (Env Schema)",
        "description": "Detener el arranque inmediatamente si falta alguna variable crítica (DB_URL, JWT_SECRET).",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-ENV-002",
        "title": "Integración con gestor de secretos (AWS Secrets Manager / Vault)",
        "description": "Inyección dinámica de credenciales de producción sin almacenarlas en archivos planos.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-ENV-003",
        "title": "Separación estricta de variables públicas del cliente vs secretos privados del servidor",
        "description": "Evitar exponer claves privadas de pasarelas o servicios en el bundle frontend.",
        "category": "Seguridad",
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
    "id": "ARCH-CFG",
    "name": "Configuración",
    "description": "Feature flags, personalización por clínica, multimoneda y zonas horarias.",
    "tasks": [
      {
        "id": "ARCH-CFG-001",
        "title": "Implementar motor de Feature Flags (toggles por clínica)",
        "description": "Habilitar o deshabilitar módulos (Estética, Guardería, Teleconsulta) según el plan contratado.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-CFG-002",
        "title": "Configurar formateador de divisas y fechas por zona horaria de la sede",
        "description": "Soporte transparente para operaciones en múltiples países de Iberoamérica.",
        "category": "Frontend",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-CFG-003",
        "title": "Caché de configuraciones de clínica en memoria Redis con invalidación reactiva",
        "description": "Reducir consultas repetitivas a la base de datos para datos estáticos de clínica.",
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
    "id": "ARCH-DEV",
    "name": "Desarrollo",
    "description": "Entorno local de desarrollo reproducible con un solo comando (Docker Compose).",
    "tasks": [
      {
        "id": "ARCH-DEV-001",
        "title": "Crear Docker Compose de desarrollo con PostgreSQL, Redis y MailHog",
        "description": "Permitir a cualquier programador levantar la infraestructura completa en local en 1 minuto.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-DEV-002",
        "title": "Generar semillas de datos clínicos realistas para desarrollo (Seeders)",
        "description": "Poblar 5 clínicas, 20 veterinarios, 100 pacientes con historias clínicas completas de prueba.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-DEV-003",
        "title": "Configurar hot-reloading optimizado en frontend y backend",
        "description": "Tiempos de recarga en caliente menores a 300ms durante el desarrollo.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "ARCH-STG",
    "name": "Staging",
    "description": "Ambiente de preproducción idéntico a producción para QA y validación de clientes.",
    "tasks": [
      {
        "id": "ARCH-STG-001",
        "title": "Desplegar entorno de Staging aislado con datos anonimizados",
        "description": "Réplica exacta de la infraestructura de producción para pruebas fiables.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-STG-002",
        "title": "Configurar pipeline de despliegue continuo hacia Staging en cada merge a develop",
        "description": "Automatizar validación temprana de nuevas funcionalidades.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-STG-003",
        "title": "Ambiente estéril para pruebas de carga y estrés previo a lanzamientos mayores",
        "description": "Ejecución de tests con k6 sin afectar a clínicas reales.",
        "category": "QA",
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
    "id": "ARCH-PRD",
    "name": "Producción",
    "description": "Entorno de alta disponibilidad, tolerancia a fallos y cero tiempo de inactividad.",
    "tasks": [
      {
        "id": "ARCH-PRD-001",
        "title": "Configurar infraestructura de producción de alta disponibilidad en AWS / GCP",
        "description": "Balanceadores de carga elásticos, clúster de base de datos multi-AZ y CDN global.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-PRD-002",
        "title": "Configurar certificados TLS/SSL con renovación automatizada (Let's Encrypt / ACM)",
        "description": "Cifrado estricto de todas las comunicaciones cliente-servidor.",
        "category": "Seguridad",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-PRD-003",
        "title": "Definir políticas de mantenimiento programado y avisos de servicio",
        "description": "Banner automático en la app con 48h de anticipación ante mantenimientos requeridos.",
        "category": "Frontend",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "MEDIA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  },
  {
    "id": "ARCH-CICD",
    "name": "CI/CD",
    "description": "Integración y entrega continua con validación de calidad y seguridad obligatorias.",
    "tasks": [
      {
        "id": "ARCH-CICD-001",
        "title": "Configurar workflow de CI (Linting, Type-check, Unit Tests, Security Scan)",
        "description": "Bloquear merge de Pull Requests si algún test falla o hay errores de tipos.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-CICD-002",
        "title": "Pipeline de construcción y empaquetado de imágenes Docker inmutables",
        "description": "Etiquetado de imágenes por hash de commit y versión semántica (SemVer).",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-CICD-003",
        "title": "Mecanismo de aprobación manual para despliegues a Producción",
        "description": "Requerir firma de dos desarrolladores senior antes de liberar a producción.",
        "category": "DevOps",
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
    "id": "ARCH-DEP",
    "name": "Deploy",
    "description": "Orquestación de despliegues Zero Downtime, canary releases y rollbacks.",
    "tasks": [
      {
        "id": "ARCH-DEP-001",
        "title": "Implementar estrategia de despliegue Blue/Green o Rolling Updates",
        "description": "Garantizar cero desconexión para veterinarios en consulta durante una actualización.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-DEP-002",
        "title": "Automatizar migraciones de base de datos previas al encendido de nuevos pods",
        "description": "Migraciones compatibles hacia atrás (backward-compatible) para no romper versiones previas.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-DEP-003",
        "title": "Comando de Rollback inmediato de 1 solo clic",
        "description": "Capacidad de volver a la versión previa en menos de 60 segundos si se detectan anomalías.",
        "category": "DevOps",
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
    "id": "ARCH-MON",
    "name": "Monitoreo",
    "description": "Observabilidad en tiempo real, rastreo APM, alertas y telemetría.",
    "tasks": [
      {
        "id": "ARCH-MON-001",
        "title": "Integrar monitorización de errores en tiempo real con Sentry",
        "description": "Captura instantánea de excepciones no controladas con contexto de usuario y trazas.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-MON-002",
        "title": "Configurar métricas de rendimiento APM (Tiempos de respuesta de API, uso de memoria)",
        "description": "Dashboards en tiempo real para visualizar latencias de percentiles p95 y p99.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ARCH-MON-003",
        "title": "Configurar canal de alertas críticas en Slack y guardias móviles (PagerDuty)",
        "description": "Notificación inmediata al equipo de ingeniería ante errores 500 o fallos de red.",
        "category": "DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  }
];

window.FURLIFE_DATA_MODELS = [
  {
    "id": "ENT-01",
    "name": "Usuario",
    "table": "users",
    "description": "Identidades de acceso, credenciales, email y estados de cuenta.",
    "tasks": [
      {
        "id": "ENT-01-01",
        "title": "Crear entidad Usuario y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla users.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-01-02",
        "title": "Definir campos y tipos de datos para Usuario",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-01-03",
        "title": "Definir relaciones y llaves foráneas para Usuario",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-01-04",
        "title": "Definir índices y restricciones de unicidad para Usuario",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-01-05",
        "title": "Validaciones a nivel de modelo para Usuario",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-01-06",
        "title": "Crear migración de base de datos para Usuario",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-01-07",
        "title": "Pruebas unitarias de persistencia e integridad de Usuario",
        "description": "Verificar guardado, lectura y violación de restricciones de Usuario.",
        "category": "QA",
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
    "id": "ENT-02",
    "name": "Veterinario",
    "table": "veterinarians",
    "description": "Profesionales médicos, cédula, firma digital y sellos.",
    "tasks": [
      {
        "id": "ENT-02-01",
        "title": "Crear entidad Veterinario y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla veterinarians.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-02-02",
        "title": "Definir campos y tipos de datos para Veterinario",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-02-03",
        "title": "Definir relaciones y llaves foráneas para Veterinario",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-02-04",
        "title": "Definir índices y restricciones de unicidad para Veterinario",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-02-05",
        "title": "Validaciones a nivel de modelo para Veterinario",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-02-06",
        "title": "Crear migración de base de datos para Veterinario",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-02-07",
        "title": "Pruebas unitarias de persistencia e integridad de Veterinario",
        "description": "Verificar guardado, lectura y violación de restricciones de Veterinario.",
        "category": "QA",
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
    "id": "ENT-03",
    "name": "Clínica",
    "table": "clinics",
    "description": "Organizaciones veterinarias, datos fiscales, sedes y configuración.",
    "tasks": [
      {
        "id": "ENT-03-01",
        "title": "Crear entidad Clínica y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla clinics.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-03-02",
        "title": "Definir campos y tipos de datos para Clínica",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-03-03",
        "title": "Definir relaciones y llaves foráneas para Clínica",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-03-04",
        "title": "Definir índices y restricciones de unicidad para Clínica",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-03-05",
        "title": "Validaciones a nivel de modelo para Clínica",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-03-06",
        "title": "Crear migración de base de datos para Clínica",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-03-07",
        "title": "Pruebas unitarias de persistencia e integridad de Clínica",
        "description": "Verificar guardado, lectura y violación de restricciones de Clínica.",
        "category": "QA",
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
    "id": "ENT-04",
    "name": "Empleado",
    "table": "employees",
    "description": "Colaboradores, cargos operativos, horarios y comisiones.",
    "tasks": [
      {
        "id": "ENT-04-01",
        "title": "Crear entidad Empleado y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla employees.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-04-02",
        "title": "Definir campos y tipos de datos para Empleado",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-04-03",
        "title": "Definir relaciones y llaves foráneas para Empleado",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-04-04",
        "title": "Definir índices y restricciones de unicidad para Empleado",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-04-05",
        "title": "Validaciones a nivel de modelo para Empleado",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-04-06",
        "title": "Crear migración de base de datos para Empleado",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-04-07",
        "title": "Pruebas unitarias de persistencia e integridad de Empleado",
        "description": "Verificar guardado, lectura y violación de restricciones de Empleado.",
        "category": "QA",
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
    "id": "ENT-05",
    "name": "Rol",
    "table": "roles",
    "description": "Roles del sistema (SuperAdmin, Director, Vet, Groomer, etc.).",
    "tasks": [
      {
        "id": "ENT-05-01",
        "title": "Crear entidad Rol y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla roles.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-05-02",
        "title": "Definir campos y tipos de datos para Rol",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-05-03",
        "title": "Definir relaciones y llaves foráneas para Rol",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-05-04",
        "title": "Definir índices y restricciones de unicidad para Rol",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-05-05",
        "title": "Validaciones a nivel de modelo para Rol",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-05-06",
        "title": "Crear migración de base de datos para Rol",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-05-07",
        "title": "Pruebas unitarias de persistencia e integridad de Rol",
        "description": "Verificar guardado, lectura y violación de restricciones de Rol.",
        "category": "QA",
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
    "id": "ENT-06",
    "name": "Permiso",
    "table": "permissions",
    "description": "Privilegios atómicos del sistema para control granular.",
    "tasks": [
      {
        "id": "ENT-06-01",
        "title": "Crear entidad Permiso y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla permissions.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-06-02",
        "title": "Definir campos y tipos de datos para Permiso",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-06-03",
        "title": "Definir relaciones y llaves foráneas para Permiso",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-06-04",
        "title": "Definir índices y restricciones de unicidad para Permiso",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-06-05",
        "title": "Validaciones a nivel de modelo para Permiso",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-06-06",
        "title": "Crear migración de base de datos para Permiso",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-06-07",
        "title": "Pruebas unitarias de persistencia e integridad de Permiso",
        "description": "Verificar guardado, lectura y violación de restricciones de Permiso.",
        "category": "QA",
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
    "id": "ENT-07",
    "name": "Propietario",
    "table": "owners",
    "description": "Tutores de mascotas, datos de contacto, facturación y consentimientos.",
    "tasks": [
      {
        "id": "ENT-07-01",
        "title": "Crear entidad Propietario y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla owners.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-07-02",
        "title": "Definir campos y tipos de datos para Propietario",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-07-03",
        "title": "Definir relaciones y llaves foráneas para Propietario",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-07-04",
        "title": "Definir índices y restricciones de unicidad para Propietario",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-07-05",
        "title": "Validaciones a nivel de modelo para Propietario",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-07-06",
        "title": "Crear migración de base de datos para Propietario",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-07-07",
        "title": "Pruebas unitarias de persistencia e integridad de Propietario",
        "description": "Verificar guardado, lectura y violación de restricciones de Propietario.",
        "category": "QA",
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
    "id": "ENT-08",
    "name": "Mascota",
    "table": "pets",
    "description": "Datos biológicos, raza, especie, fecha nacimiento, foto y microchip.",
    "tasks": [
      {
        "id": "ENT-08-01",
        "title": "Crear entidad Mascota y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla pets.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-08-02",
        "title": "Definir campos y tipos de datos para Mascota",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-08-03",
        "title": "Definir relaciones y llaves foráneas para Mascota",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-08-04",
        "title": "Definir índices y restricciones de unicidad para Mascota",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-08-05",
        "title": "Validaciones a nivel de modelo para Mascota",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-08-06",
        "title": "Crear migración de base de datos para Mascota",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-08-07",
        "title": "Pruebas unitarias de persistencia e integridad de Mascota",
        "description": "Verificar guardado, lectura y violación de restricciones de Mascota.",
        "category": "QA",
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
    "id": "ENT-09",
    "name": "Paciente",
    "table": "patients",
    "description": "Expediente médico activo, número correlativo y vínculo con tutor.",
    "tasks": [
      {
        "id": "ENT-09-01",
        "title": "Crear entidad Paciente y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla patients.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-09-02",
        "title": "Definir campos y tipos de datos para Paciente",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-09-03",
        "title": "Definir relaciones y llaves foráneas para Paciente",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-09-04",
        "title": "Definir índices y restricciones de unicidad para Paciente",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-09-05",
        "title": "Validaciones a nivel de modelo para Paciente",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-09-06",
        "title": "Crear migración de base de datos para Paciente",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-09-07",
        "title": "Pruebas unitarias de persistencia e integridad de Paciente",
        "description": "Verificar guardado, lectura y violación de restricciones de Paciente.",
        "category": "QA",
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
    "id": "ENT-10",
    "name": "Consulta",
    "table": "consultations",
    "description": "Atención médica estructurada SOAP, notas y resoluciones.",
    "tasks": [
      {
        "id": "ENT-10-01",
        "title": "Crear entidad Consulta y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla consultations.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-10-02",
        "title": "Definir campos y tipos de datos para Consulta",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-10-03",
        "title": "Definir relaciones y llaves foráneas para Consulta",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-10-04",
        "title": "Definir índices y restricciones de unicidad para Consulta",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-10-05",
        "title": "Validaciones a nivel de modelo para Consulta",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-10-06",
        "title": "Crear migración de base de datos para Consulta",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-10-07",
        "title": "Pruebas unitarias de persistencia e integridad de Consulta",
        "description": "Verificar guardado, lectura y violación de restricciones de Consulta.",
        "category": "QA",
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
    "id": "ENT-11",
    "name": "Historia clínica",
    "table": "medical_records",
    "description": "Línea de tiempo médica unificada e inmutable.",
    "tasks": [
      {
        "id": "ENT-11-01",
        "title": "Crear entidad Historia clínica y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla medical_records.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-11-02",
        "title": "Definir campos y tipos de datos para Historia clínica",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-11-03",
        "title": "Definir relaciones y llaves foráneas para Historia clínica",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-11-04",
        "title": "Definir índices y restricciones de unicidad para Historia clínica",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-11-05",
        "title": "Validaciones a nivel de modelo para Historia clínica",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-11-06",
        "title": "Crear migración de base de datos para Historia clínica",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-11-07",
        "title": "Pruebas unitarias de persistencia e integridad de Historia clínica",
        "description": "Verificar guardado, lectura y violación de restricciones de Historia clínica.",
        "category": "QA",
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
    "id": "ENT-12",
    "name": "Signos vitales",
    "table": "vital_signs",
    "description": "Constantes fisiológicas: peso, temperatura, FC, FR, TLLC.",
    "tasks": [
      {
        "id": "ENT-12-01",
        "title": "Crear entidad Signos vitales y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla vital_signs.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-12-02",
        "title": "Definir campos y tipos de datos para Signos vitales",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-12-03",
        "title": "Definir relaciones y llaves foráneas para Signos vitales",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-12-04",
        "title": "Definir índices y restricciones de unicidad para Signos vitales",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-12-05",
        "title": "Validaciones a nivel de modelo para Signos vitales",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-12-06",
        "title": "Crear migración de base de datos para Signos vitales",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-12-07",
        "title": "Pruebas unitarias de persistencia e integridad de Signos vitales",
        "description": "Verificar guardado, lectura y violación de restricciones de Signos vitales.",
        "category": "QA",
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
    "id": "ENT-13",
    "name": "Diagnóstico",
    "table": "diagnoses",
    "description": "Patologías según catálogo veterinario, presuntivas o definitivas.",
    "tasks": [
      {
        "id": "ENT-13-01",
        "title": "Crear entidad Diagnóstico y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla diagnoses.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-13-02",
        "title": "Definir campos y tipos de datos para Diagnóstico",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-13-03",
        "title": "Definir relaciones y llaves foráneas para Diagnóstico",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-13-04",
        "title": "Definir índices y restricciones de unicidad para Diagnóstico",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-13-05",
        "title": "Validaciones a nivel de modelo para Diagnóstico",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-13-06",
        "title": "Crear migración de base de datos para Diagnóstico",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-13-07",
        "title": "Pruebas unitarias de persistencia e integridad de Diagnóstico",
        "description": "Verificar guardado, lectura y violación de restricciones de Diagnóstico.",
        "category": "QA",
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
    "id": "ENT-14",
    "name": "Medicamento",
    "table": "medications",
    "description": "Vademécum, principios activos, concentraciones y presentaciones.",
    "tasks": [
      {
        "id": "ENT-14-01",
        "title": "Crear entidad Medicamento y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla medications.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-14-02",
        "title": "Definir campos y tipos de datos para Medicamento",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-14-03",
        "title": "Definir relaciones y llaves foráneas para Medicamento",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-14-04",
        "title": "Definir índices y restricciones de unicidad para Medicamento",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-14-05",
        "title": "Validaciones a nivel de modelo para Medicamento",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-14-06",
        "title": "Crear migración de base de datos para Medicamento",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-14-07",
        "title": "Pruebas unitarias de persistencia e integridad de Medicamento",
        "description": "Verificar guardado, lectura y violación de restricciones de Medicamento.",
        "category": "QA",
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
    "id": "ENT-15",
    "name": "Receta",
    "table": "prescriptions",
    "description": "Prescripciones digitales, instrucciones, firma médica y QR.",
    "tasks": [
      {
        "id": "ENT-15-01",
        "title": "Crear entidad Receta y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla prescriptions.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-15-02",
        "title": "Definir campos y tipos de datos para Receta",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-15-03",
        "title": "Definir relaciones y llaves foráneas para Receta",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-15-04",
        "title": "Definir índices y restricciones de unicidad para Receta",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-15-05",
        "title": "Validaciones a nivel de modelo para Receta",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-15-06",
        "title": "Crear migración de base de datos para Receta",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-15-07",
        "title": "Pruebas unitarias de persistencia e integridad de Receta",
        "description": "Verificar guardado, lectura y violación de restricciones de Receta.",
        "category": "QA",
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
    "id": "ENT-16",
    "name": "Vacuna",
    "table": "vaccinations",
    "description": "Inmunizaciones aplicadas, biológicos, lotes y refuerzos.",
    "tasks": [
      {
        "id": "ENT-16-01",
        "title": "Crear entidad Vacuna y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla vaccinations.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-16-02",
        "title": "Definir campos y tipos de datos para Vacuna",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-16-03",
        "title": "Definir relaciones y llaves foráneas para Vacuna",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-16-04",
        "title": "Definir índices y restricciones de unicidad para Vacuna",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-16-05",
        "title": "Validaciones a nivel de modelo para Vacuna",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-16-06",
        "title": "Crear migración de base de datos para Vacuna",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-16-07",
        "title": "Pruebas unitarias de persistencia e integridad de Vacuna",
        "description": "Verificar guardado, lectura y violación de restricciones de Vacuna.",
        "category": "QA",
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
    "id": "ENT-17",
    "name": "Procedimiento",
    "table": "procedures",
    "description": "Curaciones, sondajes, maniobras clínicas menores e insumos.",
    "tasks": [
      {
        "id": "ENT-17-01",
        "title": "Crear entidad Procedimiento y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla procedures.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-17-02",
        "title": "Definir campos y tipos de datos para Procedimiento",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-17-03",
        "title": "Definir relaciones y llaves foráneas para Procedimiento",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-17-04",
        "title": "Definir índices y restricciones de unicidad para Procedimiento",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-17-05",
        "title": "Validaciones a nivel de modelo para Procedimiento",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-17-06",
        "title": "Crear migración de base de datos para Procedimiento",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-17-07",
        "title": "Pruebas unitarias de persistencia e integridad de Procedimiento",
        "description": "Verificar guardado, lectura y violación de restricciones de Procedimiento.",
        "category": "QA",
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
    "id": "ENT-18",
    "name": "Cirugía",
    "table": "surgeries",
    "description": "Protocolos quirúrgicos, consentimiento informado y anestesia.",
    "tasks": [
      {
        "id": "ENT-18-01",
        "title": "Crear entidad Cirugía y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla surgeries.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-18-02",
        "title": "Definir campos y tipos de datos para Cirugía",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-18-03",
        "title": "Definir relaciones y llaves foráneas para Cirugía",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-18-04",
        "title": "Definir índices y restricciones de unicidad para Cirugía",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-18-05",
        "title": "Validaciones a nivel de modelo para Cirugía",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-18-06",
        "title": "Crear migración de base de datos para Cirugía",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-18-07",
        "title": "Pruebas unitarias de persistencia e integridad de Cirugía",
        "description": "Verificar guardado, lectura y violación de restricciones de Cirugía.",
        "category": "QA",
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
    "id": "ENT-19",
    "name": "Hospitalización",
    "table": "hospitalizations",
    "description": "Ingresos hospitalarios, jaulas, monitoreo y evolución.",
    "tasks": [
      {
        "id": "ENT-19-01",
        "title": "Crear entidad Hospitalización y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla hospitalizations.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-19-02",
        "title": "Definir campos y tipos de datos para Hospitalización",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-19-03",
        "title": "Definir relaciones y llaves foráneas para Hospitalización",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-19-04",
        "title": "Definir índices y restricciones de unicidad para Hospitalización",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-19-05",
        "title": "Validaciones a nivel de modelo para Hospitalización",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-19-06",
        "title": "Crear migración de base de datos para Hospitalización",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-19-07",
        "title": "Pruebas unitarias de persistencia e integridad de Hospitalización",
        "description": "Verificar guardado, lectura y violación de restricciones de Hospitalización.",
        "category": "QA",
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
    "id": "ENT-20",
    "name": "Examen",
    "table": "lab_exams",
    "description": "Órdenes de laboratorio, parámetros numéricos y resultados.",
    "tasks": [
      {
        "id": "ENT-20-01",
        "title": "Crear entidad Examen y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla lab_exams.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-20-02",
        "title": "Definir campos y tipos de datos para Examen",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-20-03",
        "title": "Definir relaciones y llaves foráneas para Examen",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-20-04",
        "title": "Definir índices y restricciones de unicidad para Examen",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-20-05",
        "title": "Validaciones a nivel de modelo para Examen",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-20-06",
        "title": "Crear migración de base de datos para Examen",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-20-07",
        "title": "Pruebas unitarias de persistencia e integridad de Examen",
        "description": "Verificar guardado, lectura y violación de restricciones de Examen.",
        "category": "QA",
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
    "id": "ENT-21",
    "name": "Documento",
    "table": "documents",
    "description": "Radiografías, ecografías, consentimientos firmados y PDFs.",
    "tasks": [
      {
        "id": "ENT-21-01",
        "title": "Crear entidad Documento y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla documents.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-21-02",
        "title": "Definir campos y tipos de datos para Documento",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-21-03",
        "title": "Definir relaciones y llaves foráneas para Documento",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-21-04",
        "title": "Definir índices y restricciones de unicidad para Documento",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-21-05",
        "title": "Validaciones a nivel de modelo para Documento",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-21-06",
        "title": "Crear migración de base de datos para Documento",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-21-07",
        "title": "Pruebas unitarias de persistencia e integridad de Documento",
        "description": "Verificar guardado, lectura y violación de restricciones de Documento.",
        "category": "QA",
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
    "id": "ENT-22",
    "name": "Cita",
    "table": "appointments",
    "description": "Reservas de consulta, vacuna o estética, estados y horas.",
    "tasks": [
      {
        "id": "ENT-22-01",
        "title": "Crear entidad Cita y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla appointments.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-22-02",
        "title": "Definir campos y tipos de datos para Cita",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-22-03",
        "title": "Definir relaciones y llaves foráneas para Cita",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-22-04",
        "title": "Definir índices y restricciones de unicidad para Cita",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-22-05",
        "title": "Validaciones a nivel de modelo para Cita",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-22-06",
        "title": "Crear migración de base de datos para Cita",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-22-07",
        "title": "Pruebas unitarias de persistencia e integridad de Cita",
        "description": "Verificar guardado, lectura y violación de restricciones de Cita.",
        "category": "QA",
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
    "id": "ENT-23",
    "name": "Servicio",
    "table": "services",
    "description": "Catálogo de prestaciones médicas y comerciales con tarifas.",
    "tasks": [
      {
        "id": "ENT-23-01",
        "title": "Crear entidad Servicio y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla services.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-23-02",
        "title": "Definir campos y tipos de datos para Servicio",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-23-03",
        "title": "Definir relaciones y llaves foráneas para Servicio",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-23-04",
        "title": "Definir índices y restricciones de unicidad para Servicio",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-23-05",
        "title": "Validaciones a nivel de modelo para Servicio",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-23-06",
        "title": "Crear migración de base de datos para Servicio",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-23-07",
        "title": "Pruebas unitarias de persistencia e integridad de Servicio",
        "description": "Verificar guardado, lectura y violación de restricciones de Servicio.",
        "category": "QA",
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
    "id": "ENT-24",
    "name": "Teleconsulta",
    "table": "teleconsultations",
    "description": "Salas virtuales, enlaces WebRTC y notas de teleorientación.",
    "tasks": [
      {
        "id": "ENT-24-01",
        "title": "Crear entidad Teleconsulta y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla teleconsultations.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-24-02",
        "title": "Definir campos y tipos de datos para Teleconsulta",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-24-03",
        "title": "Definir relaciones y llaves foráneas para Teleconsulta",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-24-04",
        "title": "Definir índices y restricciones de unicidad para Teleconsulta",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-24-05",
        "title": "Validaciones a nivel de modelo para Teleconsulta",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-24-06",
        "title": "Crear migración de base de datos para Teleconsulta",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-24-07",
        "title": "Pruebas unitarias de persistencia e integridad de Teleconsulta",
        "description": "Verificar guardado, lectura y violación de restricciones de Teleconsulta.",
        "category": "QA",
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
    "id": "ENT-25",
    "name": "Producto",
    "table": "products",
    "description": "Artículos vendibles, retail, alimentos secos y húmedos.",
    "tasks": [
      {
        "id": "ENT-25-01",
        "title": "Crear entidad Producto y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla products.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-25-02",
        "title": "Definir campos y tipos de datos para Producto",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-25-03",
        "title": "Definir relaciones y llaves foráneas para Producto",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-25-04",
        "title": "Definir índices y restricciones de unicidad para Producto",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-25-05",
        "title": "Validaciones a nivel de modelo para Producto",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-25-06",
        "title": "Crear migración de base de datos para Producto",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-25-07",
        "title": "Pruebas unitarias de persistencia e integridad de Producto",
        "description": "Verificar guardado, lectura y violación de restricciones de Producto.",
        "category": "QA",
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
    "id": "ENT-26",
    "name": "Inventario",
    "table": "inventory_stocks",
    "description": "Existencias por almacén, lotes y fechas de caducidad.",
    "tasks": [
      {
        "id": "ENT-26-01",
        "title": "Crear entidad Inventario y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla inventory_stocks.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-26-02",
        "title": "Definir campos y tipos de datos para Inventario",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-26-03",
        "title": "Definir relaciones y llaves foráneas para Inventario",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-26-04",
        "title": "Definir índices y restricciones de unicidad para Inventario",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-26-05",
        "title": "Validaciones a nivel de modelo para Inventario",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-26-06",
        "title": "Crear migración de base de datos para Inventario",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-26-07",
        "title": "Pruebas unitarias de persistencia e integridad de Inventario",
        "description": "Verificar guardado, lectura y violación de restricciones de Inventario.",
        "category": "QA",
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
    "id": "ENT-27",
    "name": "Proveedor",
    "table": "suppliers",
    "description": "Distribuidores comerciales, laboratorios y plazos de pago.",
    "tasks": [
      {
        "id": "ENT-27-01",
        "title": "Crear entidad Proveedor y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla suppliers.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-27-02",
        "title": "Definir campos y tipos de datos para Proveedor",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-27-03",
        "title": "Definir relaciones y llaves foráneas para Proveedor",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-27-04",
        "title": "Definir índices y restricciones de unicidad para Proveedor",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-27-05",
        "title": "Validaciones a nivel de modelo para Proveedor",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-27-06",
        "title": "Crear migración de base de datos para Proveedor",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-27-07",
        "title": "Pruebas unitarias de persistencia e integridad de Proveedor",
        "description": "Verificar guardado, lectura y violación de restricciones de Proveedor.",
        "category": "QA",
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
    "id": "ENT-28",
    "name": "Movimiento de inventario",
    "table": "inventory_movements",
    "description": "Kardex inmutable de entradas, salidas y ajustes de stock.",
    "tasks": [
      {
        "id": "ENT-28-01",
        "title": "Crear entidad Movimiento de inventario y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla inventory_movements.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-28-02",
        "title": "Definir campos y tipos de datos para Movimiento de inventario",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-28-03",
        "title": "Definir relaciones y llaves foráneas para Movimiento de inventario",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-28-04",
        "title": "Definir índices y restricciones de unicidad para Movimiento de inventario",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-28-05",
        "title": "Validaciones a nivel de modelo para Movimiento de inventario",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-28-06",
        "title": "Crear migración de base de datos para Movimiento de inventario",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-28-07",
        "title": "Pruebas unitarias de persistencia e integridad de Movimiento de inventario",
        "description": "Verificar guardado, lectura y violación de restricciones de Movimiento de inventario.",
        "category": "QA",
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
    "id": "ENT-29",
    "name": "Consumo",
    "table": "product_consumptions",
    "description": "Descargo de material e insumos consumidos en actos clínicos.",
    "tasks": [
      {
        "id": "ENT-29-01",
        "title": "Crear entidad Consumo y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla product_consumptions.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-29-02",
        "title": "Definir campos y tipos de datos para Consumo",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-29-03",
        "title": "Definir relaciones y llaves foráneas para Consumo",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-29-04",
        "title": "Definir índices y restricciones de unicidad para Consumo",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-29-05",
        "title": "Validaciones a nivel de modelo para Consumo",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-29-06",
        "title": "Crear migración de base de datos para Consumo",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-29-07",
        "title": "Pruebas unitarias de persistencia e integridad de Consumo",
        "description": "Verificar guardado, lectura y violación de restricciones de Consumo.",
        "category": "QA",
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
    "id": "ENT-30",
    "name": "Factura",
    "table": "invoices",
    "description": "Comprobantes fiscales, tickets, bases imponibles y totales.",
    "tasks": [
      {
        "id": "ENT-30-01",
        "title": "Crear entidad Factura y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla invoices.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-30-02",
        "title": "Definir campos y tipos de datos para Factura",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-30-03",
        "title": "Definir relaciones y llaves foráneas para Factura",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-30-04",
        "title": "Definir índices y restricciones de unicidad para Factura",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-30-05",
        "title": "Validaciones a nivel de modelo para Factura",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-30-06",
        "title": "Crear migración de base de datos para Factura",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-30-07",
        "title": "Pruebas unitarias de persistencia e integridad de Factura",
        "description": "Verificar guardado, lectura y violación de restricciones de Factura.",
        "category": "QA",
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
    "id": "ENT-31",
    "name": "Pago",
    "table": "payments",
    "description": "Transacciones de cobro, métodos de pago y referencias.",
    "tasks": [
      {
        "id": "ENT-31-01",
        "title": "Crear entidad Pago y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla payments.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-31-02",
        "title": "Definir campos y tipos de datos para Pago",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-31-03",
        "title": "Definir relaciones y llaves foráneas para Pago",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-31-04",
        "title": "Definir índices y restricciones de unicidad para Pago",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-31-05",
        "title": "Validaciones a nivel de modelo para Pago",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-31-06",
        "title": "Crear migración de base de datos para Pago",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-31-07",
        "title": "Pruebas unitarias de persistencia e integridad de Pago",
        "description": "Verificar guardado, lectura y violación de restricciones de Pago.",
        "category": "QA",
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
    "id": "ENT-32",
    "name": "Caja",
    "table": "cash_registers",
    "description": "Sesiones de caja diaria, fondos iniciales, arqueos y cierres.",
    "tasks": [
      {
        "id": "ENT-32-01",
        "title": "Crear entidad Caja y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla cash_registers.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-32-02",
        "title": "Definir campos y tipos de datos para Caja",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-32-03",
        "title": "Definir relaciones y llaves foráneas para Caja",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-32-04",
        "title": "Definir índices y restricciones de unicidad para Caja",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-32-05",
        "title": "Validaciones a nivel de modelo para Caja",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-32-06",
        "title": "Crear migración de base de datos para Caja",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-32-07",
        "title": "Pruebas unitarias de persistencia e integridad de Caja",
        "description": "Verificar guardado, lectura y violación de restricciones de Caja.",
        "category": "QA",
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
    "id": "ENT-33",
    "name": "Plantilla",
    "table": "templates",
    "description": "Modelos preconfigurados de anamnesis, recetas y consentimientos.",
    "tasks": [
      {
        "id": "ENT-33-01",
        "title": "Crear entidad Plantilla y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla templates.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-33-02",
        "title": "Definir campos y tipos de datos para Plantilla",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-33-03",
        "title": "Definir relaciones y llaves foráneas para Plantilla",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-33-04",
        "title": "Definir índices y restricciones de unicidad para Plantilla",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-33-05",
        "title": "Validaciones a nivel de modelo para Plantilla",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-33-06",
        "title": "Crear migración de base de datos para Plantilla",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-33-07",
        "title": "Pruebas unitarias de persistencia e integridad de Plantilla",
        "description": "Verificar guardado, lectura y violación de restricciones de Plantilla.",
        "category": "QA",
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
    "id": "ENT-34",
    "name": "Notificación",
    "table": "notifications",
    "description": "Alertas del sistema, recordatorios y avisos internos.",
    "tasks": [
      {
        "id": "ENT-34-01",
        "title": "Crear entidad Notificación y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla notifications.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-34-02",
        "title": "Definir campos y tipos de datos para Notificación",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-34-03",
        "title": "Definir relaciones y llaves foráneas para Notificación",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-34-04",
        "title": "Definir índices y restricciones de unicidad para Notificación",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-34-05",
        "title": "Validaciones a nivel de modelo para Notificación",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-34-06",
        "title": "Crear migración de base de datos para Notificación",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-34-07",
        "title": "Pruebas unitarias de persistencia e integridad de Notificación",
        "description": "Verificar guardado, lectura y violación de restricciones de Notificación.",
        "category": "QA",
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
    "id": "ENT-35",
    "name": "Reseña",
    "table": "reviews",
    "description": "Opiniones de tutores, calificaciones con estrellas y NPS.",
    "tasks": [
      {
        "id": "ENT-35-01",
        "title": "Crear entidad Reseña y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla reviews.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-35-02",
        "title": "Definir campos y tipos de datos para Reseña",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-35-03",
        "title": "Definir relaciones y llaves foráneas para Reseña",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-35-04",
        "title": "Definir índices y restricciones de unicidad para Reseña",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-35-05",
        "title": "Validaciones a nivel de modelo para Reseña",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-35-06",
        "title": "Crear migración de base de datos para Reseña",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-35-07",
        "title": "Pruebas unitarias de persistencia e integridad de Reseña",
        "description": "Verificar guardado, lectura y violación de restricciones de Reseña.",
        "category": "QA",
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
    "id": "ENT-36",
    "name": "Ranking",
    "table": "rankings",
    "description": "Métricas de posicionamiento y reputación de clínicas/médicos.",
    "tasks": [
      {
        "id": "ENT-36-01",
        "title": "Crear entidad Ranking y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla rankings.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-36-02",
        "title": "Definir campos y tipos de datos para Ranking",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-36-03",
        "title": "Definir relaciones y llaves foráneas para Ranking",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-36-04",
        "title": "Definir índices y restricciones de unicidad para Ranking",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-36-05",
        "title": "Validaciones a nivel de modelo para Ranking",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-36-06",
        "title": "Crear migración de base de datos para Ranking",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-36-07",
        "title": "Pruebas unitarias de persistencia e integridad de Ranking",
        "description": "Verificar guardado, lectura y violación de restricciones de Ranking.",
        "category": "QA",
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
    "id": "ENT-37",
    "name": "Registro de auditoría",
    "table": "audit_logs",
    "description": "Trazabilidad forense inmutable de mutaciones y accesos.",
    "tasks": [
      {
        "id": "ENT-37-01",
        "title": "Crear entidad Registro de auditoría y modelo ORM",
        "description": "Definir clase de entidad en backend y esquema de tabla audit_logs.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-37-02",
        "title": "Definir campos y tipos de datos para Registro de auditoría",
        "description": "Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-37-03",
        "title": "Definir relaciones y llaves foráneas para Registro de auditoría",
        "description": "Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-37-04",
        "title": "Definir índices y restricciones de unicidad para Registro de auditoría",
        "description": "Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-37-05",
        "title": "Validaciones a nivel de modelo para Registro de auditoría",
        "description": "Reglas de negocio e invariantes de datos previas a la persistencia.",
        "category": "Backend",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-37-06",
        "title": "Crear migración de base de datos para Registro de auditoría",
        "description": "Script de migración up/down testeado en PostgreSQL con soporte para rollback.",
        "category": "Base de Datos",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      },
      {
        "id": "ENT-37-07",
        "title": "Pruebas unitarias de persistencia e integridad de Registro de auditoría",
        "description": "Verificar guardado, lectura y violación de restricciones de Registro de auditoría.",
        "category": "QA",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "status": "Pendiente",
        "completed": false,
        "dependencies": [],
        "notes": ""
      }
    ]
  }
];

window.FURLIFE_ROADMAP_PHASES = [
  {
    "id": "FASE-1",
    "code": "FASE 1 — MVP",
    "title": "Producto Mínimo Viable Clínico & Operativo",
    "badge": "Lanzamiento Esencial",
    "color": "#365B6D",
    "goal": "Lanzar una plataforma 100% funcional para que un veterinario independiente o clínica pequeña pueda operar diariamente: admisiones, expedientes clínicos, consultas SOAP, recetas con QR, agenda de citas, inventario básico FEFO y cobro en caja.",
    "deliverables": [
      "Arquitectura Multi-tenant segura y autenticación JWT con HttpOnly cookies.",
      "Gestión completa de Propietarios y Pacientes con expediente médico digital.",
      "Consultas veterinarias estructuradas SOAP con signos vitales y rangos fisiológicos.",
      "Vademécum esencial y emisión de Recetas Digitales con QR y firma/sello.",
      "Calendario de Agenda para citas médicas y control de sala de espera.",
      "Inventario con control de lotes, caducidades y deducción automática FEFO.",
      "Punto de Venta (POS), control de sesiones de Caja, arqueos y tickets térmicos.",
      "Asistente Luna versión MVP con atajos de navegación y guías operativas."
    ],
    "kpis": [
      "100% de operaciones clínicas diarias cubiertas sin necesidad de papel.",
      "Tiempo de registro de nueva consulta < 3 minutos.",
      "Cero fallos de inconsistencia de inventario en ventas y prescripciones."
    ]
  },
  {
    "id": "FASE-2",
    "code": "FASE 2 — OPERACIÓN AVANZADA",
    "title": "Gestión Hospitalaria, Quirófano, Estética & Analítica",
    "badge": "Operación Integral",
    "color": "#40BFB4",
    "goal": "Escalar FurLife para clínicas con quirófano, internamiento, servicio de peluquería/estética canina y personal multidisciplinario, con automatización de recordatorios por WhatsApp y reportes financieros avanzados.",
    "deliverables": [
      "Módulo de Quirófano con consentimientos informados y monitoreo anestésico.",
      "Censo de Jaulas de Hospitalización y hoja de evolución horaria (Kardex).",
      "Módulo independiente de Estética canina/felina con ficha técnica y alertas clínicas.",
      "Órdenes y captura de resultados de laboratorio con alertas de valores críticos.",
      "Integración de recordatorios y confirmación de citas vía WhatsApp Cloud API.",
      "Gestión de Proveedores, órdenes de compra y recepción de mercadería con lotes.",
      "Reportes financieros detallados, márgenes de ganancia y comisiones de empleados.",
      "Auditoría forense completa con visor de diffs JSON de modificaciones."
    ],
    "kpis": [
      "Reducción del 45% en ausentismo a citas mediante recordatorios por WhatsApp.",
      "Control milimétrico de pacientes internados con cero omisiones de dosis.",
      "Monitoreo transparente de comisiones para médicos y estilistas."
    ]
  },
  {
    "id": "FASE-3",
    "code": "FASE 3 — ECOSISTEMA",
    "title": "Conectividad, Servicios Pet, Teleconsulta & Directorio",
    "badge": "Ecosistema PetTech",
    "color": "#F59E0B",
    "goal": "Expandir FurLife hacia servicios complementarios de guardería y hotel/hospedaje, teleorientación veterinaria por videollamada cifrada, pasarelas de pago online y directorio de clínicas verificadas.",
    "deliverables": [
      "Salas de Teleconsulta WebRTC cifradas con historia clínica en pantalla dividida.",
      "Módulo de Guardería canina con check-in por QR y control de vacunas obligatorias.",
      "Módulo de Hotel y Hospedaje con reservas de suites y bitácora de alimentación.",
      "Integración de pasarelas de cobro online (Stripe, Mercado Pago) con links de pago.",
      "Módulo de encuestas de satisfacción, NPS y reputación verificada post-atención.",
      "Directorio público FurLife y algoritmo de visibilidad equilibrada para clínicas.",
      "Integración con equipos analizadores in-house (IDEXX / Zoetis) vía protocolos de lab."
    ],
    "kpis": [
      "Ampliación del catálogo de ingresos de la clínica a servicios de hospedaje y daycare.",
      "Cobro ágil de anticipos y teleconsultas con links de pago seguros.",
      "NPS promedio de tutores medido y auditable de forma automatizada."
    ]
  },
  {
    "id": "FASE-4",
    "code": "FASE 4 — INTELIGENCIA / IA",
    "title": "Inteligencia Artificial Clínica Asistiva & Pipeline ML",
    "badge": "Inteligencia Clínica",
    "color": "#8B5CF6",
    "goal": "Incorporar inteligencia artificial y machine learning riguroso y ético como asistente al diagnóstico diferencial, prevención de interacciones farmacológicas y predicción de abandono de tratamientos, siempre bajo supervisión veterinaria estricta.",
    "deliverables": [
      "Límites éticos y legales inquebrantables: la IA jamás emite diagnósticos finales sin firma veterinaria.",
      "Motor de alerta de interacciones farmacológicas y contraindicaciones por especie.",
      "Soporte al Diagnóstico Diferencial (CDSS) basado en signos clínicos y anamnesis.",
      "Modelos predictivos de ausentismo de citas (No-Show) y abandono de pacientes crónicos.",
      "Pipeline completo de MLOps: desidentificación de datos, versionado con MLflow y control de drift.",
      "Módulo de explicabilidad de modelos con SHAP / LIME para total transparencia médica."
    ],
    "kpis": [
      "Cero incidentes de intoxicación o contraindicación farmacológica prevenible.",
      "Validación veterinaria documentada en el 100% de sugerencias algorítmicas.",
      "Latencia de inferencia de modelos en producción menor a 150 milisegundos."
    ]
  }
];

window.FURLIFE_LUNA_SPECS = {
  "name": "Luna",
  "role": "Asistente Inteligente de FurLife para Profesionales Veterinarios",
  "avatar": "🐾 Luna AI",
  "palette": {
    "primary": "#365B6D",
    "accent": "#40BFB4",
    "soft": "#E3F7F7"
  },
  "mvpCapabilities": [
    "Explicar paso a paso el funcionamiento y flujos de cualquier módulo de FurLife.",
    "Guiar al usuario en la admisión de clínicas, configuración de horarios y alta de empleados.",
    "Buscar rápidamente expedientes de pacientes por nombre, tutor o microchip.",
    "Consultar citas del día y estado de la sala de espera mediante comandos directos.",
    "Navegar instantáneamente a secciones específicas del sistema (Command Palette con Ctrl+K).",
    "Proponer plantillas predeterminadas de anamnesis, recetas y consentimientos informados.",
    "Resumir la actividad del turno (total de pacientes atendidos, ingresos en caja y alertas)."
  ],
  "futureCapabilities": [
    "Resumen clínico instantáneo del historial de un paciente crónico antes de iniciar la consulta.",
    "Detección proactiva de interacciones farmacológicas entre la nueva prescripción y tratamientos previos.",
    "Sugerencias de diagnósticos diferenciales basadas en el cuadro clínico anotado en SOAP.",
    "Borradores inteligentes de mensajes de seguimiento post-consulta para el tutor.",
    "Extracción automática de datos de informes de laboratorio en PDF o imágenes escaneadas."
  ],
  "clinicalSafetyBoundaries": [
    "1. NO EMITIR DIAGNÓSTICOS DEFINITIVOS: Luna jamás diagnostica por sí misma. Sus análisis son únicamente sugerencias diferenciales probabilísticas.",
    "2. NUNCA REEMPLAZAR EL CRITERIO PROFESIONAL: La responsabilidad médica recae siempre en el veterinario colegiado con firma y matrícula.",
    "3. DESCARGOS Y ADVERTENCIAS VISIBLES: Toda sugerencia algorítmica incluye una advertencia explícita y bibliografía médica de soporte.",
    "4. AUDITORÍA Y TRAZABILIDAD: Se registra en logs cada interacción donde se consultó una sugerencia y si el médico la aceptó o modificó.",
    "5. PROTECCIÓN DE DATOS: Ningún dato personal identificable de tutores o pacientes es enviado a modelos externos sin anonimización estricta previa."
  ],
  "mlPipelineSteps": [
    {
      "step": "1. Ingestión y Desidentificación",
      "desc": "Anonimización rigurosa de datos clínicos eliminando identificadores personales (PII) según RGPD."
    },
    {
      "step": "2. Curaduría y Limpieza",
      "desc": "Detección y tratamiento de valores atípicos, imputación médica controlada y normalización de unidades de laboratorio."
    },
    {
      "step": "3. Feature Engineering",
      "desc": "Generación de variables agregadas respetando líneas temporales para evitar filtración de futuro (Data Leakage)."
    },
    {
      "step": "4. Entrenamiento y Validación Cruzada",
      "desc": "Entrenamiento supervisado con partición temporal (Time-Series Split) y optimización de métricas clínicas (Recall / F1)."
    },
    {
      "step": "5. Evaluación de Sesgos y Equidad",
      "desc": "Verificación de que el modelo rinda equitativamente en diferentes especies (caninos, felinos) y tamaños."
    },
    {
      "step": "6. Versionado y Registro en MLOps",
      "desc": "Registro de artefactos, pesos del modelo e hiperparámetros en MLflow con trazabilidad completa."
    },
    {
      "step": "7. Despliegue de API de Inferencia",
      "desc": "Microservicio contenedorizado de baja latencia (< 150ms) con validación estricta de esquemas de entrada."
    },
    {
      "step": "8. Monitoreo Continuo de Drift",
      "desc": "Detección automática de desviaciones de datos (Data Drift) y degradación de rendimiento (Concept Drift)."
    },
    {
      "step": "9. Reentrenamiento y Human-in-the-Loop",
      "desc": "Ciclos periódicos de reentrenamiento con retroalimentación y supervisión de un comité de veterinarios consultores."
    }
  ]
};
