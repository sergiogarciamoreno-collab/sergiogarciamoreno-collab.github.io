window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["estado-arte"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span>
        <span>¿Qué buscamos en esta sección?</span>
    </div>
    <p class="mb-0">
        El estado del arte sitúa tu proyecto dentro de las tecnologías y estándares actuales del sector. No se trata
        de copiar descripciones: debes <strong>comparar alternativas y justificar por qué la tuya encaja en una pyme
        con el presupuesto y la plantilla de MediConnect</strong>.
    </p>
</div>

<h3>2.1. Arquitecturas de Red para Pymes Multisede</h3>
<p>
    Investiga y contrasta los modelos de referencia que se utilizan hoy en redes corporativas pequeñas y medianas.
    Compara al menos tres opciones rellenando la siguiente tabla como punto de partida:
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Modelo / Enfoque</th>
            <th class="p-3 font-bold">Características</th>
            <th class="p-3 font-bold">Ventajas en pyme</th>
            <th class="p-3 font-bold">Inconvenientes</th>
            <th class="p-3 font-bold">Coste aproximado</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Red plana (modelo actual)</td>
            <td class="p-3">Un solo dominio de difusión</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Segmentación tradicional (VLAN + inter-VLAN)</td>
            <td class="p-3">Lógica por funciones, enrutamiento en el router de capa 3</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Red definida por software (SDN / SD-WAN)</td>
            <td class="p-3">Control centralizado, políticas dinámicas</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Mesh con overlay (WireGuard/Tailscale)</td>
            <td class="p-3">Túneles directos entre sedes sin equipo dedicado</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
    </tbody>
</table>

<h3>2.2. Estándares y Referencias Técnicas</h3>
<p>
    Un proyecto de 2º curso se diferencia de 1º por su <strong>rigor normativo</strong>. Debes localizar y citar
    correctamente al menos los siguientes documentos (apunta su número o referencia oficial en la bibliografía):
</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
    <div class="callout callout-info mb-0">
        <div class="callout-title">
            <span>📐</span>
            <span>Red y direccionamiento</span>
        </div>
        <ul class="list-disc pl-6 space-y-1 mb-0">
            <li><strong>RFC 1918</strong> — Direcciones IPv4 privadas.</li>
            <li><strong>RFC 3021</strong> — Uso de /31 en enlaces punto a punto.</li>
            <li><strong>RFC 1035</strong> — Sistema de nombres de dominio (DNS).</li>
            <li><strong>RFC 2131</strong> — Protocolo de configuración dinámica (DHCP).</li>
            <li><strong>RFC 791 / 4291</strong> — IP y esquema de direccionamiento IPv6.</li>
        </ul>
    </div>
    <div class="callout callout-info mb-0">
        <div class="callout-title">
            <span>🔒</span>
            <span>Seguridad y datos</span>
        </div>
        <ul class="list-disc pl-6 space-y-1 mb-0">
            <li><strong>Reglamento (UE) 2016/679 (RGPD).</strong></li>
            <li><strong>LOPDGDD 3/2018.</strong></li>
            <li><strong>ISO/IEC 27001</strong> — Sistema de gestión de seguridad de la información.</li>
            <li><strong>ENS (RD 3/2010)</strong> — Esquema Nacional de Seguridad aplicable a entidades.</li>
            <li><strong>RFC 4301 / 7296</strong> — IPsec y el intercambio de claves IKEv2.</li>
        </ul>
    </div>
</div>

<h3>2.3. Panorama de Herramientas y Tecnologías</h3>
<p>
    Elige tu pila tecnológica de trabajo. La tabla es solo un punto de partida: <strong>investiga al menos una
    alternativa por fila y decide cuál usas</strong>, justificándolo por coste, documentación y soporte comunitario.
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Ámbito</th>
            <th class="p-3 font-bold">Opción recomendada</th>
            <th class="p-3 font-bold">Alternativa a evaluar</th>
            <th class="p-3 font-bold">Tu elección + justificación</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Simulación de red</td>
            <td class="p-3">Cisco Packet Tracer / GNS3 / EVE-NG</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Virtualización de servidores</td>
            <td class="p-3">VirtualBox o Proxmox VE</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Sistema operativo servidor</td>
            <td class="p-3">Windows Server 2022 / Ubuntu Server 24.04 LTS</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Firewall / router</td>
            <td class="p-3">pfSense / OPNsense / MikroTik RouterOS</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Monitorización</td>
            <td class="p-3">Zabbix / Nagios / LibreNMS</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Copias de seguridad</td>
            <td class="p-3">UrBackup / Veeam / Bacula</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Diagnóstico</td>
            <td class="p-3">Wireshark / Nmap / iperf3</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
    </tbody>
</table>

<h3>2.4. Buenas Prácticas del Sector</h3>
<p>
    Resume las recomendaciones que aplicarás al diseño. Estas cinco son las que el tribunal espera ver reflejadas
    en la sección de diseño; amplíalas con las que tu equipo identifique:
</p>
<ol class="list-decimal pl-6 space-y-2 my-4">
    <li><strong>Segmentación por función y no por ubicación:</strong> el tráfico se agrupa por lo que hace, no por dónde está el equipo.</li>
    <li><strong>Menor privilegio:</strong> cada usuario, equipo y VLAN accede únicamente a lo que necesita.</li>
    <li><strong>Defensa en profundidad:</strong> firewall, control de acceso, cifrado y monitorización se solapan.</li>
    <li><strong>Reversibilidad y documentación:</strong> toda configuración debe poder reconstruirse desde cero con la documentación existente.</li>
    <li><strong>Verificación continua:</strong> una copia sin restaurar, un backup sin comprobar y una alerta sin probar no cuentan.</li>
</ol>

<h3>2.5. Trabajo Propuesto en esta Sección</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo del profesorado</span>
    </div>
    <p class="mb-0">
        Completa las tablas con información <strong>propia</strong>, con fuentes citadas y comparaciones reales.
        Evita descripciones genéricas de catálogo: el tribunal detecta de inmediato el contenido copiado. Una buena
        estrategia es buscar fichas técnicas, documentación oficial y artículos técnicos recientes (últimos 3 años),
        y siempre indicar la fuente en la bibliografía.
    </p>
</div>
<ul class="list-check pl-6 space-y-2 my-4">
    <li>✅ He comparado al menos 4 modelos de arquitectura con costes o requisitos concretos.</li>
    <li>✅ He localizado las RFC y la normativa RGPD/ISO que aplicaré al diseño.</li>
    <li>✅ He elegido la pila tecnológica y he justificado cada elección.</li>
    <li>✅ He citado todas las fuentes en la sección de Bibliografía.</li>
</ul>
`;
