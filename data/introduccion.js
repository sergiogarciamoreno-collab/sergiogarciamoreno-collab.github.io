window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span>
        <span>Introducción al Proyecto</span>
    </div>
    <p>
        En esta sección se describe el escenario real en el que se enmarca el proyecto: la empresa, su actividad, su
        infraestructura tecnológica actual y el problema concreto que el alumnado deberá resolver. Léela con atención,
        porque <strong>todo el desarrollo posterior se apoya en este contexto</strong>.
    </p>
</div>

<h3>1.1. La Empresa: MediConnect Solutions, S.L.</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
    <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Sector</span>
        <span class="text-lg font-bold text-slate-800">Teleasistencia sanitaria</span>
        <p class="text-sm text-slate-500 mt-2 mb-0">Monitorización de personas mayores y dependientes en domicilio.</p>
    </div>
    <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Plantilla</span>
        <span class="text-lg font-bold text-slate-800">123 personas</span>
        <p class="text-sm text-slate-500 mt-2 mb-0">Tres sedes en la Comunitat Valenciana.</p>
    </div>
    <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Servicio</span>
        <span class="text-lg font-bold text-slate-800">24×7</span>
        <p class="text-sm text-slate-500 mt-2 mb-0">+4.500 personas usuarias atendidas.</p>
    </div>
</div>

<p>
    MediConnect Solutions, S.L. opera en tres localizaciones interconectadas, cada una con características propias:
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Sede</th>
            <th class="p-3 font-bold">Función</th>
            <th class="p-3 font-bold">Puestos</th>
            <th class="p-3 font-bold">Equipos de red</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Torrent (sede central)</td>
            <td class="p-3">Dirección, administración, servidores y almacén</td>
            <td class="p-3">45</td>
            <td class="p-3">Router, 2 switches, WiFi, rack con 3 servidores</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Paterna (centro de llamadas)</td>
            <td class="p-3">Operadoras 24×7 y sala de control</td>
            <td class="p-3">60</td>
            <td class="p-3">Router, 3 switches, 2 puntos WiFi, rack pequeño</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Gandía (delegación)</td>
            <td class="p-3">Comercial y atención presencial</td>
            <td class="p-3">18</td>
            <td class="p-3">Router de oficina, switch, 1 punto WiFi</td>
        </tr>
    </tbody>
</table>

<h3>1.2. Situación Tecnológica Actual</h3>
<p>
    La infraestructura ha crecido sin planificación. Cada sede se configuró por su cuenta cuando se abrió y hoy la
    documentación es prácticamente inexistente. El inventario técnico que se recoge a continuación procede del
    informe de auditoría interna encargado por la dirección:
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Componente</th>
            <th class="p-3 font-bold">Estado actual</th>
            <th class="p-3 font-bold">Incidencia asociada</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Enlace de acceso a Internet</td>
            <td class="p-3">Un único proveedor por sede, sin enlace alternativo activo</td>
            <td class="p-3">6 h de caída sin respaldo</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Direccionamiento IP</td>
            <td class="p-3">Red 192.168.1.0/24 copiada en las tres sedes, sin plan VLSM</td>
            <td class="p-3">Conflictos IP y agotamiento de direcciones en Paterna</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Servicio DHCP</td>
            <td class="p-3">Reservas manuales en el router del proveedor</td>
            <td class="p-3">Equipo con dirección duplicada: 4 incidencias/mes</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Servidores</td>
            <td class="p-3">2 servidores físicos con Windows Server 2016, sin virtualizar ni replicar</td>
            <td class="p-3">Sin RAID activo ni actualizaciones de seguridad</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Interconexión de sedes</td>
            <td class="p-3">Túneles PPTP creados manualmente, sin monitorizar</td>
            <td class="p-3">Cortes intermitentes al reiniciar los equipos</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Copias de seguridad</td>
            <td class="p-3">Copia diaria a un disco externo compartido por la red</td>
            <td class="p-3">Restauración fallida el 15/03, sin registro posterior</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Red WiFi</td>
            <td class="p-3">SSID corporativo e invitados en la misma red</td>
            <td class="p-3">Acceso de visitas a impresoras y ficheros internos</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Monitorización</td>
            <td class="p-3">Ninguna herramienta; las fallas las reporta el personal</td>
            <td class="p-3">Tiempo medio de detección: 47 minutos</td>
        </tr>
    </tbody>
