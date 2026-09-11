# -*- coding: utf-8 -*-
"""
generate_processes.py
Generates js/data-processes.js covering all 37 End-to-End processes with detailed workflows and technical tasks.
"""
import json
import os

def pt(tid, title, desc, cat, prio, phase="FASE 1 — MVP", deps=None):
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

processes = [
    # 1. Registrar una nueva clínica
    {
        "id": "E2E-01",
        "num": 1,
        "name": "Registrar una nueva clínica",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "El propietario o director médico de una clínica veterinaria ingresa a la landing page de FurLife y hace clic en 'Registrar mi Clínica'.",
        "steps": [
            "1. El usuario completa el formulario de registro institucional (Nombre clínica, Razón Social, RFC/NIT/CIF, país, ciudad, dirección, teléfono de contacto y correo institucional).",
            "2. El usuario define las credenciales del Administrador Maestro (Nombre, Apellidos, Cédula/Matrícula del Director Médico, email y contraseña segura).",
            "3. El sistema valida unicidad de email, formato fiscal y robustez de credenciales.",
            "4. Se crea en base de datos la organización (Tenant), la sede principal, el usuario administrador y se asigna el rol 'Director Médico / SuperAdmin'.",
            "5. Se inicializa el esquema de datos aislado (Row-Level Security) con catálogos por defecto (especies, razas, vademécum básico).",
            "6. Se despacha correo de verificación y bienvenida con token de activación de un solo uso.",
            "7. El usuario confirma su correo e inicia sesión por primera vez accediendo al Wizard de configuración inicial de FurLife."
        ],
        "data": "Razón social, RFC/NIT, dirección, geolocalización, logo institucional, datos del director médico, credenciales maestras, configuración de moneda y zona horaria.",
        "relatedModules": ["01. Arquitectura", "02. Registro y autenticación", "03. Roles y permisos", "05. Gestión de la clínica", "43. Configuración"],
        "expectedResult": "Clínica creada y aislada en el ecosistema FurLife, con su director médico logueado y lista para configurar sedes, empleados y servicios.",
        "techTasks": [
            pt("E2E-01-FE", "Construir Wizard de Onboarding de Clínica en Frontend", "Formulario reactivo multietapa con validaciones en tiempo real y subida de logotipo.", "Frontend", "CRÍTICA"),
            pt("E2E-01-BE", "Desarrollar endpoint transaccional de aprovisionamiento de Tenant", "Creación atómica de organización, usuario maestro, sede y catálogos iniciales en una transacción DB.", "Backend", "CRÍTICA"),
            pt("E2E-01-DB", "Definir constraints de unicidad y RLS para el nuevo Tenant", "Asegurar que el nuevo tenant_id quede indexado y aislado con Row Level Security.", "Base de Datos", "CRÍTICA"),
            pt("E2E-01-INT", "Integrar servicio de correo transaccional para bienvenida", "Plantilla HTML responsiva con enlace firmado de verificación de cuenta.", "Integraciones", "ALTA"),
            pt("E2E-01-SEC", "Implementar rate limit y validación anti-bot (Turnstile/reCAPTCHA)", "Evitar registros masivos automatizados de falsas clínicas.", "Seguridad", "CRÍTICA"),
            pt("E2E-01-QA", "Pruebas E2E de registro completo de clínica y verificación", "Test automatizado con Playwright desde el formulario público hasta el primer inicio de sesión.", "QA", "CRÍTICA")
        ]
    },

    # 2. Registrar un veterinario
    {
        "id": "E2E-02",
        "num": 2,
        "name": "Registrar un veterinario",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Un veterinario independiente se registra o un administrador de clínica añade un profesional médico a su plantilla.",
        "steps": [
            "1. El profesional completa sus datos personales y profesionales: Cédula/Matrícula profesional, Colegio veterinario, especialidades médicas y teléfono.",
            "2. Se sube o captura el trazo de la firma digital y el sello profesional para emitir recetas válidas.",
            "3. Se define el horario de consulta regular y los servicios que atiende (consultas generales, cirugías, urgencias).",
            "4. El sistema valida el formato de la matrícula médica y previene registros duplicados.",
            "5. Se crea el registro de Veterinario vinculado al Usuario y a la Clínica (si aplica) con rol 'Veterinario Titular'.",
            "6. Se habilita su agenda de atención en el calendario del sistema."
        ],
        "data": "Cédula profesional, especialidades, firma digitalizada, sello médico, franja horaria laboral, duración de consulta.",
        "relatedModules": ["04. Gestión del veterinario", "02. Autenticación", "03. Roles y permisos", "22. Agenda"],
        "expectedResult": "Veterinario con credenciales validadas, firma digital registrada y disponibilidad visible en la agenda para recibir citas.",
        "techTasks": [
            pt("E2E-02-FE", "Construir interfaz de captura de perfil profesional y canvas de firma digital", "Componente canvas para dibujar o subir firma y sello con previsualización en receta ficticia.", "Frontend", "CRÍTICA"),
            pt("E2E-02-BE", "Endpoints de perfil de veterinario y procesamiento de firma criptográfica", "Almacenamiento seguro cifrado de la firma médica en S3 con acceso restringido.", "Backend", "CRÍTICA"),
            pt("E2E-02-DB", "Diseñar esquema de Veterinario con vinculación polimórfica (Independiente/Clínica)", "Soporte para múltiples clínicas o práctica independiente.", "Base de Datos", "CRÍTICA"),
            pt("E2E-02-SEC", "Validación estricta de permisos de emisión de recetas médicas", "Asegurar que solo usuarios con matrícula verificada puedan activar su firma.", "Seguridad", "CRÍTICA"),
            pt("E2E-02-QA", "Pruebas de unicidad de matrícula médica y render de firma en PDF", "Verificar que la firma digital se estampe con fidelidad y resolución en reportes.", "QA", "ALTA")
        ]
    },

    # 3. Agregar un empleado
    {
        "id": "E2E-03",
        "num": 3,
        "name": "Agregar un empleado",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "trigger": "El administrador de la clínica necesita dar de alta a un recepcionista, auxiliar o peluquero en el sistema.",
        "steps": [
            "1. El administrador ingresa a 'Gestión de Empleados' y hace clic en 'Invitar Colaborador'.",
            "2. Selecciona el rol a asignar (Recepcionista, Auxiliar de Veterinaria, Estilista/Groomer) y sedes autorizadas.",
            "3. Ingresa el nombre y correo electrónico del empleado.",
            "4. FurLife genera un token criptográfico de invitación con validez de 48 horas y despacha un correo con enlace único.",
            "5. El empleado abre el enlace, establece su contraseña y confirma sus datos.",
            "6. El empleado ingresa a FurLife con los permisos estrictamente limitados a su rol (ej: recepcionista no ve diagnósticos reservados, estilista solo ve módulo de estética)."
        ],
        "data": "Nombre, correo corporativo, rol, sedes asignadas, esquema de comisiones (opcional).",
        "relatedModules": ["06. Gestión de empleados", "03. Roles y permisos", "02. Autenticación"],
        "expectedResult": "Empleado activado en el sistema con su cuenta vinculada a la clínica y permisos granulares según su función operativa.",
        "techTasks": [
            pt("E2E-03-FE", "Modal de invitación y tabla de colaboradores con filtros", "Listado con estados 'Pendiente de aceptación', 'Activo', 'Desactivado'.", "Frontend", "ALTA"),
            pt("E2E-03-BE", "Servicio de generación y canje de tokens de invitación de empleados", "Validación de expiración y creación segura del registro de usuario.", "Backend", "ALTA"),
            pt("E2E-03-DB", "Relación M:N entre Usuario, Empleado, Roles y Clínicas", "Control de integridad referencial para revocaciones inmediatas.", "Base de Datos", "ALTA"),
            pt("E2E-03-SEC", "Control de escalado de privilegios: un empleado no puede invitar a un rol superior al suyo", "Validación estricta en capa de servicios.", "Seguridad", "CRÍTICA"),
            pt("E2E-03-QA", "Pruebas de caducidad y reutilización de tokens de invitación", "Garantizar que un enlace usado o expirado no permita crear cuentas.", "QA", "ALTA")
        ]
    },

    # 4. Registrar un propietario
    {
        "id": "E2E-04",
        "num": 4,
        "name": "Registrar un propietario",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Un cliente llega a recepción por primera vez o se comunica para solicitar atención.",
        "steps": [
            "1. Recepcionista abre el modal de 'Nuevo Propietario' o inicia el registro rápido.",
            "2. Digita teléfono o documento de identidad; el sistema valida predictivamente que no esté registrado previamente.",
            "3. Se capturan nombres, apellidos, teléfono principal, WhatsApp, correo y dirección completa.",
            "4. Se registra el consentimiento del tutor para envío de recordatorios y tratamiento de datos personales.",
            "5. Se crea el registro del propietario en base de datos vinculado a la clínica.",
            "6. La interfaz redirige de inmediato a la captura de su primera mascota sin perder el contexto."
        ],
        "data": "Nombre completo, identificación fiscal/DNI, teléfono, WhatsApp, email, domicilio, consentimiento RGPD.",
        "relatedModules": ["07. Propietarios/clientes", "46. Protección de datos", "08. Mascotas/pacientes"],
        "expectedResult": "Propietario registrado con éxito, sin duplicados y listo para asociarle sus mascotas.",
        "techTasks": [
            pt("E2E-04-FE", "Formulario rápido de admisión de propietario con autocompletado", "Optimizado para captura en menos de 45 segundos en recepción.", "Frontend", "CRÍTICA"),
            pt("E2E-04-BE", "Endpoint de creación de cliente con normalización de números de teléfono (E.164)", "Garantizar formato internacional estándar para WhatsApp.", "Backend", "CRÍTICA"),
            pt("E2E-04-DB", "Índices únicos compuestos (tenant_id, telefono) y (tenant_id, email)", "Evitar duplicación de clientes dentro de la misma clínica.", "Base de Datos", "CRÍTICA"),
            pt("E2E-04-SEC", "Registro auditable de aceptación de términos y privacidad", "Almacenar timestamp, IP y versión legal aceptada.", "Seguridad", "ALTA"),
            pt("E2E-04-QA", "Pruebas de detección de clientes duplicados en tiempo real", "Validar advertencia inmediata cuando se digita un teléfono existente.", "QA", "ALTA")
        ]
    },

    # 5. Registrar una nueva mascota
    {
        "id": "E2E-05",
        "num": 5,
        "name": "Registrar una nueva mascota",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Se ingresa un nuevo paciente animal al sistema asociado al tutor.",
        "steps": [
            "1. Desde la ficha del propietario o modal global, se abre 'Nueva Mascota'.",
            "2. Se selecciona especie (Canino, Felino, Exótico) y raza desde el catálogo estandarizado.",
            "3. Se capturan: nombre, sexo, estado reproductivo (entero/castrado), fecha de nacimiento o edad estimada, peso inicial y color.",
            "4. Si tiene microchip, se ingresa el código de 15 dígitos con validación de norma ISO.",
            "5. Se sube una fotografía del paciente con recorte automático centrado.",
            "6. Se marcan alertas críticas iniciales (ej: agresivo con otros animales, alérgico a penicilinas).",
            "7. Se crea el expediente clínico electrónico único de la mascota."
        ],
        "data": "Nombre, especie, raza, sexo, estado reproductivo, fecha nacimiento, peso, color, microchip, foto, alertas clínicas, ID tutor.",
        "relatedModules": ["08. Mascotas/pacientes", "09. Historia clínica", "07. Propietarios/clientes"],
        "expectedResult": "Mascota creada con identificador único, expediente médico inicializado y visible en el perfil del tutor.",
        "techTasks": [
            pt("E2E-05-FE", "Formulario ergonómico de paciente con selector visual de especie y raza", "Cálculo dinámico de edad exacta en años y meses.", "Frontend", "CRÍTICA"),
            pt("E2E-05-BE", "Servicio de alta de paciente e inicialización de expediente médico", "Generación de código único y enlace con el historial clínico.", "Backend", "CRÍTICA"),
            pt("E2E-05-DB", "Esquema relacional de Paciente con claves foráneas e índices de búsqueda", "Indexación por microchip, nombre y tutor_id.", "Base de Datos", "CRÍTICA"),
            pt("E2E-05-INT", "Procesamiento y compresión de fotografía del paciente en S3", "Redimensionar imagen a formato WebP optimizado.", "Integraciones", "ALTA"),
            pt("E2E-05-QA", "Pruebas de validación de microchip ISO y cálculo de fechas de nacimiento", "Asegurar que fechas futuras o formatos inválidos sean rechazados.", "QA", "ALTA")
        ]
    },

    # 6. Crear una cita
    {
        "id": "E2E-06",
        "num": 6,
        "name": "Crear una cita",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "El tutor llama a la clínica o solicita agendar una consulta médica, vacuna o servicio de estética.",
        "steps": [
            "1. Recepcionista o veterinario hace clic en un slot disponible de la agenda o pulsa 'Nueva Cita'.",
            "2. Busca al tutor o mascota por nombre, teléfono o microchip.",
            "3. Selecciona el servicio a realizar (Consulta general, Vacuna, Cirugía, Peluquería).",
            "4. El sistema sugiere la duración estándar del servicio y verifica que el profesional y sala estén libres.",
            "5. Se ingresa el motivo o notas adicionales referidas por el tutor.",
            "6. Se guarda la cita en estado 'Programada'.",
            "7. La cita se dibuja en la agenda con el color representativo del servicio.",
            "8. Se agenda el recordatorio automático para el cliente."
        ],
        "data": "Tutor_id, mascota_id, servicio_id, veterinario/estilista_id, sala/box, fecha, hora inicio, hora fin, motivo.",
        "relatedModules": ["22. Agenda", "23. Citas", "25. Servicios veterinarios", "38. Notificaciones"],
        "expectedResult": "Cita registrada en calendario sin solapamientos, visible para todo el equipo y programada para recordatorio.",
        "techTasks": [
            pt("E2E-06-FE", "Modal reactivo de reserva de citas con selector de horarios disponibles", "Detección visual inmediata de franjas horarias ocupadas.", "Frontend", "CRÍTICA"),
            pt("E2E-06-BE", "Algoritmo de validación de conflictos de agenda y disponibilidad de recursos", "Bloqueo optimista de slots para evitar agendamiento duplicado simultáneo.", "Backend", "CRÍTICA"),
            pt("E2E-06-DB", "Constraint de exclusión de rango temporal en PostgreSQL (tstzrange)", "Garantizar a nivel de base de datos que no existan solapes horarios.", "Base de Datos", "CRÍTICA"),
            pt("E2E-06-QA", "Pruebas de concurrencia al agendar el mismo horario desde dos navegadores", "Validar que una de las solicitudes sea rechazada limpiamente con aviso explicativo.", "QA", "CRÍTICA")
        ]
    },

    # 7. Confirmar una cita
    {
        "id": "E2E-07",
        "num": 7,
        "name": "Confirmar una cita",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "trigger": "El cliente responde al mensaje de recordatorio o recepción realiza llamada de confirmación.",
        "steps": [
            "1. Recepción visualiza las citas del día siguiente en la agenda.",
            "2. El tutor pulsa 'Confirmar' en el mensaje interactivo de WhatsApp o la recepcionista cambia manualmente el estado.",
            "3. El estado de la cita pasa de 'Programada' a 'Confirmada'.",
            "4. La tarjeta de la cita en la agenda cambia de color/icono (verde de confirmación).",
            "5. Se actualizan las métricas de previsión de asistencia del día en el dashboard."
        ],
        "data": "Cita_id, fecha confirmación, método de confirmación (WhatsApp automático, llamada manual).",
        "relatedModules": ["23. Citas", "22. Agenda", "39. Comunicación con propietarios"],
        "expectedResult": "Cita marcada como confirmada con trazabilidad del canal utilizado.",
        "techTasks": [
            pt("E2E-07-FE", "Botón de acción rápida en tarjeta de cita para confirmar con 1 clic", "Feedback visual inmediato con transición suave.", "Frontend", "ALTA"),
            pt("E2E-07-BE", "Endpoint y webhook de confirmación externa de citas", "Procesar respuesta automática recibida desde la API de mensajería.", "Backend", "ALTA"),
            pt("E2E-07-QA", "Pruebas de cambio de estado y actualización en tiempo real en la pantalla del médico", "Verificar que el veterinario vea la confirmación sin recargar la página.", "QA", "ALTA")
        ]
    },

    # 8. Atender una consulta
    {
        "id": "E2E-08",
        "num": 8,
        "name": "Atender una consulta",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "El paciente ingresa al consultorio tras esperar en recepción.",
        "steps": [
            "1. El veterinario abre su dashboard y ve al paciente en 'Sala de Espera'.",
            "2. Pulsa 'Iniciar Consulta'; la cita cambia de estado a 'En Consulta' y se registra la hora exacta.",
            "3. Se abre la pantalla clínica de atención estructurada SOAP.",
            "4. El veterinario revisa en la barra lateral los antecedentes médicos, vacunas vigentes y alertas críticas.",
            "5. Captura los signos vitales actuales (peso, temperatura, FC, FR, mucosas, condición corporal).",
            "6. Escribe la anamnesis (motivo de consulta, evolución del cuadro clínico).",
            "7. Realiza y documenta el examen físico sistemático por órganos y sistemas.",
            "8. Establece el diagnóstico presuntivo o definitivo.",
            "9. Redacta el plan de tratamiento y prescribe fármacos o procedimientos.",
            "10. Guarda y finaliza la consulta médica. La cita pasa a 'Finalizada' y los cargos se envían a caja."
        ],
        "data": "Signos vitales, anamnesis (S), examen físico (O), diagnósticos (A), plan médico (P), recetas prescritas, insumos usados.",
        "relatedModules": ["10. Consultas veterinarias", "11. Signos vitales", "12. Diagnósticos", "16. Recetas", "09. Historia clínica", "34. Facturación"],
        "expectedResult": "Acto médico registrado integralmente en el expediente del paciente, receta emitida y cuenta enviada a recepción para cobro.",
        "techTasks": [
            pt("E2E-08-FE", "Desarrollar interfaz integral de consulta SOAP con auto-guardado", "Evitar pérdida de texto ante caídas de conexión con almacenamiento local en borrador.", "Frontend", "CRÍTICA"),
            pt("E2E-08-BE", "Servicio orquestador de finalización de consulta médica", "Cierre atómico: guardar consulta, congelar expediente, generar receta y crear orden de cobro en caja.", "Backend", "CRÍTICA"),
            pt("E2E-08-DB", "Transacción DB para vincular consulta, constantes vitales y prescripción", "Garantizar atomicidad ACID.", "Base de Datos", "CRÍTICA"),
            pt("E2E-08-SEC", "Control estricto de autoría médica (solo el médico tratante puede firmar la consulta)", "Validación criptográfica de sesión y token.", "Seguridad", "CRÍTICA"),
            pt("E2E-08-QA", "Pruebas de flujo completo de consulta médica con auto-recuperación de borrador", "Simular cierre de pestaña inesperado y recuperar el texto al reabrir.", "QA", "CRÍTICA")
        ]
    },

    # 9. Crear historia clínica
    {
        "id": "E2E-09",
        "num": 9,
        "name": "Crear historia clínica",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Se asocia el expediente médico permanente a un nuevo paciente registrado.",
        "steps": [
            "1. Al registrar el paciente, el sistema genera la cabecera de Historia Clínica con un número correlativo único.",
            "2. Se establece la estructura cronológica donde convergerán todas las atenciones.",
            "3. Se registran los antecedentes basales: enfermedades previas, cirugías pasadas, estado de vacunación inicial.",
            "4. Se inicializa el registro de auditoría de accesos al expediente."
        ],
        "data": "Folio expediente, fecha creación, antecedentes hereditarios, alergias basales, patologías crónicas.",
        "relatedModules": ["09. Historia clínica", "08. Mascotas/pacientes", "45. Auditoría"],
        "expectedResult": "Expediente médico unificado listo para recibir entradas inmutables a lo largo de toda la vida del animal.",
        "techTasks": [
            pt("E2E-09-FE", "Línea de tiempo médica interactiva con filtros de eventos", "Visualización limpia de consultas, cirugías, vacunas y analíticas.", "Frontend", "CRÍTICA"),
            pt("E2E-09-BE", "Motor de compilación cronológica de eventos médicos del paciente", "Agregador de alto rendimiento para consultas, recetas y archivos adjuntos.", "Backend", "CRÍTICA"),
            pt("E2E-09-DB", "Diseño polimórfico de eventos del historial médico", "Índices en (paciente_id, fecha_evento DESC) para carga instantánea.", "Base de Datos", "CRÍTICA"),
            pt("E2E-09-QA", "Pruebas de orden cronológico estricto y renderizado de timeline", "Validar presentación ordenada de múltiples eventos en un mismo día.", "QA", "ALTA")
        ]
    },

    # 10. Crear diagnóstico
    {
        "id": "E2E-10",
        "num": 10,
        "name": "Crear diagnóstico",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "El veterinario concluye el análisis clínico de los síntomas y pruebas del paciente.",
        "steps": [
            "1. En la pestaña 'Análisis/Diagnóstico' de la consulta, el médico comienza a teclear el nombre de la patología.",
            "2. El buscador predictivo muestra coincidencias del catálogo ontológico veterinario.",
            "3. Selecciona la patología y define su estado: Presuntivo (por confirmar con pruebas), Definitivo o Crónico.",
            "4. Añade notas clínicas o diagnósticos diferenciales a descartar.",
            "5. El diagnóstico se vincula permanentemente a la consulta y actualiza la lista de antecedentes del paciente."
        ],
        "data": "Código patología, nombre, clasificación (presuntivo/definitivo), certeza médica, comentarios.",
        "relatedModules": ["12. Diagnósticos y antecedentes", "10. Consultas veterinarias"],
        "expectedResult": "Diagnóstico codificado y registrado en el historial para estadística epidemiológica y seguimiento clínico.",
        "techTasks": [
            pt("E2E-10-FE", "Componente tag-input de diagnóstico con autocompletado rápido", "Búsqueda en menos de 100ms sobre el catálogo ontológico.", "Frontend", "CRÍTICA"),
            pt("E2E-10-BE", "Endpoint de búsqueda de patologías con fuzzy matching", "Permitir encontrar diagnósticos incluso con errores tipográficos leves.", "Backend", "ALTA"),
            pt("E2E-10-DB", "Tabla de diagnósticos asociados con índices GIN en texto", "Búsqueda de texto completo eficiente en español.", "Base de Datos", "ALTA"),
            pt("E2E-10-QA", "Pruebas de asignación de diagnósticos múltiples y crónicos", "Verificar que diagnósticos crónicos persistan en la carátula del expediente.", "QA", "ALTA")
        ]
    },

    # 11. Crear receta
    {
        "id": "E2E-11",
        "num": 11,
        "name": "Crear receta",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "El veterinario prescribe el tratamiento farmacológico para el hogar.",
        "steps": [
            "1. En el plan terapéutico, el médico busca el fármaco en el vademécum.",
            "2. La calculadora posológica sugiere la dosis exacta basada en el peso del paciente.",
            "3. El médico ajusta o confirma: presentación, vía, frecuencia (cada X horas) y duración (X días).",
            "4. Añade instrucciones especiales de administración (ej: 'con las comidas', 'no suspender').",
            "5. El sistema estampa automáticamente el membrete de la clínica, los datos del profesional, su firma y sello.",
            "6. Se genera un código QR público de validación de autenticidad en el documento.",
            "7. Se imprime en papel o se despacha el PDF directamente al WhatsApp del tutor."
        ],
        "data": "Medicamento, principio activo, concentración, dosis, vía, intervalo horario, días tratamiento, firma médica, QR de validación.",
        "relatedModules": ["16. Recetas", "15. Medicamentos", "04. Gestión del veterinario", "39. Comunicación con propietarios"],
        "expectedResult": "Receta médica digital legalmente válida, clara para el propietario y accesible mediante código QR.",
        "techTasks": [
            pt("E2E-11-FE", "Constructor de recetas con cálculo automático de intervalos horarios", "Generador de frases legibles para tutores (ej: '1 pastilla cada 12 horas por 7 días').", "Frontend", "CRÍTICA"),
            pt("E2E-11-BE", "Generador server-side de PDF de receta de alta resolución con QR", "Renderizado vectorial rápido con firma digital incrustada.", "Backend", "CRÍTICA"),
            pt("E2E-11-SEC", "Firma criptográfica y verificación pública de receta sin autenticación", "Ruta pública para farmacias externas que escanean el QR de la receta.", "Seguridad", "CRÍTICA"),
            pt("E2E-11-QA", "Pruebas de escaneo de QR y descarga de PDF en teléfonos móviles", "Verificar legibilidad perfecta en pantallas pequeñas y papel.", "QA", "CRÍTICA")
        ]
    },

    # 12. Registrar vacunación
    {
        "id": "E2E-12",
        "num": 12,
        "name": "Registrar vacunación",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Un tutor acude a aplicar una dosis del esquema de inmunización de su mascota.",
        "steps": [
            "1. El veterinario abre la pestaña 'Vacunación' del paciente.",
            "2. Selecciona el biológico a aplicar (ej: Rabia, Séxtuple Canina, Triple Felina).",
            "3. El sistema lista los lotes vigentes en inventario; el veterinario selecciona el lote del frasco.",
            "4. Se registra fecha de aplicación, fecha de próximo refuerzo calculada automáticamente y notas de examen previo.",
            "5. Al guardar: se descuenta 1 unidad del lote específico en inventario farmacéutico.",
            "6. Se actualiza el Carnet de Vacunación del paciente y se envía el comprobante al tutor.",
            "7. Se programa la alerta del próximo refuerzo para despacharse 7 días antes."
        ],
        "data": "Biológico, marca, lote de fabricación, fecha caducidad del frasco, fecha aplicación, fecha próximo refuerzo, lote_id inventario.",
        "relatedModules": ["13. Vacunación", "29. Inventario", "32. Consumos", "38. Notificaciones"],
        "expectedResult": "Inmunización registrada, stock de vacuna descontado en tiempo real y recordatorio de refuerzo programado.",
        "techTasks": [
            pt("E2E-12-FE", "Formulario rápido de vacunación con carnet visual interactivo", "Representación gráfica tipo cartilla de vacunación con sellos.", "Frontend", "CRÍTICA"),
            pt("E2E-12-BE", "Transacción conjunta de registro de vacuna y deducción de stock FEFO", "Descontar automáticamente el lote más próximo a caducar.", "Backend", "CRÍTICA"),
            pt("E2E-12-DB", "Registro inmutable en historial de inmunizaciones", "Relación con la tabla de movimientos de inventario.", "Base de Datos", "CRÍTICA"),
            pt("E2E-12-QA", "Pruebas de bloqueo ante intento de aplicar un lote caducado", "Verificar que el sistema rechace el guardado si el frasco expiró.", "QA", "CRÍTICA")
        ]
    },

    # 13. Registrar procedimiento
    {
        "id": "E2E-13",
        "num": 13,
        "name": "Registrar procedimiento",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "trigger": "Se ejecuta una maniobra clínica menor en consultorio (limpieza de herida, vendaje, sondaje).",
        "steps": [
            "1. El médico ingresa a 'Procedimientos' en la consulta activa.",
            "2. Selecciona el procedimiento del catálogo (ej: Limpieza y desbridamiento de herida).",
            "3. Registra el material gastable utilizado (gasas, apósitos, lidocaína, solución salina).",
            "4. Anota la técnica empleada y la tolerancia del paciente.",
            "5. Se descuentan los insumos del almacén y se agrega el concepto a la cuenta de cobro."
        ],
        "data": "Tipo de procedimiento, insumos consumidos, duración, profesional a cargo, costo.",
        "relatedModules": ["17. Procedimientos", "32. Consumos", "29. Inventario", "34. Facturación"],
        "expectedResult": "Procedimiento documentado, material descontado de inventario y cargo listo para facturación.",
        "techTasks": [
            pt("E2E-13-FE", "Selector de procedimientos con lista de insumos asociados", "Posibilidad de marcar insumos opcionales usados en el acto.", "Frontend", "ALTA"),
            pt("E2E-13-BE", "Mapeo de insumos a movimientos de inventario por procedimiento", "Descargo por paquete de insumos estándar.", "Backend", "ALTA"),
            pt("E2E-13-QA", "Pruebas de cobro y descargo consistente de procedimiento", "Verificar que el saldo en caja coincida con los insumos y mano de obra.", "QA", "ALTA")
        ]
    },

    # 14. Registrar cirugía
    {
        "id": "E2E-14",
        "num": 14,
        "name": "Registrar cirugía",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "trigger": "Un paciente es programado o ingresado a quirófano para una intervención quirúrgica.",
        "steps": [
            "1. Se emite y firma digitalmente el Consentimiento Quirúrgico Informado por el tutor.",
            "2. Se verifica el ayuno y las pruebas prequirúrgicas (hemograma, coagulograma, ecocardiograma).",
            "3. El anestesiólogo registra la premedicación, inducción y protocolo de mantenimiento anestésico.",
            "4. Se monitorizan y anotan constantes vitales transquirúrgicas periódicamente (SpO2, FC, temperatura).",
            "5. El cirujano documenta los hallazgos quirúrgicos, técnica de sutura y complicaciones.",
            "6. Se descuenta el kit de material quirúrgico e implantes usados.",
            "7. El paciente es transferido a sala de recuperación post-anestésica."
        ],
        "data": "Consentimiento firmado, protocolo anestésico, cirujano, anestesista, tiempo quirúrgico, descripción operatoria, suturas.",
        "relatedModules": ["18. Cirugías", "19. Hospitalización", "29. Inventario", "21. Documentos"],
        "expectedResult": "Hoja quirúrgica legal completa, consentimiento firmado archivado y paciente listo para cuidados postoperatorios.",
        "techTasks": [
            pt("E2E-14-FE", "Hoja transquirúrgica con gráficas de monitoreo anestésico en tiempo real", "Captura ágil de signos durante la intervención.", "Frontend", "CRÍTICA"),
            pt("E2E-14-BE", "Servicio de empaquetado y sellado del protocolo quirúrgico", "Almacenamiento seguro del consentimiento firmado.", "Backend", "CRÍTICA"),
            pt("E2E-14-SEC", "Verificación legal de consentimiento previo a iniciar el acto quirúrgico", "Advertencia roja obligatoria si no existe consentimiento firmado en el sistema.", "Seguridad", "CRÍTICA"),
            pt("E2E-14-QA", "Pruebas de validación de firma y sellado de hoja operatoria", "Asegurar que ningún dato de anestesia pueda borrarse tras la cirugía.", "QA", "CRÍTICA")
        ]
    },

    # 15. Ingresar paciente a hospitalización
    {
        "id": "E2E-15",
        "num": 15,
        "name": "Ingresar paciente a hospitalización",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "trigger": "Un paciente requiere cuidados intensivos, monitoreo postquirúrgico o fluidoterapia continua.",
        "steps": [
            "1. El médico tratante pulsa 'Hospitalizar Paciente' desde la consulta o quirófano.",
            "2. Selecciona la jaula/canil disponible en el mapa de hospitalización de la clínica.",
            "3. Registra el diagnóstico de ingreso, nivel de gravedad (Estable, Delicado, Crítico) y médico responsable.",
            "4. Define el plan terapéutico horario inicial: fluidoterapia, fármacos pautados, tipo de alimentación y frecuencia de chequeo.",
            "5. Se genera la pulsera hospitalaria con código QR del paciente.",
            "6. La jaula cambia a estado 'Ocupada' en el Censo de Hospitalización de la clínica."
        ],
        "data": "Jaula_id, diagnóstico ingreso, gravedad, fluidoterapia (ml/h), fármacos y horarios, pertenencias, médico a cargo.",
        "relatedModules": ["19. Hospitalización", "11. Signos vitales", "15. Medicamentos"],
        "expectedResult": "Paciente asignado a jaula física, visible en el censo con su plan horario de medicación inicializado.",
        "techTasks": [
            pt("E2E-15-FE", "Tablero interactivo de Censo de Jaulas de Hospitalización", "Visualización tipo cuadrícula con estados por color según gravedad del paciente.", "Frontend", "CRÍTICA"),
            pt("E2E-15-BE", "Servicio de admisión a hospitalización y asignación de jaula física", "Control de disponibilidad para evitar ingresar dos animales en la misma jaula.", "Backend", "CRÍTICA"),
            pt("E2E-15-QA", "Pruebas de cambio de estado de jaulas y prevención de doble ocupación", "Validar concurrencia al asignar jaulas en momentos de alta ocupación.", "QA", "CRÍTICA")
        ]
    },

    # 16. Registrar evolución de hospitalización
    {
        "id": "E2E-16",
        "num": 16,
        "name": "Registrar evolución de hospitalización",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "trigger": "El enfermero o veterinario de turno realiza la ronda horaria de cuidados a los pacientes internados.",
        "steps": [
            "1. El profesional escanea el QR de la jaula o abre el paciente en el censo.",
            "2. Visualiza el checklist horario de tareas pendientes (Kardex): medicación de las 14:00, cambio de suero, paseo sanitario.",
            "3. Registra los signos vitales actuales, producción de orina/heces, apetito y actitud.",
            "4. Marca las dosis de medicamentos aplicadas; el sistema descuenta los viales o pastillas de inventario.",
            "5. Escribe la nota de evolución del turno y adjunta foto del estado del paciente.",
            "6. Se genera un informe resumido automático listo para informar al tutor."
        ],
        "data": "Hora registro, signos vitales, medicamentos administrados, balance hídrico, notas de evolución, fotos.",
        "relatedModules": ["19. Hospitalización", "32. Consumos", "39. Comunicación con propietarios"],
        "expectedResult": "Hoja de evolución actualizada al minuto, fármacos descontados y registro auditable por turno de enfermería.",
        "techTasks": [
            pt("E2E-16-FE", "Hoja de registro horario móvil para auxiliares (Kardex touch)", "Optimizada para tablets con botones grandes de fácil pulsación en área de jaulas.", "Frontend", "CRÍTICA"),
            pt("E2E-16-BE", "Servicio de registro de evolución y deducción horaria de stock de fármacos", "Actualización en tiempo real del censo para los médicos.", "Backend", "CRÍTICA"),
            pt("E2E-16-QA", "Pruebas de sincronización de rondas horarias de medicación", "Validar que alertas de dosis omitidas se muestren claramente en amarillo/rojo.", "QA", "CRÍTICA")
        ]
    },

    # 17. Dar de alta al paciente
    {
        "id": "E2E-17",
        "num": 17,
        "name": "Dar de alta al paciente",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "trigger": "El paciente hospitalizado se encuentra clínicamente estable para regresar a su hogar.",
        "steps": [
            "1. El médico veterinario evalúa al paciente y decide el 'Alta Médica'.",
            "2. Redacta el Informe de Alta Hospitalaria con epicrisis, resumen de evolución y recomendaciones para el tutor.",
            "3. Emite la receta digital para el tratamiento ambulatorio en casa y programa la cita de revisión.",
            "4. El sistema libera la jaula en el censo marcándola como 'Requiere Desinfección'.",
            "5. Se totalizan todos los días de estancia, honorarios de cuidados y medicamentos aplicados enviándolos a caja.",
            "6. Se entrega el paciente al tutor junto con su informe de alta impreso o por WhatsApp."
        ],
        "data": "Epicrisis médica, fecha/hora de alta, indicaciones para el hogar, receta ambulatoria, liquidación total de gastos.",
        "relatedModules": ["19. Hospitalización", "16. Recetas", "34. Facturación", "33. Caja"],
        "expectedResult": "Paciente dado de alta médica, jaula liberada, cuenta total liquidada y recomendaciones entregadas.",
        "techTasks": [
            pt("E2E-17-FE", "Formulario de Alta con previsualización del informe de epicrisis", "Diseño profesional imprimible para el propietario.", "Frontend", "CRÍTICA"),
            pt("E2E-17-BE", "Proceso transaccional de alta hospitalaria y liquidación de cargos", "Cierre simultáneo de estancia y generación del ticket maestro de cobro.", "Backend", "CRÍTICA"),
            pt("E2E-17-QA", "Pruebas de liquidación exacta de días y noches de estancia hospitalaria", "Verificar que fracciones de día se calculen según las reglas configuradas.", "QA", "CRÍTICA")
        ]
    },

    # 18. Solicitar/registrar examen
    {
        "id": "E2E-18",
        "num": 18,
        "name": "Solicitar/registrar examen",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "trigger": "El veterinario requiere analíticas de sangre, orina, biopsia o estudio radiográfico.",
        "steps": [
            "1. En la consulta o módulo de laboratorios, se genera una 'Nueva Solicitud de Examen'.",
            "2. Se seleccionan las pruebas requeridas (ej: Perfil Bioquímico Completo + Hemograma).",
            "3. Se especifica si se procesará en analizador interno de la clínica o se enviará a laboratorio de referencia externo.",
            "4. Se imprimen las etiquetas de tubos con código de barras identificador del paciente.",
            "5. La orden queda en estado 'Muestra Tomada / En Espera de Resultados'."
        ],
        "data": "Pruebas solicitadas, tipo de muestra (sangre EDTA, suero, orina), laboratorio destino, urgencia, código de barras.",
        "relatedModules": ["20. Exámenes de laboratorio", "10. Consultas veterinarias"],
        "expectedResult": "Orden analítica generada con etiquetas de muestra identificadas y estado trazable.",
        "techTasks": [
            pt("E2E-18-FE", "Selector de catálogo de pruebas analíticas con búsqueda rápida", "Agrupación en perfiles frecuentes (perfil geriátrico, perfil prequirúrgico).", "Frontend", "ALTA"),
            pt("E2E-18-BE", "Servicio de generación de órdenes analíticas e impresión de códigos de barras", "Generación de folios únicos para tubos y muestras.", "Backend", "ALTA"),
            pt("E2E-18-QA", "Pruebas de flujo de emisión de solicitud e impresión de etiquetas", "Asegurar compatibilidad con impresoras de etiquetas de 50x25mm.", "QA", "ALTA")
        ]
    },

    # 19. Adjuntar resultado
    {
        "id": "E2E-19",
        "num": 19,
        "name": "Adjuntar resultado",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "trigger": "Llega el informe del laboratorio externo o concluye el análisis de la muestra interna.",
        "steps": [
            "1. El personal busca la orden pendiente por folio o nombre de paciente.",
            "2. Se cargan los valores numéricos de los parámetros o se arrastra el informe PDF del laboratorio.",
            "3. El sistema coteja automáticamente los valores contra los rangos de referencia fisiológicos de la especie.",
            "4. Los parámetros alterados (ej: Creatinina alta, Leucocitos elevados) se resaltan en rojo con flechas indicadoras.",
            "5. El veterinario escribe su interpretación clínica del resultado.",
            "6. La orden pasa a estado 'Completada' y se anexa a la línea de tiempo del expediente del paciente."
        ],
        "data": "Valores por parámetro, rangos de referencia, archivo PDF/imagen adjunto, interpretación médica.",
        "relatedModules": ["20. Exámenes de laboratorio", "21. Documentos", "09. Historia clínica"],
        "expectedResult": "Resultados registrados, anomalías resaltadas y documento vinculado al expediente para consulta del médico.",
        "techTasks": [
            pt("E2E-19-FE", "Visor de laboratorio con detector visual de valores alterados y visor PDF", "Interfaz comparativa entre resultados y rangos de normalidad.", "Frontend", "ALTA"),
            pt("E2E-19-BE", "Servicio de parseo y almacenamiento seguro de analíticas en S3", "Asociación directa con la orden clínica existente.", "Backend", "ALTA"),
            pt("E2E-19-QA", "Pruebas de alerta de valores críticos en analíticas", "Validar que valores extremos disparen badge de advertencia al médico tratante.", "QA", "ALTA")
        ]
    },

    # 20. Crear factura
    {
        "id": "E2E-20",
        "num": 20,
        "name": "Crear factura",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "El tutor pasa por mostrador de recepción al finalizar la consulta o compra productos de tienda.",
        "steps": [
            "1. Recepción abre la cuenta del paciente o crea una nueva venta en el Punto de Venta (POS).",
            "2. El sistema carga automáticamente las prestaciones pendientes de cobro (consulta, vacunas aplicadas, medicamentos).",
            "3. El cajero agrega productos de retail (alimento, premios) escaneando el código de barras.",
            "4. Se aplican descuentos autorizados si aplican (ej: convenio, promoción).",
            "5. Se calcula subtotal, impuestos aplicables según la legislación local y total neto.",
            "6. Se selecciona comprobante: Ticket de Venta o Factura Fiscal con datos fiscales del cliente.",
            "7. Se emite la factura y se pasa a la pantalla de recepción de pagos."
        ],
        "data": "Cliente, paciente, renglones (servicios y productos), precios unitarios, descuentos, IVA, total a pagar.",
        "relatedModules": ["34. Facturación", "33. Caja", "30. Productos", "25. Servicios veterinarios"],
        "expectedResult": "Comprobante generado con cálculo exacto de impuestos, vinculado al cliente y listo para liquidación.",
        "techTasks": [
            pt("E2E-20-FE", "Punto de Venta (POS) rápido para recepción con soporte de lector de barras", "Diseño ágil con teclado numérico y búsqueda instantánea de conceptos.", "Frontend", "CRÍTICA"),
            pt("E2E-20-BE", "Motor de cálculo fiscal de renglones, bases imponibles y descuentos", "Garantizar redondeo matemático conforme a normativa contable.", "Backend", "CRÍTICA"),
            pt("E2E-20-DB", "Tablas de facturas y renglones con congelamiento de precios históricos", "Asegurar que cambios futuros en catálogo no alteren ventas pasadas.", "Base de Datos", "CRÍTICA"),
            pt("E2E-20-QA", "Pruebas de cálculo de impuestos y aplicación de promociones", "Validar exactitud al céntimo en carritos con múltiples tasas impositivas.", "QA", "CRÍTICA")
        ]
    },

    # 21. Registrar pago
    {
        "id": "E2E-21",
        "num": 21,
        "name": "Registrar pago",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "El cliente procede a liquidar el importe de su factura o abonar a su cuenta.",
        "steps": [
            "1. En el POS se selecciona el método de pago: Efectivo, Tarjeta de Crédito/Débito, Transferencia Bancaria o Pago Dividido.",
            "2. Si es en efectivo: se digita el monto entregado; el sistema calcula el cambio/vuelto exacto en pantalla.",
            "3. Si es tarjeta o transferencia: se anota el número de autorización o referencia bancaria.",
            "4. Se procesa la transacción; la factura pasa a estado 'Pagada'.",
            "5. El movimiento de ingreso se suma inmediatamente a la Sesión de Caja activa del turno.",
            "6. Se imprime el ticket térmico o se envía el comprobante por WhatsApp/Email."
        ],
        "data": "Factura_id, método de pago, importe recibido, cambio devuelto, referencia bancaria, caja_id.",
        "relatedModules": ["35. Pagos", "33. Caja", "34. Facturación"],
        "expectedResult": "Pago liquidado, saldo de cliente en cero, dinero reflejado en arqueo de caja y ticket emitido.",
        "techTasks": [
            pt("E2E-21-FE", "Modal ergonómico de liquidación con cálculo de vuelto y pago mixto", "Soporte para pagar una parte en efectivo y otra con tarjeta.", "Frontend", "CRÍTICA"),
            pt("E2E-21-BE", "Servicio transaccional de registro de pago y conciliación de caja", "Garantizar que el ingreso se sume a la sesión de caja abierta correspondiente.", "Backend", "CRÍTICA"),
            pt("E2E-21-QA", "Pruebas de pagos parciales y actualización de saldos pendientes", "Validar que la deuda se descuente con precisión en abonos sucesivos.", "QA", "CRÍTICA")
        ]
    },

    # 22. Registrar consumo de medicamento
    {
        "id": "E2E-22",
        "num": 22,
        "name": "Registrar consumo de medicamento",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Un médico aplica un inyectable o administra una dosis en consultorio o quirófano.",
        "steps": [
            "1. En la atención clínica, el profesional pulsa 'Aplicar Medicamento'.",
            "2. Selecciona el fármaco del almacén de farmacia (ej: Meloxicam inyectable 0.5%).",
            "3. Registra el volumen aplicado (ej: 0.8 ml).",
            "4. El sistema calcula la fracción consumida del frasco y genera el movimiento de salida.",
            "5. Se asocia el costo del consumo al expediente del paciente y a la cuenta de cobro."
        ],
        "data": "Paciente, fármaco, volumen/dosis administrada, lote de procedencia, profesional, costo.",
        "relatedModules": ["32. Consumos de productos", "15. Medicamentos", "29. Inventario"],
        "expectedResult": "Salida registrada con lote y fracción consumida, reflejada en el historial médico del animal.",
        "techTasks": [
            pt("E2E-22-FE", "Componente de consumo directo de medicamentos con fracciones y unidades", "Conversión inteligente de dosis por mililitro o miligramo.", "Frontend", "CRÍTICA"),
            pt("E2E-22-BE", "Servicio de fraccionamiento y cálculo de costo de consumos médicos", "Soporte para fármacos multidosis (frascos compartidos).", "Backend", "CRÍTICA"),
            pt("E2E-22-QA", "Pruebas de deducción de frascos multidosis sin discrepancias", "Asegurar que múltiples dosis pequeñas agoten el frasco correctamente.", "QA", "ALTA")
        ]
    },

    # 23. Descontar inventario automáticamente
    {
        "id": "E2E-23",
        "num": 23,
        "name": "Descontar inventario automáticamente",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Se confirma una venta en POS, se aplica una vacuna o se finaliza un procedimiento clínico.",
        "steps": [
            "1. El evento de dominio 'VentaRealizada' o 'VacunaAplicada' es publicado en el sistema.",
            "2. El motor de inventario intercepta el evento e identifica el almacén correspondiente.",
            "3. Aplica la estrategia FEFO (First-Expired, First-Out) seleccionando las existencias del lote más próximo a caducar.",
            "4. Se genera un registro inmutable en la tabla de Movimientos de Kardex (tipo SALIDA).",
            "5. Se decrementa el stock actual del producto.",
            "6. Se evalúa si el nuevo saldo cae por debajo del umbral de stock mínimo configurado."
        ],
        "data": "Producto_id, almacén_id, cantidad, lote_id, motivo salida, referencia de orden.",
        "relatedModules": ["29. Inventario", "32. Consumos", "34. Facturación"],
        "expectedResult": "Stock descontado en milisegundos con trazabilidad de lote y sin desfases en Kardex.",
        "techTasks": [
            pt("E2E-23-BE", "Motor de Kardex transaccional con selección algorítmica FEFO", "Asegurar bloqueo de fila (SELECT ... FOR UPDATE) para evitar condiciones de carrera.", "Backend", "CRÍTICA"),
            pt("E2E-23-DB", "Tabla inmutable de Kardex con triggers de auditoría de existencias", "Consistencia estricta del inventario.", "Base de Datos", "CRÍTICA"),
            pt("E2E-23-QA", "Pruebas de alta concurrencia en ventas del mismo lote de producto", "Validar que el stock jamás resulte negativo bajo cargas extremas.", "QA", "CRÍTICA")
        ]
    },

    # 24. Detectar stock bajo
    {
        "id": "E2E-24",
        "num": 24,
        "name": "Detectar stock bajo",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "trigger": "Una salida de producto hace que el stock disponible sea menor o igual al stock mínimo definido.",
        "steps": [
            "1. El trigger de inventario detecta: Stock_Actual <= Stock_Minimo.",
            "2. El producto se marca visualmente con el badge amarillo/rojo de 'Stock Bajo'.",
            "3. Se genera una notificación en el Centro de Notificaciones para el encargado de compras.",
            "4. El producto se agrega automáticamente a la lista de 'Sugerencias para Orden de Compra'.",
            "5. El widget de inventario en el Dashboard principal actualiza el contador de artículos críticos."
        ],
        "data": "Producto, stock actual, stock mínimo, proveedor habitual, tiempo de reposición.",
        "relatedModules": ["29. Inventario", "30. Productos", "31. Proveedores", "38. Notificaciones"],
        "expectedResult": "Alerta visible al instante y producto preseleccionado para reabastecimiento sin quiebres de stock.",
        "techTasks": [
            pt("E2E-24-FE", "Widget de alertas de stock crítico en Dashboard con acceso a reabastecer", "Filtro rápido de 'Productos bajo mínimos' en inventario.", "Frontend", "ALTA"),
            pt("E2E-24-BE", "Evaluador reactivo de umbrales de stock y generación de alertas", "Despacho de eventos de notificación interna al administrador.", "Backend", "ALTA"),
            pt("E2E-24-QA", "Pruebas de disparo de alertas al cruzar el umbral mínimo", "Verificar que la alerta se desactive al ingresar una compra.", "QA", "ALTA")
        ]
    },

    # 25. Detectar producto próximo a vencer
    {
        "id": "E2E-25",
        "num": 25,
        "name": "Detectar producto próximo a vencer",
        "phase": "FASE 1 — MVP",
        "priority": "ALTA",
        "trigger": "El cron diario nocturno evalúa las fechas de caducidad de todos los lotes en almacenes.",
        "steps": [
            "1. El worker analiza todos los lotes con saldo mayor a cero y compara la fecha de caducidad contra la fecha actual.",
            "2. Clasifica lotes en ventanas de riesgo: Vencidos (<= hoy), Críticos (<= 30 días), Alerta (<= 60 días).",
            "3. Si hay productos por caducar, se actualiza el semáforo en el módulo de inventario.",
            "4. Se envía un resumen al director médico y encargado de farmacia.",
            "5. Los fármacos vencidos se bloquean automáticamente para impedir su prescripción o venta accidental."
        ],
        "data": "Lote, fecha caducidad, días restantes, unidades en existencia, almacén, costo en riesgo.",
        "relatedModules": ["29. Inventario", "15. Medicamentos", "38. Notificaciones"],
        "expectedResult": "Fármacos próximos a caducar identificados a tiempo y lotes vencidos bloqueados para seguridad del paciente.",
        "techTasks": [
            pt("E2E-25-BE", "Cron job diario de evaluación de caducidades y bloqueo preventivo", "Servicio en segundo plano que actualiza estados de lotes.", "Backend", "ALTA"),
            pt("E2E-25-FE", "Panel de caducidades con filtros por días restantes y exportación", "Vista gerencial para rotar o devolver mercadería al laboratorio.", "Frontend", "ALTA"),
            pt("E2E-25-QA", "Pruebas de bloqueo automático de venta de lotes vencidos", "Verificar que el POS arroje error si se intenta vender un frasco expirado.", "QA", "CRÍTICA")
        ]
    },

    # 26. Registrar servicio de estética
    {
        "id": "E2E-26",
        "num": 26,
        "name": "Registrar servicio de estética",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "trigger": "Un tutor lleva a su mascota para servicio de baño, corte de pelo, deslanado o spa.",
        "steps": [
            "1. El recepcionista o estilista abre la Ficha de Estética del paciente.",
            "2. Revisa el historial de cortes previos y fotos de sesiones anteriores.",
            "3. Selecciona el servicio contratado (Baño medicado, Corte de raza, Deslanado, Uñas, Limpieza de oídos).",
            "4. Se realiza la inspección inicial del manto, piel y comportamiento.",
            "5. Se toma la fotografía del 'Antes' con la tablet o celular de la peluquería.",
            "6. Se define el estilista responsable y se inicia el servicio."
        ],
        "data": "Mascota, tutor, servicio de peluquería, tipo de corte, champú especial, estilista, foto inicial.",
        "relatedModules": ["26. Estética canina y felina", "22. Agenda", "08. Mascotas/pacientes"],
        "expectedResult": "Servicio de peluquería iniciado con registro fotográfico inicial y especificaciones claras del corte.",
        "techTasks": [
            pt("E2E-26-FE", "Ficha táctil de admisión de peluquería con captura de fotos 'Antes'", "Campos rápidos para seleccionar tipo de pelo y largo deseado.", "Frontend", "ALTA"),
            pt("E2E-26-BE", "Servicio de creación de ficha de estética y vinculación de archivos", "Optimización de imágenes en el almacén de archivos.", "Backend", "ALTA"),
            pt("E2E-26-QA", "Pruebas de persistencia de fotos de antes y notas de estilismo", "Asegurar que el estilista pueda consultar el corte habitual de la mascota.", "QA", "ALTA")
        ]
    },

    # 27. Gestionar agenda de estética
    {
        "id": "E2E-27",
        "num": 27,
        "name": "Gestionar agenda de estética",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "trigger": "Se programan y distribuyen los turnos de la peluquería canina/felina.",
        "steps": [
            "1. El encargado de estética abre la vista de calendario filtrada por 'Área de Grooming'.",
            "2. Visualiza la disponibilidad por estilista y por tina/mesa de trabajo.",
            "3. Asigna la cita considerando la duración según tamaño del animal (ej: perro gigante requiere 2 horas, gato requiere 1.5 horas con calma).",
            "4. Bloquea tiempos de secado o desinfección entre servicios.",
            "5. Permite reprogramar turnos mediante arrastrar y soltar (drag-and-drop)."
        ],
        "data": "Estilistas, tinas de baño, mesas de corte, tamaño mascota, duración estimada, horarios.",
        "relatedModules": ["26. Estética canina y felina", "22. Agenda", "23. Citas"],
        "expectedResult": "Agenda de peluquería optimizada sin cuellos de botella en tinas de baño ni sobrecarga de estilistas.",
        "techTasks": [
            pt("E2E-27-FE", "Vista de calendario especializada para peluquería con drag-and-drop", "Filtrado independiente de la agenda médica para no mezclar turnos.", "Frontend", "ALTA"),
            pt("E2E-27-BE", "Validación de aforo por puestos de tina y capacidad de secadoras", "Control de recursos físicos asignables.", "Backend", "ALTA"),
            pt("E2E-27-QA", "Pruebas de solapamiento de mesas de corte y cálculo de tiempos", "Garantizar que no se agenden más perros de los que caben en el área de baño.", "QA", "ALTA")
        ]
    },

    # 28. Finalizar servicio de estética
    {
        "id": "E2E-28",
        "num": 28,
        "name": "Finalizar servicio de estética",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "trigger": "El estilista concluye el secado, corte, perfumado y cepillado final del paciente.",
        "steps": [
            "1. El estilista toma la fotografía del 'Después' mostrando el corte impecable.",
            "2. Se registran los productos consumidos (porciones de champú medicado, bálsamo, antipulgas tópico).",
            "3. Se redactan las observaciones finales para el tutor (ej: 'muy buen comportamiento', 'manto algo anudado').",
            "4. Se pulsa 'Finalizar Servicio'; el sistema envía un mensaje automático por WhatsApp al tutor avisando que su mascota está lista para ser retirada.",
            "5. Los cargos se envían automáticamente al Punto de Venta en caja."
        ],
        "data": "Foto del 'Después', insumos usados, comportamiento, hora de finalización, cargo en caja.",
        "relatedModules": ["26. Estética canina y felina", "39. Comunicación con propietarios", "34. Facturación"],
        "expectedResult": "Servicio de peluquería finalizado, foto guardada, tutor avisado por WhatsApp y ticket listo en caja.",
        "techTasks": [
            pt("E2E-28-FE", "Pantalla de cierre de sesión estética con galería 'Antes y Después'", "Generador de tarjeta fotográfica con marca FurLife para compartir con el tutor.", "Frontend", "ALTA"),
            pt("E2E-28-BE", "Disparo de notificación automática de recogida de mascota vía WhatsApp", "Envío instantáneo al marcar el servicio como terminado.", "Backend", "ALTA"),
            pt("E2E-28-QA", "Pruebas de envío de notificación y traspaso de cargos a caja", "Validar recepción inmediata del mensaje de retiro por parte del tutor.", "QA", "ALTA")
        ]
    },

    # 29. Registrar observaciones de estética (y alerta médica)
    {
        "id": "E2E-29",
        "num": 29,
        "name": "Registrar observaciones de estética (y alerta médica)",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "CRÍTICA",
        "trigger": "Durante el baño o cepillado, el estilista detecta una anomalía de salud (bulto en piel, eritema severo, otitis, ectoparásitos abundantes).",
        "steps": [
            "1. El estilista activa en la ficha de peluquería el botón rojo: 'Reportar Hallazgo Médico'.",
            "2. Selecciona la categoría de anomalía: Piel/Bultos, Oídos/Infección, Ojos, Dientes/Sarro severo, Parásitos.",
            "3. Toma una foto en primer plano del hallazgo y añade notas descriptivas.",
            "4. El sistema genera una 'Alerta de Interconsulta Veterinaria' en tiempo real.",
            "5. En el panel del médico de turno aparece la notificación con la foto del hallazgo.",
            "6. El veterinario acude al área de estética para revisar al animal o se genera una propuesta de consulta médica al tutor al momento de recoger a su mascota."
        ],
        "data": "Tipo de hallazgo, ubicación anatómica, severidad, fotografía del hallazgo, notas del groomer.",
        "relatedModules": ["26. Estética canina y felina", "10. Consultas veterinarias", "38. Notificaciones"],
        "expectedResult": "Puente clínico directo entre estética y medicina veterinaria, detectando patologías tempranas y cuidando la salud del animal.",
        "techTasks": [
            pt("E2E-29-FE", "Modal de alerta clínica en pantalla de peluquería con mapa corporal", "Permitir marcar con un punto la ubicación anatómica de la lesión.", "Frontend", "CRÍTICA"),
            pt("E2E-29-BE", "Servicio de interconsulta interna con notificación en tiempo real (WebSockets)", "Alerta instantánea en el dashboard de los veterinarios conectados.", "Backend", "CRÍTICA"),
            pt("E2E-29-QA", "Pruebas de generación y recepción de alerta de peluquería a veterinaria", "Asegurar que la alerta se destaque con sonido y distintivo prioritario.", "QA", "CRÍTICA")
        ]
    },

    # 30. Crear teleconsulta
    {
        "id": "E2E-30",
        "num": 30,
        "name": "Crear teleconsulta",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "trigger": "Un tutor solicita orientación médica remota para triaje, dudas de medicación o seguimiento postquirúrgico.",
        "steps": [
            "1. En recepción o por solicitud online, se crea una cita de tipo 'Teleconsulta / Teleorientación'.",
            "2. Se selecciona el profesional veterinario y horario acordado.",
            "3. El sistema genera una sala de videollamada cifrada con token único y efímero.",
            "4. Se envía al tutor el enlace de acceso junto con las instrucciones técnicas y el aviso legal de teleorientación.",
            "5. La cita queda registrada en la agenda del veterinario con icono de videollamada."
        ],
        "data": "Cita_id, token de sala WebRTC, URL segura, instrucciones, consentimiento de teleorientación.",
        "relatedModules": ["24. Teleconsultas", "23. Citas", "38. Notificaciones"],
        "expectedResult": "Sala virtual aprovisionada, enlaces seguros despachados y cita fijada en la agenda del médico.",
        "techTasks": [
            pt("E2E-30-FE", "Generador de salas virtuales con botón de copiar enlace para el tutor", "Previsualización de cámara y micrófono antes de ingresar a la sala.", "Frontend", "MEDIA"),
            pt("E2E-30-BE", "Integración con API WebRTC para creación y autenticación de salas efímeras", "Generación de JWTs de acceso con permisos de audio/video.", "Backend", "MEDIA"),
            pt("E2E-30-QA", "Pruebas de seguridad de enlaces de teleconsulta", "Verificar que tokens no autorizados o vencidos no puedan ingresar a la llamada.", "QA", "MEDIA")
        ]
    },

    # 31. Realizar teleconsulta
    {
        "id": "E2E-31",
        "num": 31,
        "name": "Realizar teleconsulta",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "trigger": "Llega la hora de la sesión y tanto el veterinario como el tutor ingresan a la sala virtual.",
        "steps": [
            "1. El veterinario pulsa 'Iniciar Teleconsulta' desde su agenda.",
            "2. La interfaz muestra la videollamada en panel dividido: video del paciente a la izquierda y expediente clínico editable a la derecha.",
            "3. El veterinario interroga al tutor, evalúa el estado del animal por cámara (respiración, postura, deambulación).",
            "4. Redacta notas clínicas en tiempo real y captura capturas de pantalla de zonas anatómicas relevantes.",
            "5. Determina si el caso puede manejarse a distancia o requiere derivación urgente a consulta física presencial."
        ],
        "data": "Transmisión de audio/video, notas simultáneas, capturas fotográficas de pantalla, triaje de urgencia.",
        "relatedModules": ["24. Teleconsultas", "10. Consultas veterinarias", "09. Historia clínica"],
        "expectedResult": "Atención remota fluida sin salir del expediente clínico, con documentación simultánea del acto médico.",
        "techTasks": [
            pt("E2E-31-FE", "Interfaz de videollamada con expediente SOAP integrado en split-screen", "Optimizado para que el médico no deba alternar pestañas durante la videollamada.", "Frontend", "MEDIA"),
            pt("E2E-31-BE", "Servidor de señalización WebRTC y monitoreo de calidad de conexión", "Ajuste dinámico de bitrate ante fluctuaciones de red.", "Backend", "MEDIA"),
            pt("E2E-31-QA", "Pruebas de rendimiento en videollamadas con baja conectividad", "Garantizar que el audio no se corte si el video degrada calidad.", "QA", "MEDIA")
        ]
    },

    # 32. Finalizar teleconsulta
    {
        "id": "E2E-32",
        "num": 32,
        "name": "Finalizar teleconsulta",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "trigger": "Concluye el tiempo de teleorientación médica.",
        "steps": [
            "1. El médico cuelga la llamada; la sala virtual se destruye automáticamente para seguridad de privacidad.",
            "2. Se guardan las notas en el historial clínico del paciente bajo la categoría 'Teleorientación'.",
            "3. Si se prescribe medicación de venta libre o cuidados, se despacha la receta digital al tutor.",
            "4. Si se determinó urgencia presencial, se genera automáticamente una cita prioritaria en clínica.",
            "5. Se liquida el cobro del servicio a través de la pasarela de pago online."
        ],
        "data": "Notas finales, receta digital, recomendación de atención presencial, cobro de pasarela online.",
        "relatedModules": ["24. Teleconsultas", "16. Recetas", "35. Pagos"],
        "expectedResult": "Teleconsulta archivada legalmente en expediente, sala destruida y tratamiento despachado.",
        "techTasks": [
            pt("E2E-32-FE", "Resumen de cierre de teleconsulta con envío directo de recomendaciones", "Generación de documento digital de orientación para el tutor.", "Frontend", "MEDIA"),
            pt("E2E-32-BE", "Destrucción de tokens de sala y liquidación de cargo en Stripe/MercadoPago", "Cierre definitivo del canal WebRTC.", "Backend", "MEDIA"),
            pt("E2E-32-QA", "Pruebas de cierre de sala y facturación electrónica de teleconsultas", "Verificar cobro automático exitoso tras concluir la sesión.", "QA", "MEDIA")
        ]
    },

    # 33. Enviar recordatorio al propietario
    {
        "id": "E2E-33",
        "num": 33,
        "name": "Enviar recordatorio al propietario",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "trigger": "Se cumple la ventana temporal previa a una cita o al vencimiento de vacuna/desparasitación.",
        "steps": [
            "1. El worker de notificaciones identifica citas programadas para las próximas 24 horas y vacunas por vencer en 7 días.",
            "2. Carga la plantilla oficial configurada por la clínica con variables personalizadas (nombre de la mascota, hora, sede).",
            "3. Despacha el mensaje vía WhatsApp Cloud API o SMS.",
            "4. Registra el estado del envío: Entregado, Leído o Fallido.",
            "5. Muestra el estado del recordatorio en la vista de agenda para información del personal."
        ],
        "data": "Tutor, teléfono, mensaje renderizado, fecha programada, canal de envío, ID de mensaje en pasarela.",
        "relatedModules": ["38. Notificaciones", "39. Comunicación con propietarios", "23. Citas", "13. Vacunación"],
        "expectedResult": "Recordatorio recibido puntualmente en el celular del tutor, reduciendo drásticamente el ausentismo.",
        "techTasks": [
            pt("E2E-33-BE", "Worker de colas de despacho de recordatorios masivos programados", "Control de rate limit de WhatsApp API para evitar baneos de número.", "Backend", "ALTA"),
            pt("E2E-33-FE", "Vista de historial de recordatorios enviados por cita", "Indicadores visuales de entrega y lectura de mensajes.", "Frontend", "ALTA"),
            pt("E2E-33-QA", "Pruebas de sustitución de variables en plantillas de recordatorio", "Garantizar que no se envíen corchetes vacíos o datos incorrectos.", "QA", "ALTA")
        ]
    },

    # 34. Registrar reseña
    {
        "id": "E2E-34",
        "num": 34,
        "name": "Registrar reseña",
        "phase": "FASE 3 — ECOSISTEMA",
        "priority": "MEDIA",
        "trigger": "Un tutor finaliza su visita a la clínica y recibe una solicitud de calificación en su teléfono.",
        "steps": [
            "1. El tutor abre el enlace seguro de micro-encuesta enviado tras la consulta o baño.",
            "2. Califica de 1 a 5 estrellas la atención médica, la puntualidad y las instalaciones.",
            "3. Responde a la pregunta NPS: '¿Qué tan probable es que recomiendes FurLife / Clínica a un amigo?'.",
            "4. Escribe un comentario voluntario sobre su experiencia.",
            "5. Se valida que la reseña corresponda a una atención real y se publica en el panel de reputación de la clínica."
        ],
        "data": "Cita_id, estrellas, puntaje NPS (0-10), texto de reseña, aspectos valorados.",
        "relatedModules": ["40. Calificaciones y reseñas", "41. Ranking de veterinarios", "39. Comunicación"],
        "expectedResult": "Opinión verificada registrada, métricas de satisfacción actualizadas y alerta a gerencia si la nota es baja.",
        "techTasks": [
            pt("E2E-34-FE", "Micro-interfaz móvil de calificación ultra-ligera (carga en < 1 segundo)", "Experiencia fluida para el tutor sin requerir login ni descarga de app.", "Frontend", "MEDIA"),
            pt("E2E-34-BE", "Servicio de recepción de opiniones y recálculo de NPS ponderado", "Notificar a gerencia si la calificación es menor a 3 estrellas.", "Backend", "MEDIA"),
            pt("E2E-34-QA", "Pruebas de prevención de votación múltiple o reseñas no verificadas", "Asegurar que cada enlace de reseña solo pueda usarse una vez.", "QA", "ALTA")
        ]
    },

    # 35. Generar reportes
    {
        "id": "E2E-35",
        "num": 35,
        "name": "Generar reportes",
        "phase": "FASE 2 — OPERACIÓN AVANZADA",
        "priority": "ALTA",
        "trigger": "El administrador o director médico de la clínica requiere analizar el rendimiento mensual o epidemiológico.",
        "steps": [
            "1. El usuario ingresa a 'Reportes y Analítica'.",
            "2. Selecciona el tipo de informe: Ventas y Rentabilidad, Ocupación de Agenda, Epidemiología/Morbilidad o Comisiones del Personal.",
            "3. Aplica filtros de rango de fechas, sedes, profesionales y categorías.",
            "4. El sistema ejecuta las agregaciones analíticas y renderiza gráficos interactivos y tablas resumidas.",
            "5. El usuario pulsa 'Exportar a Excel' o 'Generar PDF Ejecutivo'.",
            "6. Se descarga el archivo formateado profesionalmente para toma de decisiones."
        ],
        "data": "Período contable, métricas de facturación, desglose por servicios, patologías frecuentes, horas trabajadas.",
        "relatedModules": ["37. Reportes", "34. Facturación", "23. Citas", "06. Empleados"],
        "expectedResult": "Informe generado con exactitud matemática, visualizaciones claras y opciones de exportación inmediata.",
        "techTasks": [
            pt("E2E-35-FE", "Dashboard analítico con gráficos interactivos y filtros dinámicos", "Gráficas de barras, líneas y áreas con Chart.js o similar.", "Frontend", "ALTA"),
            pt("E2E-35-BE", "Consultas analíticas optimizadas y generador de archivos XLSX y PDF", "Consultas sobre vistas materializadas para no degradar la DB operativa.", "Backend", "ALTA"),
            pt("E2E-35-QA", "Pruebas de concordancia entre reportes y libros de caja y facturación", "Auditar que el total reportado coincida exactamente con las facturas emitidas.", "QA", "CRÍTICA")
        ]
    },

    # 36. Utilizar Luna para una tarea administrativa
    {
        "id": "E2E-36",
        "num": 36,
        "name": "Utilizar Luna para una tarea administrativa",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Un veterinario o recepcionista pulsa el botón de Luna o escribe en la barra inteligente para agilizar su trabajo.",
        "steps": [
            "1. El usuario abre el asistente Luna pulsando Ctrl+J o el icono de Luna en la barra superior.",
            "2. Escribe o consulta: '¿Cómo registro un nuevo lote de vacunas antirrábicas?' o 'Resúmeme las citas de la tarde'.",
            "3. Luna procesa la consulta administrativa, identifica la intención y responde con la guía paso a paso o la lista condensada.",
            "4. Ofrece un botón de acción rápida: 'Ir directamente a registrar lote' o 'Abrir agenda'.",
            "5. El usuario confirma la acción y el sistema ejecuta la tarea en un clic."
        ],
        "data": "Consulta de usuario en lenguaje natural, contexto de la sesión activa, comandos administrativos.",
        "relatedModules": ["48. Luna — asistente IA", "42. Dashboard", "22. Agenda"],
        "expectedResult": "Orientación inmediata y reducción de fricción operativa mediante asistencia inteligente.",
        "techTasks": [
            pt("E2E-36-FE", "Widget conversacional de Luna con respuestas enriquecidas y botones de acción", "Interfaz limpia y amigable con la identidad visual FurLife.", "Frontend", "CRÍTICA"),
            pt("E2E-36-BE", "Motor de resolución de intenciones administrativas frecuentes (NLP / Reglas)", "Respuestas instantáneas sin latencia para guías del sistema.", "Backend", "CRÍTICA"),
            pt("E2E-36-QA", "Pruebas de intenciones administrativas y enlaces directos", "Validar que los botones de acción rápida redirijan a la pantalla exacta.", "QA", "ALTA")
        ]
    },

    # 37. Utilizar Luna para navegación dentro del sistema
    {
        "id": "E2E-37",
        "num": 37,
        "name": "Utilizar Luna para navegación dentro del sistema",
        "phase": "FASE 1 — MVP",
        "priority": "CRÍTICA",
        "trigger": "Un usuario necesita acceder rápidamente a un expediente o función específica sin navegar por menús.",
        "steps": [
            "1. El usuario activa la barra de comando de Luna (Command Palette con Ctrl+K / Cmd+K).",
            "2. Escribe: 'ver vacunas de Max' o 'abrir caja del turno de mañana'.",
            "3. Luna busca simultáneamente en clientes, pacientes, módulos y configuraciones.",
            "4. Muestra resultados ordenados por relevancia con teclas de acceso rápido (Enter para saltar).",
            "5. Al pulsar Enter, el navegador navega instantáneamente al destino exacto con los filtros aplicados."
        ],
        "data": "Término de búsqueda, catálogo de rutas del sistema, índice predictivo de pacientes y tutores.",
        "relatedModules": ["48. Luna — asistente IA", "08. Mascotas/pacientes", "33. Caja", "42. Dashboard"],
        "expectedResult": "Navegación ultrarrápida por teclado que reduce el tiempo de búsqueda a menos de 2 segundos.",
        "techTasks": [
            pt("E2E-37-FE", "Barra de comandos global (Command Palette tipo Spotlight) accionable por teclado", "Navegación con flechas arriba/abajo y selección instantánea.", "Frontend", "CRÍTICA"),
            pt("E2E-37-BE", "Buscador indexado ultra-rápido de recursos del sistema", "Búsqueda combinada en memoria o índices optimizados.", "Backend", "CRÍTICA"),
            pt("E2E-37-QA", "Pruebas de latencia en navegación asistida por teclado (< 50ms)", "Garantizar apertura inmediata de la barra y selección sin demoras.", "QA", "ALTA")
        ]
    }
]

total_proc_tasks = sum(len(p["techTasks"]) for p in processes)
print(f"Total E2E Processes: {len(processes)}")
print(f"Total tech tasks in processes: {total_proc_tasks}")

output_proc_path = os.path.join("js", "data-processes.js")
with open(output_proc_path, "w", encoding="utf-8") as f:
    f.write("// FurLife Master Checklist - End-to-End Processes (37 Processes)\n")
    f.write("// Detailed workflows with triggers, steps, data, modules, results and technical tasks\n")
    f.write("window.FURLIFE_PROCESSES = ")
    json.dump(processes, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Successfully generated {output_proc_path}!")
