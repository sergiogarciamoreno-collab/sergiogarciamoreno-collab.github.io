window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span>
        <span>Resumen Ejecutivo</span>
    </div>
    <p>
        Este proyecto plantea el <strong>rediseño integral de la red y de los servidores corporativos</strong> de
        <strong>MediConnect Solutions, S.L.</strong>, una pyme de teleasistencia sanitaria con tres sedes en la
        Comunitat Valenciana. El alumnado deberá analizar la infraestructura actual, detectar sus puntos críticos y
        proponer, documentar e implementar en laboratorio una solución segmentada, redundante, segura y monitorizada.
    </p>
</div>

<h3>Contexto y Problemática</h3>
<p>
    MediConnect Solutions presta servicio 24×7 a más de 4.500 personas usuarias mediante teleasistencia domiciliaria.
    Su actividad depende por completo de la red: si el centro de llamadas se queda sin conectividad, las alertas de
    las personas usuarias no llegan y el servicio se interrumpe. En los últimos doce meses la empresa ha registrado:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>6 horas de caída total</strong> por fallo del enlace principal, sin enlace de respaldo operativo.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Pérdidas estimadas de 14.000 € por hora</strong> de servicio interrumpido, además del impacto reputacional.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Red plana sin segmentación:</strong> visitas, invitados, administración y servidores comparten el mismo dominio de difusión.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Servicios improvisados:</strong> el DHCP lo ofrece el router del proveedor y existen conflictos de direcciones IP.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Copias de seguridad sin verificar:</strong> la última prueba de restauración falló y no quedó registrada.</span>
    </li>
</ul>

<h3>Solución Propuesta</h3>
<p>
    El proyecto propone una arquitectura de red y servidores de nivel profesional, replicable en el laboratorio del
    centro con virtualización:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Segmentación mediante VLAN:</strong> separación de voz, datos, administración, invitados y servidores.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Direccionamiento planificado con VLSM</strong> y documentación completa en un plan de direccionamiento.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Servicios centralizados:</strong> DHCP, DNS, dominio y compartición de recursos sobre Windows Server y Linux.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>VPN sitio a sitio</strong> entre las tres sedes, con túneles cifrados y rutas documentadas.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Copias de seguridad 3-2-1 verificadas</strong> y monitorización centralizada con alertas proactivas.</span>
    </li>
</ul>

<h3>Metodología</h3>
<p>
    El proyecto se desarrolla mediante <strong>Aprendizaje Basado en Proyectos (ABP)</strong>, con equipos de 3-4
    personas que asumen roles de la industria (analista de red, administración de sistemas, seguridad y documentación).
    El trabajo se organiza en <strong>ocho fases</strong> que integran los módulos de Sistemas Operativos en Red,
    Servicios de Red e Internet, Seguridad Informática, Empresa e Iniciativa Emprendedora y Formación y Orientación
    Laboral.
</p>

<h3>Resultados Esperados</h3>
<p>
    Se espera obtener una infraestructura documentada y funcional en laboratorio que reduzca el tiempo de detección de
    incidencias, elimine los conflictos de direccionamiento, garantice la restauración de datos y permita justificar
    técnicamente las decisiones ante un tribunal o ante la dirección de la empresa.
</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>📝 Instrucciones para el Alumnado</span>
    </div>
    <p>
        <strong>Este proyecto es una guía didáctica: la solución NO está hecha.</strong> Las secciones 1, 2, 3 y 5
        incluyen ejemplos y pistas para orientarte. Deberás completar y justificar personalmente:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li><strong>Sección 4 (Requisitos):</strong> redactar tus propios requisitos funcionales y no funcionales.</li>
        <li><strong>Sección 6 (Implementación):</strong> configurar realmente VLAN, DHCP, DNS, dominio, VPN y copias de seguridad en el laboratorio.</li>
        <li><strong>Sección 7 (Administración):</strong> documentar procedimientos, usuarios, grupos y políticas reales.</li>
        <li><strong>Sección 8 (Herramientas):</strong> adaptar los scripts y el cuadro de mando a tu despliegue.</li>
        <li><strong>Sección 9 (Conclusiones):</strong> redactar tu valoración crítica y las mejoras futuras.</li>
        <li><strong>Bibliografía y Anexos:</strong> incluir fuentes consultadas y capturas de TU implementación.</li>
    </ul>
    <p class="mt-4">
        Los datos de la empresa son ficticios, pero el escenario es realista. Toda la implementación debe realizarse
        en un entorno de pruebas autorizado (máquinas virtuales, laboratorio del centro o equipos de simulación).
    </p>
</div>
`;
