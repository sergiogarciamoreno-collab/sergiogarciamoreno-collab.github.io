window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["viabilidad"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span>
        <span>¿Qué debe demostrar esta sección?</span>
    </div>
    <p class="mb-0">
        Que la solución propuesta para MediConnect Solutions es <strong>posible, sostenible y defendible</strong>.
        No basta con que la red funcione en el laboratorio: hay que justificar el coste, los plazos, los riesgos,
        el cumplimiento legal y el impacto sobre las personas que trabajan en la empresa. Esta sección conecta la
        tecnología con la realidad empresarial y es una de las más valoradas en la defensa.
    </p>
</div>

<h3>3.1. Análisis DAFO del Proyecto</h3>
<p>
    Completa el DAFO pensando en la solución que vas a implantar, no en la empresa en general. Cada punto debe
    estar relacionado con una decisión técnica concreta y con su impacto en el negocio.
</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
        <h4 class="text-red-700 font-bold mb-3 border-none p-0 flex items-center gap-2"><span>🔴</span> Debilidades</h4>
        <ul class="text-xs text-red-800 space-y-2 pl-4">
            <li>Ejemplo: el equipo solo dispone de un laboratorio de prácticas, sin réplica exacta del rack real.</li>
            <li>Ejemplo: parte del alumnado aún no ha administrado un dominio Windows Server en producción.</li>
            <li><strong>[COMPLETAR:</strong> debilidad propia de tu equipo o de la solución<strong>]</strong></li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50/50 border border-amber-100 rounded-3xl">
        <h4 class="text-amber-700 font-bold mb-3 border-none p-0 flex items-center gap-2"><span>🟠</span> Amenazas</h4>
        <ul class="text-xs text-amber-800 space-y-2 pl-4">
            <li>Ejemplo: el proveedor actual puede imponer penalizaciones si la migración supera el horario acordado.</li>
            <li>Ejemplo: un fallo de configuración durante las pruebas podría afectar a datos ficticios compartidos.</li>
            <li><strong>[COMPLETAR:</strong> amenaza externa o interna que puede afectar al proyecto<strong>]</strong></li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl">
        <h4 class="text-emerald-700 font-bold mb-3 border-none p-0 flex items-center gap-2"><span>🟢</span> Fortalezas</h4>
        <ul class="text-xs text-emerald-800 space-y-2 pl-4">
            <li>Ejemplo: la segmentación por VLAN reduce el dominio de difusión y mejora la seguridad sin comprar hardware nuevo.</li>
            <li>Ejemplo: el uso de software libre en servidores secundarios reduce el coste de licencias.</li>
            <li><strong>[COMPLETAR:</strong> fortaleza diferencial de vuestra propuesta<strong>]</strong></li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50/50 border border-blue-100 rounded-3xl">
        <h4 class="text-blue-700 font-bold mb-3 border-none p-0 flex items-center gap-2"><span>🔵</span> Oportunidades</h4>
        <ul class="text-xs text-blue-800 space-y-2 pl-4">
            <li>Ejemplo: el teletrabajo y la teleasistencia crecen, por lo que la inversión en red se amortiza rápido.</li>
            <li>Ejemplo: la monitorización permite ofrecer un nuevo SLA de soporte y captar clientes institucionales.</li>
            <li><strong>[COMPLETAR:</strong> oportunidad de negocio o mejora futura<strong>]</strong></li>
        </ul>
    </div>
</div>

<h3>3.2. Viabilidad Económica</h3>
<p>
    Elabora un presupuesto realista. Para cada partida, busca al menos <strong>dos proveedores</strong> y anota
    precio, garantía y plazo de entrega. Distingue entre inversión inicial (<strong>CAPEX</strong>) y coste
    recurrente anual (<strong>OPEX</strong>). Los importes de la tabla son un punto de partida orientativo:
    debes sustituirlos por precios consultados y justificar la elección.
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Partida</th>
            <th class="p-3 font-bold">Descripción técnica</th>
            <th class="p-3 font-bold">Proveedor consultado</th>
            <th class="p-3 font-bold">Coste (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Conmutadores gestionables</td>
            <td class="p-3">2 unidades con soporte VLAN 802.1Q y trunk</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Firewall / router</td>
            <td class="p-3">Equipo con VPN IPsec, VLAN y reglas de filtrado</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Servidor o host de virtualización</td>
            <td class="p-3">CPU, 32 GB RAM, discos SSD en RAID 1</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Almacenamiento de copias</td>
            <td class="p-3">NAS con 4 TB y opción de cifrado</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Puntos de acceso WiFi</td>
            <td class="p-3">2 unidades con SSID separado para invitados</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Licencias de software</td>
            <td class="p-3">Windows Server, CAL y herramienta de backup</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Horas de implantación</td>
            <td class="p-3">Auditoría, configuración, pruebas y formación</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td colspan="3" class="p-3 text-right uppercase text-xs tracking-wider">Total inversión inicial (CAPEX)</td>
            <td class="p-3 text-blue-600">[COMPLETAR]</td>
        </tr>
    </tbody>
</table>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">OPEX anual</span>
        <p class="text-2xl font-extrabold text-slate-800 mb-1">[COMPLETAR] €</p>
        <p class="text-xs text-slate-500 m-0">Mantenimiento, soporte, licencias y renovaciones.</p>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Coste actual de fallos</span>
        <p class="text-2xl font-extrabold text-slate-800 mb-1">14.000 €/h</p>
        <p class="text-xs text-slate-500 m-0">Dato facilitado por la dirección de MediConnect.</p>
    </div>
    <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Amortización</span>
        <p class="text-2xl font-extrabold text-slate-800 mb-1">[COMPLETAR]</p>
        <p class="text-xs text-slate-500 m-0">Meses necesarios para recuperar la inversión evitando caídas.</p>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>💡</span>
        <span>Justifica con números</span>
    </div>
    <p class="mb-0">
        No basta con decir que la solución es barata. Calcula, por ejemplo, cuántas horas de caída evita al año y
        compáralo con el CAPEX. Si la inversión se recupera en menos de un curso escolar, es un argumento muy
        potente para la dirección. Incluye también el coste de <strong>no hacer nada</strong>.
    </p>
</div>

<h3>3.3. Viabilidad Técnica</h3>
<p>
    Demuestra que el equipo y el laboratorio permiten ejecutar el proyecto. Completa la tabla con los recursos
    reales de los que disponéis y las limitaciones que habrá que asumir.
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Recurso</th>
            <th class="p-3 font-bold">Disponible en el centro</th>
            <th class="p-3 font-bold">Limitación detectada</th>
            <th class="p-3 font-bold">Alternativa o medida</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Virtualización</td>
            <td class="p-3">VirtualBox / Proxmox en aula</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Simulación de red</td>
            <td class="p-3">Packet Tracer / GNS3</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Servidores Windows</td>
            <td class="p-3">ISO de evaluación de Windows Server</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Servidores Linux</td>
            <td class="p-3">Ubuntu Server / Debian</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Equipos de red físicos</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
    </tbody>
</table>

<h3>3.4. Viabilidad Legal, Ética y de Protección de Datos</h3>
<p>
    MediConnect trata datos de salud, considerados <strong>categoría especial</strong> por el RGPD. La solución
    debe demostrar que protege esos datos desde el diseño y por defecto. Investiga y responde a estas cuestiones:
</p>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Base jurídica:</strong> ¿qué base legal legitima el tratamiento de datos de salud? ¿Existe consentimiento explícito o interés vital?</li>
    <li><strong>Minimización:</strong> ¿qué datos necesita realmente cada rol y en qué VLAN circulan?</li>
    <li><strong>Seguridad del tratamiento:</strong> ¿qué medidas técnicas (cifrado, control de acceso, registro) y organizativas aplicáis?</li>
    <li><strong>Encargados del tratamiento:</strong> ¿el proveedor de backup o de cloud firma un contrato conforme al artículo 28 del RGPD?</li>
    <li><strong>Registro de actividades:</strong> ¿quién accede a las grabaciones o fichas y queda constancia?</li>
    <li><strong>Derechos de las personas:</strong> ¿cómo se atienden acceso, rectificación, supresión y portabilidad?</li>
    <li><strong>Brechas de seguridad:</strong> ¿en cuánto tiempo se notifica a la autoridad de control y a las personas afectadas?</li>
</ul>
<div class="callout callout-error">
    <div class="callout-title">
        <span>⚖️</span>
        <span>Riesgo legal que debes evitar</span>
    </div>
    <p class="mb-0">
        Una red plana en la que cualquier visita puede alcanzar los servidores de historiales supone una brecha
        evitable y una posible sanción. La segmentación, el mínimo privilegio y el cifrado no son "extras": son
        medidas de cumplimiento. Cita siempre el <strong>RGPD (Reglamento UE 2016/679)</strong> y la
        <strong>LOPDGDD 3/2018</strong>.
    </p>
</div>

<h3>3.5. Viabilidad Temporal y Planificación</h3>
<p>
    El proyecto está dimensionado para <strong>96 horas</strong> de trabajo. La planificación debe encajar en el
    calendario escolar y dejar margen para imprevistos. Ajusta las fechas y añade los hitos de entrega parcial.
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Fase</th>
            <th class="p-3 font-bold">Horas</th>
            <th class="p-3 font-bold">Semanas previstas</th>
            <th class="p-3 font-bold">Entregable de control</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F1. Diagnóstico</td>
            <td class="p-3">8</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">Informe de auditoría inicial</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F2. Diseño</td>
            <td class="p-3">16</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">Plan VLSM y diagramas</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F3. Red y conmutación</td>
            <td class="p-3">24</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">Configuraciones exportadas</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F4. Servidores</td>
            <td class="p-3">16</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">Servicios operativos</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F5. Conectividad y seguridad</td>
            <td class="p-3">12</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">VPN e informe de seguridad</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F6. Continuidad</td>
            <td class="p-3">8</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">Registro de restauración</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F7. Observabilidad</td>
            <td class="p-3">8</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">Cuadro de mando y alertas</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F8. Defensa</td>
            <td class="p-3">4</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">Memoria y presentación</td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td class="p-3 text-right uppercase text-xs tracking-wider">Total</td>
            <td class="p-3">96</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">Dossier final</td>
        </tr>
    </tbody>
</table>

<h3>3.6. Gestión de Riesgos</h3>
<p>
    Identifica los riesgos que pueden hacer fracasar el proyecto y define una respuesta concreta para cada uno.
    Un riesgo sin plan de respuesta no está gestionado: solo está enunciado.
</p>
<table class="w-full text-sm my-6">
    <thead>
        <tr class="bg-slate-100 text-left">
            <th class="p-3 font-bold">Riesgo</th>
            <th class="p-3 font-bold">Probabilidad</th>
            <th class="p-3 font-bold">Impacto</th>
            <th class="p-3 font-bold">Plan de respuesta</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3">Pérdida de configuración por no versionar los cambios</td>
            <td class="p-3">Media</td>
            <td class="p-3">Alto</td>
            <td class="p-3">Repositorio Git con commit tras cada hito y copia exportada</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3">Fallo del laboratorio o de los equipos virtuales</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3">Retraso en la entrega de una fase</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3">Conflicto de roles dentro del equipo</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3">Cambio de requisitos solicitado por la empresa</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
            <td class="p-3">[COMPLETAR]</td>
        </tr>
    </tbody>
</table>

<h3>3.7. Trabajo Propuesto en esta Sección</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Qué debes entregar</span>
    </div>
    <ul class="list-disc pl-6 space-y-2 mb-0">
        <li>DAFO completo, con al menos dos ideas propias por cuadrante.</li>
        <li>Presupuesto CAPEX y OPEX con dos proveedores consultados y fuentes citadas.</li>
        <li>Cálculo de amortización y comparación con el coste de no actuar.</li>
        <li>Tabla de viabilidad técnica con las limitaciones reales del laboratorio.</li>
        <li>Análisis de cumplimiento RGPD aplicado a los datos de salud.</li>
        <li>Cronograma de 96 horas y matriz de riesgos con respuestas.</li>
    </ul>
</div>
<ul class="list-check pl-6 space-y-2 my-4">
    <li>✅ El DAFO está vinculado a decisiones técnicas concretas.</li>
    <li>✅ El presupuesto incluye importes reales y no solo estimaciones inventadas.</li>
    <li>✅ He calculado si la inversión se amortiza con el ahorro de caídas.</li>
    <li>✅ He citado la normativa de protección de datos aplicable.</li>
    <li>✅ Cada riesgo tiene un plan de respuesta verificable.</li>
</ul>
`;
