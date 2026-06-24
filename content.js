/* ============================================================
   ExamenAcademy · content.js — TODO el contenido del Examen Final de FIS1514
   Examen: 2 de julio 2026, 13:30. Entra TODO el semestre.
   Basado en: programa oficial, clases 1-20, ayudantías 1-13, talleres 1-7,
   pautas reales (C1/C2/I1/I2 de 2021–2026) y Compilado S. Urrutia.
   Convención del curso: g = 10 m/s² (a veces 9,8). sin37°≈0,6 cos37°≈0,8.
   LaTeX: $...$ inline y $$...$$ display. Comandos con doble backslash.
   ============================================================ */

const CONTENT = {
  blocks: {
    inicio:   { label: '🎯 Antes de empezar', sub: 'Cómo está armada esta página, el plan día a día hasta el 2 de julio, qué memorizar, qué entender y los gatillos para reconocer el método.' },
    cine:     { label: '📐 Cinemática · cómo se mueve (sin preguntar por qué)', sub: 'Movimiento rectilíneo, 2D, proyectiles, polares/cilíndricas, movimiento relativo y ligaduras. La base del examen — el lenguaje en que se escriben las preguntas.' },
    newton:   { label: '🟦 Dinámica con Newton · el porqué del movimiento', sub: 'DCL, las tres leyes, roce, sistemas acelerados, cuñas, poleas, y movimiento circular con dinámica (cónico, rizo, polares).' },
    energia:  { label: '⚡ Trabajo, energía y MAS · el tema que MÁS cae', sub: 'Trabajo-energía cinética, energía potencial, conservación con y sin roce, y movimiento armónico simple.' },
    momentum: { label: '💥 Impulso, momentum y choques', sub: 'Impulso lineal, conservación del momentum, choques elásticos/inelásticos, centro de masa, masa variable.' },
    sistemas: { label: '🧬 Angular · torque y momentum angular', sub: 'Momentum angular, torque, conservación. Aparece en los últimos problemas y siempre cae al menos uno.' },
    examen:   { label: '🏁 Para llegar listo', sub: 'Formulario completo para memorizar, simulacro tipo examen cronometrado, y checklist final.' }
  },
  units: []
};
function U(o) { CONTENT.units.push(o); }

/* =====================================================================
   UNIDAD 0 — MAPA DEL EXAMEN, CÓMO ESTUDIAR, GATILLOS, QUÉ MEMORIZAR
   ===================================================================== */
U({
  id: 'u0', block: 'inicio', prio: 0, icon: '🎯',
  tag: 'Unidad 0 · Empieza aquí',
  title: 'Mapa del examen y cómo estudiar',
  badge: { text: 'empieza aquí', cls: 'pill-new' },
  desc: 'Qué entra al examen final, cómo funciona esta página, el plan día a día, qué memorizar vs entender, los gatillos para reconocer el método, y el repaso mínimo de DCL y trigonometría.',
  lessons: [
    {
      id: 'u0l1', title: 'Qué entra al Examen Final del 2 de julio',
      blocks: [
        { t: 'p', html: 'Hola León 👋. El examen es el <b>02 de julio a las 13:30</b>, dura 3h aprox., pesa <b>30%</b> de la nota y <b>NO hay eximición</b>. Entra <b>TODO el semestre</b>. Aquí está la foto completa para que sepas dónde poner tus horas.' },
        { t: 'box', kind: 'def', title: '📋 Temario completo (según el programa oficial)', html: '<b>1. Cinemática de partículas</b><br>&nbsp;&nbsp;a) Movimiento 1D — b) 2D y 3D — c) Polares y cilíndricas — d) Movimiento relativo — e) Ligaduras (vínculo cinemático)<br><b>2. Dinámica de partículas</b><br>&nbsp;&nbsp;a) Leyes de Newton — b) Ecuaciones de movimiento — c) Equilibrio estático — d) Trabajo-energía cinética — e) Energía potencial — f) Oscilador armónico — g) Impulso y momentum lineal — h) Impulso y momentum angular<br><b>3. Dinámica de sistemas</b><br>&nbsp;&nbsp;a) Trabajo-energía — b) Impulso-momentum — c) Conservación — d) Choques — e) Masa variable — f) Centro de masa — g) Torque<br><b>4. Cuerpo rígido en el plano</b> ⚠️ <b>OJO: NO es marginal.</b> Momento de inercia, rotación en torno a eje fijo, rodadura, torque y equilibrio de barras/discos. En los exámenes finales reales <b>es el bloque que MÁS cae</b> (ver estadística en la lección siguiente).' },
        { t: 'box', kind: 'exam', title: '🎯 Distribución típica', html: 'Un examen final FIS1514 tiene <b>4 problemas largos</b> (cada uno con 2-4 partes) y a veces preguntas cortas. La <b>estadística exacta de los exámenes reales</b> está en la lección de aquí abajo 👇 ("📊 Probabilidad real por tema"). El titular: el bloque de <b>cuerpo rígido y rotación domina los finales</b>, seguido de proyectiles y momentum.' }
      ]
    },
    {
      id: 'u0l1c', title: '📊 Probabilidad por tema (6 exámenes finales 2021-2025)',
      blocks: [
        { t: 'p', html: 'Revisé los <b>6 exámenes finales reales y únicos de FIS1514</b> que conseguiste (2021-1, 2022-2, 2023-2, 2024-1, 2024-2 y 2025-1). Descarté duplicados, Interrogaciones/Controles (no son examen final), otro curso (FIS1513) y recopilaciones de IA. Para cada tema te doy <b>DOS números distintos</b> 👇' },
        { t: 'box', kind: 'def', title: 'Qué significa cada columna (LÉELO)', html: '<b>🎯 "Prob. de aparición"</b> = en qué % de los 6 exámenes salió ese tema al menos una vez. <b>Esta es la que responde "¿cuál es la probabilidad de que esté en MI examen?".</b> NO suma 100% (un examen tiene varios temas a la vez), y está bien que así sea.<br><b>⚖️ "Peso"</b> = qué fracción de TODOS los problemas fue de ese tema. Esta SÍ suma 100%. Te dice cuántas preguntas esperar de cada tema.<br><br><b>Ejemplo:</b> proyectiles tiene 50% de aparición (salió en 3 de 6 exámenes) pero solo 13% de peso (porque cuando sale, es 1 problema). Cuerpo rígido tiene 67% de aparición Y 32% de peso: sale casi siempre Y ocupa varios problemas.' },
        { t: 'ftable', head: ['Tema', '🎯 Prob. de aparición', '⚖️ Peso', 'Salió en', 'Página'], rows: [
          ['<b>🔴 Cuerpo rígido</b> (rodadura, momento de inercia, equilibrio/torque)', '<b>67%</b>', '<b>32%</b>', '4 de 6', '⚠️ FALTA'],
          ['<b>🟠 Momentum lineal / choques</b>', '<b>50%</b>', '<b>13%</b>', '3 de 6', 'U12'],
          ['<b>🟠 Momentum angular</b> (disco que gira, choque a barra)', '<b>50%</b>', '<b>16%</b>', '3 de 6', 'U14'],
          ['<b>🟠 Proyectiles / 2D</b>', '<b>50%</b>', '<b>13%</b>', '3 de 6', 'U2'],
          ['<b>🟡 Trabajo y energía</b>', '<b>33%</b>', '<b>13%</b>', '2 de 6', 'U9 + U10'],
          ['<b>🟡 Circular dinámico</b> (rizo, pierde contacto, péndulo)', '<b>33%</b>', '<b>8%</b>', '2 de 6', 'U8'],
          ['<b>🟢 Masa variable</b> (cohete, camión que suelta agua)', '<b>17%</b>', '<b>5%</b>', '1 de 6', 'U13'],
          ['<b>⚪ Polares · Relativo · MAS · Newton puro · Ligaduras · 1D · Centro de masa</b>', '<b>0%</b>', '<b>0%</b>', '0 de 6', 'U1,3,4,5,6,7,11'],
          ['<i>(Total peso)</i>', '—', '<b>100%</b>', '—', '—']
        ]},
        { t: 'box', kind: 'warn', title: '🎯 Cómo repartir tus horas (según los números)', html: '<b>1) CUERPO RÍGIDO es lo #1 sin discusión:</b> 67% de probabilidad de aparición y 32% del peso. Sale en 4 de los últimos 6 exámenes y cuando sale ocupa varios problemas. <b>Aquí va la mayor parte de tu tiempo.</b> ⚠️ La página NO tiene unidad de esto — pídeme "arma la unidad de cuerpo rígido".<br><b>2) El trío del 50%:</b> momentum lineal, momentum angular y proyectiles, cada uno sale en la mitad de los exámenes. Son tu segunda prioridad — domínalos los tres.<br><b>3) Energía, circular y masa variable:</b> aparición media-baja (17-33%) pero baratos de estudiar y caen mezclados con lo demás. Repásalos.<br><b>4) El "0%" NO es "no estudiar":</b> polares, MAS, relativo y Newton caen mucho en las Interrogaciones y el final cubre todo; solo que como problema dedicado de EXAMEN FINAL no aparecieron en estos 6. Bajo riesgo, pero dales una pasada al final.' },
        { t: 'box', kind: 'def', title: 'Detalle: qué cayó en cada examen', html: '<b>2021-1:</b> camión que suelta agua (masa variable) · péndulo con clavo (circular+energía) · bloque pierde contacto (circular+energía) · choque en plano inclinado (energía+momentum) · choque con coef. restitución (energía+momentum). <i>← examen sin cuerpo rígido</i><br><b>2022-2:</b> proyectil + roce viscoso · bala en bloque con resorte (momentum).<br><b>2023-2:</b> anillo gira y se desprende (circular+proyectil) · barra en equilibrio (cuerpo rígido) · esfera+polea+bloque (cuerpo rígido).<br><b>2024-1:</b> proyectil con viento · disco gira + persona camina, conserva L (momentum angular) · barra bisagra (cuerpo rígido).<br><b>2024-2:</b> esquía + agarra mochila (energía+momentum) · plasticina choca barra (momentum angular) · disco que rueda (cuerpo rígido).<br><b>2025-1:</b> cilindro con cuerda (cuerpo rígido) · cuerpo que rueda sin deslizar (cuerpo rígido) · bala se incrusta en disco (momentum angular).' },
        { t: 'box', kind: 'def', title: 'Honestidad sobre la muestra', html: 'Son <b>6 exámenes</b> (≈19 problemas) — los únicos exámenes finales reales de FIS1514 que existen entre todo tu material (busqué también en los perfiles de Studocu y Scribd que pasaste). Es muestra chica: úsala para ver tendencias gruesas, no para apostar al decimal. Si consigues más exámenes finales (otros años), pásamelos y recalculo. <b>Dejé fuera:</b> FIS1513 (otro curso), I1/I2/Controles (no son examen), mocks de IA y guías.' }
      ]
    },
    {
      id: 'u0l2', title: 'Cómo usar esta página y cómo estudiar (método Kumon)',
      blocks: [
        { t: 'p', html: 'Esta página está armada para llevarte de la mano hasta que sepas resolver los problemas DEL NIVEL del examen, no solo los fáciles. Léelo corto y arrancamos.' },
        { t: 'box', kind: 'peras', title: 'Cómo funciona', html: '<b>Unidades:</b> en el inicio están ordenadas por <b>el orden del semestre</b> (cinemática → Newton → energía → momentum → angular). Si tienes tiempo, hazlas en orden. Si vas justo, prioriza Newton, energía y polares.<br><b>Tres pestañas por unidad:</b> 📖 <b>Lecciones</b> (teoría peras y manzanas + ejercicios), 🎴 <b>Tarjetas</b> (flashcards para memorizar fórmulas) y ✅ <b>Quiz</b> (chequear).<br><b>Ejercicios: del más fácil al nivel examen</b> — método Kumon. Primero un <b>ejemplo guiado</b> que se resuelve frente a tus ojos, luego ejercicios donde tú intentas y revisas, y al final <b>enunciados REALES</b> de exámenes/controles con su fuente (año, semestre).' },
        { t: 'box', kind: 'def', title: 'Cómo estudiar física para que SÍ pegues los problemas difíciles', html: '<b>1. Física NO se aprende leyendo: se aprende resolviendo en papel.</b> Por cada lección, intenta los ejercicios TÚ antes de ver la solución. Aunque te equivoques, el cerebro aprende del intento.<br><b>2. Siempre parte por el DIBUJO y el DCL.</b> El 80% de los errores se evitan con un buen diagrama de cuerpo libre y ejes bien elegidos.<br><b>3. Identifica el método por las palabras clave</b> (gatillos, ver U0L4). Aprende a leer el enunciado y saber al toque si es Newton, energía o momentum.<br><b>4. Repite los problemas reales hasta que salgan en menos de 20 minutos.</b> En el examen tienes ~45 min por problema, pero con la tensión, vale tener margen.<br><b>5. Última semana: SIMULACRO cronometrado.</b> En la Unidad final hay uno; trátalo como el examen real.' },
        { t: 'box', kind: 'exam', title: 'Plan día a día (hoy → 2 de julio)', html: '<b>Semana 1 (esta):</b> U1, U2, U3 (cinemática completa). 1-2 unidades por día. Termina con los problemas reales.<br><b>Semana 2:</b> U4, U5, U6 (Newton + dinámica circular). Estos son la base de TODO lo demás.<br><b>Semana 3:</b> U7, U8, U9 (energía + MAS). Más problemas reales de I2.<br><b>Semana 4 (víspera):</b> U10, U11, U12 (momentum + angular) + Formulario + 1-2 simulacros cronometrados.<br><b>Último día:</b> formulario, repaso visual, dormir bien. NO estudies en la mañana del examen.' }
      ]
    },
    {
      id: 'u0l3', title: 'Qué MEMORIZAR, qué ENTENDER y qué NO memorizar',
      blocks: [
        { t: 'p', html: 'No todo pesa igual. Esto te ahorra horas: hay cosas que deben salir sin pensar, otras que solo debes entender para deducirlas, y otras que NO vale la pena memorizar.' },
        { t: 'box', kind: 'form', title: '🧠 MEMORIZAR de memoria (deben salir sin pensar)', html: '<b>Cinemática 1D:</b> $v=v_0+at$, $x=x_0+v_0t+\\tfrac12 at^2$, $v^2=v_0^2+2a\\Delta x$.<br><b>Proyectiles:</b> ejes independientes, $x$ con $a_x=0$, $y$ con $a_y=-g$.<br><b>Polares:</b> $\\vec v=\\dot r\\,\\uv u_r+r\\dot\\theta\\,\\uv u_\\theta$; $\\vec a=(\\ddot r-r\\dot\\theta^2)\\uv u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\uv u_\\theta$.<br><b>Newton:</b> $\\sum\\vec F=m\\vec a$ y cómo armar el DCL.<br><b>Roce:</b> $f_s\\le\\mu_s N$, $f_k=\\mu_k N$, opuesto al movimiento.<br><b>Trabajo-energía:</b> $W_{tot}=\\Delta K=\\tfrac12 mv_f^2-\\tfrac12 mv_i^2$.<br><b>Energías:</b> $K=\\tfrac12 mv^2$, $U_g=mgh$, $U_e=\\tfrac12 kx^2$.<br><b>Con roce:</b> $E_f-E_i=W_{nc}$, $W_{roce}=-\\mu_k N\\,d$.<br><b>MAS:</b> $\\omega=\\sqrt{k/m}$, $T=2\\pi/\\omega$, $x(t)=A\\cos(\\omega t+\\phi)$, $v_{max}=A\\omega$, $E=\\tfrac12 kA^2$.<br><b>Momentum:</b> $\\vec p=m\\vec v$, $\\vec J=\\int\\vec F\\,dt=\\Delta\\vec p$, $\\sum m\\vec v_i=\\sum m\\vec v_f$.<br><b>Momentum angular:</b> $\\vec L=\\vec r\\times m\\vec v$, $\\vec\\tau=d\\vec L/dt$.<br><b>Centro de masa:</b> $\\vec r_{CM}=\\frac{\\sum m_i\\vec r_i}{M}$, $M\\vec a_{CM}=\\vec F_{ext}$.' },
        { t: 'box', kind: 'def', title: '💡 ENTENDER (no memorizar, saber deducir)', html: '• Cómo se arma una ligadura de poleas: largo de cuerda constante, derivar dos veces.<br>• Por qué el roce es no conservativo (depende del camino) y peso/resorte sí (solo de las posiciones).<br>• Cuándo el momentum se conserva (sin $\\vec F_{ext}$ externa neta, o durante un choque breve).<br>• Cuándo $K$ se conserva (elástico) y cuándo no (inelástico).<br>• Por qué $g$ NO entra en $\\omega$ del MAS (solo corre el equilibrio).<br>• Cómo cambia $\\vec a$ en polares cuando $\\ddot\\theta\\ne 0$ vs $\\dot\\theta=cte$.<br>• La diferencia entre $\\vec L$ respecto a un punto fijo y respecto al CM.' },
        { t: 'box', kind: 'warn', title: '🚫 NO pierdas tiempo memorizando', html: '• Resultados particulares (ej. "$F=13mg/4$"): salen de aplicar el método.<br>• Fórmulas que se deducen en 2 líneas (Atwood, péndulo balístico): mejor saber armarlas.<br>• La fórmula del cohete con $u_e$ relativo: entenderla con $\\dot p=F_{ext}+v_{rel}\\dot m$.<br>• Conversión polar-cartesiano: úsala como dato (te la dan).<br>El curso usa <b>$g=10\\,\\mathrm{m/s^2}$</b> salvo que digan otra cosa.' }
      ]
    },
    {
      id: 'u0l4', title: 'Los "gatillos": cómo saber qué método usar en 5 segundos',
      blocks: [
        { t: 'p', html: 'Esto es la diferencia entre resolver en 20 min o quedarse pegado. Lee el enunciado, marca palabras clave, decide el método. Estos gatillos cubren el 95% de los problemas.' },
        { t: 'ftable', head: ['Si el enunciado dice…', 'Método', 'Por qué'], rows: [
          ['"posición/velocidad/aceleración" sin fuerzas dadas', 'CINEMÁTICA', 'No te preguntan por qué se mueve, solo cómo.'],
          ['"polares", "ranura", "brazo", "círculo", $r(\\theta)$', 'POLARES', 'Necesitas $\\vec a$ en $\\uv u_r,\\uv u_\\theta$.'],
          ['"respecto a un observador que se mueve"', 'RELATIVO', '$\\vec v_{A/B}=\\vec v_A-\\vec v_B$.'],
          ['"cuerda inextensible", "polea", relacionar aceleraciones', 'LIGADURA', 'Largo de cuerda cte → derivar.'],
          ['"tensión", "fuerza", "aceleración" en un instante', 'NEWTON', '$\\sum\\vec F=m\\vec a$ + DCL.'],
          ['"¿se mueve o no?", "mínimo $\\mu$"', 'NEWTON con $f_s=\\mu_s N$', 'Roce estático en el máximo.'],
          ['"gira", "rizo", "cono", "apenas completa", $\\dot\\theta$', 'CIRCULAR', '$a_c=v^2/R=\\omega^2 R$.'],
          ['"velocidad/rapidez en punto B", sin pedir tiempo', 'ENERGÍA', '$\\Delta K=W$ o $E_f-E_i=W_{nc}$.'],
          ['"sin roce / lisa"', '$E_i=E_f$ directo', 'Energía se conserva.'],
          ['"con roce $\\mu_k$, ¿hasta dónde llega?"', '$E_f-E_i=W_{roce}$', '$W_{roce}=-\\mu_k N d$.'],
          ['"oscila", "período", "frecuencia", "resorte"', 'MAS', '$\\omega=\\sqrt{k/m}$.'],
          ['"choca", "queda pegado", "rebota"', 'MOMENTUM', '$\\sum m\\vec v$ se conserva.'],
          ['"elástico"', 'MOMENTUM + $K$', 'Las dos se conservan.'],
          ['"quedan pegados", "perfectamente inelástico"', 'Solo MOMENTUM', '$K$ no se conserva.'],
          ['"impulso", "fuerza × tiempo", gráfico $F(t)$', 'IMPULSO', '$\\vec J=\\int\\vec F\\,dt=\\Delta\\vec p$.'],
          ['"cohete", "gota que recoge masa", "cadena que cae"', 'MASA VARIABLE', 'Ecuación tipo cohete.'],
          ['"momento angular", "torque", "patinadora gira"', 'ANGULAR', '$\\vec L=\\vec r\\times m\\vec v$, $\\tau=dL/dt$.']
        ]},
        { t: 'box', kind: 'peras', title: 'Regla de oro', html: '<b>Si te piden algo "en un instante" (fuerza, aceleración, tensión) ⇒ Newton.</b><br><b>Si te piden algo "entre dos puntos" (velocidad, altura, compresión) sin tiempo ⇒ Energía.</b><br><b>Si hay un golpe/choque ⇒ Momentum.</b><br>Muchos problemas COMBINAN dos (energía para llegar al choque + momentum en el choque + energía después). Si reconoces los gatillos, ya sabes cuál usar dónde.' }
      ]
    },
    {
      id: 'u0l5', title: 'Repaso mínimo: vectores, DCL y trigonometría',
      blocks: [
        { t: 'p', html: 'Tres herramientas que vas a usar en cada problema. Si esto sale automático, lo demás fluye.' },
        { t: 'h3', html: 'Diagrama de cuerpo libre (DCL) — el primer paso SIEMPRE' },
        { t: 'box', kind: 'def', title: 'Cómo hacer un DCL', html: '1) Aísla UN cuerpo y dibújalo como un puntito o caja.<br>2) Dibuja TODAS las fuerzas que actúan SOBRE él (no las que él ejerce):<br>&nbsp;&nbsp;• <b>Peso</b> $m\\vec g$ (siempre, hacia abajo, magnitud $mg$)<br>&nbsp;&nbsp;• <b>Normal</b> $\\vec N$ (perpendicular a la superficie, empuja, $N\\ge0$)<br>&nbsp;&nbsp;• <b>Tensión</b> $\\vec T$ (a lo largo de la cuerda, sale del cuerpo)<br>&nbsp;&nbsp;• <b>Roce</b> $\\vec f$ (paralelo a la superficie, opuesto al movimiento o tendencia)<br>&nbsp;&nbsp;• <b>Resorte</b> $\\vec F_e=-k\\Delta\\ell$ (hacia el equilibrio)<br>&nbsp;&nbsp;• <b>Aplicada</b> $\\vec F$ (la que dé el problema)<br>3) Elige ejes cómodos (en plano inclinado: uno paralelo y otro perpendicular al plano).<br>4) Escribe $\\sum F_x=ma_x$, $\\sum F_y=ma_y$.' },
        { t: 'box', kind: 'warn', title: 'Errores típicos de DCL', html: '• Poner fuerzas que el cuerpo ejerce sobre OTROS (no van).<br>• Inventar una "fuerza de movimiento" o "fuerza centrífuga" (no existen en un marco inercial).<br>• Olvidar la normal o el roce.<br>• Poner el roce siempre "hacia abajo del plano" cuando subiendo va al revés.<br>• Confundir $N=mg$ (horizontal) con $N=mg\\cos\\theta$ (plano).' },
        { t: 'h3', html: 'Plano inclinado: la descomposición que SIEMPRE se usa' },
        { t: 'box', kind: 'form', title: 'Peso en un plano de ángulo θ', html: 'Con ejes paralelo (x, hacia abajo del plano) y perpendicular (y, contra la normal):$$\\text{baja el plano}=mg\\sin\\theta,\\qquad \\text{contra la normal}=mg\\cos\\theta$$ Si no hay $a_\\perp$: $N=mg\\cos\\theta$. Si hay roce: $f=\\mu N=\\mu mg\\cos\\theta$.' },
        { t: 'box', kind: 'peras', html: 'Para no confundir seno y coseno: cuando el plano está casi plano ($\\theta\\to0$), casi no hay fuerza que te haga bajar, y $\\sin0=0$ ✓; la normal casi aguanta todo el peso, $\\cos0=1$ ✓. Entonces <b>la que baja lleva seno, la normal lleva coseno</b>.' },
        { t: 'h3', html: 'Trigonometría que debes tener a mano' },
        { t: 'ftable', head: ['Ángulo', 'sin', 'cos', 'tan'], rows: [
          ['$0°$', '$0$', '$1$', '$0$'],
          ['$30°$', '$0{,}5$', '$\\approx0{,}87$', '$\\approx0{,}58$'],
          ['$37°$', '$\\approx0{,}6$', '$\\approx0{,}8$', '$0{,}75$'],
          ['$45°$', '$\\tfrac{1}{\\sqrt2}\\approx0{,}71$', '$\\tfrac{1}{\\sqrt2}\\approx0{,}71$', '$1$'],
          ['$53°$', '$\\approx0{,}8$', '$\\approx0{,}6$', '$\\approx1{,}33$'],
          ['$60°$', '$\\approx0{,}87$', '$0{,}5$', '$\\approx1{,}73$'],
          ['$90°$', '$1$', '$0$', '$\\infty$']
        ]},
        { t: 'box', kind: 'peras', title: 'Triángulo 3-4-5 (aparece TODO el rato)', html: 'Si $\\tan\\theta=3/4$ entonces $\\sin\\theta=3/5=0{,}6$ y $\\cos\\theta=4/5=0{,}8$. Eso es $\\theta=37°$. Si ves un 3-4-5 o $\\tan\\theta=3/4$, ya tienes seno y coseno sin calculadora. <b>Casi todos los exámenes lo usan</b>.' },
        { t: 'box', kind: 'form', title: 'Identidades útiles', html: '$\\sin^2\\alpha+\\cos^2\\alpha=1$<br>$\\sin(2\\alpha)=2\\sin\\alpha\\cos\\alpha$<br>$\\cos(2\\alpha)=\\cos^2\\alpha-\\sin^2\\alpha=1-2\\sin^2\\alpha$<br>$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta$<br>$\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta$' }
      ]
    }
  ],
  flashcards: [
    { q: '¿Cuándo es el examen y cuánto pesa?', a: '02 de julio 13:30. Pesa 30%. NO hay eximición. Entra todo el semestre.' },
    { q: '¿Cuál es el primer paso SIEMPRE de un problema con fuerzas?', a: 'Dibujar el DCL: aislar el cuerpo y poner todas las fuerzas reales (peso, normal, tensión, roce, aplicadas) y los ejes.' },
    { q: 'En un plano inclinado θ sin $a_\\perp$, ¿cuánto vale N?', a: '$N=mg\\cos\\theta$. (La componente que baja es $mg\\sin\\theta$.)' },
    { q: 'Si te piden velocidad/altura sin tiempo, ¿qué método?', a: 'Energía. Si no hay roce: $E_i=E_f$. Si hay roce: $E_f-E_i=W_{nc}$.' },
    { q: 'Si te piden fuerza/aceleración en un instante, ¿qué método?', a: 'Newton: $\\sum\\vec F=m\\vec a$ con DCL.' },
    { q: 'Si hay choque, ¿qué se conserva siempre?', a: 'El momentum $\\sum m\\vec v$. La energía cinética solo si es elástico.' },
    { q: 'Triángulo 3-4-5: $\\tan\\theta=3/4$, ¿sin y cos?', a: '$\\sin\\theta=0{,}6$, $\\cos\\theta=0{,}8$. (Es 37°.)' },
    { q: '¿Qué $g$ usa el curso?', a: '$g=10\\,\\mathrm{m/s^2}$ (a veces $9{,}81$). Usa 10 salvo que digan otra cosa.' },
    { q: 'Aceleración en polares (escríbela completa)', a: '$\\vec a=(\\ddot r-r\\dot\\theta^2)\\uv u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\uv u_\\theta$.' },
    { q: '¿Cuándo se conserva el momentum?', a: 'Cuando no hay fuerzas externas netas, o durante un choque tan breve que el impulso de fuerzas externas es despreciable.' }
  ],
  quiz: [
    { type: 'comp', q: 'Un problema dice "una pelota se lanza desde una altura $h$ con velocidad $v_0$ formando ángulo $\\alpha$ con la horizontal; ¿con qué rapidez llega al suelo?". El método más directo es:', opts: ['Newton instante a instante', 'Conservación de energía', 'Polares', 'Momentum'], answer: 1, explain: 'Piden rapidez entre dos puntos sin pedir tiempo. Energía: $\\tfrac12 mv_0^2+mgh=\\tfrac12 mv_f^2 \\Rightarrow v_f=\\sqrt{v_0^2+2gh}$.' },
    { type: 'comp', q: '"Un cilindro liso de masa $m$ se apoya en un carrito al que se le da aceleración $a$ horizontal. Calcule la fuerza de contacto." El método es:', opts: ['Energía', 'Newton + DCL del cilindro', 'Momentum', 'Polares'], answer: 1, explain: 'Piden fuerza de contacto en un instante. Newton con DCL del cilindro (peso + dos normales) y la aceleración dada.' },
    { type: 'vf', q: 'En un DCL se dibujan también las fuerzas que el cuerpo ejerce sobre otros.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso: en el DCL SOLO van las fuerzas que actúan SOBRE el cuerpo aislado.' },
    { type: 'comp', q: 'Te piden "el mínimo $\\mu$ para que el bloque no se mueva". Usas:', opts: ['Roce cinético $f=\\mu_k N$', 'Roce estático máximo $f_s=\\mu_s N$', 'Energía', 'Momentum'], answer: 1, explain: 'En el borde de moverse, el roce estático alcanza su máximo $\\mu_s N$.' },
    { type: 'alt', q: 'En coordenadas polares, la aceleración radial vale:', opts: ['$\\ddot r$', '$\\ddot r-r\\dot\\theta^2$', '$r\\ddot\\theta+2\\dot r\\dot\\theta$', '$\\dot r$'], answer: 1, explain: '$a_r=\\ddot r-r\\dot\\theta^2$. El $-r\\dot\\theta^2$ es la parte centrípeta (siempre presente si gira).' },
    { type: 'comp', q: '"Dos cuerpos quedan pegados después del choque". ¿Qué se conserva?', opts: ['Solo $K$', 'Solo $\\vec p$', 'Ambos', 'Ninguno'], answer: 1, explain: 'Solo el momentum. La energía cinética NO (se pierde calor/deformación en el choque perfectamente inelástico).' }
  ]
});

