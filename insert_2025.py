# -*- coding: utf-8 -*-
"""Inserta los 3 problemas del examen 2025-1 en content.js: P1 en U5 (ligaduras),
P2 y P3 en U14 (cuerpo rigido / momentum angular)."""
import re, io
CONTENT = "/home/leon/Documents/Dinamica/ExamenAcademy/content.js"

def block(desc, fuente, fil, alt, sol):
    return (
        "        { t: 'example', title: '\U0001F4DC Examen anterior · " + desc + "', level: 'dificil',\n"
        "          body: '<p><b>Examen anterior — " + fuente + ".</b> Enunciado y figura originales del examen (sin modificar). Inténtalo en papel y luego revisa el método.</p>"
        "<figure class=\"fig fig-img\"><img src=\"img/" + fil + "\" alt=\"" + alt + "\" loading=\"lazy\"><figcaption>\U0001F4F7 Examen anterior · " + fuente + "</figcaption></figure>',\n"
        "          solution: '" + sol + "' }"
    )

INSERTS = {
  'u5l3': [
    block('Cilindro en plano inclinado con cuerda y polea — pide las ECUACIONES DE LIGADURA (2025-1)',
          'Examen FIS1514 1er sem 2025, P1', 'ex2025_p1.png',
          'Cilindro en plano inclinado 30 grados con cuerda enrollada que pasa por polea a una masa m colgante',
          '<div class="steps"><div class="step"><b>Por qué está aquí:</b> el inciso d) pide literalmente "escriba las ecuaciones de ligadura". Es el problema ideal para ver cómo una ligadura conecta varios cuerpos.</div>'
          '<div class="step"><b>Ligaduras (la clave):</b> (1) el cilindro rueda sin deslizar sobre el plano: $a_{cil}=\\alpha_{cil}R$. (2) la cuerda es inextensible: la velocidad con que se desenrolla la cuerda del cilindro es igual a la del bloque $m$. Combinando ambas relacionas $\\ddot s$ (bloque) con $\\ddot\\theta$ (cilindro).</div>'
          '<div class="step"><b>DCL:</b> cilindro (peso, normal, roce estático, tensión de la cuerda) y bloque $m$ (peso, tensión). Newton traslacional + ecuación de torque $\\sum\\tau=I\\ddot\\theta$ con $I=\\tfrac12 MR^2$.</div>'
          '<div class="step"><b>Cierre:</b> usas las ligaduras para eliminar variables y despejas la aceleración del bloque $a$ y la relación $M/m$. (Resultado de la pauta: $M/m=\\dfrac{1-2\\sin\\alpha+4\\mu_d\\cos\\alpha}{\\sin\\alpha-\\mu_d\\cos\\alpha}$.)</div></div>'),
  ],
  'u14l2': [
    block('Cuerpo que rueda sin deslizar por un plano — esfera vs cilindro vs anillo (2025-1)',
          'Examen FIS1514 1er sem 2025, P2', 'ex2025_p2.png',
          'Cuerpo solido (esfera, cilindro o anillo) que rueda sin deslizar por un plano inclinado de altura h',
          '<div class="steps"><div class="step"><b>Energía con rodadura:</b> $mgh=\\tfrac12 mv^2+\\tfrac12 I\\omega^2$, con $I=\\alpha mR^2$ y rodadura $\\omega=v/R$.</div>'
          '<div class="step">Sustituyendo: $mgh=\\tfrac12 mv^2(1+\\alpha)\\Rightarrow \\boxed{v=\\sqrt{\\dfrac{2gh}{1+\\alpha}}}$.</div>'
          '<div class="step"><b>Comparación:</b> menor $\\alpha$ ⇒ mayor $v$. Si solo deslizara (sin rodar) sería $v=\\sqrt{2gh}$, siempre mayor (porque rodar gasta energía en rotación).</div>'
          '<div class="step"><b>Quién llega primero:</b> el de menor $\\alpha$ ⇒ la <b>esfera</b> ($\\alpha=2/5$) antes que el cilindro ($1/2$) y el anillo ($1$). No depende de la masa ni del radio.</div></div>'),
    block('Bala que se incrusta en un disco con pivote — momentum angular + vuelta completa (2025-1)',
          'Examen FIS1514 1er sem 2025, P3', 'ex2025_p3.png',
          'Disco que cuelga de un pivote O y una bala que impacta horizontalmente y queda incrustada en el borde',
          '<div class="steps"><div class="step"><b>(a) Inercia del sistema</b> respecto a O: $I=I_{disco}+I_{bala}=\\tfrac12 MR^2+m(2R)^2=\\left(\\tfrac32 M+4m\\right)R^2$ (ojo: la bala queda a $2R$ de O).</div>'
          '<div class="step"><b>(b) Choque (momentum angular respecto a O):</b> $m\\,v\\,(2R)=I\\,\\omega\\Rightarrow \\omega=\\dfrac{2mvR}{I}$. (La energía NO se conserva: la bala se incrusta.)</div>'
          '<div class="step"><b>(c) Vuelta completa:</b> después del choque conserva energía; impón que llegue al punto más alto con la rapidez mínima. Energía: $\\tfrac12 I\\omega^2=\\Delta U$ del centro de masa del sistema al subir. Despejas el $v$ mínimo.</div>'
          '<div class="step"><b>(d) Aceleración angular</b> en un ángulo dado: $\\ddot\\theta=\\dfrac{\\tau_{peso}}{I}=\\dfrac{(M+m)g\\,d_{CM}\\sin\\phi}{I}$, con $d_{CM}$ la distancia de O al centro de masa del sistema.</div></div>'),
  ],
}

def find_blocks_close(text, lesson_id):
    i = text.index("id: '" + lesson_id + "'")
    j = text.index("blocks: [", i) + len("blocks: [")
    depth = 1; k = j; in_str = False
    while k < len(text):
        c = text[k]
        if in_str:
            if c == "\\": k += 2; continue
            if c == "'": in_str = False
        else:
            if c == "'": in_str = True
            elif c == "[": depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0: return k
        k += 1
    raise RuntimeError("no close " + lesson_id)

with io.open(CONTENT, encoding="utf-8") as f:
    text = f.read()

positions = []
for lid in INSERTS:
    positions.append((find_blocks_close(text, lid), lid))
positions.sort(reverse=True)
for close, lid in positions:
    new = ",\n".join(INSERTS[lid])
    text = text[:close].rstrip() + ",\n" + new + "\n      " + text[close:]
    print("✓", len(INSERTS[lid]), "en", lid)

with io.open(CONTENT, "w", encoding="utf-8") as f:
    f.write(text)
print("OK")
