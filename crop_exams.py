"""
Recorta el ENUNCIADO (texto + figura) de cada problema de los exámenes anteriores
y lo guarda como PNG en img/. No altera nada del original: es un recorte fiel.
Detecta dónde empieza la solución y corta ahí (solo enunciado).
"""
import os, re, fitz

EXALT = "/home/leon/Documents/Dinamica/examen/examenes anteriores"
IMG   = "/home/leon/Documents/Dinamica/ExamenAcademy/img"
os.makedirs(IMG, exist_ok=True)

ZOOM = 2.4  # resolución del recorte

# Palabras que marcan el inicio de la solución (para cortar el enunciado ahí)
SOL_START = re.compile(
    r"^\s*(Soluci[oó]n|Respuesta|Pauta|Desarrollo|Resoluci[oó]n|"
    r"Soluc\b|Sol\b|Sean\s|Por\s+(el\s+teorema|conservaci|la\s+segunda|tanto)|"
    r"Aplicando|Notemos|Usando|En\s+(el\s+eje|coordenadas|este\s+caso)|"
    r"Se\s+(otorga|conserva|obtiene|tiene)|Consideremos)",
    re.IGNORECASE)
# Indicios de subpregunta (parte del enunciado, NO solución)
QUESTION = re.compile(
    r"^\s*(\(?[a-z]\)|Determine|Encuentre|Calcule|Halle|Demuestre|Obtenga|"
    r"Indique|Dibuje|Suponga|Considere|Exprese|Escriba|Asuma|Verifique|"
    r"¿|Para\s)", re.IGNORECASE)

def lines_of(page):
    out = []
    for blk in page.get_text("dict")["blocks"]:
        if "lines" not in blk: continue
        for ln in blk["lines"]:
            txt = "".join(s["text"] for s in ln["spans"]).strip()
            if txt:
                out.append((ln["bbox"], txt))
    return out

def find_headers(doc, header_re):
    """Devuelve [(num, page_idx, y_top)] de cada problema."""
    hs = []
    for pi in range(len(doc)):
        for (bbox, txt) in lines_of(doc[pi]):
            m = header_re.match(txt)
            if m:
                n = int(m.group(1))
                if not any(h[0] == n for h in hs):
                    hs.append((n, pi, bbox[1]))
    hs.sort(key=lambda h: (h[1], h[2]))
    return hs

SUBQ = re.compile(r"^\s*\(?([a-eA-E])[\)\.]\s")

def statement_bottom(page, y0, y1):
    """Termina el enunciado antes de la solución.
    Señal robusta para pautas: cuando una letra de subpregunta (a/b/c) se REPITE,
    significa que empezó la solución (que repite a)/b)/c)). Corta ahí.
    También corta en palabras clave de solución."""
    seen = set()
    rows = sorted([(b[1], b, t) for (b, t) in lines_of(page)], key=lambda r: r[0])
    for (by0, bbox, txt) in rows:
        if by0 < y0 + 12 or by0 >= y1: continue
        m = SUBQ.match(txt)
        if m:
            letter = m.group(1).lower()
            if letter in seen:           # letra repetida → solución
                return by0 - 6
            seen.add(letter)
            continue                     # subpregunta del enunciado
        if SOL_START.match(txt):
            return by0 - 6
    return y1

def crop(pdf_path, page_idx, rect, out_name):
    doc = fitz.open(pdf_path)
    page = doc[page_idx]
    mat = fitz.Matrix(ZOOM, ZOOM)
    pix = page.get_pixmap(matrix=mat, clip=rect)
    pix.save(os.path.join(IMG, out_name))
    doc.close()
    return out_name

def crop_problem(pdf_path, header_re, num, out_name, max_pages=1):
    """Recorta el enunciado del problema `num` (header→solución)."""
    doc = fitz.open(pdf_path)
    headers = find_headers(doc, header_re)
    target = next((h for h in headers if h[0] == num), None)
    if not target:
        doc.close()
        print(f"  ⚠ no encontrado P{num} en {os.path.basename(pdf_path)}")
        return None
    n, pi, y = target
    page = doc[pi]
    pw, ph = page.rect.width, page.rect.height
    # límite inferior: siguiente header en misma página o fin de enunciado
    next_y = ph
    for (hn, hp, hy) in headers:
        if hp == pi and hy > y and hy < next_y:
            next_y = hy - 4
    bottom = statement_bottom(page, y, next_y)
    rect = fitz.Rect(40, y - 10, pw - 40, bottom)
    doc.close()
    return crop(pdf_path, pi, rect, out_name)

# ------------------------------------------------------------------
# MANIFIESTO: cada problema → archivo, header, número, nombre salida
# ------------------------------------------------------------------
P = lambda f: os.path.join(EXALT, f)
RE_PREG = re.compile(r"^Pregunta\s+(\d+)")
RE_PROB = re.compile(r"^\s*\d*\.?\s*Problema\s+(\d+)")
RE_NUM  = re.compile(r"^\s*(\d+)\.\s+\S")

JOBS = [
    # NOTA: el examen "examen-final-de-dinamica-fis-1514.pdf" es un mock generado por
    # Studocu AI (cajas en blanco, sin figuras reales) → se descarta.
    # ex-2023-2
    (P("ex-2023-2-examen-de-dinamica-segundo-semestre-2023.pdf"), RE_PROB, 1, "exB_p1.png"),
    (P("ex-2023-2-examen-de-dinamica-segundo-semestre-2023.pdf"), RE_PROB, 2, "exB_p2.png"),
    (P("ex-2023-2-examen-de-dinamica-segundo-semestre-2023.pdf"), RE_PROB, 3, "exB_p3.png"),
    # examen 2024-1 (proyectiles y equilibrio)
    (P("examen-dinamica-1er-semestre-2024-proyectiles-y-equilibrio.pdf"), RE_NUM, 1, "exC_p1.png"),
    (P("examen-dinamica-1er-semestre-2024-proyectiles-y-equilibrio.pdf"), RE_NUM, 2, "exC_p2.png"),
    (P("examen-dinamica-1er-semestre-2024-proyectiles-y-equilibrio.pdf"), RE_NUM, 3, "exC_p3.png"),
    # fis-1514-pauta 2024-2
    (P("fis-1514-pauta-del-examen-final-segundo-semestre-2024.pdf"), RE_NUM, 1, "exD_p1.png"),
    (P("fis-1514-pauta-del-examen-final-segundo-semestre-2024.pdf"), RE_NUM, 2, "exD_p2.png"),
    (P("fis-1514-pauta-del-examen-final-segundo-semestre-2024.pdf"), RE_NUM, 3, "exD_p3.png"),
]

# 2022 (texto cifrado: recortes manuales por página)
MANUAL = [
    # (pdf, page_idx 0-based, rect (x0,y0,x1,y1) en pt, out)
    (P("examen-de-dinamica-2do-semestre-2022.pdf"), 2, (60, 70, 545, 470), "exE_p1.png"),   # P1 proyectil+roce viscoso
    (P("examen-de-dinamica-2do-semestre-2022.pdf"), 7, (60, 70, 545, 520), "exE_p2.png"),   # P2 bala+bloque+resorte
]

if __name__ == "__main__":
    ok = 0
    for (pdf, hre, num, out) in JOBS:
        r = crop_problem(pdf, hre, num, out)
        if r: ok += 1; print(f"  ✓ {out}")
    for (pdf, pi, rect, out) in MANUAL:
        crop(pdf, pi, fitz.Rect(*rect), out)
        ok += 1; print(f"  ✓ {out} (manual)")
    print(f"\n{ok} recortes en {IMG}")
