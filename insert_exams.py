# -*- coding: utf-8 -*-
"""Inserta bloques 'example' (ejercicios de exámenes anteriores) en content.js,
en la lección de ejercicios de cada unidad. Localiza el array blocks de cada
lección por su id y agrega antes del ] de cierre (saltando strings)."""
import re, io

CONTENT = "/home/leon/Documents/Dinamica/ExamenAcademy/content.js"

def block(desc, fuente, fil, alt, sol):
    return (
        "        { t: 'example', title: '\U0001F4DC Examen anterior · " + desc + "', level: 'dificil',\n"
        "          body: '<p><b>Examen anterior — " + fuente + ".</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p>"
        "<figure class=\"fig fig-img\"><img src=\"img/" + fil + "\" alt=\"" + alt + "\" loading=\"lazy\"><figcaption>\U0001F4F7 Examen anterior · " + fuente + "</figcaption></figure>',\n"
        "          solution: '" + sol + "' }"
    )

# ---- Bloques por lección -------------------------------------------------
INSERTS = {
  'u2l3': [
    block('Proyectil con viento lateral (2024-1)',
          'Examen Dinámica 1er sem 2024, P1', 'exC_p1.png',
          'Proyectil disparado verticalmente con aceleración horizontal por viento',
          '<div class="steps"><div class="step"><b>Ejes independientes.</b> Vertical: sube con $a_y=-g$; horizontal: parte del reposo con $a_x=0{,}5$ m/s² (el viento).</div>'
          '<div class="step"><b>Altura máxima 500 m:</b> $v_{0y}^2=2g(500)\\Rightarrow v_{0y}=\\sqrt{10000}=100$ m/s (con $g=10$). Tiempo a la cima: $t=v_{0y}/g=10$ s.</div>'
          '<div class="step"><b>Desvío horizontal</b> en ese tiempo: $v_x=a_x t=0{,}5\\cdot10=5$ m/s; $x=\\tfrac12 a_x t^2=\\tfrac12(0{,}5)(10^2)=25$ m.</div>'
          '<div class="step">La rapidez total en cualquier instante es $\\sqrt{v_x^2+v_y^2}$. Trata cada eje por separado y combina al final.</div></div>'),
    block('Proyectil que entra a un tubo + roce viscoso (2022)',
          'Examen Dinámica 2do sem 2022, P1', 'exE_p1.png',
          'Objeto lanzado con v0 y angulo que entra a un tubo con roce viscoso',
          '<div class="steps"><div class="step"><b>(a-b) Tramo proyectil:</b> $x(t)=v_0\\cos\\theta_0\\,t$, $y(t)=v_0\\sin\\theta_0\\,t-\\tfrac12 g t^2$. La altura del punto de entrada sale evaluando $y$ donde $v_y=0$ (cima): $H=\\dfrac{(v_0\\sin\\theta_0)^2}{2g}$.</div>'
          '<div class="step"><b>(c) Dentro del tubo (roce viscoso):</b> aparece una fuerza $F=-bv$ proporcional a la velocidad. La velocidad límite se alcanza cuando la fuerza neta es cero: iguala el empuje (peso o componente) con $bv$ y despeja $v_{límite}$.</div></div>'),
  ],
  'u8l3': [
    block('Anillo que gira y se desprende de una circunferencia (2023-2)',
          'Examen Dinámica 2do sem 2023, P1', 'exB_p1.png',
          'Anillo girando en circunferencia que se desprende en angulo 30 grados',
          '<div class="steps"><div class="step"><b>Al desprenderse</b> en $\\theta=30^\\circ$, la velocidad es <b>tangente</b> a la circunferencia y de módulo $v=\\omega R$ (movimiento circular uniforme antes del corte).</div>'
          '<div class="step"><b>Desde ahí es un proyectil:</b> descompón $v$ en $v_x,v_y$ según la dirección tangente en el punto de corte y aplica cinemática de proyectil ($a_y=-g$, $a_x=0$) para hallar altura/alcance.</div>'
          '<div class="step"><b>Gatillo:</b> "gira" + "se desprende/libremente" ⇒ circular para la velocidad de salida, luego proyectil.</div></div>'),
  ],
  'u12l3': [
    block('Esquiador que agarra una mochila + rampa con roce (2024-2)',
          'Examen FIS1514 2do sem 2024, P1', 'exD_p1.png',
          'Persona esquia sin friccion, agarra una mochila y sube una saliente',
          '<div class="steps"><div class="step"><b>Tres fases — método distinto en cada una.</b></div>'
          '<div class="step"><b>(1) Energía A→B</b> (colina lisa): $v_B=\\sqrt{2g\\,h_1}$.</div>'
          '<div class="step"><b>(2) Choque inelástico</b> al agarrar la mochila (momentum, NO energía): $m_1 v_B=(m_1+m_2)v_{BC}\\Rightarrow v_{BC}=\\dfrac{m_1 v_B}{m_1+m_2}$.</div>'
          '<div class="step"><b>(3) Energía B→C con roce</b> (sube $h_2$ y recorre $d_1$ con $\\mu_c$): $\\tfrac12(m_1+m_2)v_{BC}^2=(m_1+m_2)g\\,h_2+\\mu_c(m_1+m_2)g\\,d_1+\\tfrac12(m_1+m_2)v_C^2$, despejas $v_C$.</div></div>'),
    block('Péndulo balístico: bala se incrusta en bloque con resorte (2022)',
          'Examen Dinámica 2do sem 2022, P2', 'exE_p2.png',
          'Bala se incrusta en un bloque unido a un resorte',
          '<div class="steps"><div class="step"><b>(1) Choque inelástico</b> (momentum): $m v_0=(m+M)V\\Rightarrow V=\\dfrac{m v_0}{m+M}$.</div>'
          '<div class="step"><b>(2) Después del choque, energía</b>: la energía cinética del conjunto se transforma en el resorte (o en subir). Máxima compresión: $\\tfrac12(m+M)V^2=\\tfrac12 k\\,\\delta^2\\Rightarrow \\delta=V\\sqrt{\\dfrac{m+M}{k}}$.</div>'
          '<div class="step"><b>Ojo:</b> NO uses energía en el choque (se pierde al incrustarse); NO uses momentum en la fase del resorte.</div></div>'),
  ],
  'u14l2': [
    block('Barra con bisagra y cuerda en equilibrio (2023-2)',
          'Examen Dinámica 2do sem 2023, P2', 'exB_p2.png',
          'Barra sujeta por bisagra O y una cuerda a 30 grados con un bloque colgando',
          '<div class="steps"><div class="step"><b>Equilibrio estático:</b> $\\sum\\vec F=0$ y $\\sum\\tau=0$.</div>'
          '<div class="step"><b>Torque sobre O</b> (elimina la reacción de la bisagra): la tensión de la cuerda y los pesos (barra en su centro $L/2$, bloque a $3L/4$) deben dar torque neto cero. Usa el brazo perpendicular: $T\\sin30^\\circ\\cdot L_{cuerda}$ contra $Mg\\cdot\\tfrac{L}{2}\\cos\\beta+mg\\cdot\\tfrac{3L}{4}\\cos\\beta$.</div>'
          '<div class="step">Despeja $T$; luego $\\sum F_x,\\sum F_y$ dan las componentes de la reacción en O.</div></div>'),
    block('Esfera maciza + polea + bloque en plano inclinado (2023-2)',
          'Examen Dinámica 2do sem 2023, P3', 'exB_p3.png',
          'Esfera maciza que gira, cuerda por polea, bloque en plano inclinado',
          '<div class="steps"><div class="step"><b>Tres cuerpos acoplados.</b> Momentos de inercia: esfera maciza $I=\\tfrac25 MR^2$, polea (cilindro) $I_p=\\tfrac12 m_p r^2$.</div>'
          '<div class="step"><b>Ligaduras:</b> la cuerda no se estira ⇒ $a=\\alpha_{esfera}R=\\alpha_{polea}r$ (relaciona aceleraciones lineales y angulares).</div>'
          '<div class="step"><b>Ecuaciones:</b> torque en la esfera ($T_1 R=I\\alpha$), torque en la polea ($(T_2-T_1)r=I_p\\alpha_p$), Newton en el bloque ($mg\\sin\\theta-T_2=ma$). Resuelve el sistema para $a$ y las tensiones.</div></div>'),
    block('Disco que rota y Homero camina: conservación de $L$ (2024-1)',
          'Examen Dinámica 1er sem 2024, P2', 'exC_p2.png',
          'Plataforma disco que rota mientras Homero camina hacia el centro',
          '<div class="steps"><div class="step"><b>No hay torque externo</b> sobre el sistema disco+Homero ⇒ <b>se conserva $L$</b>.</div>'
          '<div class="step"><b>Inercias:</b> disco $I_d=\\tfrac12 MR^2$; Homero (puntual) $I_H=m\\,d^2$ a distancia $d$ del centro.</div>'
          '<div class="step"><b>Conservación:</b> $(I_d+mR^2)\\omega_0=(I_d+mr^2)\\omega_f$. Al acercarse al centro ($r<R$) baja la inercia y <b>sube</b> $\\omega$. Despeja $\\omega_f$.</div></div>'),
    block('Barra con bisagra y dos cuerdas en equilibrio (2024-1)',
          'Examen Dinámica 1er sem 2024, P3', 'exC_p3.png',
          'Barra sujeta por bisagra O y dos cuerdas con un bloque',
          '<div class="steps"><div class="step"><b>Equilibrio:</b> $\\sum\\tau_O=0$ y $\\sum\\vec F=0$.</div>'
          '<div class="step"><b>Torque sobre O:</b> suma los torques de los pesos (barra en $L/2$, bloque donde cuelga) y de las tensiones de ambas cuerdas (ángulos $\\alpha$ y la geometría dada), iguala a cero y despeja las tensiones.</div>'
          '<div class="step">Cierra con $\\sum F_x=0,\\ \\sum F_y=0$ para la reacción de la bisagra.</div></div>'),
    block('Plasticina que choca y se pega a una barra con pivote (2024-2)',
          'Examen FIS1514 2do sem 2024, P2', 'exD_p2.png',
          'Bola de plasticina choca el borde de una barra con pivote y queda pegada',
          '<div class="steps"><div class="step"><b>Choque rotacional</b> ⇒ se conserva el <b>momentum angular respecto al pivote</b> (no la energía).</div>'
          '<div class="step"><b>Inercia de la barra</b> respecto al pivote en $L/4$ (teorema de ejes paralelos): $I=\\tfrac{1}{12}ML^2+M\\left(\\tfrac{L}{4}\\right)^2$.</div>'
          '<div class="step"><b>Conservación:</b> $m v_0\\,d=(I+m d^2)\\,\\omega$, con $d$ la distancia del pivote al punto de impacto. Despeja $\\omega$ justo después del choque.</div></div>'),
    block('Disco que rueda sin resbalar con cuerda en la garganta (2024-2)',
          'Examen FIS1514 2do sem 2024, P3', 'exD_p3.png',
          'Disco que rueda sin resbalar con una cuerda enrollada en una garganta de radio r',
          '<div class="steps"><div class="step"><b>Rodadura sin resbalar:</b> $a_{CM}=\\alpha R$ (liga lineal y angular).</div>'
          '<div class="step"><b>Newton + torque:</b> $\\sum F=Ma_{CM}$ (tensión de la cuerda + roce estático) y $\\sum\\tau_{CM}=I\\alpha$ con $I=\\tfrac12 MR^2$. La cuerda sale de la garganta de radio $r$, así que su brazo es $r$.</div>'
          '<div class="step">Resuelve el sistema para $a_{CM}$, $\\alpha$ y el roce; verifica que el roce no supere $\\mu_e N$.</div></div>'),
  ],
}

