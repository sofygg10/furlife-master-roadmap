# -*- coding: utf-8 -*-
"""
generate_arch_models.py
Generates js/data-architecture.js covering:
  - Technical Architecture & Backend (21 areas with granular engineering tasks)
  - Data Models (37 core entities with fields, relations, indexes, validations, migrations, tests)
  - Roadmap Phase Definitions & Milestones
  - Luna AI Assistant & Clinical ML Pipeline Guardrails
"""
import json
import os

def at(tid, title, desc, cat, phase, prio, deps=None):
    return {
        "id": tid,
        "title": title,
        "description": desc,
        "category": cat,
        "phase": phase,
        "priority": prio,
        "status": "Pendiente",
        "completed": False,
        "dependencies": deps or [],
        "notes": ""
    }

# 1. ARQUITECTURA Y BACKEND (21 Áreas)
architecture_areas = [
    {
        "id": "ARCH-FE",
        "name": "Frontend",
        "description": "Arquitectura de interfaz cliente, componentes, gestión de estado y rendimiento.",
        "tasks": [
            at("ARCH-FE-001", "Configurar arquitectura SPA / SSR modular", "Estructura de directorios por dominios funcionales (clinica, pacientes, citas, caja).", "Frontend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-FE-002", "Implementar FurLife Design System y temas visuales", "Configurar tokens CSS con la paleta FurLife (#365B6D, #40BFB4, #E3F7F7, #FFFFFF).", "Frontend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-FE-003", "Configurar gestor de estado global reactivo (Zustand / Redux Toolkit / Pinia)", "Manejo desacoplado de sesión activa, tenant, caja abierta y alertas.", "Frontend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-FE-004", "Implementar capa de cliente HTTP con interceptores automáticos", "Inyección de tokens JWT, manejo automático de refresco 401 y reintentos en 503.", "Frontend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-FE-005", "Configurar Code Splitting y Lazy Loading por módulo", "Carga bajo demanda de módulos pesados (Quirófano, Hospitalización, Reportes).", "Frontend", "FASE 1 — MVP", "ALTA"),
            at("ARCH-FE-006", "Implementar persistencia offline y sincronización en borrador", "Guardado local en IndexedDB/localStorage para que formularios no se pierdan.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA")
        ]
    },
    {
        "id": "ARCH-BE",
        "name": "Backend",
        "description": "Arquitectura de servicios, lógica de dominio, patrones de diseño y controladores.",
        "tasks": [
            at("ARCH-BE-001", "Implementar Clean Architecture / Arquitectura Hexagonal", "Separación estricta de Entidades de Dominio, Casos de Uso y Adaptadores de Entrada/Salida.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-BE-002", "Diseñar capa de servicios transaccionales con Unit of Work", "Garantizar atomicidad en operaciones compuestas (ej: cita + consulta + stock + cobro).", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-BE-003", "Configurar inyección de dependencias y contenedor IoC", "Facilitar desacoplamiento, pruebas unitarias y sustitución de adaptadores.", "Backend", "FASE 1 — MVP", "ALTA"),
            at("ARCH-BE-004", "Implementar bus de eventos de dominio en memoria / Redis", "Desacoplar efectos secundarios (envío de emails, actualización de estadísticas).", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA")
        ]
    },
    {
        "id": "ARCH-API",
        "name": "API",
        "description": "Diseño RESTful, especificación OpenAPI, contratos de payload y versionado.",
        "tasks": [
            at("ARCH-API-001", "Estandarizar diseño RESTful y convenciones de endpoints", "Nombres en plural, verbos HTTP correctos (GET, POST, PUT, PATCH, DELETE) y códigos de estado.", "API", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-API-002", "Configurar generación de OpenAPI 3.1 / Swagger interactivo", "Documentación viva sincronizada con los esquemas de código.", "API", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-API-003", "Implementar Rate Limiting y Throttling por IP y por Tenant", "Prevenir abuso y ataques de denegación de servicio en endpoints públicos.", "API", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-API-004", "Estrategia de versionado de API en URL (/api/v1/...)", "Permitir evolucionar modelos sin romper clientes antiguos o apps móviles de tutores.", "API", "FASE 2 — OPERACIÓN AVANZADA", "ALTA")
        ]
    },
    {
        "id": "ARCH-DB",
        "name": "Base de datos",
        "description": "Diseño relacional PostgreSQL, multi-tenancy, índices y pool de conexiones.",
        "tasks": [
            at("ARCH-DB-001", "Implementar estrategia Multi-Tenant mediante tenant_id y RLS", "Garantizar que una clínica jamás pueda leer ni escribir registros de otra clínica.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-DB-002", "Configurar connection pooling optimizado (PgBouncer / HikariCP)", "Gestión eficiente de miles de conexiones concurrentes sin saturar la RAM de la base de datos.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-DB-003", "Estrategia de llaves primarias UUIDv7 para ordenamiento secuencial", "Evitar fragmentación de índices B-Tree y permitir generación segura de IDs en cliente.", "Base de Datos", "FASE 1 — MVP", "ALTA"),
            at("ARCH-DB-004", "Configurar auditoría de consultas lentas (pg_stat_statements)", "Alertar automáticamente sobre queries que superen los 100ms de ejecución.", "Base de Datos", "FASE 1 — MVP", "ALTA")
        ]
    },
    {
        "id": "ARCH-AUTH",
        "name": "Autenticación",
        "description": "Gestión segura de identidades, tokens, sesiones HttpOnly y 2FA.",
        "tasks": [
            at("ARCH-AUTH-001", "Implementar hashing de contraseñas con Argon2id / bcrypt", "Configurar costo computacional óptimo para proteger contra ataques con GPU.", "Seguridad", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-AUTH-002", "Configurar Access Tokens JWT de corta duración (15 min)", "Firmados con clave asimétrica RS256 o EdDSA con verificación en memoria.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-AUTH-003", "Implementar Refresh Token Rotation almacenado en HttpOnly Cookies", "Prevenir robo de tokens mediante XSS con invalidación de cadena de tokens en reúso.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-AUTH-004", "Soporte para 2FA con TOTP (RFC 6238)", "Códigos temporales compatibles con Google Authenticator y 1Password.", "Seguridad", "FASE 2 — OPERACIÓN AVANZADA", "ALTA")
        ]
    },
    {
        "id": "ARCH-RBAC",
        "name": "Autorización",
        "description": "Control de acceso basado en roles y políticas granulares por recurso.",
        "tasks": [
            at("ARCH-RBAC-001", "Diseñar motor de evaluación de políticas RBAC en memoria", "Validación sub-milisegundo de permisos en cada endpoint de API.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-RBAC-002", "Implementar autorización a nivel de recurso (ABAC / Ownership Guard)", "Validar que el veterinario pertenezca a la clínica dueña del paciente que intenta atender.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-RBAC-003", "Protección de rutas frontend basada en directivas de permisos", "Redirección controlada si un usuario sin rol administrativo intenta acceder a finanzas.", "Frontend", "FASE 1 — MVP", "CRÍTICA")
        ]
    },
    {
        "id": "ARCH-STO",
        "name": "Storage",
        "description": "Almacenamiento en la nube (S3 / GCS), URLs prefirmadas y procesamiento multimedia.",
        "tasks": [
            at("ARCH-STO-001", "Configurar bucket seguro de S3 con acceso privado y URLs prefirmadas", "Subidas directas cliente->S3 con expiración de URL en 10 minutos para radiografías y recetas.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-STO-002", "Pipeline de procesamiento y optimización de imágenes a formato WebP", "Reducción del peso de fotos de pacientes y consentimientos sin pérdida visual.", "Backend", "FASE 1 — MVP", "ALTA"),
            at("ARCH-STO-003", "Políticas de retención y ciclo de vida de archivos en almacenamiento frío", "Archivado automático de adjuntos de pacientes inactivos tras 5 años para ahorro de costos.", "DevOps", "FASE 3 — ECOSISTEMA", "BAJA")
        ]
    },
    {
        "id": "ARCH-VAL",
        "name": "Validaciones",
        "description": "Esquemas de validación unificados en frontend y backend (Zod / Joi / Pydantic).",
        "tasks": [
            at("ARCH-VAL-001", "Definir esquemas de validación fuertemente tipados (Zod/Pydantic)", "Validar formatos de fecha, teléfonos E.164, microchips de 15 dígitos y pesos positivos.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-VAL-002", "Implementar middleware de validación automática de payloads en API", "Rechazar peticiones mal formadas con código 422 y listado detallado de campos con error.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-VAL-003", "Saneamiento universal contra inyecciones XSS en campos de texto enriquecido", "Limpieza de etiquetas HTML en motivos de consulta y notas clínicas.", "Seguridad", "FASE 1 — MVP", "CRÍTICA")
        ]
    },
    {
        "id": "ARCH-ERR",
        "name": "Manejo de errores",
        "description": "Estandarización de respuestas RFC 7807 Problem Details y fallbacks de interfaz.",
        "tasks": [
            at("ARCH-ERR-001", "Estandarizar errores de backend con RFC 7807 (Problem Details for HTTP APIs)", "Respuestas JSON con `type`, `title`, `status`, `detail`, `instance` y `error_code` unificado.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-ERR-002", "Implementar Error Boundaries en Frontend con pantallas de recuperación", "Evitar pantallas en blanco si un componente falla; mostrar botón de reintento.", "Frontend", "FASE 1 — MVP", "ALTA"),
            at("ARCH-ERR-003", "Diccionario de códigos de error de negocio en español e inglés", "Mensajes claros para el usuario sin revelar detalles técnicos internos del servidor.", "Frontend", "FASE 1 — MVP", "ALTA")
        ]
    },
    {
        "id": "ARCH-LOG",
        "name": "Logs",
        "description": "Registro estructurado en formato JSON, correlación distribuida y recolección centralizada.",
        "tasks": [
            at("ARCH-LOG-001", "Configurar logger estructurado en formato JSON con niveles (info, warn, error)", "Inclusión de timestamp ISO, tenant_id, user_id y trace_id en cada línea de log.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-LOG-002", "Implementar propagación de ID de correlación (x-request-id)", "Rastrear una solicitud a través de todos los componentes y servicios involucrados.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-LOG-003", "Filtro de ofuscación de datos sensibles en logs (PII Masking)", "Ocultar automáticamente contraseñas, números de tarjeta bancaria y tokens en los logs.", "Seguridad", "FASE 1 — MVP", "CRÍTICA")
        ]
    },
    {
        "id": "ARCH-AUD",
        "name": "Auditoría",
        "description": "Trazabilidad forense inmutable de cambios en datos críticos clínicos y contables.",
        "tasks": [
            at("ARCH-AUD-001", "Crear motor de captura de diferencias (diff JSON) en mutaciones", "Guardar estado anterior y estado nuevo en cada UPDATE de historias clínicas y caja.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-AUD-002", "Garantizar persistencia append-only en la tabla audit_logs", "Restringir permisos para que ningún usuario de la base de datos pueda alterar registros de auditoría.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-AUD-003", "Visor administrativo de auditoría para peritajes legales", "Interfaz de consulta de actividad forense con filtros por usuario, fecha y expediente.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA")
        ]
    },
    {
        "id": "ARCH-SEC",
        "name": "Seguridad",
        "description": "Mitigación OWASP Top 10, cabeceras HTTP seguras, CORS y cifrado.",
        "tasks": [
            at("ARCH-SEC-001", "Configurar cabeceras de seguridad estrictas (HSTS, CSP, X-Frame-Options, X-Content-Type)", "Evitar ataques de Clickjacking y scripts maliciosos.", "Seguridad", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-SEC-002", "Configurar políticas de CORS estrictas por origen permitido", "Bloquear solicitudes desde dominios desconocidos en la API.", "Seguridad", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-SEC-003", "Cifrado de campos sensibles en base de datos con AES-256", "Cifrar identificaciones fiscales y datos médicos especialmente protegidos.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-SEC-004", "Auditoría continua de dependencias con escaneo de vulnerabilidades (CVEs)", "Bloquear builds automáticos que contengan vulnerabilidades con severidad alta o crítica.", "DevOps", "FASE 1 — MVP", "ALTA")
        ]
    },
    {
        "id": "ARCH-BAK",
        "name": "Backups",
        "description": "Copias de seguridad continuas, snapshots automatizados y recuperación point-in-time.",
        "tasks": [
            at("ARCH-BAK-001", "Configurar backups automatizados diarios y continuos (WAL archiving / PITR)", "Capacidad de restaurar la base de datos a cualquier segundo específico en caso de error humano.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-BAK-002", "Replicación cruzada de copias en almacenamiento secundario fuera de región", "Proteger la información contra incidentes mayores en el centro de datos principal.", "DevOps", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-BAK-003", "Script automatizado de prueba periódica de restauración de backup", "Validar semanalmente que el backup generado sea 100% restaurable e íntegro.", "DevOps", "FASE 1 — MVP", "CRÍTICA")
        ]
    },
    {
        "id": "ARCH-ENV",
        "name": "Variables de entorno",
        "description": "Gestión centralizada y validación en arranque de secretos y configuraciones.",
        "tasks": [
            at("ARCH-ENV-001", "Implementar validador de variables de entorno al iniciar la aplicación (Env Schema)", "Detener el arranque inmediatamente si falta alguna variable crítica (DB_URL, JWT_SECRET).", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-ENV-002", "Integración con gestor de secretos (AWS Secrets Manager / Vault)", "Inyección dinámica de credenciales de producción sin almacenarlas en archivos planos.", "DevOps", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-ENV-003", "Separación estricta de variables públicas del cliente vs secretos privados del servidor", "Evitar exponer claves privadas de pasarelas o servicios en el bundle frontend.", "Seguridad", "FASE 1 — MVP", "CRÍTICA")
        ]
    },
    {
        "id": "ARCH-CFG",
        "name": "Configuración",
        "description": "Feature flags, personalización por clínica, multimoneda y zonas horarias.",
        "tasks": [
            at("ARCH-CFG-001", "Implementar motor de Feature Flags (toggles por clínica)", "Habilitar o deshabilitar módulos (Estética, Guardería, Teleconsulta) según el plan contratado.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-CFG-002", "Configurar formateador de divisas y fechas por zona horaria de la sede", "Soporte transparente para operaciones en múltiples países de Iberoamérica.", "Frontend", "FASE 1 — MVP", "ALTA"),
            at("ARCH-CFG-003", "Caché de configuraciones de clínica en memoria Redis con invalidación reactiva", "Reducir consultas repetitivas a la base de datos para datos estáticos de clínica.", "Backend", "FASE 1 — MVP", "ALTA")
        ]
    },
    {
        "id": "ARCH-DEV",
        "name": "Desarrollo",
        "description": "Entorno local de desarrollo reproducible con un solo comando (Docker Compose).",
        "tasks": [
            at("ARCH-DEV-001", "Crear Docker Compose de desarrollo con PostgreSQL, Redis y MailHog", "Permitir a cualquier programador levantar la infraestructura completa en local en 1 minuto.", "DevOps", "FASE 1 — MVP", "ALTA"),
            at("ARCH-DEV-002", "Generar semillas de datos clínicos realistas para desarrollo (Seeders)", "Poblar 5 clínicas, 20 veterinarios, 100 pacientes con historias clínicas completas de prueba.", "Base de Datos", "FASE 1 — MVP", "ALTA"),
            at("ARCH-DEV-003", "Configurar hot-reloading optimizado en frontend y backend", "Tiempos de recarga en caliente menores a 300ms durante el desarrollo.", "DevOps", "FASE 1 — MVP", "MEDIA")
        ]
    },
    {
        "id": "ARCH-STG",
        "name": "Staging",
        "description": "Ambiente de preproducción idéntico a producción para QA y validación de clientes.",
        "tasks": [
            at("ARCH-STG-001", "Desplegar entorno de Staging aislado con datos anonimizados", "Réplica exacta de la infraestructura de producción para pruebas fiables.", "DevOps", "FASE 1 — MVP", "ALTA"),
            at("ARCH-STG-002", "Configurar pipeline de despliegue continuo hacia Staging en cada merge a develop", "Automatizar validación temprana de nuevas funcionalidades.", "DevOps", "FASE 1 — MVP", "ALTA"),
            at("ARCH-STG-003", "Ambiente estéril para pruebas de carga y estrés previo a lanzamientos mayores", "Ejecución de tests con k6 sin afectar a clínicas reales.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "ALTA")
        ]
    },
    {
        "id": "ARCH-PRD",
        "name": "Producción",
        "description": "Entorno de alta disponibilidad, tolerancia a fallos y cero tiempo de inactividad.",
        "tasks": [
            at("ARCH-PRD-001", "Configurar infraestructura de producción de alta disponibilidad en AWS / GCP", "Balanceadores de carga elásticos, clúster de base de datos multi-AZ y CDN global.", "DevOps", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-PRD-002", "Configurar certificados TLS/SSL con renovación automatizada (Let's Encrypt / ACM)", "Cifrado estricto de todas las comunicaciones cliente-servidor.", "Seguridad", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-PRD-003", "Definir políticas de mantenimiento programado y avisos de servicio", "Banner automático en la app con 48h de anticipación ante mantenimientos requeridos.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA")
        ]
    },
    {
        "id": "ARCH-CICD",
        "name": "CI/CD",
        "description": "Integración y entrega continua con validación de calidad y seguridad obligatorias.",
        "tasks": [
            at("ARCH-CICD-001", "Configurar workflow de CI (Linting, Type-check, Unit Tests, Security Scan)", "Bloquear merge de Pull Requests si algún test falla o hay errores de tipos.", "DevOps", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-CICD-002", "Pipeline de construcción y empaquetado de imágenes Docker inmutables", "Etiquetado de imágenes por hash de commit y versión semántica (SemVer).", "DevOps", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-CICD-003", "Mecanismo de aprobación manual para despliegues a Producción", "Requerir firma de dos desarrolladores senior antes de liberar a producción.", "DevOps", "FASE 1 — MVP", "ALTA")
        ]
    },
    {
        "id": "ARCH-DEP",
        "name": "Deploy",
        "description": "Orquestación de despliegues Zero Downtime, canary releases y rollbacks.",
        "tasks": [
            at("ARCH-DEP-001", "Implementar estrategia de despliegue Blue/Green o Rolling Updates", "Garantizar cero desconexión para veterinarios en consulta durante una actualización.", "DevOps", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-DEP-002", "Automatizar migraciones de base de datos previas al encendido de nuevos pods", "Migraciones compatibles hacia atrás (backward-compatible) para no romper versiones previas.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-DEP-003", "Comando de Rollback inmediato de 1 solo clic", "Capacidad de volver a la versión previa en menos de 60 segundos si se detectan anomalías.", "DevOps", "FASE 1 — MVP", "CRÍTICA")
        ]
    },
    {
        "id": "ARCH-MON",
        "name": "Monitoreo",
        "description": "Observabilidad en tiempo real, rastreo APM, alertas y telemetría.",
        "tasks": [
            at("ARCH-MON-001", "Integrar monitorización de errores en tiempo real con Sentry", "Captura instantánea de excepciones no controladas con contexto de usuario y trazas.", "DevOps", "FASE 1 — MVP", "CRÍTICA"),
            at("ARCH-MON-002", "Configurar métricas de rendimiento APM (Tiempos de respuesta de API, uso de memoria)", "Dashboards en tiempo real para visualizar latencias de percentiles p95 y p99.", "DevOps", "FASE 1 — MVP", "ALTA"),
            at("ARCH-MON-003", "Configurar canal de alertas críticas en Slack y guardias móviles (PagerDuty)", "Notificación inmediata al equipo de ingeniería ante errores 500 o fallos de red.", "DevOps", "FASE 1 — MVP", "CRÍTICA")
        ]
    }
]

# 2. MODELO DE DATOS (37 Entidades requeridas)
entities_list = [
    ("Usuario", "users", "Identidades de acceso, credenciales, email y estados de cuenta."),
    ("Veterinario", "veterinarians", "Profesionales médicos, cédula, firma digital y sellos."),
    ("Clínica", "clinics", "Organizaciones veterinarias, datos fiscales, sedes y configuración."),
    ("Empleado", "employees", "Colaboradores, cargos operativos, horarios y comisiones."),
    ("Rol", "roles", "Roles del sistema (SuperAdmin, Director, Vet, Groomer, etc.)."),
    ("Permiso", "permissions", "Privilegios atómicos del sistema para control granular."),
    ("Propietario", "owners", "Tutores de mascotas, datos de contacto, facturación y consentimientos."),
    ("Mascota", "pets", "Datos biológicos, raza, especie, fecha nacimiento, foto y microchip."),
    ("Paciente", "patients", "Expediente médico activo, número correlativo y vínculo con tutor."),
    ("Consulta", "consultations", "Atención médica estructurada SOAP, notas y resoluciones."),
    ("Historia clínica", "medical_records", "Línea de tiempo médica unificada e inmutable."),
    ("Signos vitales", "vital_signs", "Constantes fisiológicas: peso, temperatura, FC, FR, TLLC."),
    ("Diagnóstico", "diagnoses", "Patologías según catálogo veterinario, presuntivas o definitivas."),
    ("Medicamento", "medications", "Vademécum, principios activos, concentraciones y presentaciones."),
    ("Receta", "prescriptions", "Prescripciones digitales, instrucciones, firma médica y QR."),
    ("Vacuna", "vaccinations", "Inmunizaciones aplicadas, biológicos, lotes y refuerzos."),
    ("Procedimiento", "procedures", "Curaciones, sondajes, maniobras clínicas menores e insumos."),
    ("Cirugía", "surgeries", "Protocolos quirúrgicos, consentimiento informado y anestesia."),
    ("Hospitalización", "hospitalizations", "Ingresos hospitalarios, jaulas, monitoreo y evolución."),
    ("Examen", "lab_exams", "Órdenes de laboratorio, parámetros numéricos y resultados."),
    ("Documento", "documents", "Radiografías, ecografías, consentimientos firmados y PDFs."),
    ("Cita", "appointments", "Reservas de consulta, vacuna o estética, estados y horas."),
    ("Servicio", "services", "Catálogo de prestaciones médicas y comerciales con tarifas."),
    ("Teleconsulta", "teleconsultations", "Salas virtuales, enlaces WebRTC y notas de teleorientación."),
    ("Producto", "products", "Artículos vendibles, retail, alimentos secos y húmedos."),
    ("Inventario", "inventory_stocks", "Existencias por almacén, lotes y fechas de caducidad."),
    ("Proveedor", "suppliers", "Distribuidores comerciales, laboratorios y plazos de pago."),
    ("Movimiento de inventario", "inventory_movements", "Kardex inmutable de entradas, salidas y ajustes de stock."),
    ("Consumo", "product_consumptions", "Descargo de material e insumos consumidos en actos clínicos."),
    ("Factura", "invoices", "Comprobantes fiscales, tickets, bases imponibles y totales."),
    ("Pago", "payments", "Transacciones de cobro, métodos de pago y referencias."),
    ("Caja", "cash_registers", "Sesiones de caja diaria, fondos iniciales, arqueos y cierres."),
    ("Plantilla", "templates", "Modelos preconfigurados de anamnesis, recetas y consentimientos."),
    ("Notificación", "notifications", "Alertas del sistema, recordatorios y avisos internos."),
    ("Reseña", "reviews", "Opiniones de tutores, calificaciones con estrellas y NPS."),
    ("Ranking", "rankings", "Métricas de posicionamiento y reputación de clínicas/médicos."),
    ("Registro de auditoría", "audit_logs", "Trazabilidad forense inmutable de mutaciones y accesos.")
]

data_models = []
for idx, (ent_name, table_name, ent_desc) in enumerate(entities_list, start=1):
    eid = f"ENT-{idx:02d}"
    data_models.append({
        "id": eid,
        "name": ent_name,
        "table": table_name,
        "description": ent_desc,
        "tasks": [
            at(f"{eid}-01", f"Crear entidad {ent_name} y modelo ORM", f"Definir clase de entidad en backend y esquema de tabla {table_name}.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at(f"{eid}-02", f"Definir campos y tipos de datos para {ent_name}", f"Tipos precisos (UUID, VARCHAR, NUMERIC, TIMESTAMP TZ, JSONB) con restricciones NOT NULL.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at(f"{eid}-03", f"Definir relaciones y llaves foráneas para {ent_name}", f"Configurar claves foráneas, índices de relación y reglas de borrado (RESTRICT / CASCADE).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at(f"{eid}-04", f"Definir índices y restricciones de unicidad para {ent_name}", f"Índices B-Tree en llaves foráneas e índices compuestos para consultas frecuentes.", "Base de Datos", "FASE 1 — MVP", "ALTA"),
            at(f"{eid}-05", f"Validaciones a nivel de modelo para {ent_name}", f"Reglas de negocio e invariantes de datos previas a la persistencia.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            at(f"{eid}-06", f"Crear migración de base de datos para {ent_name}", f"Script de migración up/down testeado en PostgreSQL con soporte para rollback.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
            at(f"{eid}-07", f"Pruebas unitarias de persistencia e integridad de {ent_name}", f"Verificar guardado, lectura y violación de restricciones de {ent_name}.", "QA", "FASE 1 — MVP", "ALTA")
        ]
    })

# 3. ROADMAP DE FASES
roadmap_phases = [
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
]

# 4. LUNA & IA CLÍNICA ESPECIFICACIONES
luna_specs = {
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
        {"step": "1. Ingestión y Desidentificación", "desc": "Anonimización rigurosa de datos clínicos eliminando identificadores personales (PII) según RGPD."},
        {"step": "2. Curaduría y Limpieza", "desc": "Detección y tratamiento de valores atípicos, imputación médica controlada y normalización de unidades de laboratorio."},
        {"step": "3. Feature Engineering", "desc": "Generación de variables agregadas respetando líneas temporales para evitar filtración de futuro (Data Leakage)."},
        {"step": "4. Entrenamiento y Validación Cruzada", "desc": "Entrenamiento supervisado con partición temporal (Time-Series Split) y optimización de métricas clínicas (Recall / F1)."},
        {"step": "5. Evaluación de Sesgos y Equidad", "desc": "Verificación de que el modelo rinda equitativamente en diferentes especies (caninos, felinos) y tamaños."},
        {"step": "6. Versionado y Registro en MLOps", "desc": "Registro de artefactos, pesos del modelo e hiperparámetros en MLflow con trazabilidad completa."},
        {"step": "7. Despliegue de API de Inferencia", "desc": "Microservicio contenedorizado de baja latencia (< 150ms) con validación estricta de esquemas de entrada."},
        {"step": "8. Monitoreo Continuo de Drift", "desc": "Detección automática de desviaciones de datos (Data Drift) y degradación de rendimiento (Concept Drift)."},
        {"step": "9. Reentrenamiento y Human-in-the-Loop", "desc": "Ciclos periódicos de reentrenamiento con retroalimentación y supervisión de un comité de veterinarios consultores."}
    ]
}

total_arch_tasks = sum(len(a["tasks"]) for a in architecture_areas)
total_model_tasks = sum(len(m["tasks"]) for m in data_models)
print(f"Total Architecture Areas: {len(architecture_areas)} with {total_arch_tasks} tasks")
print(f"Total Data Model Entities: {len(data_models)} with {total_model_tasks} tasks")

output_arch_path = os.path.join("js", "data-architecture.js")
with open(output_arch_path, "w", encoding="utf-8") as f:
    f.write("// FurLife Master Checklist - Architecture, Data Models, Roadmap & Luna AI\n")
    f.write("// Detailed technical specifications for engineering and product leadership\n")
    f.write("window.FURLIFE_ARCHITECTURE = ")
    json.dump(architecture_areas, f, ensure_ascii=False, indent=2)
    f.write(";\n\n")
    f.write("window.FURLIFE_DATA_MODELS = ")
    json.dump(data_models, f, ensure_ascii=False, indent=2)
    f.write(";\n\n")
    f.write("window.FURLIFE_ROADMAP_PHASES = ")
    json.dump(roadmap_phases, f, ensure_ascii=False, indent=2)
    f.write(";\n\n")
    f.write("window.FURLIFE_LUNA_SPECS = ")
    json.dump(luna_specs, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Successfully generated {output_arch_path}!")
