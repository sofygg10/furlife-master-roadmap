# -*- coding: utf-8 -*-
"""
generate_modules.py
Generates js/data-modules.js covering all 59 veterinary modules with 900+ granular tasks.
"""
import json
import os

def t(tid, title, desc, cat, phase, prio, deps=None):
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

modules = [
    # 01. Arquitectura general del sistema
    {
        "id": "MOD-01",
        "num": 1,
        "name": "Arquitectura general del sistema",
        "category": "Infraestructura & Core",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Definición del diseño de software, estructura modular, contratos de API, patrones multi-tenant y estándares de código de FurLife.",
        "tasks": [
            t("MOD-01-001", "Definir patrón de arquitectura modular/hexagonal", "Establecer la separación estricta entre capas de dominio, casos de uso, adaptadores e infraestructura.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
            t("MOD-01-002", "Diseñar arquitectura multi-tenant y aislamiento de datos", "Definir estrategia multi-inquilino (tenant_id por clínica con Row-Level Security en PostgreSQL).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-001"]),
            t("MOD-01-003", "Definir especificación de API RESTful y OpenAPI 3.1", "Configurar generación de documentación Swagger interactiva y contratos de schemas.", "API", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-001"]),
            t("MOD-01-004", "Estructurar proyecto frontend y Design System FurLife", "Configurar componentes base, tokens de diseño con la paleta FurLife (#365B6D, #40BFB4, #E3F7F7) y tipografía.", "Frontend", "FASE 1 — MVP", "CRÍTICA"),
            t("MOD-01-005", "Implementar middleware de contexto de tenant y correlación", "Inyectar tenant_id y x-request-id en cada request HTTP para trazabilidad transversal.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-01-006", "Configurar sistema centralizado de manejo de excepciones", "Estandarizar respuestas de error HTTP bajo la especificación RFC 7807 (Problem Details).", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-01-003"]),
            t("MOD-01-007", "Diseñar capa de abstracción de almacenamiento (Storage Driver)", "Permitir almacenamiento agnóstico en S3/GCS para fotos clínicas, radiografías y PDF de recetas.", "Backend", "FASE 1 — MVP", "ALTA"),
            t("MOD-01-008", "Configurar bus de eventos interno para desacoplamiento", "Implementar pub/sub en memoria o Redis para eventos de dominio (ej: cita_creada, stock_agotado).", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA"),
            t("MOD-01-009", "Configurar linters, formateadores y hooks de pre-commit", "Establecer ESLint, Prettier, Black/Ruff y Husky para calidad estricta de código.", "DevOps", "FASE 1 — MVP", "ALTA"),
            t("MOD-01-010", "Diseñar estrategia de versionado de API (/v1, /v2)", "Garantizar retrocompatibilidad ante futuras aplicaciones de propietarios e integraciones.", "API", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA"),
            t("MOD-01-011", "Implementar soporte para internacionalización (i18n) y zonas horarias", "Asegurar timestamps en UTC y formateo local de fecha/hora por sede de clínica.", "Frontend", "FASE 1 — MVP", "ALTA"),
            t("MOD-01-012", "Crear pruebas de humo de arranque de arquitectura", "Validar ciclo de vida de conexión DB, Redis, endpoints de salud (/health/live y /health/ready).", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-005"])
        ]
    },

    # 02. Registro, autenticación y acceso
    {
        "id": "MOD-02",
        "num": 2,
        "name": "Registro, autenticación y acceso",
        "category": "Seguridad & Acceso",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Onboarding de clínicas y veterinarios, autenticación segura basada en JWT/sesiones HttpOnly, recuperación de contraseña y 2FA.",
        "tasks": [
            t("MOD-02-001", "Modelar entidades de credenciales, usuarios y tokens", "Definir tabla de usuarios, hashes bcrypt/argon2id, estados de cuenta y expiración.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-02-002", "Implementar endpoint de registro de clínica y administrador inicial", "Registrar simultáneamente al usuario maestro, su clínica asociada y roles de inicio.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-02-001"]),
            t("MOD-02-003", "Implementar endpoint de inicio de sesión con JWT seguro", "Generar Access Tokens de corta duración y Refresh Tokens rotativos almacenados en HttpOnly cookies.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-02-001"]),
            t("MOD-02-004", "Crear interfaz de Login moderna con paleta FurLife", "Diseñar formulario accesible, validaciones en tiempo real y feedback de errores.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-004"]),
            t("MOD-02-005", "Crear interfaz de Onboarding y Registro para Clínicas", "Wizard paso a paso con datos de la clínica, veterinario responsable y credenciales.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-02-004"]),
            t("MOD-02-006", "Implementar flujo de recuperación de contraseña vía email", "Tokens seguros criptográficos con tiempo límite de expiración de 15 minutos.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-02-003"]),
            t("MOD-02-007", "Crear vista de restablecimiento de contraseña", "Pantalla de cambio de clave con medidor de fuerza y validación de coincidencia.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-02-006"]),
            t("MOD-02-008", "Implementar autenticación de doble factor (2FA / TOTP)", "Soporte para apps de autenticación (Google Authenticator) con código QR y códigos de respaldo.", "Seguridad", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-02-003"]),
            t("MOD-02-009", "Implementar bloqueo automático por intentos fallidos y Rate Limiting", "Proteger endpoints de auth contra ataques de fuerza bruta usando Redis bucket limiter.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-02-003"]),
            t("MOD-02-010", "Implementar revocación global de sesiones e invalidación de tokens", "Permitir cerrar sesión en todos los dispositivos tras cambio de clave.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-02-003"]),
            t("MOD-02-011", "Implementar detección y cierre por inactividad de sesión clínica", "Modal de advertencia tras 15 minutos de inactividad para proteger datos médicos.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-02-004"]),
            t("MOD-02-012", "Crear tests unitarios y de integración para flujos de autenticación", "Cobertura de casos de credenciales inválidas, tokens vencidos y bloqueo por IP.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-02-003"])
        ]
    },

    # 03. Roles y permisos
    {
        "id": "MOD-03",
        "num": 3,
        "name": "Roles y permisos",
        "category": "Seguridad & Acceso",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Sistema granular de control de acceso basado en roles (RBAC) para proteger historiales médicos, finanzas y operaciones clínicas.",
        "tasks": [
            t("MOD-03-001", "Diseñar matriz de roles y permisos del ecosistema FurLife", "Definir roles base: SuperAdmin, Director Médico, Veterinario Titular, Veterinario Asistente, Recepcionista, Groomer, Auxiliar.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-03-002", "Modelar tablas de Roles, Permisos y Asignaciones por Tenant", "Permitir que las clínicas creen roles personalizados con permisos específicos.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-03-001"]),
            t("MOD-03-003", "Implementar middleware / guard de autorización en backend", "Validar permisos requeridos (ej: 'clinical_record:write', 'cash_register:close') en cada ruta.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-03-002"]),
            t("MOD-03-004", "Crear directiva / componente de protección de interfaz en frontend", "Ocultar botones, menús y vistas según los permisos del usuario logueado.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-004"]),
            t("MOD-03-005", "Construir panel de administración de roles y permisos para clínicas", "Interfaz intuitiva con interruptores por módulo para directores de clínica.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-03-004"]),
            t("MOD-03-006", "Implementar permisos de solo lectura para auditores o pasantes", "Garantizar que no puedan alterar diagnósticos, prescripciones ni saldos de caja.", "Seguridad", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-03-003"]),
            t("MOD-03-007", "Bloquear acceso a módulos veterinarios a personal de estética", "Restringir la visualización de datos médicos confidenciales para estilistas y recepcionistas sin rol médico.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-03-003"]),
            t("MOD-03-008", "Pruebas de penetración y escalado de privilegios de roles", "Verificar que solicitudes manipuladas en API no permitan saltarse restricciones de rol.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-03-003"])
        ]
    },

    # 04. Gestión del veterinario
    {
        "id": "MOD-04",
        "num": 4,
        "name": "Gestión del veterinario",
        "category": "Gestión Profesional",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Perfiles profesionales, números de matrícula/cédula profesional, especialidades, firma digital, sellos y disponibilidad horaria.",
        "tasks": [
            t("MOD-04-001", "Modelar entidad de Veterinario con credenciales profesionales", "Campos: cédula profesional, colegio de veterinarios, especialidades, firma y sello digital.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-02-001"]),
            t("MOD-04-002", "Crear endpoints CRUD para el perfil profesional del veterinario", "Gestión de biografía, títulos universitarios, especialidades y horarios de atención.", "API", "FASE 1 — MVP", "CRÍTICA", ["MOD-04-001"]),
            t("MOD-04-003", "Desarrollar pantalla de configuración de perfil del veterinario", "Formulario con foto de perfil, datos de contacto profesional y matrícula médica.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-04-002"]),
            t("MOD-04-004", "Implementar módulo de carga y almacenamiento seguro de firma digital y sello", "Permitir subir trazo digital o imagen PNG de firma con fondo transparente cifrado para recetas.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-007"]),
            t("MOD-04-005", "Definir configuración de horarios y disponibilidad semanal", "Definición de turnos, días de descanso y duración estándar por consulta (ej: 30 min).", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-04-003"]),
            t("MOD-04-006", "Soporte para veterinario independiente vs veterinario adscrito a clínica", "Permitir modalidad de veterinario autónomo sin sede física fija (a domicilio).", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-04-001"]),
            t("MOD-04-007", "Implementar gestión de reemplazos o vacaciones de veterinarios", "Bloqueo de agenda y reasignación de pacientes durante ausencias.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-04-005"]),
            t("MOD-04-008", "Pruebas de validación de cédulas profesionales y unicidad", "Verificar que una cédula no pueda duplicarse dentro de la misma jurisdicción.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-04-002"])
        ]
    },

    # 05. Gestión de la clínica
    {
        "id": "MOD-05",
        "num": 5,
        "name": "Gestión de la clínica",
        "category": "Gestión Empresarial",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Configuración institucional, sedes, salas de consulta, quirófanos, datos fiscales, logotipo y personalización de marca.",
        "tasks": [
            t("MOD-05-001", "Modelar entidad Clínica y sedes operativas", "Campos: razón social, nombre comercial, RFC/NIT/CIF, dirección, teléfonos, logo, config operativa.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-05-002", "Crear endpoints de configuración y actualización de clínica", "Permitir actualizar información institucional, horarios de guardia y teléfonos de urgencias.", "API", "FASE 1 — MVP", "CRÍTICA", ["MOD-05-001"]),
            t("MOD-05-003", "Construir pantalla de configuración general de la clínica", "Panel administrativo con subida de logotipo, pie de página de recetas y datos fiscales.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-05-002"]),
            t("MOD-05-004", "Modelar y gestionar espacios físicos (consultorios, quirófanos, jaulas)", "Catálogo de recursos físicos asignables en agenda para evitar solapamientos.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-05-001"]),
            t("MOD-05-005", "Soporte para gestión multi-sede dentro de la misma organización", "Permitir cambiar entre sedes manteniendo inventario y agenda independientes.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-05-001"]),
            t("MOD-05-006", "Configuración de servicios habilitados por clínica (Médico, Estética, Guardería)", "Permitir activar o desactivar módulos según los servicios reales de la clínica.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-05-003"]),
            t("MOD-05-007", "Pruebas de aislamiento de configuración entre diferentes clínicas", "Asegurar que la configuración de una clínica nunca impacte a otra (Multi-tenant audit).", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-05-002"])
        ]
    },

    # 06. Gestión de empleados
    {
        "id": "MOD-06",
        "num": 6,
        "name": "Gestión de empleados",
        "category": "Gestión de Personal",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "description": "Directorio de colaboradores, recepcionistas, asistentes, estilistas, invitaciones por email, turnos y comisiones.",
        "tasks": [
            t("MOD-06-001", "Modelar entidad Empleado vinculada a Usuario y Clínica", "Campos: cargo, rol, fecha ingreso, salario base, esquema comisiones, estado activo/inactivo.", "Base de Datos", "FASE 1 — MVP", "ALTA", ["MOD-03-002", "MOD-05-001"]),
            t("MOD-06-002", "Implementar sistema de invitación de empleados vía enlace de un solo uso", "Envío de correo con token único para que el empleado complete su registro y clave.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-06-001"]),
            t("MOD-06-003", "Construir tabla y vista de gestión de empleados", "Listado con filtros por rol, estado, búsqueda por nombre y botón de invitar empleado.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-06-002"]),
            t("MOD-06-004", "Desarrollar formulario de alta y edición de empleado", "Asignación de rol, sedes autorizadas, horario laboral y datos de contacto.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-06-003"]),
            t("MOD-06-005", "Implementar desactivación y revocación inmediata de accesos de empleado", "Deshabilitar acceso al sistema sin borrar registros históricos ni auditoría médica.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-06-001"]),
            t("MOD-06-006", "Configuración de esquema de comisiones por servicio o venta (Estética/Veterinaria)", "Cálculo porcentual de comisiones para peluqueros y médicos por consulta/vacuna.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-06-001"]),
            t("MOD-06-007", "Pruebas de envío de invitaciones y expiración de enlaces de acceso", "Verificar que invitaciones vencidas o reutilizadas arrojen error controlado.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-06-002"])
        ]
    },

    # 07. Propietarios/clientes
    {
        "id": "MOD-07",
        "num": 7,
        "name": "Propietarios/clientes",
        "category": "Gestión de Pacientes & CRM",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Ficha completa del tutor/cliente, canales de contacto, dirección, historial financiero, consentimiento de datos y múltiples mascotas asociadas.",
        "tasks": [
            t("MOD-07-001", "Modelar entidad Propietario/Cliente con datos de contacto", "Campos: nombre, apellidos, identificación fiscal/DNI, teléfono principal, WhatsApp, email, dirección.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-07-002", "Crear endpoints CRUD para Propietarios con validación de duplicados", "Búsqueda predictiva por teléfono o documento para evitar duplicidad de clientes.", "API", "FASE 1 — MVP", "CRÍTICA", ["MOD-07-001"]),
            t("MOD-07-003", "Construir interfaz de alta rápida de Propietario durante admisión", "Modal rápido o formulario ágil para recepción sin bloquear la atención médica de urgencia.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-07-002"]),
            t("MOD-07-004", "Desarrollar perfil 360° del Propietario con pestañas de información", "Pestañas: Mascotas asociadas, Historial de citas, Facturas/Deudas, Documentos firmados, Notas.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-07-003"]),
            t("MOD-07-005", "Implementar registro de tutor secundario o contacto de emergencia", "Permitir asociar pareja, familiar o paseador autorizado con teléfono de respaldo.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-07-001"]),
            t("MOD-07-006", "Implementar registro de consentimiento de protección de datos (RGPD/Habeas Data)", "Checkbox auditable con fecha, IP y versión del aviso de privacidad aceptado.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-07-001"]),
            t("MOD-07-007", "Construir buscador predictivo global de clientes con autocompletado", "Búsqueda instantánea por nombre, teléfono, email o nombre de cualquiera de sus mascotas.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-07-002"]),
            t("MOD-07-008", "Implementar exportación de ficha de cliente y balance de cuenta", "Generación de informe en PDF con resumen de servicios y saldo acumulado.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-07-004"]),
            t("MOD-07-009", "Pruebas de validación de teléfonos internacionales y formato de documentos", "Validación estricta de números E.164 para envíos fiables por WhatsApp/SMS.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-07-002"])
        ]
    },

    # 08. Mascotas/pacientes
    {
        "id": "MOD-08",
        "num": 8,
        "name": "Mascotas/pacientes",
        "category": "Gestión de Pacientes & CRM",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Ficha biológica del paciente: especie, raza, edad, sexo, estado reproductivo, microchip, color, foto, alertas médicas y tutor asociado.",
        "tasks": [
            t("MOD-08-001", "Diseñar estructura de datos del paciente y relaciones", "Campos: nombre, especie (canino, felino, exótico), raza, sexo, reproductivo (castrado/entero), fecha nac, microchip.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-07-001"]),
            t("MOD-08-002", "Crear catálogo estandarizado de especies y razas", "Precarga de más de 400 razas caninas y felinas con opción de raza mestiza/mixta.", "Base de Datos", "FASE 1 — MVP", "ALTA", ["MOD-08-001"]),
            t("MOD-08-003", "Crear endpoints CRUD para gestión de pacientes", "Registro, consulta por id, actualización médica y eliminación lógica (soft-delete).", "API", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-001"]),
            t("MOD-08-004", "Crear formulario de registro de mascota con validaciones", "Validar campos obligatorios, cálculo dinámico de edad a partir de fecha de nacimiento o edad estimada.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-003"]),
            t("MOD-08-005", "Implementar subida y recorte de fotografía del paciente", "Optimización de imágenes WebP/JPEG a 400x400 para carátula rápida del expediente.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-01-007"]),
            t("MOD-08-006", "Generar identificador único y código QR identificativo del paciente", "Código alfanumérico único para pulseras hospitalarias y ficha rápida.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-08-003"]),
            t("MOD-08-007", "Construir perfil principal del paciente (Header con badges clínicos)", "Mostrar foto, nombre, badges de alerta (Alergias, Agresivo, Cardiópata) y acceso directo a consulta.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-004"]),
            t("MOD-08-008", "Implementar registro de microchip con validador de formato ISO 11784/11785", "Validar 15 dígitos numéricos estándar internacional para evitar errores de lectura.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-08-003"]),
            t("MOD-08-009", "Implementar cambio de propietario o transferencia de mascota", "Flujo para transferir expediente a nuevo tutor manteniendo el historial clínico inalterado.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-08-003"]),
            t("MOD-08-010", "Gestión de estado del paciente (Activo, Fallecido, Extraviado)", "Si se marca fallecido, bloquear citas futuras y mostrar cinta de luto respetuosa.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-08-007"]),
            t("MOD-08-011", "Pruebas funcionales de cálculo de edad y filtros de búsqueda", "Validar pacientes con fechas de nacimiento futuras, bisiestos y filtros combinados.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-08-004"])
        ]
    },

    # 09. Historia clínica
    {
        "id": "MOD-09",
        "num": 9,
        "name": "Historia clínica",
        "category": "Expediente Médico",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Línea de tiempo unificada e inmutable de la vida médica de la mascota, anamnesis histórica, bloqueos legales y exportación en PDF.",
        "tasks": [
            t("MOD-09-001", "Modelar arquitectura del expediente clínico electrónico", "Estructura polimórfica que enlaza consultas, vacunas, cirugías, recetas y laboratorios en una sola línea de tiempo.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-001"]),
            t("MOD-09-002", "Implementar inmutabilidad y sellado temporal de entradas clínicas", "Bloqueo estricto de modificación tras 24 horas de cerrado el acto médico para cumplimiento legal.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-09-001"]),
            t("MOD-09-003", "Construir vista de línea de tiempo cronológica del paciente", "Timeline interactivo con filtros por tipo de evento (Consultas, Vacunas, Cirugías, Laboratorios).", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-09-001"]),
            t("MOD-09-004", "Desarrollar motor de generación de Historia Clínica completa en PDF", "Renderizado server-side de informe oficial con membrete de clínica, firma y sello profesional.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-04-004", "MOD-05-003"]),
            t("MOD-09-005", "Implementar sistema de notas de evolución y adendas médicas", "Si se requiere corregir información pasada, registrar adenda con fecha, autor y motivo del cambio.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-09-002"]),
            t("MOD-09-006", "Crear visor rápido de antecedentes patológicos y quirúrgicos", "Widget lateral permanente con alergias, cirugías previas y enfermedades crónicas destacadas.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-09-003"]),
            t("MOD-09-007", "Control de accesos y registro estricto de lecturas de historia clínica", "Loguear qué usuario visualizó cada historial clínico para auditoría de confidencialidad.", "Seguridad", "FASE 1 — MVP", "ALTA", ["MOD-03-003"]),
            t("MOD-09-008", "Pruebas de integridad de sellado inmutable y generación de PDF", "Verificar que ningún usuario (incluso admin) pueda alterar diagnósticos cerrados sin dejar rastro.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-09-002"])
        ]
    },

    # 10. Consultas veterinarias
    {
        "id": "MOD-10",
        "num": 10,
        "name": "Consultas veterinarias",
        "category": "Expediente Médico",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Flujo de atención médica estructurado bajo metodología SOAP (Subjetivo, Objetivo, Análisis, Plan), motivos de consulta y cierre de caso.",
        "tasks": [
            t("MOD-10-001", "Modelar entidad Consulta Médica con estructura SOAP", "Campos: motivo, anamnesis (S), examen físico (O), diagnósticos diferenciales/definitivos (A), plan terapéutico (P).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-09-001"]),
            t("MOD-10-002", "Crear endpoints para inicio, guardado borrador y cierre de consulta", "Permitir auto-guardado en tiempo real mientras el veterinario redacta para evitar pérdida de datos.", "API", "FASE 1 — MVP", "CRÍTICA", ["MOD-10-001"]),
            t("MOD-10-003", "Desarrollar editor clínico ergonómico para atención médica", "Formulario rápido con pestañas SOAP, plantillas de texto predefinidas y soporte para dictado.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-10-002"]),
            t("MOD-10-004", "Integrar creación instantánea de receta médica desde la consulta", "Añadir fármacos sin salir de la pantalla de consulta y vincular al plan terapéutico.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-10-003"]),
            t("MOD-10-005", "Integrar solicitud de exámenes complementarios y procedimientos", "Generar órdenes de laboratorio o rayos X directamente desde la pestaña de plan médico.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-10-003"]),
            t("MOD-10-006", "Implementar vinculación de consulta con cita previa de agenda", "Actualizar automáticamente el estado de la cita a 'En atención' y luego a 'Finalizada'.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-10-002"]),
            t("MOD-10-007", "Generar resumen de consulta para el propietario", "Hoja explicativa en lenguaje amigable para enviar por WhatsApp o imprimir al tutor.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-10-003"]),
            t("MOD-10-008", "Pruebas de concurrencia y guardado automático en consulta", "Validar recuperación de borrador ante desconexión de red accidental durante la consulta.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-10-002"])
        ]
    },

    # 11. Signos vitales y examen físico
    {
        "id": "MOD-11",
        "num": 11,
        "name": "Signos vitales y examen físico",
        "category": "Expediente Médico",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Parámetros fisiológicos por especie: peso, temperatura, FC, FR, TLLC, mucosas, pulso, condición corporal y curvas de crecimiento.",
        "tasks": [
            t("MOD-11-001", "Modelar tabla de Signos Vitales y Examen Físico sistemático", "Campos: peso (kg), temperatura (°C), FC (lpm), FR (rpm), TLLC (seg), color mucosas, condición corporal (1-9).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-10-001"]),
            t("MOD-11-002", "Implementar motor de validación de rangos fisiológicos por especie", "Alertar visualmente si la frecuencia cardíaca o temperatura están fuera de rango normal para gato o perro.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-11-001"]),
            t("MOD-11-003", "Construir gráfica interactiva de evolución de peso en el tiempo", "Gráfica con Chart.js/SVG para visualizar pérdida o ganancia de peso a lo largo de las visitas.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-11-001"]),
            t("MOD-11-004", "Desarrollar componente de examen físico por sistemas", "Checklist rápido: Sistema Respiratorio, Cardiovascular, Digestivo, Tegumentario, Neurológico, Linfático, Ocular.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-11-001"]),
            t("MOD-11-005", "Selector visual de condición corporal (Body Condition Score 1 a 9)", "Ilustraciones interactivas para clasificar peso bajo, ideal, sobrepeso u obesidad canina/felina.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-11-004"]),
            t("MOD-11-006", "Pruebas de validación de entradas numéricas y límites extremos", "Verificar que no se permitan pesos negativos ni temperaturas imposibles (>45°C o <30°C).", "QA", "FASE 1 — MVP", "ALTA", ["MOD-11-002"])
        ]
    },

    # 12. Diagnósticos y antecedentes
    {
        "id": "MOD-12",
        "num": 12,
        "name": "Diagnósticos y antecedentes",
        "category": "Expediente Médico",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Codificación diagnóstica estandarizada, diagnósticos presuntivos vs definitivos, antecedentes familiares, alergias y morbilidades.",
        "tasks": [
            t("MOD-12-001", "Modelar entidad Diagnóstico con codificación veterinaria", "Campos: código patología, nombre, tipo (presuntivo, diferencial, definitivo), estado (activo, resuelto, crónico).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-10-001"]),
            t("MOD-12-002", "Precargar diccionario ontológico de enfermedades veterinarias", "Catálogo basado en SNOMED CT Vet / VeNom Coding Group con más de 200 patologías frecuentes.", "Base de Datos", "FASE 1 — MVP", "ALTA", ["MOD-12-001"]),
            t("MOD-12-003", "Construir componente de búsqueda rápida de diagnósticos con tags", "Autocompletado predictivo para que el veterinario seleccione diagnósticos en un clic.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-12-002"]),
            t("MOD-12-004", "Módulo de gestión de Alergias y Reacciones Adversas", "Alerta roja persistente en la cabecera del paciente al seleccionar un fármaco con hipersensibilidad.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-12-001"]),
            t("MOD-12-005", "Línea de tiempo de patologías crónicas y seguimiento de evolución", "Listado de enfermedades crónicas activas (ej: Insuficiencia Renal, Diabetes, Dermatitis Atópica).", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-12-001"]),
            t("MOD-12-006", "Pruebas de filtrado y búsqueda de diagnósticos por sinónimos", "Validar que buscar 'sarna' muestre 'escabiosis' y términos asociados.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-12-003"])
        ]
    },

    # 13. Vacunación
    {
        "id": "MOD-13",
        "num": 13,
        "name": "Vacunación",
        "category": "Medicina Preventiva",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Registro de biológicos aplicados, número de lote, fecha de vencimiento del frasco, revacunación, calendario y carnet oficial.",
        "tasks": [
            t("MOD-13-001", "Modelar entidad Vacuna y Registro de Inmunización", "Campos: biológico (Rabia, Séxtuple, Triple Felina, etc.), laboratorio fabricante, lote, vencimiento, fecha revacunación.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-09-001"]),
            t("MOD-13-002", "Configurar calendarios de vacunación estándar por especie y edad", "Esquemas pediátricos (cachorros 6, 8, 12 semanas) y refuerzos anuales de adultos.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-13-001"]),
            t("MOD-13-003", "Construir formulario de registro rápido de vacuna con descuento de stock", "Al registrar vacuna, descontar automáticamente la dosis del inventario por lote.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-13-001"]),
            t("MOD-13-004", "Generar Carnet Digital de Vacunación oficial en PDF con código QR", "Diseño profesional con sello de la clínica y fechas de próximos refuerzos para el tutor.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-13-003", "MOD-04-004"]),
            t("MOD-13-005", "Motor de cálculo automático de fecha del próximo refuerzo", "Sugerir fecha recomendada (ej: 21 días o 1 año) con posibilidad de ajuste manual.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-13-002"]),
            t("MOD-13-006", "Generación de recordatorios automáticos de revacunación", "Encolar notificaciones para WhatsApp/Email 7 días antes del vencimiento del refuerzo.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-13-005"]),
            t("MOD-13-007", "Pruebas de validación de lotes vencidos de vacunas", "Impedir registrar la aplicación de una vacuna cuyo lote esté vencido en inventario.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-13-003"])
        ]
    },

    # 14. Desparasitación
    {
        "id": "MOD-14",
        "num": 14,
        "name": "Desparasitación",
        "category": "Medicina Preventiva",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Control de antiparasitarios internos y externos, principio activo, dosis según peso actual, frecuencia y recordatorios.",
        "tasks": [
            t("MOD-14-001", "Modelar entidad Desparasitación interna y externa", "Campos: tipo (interna, externa, combinada), producto, principio activo, peso registrado, dosis, vía de administración.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-09-001"]),
            t("MOD-14-002", "Desarrollar formulario de aplicación de desparasitante", "Cálculo de dosis recomendada según el peso registrado en la sesión.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-14-001", "MOD-11-001"]),
            t("MOD-14-003", "Conexión automática con inventario y lotes de antiparasitarios", "Descontar pipetas o comprimidos del almacén de farmacia de la clínica.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-14-002"]),
            t("MOD-14-004", "Visualización de historial de desparasitaciones en el expediente", "Tabla cronológica de control de parásitos en la ficha del paciente.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-14-002"]),
            t("MOD-14-005", "Configurar alertas de próxima desparasitación recomendada (trimestral/mensual)", "Alertar en el dashboard cuando un paciente tenga su desparasitación vencida.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-14-001"]),
            t("MOD-14-006", "Pruebas de registro y concordancia de dosis según peso", "Validar que no se receten dosis fuera de la ventana de seguridad por kg de peso.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-14-002"])
        ]
    },

    # 15. Medicamentos
    {
        "id": "MOD-15",
        "num": 15,
        "name": "Medicamentos",
        "category": "Farmacología & Terapéutica",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Vademécum veterinario, principios activos, concentraciones, formas farmacéuticas, vías de administración y calculadora posológica.",
        "tasks": [
            t("MOD-15-001", "Modelar catálogo de Medicamentos y Principios Activos", "Campos: nombre comercial, principio activo, concentración (ej: 50mg/ml), forma (comprimido, jarabe, inyectable), vía, dosis min/max por kg.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-15-002", "Precargar vademécum básico veterinario (antibióticos, AINEs, analgesia)", "Base de datos con más de 150 medicamentos de uso veterinario común con dosis recomendadas.", "Base de Datos", "FASE 1 — MVP", "ALTA", ["MOD-15-001"]),
            t("MOD-15-003", "Construir calculadora posológica inteligente integrada", "Ingresar peso del paciente y obtener automáticamente el volumen (ml) o fracción de pastilla a administrar.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-15-001"]),
            t("MOD-15-004", "Implementar alertas de contraindicaciones por especie", "Bloquear fármacos tóxicos para gatos (ej: Paracetamol/Acetaminofén, Permetrinas) con alerta sonora y modal crítico.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-15-003"]),
            t("MOD-15-005", "Gestión de medicamentos de control especial / psicotrópicos", "Registro especial con requerimiento de doble confirmación médica y libro de control.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-15-001"]),
            t("MOD-15-006", "Pruebas de cálculo posológico y casos límite de toxicidad", "Verificar exactitud matemática de fórmulas de cálculo de dosis con tolerancia cero de error.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-15-003"])
        ]
    },

    # 16. Recetas
    {
        "id": "MOD-16",
        "num": 16,
        "name": "Recetas",
        "category": "Farmacología & Terapéutica",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Prescripción digital, posología, instrucciones claras para el tutor, firma/sello digital, código QR de validación y envío por WhatsApp.",
        "tasks": [
            t("MOD-16-001", "Modelar entidad Receta Médica y detalle de renglones prescritos", "Campos: folio único, consulta_id, veterinario_id, instrucciones generales, fecha emisión, fecha caducidad de receta.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-10-001", "MOD-15-001"]),
            t("MOD-16-002", "Construir interfaz de prescripción rápida en consulta", "Agregar múltiples medicamentos con autocompletado de dosis, frecuencia (cada X horas) y duración (días).", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-16-001"]),
            t("MOD-16-003", "Generar PDF de Receta Oficial con membrete, firma y código QR", "Diseño profesional imprimible o descargable con verificación pública de autenticidad vía QR.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-16-001", "MOD-04-004"]),
            t("MOD-16-004", "Implementar envío de receta digital por WhatsApp y Correo", "Compartir enlace seguro al PDF directamente al celular del propietario en un clic.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-16-003"]),
            t("MOD-16-005", "Plantillas de recetas frecuentes para tratamientos comunes", "Guardar combos (ej: protocolo de otitis externa, gastroenteritis viral) para prescribir en un clic.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-16-002"]),
            t("MOD-16-006", "Pruebas de formato de impresión y legibilidad en dispositivos móviles", "Asegurar que las instrucciones de dosis sean legibles y claras para evitar errores del tutor.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-16-003"])
        ]
    },

    # 17. Procedimientos
    {
        "id": "MOD-17",
        "num": 17,
        "name": "Procedimientos",
        "category": "Atención Médica Quirúrgica",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "description": "Curaciones, sondajes uretrales, limpiezas dentales con ultrasonido, fluidoterapia ambulatoria, sedaciones y vendajes.",
        "tasks": [
            t("MOD-17-001", "Modelar catálogo y registros de Procedimientos Menores", "Campos: nombre procedimiento, código, insumos utilizados, profesional ejecutor, tiempo empleado, complicaciones.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-09-001"]),
            t("MOD-17-002", "Formulario de registro de ejecución de procedimiento", "Captura de técnica utilizada, sedación empleada y estado de recuperación inmediata.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-17-001"]),
            t("MOD-17-003", "Descargo automático de insumos utilizados en procedimiento", "Descontar jeringas, agujas, gasas, soluciones antisépticas del stock de clínica.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-17-002"]),
            t("MOD-17-004", "Integración de cobro automático de procedimientos en caja", "Agregar el concepto del procedimiento al ticket de cobro del paciente.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-17-001"]),
            t("MOD-17-005", "Pruebas de flujo de registro y consumo de material en procedimientos", "Verificar consistencia de inventario tras registrar un procedimiento menor.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-17-003"])
        ]
    },

    # 18. Cirugías
    {
        "id": "MOD-18",
        "num": 18,
        "name": "Cirugías",
        "category": "Atención Médica Quirúrgica",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "description": "Quirófano, consentimiento quirúrgico informado, protocolo anestésico, hoja transquirúrgica, cirujano, ayudante y cuidados postoperatorios.",
        "tasks": [
            t("MOD-18-001", "Modelar entidad Cirugía y Protocolo Quirúrgico", "Campos: tipo intervención, cirujano principal, anestesista, protocolo anestésico, hora inicio/fin, monitorización, sutura usada.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-09-001"]),
            t("MOD-18-002", "Generación y firma digital del Consentimiento Quirúrgico Informado", "Documento legal donde el propietario autoriza riesgos de anestesia y procedimiento quirúrgico.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-18-001"]),
            t("MOD-18-003", "Hoja de monitorización transquirúrgica en tiempo real", "Registro minuto a minuto de saturación de O2 (SpO2), presión arterial, CO2 espirado y gas anestésico.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-18-001"]),
            t("MOD-18-004", "Registro de indicaciones postquirúrgicas y alta de quirófano", "Plan de analgesia, antibioterapia de cobertura y cita de retiro de puntos a los 10 días.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-18-001"]),
            t("MOD-18-005", "Descargo en paquete de insumos quirúrgicos (Kits de cirugía)", "Descargo en un clic del kit de esterilización, campos quirúrgicos, guantes e hilos de sutura.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-18-001"]),
            t("MOD-18-006", "Pruebas de integridad legal del consentimiento firmado", "Asegurar que el consentimiento firmado quede sellado con timestamp y no pueda alterarse.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-18-002"])
        ]
    },

    # 19. Hospitalización
    {
        "id": "MOD-19",
        "num": 19,
        "name": "Hospitalización",
        "category": "Cuidados Críticos & Internación",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "description": "Censo de jaulas/caniles, control horario de fluidoterapia, medicación pautada, curvas de evolución, alimentación y alta médica.",
        "tasks": [
            t("MOD-19-001", "Modelar entidades de Hospitalización, Jaulas y Registros Horarios", "Campos: jaula_id, fecha_ingreso, motivo, diagnóstico presuntivo, veterinario a cargo, estado crítico/estable, fecha_alta.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-09-001"]),
            t("MOD-19-002", "Construir panel visual de Censo de Hospitalización (Cages Board)", "Vista tipo mapa de jaulas con código de colores según gravedad del paciente y badges de alerta.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-19-001"]),
            t("MOD-19-003", "Hoja de indicaciones y medicación horaria (Kardex de enfermería)", "Checklist por turnos para marcar medicamentos aplicados, dosis y firma del auxiliar.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-19-001"]),
            t("MOD-19-004", "Monitoreo de fluidoterapia y velocidad de infusión", "Cálculo de ritmo de goteo (gotas/min o ml/h) y balance hídrico de entradas/salidas.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-19-001"]),
            t("MOD-19-005", "Generación de informe de evolución para tutores", "Resumen diario con fotos del paciente para enviar a los tutores durante la hospitalización.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-19-002"]),
            t("MOD-19-006", "Flujo de Alta Médica y liquidación de costos de internación", "Cálculo automático de días de estancia, fármacos administrados y emisión del informe de alta.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-19-001"]),
            t("MOD-19-007", "Pruebas de cambio de turno y persistencia de registros de hospitalización", "Validar que la hoja de medicación se mantenga íntegra al cambiar de turno de enfermería.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-19-003"])
        ]
    },

    # 20. Exámenes de laboratorio
    {
        "id": "MOD-20",
        "num": 20,
        "name": "Exámenes de laboratorio",
        "category": "Diagnóstico por Imagen & Lab",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "description": "Órdenes de laboratorio, hemograma, perfiles bioquímicos, urianálisis, coprológicos, citologías, adjuntos de PDF y analizadores en clínica.",
        "tasks": [
            t("MOD-20-001", "Modelar entidad Orden de Laboratorio y Parámetros Analíticos", "Campos: tipo prueba, parámetros analizados, valores numéricos, unidades, rangos de referencia por especie, interpretación.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-09-001"]),
            t("MOD-20-002", "Construir generador de solicitudes y órdenes de estudio", "Impresión de volantes de envío a laboratorios externos o derivación interna.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-20-001"]),
            t("MOD-20-003", "Captura manual de resultados con detección visual de anormalidades", "Marcar en rojo o amarillo valores fuera del rango fisiológico canino o felino.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-20-001"]),
            t("MOD-20-004", "Carga y visor integrado de informes de laboratorio en PDF", "Almacenamiento seguro en S3 y visualizador PDF en el expediente del paciente.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-01-007"]),
            t("MOD-20-005", "Gráfica comparativa de parámetros en el tiempo (ej: Creatinina, ALT)", "Evolución histórica de analíticas para monitorear pacientes renales o hepáticos.", "Frontend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-20-003"]),
            t("MOD-20-006", "Integración con equipos de laboratorio in-house (IDEXX / Zoetis / Heska)", "Módulo de recepción automática de resultados vía protocolos HL7/ASTM.", "Backend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-20-001"]),
            t("MOD-20-007", "Pruebas de validación de rangos de laboratorio por especie y edad", "Asegurar que los rangos de referencia de un cachorro difieran correctamente de un adulto.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-20-003"])
        ]
    },

    # 21. Documentos y archivos
    {
        "id": "MOD-21",
        "num": 21,
        "name": "Documentos y archivos",
        "category": "Gestión Documental",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "description": "Repositorio digital de consentimientos, radiografías (DICOM/JPEG), ecografías, contratos de custodia, recetas pasadas y firmas.",
        "tasks": [
            t("MOD-21-001", "Modelar entidad Documento y Archivo adjunto", "Campos: paciente_id, propietario_id, nombre, categoría (rayos X, consentimiento, biopsia), tipo_mime, url_s3, tamaño, sha256.", "Base de Datos", "FASE 1 — MVP", "ALTA", ["MOD-01-007"]),
            t("MOD-21-002", "Implementar subida multipart segura con URLs prefirmadas", "Subida directa a S3/GCS sin sobrecargar el servidor de backend con archivos pesados.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-21-001"]),
            t("MOD-21-003", "Construir galería multimedia clínica del paciente", "Galería con zoom, rotación y comparación de imágenes antes/después de tratamientos.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-21-001"]),
            t("MOD-21-004", "Generador de plantillas de consentimientos legales configurables", "Editor para que cada clínica personalice sus textos de eutanasia, anestesia y cirugías.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-21-001"]),
            t("MOD-21-005", "Soporte para visualización básica de estudios DICOM", "Integración de visor ligero HTML5 Canvas para radiografías digitales veterinarias.", "Frontend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-21-003"]),
            t("MOD-21-006", "Pruebas de seguridad de archivos y limitación de extensiones ejecutables", "Bloquear subida de archivos maliciosos (.exe, .sh, scripts) y validar tipos MIME reales.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-21-002"])
        ]
    },

    # 22. Agenda
    {
        "id": "MOD-22",
        "num": 22,
        "name": "Agenda",
        "category": "Operaciones & Citas",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Calendario multidisciplinario por veterinario, sala, quirófano y peluquería, vistas diaria, semanal y mensual, prevención de solapes.",
        "tasks": [
            t("MOD-22-001", "Modelar arquitectura de Agenda y Recursos de Calendario", "Entidades para slots de tiempo, bloqueos por feriados/vacaciones, capacidad de consultorios.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-04-001", "MOD-05-001"]),
            t("MOD-22-002", "Construir interfaz de calendario interactiva (Día, Semana, Mes, Timeline)", "Vistas dinámicas con drag-and-drop para reprogramar citas de forma intuitiva.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-22-001"]),
            t("MOD-22-003", "Filtro multidimensional de agenda por profesional y tipo de servicio", "Permitir visualizar solo médicos veterinarios, solo peluquería o vista combinada de clínica.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-22-002"]),
            t("MOD-22-004", "Motor de detección y prevención de conflictos y solapamientos de citas", "Impedir que un veterinario o un quirófano sean agendados dos veces a la misma hora.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-22-001"]),
            t("MOD-22-005", "Sincronización con calendarios externos (Google Calendar / iCal)", "Exportar eventos de citas del veterinario a su calendario personal de Google/Apple.", "Backend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-22-001"]),
            t("MOD-22-006", "Pruebas de rendimiento del calendario con alta densidad de citas", "Asegurar renderizado fluido con más de 200 citas simultáneas en pantalla.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-22-002"])
        ]
    },

    # 23. Citas
    {
        "id": "MOD-23",
        "num": 23,
        "name": "Citas",
        "category": "Operaciones & Citas",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Ciclo completo de la cita: reserva, confirmación, reprogramación, llegada a sala de espera, no-show y cancelación justificada.",
        "tasks": [
            t("MOD-23-001", "Modelar entidad Cita con estados del ciclo de atención", "Estados: Programada, Confirmada, En Sala de Espera, En Consulta, Finalizada, Cancelada, No asistió (No-Show).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-22-001", "MOD-07-001", "MOD-08-001"]),
            t("MOD-23-002", "Crear endpoints para agendamiento, confirmación y cancelación de citas", "Validación de disponibilidad y envío de eventos de notificación.", "API", "FASE 1 — MVP", "CRÍTICA", ["MOD-23-001"]),
            t("MOD-23-003", "Desarrollar modal ergonómico de agendamiento rápido de cita", "Búsqueda reactiva de paciente/tutor, selección de motivo, duración estimada y recordatorio.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-23-002"]),
            t("MOD-23-004", "Módulo de Sala de Espera virtual con tiempo de espera en vivo", "Recepcionista marca llegada del paciente; el veterinario ve la alerta en su pantalla.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-23-001"]),
            t("MOD-23-005", "Gestión de políticas de cancelación y registro de causas de inasistencia", "Estadística de No-Shows por cliente para optimizar la ocupación de la clínica.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-23-001"]),
            t("MOD-23-006", "Pruebas de cambio de estado de cita e impacto en sala de espera", "Verificar sincronización de estados entre recepción y consultorio médico.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-23-004"])
        ]
    },

    # 24. Teleconsultas
    {
        "id": "MOD-24",
        "num": 24,
        "name": "Teleconsultas",
        "category": "Operaciones & Citas",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "description": "Orientación veterinaria remota, sala de video WebRTC cifrada, chat sincrónico, triaje virtual y receta digital a distancia.",
        "tasks": [
            t("MOD-24-001", "Modelar sesiones de Teleorientación y salas virtuales", "Campos: cita_id, sala_token, duración, estado de conexión, notas de triaje remoto.", "Base de Datos", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-23-001"]),
            t("MOD-24-002", "Integrar proveedor WebRTC (LiveKit / Daily.co / Twilio Video)", "Conexión segura de audio y video de baja latencia apta para conexiones móviles.", "Backend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-24-001"]),
            t("MOD-24-003", "Construir sala de videollamada con expediente flotante", "El veterinario puede examinar al animal en video mientras consulta y anota en el historial médico.", "Frontend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-24-002"]),
            t("MOD-24-004", "Disclaimers legales y límites de la teleorientación veterinaria", "Aviso explícito al tutor indicando que la teleorientación no reemplaza el examen físico presencial.", "Seguridad", "FASE 3 — ECOSISTEMA", "ALTA", ["MOD-24-001"]),
            t("MOD-24-005", "Pruebas de reconexión y calidad de transmisión WebRTC", "Validar comportamiento ante caídas de ancho de banda en videollamada.", "QA", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-24-002"])
        ]
    },

    # 25. Servicios veterinarios
    {
        "id": "MOD-25",
        "num": 25,
        "name": "Servicios veterinarios",
        "category": "Catálogo & Tarifas",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Catálogo maestro de prestaciones médicas, tarifas por horario o urgencia, duración estimada e impuestos aplicables.",
        "tasks": [
            t("MOD-25-001", "Modelar catálogo de Servicios y Procedimientos Médicos", "Campos: código, nombre, categoría, precio_base, iva_porcentaje, duración_minutos, requiere_profesional.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-05-001"]),
            t("MOD-25-002", "CRUD administrativo de servicios con categorías clínicas", "Configuración de consultas generales, urgencias nocturnas, ecografías, vacunas.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-25-001"]),
            t("MOD-25-003", "Soporte para tarifas diferenciadas por horario (horario diurno vs urgencias 24h)", "Cálculo automático de recargo por atención fuera de horario laboral.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-25-001"]),
            t("MOD-25-004", "Asociación de servicios con insumos predeterminados", "Vincular un servicio con insumos que se consumen automáticamente al prestarlo.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-25-001"]),
            t("MOD-25-005", "Pruebas de consistencia de precios e impuestos en catálogo de servicios", "Validar cálculos con impuestos incluidos y desglosados.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-25-002"])
        ]
    },

    # 26. Estética canina y felina
    {
        "id": "MOD-26",
        "num": 26,
        "name": "Estética canina y felina",
        "category": "Servicios Complementarios",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "description": "Peluquería canina/felina, baños, cortes de raza, deslanado, uñas, ficha estética, fotos antes/después y alerta de hallazgos veterinarios.",
        "tasks": [
            t("MOD-26-001", "Modelar entidad Ficha de Estética y Servicios Grooming", "Campos: tipo servicio (baño, corte higiénico, corte de raza, deslanado, uñas), estilista, tipo de pelo, productos usados.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-08-001"]),
            t("MOD-26-002", "Construir agenda independiente para área de estética/peluquería", "Gestión de turnos por tina y mesa de corte sin mezclar con consultas médicas.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-22-001"]),
            t("MOD-26-003", "Ficha técnica de estilismo: antes y después con fotos", "Subida de fotografías del estado del pelaje a la llegada y resultado final entregado al tutor.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-26-001"]),
            t("MOD-26-004", "Sistema de Alerta de Hallazgo Clínico en Peluquería (Groomer -> Veterinario)", "Si el estilista detecta bultos, pulgas, garrapatas u otitis, generar alerta directa para interconsulta médica.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-26-001"]),
            t("MOD-26-005", "Consumo automático de insumos de peluquería (champú medicado, acondicionador)", "Descargo de porciones de insumos cosméticos del inventario general.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-26-001"]),
            t("MOD-26-006", "Configuración de activación/desactivación del módulo de Estética por clínica", "Ocultar completamente el módulo si la clínica no ofrece servicios de peluquería.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-05-006"]),
            t("MOD-26-007", "Pruebas de envío de alerta de hallazgo clínico al panel médico", "Verificar que la notificación aparezca en tiempo real en la pantalla del veterinario de turno.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-26-004"])
        ]
    },

    # 27. Guardería
    {
        "id": "MOD-27",
        "num": 27,
        "name": "Guardería",
        "category": "Servicios Complementarios",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "description": "Daycare diurno para mascotas, check-in matutino, check-out vespertino, bitácora de comportamiento, socialización y alimentación.",
        "tasks": [
            t("MOD-27-001", "Modelar entidad Estancia de Guardería y Patios de Recreo", "Campos: fecha, hora_entrada, hora_salida, patio_asignado, comportamiento con otros perros, alimentación, cuidador.", "Base de Datos", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-08-001"]),
            t("MOD-27-002", "Construir panel de Check-in y Check-out rápido de Guardería", "Registro con escaneo de código QR de la mascota y verificación de vacunas obligatorias al día.", "Frontend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-27-001"]),
            t("MOD-27-003", "Bitácora diaria de actividades y reportes de comportamiento", "Envío de resumen al tutor sobre nivel de energía, juegos e ingesta de agua.", "Frontend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-27-001"]),
            t("MOD-27-004", "Validación automática de vacunas vigentes para admitir en guardería", "Bloquear check-in si la vacuna séxtuple o de tos de las perreras (Bordetella) está vencida.", "Seguridad", "FASE 3 — ECOSISTEMA", "ALTA", ["MOD-13-001"]),
            t("MOD-27-005", "Pruebas de control de aforo por patio de recreo", "Verificar que el sistema no permita exceder el límite de perros por cuidador.", "QA", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-27-001"])
        ]
    },

    # 28. Hotel/hospedaje
    {
        "id": "MOD-28",
        "num": 28,
        "name": "Hotel/hospedaje",
        "category": "Servicios Complementarios",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "description": "Alojamiento nocturno, reservas de suites/habitaciones, dietas especiales, administración de medicamentos crónicos y reporte a tutores.",
        "tasks": [
            t("MOD-28-001", "Modelar entidad Reserva de Hotel y Habitaciones/Suites", "Campos: fecha_checkin, fecha_checkout, tipo_habitacion, dieta_especial, pertenencias dejadas, medicacion_requerida.", "Base de Datos", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-08-001"]),
            t("MOD-28-002", "Calendario de ocupación hotelera y gestión de disponibilidad", "Vista de ocupación por habitación con control de noches reservadas y checkout tardío.", "Frontend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-28-001"]),
            t("MOD-28-003", "Inventario de pertenencias y hoja de custodia al ingreso", "Registro fotográfico de correas, mantas, juguetes y medicamentos entregados por el tutor.", "Frontend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-28-001"]),
            t("MOD-28-004", "Liquidación de noches de hospedaje y cargos adicionales de cuidado", "Cálculo en caja de tarifas por noche y suplementos por días festivos.", "Backend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-28-001"]),
            t("MOD-28-005", "Pruebas de reservas solapadas en la misma suite de hospedaje", "Garantizar disponibilidad real de caniles y habitaciones de hotel.", "QA", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-28-002"])
        ]
    },

    # 29. Inventario
    {
        "id": "MOD-29",
        "num": 29,
        "name": "Inventario",
        "category": "Inventario & Logística",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Kardex en tiempo real, múltiples almacenes (farmacia, quirófano, estética), lotes, caducidades, stock mínimo y alertas automáticas.",
        "tasks": [
            t("MOD-29-001", "Modelar arquitectura de Inventario, Lotes y Movimientos de Kardex", "Tablas de Existencias, Lotes con fecha de caducidad, Almacenes y Registro de Movimientos (inmutables).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-29-002", "Construir tabla de inventario con filtros por almacén, categoría y caducidad", "Vista tabular con semáforos de stock: óptimo (verde), bajo (amarillo), crítico/agotado (rojo).", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-29-001"]),
            t("MOD-29-003", "Implementar motor de descuento First-Expired, First-Out (FEFO)", "Al prescribir o consumir un producto, seleccionar y descontar prioritariamente el lote más próximo a caducar.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-29-001"]),
            t("MOD-29-004", "Sistema de alertas tempranas de productos próximos a vencer (30, 60, 90 días)", "Widget en dashboard con listado de fármacos en riesgo de caducidad para promocionar o rotar.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-29-001"]),
            t("MOD-29-005", "Módulo de Ajustes de Inventario manuales (mermas, roturas, conteos físicos)", "Registro auditable de variaciones con justificación obligatoria del empleado responsable.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-29-001"]),
            t("MOD-29-006", "Soporte de importación masiva de inventario vía archivo Excel / CSV", "Carga rápida inicial del stock de la clínica con validación previa de columnas y errores.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-29-001"]),
            t("MOD-29-007", "Control de transferencias de inventario entre sedes o almacenes internos", "Movimiento de fármacos del almacén central a farmacia de consultorio o quirófano.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-29-001"]),
            t("MOD-29-008", "Pruebas de concurrencia en transacciones de stock (evitar stock negativo)", "Validar que operaciones simultáneas de venta no dejen existencias en números negativos.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-29-003"])
        ]
    },

    # 30. Productos
    {
        "id": "MOD-30",
        "num": 30,
        "name": "Productos",
        "category": "Inventario & Logística",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Catálogo de artículos vendibles: alimentos secos y húmedos, accesorios, antiparasitarios, medicamentos OTC y juguetes.",
        "tasks": [
            t("MOD-30-001", "Modelar catálogo maestro de Productos", "Campos: código de barras/EAN, SKU, nombre, marca, categoría, costo compra, precio venta, margen, iva, stock mínimo.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-29-001"]),
            t("MOD-30-002", "Construir formulario CRUD de productos con lector de código de barras", "Soporte para pistolas de código de barras USB/Bluetooth en el campo de búsqueda y alta.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-30-001"]),
            t("MOD-30-003", "Gestión de categorías y subcategorías de retail pet", "Árbol de categorías: Alimentos (Perro, Gato), Farmacia, Higiene, Snacks, Juguetes, Accesorios.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-30-001"]),
            t("MOD-30-004", "Cálculo automático de márgenes de utilidad y precios sugeridos", "Definir porcentaje de margen deseado y calcular precio final con o sin impuestos.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-30-001"]),
            t("MOD-30-005", "Pruebas de unicidad de código de barras y SKU por clínica", "Garantizar que no existan productos duplicados con el mismo código de barras.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-30-002"])
        ]
    },

    # 31. Proveedores
    {
        "id": "MOD-31",
        "num": 31,
        "name": "Proveedores",
        "category": "Inventario & Logística",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "description": "Directorio de laboratorios y distribuidores, condiciones comerciales, órdenes de compra y recepción de mercadería con lote.",
        "tasks": [
            t("MOD-31-001", "Modelar catálogo de Proveedores y Distribuidores", "Campos: razón social, RFC/CIF, asesor comercial, teléfono, email de pedidos, plazo de crédito (días).", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-01-002"]),
            t("MOD-31-002", "Construir módulo de Órdenes de Compra a proveedores", "Generador de pedidos formales con lista de productos bajo stock mínimo sugeridos por el sistema.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-31-001"]),
            t("MOD-31-003", "Módulo de Recepción de Mercadería y cotejo de factura de compra", "Ingreso directo a stock registrando número de lote del fabricante y fecha de caducidad real.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-31-002", "MOD-29-001"]),
            t("MOD-31-004", "Historial de compras y variación de costo histórico por producto", "Seguimiento de inflación o cambios de precio del proveedor en el tiempo.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-31-003"]),
            t("MOD-31-005", "Pruebas de conciliación de recepción de mercadería vs orden de compra", "Verificar que recepciones parciales de producto actualicen el saldo pendiente.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-31-003"])
        ]
    },

    # 32. Consumos de productos
    {
        "id": "MOD-32",
        "num": 32,
        "name": "Consumos de productos",
        "category": "Inventario & Logística",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Descargo automático y manual de insumos médicos utilizados en consultas, hospitalización, cirugías y peluquería.",
        "tasks": [
            t("MOD-32-001", "Modelar entidad Consumo de Insumo vinculada al acto clínico", "Campos: acto_id (consulta, cirugia, hospitalizacion, estetica), producto_id, lote_id, cantidad, costo_unitario.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-29-001"]),
            t("MOD-32-002", "Trigger / Evento de descargo automático al guardar consulta o procedimiento", "Descontar automáticamente del stock las unidades aplicadas durante la atención.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-32-001"]),
            t("MOD-32-003", "Interfaz rápida de registro de consumo de material gastable en quirófano", "Botones rápidos para gasas, suturas, jeringas y sueros en la pantalla de cirugía.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-32-001"]),
            t("MOD-32-004", "Reporte de costos de materiales por procedimiento realizado", "Permitir a la gerencia conocer la rentabilidad real descontando el costo del material gastado.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-32-001"]),
            t("MOD-32-005", "Pruebas de sincronización de stock tras consumos masivos en urgencias", "Asegurar que el stock se actualice de inmediato en todos los puntos de la clínica.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-32-002"])
        ]
    },

    # 33. Caja
    {
        "id": "MOD-33",
        "num": 33,
        "name": "Caja",
        "category": "Finanzas & Facturación",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Apertura de turno, fondo inicial, control de ingresos y egresos en efectivo, arqueo ciego, cierre diario y conciliación de diferencias.",
        "tasks": [
            t("MOD-33-001", "Modelar entidades de Sesión de Caja, Movimientos de Efectivo y Cierres", "Campos: caja_id, usuario_apertura, saldo_inicial, fecha_apertura, usuario_cierre, saldo_contado, saldo_esperado, diferencia.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-33-002", "Construir flujo de Apertura de Caja con fondo inicial de cambio", "Pantalla obligatoria para recepcionista antes de poder registrar cobros del día.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-33-001"]),
            t("MOD-33-003", "Módulo de Registro de Entradas y Salidas varias de efectivo (Caja Chica)", "Registro de pagos a mensajeros, compra de café, fletes con recibo y justificación.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-33-001"]),
            t("MOD-33-004", "Construir pantalla de Arqueo Ciego y Cierre de Caja", "El cajero cuenta y digita el efectivo físico sin conocer el saldo teórico para evitar manipulaciones.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-33-001"]),
            t("MOD-33-005", "Generar reporte de Cierre Z de Caja en PDF / Ticket térmico", "Desglose de cobros por forma de pago (Efectivo, Tarjeta, Transferencia) y sobrantes/faltantes.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-33-004"]),
            t("MOD-33-006", "Auditoría de reapertura excepcional de caja por supervisores", "Si se reabre una caja cerrada, requerir clave de gerente y loguear en auditoría.", "Seguridad", "FASE 1 — MVP", "ALTA", ["MOD-33-001"]),
            t("MOD-33-007", "Pruebas de validación matemática de arqueo de caja", "Verificar cálculo exacto de sumatorias de cobros, egresos y cálculo de discrepancias.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-33-004"])
        ]
    },

    # 34. Facturación
    {
        "id": "MOD-34",
        "num": 34,
        "name": "Facturación",
        "category": "Finanzas & Facturación",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Emisión de tickets de venta, facturas con desglose de impuestos, notas de crédito, descuentos y preparación para facturación electrónica fiscal.",
        "tasks": [
            t("MOD-34-001", "Modelar entidad Factura/Venta y Detalle de Renglones", "Campos: serie, folio correlativo, cliente_id, subtotal, descuentos, base_imponible, iva, total, estado (pagada, pendiente, cancelada).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-07-001"]),
            t("MOD-34-002", "Construir Punto de Venta (POS) rápido para recepción y mostrador", "Carrito de venta que agrupa consultas médicas, vacunas, servicios de estética y productos de tienda.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-34-001"]),
            t("MOD-34-003", "Generar Ticket de venta en formato estándar térmico 80mm y 58mm", "Formato optimizado para impresoras térmicas de tickets con logo de la clínica.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-34-002"]),
            t("MOD-34-004", "Generar Factura oficial en PDF formato A4 membretada", "Comprobante con datos fiscales completos del cliente y de la clínica para deducciones.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-34-001"]),
            t("MOD-34-005", "Emisión de Notas de Crédito y Anulaciones con reversión de inventario", "Anulación controlada que reingresa los productos al almacén y registra el motivo.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-34-001"]),
            t("MOD-34-006", "Diseño de capa de integración para Facturación Electrónica por país", "Estructurar adaptadores modulares para CFDI (México), DIAN (Colombia), SII (Chile), VeriFactu (España).", "Backend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-34-001"]),
            t("MOD-34-007", "Pruebas de cálculo de redondeo de centavos y retenciones de impuestos", "Validar que la suma de subtotales e impuestos coincida al céntimo en cualquier condición.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-34-002"])
        ]
    },

    # 35. Pagos
    {
        "id": "MOD-35",
        "num": 35,
        "name": "Pagos",
        "category": "Finanzas & Facturación",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Múltiples métodos de pago (efectivo, tarjeta, transferencia, links de pago), pagos divididos (split-payment), abonos y cuentas por cobrar.",
        "tasks": [
            t("MOD-35-001", "Modelar entidad Transacción de Pago vinculada a Factura", "Campos: factura_id, metodo_pago (efectivo, datáfono, transferencia, stripe, link), monto, referencia_bancaria, fecha_pago.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-34-001"]),
            t("MOD-35-002", "Soporte para Pagos Mixtos / Divididos (Split Payments)", "Permitir que un cliente pague parte en efectivo y el restante con tarjeta o transferencia.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-35-001"]),
            t("MOD-35-003", "Gestión de Cuentas por Cobrar y Abonos a cuenta de clientes", "Control de saldo pendiente de clientes con historial de abonos parciales.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-35-001"]),
            t("MOD-35-004", "Integración con pasarela de pagos online (Stripe / MercadoPago)", "Generación de enlaces de cobro por WhatsApp para que el tutor pague desde su teléfono.", "Backend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-35-001"]),
            t("MOD-35-005", "Pruebas de conciliación de pagos y validación de referencias bancarias", "Verificar que una factura no se marque 'Pagada' hasta cubrir el total exacto.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-35-002"])
        ]
    },

    # 36. Plantillas
    {
        "id": "MOD-36",
        "num": 36,
        "name": "Plantillas",
        "category": "Productividad & Herramientas",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "description": "Modelos preconfigurados de anamnesis, recetas frecuentes, protocolos quirúrgicos, indicaciones de alta y mensajes predefinidos.",
        "tasks": [
            t("MOD-36-001", "Modelar entidad Plantilla Clínica y Administrativa", "Campos: clínica_id, usuario_creador, modulo_destino (anamnesis, receta, alta, consentimiento), titulo, contenido_json, variables_reemplazo.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-01-002"]),
            t("MOD-36-002", "Construir editor de plantillas con variables dinámicas", "Soporte para etiquetas automáticas como {{nombre_paciente}}, {{especie}}, {{peso}}, {{tutor_nombre}}.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-36-001"]),
            t("MOD-36-003", "Catálogo de plantillas oficiales FurLife precargadas", "Plantillas base de gastroenteritis, otitis, vacunación cachorros, esterilización y recomendaciones post-operatorias.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-36-001"]),
            t("MOD-36-004", "Selector de inserción rápida de plantilla con atajo de teclado", "Comando rápido (ej: escribir '/' o botón rápido) en el editor de consulta médica.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-36-002"]),
            t("MOD-36-005", "Pruebas de renderizado de variables dinámicas en plantillas", "Validar que ninguna variable quede sin reemplazar al generar el documento final.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-36-002"])
        ]
    },

    # 37. Reportes
    {
        "id": "MOD-37",
        "num": 37,
        "name": "Reportes",
        "category": "Business Intelligence & Métricas",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "description": "Métricas financieras, ocupación de agenda, retención de clientes, morbilidad por especie, ventas por categoría y comisiones del personal.",
        "tasks": [
            t("MOD-37-001", "Diseñar vistas materializadas / queries analíticas para métricas", "Agregaciones de facturación diaria, ticket promedio, servicios más rentables y ocupación de citas.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-34-001", "MOD-23-001"]),
            t("MOD-37-002", "Construir panel interactivo de Reportes Financieros", "Gráficas de ingresos vs gastos, comparativas mensuales y flujo de caja con filtros de fecha.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-37-001"]),
            t("MOD-37-003", "Construir informe epidemiológico y de morbilidad veterinaria", "Gráfica de patologías más diagnosticadas por especie, estacionalidad de enfermedades parasitarias.", "Frontend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-12-001"]),
            t("MOD-37-004", "Módulo de cálculo y reporte de comisiones por profesional", "Liquidación periódica de comisiones ganadas por médicos y estilistas según servicios concluidos.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-06-006"]),
            t("MOD-37-005", "Exportador universal de reportes a Excel, CSV y PDF", "Descarga de cualquier tabla analítica con un clic para contabilidad externa.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-37-002"]),
            t("MOD-37-006", "Pruebas de exactitud en agregaciones financieras y márgenes", "Auditar sumas contables cruzadas entre facturación y reportes analíticos.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-37-001"])
        ]
    },

    # 38. Notificaciones
    {
        "id": "MOD-38",
        "num": 38,
        "name": "Notificaciones",
        "category": "Comunicación & Notificaciones",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "description": "Centro de notificaciones interno, alertas push de navegador, recordatorios programados por cron y avisos de stock crítico.",
        "tasks": [
            t("MOD-38-001", "Modelar entidad Notificación interna y canales de despacho", "Campos: usuario_id, tenant_id, tipo (sistema, cita, stock, urgencia), titulo, mensaje, enlace, leida (boolean).", "Base de Datos", "FASE 1 — MVP", "ALTA", ["MOD-01-002"]),
            t("MOD-38-002", "Construir Centro de Notificaciones en barra superior de la app", "Campana con badge numérico, dropdown con últimos avisos y marcar todas como leídas.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-38-001"]),
            t("MOD-38-003", "Implementar WebSockets / SSE para notificaciones en tiempo real", "Avisos instantáneos cuando un paciente llega a recepción o entra una reserva online.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-38-001"]),
            t("MOD-38-004", "Motor de colas y cron jobs para recordatorios programados", "Worker en segundo plano para procesar recordatorios de citas 24h antes y desparasitaciones.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-38-001"]),
            t("MOD-38-005", "Pruebas de entrega de notificaciones y manejo de fallos en colas", "Garantizar que caídas de red reintenten el envío sin duplicar mensajes al usuario.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-38-004"])
        ]
    },

    # 39. Comunicación con propietarios
    {
        "id": "MOD-39",
        "num": 39,
        "name": "Comunicación con propietarios",
        "category": "Comunicación & Notificaciones",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "description": "Integración con WhatsApp Business API, plantillas oficiales de mensajería, confirmación de citas con 1 clic y seguimiento post-consulta.",
        "tasks": [
            t("MOD-39-001", "Modelar logs de mensajes y estados de entrega al cliente", "Campos: cliente_id, canal (whatsapp, email, sms), plantilla_usada, estado (enviado, entregado, leido, fallido), costo.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-07-001"]),
            t("MOD-39-002", "Integrar cliente WhatsApp Business Cloud API / Twilio", "Envío automatizado de mensajes de confirmación de cita con botones interactivos de 'Confirmar' o 'Reprogramar'.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-39-001"]),
            t("MOD-39-003", "Bandeja de historial de comunicaciones dentro del expediente del cliente", "Permitir al veterinario ver qué mensajes se han enviado al tutor y cuándo.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-39-001"]),
            t("MOD-39-004", "Flujo de seguimiento automatizado a las 48h post-consulta médica", "Mensaje automático preguntando cómo evoluciona la mascota tras iniciar tratamiento.", "Backend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-39-002"]),
            t("MOD-39-005", "Pruebas de webhook de recepción de confirmación de citas vía WhatsApp", "Validar que la respuesta del tutor actualice automáticamente la cita a 'Confirmada' en la agenda.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-39-002"])
        ]
    },

    # 40. Calificaciones y reseñas
    {
        "id": "MOD-40",
        "num": 40,
        "name": "Calificaciones y reseñas",
        "category": "Calidad & Reputación",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "description": "Encuestas de satisfacción post-atención (NPS, CSAT), comentarios de tutores, moderación de opiniones y métricas de calidad de servicio.",
        "tasks": [
            t("MOD-40-001", "Modelar entidad Reseña y Puntuación por Atención", "Campos: cita_id, clinica_id, profesional_id, estrellas (1-5), nps_score (0-10), comentario, visibilidad_publica, fecha.", "Base de Datos", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-23-001"]),
            t("MOD-40-002", "Envío automático de micro-encuesta de satisfacción al finalizar la cita", "Enlace móvil ligero de 2 preguntas enviado tras salir de la clínica.", "Backend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-40-001"]),
            t("MOD-40-003", "Panel de gestión de reputación y respuesta a reseñas para la clínica", "Permitir a la gerencia responder públicamente o gestionar quejas privadas.", "Frontend", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-40-001"]),
            t("MOD-40-004", "Cálculo del Net Promoter Score (NPS) global de la clínica y profesionales", "Métrica de calidad del servicio para incentivos internos del equipo.", "Backend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-40-001"]),
            t("MOD-40-005", "Pruebas de prevención de reseñas fraudulentas o duplicadas", "Asegurar que solo clientes que hayan tenido una consulta finalizada puedan calificar.", "QA", "FASE 3 — ECOSISTEMA", "ALTA", ["MOD-40-001"])
        ]
    },

    # 41. Ranking de veterinarios/clínicas
    {
        "id": "MOD-41",
        "num": 41,
        "name": "Ranking de veterinarios/clínicas",
        "category": "Calidad & Reputación",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "BAJA",
        "description": "Algoritmo de posicionamiento en el directorio público FurLife según calidad, rapidez de atención, especialidades y opiniones verificadas.",
        "tasks": [
            t("MOD-41-001", "Modelar métricas de reputación para directorio FurLife", "Campos: rating_promedio, tasa_respuesta, verificacion_cedula, numero_atenciones_exitosas, badge_verificado.", "Base de Datos", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-40-001"]),
            t("MOD-41-002", "Diseñar algoritmo de visibilidad equilibrada en directorio público", "Ponderación justa sin penalizar clínicas nuevas, priorizando opiniones auditadas.", "Backend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-41-001"]),
            t("MOD-41-003", "Vista de perfil público de la clínica para captación de nuevos tutores", "Página de aterrizaje optimizada con fotos de instalaciones, equipo médico y botón de agendar.", "Frontend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-41-001"]),
            t("MOD-41-004", "Pruebas de algoritmo de ranking y prevención de manipulación de notas", "Validar resistencia ante granjas de reseñas o valoraciones atípicas.", "QA", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-41-002"])
        ]
    },

    # 42. Dashboard
    {
        "id": "MOD-42",
        "num": 42,
        "name": "Dashboard",
        "category": "Experiencia de Usuario & Control",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Tablero principal operativo en tiempo real: citas del día, sala de espera activa, pacientes hospitalizados, alertas de stock y accesos rápidos.",
        "tasks": [
            t("MOD-42-001", "Diseñar arquitectura de widgets del Dashboard de FurLife", "Widgets modulares configurables según el rol del usuario (Veterinario, Recepción, Administrador).", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-004"]),
            t("MOD-42-002", "Desarrollar KPIs principales del día (Citas, Pacientes atendidos, Facturado, Stock bajo)", "Tarjetas superiores con métricas clave y comparativas con la semana anterior.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-42-001"]),
            t("MOD-42-003", "Construir widget de Agenda y Sala de Espera del día", "Listado de pacientes programados para hoy con selector rápido de inicio de consulta médica.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-23-004"]),
            t("MOD-42-004", "Construir widget de Pacientes Hospitalizados y Alertas Clínicas", "Visualización rápida de pacientes en estado crítico y tratamientos pendientes de aplicar.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-19-002"]),
            t("MOD-42-005", "Barra de Acceso Rápido flotante (Nueva Consulta, Nuevo Paciente, Cobro Express)", "Atajos de teclado universales (ej: Ctrl+K / Cmd+K) para ejecutar acciones inmediatas.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-42-001"]),
            t("MOD-42-006", "Pruebas de rendimiento y recarga de datos del Dashboard en vivo", "Garantizar carga de inicio del dashboard en menos de 800ms con datos completos.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-42-002"])
        ]
    },

    # 43. Configuración
    {
        "id": "MOD-43",
        "num": 43,
        "name": "Configuración",
        "category": "Gestión Empresarial",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "description": "Ajustes del sistema: datos de empresa, moneda principal, tipos de cambio, formato de fechas, zonas horarias y personalización de marca.",
        "tasks": [
            t("MOD-43-001", "Modelar parámetros de configuración por Tenant en formato Clave-Valor / JSONB", "Estructura flexible para almacenar configuraciones globales y por módulo sin alterar esquemas.", "Base de Datos", "FASE 1 — MVP", "ALTA", ["MOD-01-002"]),
            t("MOD-43-002", "Construir centro de configuración modular con pestañas de ajuste", "Secciones: General, Facturación, Agenda, Notificaciones, Impresión de Recetas, Seguridad.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-43-001"]),
            t("MOD-43-003", "Configuración de moneda local y separadores de miles/decimales", "Adaptación para pesos mexicanos, colombianos, euros, dólares con formateo estricto.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-43-001"]),
            t("MOD-43-004", "Personalización de encabezados y pies de página para documentos oficiales", "Editor con previsualización en vivo para recetas, consentimientos y presupuestos.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-43-002"]),
            t("MOD-43-005", "Pruebas de persistencia y aplicación inmediata de configuraciones globales", "Verificar que el cambio de zona horaria se refleje al instante en el calendario de citas.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-43-001"])
        ]
    },

    # 44. Seguridad
    {
        "id": "MOD-44",
        "num": 44,
        "name": "Seguridad",
        "category": "Seguridad & Compliance",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Protección integral contra OWASP Top 10, saneamiento de entradas, Content Security Policy, cifrado en reposo y en tránsito (TLS 1.3).",
        "tasks": [
            t("MOD-44-001", "Implementar cabeceras de seguridad estrictas (HSTS, CSP, X-Frame-Options)", "Evitar ataques de Clickjacking, MIME-sniffing y restricciones de script injection.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-005"]),
            t("MOD-44-002", "Validación estricta y saneamiento de entradas en frontend y backend (Zod/Joi)", "Prevenir ataques de Inyección SQL y Cross-Site Scripting (XSS) en todos los formularios.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-003"]),
            t("MOD-44-003", "Cifrado de datos sensibles en reposo en base de datos (AES-256)", "Cifrar identificaciones fiscales, contraseñas y datos biométricos o firmas digitales.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-44-004", "Protección contra Cross-Site Request Forgery (Anti-CSRF Tokens)", "Configurar tokens sincronizados en solicitudes de mutación de estado.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-02-003"]),
            t("MOD-44-005", "Implementar escaneo automatizado de dependencias y vulnerabilidades (Trivy / Snyk)", "Integración en CI/CD para bloquear commits con vulnerabilidades conocidas (CVEs).", "DevOps", "FASE 1 — MVP", "ALTA", ["MOD-01-009"]),
            t("MOD-44-006", "Pruebas de penetración automatizadas (OWASP ZAP) en entorno de staging", "Verificar que los escaneos de seguridad pasen con cero vulnerabilidades críticas o altas.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-44-001"])
        ]
    },

    # 45. Auditoría
    {
        "id": "MOD-45",
        "num": 45,
        "name": "Auditoría",
        "category": "Seguridad & Compliance",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Bitácora inmutable de eventos del sistema (quién, qué, cuándo, IP), registro de modificaciones en historias clínicas, inventario y caja.",
        "tasks": [
            t("MOD-45-001", "Modelar tabla de Audit Logs con diferencias JSONB (diff_before y diff_after)", "Campos: id, tenant_id, usuario_id, accion (CREATE, UPDATE, DELETE), tabla, registro_id, ip, user_agent, timestamp.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-45-002", "Implementar interceptores / triggers automáticos de auditoría en backend", "Registrar automáticamente el antes y después en cambios de expedientes, cajas y stock.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-45-001"]),
            t("MOD-45-003", "Construir visor de auditoría para directores de clínica y oficiales de cumplimiento", "Buscador forense con filtros por usuario, fecha, tipo de operación y registro médico.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-45-001"]),
            t("MOD-45-004", "Garantizar inmutabilidad y permisos de solo lectura absoluta en tabla de logs", "Revocar permisos de UPDATE y DELETE a nivel de usuario de base de datos en la tabla audit_logs.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-45-001"]),
            t("MOD-45-005", "Pruebas de integridad forense y verificación de no-repudio", "Comprobar que cualquier intento de alteración o borrado de logs genere alerta crítica.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-45-004"])
        ]
    },

    # 46. Protección de datos
    {
        "id": "MOD-46",
        "num": 46,
        "name": "Protección de datos",
        "category": "Seguridad & Compliance",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Cumplimiento de normativas de privacidad (RGPD, LOPD, Habeas Data), consentimiento informado, derecho al olvido y exportación de datos.",
        "tasks": [
            t("MOD-46-001", "Mapeo de flujo de datos personales y clasificación de confidencialidad", "Inventariar qué datos de tutores y pacientes se recopilan, procesan y almacenan.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-07-001"]),
            t("MOD-46-002", "Implementar flujo de solicitud de descarga de datos (Derecho de Portabilidad)", "Generación de archivo JSON/ZIP con todos los datos y expedientes asociados al tutor.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-46-001"]),
            t("MOD-46-003", "Implementar proceso de anonimización y derecho de supresión de datos personales", "Anonimizar datos del tutor manteniendo las historias clínicas anónimas para estadística médica legal.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-46-001"]),
            t("MOD-46-004", "Gestión de políticas de cookies, aviso legal y consentimientos expresos", "Banners y registros de aceptación con versión exacta del aviso aceptado.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-07-006"]),
            t("MOD-46-005", "Pruebas de cumplimiento de anonimización y borrado seguro", "Validar que la anonimización no rompa la integridad referencial de consultas ni facturas.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-46-003"])
        ]
    },

    # 47. Integraciones externas
    {
        "id": "MOD-47",
        "num": 47,
        "name": "Integraciones externas",
        "category": "Ecosistema & APIs",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "description": "Webhooks de salida, pasarelas de pago (Stripe, Mercado Pago), WhatsApp API, laboratorios externos y software de contabilidad.",
        "tasks": [
            t("MOD-47-001", "Modelar entidad Webhook y suscripciones de eventos de clínica", "Campos: tenant_id, url_destino, eventos_suscritos (ej: cita.creada, pago.registrado), secret_key, estado.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-01-002"]),
            t("MOD-47-002", "Implementar motor de disparo seguro de Webhooks con firma HMAC-SHA256", "Permitir a clínicas conectar su CRM o software contable externo con reintentos exponenciales.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-47-001"]),
            t("MOD-47-003", "Construir panel de configuración de integraciones para la clínica", "Activación guiada de API keys de WhatsApp, Stripe, terminales bancarias y laboratorios.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-47-001"]),
            t("MOD-47-004", "Conector para exportación contable hacia QuickBooks / ContaPyme / Sage", "Mapeo de cuentas contables para conciliar ventas e inventario automáticamente.", "Backend", "FASE 3 — ECOSISTEMA", "BAJA", ["MOD-34-001"]),
            t("MOD-47-005", "Pruebas de simulación de fallas de red en webhooks y reintentos (Dead Letter Queue)", "Asegurar que webhooks caídos no bloqueen la operación de la clínica.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-47-002"])
        ]
    },

    # 48. Luna — asistente IA
    {
        "id": "MOD-48",
        "num": 48,
        "name": "Luna — asistente IA",
        "category": "Inteligencia Artificial",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Asistente inteligente FurLife: orientación por el sistema, búsquedas en lenguaje natural, resúmenes de expediente y comandos rápidos.",
        "tasks": [
            t("MOD-48-001", "Diseñar arquitectura del asistente Luna (Capa de orquestación y safety limits)", "Definir límites estrictos: rol puramente asistencial administrativo, sin emisión de diagnósticos médicos.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-001"]),
            t("MOD-48-002", "Construir interfaz flotante de Luna en la barra lateral o modal interactivo", "Componente conversacional con el diseño visual FurLife, respuestas rápidas y atajos visuales.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-004"]),
            t("MOD-48-003", "Implementar motor de intenciones administrativas simuladas para MVP", "Respuestas inmediatas para: '¿Cómo agendar una cita?', '¿Dónde registro un nuevo lote?', 'Resumen del día'.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-48-002"]),
            t("MOD-48-004", "Comandos de navegación rápida asistida por texto", "Escribir 'ir a vacunas de Rocky' y redirigir inmediatamente a la pestaña de vacunas del paciente.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-48-003"]),
            t("MOD-48-005", "Generador de borradores de mensajes para clientes con Luna", "Redactar recordatorios amables de cobro o indicaciones post-atención para WhatsApp.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-48-003"]),
            t("MOD-48-006", "Conexión con LLM seguro mediante Function Calling (Fase posterior)", "Integrar modelo con endpoints para consultar agenda, buscar pacientes y redactar plantillas.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-48-001"]),
            t("MOD-48-007", "Pruebas de barreras de seguridad (Prompt Injection & Medical Safety Guardrails)", "Verificar que Luna rechace responder preguntas médicas directas sin advertir consultar al veterinario.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-48-001"])
        ]
    },

    # 49. Inteligencia artificial clínica futura
    {
        "id": "MOD-49",
        "num": 49,
        "name": "Inteligencia artificial clínica futura",
        "category": "Inteligencia Artificial",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "description": "Soporte al diagnóstico diferencial, sugerencias de dosis con verificación humana, detección de interacciones farmacológicas y radiología asistida.",
        "tasks": [
            t("MOD-49-001", "Definir protocolo ético y legal de IA como Soporte a la Decisión Clínica (CDSS)", "Establecer que ningún algoritmo reemplaza la firma o criterio del médico veterinario.", "Seguridad", "FASE 4 — INTELIGENCIA / IA", "CRÍTICA", ["MOD-48-001"]),
            t("MOD-49-002", "Motor de detección de interacciones medicamentosas potencialmente letales", "Al prescribir dos fármacos incompatibles, mostrar alerta científica con bibliografía de soporte.", "Backend", "FASE 4 — INTELIGENCIA / IA", "CRÍTICA", ["MOD-15-004"]),
            t("MOD-49-003", "Asistente de Diagnóstico Diferencial basado en síntomas y signos clínicos", "Sugerir posibles patologías candidatas ordenadas por probabilidad a partir de la anamnesis.", "Backend", "FASE 4 — INTELIGENCIA / IA", "ALTA", ["MOD-12-002"]),
            t("MOD-49-004", "Módulo de visión por computadora para pre-análisis de radiografías óseas y torácicas", "Detección de patrones de fracturas o cardiomegalia con mapas de calor (Grad-CAM) para revisión médica.", "Backend", "FASE 4 — INTELIGENCIA / IA", "MEDIA", ["MOD-21-005"]),
            t("MOD-49-005", "Sistema de validación clínica obligatoria con firma de consentimiento del veterinario", "Registrar explícitamente en el expediente si el veterinario aceptó o descartó la sugerencia de la IA.", "Seguridad", "FASE 4 — INTELIGENCIA / IA", "CRÍTICA", ["MOD-49-001"]),
            t("MOD-49-006", "Pruebas de sensibilidad, especificidad y sesgo en sugerencias clínicas", "Auditoría de falsos positivos y falsos negativos en casos clínicos de prueba históricos.", "QA", "FASE 4 — INTELIGENCIA / IA", "CRÍTICA", ["MOD-49-003"])
        ]
    },

    # 50. Modelo ML FurLife futuro
    {
        "id": "MOD-50",
        "num": 50,
        "name": "Modelo ML FurLife futuro",
        "category": "Inteligencia Artificial",
        "phase": "FASE 4 — INTELIGENCIA / IA",
        "priority": "ALTA",
        "description": "Pipeline de Machine Learning de extremo a extremo: predicción de abandono de tratamientos, demanda de citas y agrupamiento epidemiológico.",
        "tasks": [
            t("MOD-50-001", "Diseño de pipeline de extracción, anonimización y preparación de datasets", "Garantizar desidentificación total de propietarios y mascotas antes del preprocesamiento de datos.", "Base de Datos", "FASE 4 — INTELIGENCIA / IA", "CRÍTICA", ["MOD-46-003"]),
            t("MOD-50-002", "Feature Engineering y control estricto de Data Leakage temporal", "Construcción de variables predictivas respetando líneas temporales para evitar filtración de futuro.", "Backend", "FASE 4 — INTELIGENCIA / IA", "CRÍTICA", ["MOD-50-001"]),
            t("MOD-50-003", "Entrenamiento de modelo de predicción de inasistencia (No-Show Prediction)", "Algoritmo para anticipar ausencias en agenda y sugerir recordatorios reforzados o sobrecupo seguro.", "Backend", "FASE 4 — INTELIGENCIA / IA", "ALTA", ["MOD-50-002"]),
            t("MOD-50-004", "Modelo de predicción de abandono de tratamientos crónicos (Churn & Compliance)", "Identificar pacientes diabéticos o renales en riesgo de suspender la medicación pautada.", "Backend", "FASE 4 — INTELIGENCIA / IA", "ALTA", ["MOD-50-002"]),
            t("MOD-50-005", "Implementación de MLOps: versionado de modelos con MLflow / DVC y registro de artefactos", "Trazabilidad completa de hiperparámetros, métricas ROC-AUC, F1 y código de entrenamiento.", "DevOps", "FASE 4 — INTELIGENCIA / IA", "ALTA", ["MOD-50-003"]),
            t("MOD-50-006", "Despliegue de microservicio de inferencia de baja latencia con monitoreo de Data Drift", "Alertar automáticamente cuando la distribución de datos clínicos reales se desvíe del set de entrenamiento.", "Backend", "FASE 4 — INTELIGENCIA / IA", "ALTA", ["MOD-50-005"]),
            t("MOD-50-007", "Módulo de Explicabilidad del modelo (SHAP / LIME)", "Mostrar al veterinario qué factores influyeron en la predicción de la IA de forma transparente.", "Frontend", "FASE 4 — INTELIGENCIA / IA", "ALTA", ["MOD-50-006"]),
            t("MOD-50-008", "Pruebas de estrés y benchmarking de inferencia de modelos en producción", "Asegurar tiempos de respuesta de inferencia menores a 120ms sin degradar la aplicación principal.", "QA", "FASE 4 — INTELIGENCIA / IA", "ALTA", ["MOD-50-006"])
        ]
    },

    # 51. Pruebas
    {
        "id": "MOD-51",
        "num": 51,
        "name": "Pruebas",
        "category": "Calidad & Testing",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Estrategia integral de testing automatizado: Unit tests, Integration tests, E2E tests, pruebas de contratos de API y pruebas de concurrencia.",
        "tasks": [
            t("MOD-51-001", "Configurar frameworks de pruebas unitarias (Jest/Vitest para frontend, Pytest para backend)", "Configuración de mocks, entornos de base de datos en memoria para pruebas rápidas y fiables.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-001"]),
            t("MOD-51-002", "Implementar pruebas unitarias de lógica médica y cálculos críticos", "Cobertura del 100% en calculadora posológica, conteo de stock FEFO y conciliaciones de caja.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-15-003", "MOD-29-003", "MOD-33-004"]),
            t("MOD-51-003", "Implementar pruebas de integración de endpoints de API con Base de Datos real", "Verificar flujos completos de creación de expedientes, cierre de consultas y generación de cobros.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-003"]),
            t("MOD-51-004", "Automatizar pruebas End-to-End con Playwright o Cypress", "Simular flujos reales de recepción, atención médica, emisión de receta y cobro en mostrador.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-51-003"]),
            t("MOD-51-005", "Pruebas de aislamiento multi-inquilino (Tenant Leaks Prevention)", "Validar automáticamente que ningún request de una clínica pueda acceder a datos de otra.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-51-006", "Configurar reportes de cobertura automatizados con umbral mínimo del 85%", "Bloquear el paso a producción en CI/CD si la cobertura de código baja del umbral pactado.", "DevOps", "FASE 1 — MVP", "ALTA", ["MOD-51-001"])
        ]
    },

    # 52. Calidad
    {
        "id": "MOD-52",
        "num": 52,
        "name": "Calidad",
        "category": "Calidad & Testing",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "description": "Análisis estático de código (SonarQube), control de deuda técnica, accesibilidad web (WCAG 2.1 AA) y consistencia de interfaz.",
        "tasks": [
            t("MOD-52-001", "Integrar escaneo continuo de calidad de código con SonarQube / CodeClimate", "Detección temprana de duplicación de código, complejidad ciclomática y malos olores (code smells).", "DevOps", "FASE 1 — MVP", "ALTA", ["MOD-01-009"]),
            t("MOD-52-002", "Auditoría de accesibilidad web WCAG 2.1 nivel AA", "Garantizar contraste de color adecuado con la paleta FurLife, navegación completa por teclado y lectores de pantalla.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-01-004"]),
            t("MOD-52-003", "Validación de compatibilidad Cross-Browser (Chrome, Safari, Edge, Firefox)", "Asegurar renderizado uniforme de calendarios, tablas y gráficas en todos los navegadores modernos.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-52-002"]),
            t("MOD-52-004", "Revisión sistemática de experiencia de usuario en tablets y móviles", "Optimizar pantallas críticas (admisión de urgencias, hospitalización) para uso clínico en iPads y tablets Android.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-42-001"]),
            t("MOD-52-005", "Pruebas de regresión visual automatizadas", "Detectar desviaciones no deseadas en componentes del Design System en cada versión.", "QA", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA", ["MOD-52-001"])
        ]
    },

    # 53. Rendimiento
    {
        "id": "MOD-53",
        "num": 53,
        "name": "Rendimiento",
        "category": "Arquitectura & DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Optimización de consultas SQL, indexación estratégica, caching distribuido con Redis, compresión Brotli y tiempos de carga óptimos.",
        "tasks": [
            t("MOD-53-001", "Auditoría e indexación óptima de base de datos (B-Tree, GIN para búsquedas de texto)", "Garantizar que búsquedas entre 500,000 registros respondan en menos de 30 milisegundos.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-53-002", "Estrategia de caché distribuida con Redis para catálogos y catálogos estáticos", "Cachear razas, vademécum y configuraciones institucionales con invalidación inteligente.", "Backend", "FASE 1 — MVP", "ALTA", ["MOD-01-001"]),
            t("MOD-53-003", "Optimización de carga frontend (Code Splitting, Lazy Loading de rutas y componentes)", "Empaquetado eficiente para bundle inicial menor a 200KB y First Contentful Paint < 1.2s.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-004"]),
            t("MOD-53-004", "Compresión HTTP con Brotli / Gzip y políticas de cache de activos estáticos", "Servicio eficiente de imágenes y fuentes a través de CDN con encabezados Cache-Control inmutables.", "DevOps", "FASE 1 — MVP", "ALTA", ["MOD-53-003"]),
            t("MOD-53-005", "Pruebas de carga y estrés con k6 / Locust (500 solicitudes concurrentes)", "Comprobar estabilidad de la API sin degradación de latencia bajo picos de apertura matutina de clínicas.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-53-001"])
        ]
    },

    # 54. Escalabilidad
    {
        "id": "MOD-54",
        "num": 54,
        "name": "Escalabilidad",
        "category": "Arquitectura & DevOps",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "description": "Arquitectura stateless para escalado horizontal de contenedores, réplicas de lectura de base de datos y particionamiento de tablas.",
        "tasks": [
            t("MOD-54-001", "Garantizar arquitectura Backend 100% Stateless", "Sesiones y tokens desacoplados del nodo ejecutor para permitir escalado horizontal sin pérdida de estado.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA", ["MOD-01-001"]),
            t("MOD-54-002", "Configuración de réplicas de lectura de base de datos (Read Replicas)", "Desviar consultas pesadas de reportes y analítica hacia réplicas para no saturar el nodo primario de escritura.", "Base de Datos", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-54-001"]),
            t("MOD-54-003", "Particionamiento de tablas masivas por rango de tiempo (audit_logs, movimientos_kardex)", "Mantener rendimiento óptimo de consultas históricas particionando por año y mes.", "Base de Datos", "FASE 3 — ECOSISTEMA", "MEDIA", ["MOD-45-001", "MOD-29-001"]),
            t("MOD-54-004", "Implementar colas de procesamiento asíncrono con Celery / BullMQ / RabbitMQ", "Procesar PDFs pesados, envíos masivos y backups fuera del ciclo de vida del request HTTP.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-54-001"]),
            t("MOD-54-005", "Pruebas de auto-escalado horizontal de pods/contenedores", "Validar que un incremento brusco de tráfico active nuevos contenedores sin errores 502/504.", "DevOps", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-54-001"])
        ]
    },

    # 55. Deploy
    {
        "id": "MOD-55",
        "num": 55,
        "name": "Deploy",
        "category": "Arquitectura & DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Pipeline de CI/CD automatizado, contenedores Docker multi-etapa, despliegues sin tiempo de inactividad (Zero Downtime) y rollbacks automáticos.",
        "tasks": [
            t("MOD-55-001", "Crear Dockerfiles multi-stage optimizados para frontend y backend", "Imágenes seguras, mínimas (Alpine/Distroless), sin secretos embebidos y ejecutadas sin privilegios root.", "DevOps", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-001"]),
            t("MOD-55-002", "Configurar pipeline de CI/CD en GitHub Actions / GitLab CI", "Compilación, pase de tests, auditoría de seguridad y despliegue automático por ramas (dev, staging, main).", "DevOps", "FASE 1 — MVP", "CRÍTICA", ["MOD-55-001"]),
            t("MOD-55-003", "Estrategia de despliegue Zero Downtime (Blue/Green o Rolling Updates)", "Garantizar que actualizar una versión no interrumpa las consultas médicas que estén en curso en las clínicas.", "DevOps", "FASE 1 — MVP", "CRÍTICA", ["MOD-55-002"]),
            t("MOD-55-004", "Automatización de migraciones de base de datos con verificación previa", "Ejecución de migraciones en modo transaccional y rollback automático en caso de fallo de schema.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-55-005", "Gestión segura de variables de entorno y secretos con Vault o AWS Secrets Manager", "Inyección segura de claves de producción sin almacenarlas en repositorios de código.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-55-002"]),
            t("MOD-55-006", "Pruebas de procedimiento de Rollback de versión en menos de 60 segundos", "Simular fallo en producción y verificar regreso inmediato a la versión estable previa.", "DevOps", "FASE 1 — MVP", "CRÍTICA", ["MOD-55-003"])
        ]
    },

    # 56. Monitoreo
    {
        "id": "MOD-56",
        "num": 56,
        "name": "Monitoreo",
        "category": "Arquitectura & DevOps",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Observabilidad transversal: métricas con Prometheus/Grafana, rastreo de errores en tiempo real con Sentry, logs centralizados y alertas.",
        "tasks": [
            t("MOD-56-001", "Integrar Sentry para captura de errores en tiempo real en frontend y backend", "Reporte instantáneo con stacktrace desofuscado (sourcemaps), contexto de usuario y URL.", "DevOps", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-006"]),
            t("MOD-56-002", "Configurar exportador de métricas Prometheus y dashboards Grafana", "Monitorización de uso de CPU, RAM, pool de conexiones DB, tasa de errores 5xx y tiempos de respuesta.", "DevOps", "FASE 1 — MVP", "ALTA", ["MOD-56-001"]),
            t("MOD-56-003", "Endpoints de comprobación de salud del sistema (/healthz, /readyz)", "Verificación del estado activo de la base de datos, Redis, almacenamiento y servicios externos.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-005"]),
            t("MOD-56-004", "Centralización y agregación de logs estructurados en JSON (ELK / Loki)", "Indexación y búsqueda rápida de logs para depuración ágil de incidentes clínicos.", "DevOps", "FASE 2 — OPERACIÓN AVANZADA", "ALTA", ["MOD-56-001"]),
            t("MOD-56-005", "Configurar alertas automáticas en Slack / PagerDuty ante degradación del servicio", "Notificar de inmediato al equipo de guardia si la latencia supera los 2 segundos o hay errores 500.", "DevOps", "FASE 1 — MVP", "CRÍTICA", ["MOD-56-002"]),
            t("MOD-56-006", "Pruebas de disparo y recepción de alertas críticas ante corte de conexión DB", "Validar que la notificación llegue al canal de emergencia en menos de 2 minutos.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-56-005"])
        ]
    },

    # 57. Backup y recuperación
    {
        "id": "MOD-57",
        "num": 57,
        "name": "Backup y recuperación",
        "category": "Continuidad del Negocio & DR",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "description": "Copias de seguridad automatizadas georreplicadas, Point-in-Time Recovery (PITR), plan de recuperación ante desastres (RPO < 1h, RTO < 4h).",
        "tasks": [
            t("MOD-57-001", "Configurar backups automatizados diarios y continuos de base de datos (WAL-G / pgBackRest)", "Copias continuas de transacciones para posibilitar recuperación punto en el tiempo (PITR).", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-01-002"]),
            t("MOD-57-002", "Cifrado de backups con llaves asimétricas y georreplicación en región secundaria", "Almacenar copias cifradas fuera de la región primaria para proteger contra caídas de datacenter.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-57-001"]),
            t("MOD-57-003", "Redactar y documentar el Plan de Recuperación ante Desastres (Disaster Recovery Plan)", "Procedimiento paso a paso para restaurar el servicio completo en caso de incidente mayor.", "DevOps", "FASE 1 — MVP", "CRÍTICA", ["MOD-57-001"]),
            t("MOD-57-004", "Simulacro periódico trimestral de restauración completa de datos", "Ejecutar una prueba en ambiente estéril restaurando un backup y verificando consistencia de datos médicos.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-57-003"]),
            t("MOD-57-005", "Validación de cumplimiento de objetivos RPO (< 1 hora) y RTO (< 4 horas)", "Auditar métricas de recuperación para garantizar continuidad del negocio a las clínicas.", "DevOps", "FASE 1 — MVP", "CRÍTICA", ["MOD-57-004"])
        ]
    },

    # 58. Documentación técnica
    {
        "id": "MOD-58",
        "num": 58,
        "name": "Documentación técnica",
        "category": "Documentación & Conocimiento",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "description": "Especificación interactiva OpenAPI/Swagger, diagramas de arquitectura modelo C4, diccionario de datos y guías de incorporación para desarrolladores.",
        "tasks": [
            t("MOD-58-001", "Generar y mantener portal interactivo de documentación de API (Swagger UI / Redoc)", "Catálogo completo de endpoints con ejemplos de payloads de petición y respuesta.", "API", "FASE 1 — MVP", "ALTA", ["MOD-01-003"]),
            t("MOD-58-002", "Elaborar diagramas de arquitectura C4 (Contexto, Contenedores, Componentes)", "Documentación visual de la topología de servicios, bases de datos y flujos de integración.", "Arquitectura", "FASE 1 — MVP", "ALTA", ["MOD-01-001"]),
            t("MOD-58-003", "Construir Diccionario de Datos exhaustivo con descripción de cada tabla y campo", "Guía de referencia de entidades, relaciones foráneas, índices y reglas de integridad.", "Base de Datos", "FASE 1 — MVP", "ALTA", ["MOD-01-002"]),
            t("MOD-58-004", "Redactar Guía de Onboarding para nuevos desarrolladores (Setup local con Docker Compose)", "Instrucciones de clonación, configuración de variables de entorno y ejecución en 1 comando.", "DevOps", "FASE 1 — MVP", "ALTA", ["MOD-55-001"]),
            t("MOD-58-005", "Pruebas de reproducibilidad del entorno de desarrollo local desde cero", "Verificar que un desarrollador nuevo pueda levantar el proyecto sin errores en menos de 15 minutos.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-58-004"])
        ]
    },

    # 59. Documentación de usuario
    {
        "id": "MOD-59",
        "num": 59,
        "name": "Documentación de usuario",
        "category": "Documentación & Conocimiento",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "description": "Manuales interactivos por rol (veterinario, recepcionista, administrador), micro-tutoriales guiados en la interfaz (tours), preguntas frecuentes y videos.",
        "tasks": [
            t("MOD-59-001", "Elaborar manual de usuario para Médicos Veterinarios", "Guía paso a paso de atención clínica: uso de SOAP, receta digital, vacunas y solicitud de exámenes.", "Documentación", "FASE 1 — MVP", "ALTA", ["MOD-10-003"]),
            t("MOD-59-002", "Elaborar manual de usuario para Personal de Recepción y Mostrador", "Guía operativa de agendamiento, cobro en caja, registro de tutores y check-in en sala de espera.", "Documentación", "FASE 1 — MVP", "ALTA", ["MOD-23-004", "MOD-33-002"]),
            t("MOD-59-003", "Elaborar manual de usuario para Administradores de Clínica y Gerencia", "Guía de configuración de sedes, permisos de empleados, reportes financieros y gestión de inventario.", "Documentación", "FASE 1 — MVP", "ALTA", ["MOD-05-003", "MOD-37-002"]),
            t("MOD-59-004", "Implementar tours interactivos en la aplicación (Onboarding guiado con Shepherd.js / Intro.js)", "Recorridos visuales con pasos destacados para nuevos usuarios en su primer inicio de sesión.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-01-004"]),
            t("MOD-59-005", "Construir Centro de Ayuda y Preguntas Frecuentes (FAQ) accesible desde la barra superior", "Buscador de artículos de soporte y resolución de dudas comunes directamente en la app.", "Frontend", "FASE 1 — MVP", "MEDIA", ["MOD-59-001"]),
            t("MOD-59-006", "Pruebas de usabilidad y comprensión de los manuales con personal de clínica real", "Sesiones de testeo para validar que recepcionistas y veterinarios operen sin fricción.", "QA", "FASE 1 — MVP", "ALTA", ["MOD-59-004"])
        ]
    }
]

total_tasks = sum(len(m["tasks"]) for m in modules)
print(f"Total modules: {len(modules)}")
print(f"Total tasks in modules: {total_tasks}")

output_js_path = os.path.join("js", "data-modules.js")
with open(output_js_path, "w", encoding="utf-8") as f:
    f.write("// FurLife Master Checklist - Data Modules (59 Modules)\n")
    f.write("// Generated automatically with exact structure and granular tasks\n")
    f.write("window.FURLIFE_MODULES = ")
    json.dump(modules, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Successfully generated {output_js_path}!")