/* =====================================================================
   UNIDAD 1 — CINEMÁTICA 1D (rectilíneo)
   ===================================================================== */
U({
  id: 'u1', block: 'cine', prio: 1, icon: '📏',
  tag: 'Unidad 1 · Cinemática 1D',
  title: 'Movimiento rectilíneo',
  badge: { text: 'Sale 0% · Peso 0%', cls: 'pill-new' },
  desc: '📊 No salió como problema dedicado en los 6 finales (pero es la base de la I1) · Posición, velocidad, aceleración. MRU y MRUA, integración cuando a depende de t, v o x. La parte "fácil" del examen — si la dominas te asegura puntos.',
  lessons: [
    {
      id: 'u1l1', title: 'Posición, velocidad, aceleración: qué son y cómo se relacionan',
      blocks: [
        { t: 'p', html: 'Cinemática es la rama que describe el movimiento <b>sin preguntarse por qué</b> (sin fuerzas). Solo posición, velocidad y aceleración. En 1D todo va en una línea.' },
        { t: 'box', kind: 'peras', title: '🍐 Con peras y manzanas', html: '<b>Posición</b> $x(t)$: dónde está el cuerpo en cada instante. Como una cámara que toma fotos pegadas.<br><b>Velocidad</b> $v=\\dot x=dx/dt$: cuán rápido cambia la posición. Pendiente del gráfico $x$ vs $t$.<br><b>Aceleración</b> $a=\\dot v=\\ddot x$: cuán rápido cambia la velocidad. Pendiente del gráfico $v$ vs $t$.' },
        { t: 'box', kind: 'form', title: 'Las definiciones (de memoria)', html: '$$v=\\dfrac{dx}{dt},\\quad a=\\dfrac{dv}{dt}=\\dfrac{d^2x}{dt^2}$$ Y los inversos (cuando integras): $$x(t)=x_0+\\int_0^t v\\,dt,\\quad v(t)=v_0+\\int_0^t a\\,dt$$' },
        { t: 'box', kind: 'def', title: 'Truco para integrar cuando $a=a(x)$', html: 'Si la aceleración depende de la POSICIÓN (no del tiempo), usa la regla de la cadena:$$a=\\dfrac{dv}{dt}=\\dfrac{dv}{dx}\\cdot\\dfrac{dx}{dt}=v\\dfrac{dv}{dx}$$ Esto convierte una ODE en $t$ a una integrable en $x$: $$\\int v\\,dv=\\int a(x)\\,dx$$' },
        { t: 'box', kind: 'warn', title: 'Cuidado con los signos', html: '$v$ y $a$ son <b>vectores</b> en 1D, así que tienen signo. Si elegiste eje positivo hacia arriba, una piedra cayendo tiene $v<0$ y $a=-g$. Si la eliges hacia abajo, $v>0$ y $a=+g$. Da igual cuál escojas, pero <b>mantén la convención</b> en todo el problema.' }
      ]
    },
    {
      id: 'u1l2', title: 'MRU y MRUA: las fórmulas que tienes que tener tatuadas',
      blocks: [
        { t: 'p', html: 'Son los dos casos especiales más importantes: cuando $a=0$ (MRU) y cuando $a=cte$ (MRUA, también llamado MUA).' },
        { t: 'box', kind: 'form', title: 'MRU ($a=0$)', html: '$$x(t)=x_0+v_0 t,\\qquad v=cte$$' },
        { t: 'box', kind: 'form', title: 'MRUA ($a=cte$) — las tres fórmulas que tienes que memorizar', html: '$$v(t)=v_0+at$$$$x(t)=x_0+v_0 t+\\tfrac12 a t^2$$$$v^2=v_0^2+2a(x-x_0)$$ La 3ª <b>no tiene tiempo</b> — úsala cuando no te lo piden ni te lo dan.' },
        { t: 'box', kind: 'peras', title: '🍐 Cómo elegir cuál usar', html: 'Tienes 3 ecuaciones con variables $\\{x_0,x,v_0,v,a,t\\}$.<br>• Si te dan $v_0,a,t$ y piden $v$: la 1ª.<br>• Si te dan $v_0,a,t$ y piden $x$: la 2ª.<br>• Si te dan $v_0,a,x$ y piden $v$ (sin tiempo): la 3ª.<br>• Si te dan dos cualquiera, despeja y arma la incógnita.' },
        { t: 'box', kind: 'def', title: 'Caída libre — caso especial de MRUA', html: 'Es MRUA con $a=-g$ (si eje positivo hacia arriba) o $a=+g$ (si hacia abajo). $g=10\\,\\mathrm{m/s^2}$.<br>• Altura máxima: $v=0$.<br>• Tiempo para subir y bajar: el doble del de subida.<br>• Vuelve al punto de partida con misma rapidez con que salió.' }
      ]
    },
    {
      id: 'u1l3', title: 'Ejercicios Kumon: cinemática 1D del más fácil al nivel examen',
      blocks: [
        { t: 'p', html: 'Aquí vamos del básico al nivel examen. Hazlos en orden. Si te trabas en el 3º, vuelve al 1º.' },
        { t: 'example', title: 'Ejemplo guiado · Auto que frena', level: 'facil',
          body: '<p>Un auto va a $30$ m/s y frena con $a=-5$ m/s². ¿Cuánto recorre hasta detenerse?</p>',
          solution: '<div class="steps"><div class="step"><b>Idea:</b> piden distancia sin tiempo $\\Rightarrow$ usa la 3ª: $v^2=v_0^2+2a\\Delta x$ con $v=0$.</div><div class="step">$0=30^2+2(-5)\\Delta x\\Rightarrow 10\\Delta x=900\\Rightarrow \\boxed{\\Delta x=90\\text{ m}}$.</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Pelota lanzada hacia arriba', level: 'facil',
          body: '<p>Lanzas una pelota hacia arriba con $v_0=20$ m/s desde el suelo. ¿Qué altura máxima alcanza? ¿En qué tiempo? Usa $g=10$.</p>',
          solution: '<div class="steps"><div class="step">En la altura máxima $v=0$. Con $v^2=v_0^2-2gh$: $0=400-20h\\Rightarrow h=20$ m.</div><div class="step">Tiempo: $v=v_0-gt\\Rightarrow 0=20-10t\\Rightarrow t=2$ s.</div><div class="step">$\\boxed{h_{max}=20\\text{ m},\\ t_{subida}=2\\text{ s}}$. (Tiempo total ida-vuelta: $4$ s.)</div></div>' },
        { t: 'example', title: 'Ejercicio 2 · Dos autos se encuentran', level: 'medio',
          body: '<p>Auto A parte del reposo en $x=0$ con $a_A=2$ m/s². Auto B parte de $x=100$ m hacia A con velocidad constante $v_B=10$ m/s. ¿Cuándo y dónde se encuentran?</p>',
          solution: '<div class="steps"><div class="step"><b>Posiciones</b> (eje $+$ hacia donde va A): $x_A(t)=\\tfrac12(2)t^2=t^2$; $x_B(t)=100-10t$.</div><div class="step"><b>Se encuentran</b> cuando $x_A=x_B$: $t^2=100-10t\\Rightarrow t^2+10t-100=0$.</div><div class="step">$t=\\dfrac{-10+\\sqrt{100+400}}{2}=\\dfrac{-10+\\sqrt{500}}{2}\\approx 6{,}18$ s.</div><div class="step">$\\boxed{t\\approx6{,}18\\text{ s},\\ x\\approx38{,}2\\text{ m}}$.</div></div>' },
        { t: 'example', title: 'Ejercicio 3 · Aceleración variable $a(t)$', level: 'medio',
          body: '<p>Una partícula tiene $a(t)=6t$ m/s² (en SI). Parte del reposo en $x_0=0$. Encuentra $v(t)$ y $x(t)$, y la posición en $t=2$ s.</p>',
          solution: '<div class="steps"><div class="step"><b>Integro $a$ para sacar $v$</b>: $v(t)=v_0+\\int_0^t 6\\tau\\,d\\tau=0+3t^2$.</div><div class="step"><b>Integro $v$ para sacar $x$</b>: $x(t)=x_0+\\int_0^t 3\\tau^2 d\\tau=t^3$.</div><div class="step">$v(2)=12$ m/s, $\\boxed{x(2)=8\\text{ m}}$.</div></div>' },
        { t: 'example', title: 'Ejercicio 4 · Aceleración depende de la velocidad', level: 'dificil',
          body: '<p>Un cuerpo en un fluido tiene $a=-kv$ (con $k>0$). Parte con $v_0$. Encuentra $v(t)$ y demuestra que NUNCA se detiene del todo.</p>',
          solution: '<div class="steps"><div class="step">$\\dfrac{dv}{dt}=-kv\\Rightarrow \\dfrac{dv}{v}=-k\\,dt\\Rightarrow \\ln v=-kt+C$.</div><div class="step">Con $v(0)=v_0$: $C=\\ln v_0\\Rightarrow \\boxed{v(t)=v_0\\,e^{-kt}}$.</div><div class="step">Cuando $t\\to\\infty$, $v\\to 0$ pero <b>nunca llega exactamente a 0</b>. Decae exponencial.</div></div>' },
        { t: 'example', title: 'Ejercicio 5 · Aceleración depende de la posición', level: 'dificil',
          body: '<p>$a(x)=-\\omega^2 x$ (esto es justo la fuerza de un resorte). Parte de $x_0=A$ con $v_0=0$. Encuentra $v(x)$.</p>',
          solution: '<div class="steps"><div class="step"><b>Truco:</b> $a=v\\dfrac{dv}{dx}\\Rightarrow v\\,dv=-\\omega^2 x\\,dx$.</div><div class="step">Integro: $\\tfrac12 v^2=-\\tfrac12 \\omega^2 x^2+C$. Con $v(A)=0$: $C=\\tfrac12\\omega^2 A^2$.</div><div class="step">$\\boxed{v(x)=\\pm\\omega\\sqrt{A^2-x^2}}$. (Es justo la velocidad del MAS — la verás de nuevo en U11.)</div></div>' },
        { t: 'example', title: 'Enunciado real · Taller 1 (cinemática)', level: 'medio',
          body: '<p><b>Fuente: Taller 1, FIS1514.</b> Un cuerpo lanzado verticalmente hacia arriba desde el suelo con $v_0$ pasa por una ventana de altura $h_v$ a una altura $H$ desde el suelo. ¿Cuánto tiempo tarda en pasar de extremo a extremo de la ventana? ¿Con qué velocidad llega al borde inferior?</p>',
          solution: '<div class="steps"><div class="step"><b>Idea:</b> en el borde inferior la pelota está a altura $H$. Por energía/3ª fórmula: $v_1^2=v_0^2-2gH\\Rightarrow v_1=\\sqrt{v_0^2-2gH}$.</div><div class="step">En el borde superior (altura $H+h_v$): $v_2^2=v_0^2-2g(H+h_v)\\Rightarrow v_2=\\sqrt{v_0^2-2g(H+h_v)}$.</div><div class="step">Tiempo de pasar: $\\Delta t=\\dfrac{v_2-v_1}{-g}=\\dfrac{v_1-v_2}{g}$.</div><div class="step">$\\boxed{\\Delta t=\\dfrac{\\sqrt{v_0^2-2gH}-\\sqrt{v_0^2-2g(H+h_v)}}{g}}$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Las 3 fórmulas del MRUA', a: '$v=v_0+at$, $x=x_0+v_0t+\\tfrac12 at^2$, $v^2=v_0^2+2a\\Delta x$.' },
    { q: 'Truco cuando $a$ depende de $x$', a: '$a=v\\,dv/dx\\Rightarrow \\int v\\,dv=\\int a(x)\\,dx$.' },
    { q: 'En la altura máxima de un lanzamiento vertical, ¿qué vale $v$?', a: '$v=0$. (La aceleración sigue siendo $-g$.)' },
    { q: '¿Cuál fórmula NO tiene tiempo?', a: '$v^2=v_0^2+2a\\Delta x$. Úsala cuando no te dan ni piden $t$.' },
    { q: '$a=-kv$ con $v(0)=v_0$: solución', a: '$v(t)=v_0 e^{-kt}$. (Exponencial, nunca llega a 0.)' }
  ],
  quiz: [
    { type: 'comp', q: 'Te dan $v_0=10$ m/s, $a=2$ m/s², te piden $v$ después de recorrer $25$ m. ¿Qué fórmula?', opts: ['$v=v_0+at$', '$x=x_0+v_0t+\\tfrac12 at^2$', '$v^2=v_0^2+2a\\Delta x$'], answer: 2, explain: 'No te dan $t$ ni te lo piden — usa la 3ª: $v^2=100+2(2)(25)=200\\Rightarrow v\\approx 14{,}1$ m/s.' },
    { type: 'vf', q: 'En la altura máxima de un lanzamiento vertical, la aceleración vale 0.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso. $v=0$ pero $a=-g$ siempre (la gravedad no descansa).' },
    { type: 'comp', q: 'Si $a$ depende solo de $x$, ¿qué truco usas?', opts: ['$a=v\\,dv/dx$', '$a=dv/dt$', 'Integral directa $\\int a\\,dt$'], answer: 0, explain: '$a=dv/dt=(dv/dx)(dx/dt)=v\\,dv/dx$, queda integrable en $x$.' }
  ]
});

/* =====================================================================
   UNIDAD 2 — CINEMÁTICA 2D Y PROYECTILES
   ===================================================================== */
U({
  id: 'u2', block: 'cine', prio: 2, icon: '🎯',
  tag: 'Unidad 2 · 2D y proyectiles',
  title: 'Movimiento en el plano y proyectiles',
  badge: { text: 'Sale 50% · Peso 13%', cls: 'pill-hot' },
  desc: '📊 Aparece en 50% de los exámenes · peso 13% · Vectores velocidad y aceleración en 2D/3D. Lanzamientos parabólicos (la estrella de la I1 y suele aparecer en el examen).',
  lessons: [
    {
      id: 'u2l1', title: 'Vectores posición, velocidad y aceleración en 2D',
      blocks: [
        { t: 'p', html: 'En 2D tratas cada eje por separado. La clave: las ecuaciones se aplican a $x$ y a $y$ INDEPENDIENTEMENTE.' },
        { t: 'box', kind: 'form', title: 'Vectores en 2D', html: '$$\\vec r(t)=x(t)\\hat i+y(t)\\hat j$$$$\\vec v=\\dot{\\vec r}=\\dot x\\,\\hat i+\\dot y\\,\\hat j$$$$\\vec a=\\dot{\\vec v}=\\ddot x\\,\\hat i+\\ddot y\\,\\hat j$$ La rapidez es $|\\vec v|=\\sqrt{\\dot x^2+\\dot y^2}$.' },
        { t: 'box', kind: 'peras', title: '🍐 Idea', html: 'Imagina que el cuerpo proyecta una sombra en el eje $x$ (suelo) y otra en el eje $y$ (pared). Cada sombra se mueve por su cuenta con sus propias $v_x,a_x$ y $v_y,a_y$. El movimiento real es la combinación de las dos.' }
      ]
    },
    {
      id: 'u2l2', title: 'Proyectiles: el clásico de todos los exámenes',
      blocks: [
        { t: 'p', html: 'Un proyectil es un cuerpo con la única fuerza el peso. En el aire (sin resistencia) eso da:' },
        { t: 'box', kind: 'form', title: 'Ecuaciones del proyectil', html: 'Con $\\vec v_0$ formando ángulo $\\alpha$ con la horizontal:$$v_{0x}=v_0\\cos\\alpha,\\quad v_{0y}=v_0\\sin\\alpha$$ Eje $x$ (MRU, $a_x=0$): $$x(t)=v_{0x}t,\\quad v_x=v_{0x}$$ Eje $y$ (MRUA, $a_y=-g$): $$y(t)=v_{0y}t-\\tfrac12 gt^2,\\quad v_y=v_{0y}-gt$$' },
        { t: 'box', kind: 'warn', title: 'Si el ángulo se mide con la VERTICAL', html: 'Cuidado, en algunos enunciados (como la I1 2026) el ángulo se mide desde la vertical. Entonces $v_{0x}=v_0\\sin\\alpha$ y $v_{0y}=v_0\\cos\\alpha$. <b>Léelo dos veces</b>.' },
        { t: 'box', kind: 'def', title: 'Propiedades útiles', html: '• La componente horizontal de la velocidad <b>se conserva</b> ($v_x=v_{0x}$ siempre).<br>• En el punto más alto $v_y=0$, $v=v_{0x}$.<br>• <b>Alcance horizontal</b> sobre el mismo nivel: $R=\\dfrac{v_0^2\\sin(2\\alpha)}{g}$. Máximo en $\\alpha=45°$.<br>• <b>Altura máxima</b>: $H=\\dfrac{v_{0y}^2}{2g}$.<br>• <b>Tiempo de vuelo</b> (mismo nivel): $T=\\dfrac{2 v_{0y}}{g}$.' },
        { t: 'box', kind: 'peras', title: '🍐 Truco para resolver rápido', html: '<b>Trayectoria</b> $y(x)$: despeja $t=x/v_{0x}$ de la ec. de $x$ y reemplaza en la de $y$. Te queda una parábola:$$y(x)=x\\tan\\alpha-\\dfrac{gx^2}{2v_0^2\\cos^2\\alpha}$$' }
      ]
    },
    {
      id: 'u2l3', title: 'Ejercicios Kumon: proyectiles del fácil al nivel examen',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Pelota lanzada en 45°', level: 'facil',
          body: '<p>Lanzas una pelota con $v_0=20$ m/s a $45°$ desde el suelo. Encuentra: altura máxima, tiempo de vuelo y alcance. Usa $g=10$.</p>',
          solution: '<div class="steps"><div class="step">$v_{0x}=20\\cos45°=10\\sqrt2\\approx 14{,}14$, $v_{0y}=20\\sin45°\\approx 14{,}14$.</div><div class="step">$H=v_{0y}^2/(2g)=200/20=10$ m.</div><div class="step">Tiempo de vuelo $T=2v_{0y}/g\\approx 2{,}83$ s.</div><div class="step">Alcance $R=v_{0x}\\cdot T\\approx 40$ m. (O directo: $R=v_0^2/g=400/10=40$ m.)</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Pelota desde un edificio', level: 'medio',
          body: '<p>Lanzas una pelota horizontalmente desde un edificio de $h=20$ m con $v_0=15$ m/s. ¿A qué distancia del edificio cae? ¿Con qué velocidad llega al suelo?</p>',
          solution: '<div class="steps"><div class="step">Eje $y$: $h=\\tfrac12 gt^2\\Rightarrow 20=5t^2\\Rightarrow t=2$ s.</div><div class="step">Distancia: $x=v_0 t=15\\cdot2=30$ m.</div><div class="step">$v_y=gt=20$ m/s. Velocidad final: $v=\\sqrt{15^2+20^2}=25$ m/s (triángulo 3-4-5 con escala 5).</div></div>' },
        { t: 'example', title: 'Ejercicio 2 · Dato indirecto (rebote y altura)', level: 'medio',
          body: '<p>Una piedra se lanza desde el borde de un acantilado con $v_0$ a $30°$ sobre la horizontal y cae al mar $5$ s después. El mar está $50$ m abajo del acantilado. Encuentra $v_0$ y el alcance horizontal.</p>',
          solution: '<div class="steps"><div class="step">Eje $y$ (positivo arriba): $-50=v_0\\sin30°\\cdot 5-\\tfrac12 (10)(5)^2$.</div><div class="step">$-50=2{,}5v_0-125\\Rightarrow 2{,}5v_0=75\\Rightarrow v_0=30$ m/s.</div><div class="step">$R=v_0\\cos30°\\cdot t=30\\cdot0{,}87\\cdot 5\\approx 130$ m.</div></div>' },
        { t: 'example', title: 'Enunciado real · I1 2026 (Problema 1)', level: 'dificil',
          body: '<p><b>Fuente: I1 FIS1514, 1er sem 2026, Problema 1.</b> Una pelota se lanza con velocidad $v_0$ en un ángulo $\\alpha$ con respecto a la <b>vertical</b>, desde un escalón en el punto A. (a) Determine $v_0$ si se sabe que la pelota llega al punto B con rapidez $v_f$ formando un ángulo $\\theta$ con la vertical. (b) Determine el tiempo de vuelo.</p>',
          solution: '<div class="steps"><div class="step"><b>📷 Idea:</b> los ángulos se miden con la vertical, así que las componentes son $v_{0x}=v_0\\sin\\alpha$, $v_{0y}=v_0\\cos\\alpha$ (positivo arriba).</div><div class="step"><b>(a)</b> En B la pelota está bajando, así $v_{fx}=v_f\\sin\\theta$ y $v_{fy}=-v_f\\cos\\theta$. La componente horizontal NO cambia: $v_0\\sin\\alpha=v_f\\sin\\theta\\Rightarrow \\boxed{v_0=\\dfrac{v_f\\sin\\theta}{\\sin\\alpha}}$.</div><div class="step"><b>(b)</b> Eje vertical: $v_{fy}=v_{0y}-gt\\Rightarrow -v_f\\cos\\theta=v_0\\cos\\alpha-gt_v$. Despejo $t_v$ y reemplazo $v_0$ de (a):</div><div class="step">$t_v=\\dfrac{v_0\\cos\\alpha+v_f\\cos\\theta}{g}=\\dfrac{(v_f\\sin\\theta/\\sin\\alpha)\\cos\\alpha+v_f\\cos\\theta}{g}$.</div><div class="step">Sumando con denominador común y usando $\\sin(\\alpha+\\theta)=\\sin\\alpha\\cos\\theta+\\cos\\alpha\\sin\\theta$:</div><div class="step">$\\boxed{t_v=\\dfrac{v_f\\sin(\\alpha+\\theta)}{g\\sin\\alpha}}$.</div></div>' },
        { t: 'example', title: 'Ejercicio dificil · Pelota golpea un blanco en altura', level: 'dificil',
          body: '<p>Tiras una pelota con $v_0=25$ m/s desde el suelo. Quieres que golpee un blanco a $20$ m de altura, a $30$ m de distancia. ¿Con qué ángulo $\\alpha$ debes lanzar? Usa $g=10$.</p>',
          solution: '<div class="steps"><div class="step">Ecuación de trayectoria: $y=x\\tan\\alpha-\\dfrac{gx^2}{2v_0^2\\cos^2\\alpha}$. Con $\\sec^2\\alpha=1+\\tan^2\\alpha$:</div><div class="step">$20=30\\tan\\alpha-\\dfrac{10\\cdot 900}{2\\cdot 625}(1+\\tan^2\\alpha)=30\\tan\\alpha-7{,}2(1+\\tan^2\\alpha)$.</div><div class="step">Sea $u=\\tan\\alpha$: $7{,}2u^2-30u+27{,}2=0\\Rightarrow u=\\dfrac{30\\pm\\sqrt{900-783}}{14{,}4}=\\dfrac{30\\pm\\sqrt{117}}{14{,}4}$.</div><div class="step">Dos soluciones (alta y baja): $u\\approx 2{,}83$ o $u\\approx 1{,}33\\Rightarrow \\alpha\\approx 70{,}5°$ o $\\alpha\\approx 53°$.</div><div class="step"><b>Moral:</b> casi siempre hay dos ángulos que llegan al mismo blanco.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Proyectil con viento lateral (2024-1)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen Dinámica 1er sem 2024, P1.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exC_p1.png" alt="Proyectil disparado verticalmente con aceleración horizontal por viento" loading="lazy"><figcaption>📷 Examen anterior · Examen Dinámica 1er sem 2024, P1</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>Ejes independientes.</b> Vertical: sube con $a_y=-g$; horizontal: parte del reposo con $a_x=0{,}5$ m/s² (el viento).</div><div class="step"><b>Altura máxima 500 m:</b> $v_{0y}^2=2g(500)\Rightarrow v_{0y}=\sqrt{10000}=100$ m/s (con $g=10$). Tiempo a la cima: $t=v_{0y}/g=10$ s.</div><div class="step"><b>Desvío horizontal</b> en ese tiempo: $v_x=a_x t=0{,}5\cdot10=5$ m/s; $x=\tfrac12 a_x t^2=\tfrac12(0{,}5)(10^2)=25$ m.</div><div class="step">La rapidez total en cualquier instante es $\sqrt{v_x^2+v_y^2}$. Trata cada eje por separado y combina al final.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Proyectil que entra a un tubo + roce viscoso (2022)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen Dinámica 2do sem 2022, P1.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exE_p1.png" alt="Objeto lanzado con v0 y angulo que entra a un tubo con roce viscoso" loading="lazy"><figcaption>📷 Examen anterior · Examen Dinámica 2do sem 2022, P1</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>(a-b) Tramo proyectil:</b> $x(t)=v_0\cos\theta_0\,t$, $y(t)=v_0\sin\theta_0\,t-\tfrac12 g t^2$. La altura del punto de entrada sale evaluando $y$ donde $v_y=0$ (cima): $H=\dfrac{(v_0\sin\theta_0)^2}{2g}$.</div><div class="step"><b>(c) Dentro del tubo (roce viscoso):</b> aparece una fuerza $F=-bv$ proporcional a la velocidad. La velocidad límite se alcanza cuando la fuerza neta es cero: iguala el empuje (peso o componente) con $bv$ y despeja $v_{límite}$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: '¿Cuál componente de la velocidad se CONSERVA en un proyectil?', a: 'La horizontal $v_x=v_0\\cos\\alpha$. La vertical cambia con $-g$.' },
    { q: 'Alcance horizontal sobre mismo nivel', a: '$R=\\dfrac{v_0^2\\sin(2\\alpha)}{g}$. Máximo en $\\alpha=45°$.' },
    { q: 'Tiempo de vuelo (mismo nivel)', a: '$T=\\dfrac{2v_{0y}}{g}=\\dfrac{2v_0\\sin\\alpha}{g}$.' },
    { q: 'Altura máxima', a: '$H=\\dfrac{v_{0y}^2}{2g}=\\dfrac{v_0^2\\sin^2\\alpha}{2g}$. En la cumbre $v_y=0$.' },
    { q: 'Si el ángulo se mide desde la VERTICAL...', a: '$v_{0x}=v_0\\sin\\alpha$ y $v_{0y}=v_0\\cos\\alpha$ (al revés).' }
  ],
  quiz: [
    { type: 'comp', q: 'En el punto más alto de un proyectil lanzado a 60°, $v$ vale:', opts: ['0', '$v_0$', '$v_0\\cos60°=v_0/2$', '$v_0\\sin60°$'], answer: 2, explain: 'En la cumbre solo queda la componente horizontal, que se conserva: $v=v_0\\cos\\alpha$.' },
    { type: 'vf', q: 'El alcance máximo se da con ángulo 45° (sobre mismo nivel).', opts: ['V', 'F'], answer: 0, explain: 'Verdadero. $R=v_0^2\\sin(2\\alpha)/g$ es máximo cuando $\\sin(2\\alpha)=1$, es decir $\\alpha=45°$.' },
    { type: 'comp', q: 'Si el blanco está más alto que el lanzamiento, ¿cuántos ángulos posibles hay para llegar con $v_0$ fija?', opts: ['Solo 1', 'Generalmente 2 (alto y bajo)', 'Infinitos'], answer: 1, explain: 'La cuadrática en $\\tan\\alpha$ tiene 2 soluciones (si el blanco es alcanzable).' }
  ]
});

/* =====================================================================
   UNIDAD 3 — COORDENADAS POLARES Y CILÍNDRICAS
   ===================================================================== */
U({
  id: 'u3', block: 'cine', prio: 3, icon: '🌀',
  tag: 'Unidad 3 · Polares',
  title: 'Coordenadas polares y cilíndricas',
  badge: { text: 'Sale 0% · Peso 0%', cls: 'pill-new' },
  desc: '📊 No salió en estos 6 finales (pero estrella de la I1) · Cuando el movimiento "gira", las cartesianas son un infierno. Las polares son el cuchillo afilado. Tema estrella del curso — un problema entero del examen casi siempre es de esto.',
  lessons: [
    {
      id: 'u3l1', title: 'Por qué polares y los vectores unitarios $\\hat u_r,\\hat u_\\theta$',
      blocks: [
        { t: 'p', html: 'Si un cuerpo se mueve por una circunferencia, una espiral, una ranura curva o un brazo robótico, escribirlo en $x,y$ es horrible (aparecen senos y cosenos por todos lados). En polares: solo dos cosas — el radio $r$ (distancia al origen) y el ángulo $\\theta$.' },
        { t: 'box', kind: 'form', title: 'Posición, vectores unitarios', html: '$$\\vec r=r\\,\\hat u_r$$ $\\hat u_r$ apunta del origen al cuerpo. $\\hat u_\\theta$ es perpendicular a $\\hat u_r$, en el sentido de $\\theta$ creciente. <b>Ojo:</b> $\\hat u_r$ y $\\hat u_\\theta$ <b>cambian</b> con el tiempo (giran junto al cuerpo).' },
        { t: 'box', kind: 'def', title: 'Conversión a cartesianas (cuando te lo pidan)', html: '$\\hat u_r=\\cos\\theta\\,\\hat i+\\sin\\theta\\,\\hat j$<br>$\\hat u_\\theta=-\\sin\\theta\\,\\hat i+\\cos\\theta\\,\\hat j$<br>y al revés: $\\hat i=\\cos\\theta\\,\\hat u_r-\\sin\\theta\\,\\hat u_\\theta$, $\\hat j=\\sin\\theta\\,\\hat u_r+\\cos\\theta\\,\\hat u_\\theta$.' },
        { t: 'box', kind: 'peras', title: '🍐 Idea con peras', html: 'Imagina que sostienes un cordel desde un palo central a un pájaro. $r$ es lo largo del cordel; $\\theta$ es el ángulo que forma con la horizontal. $\\hat u_r$ apunta del palo al pájaro (cambia cuando el pájaro vuela). $\\hat u_\\theta$ es perpendicular y "barre" el ángulo. Si el pájaro vuela en círculo a distancia fija, $r$ no cambia pero $\\theta$ sí.' }
      ]
    },
    {
      id: 'u3l2', title: 'Velocidad y aceleración en polares — las DOS fórmulas estrella',
      blocks: [
        { t: 'box', kind: 'form', title: '⭐ Memoriza estas dos (te las pueden dar como hint, pero apréndelas igual)', html: '$$\\boxed{\\vec v=\\dot r\\,\\hat u_r+r\\dot\\theta\\,\\hat u_\\theta}$$$$\\boxed{\\vec a=(\\ddot r-r\\dot\\theta^2)\\,\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\,\\hat u_\\theta}$$' },
        { t: 'vars', items: [
          ['$\\dot r$', 'Cuán rápido cambia el radio (positivo si se aleja).'],
          ['$r\\dot\\theta$', 'Velocidad tangencial — cuán rápido "barre" el ángulo.'],
          ['$\\ddot r$', 'Aceleración radial pura (cómo cambia $\\dot r$).'],
          ['$-r\\dot\\theta^2$', 'La <b>centrípeta</b> — siempre presente si está girando. Negativa (hacia el centro).'],
          ['$r\\ddot\\theta$', 'Cómo cambia la velocidad de barrido del ángulo.'],
          ['$2\\dot r\\dot\\theta$', 'Aceleración de <b>Coriolis</b> — aparece cuando cambias de radio mientras giras.']
        ]},
        { t: 'box', kind: 'peras', title: '🍐 ¿Por qué aparecen $-r\\dot\\theta^2$ y $2\\dot r\\dot\\theta$?', html: 'Son los términos que muchos olvidan. $-r\\dot\\theta^2$ es la <b>aceleración centrípeta</b>: cualquier cosa que gira sufre una aceleración hacia adentro, aunque su rapidez no cambie. $2\\dot r\\dot\\theta$ (<b>Coriolis</b>) aparece porque al alargar el brazo mientras giras, la velocidad tangencial cambia (más radio = más velocidad tangencial a misma $\\dot\\theta$).' },
        { t: 'box', kind: 'warn', title: '⚠️ Trampas mortales', html: '• <b>Si $r=cte$</b> (círculo): $\\dot r=\\ddot r=0$, queda $\\vec v=r\\dot\\theta\\,\\hat u_\\theta$ y $\\vec a=-r\\dot\\theta^2\\,\\hat u_r+r\\ddot\\theta\\,\\hat u_\\theta$.<br>• <b>Si $\\dot\\theta=cte$</b> ("rapidez angular constante"): $\\ddot\\theta=0$.<br>• <b>Si el brazo se EXTIENDE</b> mientras gira: ojo con Coriolis $2\\dot r\\dot\\theta$. La gente lo olvida y se equivoca.<br>• Las fórmulas requieren que <b>$\\theta$ se mida desde un eje fijo</b> (no desde el brazo).' },
        { t: 'box', kind: 'def', title: 'Cilíndricas (3D) — solo añade $z$', html: 'Son las polares con un eje $z$ vertical:$$\\vec r=r\\,\\hat u_r+z\\,\\hat k$$$$\\vec v=\\dot r\\,\\hat u_r+r\\dot\\theta\\,\\hat u_\\theta+\\dot z\\,\\hat k$$$$\\vec a=(\\ddot r-r\\dot\\theta^2)\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\hat u_\\theta+\\ddot z\\,\\hat k$$ El cono y el helicoide se resuelven aquí.' }
      ]
    },
    {
      id: 'u3l3', title: 'Receta para resolver problemas en polares (la guía definitiva)',
      blocks: [
        { t: 'box', kind: 'def', title: 'Receta de 5 pasos', html: '<b>1.</b> Identifica $r(\\theta)$ o $r(t)$ y $\\theta(t)$ a partir de la geometría/datos.<br><b>2.</b> Calcula $\\dot r,\\ddot r$ derivando (regla de la cadena si $r$ depende de $\\theta$).<br><b>3.</b> Calcula $\\dot\\theta,\\ddot\\theta$ (si te dicen "$\\dot\\theta$ constante" → $\\ddot\\theta=0$).<br><b>4.</b> Sustituye en $\\vec v$ y $\\vec a$. Identifica componentes.<br><b>5.</b> Si te piden en cartesianas, usa la conversión de $\\hat u_r,\\hat u_\\theta$ a $\\hat i,\\hat j$.' },
        { t: 'box', kind: 'peras', title: '🍐 Truco: regla de la cadena cuando $r=r(\\theta)$', html: 'Si $r=f(\\theta)$ (geometría):$$\\dot r=\\dfrac{df}{d\\theta}\\dot\\theta,\\quad \\ddot r=\\dfrac{d^2f}{d\\theta^2}\\dot\\theta^2+\\dfrac{df}{d\\theta}\\ddot\\theta$$' }
      ]
    },
    {
      id: 'u3l4', title: 'Ejercicios Kumon: polares del fácil al examen real',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Círculo de radio R con velocidad angular constante', level: 'facil',
          body: '<p>Una partícula recorre una circunferencia de radio $R$ con velocidad angular $\\omega$ constante. Encuentra $\\vec v$ y $\\vec a$.</p>',
          solution: '<div class="steps"><div class="step">$r=R$ (constante) $\\Rightarrow \\dot r=0$, $\\ddot r=0$. $\\dot\\theta=\\omega$ cte $\\Rightarrow \\ddot\\theta=0$.</div><div class="step">$\\vec v=0\\cdot\\hat u_r+R\\omega\\,\\hat u_\\theta=\\boxed{R\\omega\\,\\hat u_\\theta}$. Solo tangencial.</div><div class="step">$\\vec a=(0-R\\omega^2)\\hat u_r+0=\\boxed{-R\\omega^2\\,\\hat u_r}$. Solo centrípeta, hacia el centro.</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Espiral $r=k\\theta$', level: 'medio',
          body: '<p>Una partícula se mueve en una espiral con $r=k\\theta$ y $\\dot\\theta=\\omega$ constante. Encuentra $\\vec v$ y $\\vec a$.</p>',
          solution: '<div class="steps"><div class="step">$\\dot r=k\\dot\\theta=k\\omega$, $\\ddot r=k\\ddot\\theta=0$.</div><div class="step">$\\vec v=k\\omega\\,\\hat u_r+k\\theta\\,\\omega\\,\\hat u_\\theta=\\boxed{k\\omega(\\hat u_r+\\theta\\,\\hat u_\\theta)}$.</div><div class="step">$\\vec a=(0-k\\theta\\,\\omega^2)\\hat u_r+(0+2k\\omega\\cdot\\omega)\\hat u_\\theta=\\boxed{-k\\theta\\omega^2\\,\\hat u_r+2k\\omega^2\\,\\hat u_\\theta}$.</div><div class="step">Coriolis aparece porque $\\dot r\\ne 0$ Y $\\dot\\theta\\ne 0$.</div></div>' },
        { t: 'example', title: 'Enunciado real · I1 2026 (Problema 2) — Brazo robótico', level: 'dificil',
          body: '<p><b>Fuente: I1 FIS1514, 1er sem 2026, Problema 2.</b> Un brazo robótico gira en el plano $xy$ y se extiende simultáneamente. La distancia fija desde $O$ a la articulación es $\\ell_0$, y la parte extensible es $\\ell(\\theta)=a\\sin\\theta$. La rapidez angular $\\dot\\theta=\\omega$ es constante. <b>(a)</b> Obtenga $\\vec v$ y $\\vec a$ en polares en función de $\\theta,a,\\omega,\\ell_0$. <b>(b)</b> Para $\\theta=30°,\\omega=2$ rad/s, $\\ell_0=1$ m, $a=2$ m, calcule $\\vec v$ y $\\vec a$ en cartesianas.</p>',
          solution: '<div class="steps"><div class="step"><b>Geometría:</b> $r(\\theta)=\\ell_0+a\\sin\\theta$. Derivo con regla de la cadena ($\\dot\\theta=\\omega$, $\\ddot\\theta=0$):</div><div class="step">$\\dot r=a\\cos\\theta\\cdot\\omega=a\\omega\\cos\\theta$.</div><div class="step">$\\ddot r=-a\\sin\\theta\\cdot\\omega^2+a\\cos\\theta\\cdot\\ddot\\theta=-a\\omega^2\\sin\\theta$ (porque $\\ddot\\theta=0$).</div><div class="step"><b>(a) Velocidad:</b> $\\boxed{\\vec v=a\\omega\\cos\\theta\\,\\hat u_r+(\\ell_0+a\\sin\\theta)\\omega\\,\\hat u_\\theta}$.</div><div class="step"><b>(a) Aceleración:</b> $a_r=\\ddot r-r\\dot\\theta^2=-a\\omega^2\\sin\\theta-(\\ell_0+a\\sin\\theta)\\omega^2=-\\omega^2(\\ell_0+2a\\sin\\theta)$.</div><div class="step">$a_\\theta=r\\ddot\\theta+2\\dot r\\dot\\theta=0+2(a\\omega\\cos\\theta)\\omega=2a\\omega^2\\cos\\theta$.</div><div class="step">$\\boxed{\\vec a=-\\omega^2(\\ell_0+2a\\sin\\theta)\\hat u_r+2a\\omega^2\\cos\\theta\\,\\hat u_\\theta}$.</div><div class="step"><b>(b) Numérico</b> ($\\theta=30°$, $\\sin30=0{,}5$, $\\cos30=\\sqrt3/2$):</div><div class="step">$r=1+2(0{,}5)=2$ m; $\\dot r=2\\cdot 2\\cdot\\sqrt3/2=2\\sqrt3$ m/s; $\\ddot r=-2\\cdot 4\\cdot 0{,}5=-4$ m/s².</div><div class="step">$\\vec v=2\\sqrt3\\,\\hat u_r+4\\,\\hat u_\\theta$ (m/s). $\\vec a=-12\\,\\hat u_r+8\\sqrt3\\,\\hat u_\\theta$ (m/s²).</div><div class="step">Conversión a cartesianas con $\\hat u_r=\\cos30\\,\\hat i+\\sin30\\,\\hat j$ y $\\hat u_\\theta=-\\sin30\\,\\hat i+\\cos30\\,\\hat j$:</div><div class="step">$\\vec v=(2\\sqrt3\\cdot\\sqrt3/2-4\\cdot 0{,}5)\\hat i+(2\\sqrt3\\cdot 0{,}5+4\\cdot\\sqrt3/2)\\hat j=(3-2)\\hat i+(\\sqrt3+2\\sqrt3)\\hat j=\\boxed{\\hat i+3\\sqrt3\\,\\hat j}$ m/s.</div><div class="step">$\\vec a=(-12\\cdot\\sqrt3/2-8\\sqrt3\\cdot 0{,}5)\\hat i+(-12\\cdot 0{,}5+8\\sqrt3\\cdot\\sqrt3/2)\\hat j=\\boxed{-10\\sqrt3\\,\\hat i+6\\,\\hat j}$ m/s².</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2024-2 (Problema 3) — Cono invertido', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2024, Problema 3.</b> Una partícula de masa $m$ está sobre la superficie interior de un cono invertido de $45°$ que gira con $\\omega_0$ constante en torno al eje $z$. Hay roce estático que la mantiene girando en un círculo a radio $R<g/\\omega_0^2$. <b>(a)</b> DCL + ecuaciones de movimiento. <b>(b)</b> Magnitud de la normal. <b>(c)</b> Magnitud del roce.</p>',
          solution: '<div class="steps"><div class="step"><b>📷 Idea:</b> en cilíndricas con $r=R$, $\\dot\\theta=\\omega_0$, $z=cte$, la aceleración es $\\vec a=-R\\omega_0^2\\,\\hat u_r$ (solo centrípeta).</div><div class="step"><b>DCL</b> (vista de frente): peso $mg$ abajo; normal $N$ perpendicular al cono (forma $45°$ con la horizontal, apunta hacia adentro y arriba); roce $f$ a lo largo del cono (puede ir hacia arriba o abajo del cono).</div><div class="step"><b>(b) Eje vertical</b> ($a_z=0$): $N\\cos45°+f\\sin45°-mg=0$ (si $f$ apunta hacia arriba del cono) o con signo opuesto.</div><div class="step"><b>Eje radial</b> ($a_r=-R\\omega_0^2$): $-N\\sin45°+f\\cos45°=-mR\\omega_0^2\\Rightarrow N\\sin45°-f\\cos45°=mR\\omega_0^2$.</div><div class="step">Sumando ($\\sin45=\\cos45=\\sqrt2/2$): $N\\sqrt2/2(1+1)\\cdot\\ldots$ resuelvo el sistema:</div><div class="step">$N+f=mg\\sqrt2$ (de la primera) y $N-f=mR\\omega_0^2\\sqrt2$ (de la segunda).</div><div class="step">Sumando: $\\boxed{N=\\dfrac{m(g+R\\omega_0^2)\\sqrt2}{2}=\\dfrac{m(g+R\\omega_0^2)}{\\sqrt2}}$.</div><div class="step">Restando: $\\boxed{f=\\dfrac{m(g-R\\omega_0^2)}{\\sqrt2}}$. (Como $R\\omega_0^2<g$ por dato, $f>0$ — confirma que apunta hacia arriba del cono).</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Velocidad en polares', a: '$\\vec v=\\dot r\\,\\hat u_r+r\\dot\\theta\\,\\hat u_\\theta$.' },
    { q: 'Aceleración en polares', a: '$\\vec a=(\\ddot r-r\\dot\\theta^2)\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\hat u_\\theta$.' },
    { q: '¿Cuál término es la centrípeta?', a: '$-r\\dot\\theta^2$ en la dirección radial. Siempre apunta al centro.' },
    { q: '¿Cuál término es la de Coriolis?', a: '$2\\dot r\\dot\\theta$ en la dirección tangencial. Aparece si $\\dot r\\ne 0$ y $\\dot\\theta\\ne 0$.' },
    { q: 'Si $r=cte$ y $\\dot\\theta=cte$, ¿cuál es $\\vec a$?', a: 'Solo centrípeta: $\\vec a=-r\\dot\\theta^2\\,\\hat u_r$. Coriolis se anula ($\\dot r=0$).' },
    { q: 'Si $r=r(\\theta)$, ¿cómo derivo $\\dot r$?', a: '$\\dot r=(dr/d\\theta)\\dot\\theta$ (regla de la cadena).' },
    { q: 'Cilíndricas: ¿qué se agrega?', a: 'Un eje $\\hat k$ vertical: $\\vec v$ y $\\vec a$ ganan un término $\\dot z\\,\\hat k$ y $\\ddot z\\,\\hat k$.' }
  ],
  quiz: [
    { type: 'comp', q: 'Una partícula está en un círculo de radio $R$ con $\\dot\\theta=\\omega$ cte. La aceleración es:', opts: ['$0$', '$R\\omega\\,\\hat u_\\theta$', '$-R\\omega^2\\,\\hat u_r$', '$R\\omega^2\\,\\hat u_r$'], answer: 2, explain: 'Solo centrípeta, hacia el centro: $-R\\omega^2\\,\\hat u_r$.' },
    { type: 'vf', q: 'La aceleración de Coriolis aparece solo si hay $\\dot r$ y $\\dot\\theta$ simultáneos.', opts: ['V', 'F'], answer: 0, explain: 'Verdadero. $2\\dot r\\dot\\theta=0$ si alguno de los dos es 0.' },
    { type: 'comp', q: 'En el problema del brazo robótico que se extiende y gira con $\\omega$ cte, ¿$\\ddot\\theta$ vale?', opts: ['$0$', '$\\omega^2$', '$\\omega$'], answer: 0, explain: '"$\\dot\\theta$ constante" significa $\\ddot\\theta=0$.' }
  ]
});

/* =====================================================================
   UNIDAD 4 — MOVIMIENTO RELATIVO
   ===================================================================== */
U({
  id: 'u4', block: 'cine', prio: 4, icon: '🚂',
  tag: 'Unidad 4 · Relativo',
  title: 'Movimiento relativo',
  badge: { text: 'Sale 0% · Peso 0%', cls: 'pill-new' },
  desc: '📊 No salió en los finales (cae en la I1) · "¿Cómo se ve la pelota desde el bote?". Lluvia con viento, río con corriente, avión vs aire. La fórmula clave es UNA.',
  lessons: [
    {
      id: 'u4l1', title: 'La idea: dos observadores distintos ven cosas distintas',
      blocks: [
        { t: 'p', html: 'Si vas en un auto a 60 km/h y otro auto va a 80 km/h en la misma dirección, desde el tuyo "el otro" se aleja a 20 km/h. Eso es velocidad relativa.' },
        { t: 'box', kind: 'form', title: 'La fórmula maestra (la única que tienes que memorizar)', html: '$$\\boxed{\\vec v_{A/B}=\\vec v_A-\\vec v_B}$$ Velocidad de A medida por B = velocidad absoluta de A menos la de B. Análogamente para aceleración: $\\vec a_{A/B}=\\vec a_A-\\vec a_B$.' },
        { t: 'box', kind: 'peras', title: '🍐 Cómo no equivocarse', html: 'La fórmula se "lee" de DERECHA a IZQUIERDA: para pasar del marco B al absoluto, sumas $\\vec v_B$.<br>$\\vec v_A=\\vec v_{A/B}+\\vec v_B$.<br>Ejemplo: si una pelota se mueve a $10$ m/s respecto al tren ($\\vec v_{pelota/tren}=10$), y el tren a $30$ ($\\vec v_{tren}=30$), respecto al suelo la pelota va a $\\vec v_{pelota}=10+30=40$ m/s.' },
        { t: 'box', kind: 'def', title: 'Vectorialmente', html: 'En 2D la sumas componente a componente. Dibuja un diagrama vectorial (triángulo) — es la mejor forma de no confundirse.' },
        { t: 'box', kind: 'warn', title: 'Trampa: subíndices', html: '$\\vec v_{A/B}\\ne \\vec v_{B/A}$ — son OPUESTOS: $\\vec v_{A/B}=-\\vec v_{B/A}$. Y $\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}$ (esquina con esquina).' }
      ]
    },
    {
      id: 'u4l2', title: 'Ejercicios Kumon: relativo del fácil al examen real',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Lluvia y peatón', level: 'facil',
          body: '<p>Llueve vertical a $10$ m/s. Tú caminas a $5$ m/s. ¿Bajo qué ángulo ves caer la lluvia?</p>',
          solution: '<div class="steps"><div class="step">$\\vec v_{lluvia}=-10\\,\\hat j$ (cae). $\\vec v_{tú}=5\\,\\hat i$. $\\vec v_{lluvia/tú}=\\vec v_{lluvia}-\\vec v_{tú}=-5\\,\\hat i-10\\,\\hat j$.</div><div class="step">Ves la lluvia venir HACIA TI desde adelante: ángulo con vertical $\\tan\\alpha=5/10=0{,}5\\Rightarrow \\alpha\\approx 26{,}6°$.</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Río con corriente', level: 'medio',
          body: '<p>Un río fluye a $3$ m/s. Tú nadas a $5$ m/s respecto al agua. Para cruzar perpendicular al río, ¿en qué dirección debes nadar?</p>',
          solution: '<div class="steps"><div class="step">Quieres $\\vec v_{tú/tierra}$ perpendicular al río. $\\vec v_{tú/tierra}=\\vec v_{tú/agua}+\\vec v_{agua/tierra}$.</div><div class="step">$\\vec v_{agua/tierra}=3\\,\\hat i$ (corriente). Para que $\\vec v_{tú/tierra}=v\\,\\hat j$, necesitas $\\vec v_{tú/agua}=-3\\,\\hat i+v\\,\\hat j$ con $|\\vec v_{tú/agua}|=5$: $\\sqrt{9+v^2}=5\\Rightarrow v=4$.</div><div class="step">Debes nadar formando ángulo $\\sin\\alpha=3/5\\Rightarrow \\alpha=37°$ contra la corriente. Llegas con velocidad $4$ m/s perpendicular.</div></div>' },
        { t: 'example', title: 'Ejercicio 2 · Avión con viento', level: 'medio',
          body: '<p>Un avión vuela a $200$ km/h respecto al aire. Hay viento de $50$ km/h del norte. Quieres llegar a un destino que está al este. ¿En qué rumbo apunta la nariz?</p>',
          solution: '<div class="steps"><div class="step">$\\vec v_{aire}=-50\\,\\hat j$ (viento DEL norte = sopla hacia el sur). Quieres $\\vec v_{avión/tierra}=v\\,\\hat i$.</div><div class="step">$\\vec v_{avión/aire}=\\vec v_{avión/tierra}-\\vec v_{aire}=v\\,\\hat i+50\\,\\hat j$. Magnitud $200$: $v^2+2500=40000\\Rightarrow v\\approx 193{,}65$.</div><div class="step">Apunta hacia el norte-este: $\\tan\\alpha=50/193{,}65\\Rightarrow \\alpha\\approx 14{,}5°$ al norte del este.</div></div>' },
        { t: 'example', title: 'Ejercicio 3 · Dos autos en intersección perpendicular', level: 'dificil',
          body: '<p>Auto A va al norte a $20$ m/s, auto B va al este a $15$ m/s. Desde A, ¿con qué velocidad ve a B?</p>',
          solution: '<div class="steps"><div class="step">$\\vec v_A=20\\,\\hat j$, $\\vec v_B=15\\,\\hat i$.</div><div class="step">$\\vec v_{B/A}=\\vec v_B-\\vec v_A=15\\,\\hat i-20\\,\\hat j$.</div><div class="step">Magnitud $|\\vec v_{B/A}|=\\sqrt{225+400}=25$ m/s. Ángulo: $\\tan\\theta=20/15=4/3\\Rightarrow \\theta\\approx 53°$ por debajo del este. (Triángulo 3-4-5 de nuevo.)</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Fórmula maestra', a: '$\\vec v_{A/B}=\\vec v_A-\\vec v_B$.' },
    { q: '¿Cómo paso de marco B al absoluto?', a: '$\\vec v_A=\\vec v_{A/B}+\\vec v_B$ (sumas la velocidad del marco).' },
    { q: '$\\vec v_{A/B}$ vs $\\vec v_{B/A}$', a: 'Son opuestos: $\\vec v_{A/B}=-\\vec v_{B/A}$.' },
    { q: 'Aceleración relativa', a: '$\\vec a_{A/B}=\\vec a_A-\\vec a_B$. (Solo en marcos inerciales).' }
  ],
  quiz: [
    { type: 'comp', q: 'Vas en un tren a 30 m/s. Tiras una pelota hacia atrás a 10 m/s respecto al tren. Respecto al suelo:', opts: ['40 m/s adelante', '20 m/s adelante', '10 m/s atrás', '30 m/s'], answer: 1, explain: '$\\vec v_{pelota}=\\vec v_{pelota/tren}+\\vec v_{tren}=-10+30=20$ m/s adelante.' },
    { type: 'vf', q: '$\\vec v_{A/B}=\\vec v_{B/A}$.', opts: ['V', 'F'], answer: 1, explain: 'Falso. Son opuestos.' }
  ]
});

/* =====================================================================
   UNIDAD 5 — LIGADURAS CINEMÁTICAS (POLEAS)
   ===================================================================== */
U({
  id: 'u5', block: 'cine', prio: 5, icon: '⛓️',
  tag: 'Unidad 5 · Ligaduras',
  title: 'Ligaduras cinemáticas (poleas)',
  badge: { text: 'Sale 0% · Peso 0%', cls: 'pill-new' },
  desc: '📊 No salió como problema dedicado (aparece DENTRO de otros) · Cuando varios cuerpos están unidos por cuerdas inextensibles, sus aceleraciones están relacionadas. Esa relación se llama ligadura y siempre cae en el examen.',
  lessons: [
    {
      id: 'u5l1', title: 'La idea: el largo de la cuerda es CONSTANTE',
      blocks: [
        { t: 'p', html: 'Si una cuerda no se estira, su largo total es constante. Al derivar dos veces, las velocidades y aceleraciones de los cuerpos quedan ligadas. Esa es toda la magia.' },
        { t: 'box', kind: 'def', title: 'Receta universal de ligaduras', html: '<b>1.</b> Marca posiciones (típicamente desde un punto fijo en el techo o pared).<br><b>2.</b> Escribe el LARGO total de la cuerda como suma de tramos = constante.<br><b>3.</b> Deriva una vez (velocidades).<br><b>4.</b> Deriva dos veces (aceleraciones). Esa es la ligadura.' },
        { t: 'box', kind: 'peras', title: '🍐 Ejemplo más simple: Atwood', html: 'Dos cuerpos colgados por una polea fija. Las posiciones $y_1,y_2$ desde el techo. La cuerda mide $y_1+y_2+(\\pi r)$ y eso es constante. Derivando: $\\dot y_1+\\dot y_2=0\\Rightarrow v_1=-v_2$. Y $a_1=-a_2$. Es decir, si uno baja, el otro sube con la misma aceleración.' }
      ]
    },
    {
      id: 'u5l2', title: 'Polea móvil: la famosa relación 2:1',
      blocks: [
        { t: 'p', html: 'Cuando hay una polea MÓVIL, el truco es que un mismo tramo de cuerda envuelve la polea dos veces. Eso multiplica.' },
        { t: 'box', kind: 'form', title: 'Relación 2:1', html: 'Si la polea sostiene un cuerpo A y la cuerda sale por arriba a un cuerpo B fijo, el cuerpo A se mueve la <b>mitad</b> de lo que se mueve la cuerda. Por tanto:$$v_B=2 v_A,\\quad a_B=2 a_A$$ (B es el que jala, A el que está colgando).' },
        { t: 'box', kind: 'peras', title: '🍐 Por qué', html: 'Si bajas $1$ m la cuerda, ambos tramos a la polea móvil se acortan $0{,}5$ m, entonces la polea sube $0{,}5$ m. Quien tira recorre $1$, quien sube recorre $0{,}5$. Por eso 2:1.' },
        { t: 'box', kind: 'def', title: 'Caso general', html: 'Si tienes una polea fija arriba y una móvil abajo con bloque A; el otro extremo de la cuerda pasa por la fija y tira del bloque B horizontal o vertical: la ligadura es $|s_B|=2|s_A|+cte$ y por tanto $|a_B|=2|a_A|$.' }
      ]
    },
    {
      id: 'u5l3', title: 'Ejercicios Kumon: ligaduras del fácil al examen real',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Atwood simple', level: 'facil',
          body: '<p>Dos masas $m_1,m_2$ por una polea fija. Encuentra la ligadura entre aceleraciones.</p>',
          solution: '<div class="steps"><div class="step">$y_1+y_2=L-\\pi r=cte$ (largos desde el centro de la polea).</div><div class="step">Derivando: $\\dot y_1=-\\dot y_2$ y $\\ddot y_1=-\\ddot y_2$, es decir $a_1=-a_2$ (con $y$ positivo hacia abajo, si uno baja el otro sube).</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Polea móvil 2:1', level: 'medio',
          body: '<p>Bloque A cuelga de una polea móvil. Una cuerda fija arriba pasa por la polea y va a un bloque B en el suelo. Si A se mueve con aceleración $a_A$ hacia abajo, ¿qué hace B?</p>',
          solution: '<div class="steps"><div class="step">$2y_A+x_B=cte$ (largo = dos tramos a la polea móvil + un tramo a B).</div><div class="step">Derivando: $2\\dot y_A+\\dot x_B=0$ y $2 a_A+a_B=0$.</div><div class="step">$\\boxed{a_B=-2a_A}$. Si A baja, B sube con el doble de aceleración.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2024-2 (Problema 1) — Dos planos inclinados con polea móvil', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2024, Problema 1.</b> Dos bloques A y B sobre una cuña de ángulos $\\alpha$ y $\\beta$ unidos por una cuerda y un sistema de poleas (con polea móvil en B). $m_A=2m$, $m_B=m$. Con la ligadura, ¿qué relación hay entre $a_A$ y $a_B$? Si A baja una distancia $d$, ¿cuánto sube B?</p>',
          solution: '<div class="steps"><div class="step"><b>Ligadura:</b> el largo es $\\ell=2r_B+r_A+cte$ (dos tramos a la polea móvil sobre B + un tramo a A).</div><div class="step">$\\Rightarrow 2\\Delta r_B+\\Delta r_A=0\\Rightarrow \\Delta r_B=-\\Delta r_A/2$.</div><div class="step">Pero ojo: la pauta dice $\\Delta r_B=2|\\Delta r_A|$ (B sube el doble) — depende de qué polea es móvil. Si la polea móvil cuelga del bloque A y la cuerda baja a B fijo, entonces $|\\Delta r_B|=2|\\Delta r_A|$ y $|a_B|=2|a_A|$.</div><div class="step">Cuando A recorre $d$ bajando, B recorre $2d$ subiendo. <b>Por tanto $v_B=-2v_A$ y $v_B^2=4 v_A^2$.</b></div><div class="step">Esta relación se usa después en energía: $\\tfrac12 m_A v_A^2+\\tfrac12 m_B v_B^2=\\tfrac12 (2m)v_A^2+\\tfrac12 m(4v_A^2)=3m v_A^2$. Eso simplifica brutal.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2023-2 (Problema 1) — Resorte y polea móvil', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2023, Problema 1.</b> Bloque 1 de masa $M$ en superficie horizontal sin roce, unido a un resorte $k$ y a una polea móvil $P$ vía una barra. Por la polea pasa una cuerda inextensible que sujeta al bloque 2 de masa $m$. (a) Encuentre la ligadura entre aceleraciones. (b) DCL y ecuaciones de movimiento. (c) Frecuencia de oscilación del bloque 1.</p>',
          solution: '<div class="steps"><div class="step"><b>(a) Ligadura:</b> sea $x_1(t)$ la posición del bloque 1 desde la pared izquierda, $y_2$ la posición del bloque 2 desde una polea fija (positivo hacia arriba), y $d_1(t)$ la distancia entre las dos poleas (móvil P, sujeta al bloque 1).</div><div class="step">Largo cuerda: $2d_1-y_2=cte$ (dos tramos a la polea móvil $-$ tramo a bloque 2 con signo por sentido).</div><div class="step">Como $d_1$ se relaciona con $x_1$: $x_1+d_1=cte$, entonces $2x_1+y_2=cte$.</div><div class="step">Derivando dos veces: $\\boxed{\\ddot y_2=-2\\ddot x_1}$.</div><div class="step"><b>(b) DCL bloque 1</b> (horizontal): resorte $-k(x_1-x_0)$ + dos tramos de tensión $T$ a la polea = $2T$. Newton: $M\\ddot x_1=-k(x_1-x_0)+2T$.</div><div class="step"><b>DCL bloque 2:</b> tensión $T$ arriba, peso $mg$ abajo. Newton ($y_2$ positivo arriba): $m\\ddot y_2=T-mg$.</div><div class="step"><b>(c)</b> De la ligadura: $\\ddot y_2=-2\\ddot x_1$, así $T=mg+m\\ddot y_2=mg-2m\\ddot x_1$. Sustituyo:</div><div class="step">$M\\ddot x_1=-k(x_1-x_0)+2(mg-2m\\ddot x_1)\\Rightarrow (M+4m)\\ddot x_1=-k(x_1-x_0)+2mg$.</div><div class="step">$\\boxed{\\omega=\\sqrt{\\dfrac{k}{M+4m}}}$. (La masa "efectiva" se infla por la ligadura.)</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Receta de ligadura', a: '1) Largo de cuerda = cte. 2) Derivo una y dos veces. 3) Esa es la relación entre velocidades y aceleraciones.' },
    { q: 'Polea fija, dos masas (Atwood)', a: '$a_1=-a_2$ (uno sube, otro baja, mismo módulo).' },
    { q: 'Polea móvil + cuerda al techo', a: 'Relación 2:1: $a_{tira}=2 a_{cuelga}$.' },
    { q: 'En la I2 2023-2, ¿cuál era la ligadura?', a: '$2x_1+y_2=cte$, así $\\ddot y_2=-2\\ddot x_1$. Y la masa efectiva era $M+4m$.' }
  ],
  quiz: [
    { type: 'comp', q: 'En una polea móvil con cuerda que baja desde el techo, sostiene un cuerpo y termina en otro que jala:', opts: ['$a_{jala}=a_{cuerpo}$', '$a_{jala}=2 a_{cuerpo}$', '$a_{jala}=a_{cuerpo}/2$'], answer: 1, explain: 'Quien jala recorre el doble de cuerda que la que se acorta el sostén.' },
    { type: 'vf', q: 'En un Atwood simple las aceleraciones tienen igual magnitud y signos opuestos.', opts: ['V', 'F'], answer: 0, explain: 'Sí: $a_1=-a_2$.' }
  ]
});

/* =====================================================================
   UNIDAD 6 — LEYES DE NEWTON, DCL Y ROCE
   ===================================================================== */
U({
  id: 'u6', block: 'newton', prio: 3, icon: '🟦',
  tag: 'Unidad 6 · Newton y DCL',
  title: 'Leyes de Newton y roce',
  badge: { text: 'Sale 0% · Peso 0%', cls: 'pill-new' },
  desc: '📊 No salió como problema dedicado en los finales · Las tres leyes, el DCL paso a paso, roce estático vs cinético, "¿se mueve o no?", planos inclinados con polea, fuerzas dependientes de la velocidad.',
  lessons: [
    {
      id: 'u6l1', title: 'Las tres leyes y los tipos de fuerza',
      blocks: [
        { t: 'p', html: 'Toda la dinámica se reduce a una frase: la fuerza neta sobre un cuerpo es su masa por su aceleración. Lo difícil no es la fórmula — es <b>identificar bien las fuerzas</b> (el DCL).' },
        { t: 'box', kind: 'form', title: 'Las tres leyes', html: '<b>1ª (inercia):</b> si $\\sum\\vec F=0$, el cuerpo sigue con velocidad constante (o quieto).<br><b>2ª:</b> $\\sum\\vec F=m\\vec a$ — la ley reina.<br><b>3ª (acción-reacción):</b> $\\vec F_{AB}=-\\vec F_{BA}$ — si A empuja a B, B empuja a A con igual fuerza y sentido opuesto. <b>Actúan en cuerpos distintos</b>, así que no se cancelan dentro de un DCL.' },
        { t: 'box', kind: 'def', title: 'Tipos de fuerza que verás', html: '<b>Peso</b> $m\\vec g$: vertical hacia abajo, magnitud $mg$.<br><b>Normal</b> $\\vec N$: perpendicular a la superficie, empuja (nunca tira), $N\\ge 0$. <b>Cuando $N=0$ el cuerpo despega</b>.<br><b>Tensión</b> $\\vec T$: a lo largo de la cuerda, SALE del cuerpo, magnitud igual a ambos lados de polea ideal.<br><b>Roce</b> $\\vec f$: paralelo a la superficie, opuesto al movimiento o tendencia.<br><b>Resorte</b> $\\vec F_e=-k\\Delta\\ell$ a lo largo del resorte, hacia el equilibrio.<br><b>Aplicada</b> $\\vec F$: la que diga el problema.' },
        { t: 'box', kind: 'form', title: 'Newton por componentes (la receta)', html: '$$\\sum F_x=ma_x,\\qquad \\sum F_y=ma_y$$ Elige ejes cómodos. En plano inclinado: paralelo y perpendicular al plano. En polares: $\\sum F_r=m(\\ddot r-r\\dot\\theta^2)$ y $\\sum F_\\theta=m(r\\ddot\\theta+2\\dot r\\dot\\theta)$.' },
        { t: 'box', kind: 'peras', title: '🍐 Idea con peras', html: 'La 2ª ley es como el precio de una aceleración. Para acelerar más (más $a$) o mover algo más pesado (más $m$), más fuerza neta. "Neta" = suma vectorial.' }
      ]
    },
    {
      id: 'u6l2', title: 'Roce estático vs cinético y "¿se mueve o no?"',
      blocks: [
        { t: 'box', kind: 'form', title: 'Roce: las dos versiones', html: '<b>Estático</b> (cuerpo quieto): $f_s\\le\\mu_s N$. Se "acomoda" para impedir el movimiento, hasta un máximo.<br><b>Cinético</b> (cuerpo deslizando): $f_k=\\mu_k N$, valor FIJO, opuesto a $\\vec v$.<br>Casi siempre $\\mu_s\\ge\\mu_k$ (cuesta más arrancar que mantener).' },
        { t: 'box', kind: 'warn', title: '⚠️ La trampa del roce estático', html: 'El roce estático NO siempre vale $\\mu_s N$: vale lo justo para mantener el equilibrio, y solo llega al máximo <b>justo cuando va a deslizar</b>. Por eso, para "¿se mueve?" comparas la fuerza que empuja contra $\\mu_s N$.' },
        { t: 'box', kind: 'def', title: 'Receta "¿se mueve o no?"', html: '<b>1.</b> Supón quieto. <b>2.</b> Calcula la fuerza que tiende a moverlo (ej. $mg\\sin\\theta$, o una fuerza aplicada). <b>3.</b> Calcula $\\mu_s N$ máximo. <b>4.</b> Si fuerza $>\\mu_s N$ ⇒ se mueve, recalcula con $\\mu_k$. Si $\\le$ ⇒ quieto, y $f_s$ vale lo justo (no su máximo).' },
        { t: 'example', title: 'Ejemplo guiado · Bloque en plano que apenas no desliza', level: 'facil',
          body: '<p>Inclinas un plano hasta que un bloque empieza a deslizar en $\\theta=\\alpha^*$. ¿Cuánto vale $\\mu_s$?</p>',
          solution: '<div class="steps"><div class="step">En el borde: $mg\\sin\\alpha^*=\\mu_s\\,mg\\cos\\alpha^*\\Rightarrow \\boxed{\\mu_s=\\tan\\alpha^*}$.</div></div>' },
        { t: 'example', title: 'Enunciado real · C2 2022 — bloques aluminio/cobre', level: 'medio',
          body: '<p><b>Fuente: C2 FIS1514, 2do sem 2022.</b> Bloque de aluminio $m_1=20$ kg horizontal y bloque de cobre $m_2=60$ kg sobre plano inclinado $\\theta=30°$, unidos por cuerda y polea ideal. Coeficientes (estáticos): aluminio-acero $\\mu_{s1}=0{,}61$; cobre-acero $\\mu_{s2}=0{,}74$. ¿Comienzan a moverse? Si no, ¿suma de magnitudes de roce?</p>',
          solution: '<div class="steps"><div class="step"><b>📷 Idea:</b> el cobre tiende a bajar el plano, jala al aluminio por la cuerda.</div><div class="step"><b>Fuerza motriz</b> = $m_2 g\\sin30=60\\cdot10\\cdot0{,}5=300$ N.</div><div class="step"><b>Roce estático máximo</b>: $N_1=m_1 g=200$ N $\\Rightarrow f_{1max}=0{,}61\\cdot 200=122$ N. $N_2=m_2 g\\cos30\\approx 522$ N $\\Rightarrow f_{2max}=0{,}74\\cdot 522\\approx 386$ N. Total disponible $\\approx 508$ N.</div><div class="step">$300 < 508 \\Rightarrow$ <b>NO se mueven</b>.</div><div class="step">Con $a=0$, la suma de los roces iguala la fuerza motriz: $\\boxed{f_1+f_2=300\\text{ N}}$ (no su máximo).</div></div>' }
      ]
    },
    {
      id: 'u6l3', title: 'Fuerzas que dependen de la velocidad: velocidad terminal',
      blocks: [
        { t: 'p', html: 'Cuando el aire frena con $F_D=bv$ o $cv^2$, el cuerpo deja de acelerar al llegar a la <b>velocidad terminal</b>: la velocidad a la que el frenado iguala al empuje.' },
        { t: 'box', kind: 'form', title: 'Velocidad terminal', html: 'Se alcanza cuando $a=0$ (fuerza neta = 0):$$\\text{empuje} = \\text{frenado}(v_t)$$' },
        { t: 'box', kind: 'peras', title: '🍐 Por qué', html: 'Al caer, mientras más rápido vas, más te frena el aire. Llega un punto en que el aire te frena tanto como te tira la gravedad: ahí dejas de acelerar y caes a velocidad constante. Eso es la velocidad terminal.' },
        { t: 'example', title: 'Enunciado real · Ayudantía 8 — globo', level: 'medio',
          body: '<p><b>Fuente: Ayudantía 8.</b> Globo de $M=500$ kg con flotación $F=6$ kN y resistencia $F_D=100v$ N. Velocidad terminal (sube partiendo del reposo)?</p>',
          solution: '<div class="steps"><div class="step">Newton (eje arriba): $F-Mg-100 v=Ma$. Velocidad terminal: $a=0$.</div><div class="step">Con $g=10$: $6000-5000-100 v_t=0\\Rightarrow \\boxed{v_t=10\\text{ m/s}}$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Newton, 2ª ley en componentes', a: '$\\sum F_x=ma_x$, $\\sum F_y=ma_y$.' },
    { q: 'Roce estático vs cinético', a: '$f_s\\le\\mu_s N$ (acomoda), $f_k=\\mu_k N$ (fijo).' },
    { q: 'Plano θ, ¿N?', a: '$N=mg\\cos\\theta$ si $a_\\perp=0$.' },
    { q: 'Velocidad terminal con $F_D=bv$ cayendo', a: '$mg=bv_t\\Rightarrow v_t=mg/b$.' },
    { q: '¿Cuándo el roce estático vale exactamente $\\mu_s N$?', a: 'Solo en el borde de deslizar. Antes vale menos.' }
  ],
  quiz: [
    { type: 'comp', q: 'Te piden el mínimo $\\mu$ para que un cuerpo no deslice. Usas:', opts: ['$f=\\mu_k N$', '$f_s=\\mu_s N$', 'Energía'], answer: 1, explain: 'Borde de deslizar: roce estático en su máximo.' },
    { type: 'vf', q: 'En un DCL van las fuerzas que el cuerpo ejerce sobre otros.', opts: ['V', 'F'], answer: 1, explain: 'Falso. Solo las que actúan SOBRE el cuerpo aislado.' }
  ]
});

/* =====================================================================
   UNIDAD 7 — SISTEMAS ACELERADOS Y CUÑAS
   ===================================================================== */
U({
  id: 'u7', block: 'newton', prio: 4, icon: '🛒',
  tag: 'Unidad 7 · Acelerados',
  title: 'Sistemas acelerados, cuñas y fuerzas de contacto',
  badge: { text: 'Sale 0% · Peso 0%', cls: 'pill-new' },
  desc: '📊 No salió en los finales · Carros que aceleran, bloques sobre cuñas, fuerzas de contacto en montajes que se mueven juntos. Aplicación directa de Newton.',
  lessons: [
    {
      id: 'u7l1', title: 'Estrategia para sistemas acelerados',
      blocks: [
        { t: 'box', kind: 'def', title: 'Receta', html: '<b>1.</b> Identifica si todo el sistema acelera con la MISMA $\\vec a$ (si nada resbala).<br><b>2.</b> Aplica Newton al sistema completo para encontrar $a$ (las fuerzas internas se cancelan).<br><b>3.</b> Aísla un cuerpo y aplica Newton para encontrar las fuerzas de contacto.<br><b>4.</b> Verifica que las normales sean positivas y los roces estén dentro del rango.' }
      ]
    },
    {
      id: 'u7l2', title: 'Ejercicios Kumon: acelerados y cuñas',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Bloque sobre carro sin roce', level: 'medio',
          body: '<p>Un carro de masa $M$ con un bloque de masa $m$ encima (sin roce entre ellos) se empuja con fuerza $F$. ¿Qué pasa con el bloque?</p>',
          solution: '<div class="steps"><div class="step">Sin roce, la única fuerza horizontal sobre el bloque es 0. Newton: $a_m=0$ (queda quieto en el suelo del laboratorio).</div><div class="step">El carro se mueve solo: $a_M=F/M$. El bloque "se queda atrás" hasta caerse.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2023 — Cuña con bloque que no resbala', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2023, Problema 2.</b> Bloque $m_2$ sobre cuña $m_1$ (ángulo $\\theta$) que descansa en mesa SIN roce. NO hay roce entre $m_2$ y la cuña. Se aplica fuerza horizontal $P$ a la cuña. (c) Encuentre la aceleración del sistema si $m_2$ no resbala. (d) Encuentre $P$ en esa condición.</p>',
          solution: '<div class="steps"><div class="step"><b>Idea:</b> si $m_2$ no resbala, ambas masas tienen la misma $a$ horizontal. La única fuerza horizontal sobre $m_2$ es la componente $x$ de la normal $N_2$ que la cuña le hace.</div><div class="step"><b>DCL de $m_2$:</b> peso $m_2 g$ abajo y normal $N_2$ perpendicular a la cara inclinada (forma ángulo $\\theta$ con la vertical).</div><div class="step">Componentes: horizontal $N_2\\sin\\theta=m_2 a$; vertical $N_2\\cos\\theta-m_2 g=0$.</div><div class="step">De vertical: $N_2=m_2 g/\\cos\\theta$. Reemplazo en horizontal: $\\boxed{a=g\\tan\\theta}$.</div><div class="step"><b>(d) Sistema completo en x:</b> $P=(m_1+m_2)a=\\boxed{(m_1+m_2)g\\tan\\theta}$.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2024 — Cilindro en carrito que acelera', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2024, Problema (mencionado).</b> Cilindro liso de masa $m$ en un carrito al que se le da aceleración $2g$ subiendo un plano de $\\tan\\theta=3/4$. Calcule $F_A$ (pared vertical) y $F_B$ (cara del plano).</p>',
          solution: '<div class="steps"><div class="step"><b>📷 Idea:</b> el cilindro se apoya en DOS puntos: A (pared vertical, normal horizontal) y B (cara del plano, normal perpendicular al plano).</div><div class="step">Ejes a lo largo del plano (x hacia arriba) y perpendicular (y). $\\vec a=2g\\,\\hat x$.</div><div class="step">Triángulo 3-4-5: $\\sin\\theta=0{,}6$, $\\cos\\theta=0{,}8$.</div><div class="step">Peso en ejes del plano: $(-mg\\sin\\theta,-mg\\cos\\theta)$. $F_A$ horizontal en ejes del plano: $(F_A\\cos\\theta,-F_A\\sin\\theta)$.</div><div class="step"><b>Eje x:</b> $F_A\\cos\\theta-mg\\sin\\theta=m(2g)\\Rightarrow 0{,}8 F_A-0{,}6 mg=2mg\\Rightarrow F_A=\\dfrac{2{,}6 mg}{0{,}8}=\\boxed{\\tfrac{13}{4}mg}$.</div><div class="step"><b>Eje y</b> ($a_y=0$): $F_B-mg\\cos\\theta-F_A\\sin\\theta=0\\Rightarrow F_B=0{,}8mg+\\tfrac{13}{4}mg\\cdot 0{,}6=\\boxed{\\tfrac{11}{4}mg}$.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2024-2 (Problema 2) — Bloques con MAS y roce estático', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2024, Problema 2.</b> Bloque $M$ sobre superficie sin roce, unido a un resorte $k$. Sobre él descansa $m$ (incógnita); entre ambos $\\mu_s$. Período $T$ de oscilación. (a) Encuentre $m$ en términos de $k,T,M$. (b) Ecuaciones de movimiento $x(t),\\dot x(t),\\ddot x(t)$ si parte del reposo a distancia $d$ del equilibrio. (c) $\\mu_s$ mínimo para que $m$ no deslice.</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> $T=2\\pi\\sqrt{(M+m)/k}\\Rightarrow \\boxed{m=\\dfrac{kT^2}{4\\pi^2}-M}$.</div><div class="step"><b>(b)</b> $\\omega=\\sqrt{k/(M+m)}=2\\pi/T$. Parte del reposo en $x=d$:</div><div class="step">$\\boxed{x(t)=d\\cos\\omega t,\\ \\dot x(t)=-d\\omega\\sin\\omega t,\\ \\ddot x(t)=-d\\omega^2\\cos\\omega t}$.</div><div class="step"><b>(c)</b> El roce estático sobre $m$ es la única fuerza horizontal y debe igualar $m\\ddot x$. Máximo $|\\ddot x|=d\\omega^2$.</div><div class="step">$\\mu_s m g\\ge m\\cdot d\\omega^2\\Rightarrow \\boxed{\\mu_s\\ge \\dfrac{d\\omega^2}{g}=\\dfrac{kd}{(M+m)g}}$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Receta para sistemas acelerados', a: '1) ¿Todo va con la misma $a$? 2) Newton al sistema completo. 3) Newton a una pieza para las fuerzas de contacto.' },
    { q: 'Bloque encima de cuña sin roce, fuerza P en la cuña, bloque no resbala', a: '$a=g\\tan\\theta$ y $P=(m_1+m_2)g\\tan\\theta$.' }
  ],
  quiz: [
    { type: 'comp', q: 'Bloque sobre cuña sin roce; si el sistema acelera tanto que el bloque "no resbala", ¿cuánto es $a$?', opts: ['$g\\sin\\theta$', '$g\\cos\\theta$', '$g\\tan\\theta$'], answer: 2, explain: 'De Newton del bloque sin roce: $a=g\\tan\\theta$.' }
  ]
});

/* =====================================================================
   UNIDAD 8 — MOVIMIENTO CIRCULAR DINÁMICO
   ===================================================================== */
U({
  id: 'u8', block: 'newton', prio: 5, icon: '🎡',
  tag: 'Unidad 8 · Circular',
  title: 'Movimiento circular con fuerzas (rizo, cono, polares con N)',
  badge: { text: 'Sale 33% · Peso 8%', cls: 'pill-new' },
  desc: '📊 Aparece en 33% · peso 8% · Aceleración centrípeta, rizo (loop), cono cónico, péndulo cónico, y problemas en polares donde la normal cambia.',
  lessons: [
    {
      id: 'u8l1', title: 'La idea: si gira, hay aceleración hacia el centro',
      blocks: [
        { t: 'box', kind: 'form', title: 'Aceleración centrípeta', html: 'Para un cuerpo en círculo de radio $R$ con rapidez $v$:$$a_c=\\dfrac{v^2}{R}=\\omega^2 R$$ Apunta SIEMPRE al centro. Si la rapidez cambia, hay también una tangencial $a_t=dv/dt$.' },
        { t: 'box', kind: 'def', title: 'Newton en circular', html: 'Eje radial (apunta al centro): $$\\sum F_r=\\dfrac{mv^2}{R}$$ Eje tangencial: $$\\sum F_t=ma_t$$ Y si hay un eje vertical separado, eso es Newton clásico ahí.' },
        { t: 'box', kind: 'peras', title: '🍐 ¿Por qué hay "fuerza hacia el centro"?', html: 'No es una fuerza, es una <b>consecuencia</b>. Si gira, la velocidad cambia de DIRECCIÓN (aunque no de magnitud), y eso es aceleración. La SUMA de las fuerzas reales tiene que dar esa aceleración hacia el centro. <b>NO inventes una "fuerza centrífuga"</b> en marcos inerciales.' }
      ]
    },
    {
      id: 'u8l2', title: 'Rizo (loop): la condición de "apenas completa"',
      blocks: [
        { t: 'box', kind: 'form', title: 'En el punto más alto del rizo', html: 'En la cima, peso y normal apuntan hacia abajo (hacia el centro):$$N+mg=\\dfrac{mv^2}{R}\\Rightarrow N=\\dfrac{mv^2}{R}-mg$$ El cuerpo está en contacto mientras $N\\ge 0$. <b>"Apenas completa el rizo"</b> = $N=0$:$$v_{cima}^2=gR$$' },
        { t: 'box', kind: 'peras', title: '🍐 Por qué', html: 'En la cima, el rizo TIRA hacia abajo (normal). Si vas muy lento, la gravedad sola ya es más que la centrípeta necesaria, y te DESPEGAS (caes hacia adentro). $N=0$ es el límite.' }
      ]
    },
    {
      id: 'u8l3', title: 'Ejercicios Kumon: circular del fácil al examen real',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Cuerda con piedra horizontal', level: 'facil',
          body: '<p>Piedra de masa $m$ atada a cuerda de largo $R$, gira en círculo horizontal con velocidad $v$. ¿Cuál es la tensión?</p>',
          solution: '<div class="steps"><div class="step">Sin gravedad relevante (círculo horizontal): la tensión es la centrípeta.</div><div class="step">$T=mv^2/R$.</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Vuelta vertical en cuerda', level: 'medio',
          body: '<p>Piedra atada a cuerda de largo $L$, va en círculo VERTICAL. En el punto más alto la rapidez es $v_{arr}$. (a) Tensión arriba. (b) Mínimo $v_{arr}$ para no destensar.</p>',
          solution: '<div class="steps"><div class="step">(a) Arriba, peso y tensión apuntan al centro: $T+mg=mv_{arr}^2/L\\Rightarrow T=m v_{arr}^2/L-mg$.</div><div class="step">(b) Mínimo $T=0\\Rightarrow v_{arr}^2=gL\\Rightarrow \\boxed{v_{arr,min}=\\sqrt{gL}}$.</div></div>' },
        { t: 'example', title: 'Ejercicio 2 · Péndulo cónico', level: 'medio',
          body: '<p>Una piedra cuelga de una cuerda de largo $L$ y gira en círculo horizontal con la cuerda formando ángulo $\\theta$ con la vertical. ¿Velocidad?</p>',
          solution: '<div class="steps"><div class="step">Radio del círculo: $R=L\\sin\\theta$.</div><div class="step">DCL: tensión $T$ a lo largo de la cuerda, peso $mg$ abajo. Componentes:</div><div class="step">Vertical ($a_y=0$): $T\\cos\\theta=mg$.</div><div class="step">Horizontal (centrípeta): $T\\sin\\theta=mv^2/R=mv^2/(L\\sin\\theta)$.</div><div class="step">Divido: $\\tan\\theta=v^2/(gL\\sin\\theta)\\Rightarrow v^2=gL\\sin\\theta\\tan\\theta\\Rightarrow \\boxed{v=\\sqrt{gL\\sin\\theta\\tan\\theta}}$.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2024-2 (Problema 3) — Cono invertido (revisitado)', level: 'dificil',
          body: '<p>Ya lo resolvimos en U3L4 con polares; aquí lo enfocamos como Newton. <b>Fuente: I2 FIS1514, 2do sem 2024.</b> Partícula en cono 45° invertido, gira con $\\omega_0$ a radio $R$. Con roce. Encuentra $N$ y $f$.</p>',
          solution: '<div class="steps"><div class="step">Ya lo hicimos. Repaso: $N=m(g+R\\omega_0^2)/\\sqrt2$, $f=m(g-R\\omega_0^2)/\\sqrt2$.</div></div>' },
        { t: 'example', title: 'Enunciado real · C2 2026 — Argolla en varilla circular con resorte', level: 'dificil',
          body: '<p><b>Fuente: C2 FIS1514, 1er sem 2026 (TU control).</b> Argolla en una guía circular vertical con un resorte; pidieron DCL, fuerza de contacto (normal) y aceleración usando Newton + polares (NO energía). La gente lo hizo mal — DOMÍNALO.</p>',
          solution: '<div class="steps"><div class="step"><b>Método:</b> 1) Identifica el radio $R$ del círculo. 2) Marca el ángulo $\\theta$ (típicamente con la vertical o horizontal). 3) DCL de la argolla: peso $mg$ abajo, normal $N$ perpendicular a la guía (puede ir hacia el centro o lejos del centro), fuerza del resorte $k\\Delta\\ell$ a lo largo del resorte.</div><div class="step"><b>Eje radial</b> (al centro del círculo): $\\sum F_r=m v^2/R$ (centrípeta).</div><div class="step"><b>Eje tangencial</b>: $\\sum F_t=m a_t=m R\\ddot\\theta$ (si va por una circunferencia).</div><div class="step">La velocidad $v$ se obtiene previo por <b>energía</b> entre dos puntos (típicamente partiendo del reposo en una posición conocida). Eso te da $v(\\theta)$.</div><div class="step">Con $v$ conocida, despejas $N$ del eje radial. La aceleración total es $\\vec a=R\\ddot\\theta\\,\\hat u_\\theta-(v^2/R)\\hat u_r$.</div><div class="step"><b>Lo que la gente olvida:</b> la deformación del resorte depende de la GEOMETRÍA — si el resorte va del centro a la argolla, $\\Delta\\ell=$ distancia actual − largo natural. Si va de otro punto fijo, hay que usar el triángulo.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Anillo que gira y se desprende de una circunferencia (2023-2)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen Dinámica 2do sem 2023, P1.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exB_p1.png" alt="Anillo girando en circunferencia que se desprende en angulo 30 grados" loading="lazy"><figcaption>📷 Examen anterior · Examen Dinámica 2do sem 2023, P1</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>Al desprenderse</b> en $\theta=30^\circ$, la velocidad es <b>tangente</b> a la circunferencia y de módulo $v=\omega R$ (movimiento circular uniforme antes del corte).</div><div class="step"><b>Desde ahí es un proyectil:</b> descompón $v$ en $v_x,v_y$ según la dirección tangente en el punto de corte y aplica cinemática de proyectil ($a_y=-g$, $a_x=0$) para hallar altura/alcance.</div><div class="step"><b>Gatillo:</b> "gira" + "se desprende/libremente" ⇒ circular para la velocidad de salida, luego proyectil.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Aceleración centrípeta', a: '$a_c=v^2/R=\\omega^2 R$. Apunta SIEMPRE al centro.' },
    { q: 'Condición "apenas completa el rizo"', a: '$N=0$ en la cima $\\Rightarrow v_{cima}^2=gR$.' },
    { q: 'Péndulo cónico, cuerda largo $L$, ángulo $\\theta$', a: '$v=\\sqrt{gL\\sin\\theta\\tan\\theta}$.' },
    { q: 'Newton en circular, ejes', a: 'Radial (al centro): $\\sum F_r=mv^2/R$. Tangencial: $\\sum F_t=ma_t$.' }
  ],
  quiz: [
    { type: 'comp', q: 'En el punto más alto de un rizo, "apenas completa" implica:', opts: ['$N=mg$', '$N=0$ y $v^2=gR$', '$v=0$'], answer: 1, explain: 'En el borde de despegar, $N=0$. Eso da $v^2=gR$.' },
    { type: 'vf', q: 'La aceleración centrífuga es una fuerza real.', opts: ['V', 'F'], answer: 1, explain: 'Falso. En marco inercial no existe — es la consecuencia de la rotación.' }
  ]
});

/* =====================================================================
   UNIDAD 9 — TRABAJO Y ENERGÍA CINÉTICA
   ===================================================================== */
U({
  id: 'u9', block: 'energia', prio: 6, icon: '⚡',
  tag: 'Unidad 9 · Trabajo y K',
  title: 'Trabajo y energía cinética',
  badge: { text: 'Sale 33% · Peso 13%', cls: 'pill-new' },
  desc: '📊 Aparece en 33% · peso 13% (trabajo-energía) · Trabajo de una fuerza, teorema W-K, trabajo de fuerzas típicas (peso, resorte, roce). La base del bloque más importante del examen.',
  lessons: [
    {
      id: 'u9l1', title: 'Trabajo: la fuerza por el desplazamiento (con producto punto)',
      blocks: [
        { t: 'box', kind: 'form', title: 'Definiciones', html: '$$W=\\int_{\\vec r_1}^{\\vec r_2}\\vec F\\cdot d\\vec r$$ Para $\\vec F$ constante y rectilíneo: $W=Fd\\cos\\theta$ con $\\theta$ ángulo entre $\\vec F$ y $\\vec d$.<br><br><b>Energía cinética:</b> $K=\\tfrac12 mv^2$ (escalar, $\\ge 0$).' },
        { t: 'box', kind: 'form', title: 'Teorema trabajo-energía (la fórmula reina)', html: '$$\\boxed{W_{tot}=\\Delta K=\\tfrac12 m v_f^2-\\tfrac12 m v_i^2}$$ $W_{tot}$ = suma del trabajo de TODAS las fuerzas (peso, normal, roce, tensión, resorte, aplicadas).' },
        { t: 'box', kind: 'peras', title: '🍐 Por qué sirve', html: 'Esta fórmula es brutal: <b>no necesitas saber el detalle del movimiento</b>. Solo $v_i$, $v_f$ y el trabajo total. Por eso "si pides velocidad sin tiempo, usa energía".' },
        { t: 'box', kind: 'def', title: 'Trabajo de fuerzas típicas (memorízalas)', html: '$W_{peso}=-mg\\,\\Delta h$ (positivo si baja).<br>$W_{resorte}=\\tfrac12 k(x_1^2-x_2^2)$ (positivo si el resorte se acerca al equilibrio).<br>$W_{roce\\,cinético}=-\\mu_k N\\,s$ con $s$ = distancia recorrida (siempre $<0$).<br>$W_{normal}=0$, $W_{tensión}=0$ (siempre perpendiculares al movimiento si la cuerda no se estira y la superficie no se separa).' }
      ]
    },
    {
      id: 'u9l2', title: 'Ejercicios Kumon: trabajo y energía',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Bloque empujado horizontal', level: 'facil',
          body: '<p>Bloque de $m=2$ kg en reposo. Lo empujas con $F=10$ N horizontal por $5$ m. $\\mu_k=0{,}2$. ¿Velocidad final?</p>',
          solution: '<div class="steps"><div class="step">$W_F=10\\cdot 5=50$ J. $W_{roce}=-\\mu_k mg\\cdot 5=-0{,}2\\cdot 2\\cdot 10\\cdot 5=-20$ J.</div><div class="step">$W_{tot}=30$ J $=\\Delta K=\\tfrac12(2)v^2\\Rightarrow v=\\sqrt{30}\\approx 5{,}48$ m/s.</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Cuerpo sube y baja por plano con roce', level: 'medio',
          body: '<p>Bloque de $m$ kg parte del pie del plano $\\theta=30°$ con $v_0=10$ m/s subiendo. $\\mu_k=0{,}3$. ¿Hasta qué distancia $d$ sube?</p>',
          solution: '<div class="steps"><div class="step">Subiendo, peso y roce frenan. $W_{tot}=-mg\\sin\\theta\\cdot d-\\mu_k mg\\cos\\theta\\cdot d=-mg d(\\sin\\theta+\\mu_k\\cos\\theta)$.</div><div class="step">$\\Delta K=0-\\tfrac12 m v_0^2$.</div><div class="step">$d=\\dfrac{v_0^2}{2g(\\sin\\theta+\\mu_k\\cos\\theta)}=\\dfrac{100}{2\\cdot10(0{,}5+0{,}3\\cdot 0{,}87)}\\approx \\boxed{6{,}55\\text{ m}}$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Teorema W-K', a: '$W_{tot}=\\Delta K=\\tfrac12 m v_f^2-\\tfrac12 m v_i^2$.' },
    { q: 'Trabajo del peso', a: '$W_{peso}=-mg\\Delta h$.' },
    { q: 'Trabajo del roce', a: '$W_{roce}=-\\mu_k N\\,s$ con $s$ distancia recorrida (siempre negativo).' },
    { q: 'Trabajo del resorte', a: '$W_e=\\tfrac12 k(x_1^2-x_2^2)$.' }
  ],
  quiz: [
    { type: 'comp', q: 'El trabajo del peso al subir $h$ es:', opts: ['$+mgh$', '$-mgh$', '0'], answer: 1, explain: 'Subir va contra el peso → trabajo negativo.' }
  ]
});

/* =====================================================================
   UNIDAD 10 — ENERGÍA POTENCIAL Y CONSERVACIÓN (CON Y SIN ROCE)
   ===================================================================== */
U({
  id: 'u10', block: 'energia', prio: 7, icon: '🏔️',
  tag: 'Unidad 10 · U y conservación',
  title: 'Energía potencial y conservación',
  badge: { text: 'Sale 33% · Peso 13%', cls: 'pill-new' },
  desc: '📊 Aparece en 33% · peso 13% (trabajo-energía) · Energía potencial gravitatoria y elástica, conservación de la energía mecánica, y la fórmula $E_f-E_i=W_{nc}$ para problemas con roce. Multi-tramo, resorte+roce, vueltas verticales.',
  lessons: [
    {
      id: 'u10l1', title: 'Energía potencial: gravitatoria y elástica',
      blocks: [
        { t: 'box', kind: 'form', title: 'Energías', html: '$$U_g=mgh\\quad\\text{(}h\\text{ desde referencia que tú eliges)}$$$$U_e=\\tfrac12 k(\\Delta\\ell)^2\\quad\\text{(}\\Delta\\ell\\text{ = deformación, no posición)}$$$$E=K+U_g+U_e$$' },
        { t: 'box', kind: 'peras', title: '🍐 Idea', html: 'La energía potencial es energía "guardada". Levantar algo lo carga de $U_g$; comprimir o estirar un resorte lo carga de $U_e$. Cuando se libera, se transforma en $K$.' },
        { t: 'box', kind: 'warn', title: '⚠️ Trampa típica', html: '$U_e$ usa <b>deformación</b> ($\\Delta\\ell$ = largo natural − largo actual o viceversa), <b>NO la posición</b> del extremo. Si el resorte se cae a su largo natural, $U_e=0$.' }
      ]
    },
    {
      id: 'u10l2', title: 'Conservación de la energía mecánica',
      blocks: [
        { t: 'box', kind: 'form', title: 'Sin roce ni $F$ externa: $E$ se conserva', html: '$$E_i=E_f$$$$\\tfrac12 m v_i^2+m g h_i+\\tfrac12 k(\\Delta\\ell_i)^2=\\tfrac12 m v_f^2+m g h_f+\\tfrac12 k(\\Delta\\ell_f)^2$$' },
        { t: 'box', kind: 'form', title: 'Con roce o $F$ externa: $W_{nc}$', html: '$$\\boxed{E_f-E_i=W_{nc}}$$ donde $W_{nc}=W_{roce}+W_{F_{ext}}$. El roce siempre da $W_{roce}<0$.' },
        { t: 'box', kind: 'peras', title: 'En plano con roce', html: '$N=mg\\cos\\theta$, $W_{roce}=-\\mu_k mg\\cos\\theta\\cdot s$ donde $s$ es la distancia EN el plano ($s=h/\\sin\\theta$ si caes altura $h$).' }
      ]
    },
    {
      id: 'u10l3', title: 'Ejercicios Kumon: energía del fácil al examen real',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Pelota baja rampa lisa', level: 'facil',
          body: '<p>Pelota cae rampa lisa de altura $H$. Velocidad abajo?</p>',
          solution: '<div class="steps"><div class="step">$mgh=\\tfrac12 mv^2\\Rightarrow v=\\sqrt{2gH}$.</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Resorte lanza bloque', level: 'facil',
          body: '<p>Resorte $k$ comprimido $x_0$ lanza bloque $m$ en superficie horizontal lisa. Velocidad cuando se separa?</p>',
          solution: '<div class="steps"><div class="step">$\\tfrac12 k x_0^2=\\tfrac12 m v^2\\Rightarrow v=x_0\\sqrt{k/m}$.</div></div>' },
        { t: 'example', title: 'Ejercicio 2 · Resorte y roce', level: 'medio',
          body: '<p>Bloque $m=2$ kg, $k=200$ N/m comprimido $x_0=0{,}5$ m. Suelta en horizontal con $\\mu_k=0{,}2$. ¿Hasta dónde llega tras separarse del resorte?</p>',
          solution: '<div class="steps"><div class="step">Energía del resorte = $\\tfrac12\\cdot 200\\cdot 0{,}25=25$ J.</div><div class="step">Se gasta en roce hasta que $K=0$: $25=\\mu_k m g\\cdot d=0{,}2\\cdot 2\\cdot 10\\cdot d=4d\\Rightarrow d=6{,}25$ m.</div></div>' },
        { t: 'example', title: 'Enunciado real · C2 2021 — Multi-tramo con resorte y roce', level: 'dificil',
          body: '<p><b>Fuente: C2 FIS1514, 1er sem 2021.</b> Bloque-resorte horizontal con largo natural $\\ell_0=3mg/k$, comprimido, lanzado a B, sube plano inclinado con roce. ¿Altura final?</p>',
          solution: '<div class="steps"><div class="step">Plantear $E_f-E_i=W_{nc}$ con los términos de cada tramo. Energía elástica inicial $\\tfrac12 k\\Delta_0^2$ se gasta en: (i) energía potencial al subir altura $h$, (ii) trabajo del roce en el plano $-\\mu mg\\cos\\theta\\cdot(h/\\sin\\theta)$.</div><div class="step">$\\tfrac12 k\\Delta_0^2=mgh+\\mu mg(h/\\tan\\theta)\\Rightarrow h=\\dfrac{k\\Delta_0^2}{2mg(1+\\mu/\\tan\\theta)}$.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2023-2 (P2) — Resorte con roce ida y vuelta', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2023, Problema 2.</b> Masa $M$ con resorte $k$, $\\mu_k=\\mu_s$. Inicial: resorte comprimido $\\delta_0$. Suelta. Alcanza elongación máxima $\\delta_1$, luego vuelve a compresión $\\delta_2$. Encuentra $\\delta_1$ y $\\delta_2$.</p>',
          solution: '<div class="steps"><div class="step">$E_0=\\tfrac12 k\\delta_0^2$. En extremo opuesto $E_1=\\tfrac12 k\\delta_1^2$. El roce trabaja en distancia $\\delta_0+\\delta_1$: $W=-\\mu mg(\\delta_0+\\delta_1)$.</div><div class="step">$\\Delta E=E_1-E_0=W\\Rightarrow \\tfrac12 k(\\delta_1^2-\\delta_0^2)=-\\mu mg(\\delta_0+\\delta_1)$.</div><div class="step">Factorizo: $\\tfrac12 k(\\delta_1-\\delta_0)=-\\mu mg\\Rightarrow \\boxed{\\delta_1=\\delta_0-\\dfrac{2\\mu mg}{k}}$.</div><div class="step">Repito vuelta: $\\boxed{\\delta_2=\\delta_0-\\dfrac{4\\mu mg}{k}}$. Patrón: cada media oscilación pierde $2\\mu mg/k$ de amplitud.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2023-2 (P3) — Rizo con resorte', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2023, Problema 3.</b> Resorte $k$ comprimido $\\Delta$ lanza masa $m$ que pasa por rizo de radio $a$, pasa por el punto más alto C sin despegarse. Sin roce. (a) Velocidad en C. (b) Velocidad en E (mismo nivel del resorte). (c) $\\Delta$ mínimo para realizar lo descrito.</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> $E_0=\\tfrac12 k\\Delta^2=E_C=\\tfrac12 m v_C^2+2mga$ (altura $2a$ desde el suelo). $\\Rightarrow v_C^2=k\\Delta^2/m-4ga$.</div><div class="step"><b>(b)</b> En E (vuelve al nivel inicial): $v_E^2=k\\Delta^2/m$.</div><div class="step"><b>(c)</b> Para no despegar en C: $v_C^2\\ge ga$. $k\\Delta^2/m-4ga\\ge ga\\Rightarrow \\boxed{\\Delta_{min}=\\sqrt{5mga/k}}$.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2024-2 (P1) — Bloques con polea móvil + roce', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2024, Problema 1.</b> $m_A=2m$ baja plano $\\alpha$ con roce $\\mu_c$, $m_B=m$ sube plano $\\beta$ sin roce, unidos por polea móvil (relación 2:1). $A$ recorre distancia $d$. Encuentra $v_A$.</p>',
          solution: '<div class="steps"><div class="step"><b>Ligadura:</b> $|v_B|=2|v_A|$, $|\\Delta r_B|=2|\\Delta r_A|=2d$.</div><div class="step"><b>Trabajo del roce sobre A:</b> $W_{roce}=-\\mu_c m_A g\\cos\\alpha\\cdot d=-2\\mu_c m g d\\cos\\alpha$.</div><div class="step"><b>Balance:</b> $W_{nc}=\\Delta K_A+\\Delta K_B+\\Delta U_A+\\Delta U_B$.</div><div class="step">$\\Delta K_A=\\tfrac12(2m)v_A^2$, $\\Delta K_B=\\tfrac12 m(2v_A)^2=2m v_A^2$, total $K=3m v_A^2$.</div><div class="step">$\\Delta U_A=-2m g d\\sin\\alpha$ (baja), $\\Delta U_B=+m g(2d)\\sin\\beta$ (sube doble).</div><div class="step">$-2\\mu_c m g d\\cos\\alpha=3m v_A^2-2mgd\\sin\\alpha+2mgd\\sin\\beta$.</div><div class="step">$\\boxed{v_A=\\sqrt{\\dfrac{-2gd(\\mu_c\\cos\\alpha-\\sin\\alpha+\\sin\\beta)}{3}}}$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Conservación de energía sin roce', a: '$E_i=E_f$, donde $E=K+U_g+U_e$.' },
    { q: 'Con roce', a: '$E_f-E_i=W_{nc}=-\\mu_k N\\,s+\\ldots$' },
    { q: 'Energía resorte', a: '$U_e=\\tfrac12 k(\\Delta\\ell)^2$ — ojo: deformación, no posición.' },
    { q: 'Multi-tramo plano $\\theta$+horizontal $L$, todo con $\\mu$', a: '$v_C=\\sqrt{v_0^2+2gd\\sin\\theta-2\\mu g(d\\cos\\theta+L)}$.' },
    { q: 'Cada media oscilación con roce', a: 'Amplitud pierde $2\\mu mg/k$ (decae linealmente, no exponencial).' }
  ],
  quiz: [
    { type: 'comp', q: 'Sin roce, si te piden velocidad entre dos puntos:', opts: ['Newton', 'Energía $E_i=E_f$', 'Momentum'], answer: 1, explain: 'Sin roce y sin tiempo, energía conserva.' },
    { type: 'vf', q: 'El trabajo de la normal es cero si la superficie no se separa.', opts: ['V', 'F'], answer: 0, explain: 'Verdadero: la normal es perpendicular al movimiento.' }
  ]
});

/* =====================================================================
   UNIDAD 11 — MAS (MOVIMIENTO ARMÓNICO SIMPLE)
   ===================================================================== */
U({
  id: 'u11', block: 'energia', prio: 8, icon: '🪀',
  tag: 'Unidad 11 · MAS',
  title: 'Movimiento armónico simple',
  badge: { text: 'Sale 0% · Peso 0%', cls: 'pill-new' },
  desc: '📊 No salió en estos finales (pero clásico de la I2) · Resorte, péndulo simple, sistemas equivalentes. $\\omega,T,f$, $x(t),v(t),a(t)$ y energía en MAS. Las condiciones iniciales son la trampa más común.',
  lessons: [
    {
      id: 'u11l1', title: 'La ecuación maestra y sus soluciones',
      blocks: [
        { t: 'box', kind: 'form', title: 'Ecuación del MAS', html: 'Cualquier sistema con $F_{neta}=-kx$ (lineal en el desplazamiento) cumple$$\\ddot x=-\\omega^2 x,\\quad \\omega=\\sqrt{k/m}$$ Solución general:$$x(t)=A\\cos(\\omega t+\\phi)$$$$v(t)=-A\\omega\\sin(\\omega t+\\phi)$$$$a(t)=-A\\omega^2\\cos(\\omega t+\\phi)=-\\omega^2 x$$' },
        { t: 'vars', items: [
          ['$A$', 'Amplitud (máximo desplazamiento desde equilibrio).'],
          ['$\\omega$', 'Frecuencia angular: $\\omega=\\sqrt{k/m}$.'],
          ['$T$', 'Período: $T=2\\pi/\\omega=2\\pi\\sqrt{m/k}$.'],
          ['$f$', 'Frecuencia: $f=1/T$.'],
          ['$\\phi$', 'Fase (depende de las condiciones iniciales).'],
          ['$v_{max}$', '$A\\omega$ (en el equilibrio).'],
          ['$a_{max}$', '$A\\omega^2$ (en los extremos).']
        ]},
        { t: 'box', kind: 'form', title: 'Energía en MAS', html: '$$E=\\tfrac12 kA^2=\\tfrac12 m v_{max}^2$$ Y en cualquier $x$: $\\tfrac12 k A^2=\\tfrac12 m v^2+\\tfrac12 k x^2$. La energía se reparte entre $K$ y $U_e$, pero el total es constante.' }
      ]
    },
    {
      id: 'u11l2', title: 'Condiciones iniciales: encontrar $A$ y $\\phi$',
      blocks: [
        { t: 'box', kind: 'def', title: 'Cómo se hace', html: 'Con $x(0)=x_0$ y $v(0)=v_0$:<br>$x_0=A\\cos\\phi$, $v_0=-A\\omega\\sin\\phi$.<br>$\\Rightarrow A=\\sqrt{x_0^2+(v_0/\\omega)^2}$, $\\tan\\phi=-v_0/(\\omega x_0)$.' },
        { t: 'box', kind: 'peras', title: 'Truco rápido', html: 'Si parte del REPOSO en $x=A$: $x(t)=A\\cos(\\omega t)$ (fase 0).<br>Si parte del EQUILIBRIO con $v_0>0$: $x(t)=(v_0/\\omega)\\sin(\\omega t)$.' },
        { t: 'box', kind: 'warn', title: '⚠️ MAS vertical o inclinado', html: 'La gravedad NO cambia $\\omega$. Solo corre el equilibrio: $x_{eq}=mg/k$ (vertical) o $mg\\sin\\theta/k$ (incl.). Mide $x$ desde el nuevo equilibrio y todo igual.' }
      ]
    },
    {
      id: 'u11l3', title: 'Ejercicios Kumon: MAS',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · MAS básico', level: 'facil',
          body: '<p>Masa $m=1$ kg en resorte $k=100$ N/m. Le tiras hasta $A=0{,}1$ m y sueltas. ¿$\\omega$, $T$, $v_{max}$?</p>',
          solution: '<div class="steps"><div class="step">$\\omega=\\sqrt{100/1}=10$ rad/s. $T=2\\pi/10\\approx 0{,}628$ s.</div><div class="step">$v_{max}=A\\omega=1$ m/s.</div><div class="step">$x(t)=0{,}1\\cos(10 t)$ (sale del reposo en $A$).</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2023-2 (P1) — Bloque resorte con ligadura', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2023, Problema 1.</b> Ya vista en U5. Tras la ligadura, la ecuación es $(M+4m)\\ddot x_1=-k(x_1-x_0)+2mg$. (c) Frecuencia. (d) Si $x_1(0)=2x_0$ y $\\dot x_1(0)=0$, encuentra $x_1(t)$.</p>',
          solution: '<div class="steps"><div class="step"><b>(c)</b> $\\omega=\\sqrt{k/(M+4m)}$.</div><div class="step"><b>(d)</b> El equilibrio: $-k(x_{eq}-x_0)+2mg=0\\Rightarrow x_{eq}=x_0+2mg/k$.</div><div class="step">Sea $y=x_1-x_{eq}\\Rightarrow \\ddot y=-\\omega^2 y$. Condiciones: $y(0)=2x_0-x_{eq}=x_0-2mg/k$, $\\dot y(0)=0$.</div><div class="step">$y(t)=(x_0-2mg/k)\\cos\\omega t\\Rightarrow \\boxed{x_1(t)=x_0+\\dfrac{2mg}{k}+\\left(x_0-\\dfrac{2mg}{k}\\right)\\cos\\omega t}$.</div></div>' },
        { t: 'example', title: 'Enunciado real · I2 2024-2 (P2) — Bloque sobre bloque con MAS', level: 'dificil',
          body: '<p><b>Fuente: I2 FIS1514, 2do sem 2024, Problema 2.</b> Bloque $M$ en superficie sin roce con resorte $k$. Encima descansa $m$ (incógnita); entre ellos $\\mu_s$. Período $T$. Encuentra (a) $m$, (b) $x(t),\\dot x(t),\\ddot x(t)$ si parte del reposo a $d$, (c) $\\mu_s$ mínimo.</p>',
          solution: '<div class="steps"><div class="step">Ya resuelto en U7. Repaso: $m=kT^2/(4\\pi^2)-M$; $x=d\\cos\\omega t$; $\\mu_s\\ge kd/[(M+m)g]$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Ecuación del MAS', a: '$\\ddot x=-\\omega^2 x$, solución $x=A\\cos(\\omega t+\\phi)$.' },
    { q: 'Frecuencia angular y período', a: '$\\omega=\\sqrt{k/m}$, $T=2\\pi\\sqrt{m/k}$.' },
    { q: '$v_{max}$ y dónde', a: '$v_{max}=A\\omega$, en el equilibrio.' },
    { q: 'Energía total', a: '$E=\\tfrac12 kA^2=\\tfrac12 m v_{max}^2$ (constante).' },
    { q: 'Vertical: ¿$\\omega$ cambia?', a: 'NO. La gravedad solo corre el equilibrio a $x_{eq}=mg/k$.' }
  ],
  quiz: [
    { type: 'vf', q: 'El período del MAS depende de la amplitud.', opts: ['V', 'F'], answer: 1, explain: 'Falso. $T=2\\pi\\sqrt{m/k}$, no depende de $A$.' },
    { type: 'comp', q: 'Si parte del equilibrio con velocidad $v_0$:', opts: ['$x=A\\cos\\omega t$', '$x=(v_0/\\omega)\\sin\\omega t$', '$x=v_0\\cos\\omega t$'], answer: 1, explain: 'Fase $\\pi/2$: $x=A\\sin\\omega t$ con $A=v_0/\\omega$.' }
  ]
});

/* =====================================================================
   UNIDAD 12 — IMPULSO, MOMENTUM Y CHOQUES
   ===================================================================== */
U({
  id: 'u12', block: 'momentum', prio: 9, icon: '💥',
  tag: 'Unidad 12 · Momentum',
  title: 'Impulso, momentum y choques',
  badge: { text: 'Sale 50% · Peso 13%', cls: 'pill-hot' },
  desc: '📊 Aparece en 50% · peso 13% · Impulso, conservación de momentum, choques elásticos e inelásticos. Las dos ecuaciones para choques 2D.',
  lessons: [
    {
      id: 'u12l1', title: 'Impulso y momentum lineal',
      blocks: [
        { t: 'box', kind: 'form', title: 'Definiciones', html: '$$\\vec p=m\\vec v\\quad\\text{(momentum)}$$$$\\vec J=\\int\\vec F\\,dt=\\Delta\\vec p\\quad\\text{(impulso)}$$ Si $\\vec F$ constante: $\\vec J=\\vec F\\Delta t$.' },
        { t: 'box', kind: 'form', title: 'Conservación', html: 'Si no hay $\\vec F$ externa neta sobre un SISTEMA:$$\\sum m_i\\vec v_i\\Big|_{antes}=\\sum m_i\\vec v_i\\Big|_{después}$$ Aplica EN CADA EJE por separado.' },
        { t: 'box', kind: 'peras', title: 'Cuándo aplicarla en un choque', html: 'Durante un choque breve, las fuerzas internas son enormes y las externas (peso, fricción ambiente) son chicas en comparación. El impulso de las externas es despreciable: <b>el momentum se conserva durante el choque</b>.' }
      ]
    },
    {
      id: 'u12l2', title: 'Choques elásticos vs inelásticos',
      blocks: [
        { t: 'box', kind: 'def', title: 'Tipos', html: '<b>Elástico:</b> se conservan momentum Y energía cinética. Rebote ideal.<br><b>Inelástico:</b> solo momentum. Se pierde algo de $K$ (a deformación, calor, sonido).<br><b>Perfectamente inelástico:</b> quedan PEGADOS. Máxima pérdida de $K$ compatible con conservación de $\\vec p$.' },
        { t: 'box', kind: 'form', title: 'Choque 1D elástico (fórmulas memorizables)', html: 'Dos cuerpos, $m_1$ con $v_1$ choca a $m_2$ en reposo:$$v_1\\prime=\\dfrac{m_1-m_2}{m_1+m_2}v_1,\\quad v_2\\prime=\\dfrac{2m_1}{m_1+m_2}v_1$$' },
        { t: 'box', kind: 'form', title: 'Perfectamente inelástico 1D', html: '$m_1 v_1=(m_1+m_2)v\\Rightarrow v=\\dfrac{m_1 v_1}{m_1+m_2}$. Pérdida de $K$: $\\Delta K=-\\dfrac{m_1 m_2 v_1^2}{2(m_1+m_2)}$.' },
        { t: 'box', kind: 'peras', title: 'Cómo decidir en problema mixto', html: 'Problema típico: péndulo balístico (bala se clava en bloque, sube altura $h$).<br>• <b>Choque:</b> momentum (no energía, porque se pierde al clavarse).<br>• <b>Subida después:</b> energía (no momentum, porque ahora actúa el peso).<br><b>NO mezcles</b>: cada fase tiene su método.' }
      ]
    },
    {
      id: 'u12l3', title: 'Ejercicios Kumon: momentum y choques',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Péndulo balístico', level: 'medio',
          body: '<p>Bala $m$ a velocidad $v$ se clava en bloque $M$ colgado. ¿Hasta qué altura sube?</p>',
          solution: '<div class="steps"><div class="step"><b>Choque (momentum):</b> $mv=(m+M)V\\Rightarrow V=mv/(m+M)$.</div><div class="step"><b>Subida (energía):</b> $\\tfrac12(m+M)V^2=(m+M)gh\\Rightarrow h=V^2/(2g)=\\boxed{\\dfrac{m^2 v^2}{2g(m+M)^2}}$.</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Cañón retrocede', level: 'facil',
          body: '<p>Cañón $M=200$ kg dispara bala $m=2$ kg a $v=300$ m/s horizontal. Velocidad de retroceso?</p>',
          solution: '<div class="steps"><div class="step">$\\vec p_i=0$, $\\vec p_f=mv+MV=0\\Rightarrow V=-mv/M=-3$ m/s.</div></div>' },
        { t: 'example', title: 'Ejercicio 2 · Choque elástico 1D', level: 'medio',
          body: '<p>$m_1=2$ kg a $v_1=10$ m/s choca elástico a $m_2=3$ kg en reposo. ¿Velocidades finales?</p>',
          solution: '<div class="steps"><div class="step">$v_1\\prime=(2-3)/5\\cdot 10=-2$ m/s. $v_2\\prime=4/5\\cdot 10=8$ m/s.</div><div class="step">Verifico momentum: $20=2(-2)+3(8)=-4+24=20$ ✓. $K$: $100=4+96=100$ ✓.</div></div>' },
        { t: 'example', title: 'Ejercicio 3 · Choque 2D', level: 'dificil',
          body: '<p>$m$ a velocidad $v_0\\hat i$ choca a $m$ en reposo. Después de chocar, $m$ original sale a $30°$ sobre la horizontal. ¿Velocidades finales (elástico)?</p>',
          solution: '<div class="steps"><div class="step">Por simetría (masas iguales, elástico): los dos salen perpendiculares: la otra masa a $-60°$.</div><div class="step">Conservación $p_x$: $mv_0=mv_1\\cos30+mv_2\\cos60\\Rightarrow v_0=v_1\\sqrt3/2+v_2/2$.</div><div class="step">$p_y$: $0=v_1\\sin30-v_2\\sin60\\Rightarrow v_2=v_1/\\sqrt3$.</div><div class="step">Sustituyo: $v_0=v_1\\sqrt3/2+v_1/(2\\sqrt3)=v_1(3/(2\\sqrt3)+1/(2\\sqrt3))=2v_1/\\sqrt3\\Rightarrow v_1=v_0\\sqrt3/2$, $v_2=v_0/2$.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Esquiador que agarra una mochila + rampa con roce (2024-2)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen FIS1514 2do sem 2024, P1.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exD_p1.png" alt="Persona esquia sin friccion, agarra una mochila y sube una saliente" loading="lazy"><figcaption>📷 Examen anterior · Examen FIS1514 2do sem 2024, P1</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>Tres fases — método distinto en cada una.</b></div><div class="step"><b>(1) Energía A→B</b> (colina lisa): $v_B=\sqrt{2g\,h_1}$.</div><div class="step"><b>(2) Choque inelástico</b> al agarrar la mochila (momentum, NO energía): $m_1 v_B=(m_1+m_2)v_{BC}\Rightarrow v_{BC}=\dfrac{m_1 v_B}{m_1+m_2}$.</div><div class="step"><b>(3) Energía B→C con roce</b> (sube $h_2$ y recorre $d_1$ con $\mu_c$): $\tfrac12(m_1+m_2)v_{BC}^2=(m_1+m_2)g\,h_2+\mu_c(m_1+m_2)g\,d_1+\tfrac12(m_1+m_2)v_C^2$, despejas $v_C$.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Péndulo balístico: bala se incrusta en bloque con resorte (2022)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen Dinámica 2do sem 2022, P2.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exE_p2.png" alt="Bala se incrusta en un bloque unido a un resorte" loading="lazy"><figcaption>📷 Examen anterior · Examen Dinámica 2do sem 2022, P2</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>(1) Choque inelástico</b> (momentum): $m v_0=(m+M)V\Rightarrow V=\dfrac{m v_0}{m+M}$.</div><div class="step"><b>(2) Después del choque, energía</b>: la energía cinética del conjunto se transforma en el resorte (o en subir). Máxima compresión: $\tfrac12(m+M)V^2=\tfrac12 k\,\delta^2\Rightarrow \delta=V\sqrt{\dfrac{m+M}{k}}$.</div><div class="step"><b>Ojo:</b> NO uses energía en el choque (se pierde al incrustarse); NO uses momentum en la fase del resorte.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Impulso = ?', a: '$\\vec J=\\int\\vec F\\,dt=\\Delta\\vec p$.' },
    { q: 'En choque inelástico, ¿qué se conserva?', a: 'Solo momentum. $K$ se pierde.' },
    { q: 'En choque elástico, ¿qué se conserva?', a: 'Momentum y $K$.' },
    { q: 'Péndulo balístico, ¿qué método en cada fase?', a: 'Choque: momentum. Subida después: energía.' },
    { q: 'Choque elástico 1D, $m_1$ a $v_1$ vs $m_2$ quieto', a: '$v_1\\prime=(m_1-m_2)/(m_1+m_2)v_1$, $v_2\\prime=2m_1/(m_1+m_2)v_1$.' }
  ],
  quiz: [
    { type: 'comp', q: 'Dos cuerpos quedan pegados. ¿Qué se conserva?', opts: ['Solo $K$', 'Solo momentum', 'Ambos'], answer: 1, explain: 'Perfectamente inelástico: solo momentum.' },
    { type: 'vf', q: 'Durante un choque rápido, el peso aporta impulso significativo.', opts: ['V', 'F'], answer: 1, explain: 'Falso. El choque es breve; el impulso del peso es despreciable.' }
  ]
});

/* =====================================================================
   UNIDAD 13 — CENTRO DE MASA Y MASA VARIABLE
   ===================================================================== */
U({
  id: 'u13', block: 'momentum', prio: 10, icon: '🎯',
  tag: 'Unidad 13 · CM y masa variable',
  title: 'Centro de masa y sistemas de masa variable',
  badge: { text: 'Sale 17% · Peso 5%', cls: 'pill-new' },
  desc: '📊 Aparece en 17% · peso 5% (¡el camión 2021 que suelta agua!) · Centro de masa de un sistema, ecuación CM, y problemas tipo cohete / cadena / gota.',
  lessons: [
    {
      id: 'u13l1', title: 'Centro de masa: la posición "promedio ponderada"',
      blocks: [
        { t: 'box', kind: 'form', title: 'Definición', html: '$$\\vec r_{CM}=\\dfrac{\\sum m_i\\vec r_i}{M}\\quad\\text{(discreto)}$$$$\\vec r_{CM}=\\dfrac{1}{M}\\int\\vec r\\,dm\\quad\\text{(continuo)}$$ Igual para $\\vec v_{CM},\\vec a_{CM}$.' },
        { t: 'box', kind: 'form', title: 'Ecuación del CM', html: '$$\\boxed{M\\vec a_{CM}=\\sum\\vec F_{ext}}$$ Las fuerzas internas se cancelan. El CM se mueve como si fuera una partícula con toda la masa.' },
        { t: 'box', kind: 'peras', title: 'Ejemplo cohete', html: 'Mientras el cohete se desintegra explotando, su CM sigue cayendo como si nada (la única externa es el peso). Las partes se desperdigan, pero el CM no se entera.' }
      ]
    },
    {
      id: 'u13l2', title: 'Sistemas de masa variable (tipo cohete)',
      blocks: [
        { t: 'box', kind: 'form', title: 'Ecuación tipo cohete', html: '$$m\\dfrac{d\\vec v}{dt}=\\vec F_{ext}+\\vec v_{rel}\\dfrac{dm}{dt}$$ donde $\\vec v_{rel}$ es la velocidad del material expulsado RESPECTO al cohete (negativa si sale por atrás).' },
        { t: 'box', kind: 'def', title: 'Casos típicos', html: '<b>Cohete:</b> pierde masa ($dm/dt<0$). $\\vec v_{rel}$ opuesta al movimiento. Empuje $=|v_{rel}\\dot m|$ adelante.<br><b>Cadena que cae</b>: se suma masa al sistema en movimiento.<br><b>Gota que recoge agua:</b> ídem.' },
        { t: 'box', kind: 'peras', title: 'Truco', html: 'Si te confundes con signos, usa $\\dfrac{d(mv)}{dt}=F_{ext}+u\\,dm/dt$ donde $u$ es la velocidad del material que se agrega o sale (en marco fijo). Eso evita errores.' },
        { t: 'example', title: 'Ejemplo · Cohete acelera', level: 'medio',
          body: '<p>Cohete masa $m_0$, pierde masa a $\\alpha$ kg/s con $v_{rel}=u$ (rapidez de los gases hacia atrás). Sin gravedad. ¿$v(t)$?</p>',
          solution: '<div class="steps"><div class="step">$m\\dot v=u\\,|\\dot m|=u\\alpha$. $m=m_0-\\alpha t$.</div><div class="step">$dv=\\dfrac{u\\alpha}{m_0-\\alpha t}dt$. Integrando: $v=u\\ln(m_0/(m_0-\\alpha t))$.</div><div class="step">Conocida como ecuación de Tsiolkovsky: $v=u\\ln(m_0/m)$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'CM definición', a: '$\\vec r_{CM}=\\sum m_i\\vec r_i/M$.' },
    { q: 'Ecuación del CM', a: '$M\\vec a_{CM}=\\sum\\vec F_{ext}$. Internas se cancelan.' },
    { q: 'Ecuación cohete', a: '$m\\dot v=F_{ext}+v_{rel}\\dot m$.' },
    { q: 'Tsiolkovsky (sin gravedad)', a: '$v=u\\ln(m_0/m)$.' }
  ],
  quiz: [
    { type: 'comp', q: 'Cuando un cohete pierde masa, ¿qué fuerza interna lo empuja?', opts: ['Peso', 'Empuje del gas: $|v_{rel}\\dot m|$', 'Normal'], answer: 1, explain: 'El material expulsado por la 3ª ley empuja al cohete con $|v_{rel}\\dot m|$.' }
  ]
});

/* =====================================================================
   UNIDAD 14 — MOMENTUM ANGULAR Y TORQUE
   ===================================================================== */
U({
  id: 'u14', block: 'sistemas', prio: 11, icon: '🌪️',
  tag: 'Unidad 14 · Angular',
  title: 'Momentum angular y torque',
  badge: { text: '🔴 Sale 50% · Peso 16%', cls: 'pill-hot' },
  desc: '📊 Momentum angular: 50% aparición · 16% peso. ⚠️ Cuerpo rígido (67% aparición, 32% peso) es lo que MÁS cae y aún no está en la página · Definiciones de $\\vec L$ y $\\vec\\tau$, conservación, aplicación a partículas en órbita o patinadora que junta brazos.',
  lessons: [
    {
      id: 'u14l1', title: 'Definiciones y la ecuación maestra',
      blocks: [
        { t: 'box', kind: 'form', title: 'Definiciones (respecto a un punto $O$)', html: '$$\\vec L=\\vec r\\times m\\vec v\\quad\\text{(angular)}$$$$\\vec\\tau=\\vec r\\times\\vec F\\quad\\text{(torque)}$$ y la análoga de Newton:$$\\boxed{\\vec\\tau=\\dfrac{d\\vec L}{dt}}$$' },
        { t: 'box', kind: 'def', title: 'Conservación', html: 'Si $\\sum\\vec\\tau_{ext}=0$ respecto a un punto: $\\vec L$ se conserva.<br>Ejemplo clásico: la patinadora junta brazos $\\Rightarrow I$ baja $\\Rightarrow \\omega$ sube para mantener $L=I\\omega$ cte.' },
        { t: 'box', kind: 'peras', title: '🍐 Idea', html: '$L$ mide "cuánto giro" tiene un cuerpo respecto a un punto. Para una partícula: $L=mvr\\sin\\alpha$ donde $\\alpha$ es ángulo entre $\\vec r$ y $\\vec v$. Si la única fuerza pasa por $O$ (central), $\\vec\\tau=0$ y $L$ conserva.' },
        { t: 'box', kind: 'form', title: 'Cuerpo rígido (caso simple)', html: 'Para un cuerpo que gira como un todo con $\\omega$ respecto a un eje fijo: $L=I\\omega$ donde $I=\\sum m_i r_i^2$ es el momento de inercia.<br>Energía: $K_{rot}=\\tfrac12 I\\omega^2$. Y $\\tau=I\\alpha$ (con $\\alpha=\\ddot\\theta$).' }
      ]
    },
    {
      id: 'u14l2', title: 'Ejercicios Kumon: angular',
      blocks: [
        { t: 'example', title: 'Ejemplo guiado · Partícula en órbita circular', level: 'facil',
          body: '<p>Partícula $m$ en círculo de radio $r$ a velocidad $v$. ¿Magnitud de $L$ respecto al centro?</p>',
          solution: '<div class="steps"><div class="step">$\\vec r\\perp\\vec v\\Rightarrow L=mvr$. Apunta perpendicular al plano (regla de la mano derecha).</div></div>' },
        { t: 'example', title: 'Ejercicio 1 · Patinadora junta brazos', level: 'medio',
          body: '<p>Patinadora gira con $\\omega_0=2$ rad/s y $I_0=4$ kg·m². Junta brazos y $I_1=1$ kg·m². ¿Nueva $\\omega$?</p>',
          solution: '<div class="steps"><div class="step">$L$ se conserva (sin torque externo): $I_0\\omega_0=I_1\\omega_1\\Rightarrow \\omega_1=8$ rad/s.</div></div>' },
        { t: 'example', title: 'Ejercicio 2 · Partícula atada a cuerda que se acorta', level: 'medio',
          body: '<p>Partícula gira en plano horizontal sin roce a $\\omega_0$ a radio $r_0$. Se tira de la cuerda al centro y el radio se reduce a $r_1=r_0/2$. ¿Nueva $\\omega$?</p>',
          solution: '<div class="steps"><div class="step">La tensión apunta al centro $\\Rightarrow \\tau=0\\Rightarrow L$ conserva.</div><div class="step">$L=mvr=m(\\omega r)r=m\\omega r^2=cte\\Rightarrow \\omega_1 r_1^2=\\omega_0 r_0^2\\Rightarrow \\omega_1=4\\omega_0$.</div></div>' },
        { t: 'example', title: 'Ejercicio 3 · Partícula choca a vara fija', level: 'dificil',
          body: '<p>Partícula $m$ a velocidad $v$ choca al extremo de una vara fija de largo $\\ell$ y momento de inercia $I=M\\ell^2/3$ que puede girar por su otro extremo. Queda pegada. ¿Velocidad angular después?</p>',
          solution: '<div class="steps"><div class="step">$L$ respecto al pivote se conserva en el choque. Antes: $L_i=mv\\ell$.</div><div class="step">Después: $L_f=(I+m\\ell^2)\\omega=(M\\ell^2/3+m\\ell^2)\\omega$.</div><div class="step">$\\omega=\\dfrac{mv\\ell}{M\\ell^2/3+m\\ell^2}=\\dfrac{mv}{(M/3+m)\\ell}$.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Barra con bisagra y cuerda en equilibrio (2023-2)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen Dinámica 2do sem 2023, P2.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exB_p2.png" alt="Barra sujeta por bisagra O y una cuerda a 30 grados con un bloque colgando" loading="lazy"><figcaption>📷 Examen anterior · Examen Dinámica 2do sem 2023, P2</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>Equilibrio estático:</b> $\sum\vec F=0$ y $\sum\tau=0$.</div><div class="step"><b>Torque sobre O</b> (elimina la reacción de la bisagra): la tensión de la cuerda y los pesos (barra en su centro $L/2$, bloque a $3L/4$) deben dar torque neto cero. Usa el brazo perpendicular: $T\sin30^\circ\cdot L_{cuerda}$ contra $Mg\cdot\tfrac{L}{2}\cos\beta+mg\cdot\tfrac{3L}{4}\cos\beta$.</div><div class="step">Despeja $T$; luego $\sum F_x,\sum F_y$ dan las componentes de la reacción en O.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Esfera maciza + polea + bloque en plano inclinado (2023-2)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen Dinámica 2do sem 2023, P3.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exB_p3.png" alt="Esfera maciza que gira, cuerda por polea, bloque en plano inclinado" loading="lazy"><figcaption>📷 Examen anterior · Examen Dinámica 2do sem 2023, P3</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>Tres cuerpos acoplados.</b> Momentos de inercia: esfera maciza $I=\tfrac25 MR^2$, polea (cilindro) $I_p=\tfrac12 m_p r^2$.</div><div class="step"><b>Ligaduras:</b> la cuerda no se estira ⇒ $a=\alpha_{esfera}R=\alpha_{polea}r$ (relaciona aceleraciones lineales y angulares).</div><div class="step"><b>Ecuaciones:</b> torque en la esfera ($T_1 R=I\alpha$), torque en la polea ($(T_2-T_1)r=I_p\alpha_p$), Newton en el bloque ($mg\sin\theta-T_2=ma$). Resuelve el sistema para $a$ y las tensiones.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Disco que rota y Homero camina: conservación de $L$ (2024-1)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen Dinámica 1er sem 2024, P2.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exC_p2.png" alt="Plataforma disco que rota mientras Homero camina hacia el centro" loading="lazy"><figcaption>📷 Examen anterior · Examen Dinámica 1er sem 2024, P2</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>No hay torque externo</b> sobre el sistema disco+Homero ⇒ <b>se conserva $L$</b>.</div><div class="step"><b>Inercias:</b> disco $I_d=\tfrac12 MR^2$; Homero (puntual) $I_H=m\,d^2$ a distancia $d$ del centro.</div><div class="step"><b>Conservación:</b> $(I_d+mR^2)\omega_0=(I_d+mr^2)\omega_f$. Al acercarse al centro ($r<R$) baja la inercia y <b>sube</b> $\omega$. Despeja $\omega_f$.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Barra con bisagra y dos cuerdas en equilibrio (2024-1)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen Dinámica 1er sem 2024, P3.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exC_p3.png" alt="Barra sujeta por bisagra O y dos cuerdas con un bloque" loading="lazy"><figcaption>📷 Examen anterior · Examen Dinámica 1er sem 2024, P3</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>Equilibrio:</b> $\sum\tau_O=0$ y $\sum\vec F=0$.</div><div class="step"><b>Torque sobre O:</b> suma los torques de los pesos (barra en $L/2$, bloque donde cuelga) y de las tensiones de ambas cuerdas (ángulos $\alpha$ y la geometría dada), iguala a cero y despeja las tensiones.</div><div class="step">Cierra con $\sum F_x=0,\ \sum F_y=0$ para la reacción de la bisagra.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Plasticina que choca y se pega a una barra con pivote (2024-2)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen FIS1514 2do sem 2024, P2.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exD_p2.png" alt="Bola de plasticina choca el borde de una barra con pivote y queda pegada" loading="lazy"><figcaption>📷 Examen anterior · Examen FIS1514 2do sem 2024, P2</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>Choque rotacional</b> ⇒ se conserva el <b>momentum angular respecto al pivote</b> (no la energía).</div><div class="step"><b>Inercia de la barra</b> respecto al pivote en $L/4$ (teorema de ejes paralelos): $I=\tfrac{1}{12}ML^2+M\left(\tfrac{L}{4}\right)^2$.</div><div class="step"><b>Conservación:</b> $m v_0\,d=(I+m d^2)\,\omega$, con $d$ la distancia del pivote al punto de impacto. Despeja $\omega$ justo después del choque.</div></div>' },
        { t: 'example', title: '📜 Examen anterior · Disco que rueda sin resbalar con cuerda en la garganta (2024-2)', level: 'dificil',
          body: '<p><b>Examen anterior — Examen FIS1514 2do sem 2024, P3.</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p><figure class="fig fig-img"><img src="img/exD_p3.png" alt="Disco que rueda sin resbalar con una cuerda enrollada en una garganta de radio r" loading="lazy"><figcaption>📷 Examen anterior · Examen FIS1514 2do sem 2024, P3</figcaption></figure>',
          solution: '<div class="steps"><div class="step"><b>Rodadura sin resbalar:</b> $a_{CM}=\alpha R$ (liga lineal y angular).</div><div class="step"><b>Newton + torque:</b> $\sum F=Ma_{CM}$ (tensión de la cuerda + roce estático) y $\sum\tau_{CM}=I\alpha$ con $I=\tfrac12 MR^2$. La cuerda sale de la garganta de radio $r$, así que su brazo es $r$.</div><div class="step">Resuelve el sistema para $a_{CM}$, $\alpha$ y el roce; verifica que el roce no supere $\mu_e N$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Momentum angular partícula', a: '$\\vec L=\\vec r\\times m\\vec v$.' },
    { q: 'Torque', a: '$\\vec\\tau=\\vec r\\times\\vec F=d\\vec L/dt$.' },
    { q: 'Si la fuerza es central, ¿qué se conserva?', a: '$\\vec L$ respecto al centro.' },
    { q: 'Patinadora junta brazos', a: '$I\\omega=cte\\Rightarrow \\omega$ sube.' }
  ],
  quiz: [
    { type: 'comp', q: 'Para conservar $\\vec L$, basta que:', opts: ['No haya fuerzas', '$\\tau_{ext}=0$ respecto al punto elegido', 'No haya choques'], answer: 1, explain: 'Solo se necesita que el torque externo neto sea cero respecto al punto.' }
  ]
});

/* =====================================================================
   UNIDAD 15 — FORMULARIO COMPLETO
   ===================================================================== */
U({
  id: 'u15', block: 'examen', prio: 12, icon: '📋',
  tag: 'Unidad 15 · Formulario',
  title: 'Formulario completo · todo en una pantalla',
  badge: { text: 'memorizar', cls: 'pill-new' },
  desc: 'Todas las fórmulas que tienes que saber, organizadas por bloque. Repite hasta que salgan sin pensar.',
  lessons: [
    {
      id: 'u15l1', title: 'Cinemática',
      blocks: [
        { t: 'box', kind: 'form', title: 'MRUA', html: '$v=v_0+at$<br>$x=x_0+v_0 t+\\tfrac12 at^2$<br>$v^2=v_0^2+2a(x-x_0)$' },
        { t: 'box', kind: 'form', title: 'Truco para $a=a(x)$', html: '$a=v\\,dv/dx$, así $\\int v\\,dv=\\int a(x)\\,dx$.' },
        { t: 'box', kind: 'form', title: 'Proyectil ($\\alpha$ con horizontal)', html: '$v_{0x}=v_0\\cos\\alpha$, $v_{0y}=v_0\\sin\\alpha$<br>$x=v_{0x}t$, $y=v_{0y}t-\\tfrac12 gt^2$<br>$R=v_0^2\\sin(2\\alpha)/g$, $H=v_{0y}^2/(2g)$' },
        { t: 'box', kind: 'form', title: 'Polares (memorízalas)', html: '$\\vec v=\\dot r\\,\\hat u_r+r\\dot\\theta\\,\\hat u_\\theta$<br>$\\vec a=(\\ddot r-r\\dot\\theta^2)\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\hat u_\\theta$<br>Cilíndricas: $+\\dot z\\,\\hat k$ y $+\\ddot z\\,\\hat k$.' },
        { t: 'box', kind: 'form', title: 'Relativo', html: '$\\vec v_{A/B}=\\vec v_A-\\vec v_B$' }
      ]
    },
    {
      id: 'u15l2', title: 'Dinámica (Newton + circular)',
      blocks: [
        { t: 'box', kind: 'form', title: 'Newton', html: '$\\sum\\vec F=m\\vec a$<br>Roce estático: $f_s\\le\\mu_s N$<br>Roce cinético: $f_k=\\mu_k N$<br>Plano: $N=mg\\cos\\theta$<br>Resorte (Hooke): $F_e=-k\\Delta\\ell$' },
        { t: 'box', kind: 'form', title: 'Circular', html: '$a_c=v^2/R=\\omega^2 R$ (al centro)<br>Rizo arriba: $N+mg=mv^2/R$<br>Apenas completa: $N=0\\Rightarrow v^2=gR$<br>Péndulo cónico: $v^2=gL\\sin\\theta\\tan\\theta$' }
      ]
    },
    {
      id: 'u15l3', title: 'Energía y MAS',
      blocks: [
        { t: 'box', kind: 'form', title: 'Energía', html: '$K=\\tfrac12 mv^2$, $U_g=mgh$, $U_e=\\tfrac12 k(\\Delta\\ell)^2$<br>$E=K+U_g+U_e$<br>Conservación (sin roce/ext): $E_i=E_f$<br>Con roce: $E_f-E_i=W_{nc}$, $W_{roce}=-\\mu_k N\\,s$' },
        { t: 'box', kind: 'form', title: 'MAS', html: '$\\ddot x=-\\omega^2 x$<br>$\\omega=\\sqrt{k/m}$, $T=2\\pi/\\omega$, $f=1/T$<br>$x=A\\cos(\\omega t+\\phi)$<br>$v_{max}=A\\omega$, $a_{max}=A\\omega^2$<br>$E=\\tfrac12 kA^2=\\tfrac12 m v_{max}^2$' }
      ]
    },
    {
      id: 'u15l4', title: 'Momentum, CM, masa variable y angular',
      blocks: [
        { t: 'box', kind: 'form', title: 'Momentum', html: '$\\vec p=m\\vec v$, $\\vec J=\\int\\vec F\\,dt=\\Delta\\vec p$<br>Conservación: si $\\sum\\vec F_{ext}=0$ entonces $\\sum m\\vec v=cte$<br>Choque elástico 1D: $v_1\\prime=\\dfrac{m_1-m_2}{m_1+m_2}v_1$, $v_2\\prime=\\dfrac{2m_1}{m_1+m_2}v_1$<br>Perf. inelástico: $V=\\dfrac{m_1 v_1}{m_1+m_2}$' },
        { t: 'box', kind: 'form', title: 'CM y masa variable', html: '$\\vec r_{CM}=\\sum m_i\\vec r_i/M$<br>$M\\vec a_{CM}=\\sum\\vec F_{ext}$<br>Cohete: $m\\dot v=F_{ext}+v_{rel}\\dot m$<br>Tsiolkovsky: $v=u\\ln(m_0/m)$' },
        { t: 'box', kind: 'form', title: 'Angular', html: '$\\vec L=\\vec r\\times m\\vec v$<br>$\\vec\\tau=\\vec r\\times\\vec F=d\\vec L/dt$<br>Cuerpo rígido: $L=I\\omega$, $\\tau=I\\alpha$, $K=\\tfrac12 I\\omega^2$<br>Si $\\tau_{ext}=0$: $L=cte$' }
      ]
    },
    {
      id: 'u15l5', title: 'Trigonometría y constantes',
      blocks: [
        { t: 'box', kind: 'form', title: 'Constantes', html: '$g=10\\,\\mathrm{m/s^2}$ (a veces $9{,}81$)<br>Triángulo 3-4-5: $\\sin37°=0{,}6$, $\\cos37°=0{,}8$' },
        { t: 'box', kind: 'form', title: 'Identidades', html: '$\\sin^2\\alpha+\\cos^2\\alpha=1$<br>$\\sin(2\\alpha)=2\\sin\\alpha\\cos\\alpha$<br>$\\cos(2\\alpha)=1-2\\sin^2\\alpha$<br>$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta$' }
      ]
    }
  ],
  flashcards: [
    { q: '3 ecuaciones MRUA', a: '$v=v_0+at$, $x=x_0+v_0t+\\tfrac12 at^2$, $v^2=v_0^2+2a\\Delta x$.' },
    { q: 'Aceleración polares', a: '$\\vec a=(\\ddot r-r\\dot\\theta^2)\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\hat u_\\theta$.' },
    { q: 'Newton', a: '$\\sum\\vec F=m\\vec a$.' },
    { q: 'Energía con roce', a: '$E_f-E_i=W_{nc}$.' },
    { q: 'MAS', a: '$\\omega=\\sqrt{k/m}$, $x=A\\cos(\\omega t+\\phi)$, $E=\\tfrac12 kA^2$.' },
    { q: 'Momentum elástico 1D, $m_1\\to m_2$ quieto', a: '$v_1\\prime=(m_1-m_2)/(m_1+m_2)v_1$, $v_2\\prime=2m_1/(m_1+m_2)v_1$.' },
    { q: 'Cohete', a: '$m\\dot v=F_{ext}+v_{rel}\\dot m$. Tsiolkovsky: $v=u\\ln(m_0/m)$.' },
    { q: 'Momentum angular', a: '$\\vec L=\\vec r\\times m\\vec v$, $\\tau=dL/dt$.' }
  ],
  quiz: [
    { type: 'comp', q: 'Si te piden velocidad sin pedir tiempo:', opts: ['Newton', 'Energía', 'Momentum'], answer: 1, explain: 'Energía: no necesita tiempo.' },
    { type: 'comp', q: '$g$ en MAS vertical:', opts: ['Cambia $\\omega$', 'Solo corre el equilibrio', 'Anula $\\omega$'], answer: 1, explain: 'Solo corre el equilibrio. $\\omega=\\sqrt{k/m}$.' }
  ]
});

/* =====================================================================
   UNIDAD 16 — SIMULACRO TIPO EXAMEN FINAL
   ===================================================================== */
U({
  id: 'u16', block: 'examen', prio: 13, icon: '🏁',
  tag: 'Unidad 16 · Simulacro',
  title: 'Simulacro tipo Examen Final',
  badge: { text: 'cronométralo', cls: 'pill-hot' },
  desc: '4 problemas tipo examen real, cronométralo en 3 horas. Esto es tu test de listo/no-listo. Hazlo en papel, sin formulario, como si fuera el día.',
  lessons: [
    {
      id: 'u16l1', title: 'Instrucciones del simulacro',
      blocks: [
        { t: 'box', kind: 'exam', title: '🎯 Cómo hacerlo', html: '<b>1.</b> Saca papel, lápiz, calculadora científica (revisa que no esté en modo grad).<br><b>2.</b> Cierra esta pestaña y abre solo cuando termines.<br><b>3.</b> Tiempo: <b>3 horas</b>. Para 4 problemas eso es 45 min cada uno.<br><b>4.</b> Si te trabas en uno, salta y vuelve al final. NO te quedes 1 h en el mismo problema.<br><b>5.</b> Al terminar, revisa cada solución y autocalifica con el desglose de puntos.<br><b>6.</b> Si sacas más de 4 problemas correctos (de 4): estás listo. Si sacas 2-3: vuelve a la unidad floja. Si sacas 1: necesitas más tiempo, agenda un día más.' },
        { t: 'box', kind: 'warn', title: '⚠️ Lo que NO hacer', html: '• NO mires el formulario. Es para que te des cuenta de qué te falta memorizar.<br>• NO uses el celular ni el navegador.<br>• NO te saltes el DCL aunque "ya sepas". Te ayuda con los signos.<br>• NO calcules numéricamente sin dejar la expresión algebraica primero.' }
      ]
    },
    {
      id: 'u16l2', title: 'Problema 1 (Cinemática · proyectil + polares)',
      blocks: [
        { t: 'example', title: 'Problema 1 · Dos partes (40 min)', level: 'dificil',
          body: '<p><b>(a)</b> Una pelota se lanza desde el borde de una mesa de altura $H$ con velocidad $v_0$ horizontal. La pelota golpea el suelo a distancia $D$ del pie de la mesa. Encuentra (i) el tiempo de vuelo, (ii) $v_0$ en función de $D,H,g$, (iii) la velocidad vectorial con que llega al suelo.</p><p><b>(b)</b> Un brazo gira con $\\dot\\theta=\\omega$ constante mientras un cuerpo desliza por la ranura del brazo con $r(t)=r_0+bt$ ($b>0$). Encuentra $\\vec v$ y $\\vec a$ del cuerpo en polares.</p>',
          solution: '<div class="steps"><div class="step"><b>(a-i)</b> $H=\\tfrac12 g t^2\\Rightarrow t=\\sqrt{2H/g}$.</div><div class="step"><b>(a-ii)</b> $D=v_0 t\\Rightarrow v_0=D/\\sqrt{2H/g}=D\\sqrt{g/(2H)}$.</div><div class="step"><b>(a-iii)</b> $\\vec v=v_0\\hat i-gt\\,\\hat j=v_0\\hat i-\\sqrt{2gH}\\,\\hat j$.</div><div class="step"><b>(b)</b> $\\dot r=b$, $\\ddot r=0$, $\\dot\\theta=\\omega$, $\\ddot\\theta=0$.</div><div class="step">$\\vec v=b\\,\\hat u_r+(r_0+bt)\\omega\\,\\hat u_\\theta$.</div><div class="step">$\\vec a=-(r_0+bt)\\omega^2\\,\\hat u_r+2b\\omega\\,\\hat u_\\theta$ (Coriolis aparece porque $\\dot r\\ne 0$).</div></div>' }
      ]
    },
    {
      id: 'u16l3', title: 'Problema 2 (Newton · cuña + ligadura)',
      blocks: [
        { t: 'example', title: 'Problema 2 · Cuña con bloque y polea (40 min)', level: 'dificil',
          body: '<p>Bloque $m_1$ apoyado en plano inclinado $\\theta$ de una cuña que descansa en mesa sin roce. Por una polea ideal en el vértice de la cuña pasa una cuerda que conecta $m_1$ con bloque $m_2$ colgando verticalmente. No hay roce en ninguna parte. <b>(a)</b> DCL de $m_1$ y $m_2$. <b>(b)</b> Si la cuña está FIJA, encuentra la aceleración del sistema. <b>(c)</b> Si la cuña puede deslizar, ¿cuál es la condición para que $m_2$ no se mueva verticalmente?</p>',
          solution: '<div class="steps"><div class="step"><b>(a) DCL $m_1$:</b> peso $m_1 g$ vertical, normal $N$ perpendicular al plano, tensión $T$ paralela al plano (hacia arriba). DCL $m_2$: peso $m_2 g$ abajo, tensión $T$ arriba.</div><div class="step"><b>(b) Cuña fija</b> (ligadura $a_1=a_2=a$ donde $a_1$ es a lo largo del plano y $a_2$ vertical).</div><div class="step">$m_1 a=T-m_1 g\\sin\\theta$, $m_2 a=m_2 g-T$. Sumando: $a=\\dfrac{m_2-m_1\\sin\\theta}{m_1+m_2}g$.</div><div class="step"><b>(c) Cuña libre:</b> si $m_2$ no se mueve vertical, $a_2=0$ y la cuerda no se mueve, así que $m_1$ tampoco se mueve respecto a la cuña.</div><div class="step">Todo el sistema acelera horizontal con $\\vec a$. Aplicando Newton al sistema y a $m_2$ por separado, se llega a $T=m_2 g$ y la cuña debe acelerar $a=g\\tan\\theta$, dada por una fuerza externa aplicada.</div></div>' }
      ]
    },
    {
      id: 'u16l4', title: 'Problema 3 (Energía + MAS · resorte+roce con MAS)',
      blocks: [
        { t: 'example', title: 'Problema 3 · Resorte horizontal con roce (40 min)', level: 'dificil',
          body: '<p>Bloque $m$ en superficie horizontal unido a resorte $k$ a una pared. Coeficiente de roce cinético = estático = $\\mu$. Lo lleves a compresión $A$ y sueltas. <b>(a)</b> ¿En qué amplitud queda después de una oscilación completa? <b>(b)</b> ¿Cuántas oscilaciones hace antes de detenerse?</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> Cada media oscilación pierde $2\\mu mg/k$ de amplitud (por el resultado de I2 2023-2). Una oscilación completa: $4\\mu mg/k$.</div><div class="step">Amplitud tras 1 oscilación: $A-4\\mu mg/k$.</div><div class="step"><b>(b)</b> Se detiene cuando la fuerza del resorte $kA_n$ no supera el roce estático máximo $\\mu mg$. $A_n\\le \\mu mg/k$.</div><div class="step">Tras $n$ medias oscilaciones: $A_n=A-2n\\mu mg/k$. Condición: $A-2n\\mu mg/k\\le \\mu mg/k$.</div><div class="step">$n\\ge \\dfrac{kA-\\mu mg}{2\\mu mg}=\\dfrac{kA}{2\\mu mg}-\\tfrac12$. Toma el entero superior.</div></div>' }
      ]
    },
    {
      id: 'u16l5', title: 'Problema 4 (Momentum + angular · bala que golpea vara)',
      blocks: [
        { t: 'example', title: 'Problema 4 · Bala vs vara (40 min)', level: 'dificil',
          body: '<p>Una bala de masa $m$ a velocidad $v$ horizontal choca al extremo libre de una vara delgada de masa $M$, largo $\\ell$ y $I=M\\ell^2/3$ que cuelga del otro extremo (pivote). La bala queda incrustada. <b>(a)</b> Velocidad angular justo después del choque. <b>(b)</b> Pérdida de energía en el choque. <b>(c)</b> ¿Qué ángulo $\\theta$ máximo gira la vara respecto a la vertical?</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> Momentum angular respecto al pivote: $L_i=mv\\ell$ (la vara está quieta).</div><div class="step">$L_f=(I+m\\ell^2)\\omega=(M\\ell^2/3+m\\ell^2)\\omega$.</div><div class="step">$\\omega=\\dfrac{mv}{(M/3+m)\\ell}=\\dfrac{3mv}{(M+3m)\\ell}$.</div><div class="step"><b>(b)</b> $K_i=\\tfrac12 mv^2$. $K_f=\\tfrac12(I+m\\ell^2)\\omega^2=\\tfrac12 mv\\ell\\cdot\\omega$ (porque $L_f=L_i$).</div><div class="step">$K_f=\\tfrac12 m v\\ell\\cdot \\dfrac{3mv}{(M+3m)\\ell}=\\dfrac{3m^2 v^2}{2(M+3m)}$. $\\Delta K=K_f-K_i=\\dfrac{3m^2 v^2}{2(M+3m)}-\\dfrac{mv^2}{2}=\\dfrac{-Mmv^2}{2(M+3m)}$ (se pierde).</div><div class="step"><b>(c)</b> Después del choque ya conserva energía mecánica (no hay roce). CM combinado a $h_{CM}=(M(\\ell/2)+m\\ell)/(M+m)$. Sube hasta $h_{CM}(1-\\cos\\theta)$.</div><div class="step">$K_f=(M+m)g\\,h_{CM}(1-\\cos\\theta)\\Rightarrow \\cos\\theta=1-\\dfrac{K_f}{(M+m)g\\,h_{CM}}$.</div><div class="step">Reemplazando $K_f$ y $h_{CM}$ se obtiene $\\theta$ en función de los datos. Si te dan números, lo evalúas.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: '¿Cuánto tiempo dura el examen real?', a: '3 horas (típico). Asigna ~45 min por problema.' },
    { q: '¿Qué hacer si me trabo en un problema?', a: 'Saltarlo y volver. No quedarse 1h en uno.' },
    { q: 'Estrategia general', a: '1) DCL. 2) Identificar método (gatillo). 3) Algebra primero, números al final.' }
  ],
  quiz: [
    { type: 'comp', q: 'Si sacas 4 de 4 en el simulacro:', opts: ['Estás listo', 'Necesitas más', 'Cualquiera'], answer: 0, explain: 'Estás en muy buena forma.' }
  ]
});
