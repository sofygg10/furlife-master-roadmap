# -*- coding: utf-8 -*-
"""
enhance_modules.py
Enriches js/data-modules.js to ensure maximum granularity across all 59 modules,
explicitly including the 27 exact tasks for Module 08 (Pacientes) and expanding
the other modules to match senior software architect and PetTech SaaS standards.
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

# Read existing modules
with open("js/data-modules.js", "r", encoding="utf-8") as f:
    content = f.read()
    prefix = "window.FURLIFE_MODULES = "
    idx = content.find(prefix)
    if idx != -1:
        json_str = content[idx + len(prefix):].rstrip(";\n ")
    else:
        json_str = content
    modules = json.loads(json_str)

# 1. Specifically replace Module 08 with the 27 exact tasks from prompt:
mod_08_tasks = [
    t("MOD-08-001", "Diseñar estructura de datos del paciente", "Definir entidad Mascota/Paciente con atributos demográficos, biológicos y clínicos.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA"),
    t("MOD-08-002", "Crear modelo/base de datos de paciente", "Implementar tabla patients en PostgreSQL con tipos de datos estrictos y llaves foráneas.", "Base de Datos", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-001"]),
    t("MOD-08-003", "Crear endpoint para registrar paciente", "Endpoint POST /api/v1/patients con autenticación JWT y asignación automática de tenant_id.", "API", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-002"]),
    t("MOD-08-004", "Crear formulario de registro", "Componente reactivo ergonómico para recepción y veterinarios con diseño FurLife.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-003"]),
    t("MOD-08-005", "Validar campos obligatorios", "Validaciones en frontend y backend (nombre, especie, sexo, tutor) con Zod/Pydantic.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-004"]),
    t("MOD-08-006", "Registrar especie", "Selector de especie con catálogo estandarizado (Canino, Felino, Ave, Roedor, Reptil, Exótico).", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-004"]),
    t("MOD-08-007", "Registrar raza", "Autocompletado dependiente de la especie seleccionada con más de 400 razas y opción 'Mestizo'.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-006"]),
    t("MOD-08-008", "Registrar sexo", "Selector de género (Macho / Hembra) con impacto en validaciones reproductivas.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-004"]),
    t("MOD-08-009", "Registrar fecha de nacimiento", "Selector con cálculo dinámico en tiempo real de edad en años, meses y días o modo edad estimada.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-004"]),
    t("MOD-08-010", "Registrar peso", "Captura de peso en kilogramos con precisión decimal y registro en histórico de curvas de peso.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-004"]),
    t("MOD-08-011", "Registrar color", "Campo de color de pelaje, marcas distintivas o señas particulares del animal.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-08-004"]),
    t("MOD-08-012", "Registrar microchip", "Captura y validación de 15 dígitos numéricos conforme a estándares internacionales ISO 11784/11785.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-08-004"]),
    t("MOD-08-013", "Registrar esterilización", "Control de estado reproductivo (Entero / Castrado / Esterilizada) con fecha de procedimiento si aplica.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-008"]),
    t("MOD-08-014", "Asociar propietario", "Buscador predictivo por teléfono o nombre de tutor para vincular al paciente a su cliente responsable.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-004"]),
    t("MOD-08-015", "Subir fotografía", "Carga multimedia con recorte cuadrado centrado, compresión WebP y almacenamiento seguro en S3.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-08-004"]),
    t("MOD-08-016", "Generar identificador único", "Creación de código alfanumérico único para expediente y generación de código QR identificativo.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-003"]),
    t("MOD-08-017", "Crear perfil del paciente", "Vista resumen 360° con foto, datos biológicos, badges de alerta médica (alergias, agresividad) y accesos rápidos.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-016"]),
    t("MOD-08-018", "Crear historial cronológico", "Línea de tiempo médica interactiva que agrupa consultas, vacunas, cirugías, recetas y laboratorios.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-017"]),
    t("MOD-08-019", "Implementar búsqueda", "Buscador instantáneo en vivo por nombre de paciente, folio, microchip o nombre del tutor.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-003"]),
    t("MOD-08-020", "Implementar filtros", "Filtros multidimensionales por especie, estado (activo, hospitalizado, fallecido), raza y veterinario habitual.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-08-019"]),
    t("MOD-08-021", "Implementar edición", "Modal y formulario de actualización de datos con trazabilidad de cambios.", "Frontend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-004"]),
    t("MOD-08-022", "Implementar eliminación lógica", "Soft-delete con archivado de expediente para preservar historial legal y contable sin borrar de base de datos.", "Backend", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-002"]),
    t("MOD-08-023", "Controlar permisos", "Restricción de acceso para que solo personal autorizado de la clínica pueda consultar o editar expedientes.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-003"]),
    t("MOD-08-024", "Registrar auditoría", "Logueo inmutable de creación, visualización y modificación del paciente con IP, usuario y timestamp.", "Seguridad", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-003"]),
    t("MOD-08-025", "Crear pruebas", "Suite completa de pruebas unitarias, de integración y E2E para el ciclo de vida del paciente.", "QA", "FASE 1 — MVP", "CRÍTICA", ["MOD-08-003"]),
    t("MOD-08-026", "Validar experiencia móvil", "Optimización táctil de ficha y registro de paciente en smartphones para uso en campo o a domicilio.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-08-017"]),
    t("MOD-08-027", "Validar experiencia desktop", "Atajos de teclado y distribución de alta densidad de información para pantallas clínicas en consultorio.", "Frontend", "FASE 1 — MVP", "ALTA", ["MOD-08-017"])
]

# Find and replace module 8
for m in modules:
    if m["id"] == "MOD-08":
        m["tasks"] = mod_08_tasks
        break

# Let's also ensure other key modules have comprehensive micro-tasks added
extra_tasks_by_mod = {
    "MOD-01": [
        t("MOD-01-013", "Diseñar convención de nombres y estructura de base de datos", "Estandarizar nombres snake_case para tablas y columnas, llaves primarias id y campos de auditoría.", "Base de Datos", "FASE 1 — MVP", "ALTA"),
        t("MOD-01-014", "Configurar sistema de gestión de migraciones de base de datos", "Herramienta de migraciones versionadas y reproducibles (Alembic / Prisma / Flyway / Knex).", "DevOps", "FASE 1 — MVP", "CRÍTICA"),
        t("MOD-01-015", "Definir estándares de observabilidad y métricas de negocio", "Contadores para citas creadas, consultas cerradas, facturación generada y latencias de API.", "Arquitectura", "FASE 1 — MVP", "ALTA"),
        t("MOD-01-016", "Validar rendimiento de arranque y empaquetado del bundle", "Asegurar que el bundle inicial no supere los presupuestos de tamaño web.", "Frontend", "FASE 1 — MVP", "ALTA")
    ],
    "MOD-02": [
        t("MOD-02-013", "Diseñar pantalla de confirmación de email con código OTP de 6 dígitos", "Alternativa accesible de activación por código numérico de 6 dígitos.", "Frontend", "FASE 1 — MVP", "ALTA"),
        t("MOD-02-014", "Implementar registro de dispositivos y navegadores de confianza", "Detectar inicios de sesión desde nuevas ubicaciones y notificar por email.", "Seguridad", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA"),
        t("MOD-02-015", "Configurar política estricta de complejidad de contraseñas", "Mínimo 10 caracteres, mayúsculas, minúsculas, números y símbolos sin palabras de diccionario.", "Seguridad", "FASE 1 — MVP", "CRÍTICA"),
        t("MOD-02-016", "Validar accesibilidad WCAG en todos los formularios de acceso", "Etiquetas accesibles, foco visible y mensajes de error anunciados a lectores de pantalla.", "Frontend", "FASE 1 — MVP", "ALTA")
    ],
    "MOD-07": [
        t("MOD-07-010", "Validar formato de DNI/RFC/RUT/CIF según el país de la clínica", "Algoritmo de comprobación de dígitos verificadores de documentos fiscales.", "Backend", "FASE 1 — MVP", "ALTA"),
        t("MOD-07-011", "Implementar libreta de direcciones para tutores que solicitan atención a domicilio", "Múltiples direcciones geolocalizadas con indicaciones de acceso.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA"),
        t("MOD-07-012", "Ficha de consentimiento para recepción de recordatorios por WhatsApp y Email", "Interruptores granulares para marketing vs notificaciones operativas obligatorias.", "Frontend", "FASE 1 — MVP", "ALTA"),
        t("MOD-07-013", "Implementar historial consolidado de facturas y deudas del cliente", "Visualización de total pagado en el año, saldo pendiente y límite de crédito si aplica.", "Frontend", "FASE 1 — MVP", "ALTA"),
        t("MOD-07-014", "Validar experiencia de búsqueda predictiva en dispositivos móviles", "Búsqueda ultra-rápida desde smartphone con teclado numérico para teléfonos.", "Frontend", "FASE 1 — MVP", "ALTA")
    ],
    "MOD-10": [
        t("MOD-10-009", "Diseñar selector de motivos de consulta frecuentes con 1 clic", "Atajos para motivos comunes: Control sano, Vacunación, Vómitos/Diarrea, Prurito, Cojera.", "Frontend", "FASE 1 — MVP", "ALTA"),
        t("MOD-10-010", "Implementar temporizador de duración de consulta en vivo", "Cronómetro discreto para que el veterinario conozca el tiempo dedicado al paciente.", "Frontend", "FASE 1 — MVP", "MEDIA"),
        t("MOD-10-011", "Módulo de comparación de fotos clínicas anteriores durante la consulta", "Comparar estado de dermatitis o cicatrización respecto a la consulta anterior.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA"),
        t("MOD-10-012", "Implementar botón de emergencia para conversión inmediata a Hospitalización o Cirugía", "Traspaso de datos clínicos a orden de quirófano o internación sin reescribir nada.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "CRÍTICA"),
        t("MOD-10-013", "Pruebas de estrés de guardado masivo concurrente en horas pico de clínicas", "Garantizar persistencia con 100 veterinarios guardando consultas al mismo tiempo.", "QA", "FASE 1 — MVP", "CRÍTICA")
    ],
    "MOD-13": [
        t("MOD-13-008", "Diseñar matriz visual de plan de vacunación canino y felino", "Cuadrícula con semanas de vida recomendadas y marcas de vacunas aplicadas vs pendientes.", "Frontend", "FASE 1 — MVP", "CRÍTICA"),
        t("MOD-13-009", "Implementar registro de reacciones adversas post-vacunales", "Captura de anafilaxia, inflamación local o letargo con alerta clínica persistente.", "Frontend", "FASE 1 — MVP", "CRÍTICA"),
        t("MOD-13-010", "Generación de certificado oficial de Vacunación Antirrábica para viajes", "Documento con folio oficial, datos del médico, número de lote y validez internacional.", "Backend", "FASE 1 — MVP", "CRÍTICA"),
        t("MOD-13-011", "Soporte para vacunas aplicadas en otra clínica externa", "Registro en expediente con mención de procedencia sin descontar stock propio.", "Frontend", "FASE 1 — MVP", "ALTA")
    ],
    "MOD-22": [
        t("MOD-22-007", "Diseñar código de colores unificado para tipos de citas en calendario", "Azul para consulta general, verde para vacunas, violeta para cirugías, naranja para estética.", "Frontend", "FASE 1 — MVP", "ALTA"),
        t("MOD-22-008", "Implementar vista multi-profesional en columnas simultáneas", "Permitir a recepción ver la disponibilidad de todos los veterinarios lado a lado.", "Frontend", "FASE 1 — MVP", "CRÍTICA"),
        t("MOD-22-009", "Módulo de bloqueo de horarios no laborables y pausas de almuerzo", "Impedir citas en horarios de colación del personal de la clínica.", "Frontend", "FASE 1 — MVP", "ALTA"),
        t("MOD-22-010", "Atajos de teclado para navegación rápida de fechas (Hoy, Siguiente semana, Mes)", "Agilidad máxima para recepción en momentos de atención telefónica rápida.", "Frontend", "FASE 1 — MVP", "ALTA")
    ],
    "MOD-26": [
        t("MOD-26-008", "Catálogo de tipos de corte por raza (Schnauzer, Caniche, Bichón, Cocker)", "Guía visual con fotos de referencia para estilistas y clientes.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA"),
        t("MOD-26-009", "Registro de comportamiento del animal en peluquería (miedo al agua, reactivo a turbina)", "Notas de seguridad para el groomer en futuras sesiones de baño.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA"),
        t("MOD-26-010", "Generación de tarjeta digital de baño y corte para redes sociales del tutor", "Tarjeta con diseño FurLife y fotos antes/después para compartir por WhatsApp.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA"),
        t("MOD-26-011", "Cálculo de comisión individual para estilistas por servicio concluido", "Módulo de liquidación quincenal o mensual para el área de estética.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA")
    ],
    "MOD-29": [
        t("MOD-29-009", "Diseñar selector de almacén predeterminado por área (Farmacia, Quirófano, Tienda)", "Asignar de qué almacén se descontarán los consumos según el rol y ubicación.", "Backend", "FASE 1 — MVP", "ALTA"),
        t("MOD-29-010", "Implementar reporte de Valorización Total del Inventario (al costo y a la venta)", "Conocer el valor financiero en mercancía inmovilizada en la clínica.", "Backend", "FASE 1 — MVP", "ALTA"),
        t("MOD-29-011", "Módulo de Conteos Físicos de Inventario con pistola de código de barras", "Comparar conteo real vs teórico y generar ajustes de merma auditables en un clic.", "Frontend", "FASE 2 — OPERACIÓN AVANZADA", "ALTA"),
        t("MOD-29-012", "Exportación de Kardex por producto a hoja de cálculo Excel", "Auditoría contable completa de cada entrada, salida y saldo.", "Backend", "FASE 1 — MVP", "ALTA")
    ],
    "MOD-33": [
        t("MOD-33-008", "Control de múltiples cajas simultáneas (Caja Mostrador 1, Mostrador 2, Peluquería)", "Soporte para clínicas grandes con varios puestos de recepción operando a la vez.", "Backend", "FASE 1 — MVP", "ALTA"),
        t("MOD-33-009", "Impresión de recibo térmico de egreso de caja chica", "Comprobante físico de salida de dinero para compras operativas menores.", "Frontend", "FASE 1 — MVP", "ALTA"),
        t("MOD-33-010", "Notificación automática por email o WhatsApp al director de clínica al cerrar caja", "Resumen ejecutivo con total recaudado, formas de pago y diferencias del turno.", "Backend", "FASE 1 — MVP", "ALTA")
    ],
    "MOD-34": [
        t("MOD-34-008", "Diseñar pantalla de búsqueda y reedición rápida de tickets del día", "Reimpresión de tickets o corrección de comprobantes recién emitidos.", "Frontend", "FASE 1 — MVP", "ALTA"),
        t("MOD-34-009", "Soporte para facturación masiva a final de mes para criaderos o convenios corporativos", "Agrupar todas las atenciones del mes de un cliente en una sola factura unificada.", "Backend", "FASE 2 — OPERACIÓN AVANZADA", "MEDIA"),
        t("MOD-34-010", "Validación estricta de folios fiscales correlativos sin huecos", "Garantizar cumplimiento legal fiscal en series numéricas continuas.", "Backend", "FASE 1 — MVP", "CRÍTICA")
    ]
}

for m in modules:
    mid = m["id"]
    if mid in extra_tasks_by_mod:
        m["tasks"].extend(extra_tasks_by_mod[mid])

total_tasks = sum(len(m["tasks"]) for m in modules)
print(f"Updated total modules: {len(modules)}")
print(f"Updated total tasks in modules: {total_tasks}")

output_js_path = os.path.join("js", "data-modules.js")
with open(output_js_path, "w", encoding="utf-8") as f:
    f.write("// FurLife Master Checklist - Data Modules (59 Modules)\n")
    f.write("// Generated automatically with exact structure and granular tasks\n")
    f.write("window.FURLIFE_MODULES = ")
    json.dump(modules, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Enhanced modules written successfully!")