</table>

<h3>1.3. Problemática Crítica</h3>
<p>
    La dirección de MediConnect ha cuantificado el impacto de esta situación. Comprender las cifras te ayudará a
    justificar cada decisión técnica que tomes en el proyecto:
</p>
<div class="callout callout-error my-6">
    <div class="callout-title">
        <span>🚨</span>
        <span>Impacto del problema</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Pérdida directa:</strong> cada hora de servicio caído equivale a <strong>14.000 €</strong> en indemnizaciones, penalizaciones contractuales y horas no facturadas.</li>
        <li><strong>Riesgo legal:</strong> con datos de salud en una red no segmentada, la empresa incumple el <strong>RGPD (Reglamento (UE) 2016/679)</strong> y la <strong>LOPDGDD 3/2018</strong>.</li>
        <li><strong>Detección reactiva:</strong> 47 minutos de media para detectar un fallo; ningún responsable conoce el estado real de la red en tiempo real.</li>
        <li><strong>Pérdida de datos:</strong> la última restauración falló; si el servidor se estropea, se perderían hasta <strong>30 días</strong> de información.</li>
        <li><strong>Escalabilidad:</strong> el rango DHCP de la sede central está al <strong>87%</strong> de su capacidad y la empresa prevé sumar 10 puestos en el próximo trimestre.</li>
    </ul>
</div>

<h3>1.4. El Reto del Proyecto</h3>
<p>
    Tu equipo ha sido contratado como <strong>proveedor externo de soporte técnico</strong> para diseñar y validar en
    laboratorio la solución que MediConnect desplegará en sus tres sedes. El encargo es concreto:
</p>
<blockquote class="border-l-4 border-blue-500 bg-blue-50 p-6 my-6 rounded-r-xl text-slate-700">
    "Necesitamos una red segmentada, interconectada entre sedes, con servicios centralizados, copias verificadas y
    monitorización. Queremos dejar de apagar fuegos: necesitamos una infraestructura documentada que alguien pueda
    mantener aunque yo no esté."
    <span class="block mt-3 text-sm font-semibold text-blue-700">— Dirección General, MediConnect Solutions, S.L.</span>
</blockquote>

<h3>1.5. Objetivos SMART</h3>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Objetivo</th>
            <th class="p-3 font-bold">Medible</th>
            <th class="p-3 font-bold">Verificación</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3"><strong>O1.</strong> Rediseñar el direccionamiento IP de las tres sedes</td>
            <td class="p-3">Plan VLSM completo con 0 direcciones solapadas</td>
            <td class="p-3">Cálculo manual y verificación en simulador</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3"><strong>O2.</strong> Segmentar la red en VLAN</td>
            <td class="p-3">Mínimo 5 VLAN con control de tráfico entre ellas</td>
            <td class="p-3">Pruebas de conectividad y de aislamiento</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3"><strong>O3.</strong> Centralizar los servicios de red</td>
            <td class="p-3">DHCP con reservas y scopes, DNS y dominio operativos</td>
            <td class="p-3">Prueba de alta/baja de equipos y resolución de nombres</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3"><strong>O4.</strong> Interconectar las tres sedes</td>
            <td class="p-3">VPN sitio a sitio con tráfico cifrado y rutas estables</td>
            <td class="p-3">Wireshark: tráfico de datos no legible sin la clave</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3"><strong>O5.</strong> Garantizar la recuperación</td>
            <td class="p-3">Copia 3-2-1 con restauración probada en menos de 4 horas</td>
            <td class="p-3">Registro de la prueba de restauración firmada</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3"><strong>O6.</strong> Anticipar los fallos</td>
            <td class="p-3">Monitorización con alertas de CPU, disco, enlace y servicios</td>
            <td class="p-3">Simulación de fallo e alerta recibida en el canal</td>
        </tr>
    </tbody>
</table>