# ---- Inserción localizando el ] de cierre del array blocks por id ------
def find_blocks_close(text, lesson_id):
    """Devuelve el índice del ']' que cierra el array blocks de la lección."""
    i = text.index("id: '" + lesson_id + "'")
    j = text.index("blocks: [", i) + len("blocks: [")
    depth = 1
    k = j
    in_str = False
    while k < len(text):
        c = text[k]
        if in_str:
            if c == "\\":
                k += 2
                continue
            if c == "'":
                in_str = False
        else:
            if c == "'":
                in_str = True
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    return k
        k += 1
    raise RuntimeError("no se encontró cierre para " + lesson_id)

with io.open(CONTENT, encoding="utf-8") as f:
    text = f.read()

# Insertar de atrás hacia adelante para no mover índices
positions = []
for lesson_id in INSERTS:
    close = find_blocks_close(text, lesson_id)
    positions.append((close, lesson_id))
positions.sort(reverse=True)

for close, lesson_id in positions:
    new_blocks = ",\n".join(INSERTS[lesson_id])
    # texto antes del ] : asegurar coma tras el último elemento
    before = text[:close].rstrip()
    insertion = ",\n" + new_blocks + "\n      "
    text = before + insertion + text[close:]
    print("✓ insertados", len(INSERTS[lesson_id]), "en", lesson_id)

with io.open(CONTENT, "w", encoding="utf-8") as f:
    f.write(text)
print("OK")