<h3>1.6. Alcance e Integración de Módulos</h3>
<p>
    El proyecto es <strong>intermodular</strong>: las decisiones técnicas tienen implicaciones económicas, legales y
    laborales que deberás argumentar también desde los módulos de empresa y legislación:
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Módulo</th>
            <th class="p-3 font-bold">Aportación al proyecto</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Sistemas Operativos en Red</td>
            <td class="p-3">Instalación y configuración de Windows Server y GNU/Linux: dominio, usuarios, grupos, recursos compartidos.</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Servicios de Red e Internet</td>
            <td class="p-3">VLAN, enrutamiento, DHCP, DNS, VPN, servidores de correo/web de intranet y enlaces de respaldo.</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Seguridad Informática</td>
            <td class="p-3">Firewall, políticas de acceso, cifrado, análisis de vulnerabilidades y cumplimiento RGPD.</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Empresa e Iniciativa Emprendedora</td>
            <td class="p-3">Análisis de costes, comparativa de proveedores y memoria de viabilidad económica.</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Formación y Orientación Laboral</td>
            <td class="p-3">Seguridad y salud, normativa de prevención en trabajos en rack, plan de comunicación de incidencias.</td>
        </tr>
    </tbody>
</table>

<h3>1.7. Metodología de Aprendizaje Basado en Proyectos</h3>
<p>
    El trabajo se organiza en equipos de <strong>3 a 4 personas</strong>, con roles rotativos propuestos por el
    profesorado y acordados en el equipo. El reparto de horas totales del proyecto (96 h) es el siguiente:
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Fase</th>
            <th class="p-3 font-bold">Descripción</th>
            <th class="p-3 font-bold">Horas</th>
            <th class="p-3 font-bold">Entregable</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F1. Diagnóstico</td>
            <td class="p-3">Auditoría de red, inventario y análisis de la problemática</td>
            <td class="p-3">8</td>
            <td class="p-3">Informe de diagnóstico</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F2. Diseño</td>
            <td class="p-3">Plan de direccionamiento, topología y arquitectura de servicios</td>
            <td class="p-3">16</td>
            <td class="p-3">Plan VLSM + diagramas</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F3. Red y conmutación</td>
            <td class="p-3">VLAN, trunk, inter-VLAN, enrutamiento estático y DHCP</td>
            <td class="p-3">24</td>
            <td class="p-3">Configuraciones exportadas</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F4. Servidores</td>
            <td class="p-3">Virtualización, dominio, DNS, ficheros y controladores</td>
            <td class="p-3">16</td>
            <td class="p-3">Servidores operativos</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F5. Conectividad y seguridad</td>
            <td class="p-3">VPN entre sedes, firewall, WiFi y análisis de vulnerabilidades</td>
            <td class="p-3">12</td>
            <td class="p-3">VPN + informe de seguridad</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F6. Continuidad</td>
            <td class="p-3">Copias 3-2-1, pruebas de restauración y alta disponibilidad básica</td>
            <td class="p-3">8</td>
            <td class="p-3">Registro de restauración</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F7. Observabilidad</td>
            <td class="p-3">Monitorización, alertas y cuadro de mando</td>
            <td class="p-3">8</td>
            <td class="p-3">Cuadro de mando</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F8. Defensa</td>
            <td class="p-3">Memoria final, presentación y defensa ante tribunal</td>
            <td class="p-3">4</td>
            <td class="p-3">Presentación + defensa</td>
        </tr>
    </tbody>
</table>

<h3>1.8. Entregables del Proyecto</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Dossier técnico</strong> (memoria en PDF) con todas las secciones completadas.</li>
    <li><strong>Plan de direccionamiento IP</strong> con cálculo VLSM y justificación.</li>
    <li><strong>Diagramas</strong> de topología física y lógica (draw.io, GNS3 o similar).</li>
    <li><strong>Configuraciones exportadas</strong> de equipos de red y servidores, con comentarios.</li>
    <li><strong>Scripts y políticas de copia de seguridad</strong> con registro de la prueba de restauración.</li>
    <li><strong>Cuadro de mando de monitorización</strong> y política de alertas.</li>
    <li><strong>Informe de seguridad y RGPD</strong> aplicado a la red rediseñada.</li>
    <li><strong>Inventario técnico actualizado</strong> y guía de mantenimiento.</li>
    <li><strong>Presentación de defensa</strong> de 15 minutos para el tribunal.</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Antes de empezar</span>
    </div>
    <p class="mb-0">
        Reúne con tu equipo la información de partida, distribuid los roles y acordad un espacio de trabajo compartido
        (repositorio Git, carpeta de red o gestor documental). <strong>Todo lo que no quede documentado no existe
        para el tribunal.</strong> Registra cada decisión técnica con su motivo: es la parte que más se valora en la
        defensa.
    </p>
</div>
`;
