/* ============================================================
   DinamiAcademy · diagrams.js — dibujos de física en SVG
   Generados por código, escalables y compatibles con modo oscuro
   (usan las variables CSS del sitio). Se usan en content.js como
   bloques { t: 'fig', svg: FIG.<escena>({...}) }.
   ============================================================ */
const FIG = (() => {
  const T='var(--text)', FAINT='var(--text-faint)', SOFT='var(--bg-soft)';
  const ACC='var(--accent)', RED='var(--red)', GRE='var(--green)', PUR='var(--purple)', AMB='var(--amber)';
  const n=v=>Math.round(v*10)/10;
  const rad=d=>d*Math.PI/180;

  function line(x1,y1,x2,y2,o={}){const{c=T,w=2,dash='',cap='round'}=o;
    return `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${c}" stroke-width="${w}"${dash?` stroke-dasharray="${dash}"`:''} stroke-linecap="${cap}"/>`;}
  function poly(pts,o={}){const{c=T,w=2,fill='none'}=o;
    return `<polygon points="${pts.map(p=>n(p[0])+','+n(p[1])).join(' ')}" fill="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;}
  function txt(x,y,s,o={}){const{c=T,fs=15,it=true,anc='middle'}=o;
    return `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${fs}"${it?' font-style="italic"':''} text-anchor="${anc}" dominant-baseline="central" font-family="Manrope,sans-serif">${s}</text>`;}
  function arrow(x1,y1,x2,y2,c,label,o={}){const{w=2.4,dx=0,dy=0,fs=15}=o;
    const a=Math.atan2(y2-y1,x2-x1),s=9,ex=x2-3*Math.cos(a),ey=y2-3*Math.sin(a);
    const p1=[x2+s*Math.cos(a+2.5),y2+s*Math.sin(a+2.5)],p2=[x2+s*Math.cos(a-2.5),y2+s*Math.sin(a-2.5)];
    return line(x1,y1,ex,ey,{c,w})+`<polygon points="${n(x2)},${n(y2)} ${n(p1[0])},${n(p1[1])} ${n(p2[0])},${n(p2[1])}" fill="${c}"/>`+
      (label?txt(x2+dx,y2+dy,label,{c,fs}):'');}
  function ground(x1,x2,y){let s=line(x1,y,x2,y,{c:FAINT,w:2});
    for(let x=x1+4;x<x2;x+=11)s+=line(x,y,x-7,y+8,{c:FAINT,w:1.3});return s;}
  function wall(x,y1,y2,side=1){let s=line(x,y1,x,y2,{c:FAINT,w:2});
    for(let y=y1+4;y<y2;y+=11)s+=line(x,y,x-8*side,y+7,{c:FAINT,w:1.3});return s;}
  function ceil(x1,x2,y){let s=line(x1,y,x2,y,{c:FAINT,w:2});
    for(let x=x1+4;x<x2;x+=11)s+=line(x,y,x-7,y-8,{c:FAINT,w:1.3});return s;}
  function rectC(cx,cy,w,h,label,o={}){const{fill=ACC,op=0.16,fs=15}=o;
    return `<rect x="${n(cx-w/2)}" y="${n(cy-h/2)}" width="${w}" height="${h}" rx="4" fill="${fill}" fill-opacity="${op}" stroke="${T}" stroke-width="2"/>`+
      (label?txt(cx,cy,label,{fs}):'');}
  function ball(cx,cy,r,label,o={}){const{fill=ACC,op=0.18,fs=14}=o;
    return `<circle cx="${n(cx)}" cy="${n(cy)}" r="${r}" fill="${fill}" fill-opacity="${op}" stroke="${T}" stroke-width="2"/>`+
      (label?txt(cx,cy,label,{fs}):'');}
  function coil(x1,y1,x2,y2,o={}){const{coils=8,amp=7,c=PUR,w=2,lead=9}=o;
    const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,px=-uy,py=ux;
    let d=`M ${n(x1)} ${n(y1)} L ${n(x1+ux*lead)} ${n(y1+uy*lead)}`;
    const seg=(L-2*lead)/coils;
    for(let i=0;i<coils;i++){const tm=lead+seg*(i+0.5),side=(i%2?-1:1)*amp;
      d+=` L ${n(x1+ux*tm+px*side)} ${n(y1+uy*tm+py*side)}`;}
    d+=` L ${n(x2-ux*lead)} ${n(y2-uy*lead)} L ${n(x2)} ${n(y2)}`;
    return `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"/>`;}
  function pulley(cx,cy,r=9){return `<circle cx="${n(cx)}" cy="${n(cy)}" r="${r}" fill="${SOFT}" stroke="${T}" stroke-width="2"/><circle cx="${n(cx)}" cy="${n(cy)}" r="2.4" fill="${T}"/>`;}
  function rope(pts,o={}){const{c=T,w=2}=o;return `<polyline points="${pts.map(p=>n(p[0])+','+n(p[1])).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;}
  function dash(x1,y1,x2,y2){return line(x1,y1,x2,y2,{c:FAINT,w:1.4,dash:'4 4'});}
  function arc(cx,cy,r,a1,a2,o={}){const{c=T,w=2,large=0,sweep=1}=o;
    const x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1),x2=cx+r*Math.cos(a2),y2=cy+r*Math.sin(a2);
    return `<path d="M ${n(x1)} ${n(y1)} A ${r} ${r} 0 ${large} ${sweep} ${n(x2)} ${n(y2)}" fill="none" stroke="${c}" stroke-width="${w}"/>`;}
  function angle(cx,cy,r,a1,a2,label){const am=(a1+a2)/2;
    return arc(cx,cy,r,a1,a2,{c:T,w:1.5})+(label?txt(cx+(r+11)*Math.cos(am),cy+(r+11)*Math.sin(am),label,{fs:13,it:false}):'');}
  function fig(w,h,inner,cap){
    return `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${(cap||'diagrama').replace(/"/g,'')}">${inner}</svg>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;}

  // bloque alineado a una pendiente (sin transform): centro = superficie + normal*half
  function blockSlope(P, th, size, label, o={}){
    const u=[Math.cos(th),-Math.sin(th)], w=[-Math.sin(th),-Math.cos(th)], h=size/2;
    const C=[P[0]+w[0]*h, P[1]+w[1]*h];
    const c1=[C[0]-u[0]*h-w[0]*h,C[1]-u[1]*h-w[1]*h], c2=[C[0]+u[0]*h-w[0]*h,C[1]+u[1]*h-w[1]*h];
    const c3=[C[0]+u[0]*h+w[0]*h,C[1]+u[1]*h+w[1]*h], c4=[C[0]-u[0]*h+w[0]*h,C[1]-u[1]*h+w[1]*h];
    const pts=[c1,c2,c3,c4].map(p=>n(p[0])+','+n(p[1])).join(' ');
    const svg=`<polygon points="${pts}" fill="${o.fill||ACC}" fill-opacity="0.16" stroke="${T}" stroke-width="2" stroke-linejoin="round"/>`+txt(C[0],C[1],label||'',{fs:14});
    return {svg, C, u, w};
  }

  return {
    fig,line,poly,txt,arrow,ground,wall,ceil,rectC,ball,coil,pulley,rope,dash,arc,angle,blockSlope,
    C:{T,FAINT,ACC,RED,GRE,PUR,AMB},

    /* ---------- ESCENAS ---------- */

    // Plano inclinado con bloque (peso, normal, roce opcional)
    incline({deg=30,label='m',mu=false,base=205,vN=true,vW=true,vF=null,cap='',aLabel=null}={}){
      const th=rad(deg), x0=70, yb=165, ht=Math.min(base*Math.tan(th),118), b=ht/Math.tan(th);
      const BL=[x0,yb],BR=[x0+b,yb],TR=[x0+b,yb-ht];
      let s=poly([BL,BR,TR],{c:T,w:2,fill:SOFT});
      s+=ground(x0-22,x0+b+18,yb);
      s+=angle(x0,yb,32,-th,0,(aLabel||deg+'°'));
      const P=[x0+b*0.52, yb-ht*0.52], bs=30;
      const bk=blockSlope(P,th,bs,label); s+=bk.svg;
      const w=bk.w, u=bk.u, C=bk.C;
      if(vW) s+=arrow(C[0],C[1],C[0],C[1]+42,RED,'mg',{dx:8,dy:6});
      if(vN) s+=arrow(C[0],C[1],C[0]+w[0]*38,C[1]+w[1]*38,GRE,'N',{dx:-2,dy:-8});
      if(mu) s+=arrow(C[0],C[1],C[0]-u[0]*34,C[1]-u[1]*34,AMB,'f',{dx:-6,dy:-6});
      if(vF) s+=arrow(C[0],C[1],C[0]+u[0]*34,C[1]+u[1]*34,ACC,vF,{dx:8,dy:-4});
      return fig(330,200,s,cap);
    },

    // Dos bloques: uno horizontal y otro en plano, unidos por polea (¿se mueve?)
    twoBlocksIncline({deg=30,m1='m₁',m2='m₂',cap=''}={}){
      const th=rad(deg),x0=150,yb=160,base=150,ht=base*Math.tan(th),b=base;
      const BL=[x0,yb],BR=[x0+b,yb],TR=[x0+b,yb-ht];
      let s=poly([BL,BR,TR],{c:T,w:2,fill:SOFT});
      // mesa horizontal a la izquierda al nivel yb
      s+=ground(20,x0,yb);s+=ground(x0,x0+b+15,yb);
      s+=angle(x0,yb,30,-th,0,deg+'°');
      // bloque 1 sobre mesa
      s+=rectC(x0-70,yb-16,34,30,m1);
      // polea en el vértice TR
      s+=pulley(TR[0]+2,TR[1]-2,8);
      // bloque 2 en el plano
      const P=[x0+b*0.5,yb-ht*0.5],bk=blockSlope(P,th,28,m2);s+=bk.svg;
      // cuerda: del bloque1 horizontal hasta polea, y por el plano al bloque2
      s+=rope([[x0-53,yb-16],[TR[0]+2,yb-16],[TR[0]+2,TR[1]-2]],{c:T,w:1.8});
      s+=rope([[TR[0]+2,TR[1]-2],[bk.C[0]+bk.u[0]*14,bk.C[1]+bk.u[1]*14]],{c:T,w:1.8});
      return fig(340,195,s,cap);
    },

    // Bloque con resorte diagonal y fuerza horizontal (triángulo 3-4-5)
    springForce({label='m',F='F',cap='Resorte diagonal (3-4-5) + fuerza F.'}={}){
      let s=ground(40,300,168);
      const bx=150,by=152;
      s+=rectC(bx,by,40,32,label);
      // anclaje del resorte arriba-derecha
      const ax=250,ay=70; s+=`<circle cx="${ax}" cy="${ay}" r="3" fill="${T}"/>`;
      s+=coil(bx+18,by-6,ax,ay,{coils:9,amp:6});
      // fuerza horizontal
      s+=arrow(bx-20,by,bx-70,by,ACC,F,{dx:-6,dy:-10});
      // cotas
      s+=dash(bx,ay,ax,ay);s+=dash(ax,ay,ax,by);
      s+=txt((bx+ax)/2,ay-10,'0,4 m',{c:FAINT,fs:12,it:false});
      s+=txt(ax+22,(ay+by)/2,'0,3 m',{c:FAINT,fs:12,it:false});
      return fig(330,195,s,cap);
    },

    // Cuña móvil con bloque y fuerza P
    wedgeP({deg=35,m1='m₁',m2='m₂',cap='Cuña sobre mesa sin roce, fuerza P.'}={}){
      const th=rad(deg),x0=110,yb=158,base=150,ht=base*Math.tan(th);
      const BL=[x0,yb],BR=[x0+base,yb],TR=[x0+base,yb-ht];
      let s=ground(20,320,yb+10);
      // ruedas
      s+=`<circle cx="${x0+45}" cy="${yb+5}" r="5" fill="${SOFT}" stroke="${T}" stroke-width="1.6"/><circle cx="${x0+base-25}" cy="${yb+5}" r="5" fill="${SOFT}" stroke="${T}" stroke-width="1.6"/>`;
      s+=poly([BL,BR,TR],{c:T,w:2,fill:SOFT});
      s+=angle(x0,yb,28,-th,0,deg+'°');
      s+=txt(x0+base*0.5,yb-ht*0.25,m1,{fs:14});
      const P=[x0+base*0.5,yb-ht*0.5],bk=blockSlope(P,th,26,m2);s+=bk.svg;
      s+=arrow(x0-8,yb-ht*0.55,x0+28,yb-ht*0.55,ACC,'P',{dx:6,dy:-8});
      return fig(340,195,s,cap);
    },

    // Polea móvil: bloque B en mesa, bloque A colgando de la polea móvil (relación 2:1)
    pulleyMovible({A='A (M)',B='B (m)',cap='Polea móvil: B se mueve el doble que A.'}={}){
      let s=ceil(150,300,40);
      // mesa para B (izquierda)
      s+=ground(30,155,118);
      s+=rectC(95,102,42,30,B);
      const FP=[252,58], MP=[218,120];
      s+=pulley(FP[0],FP[1],9);          // polea fija
      s+=pulley(MP[0],MP[1],11);         // polea móvil
      // bloque A colgando de la polea móvil
      s+=line(MP[0],MP[1]+11,MP[0],150,{c:T,w:1.8});
      s+=rectC(MP[0],168,44,32,A);
      // cuerda: B -> polea fija -> baja a polea móvil -> sube a anclaje en techo
      s+=`<circle cx="248" cy="42" r="3" fill="${T}"/>`;
      s+=rope([[116,102],[FP[0],102],[FP[0],FP[1]+9]],{c:T,w:1.8}); // B a polea fija
      s+=rope([[FP[0]-7,FP[1]+5],[MP[0]-9,MP[1]-4]],{c:T,w:1.8});   // fija -> móvil (izq)
      s+=rope([[MP[0]+10,MP[1]-5],[248,46]],{c:T,w:1.8});           // móvil (der) -> techo
      return fig(330,205,s,cap);
    },

    // Círculo con aceleración centrípeta y velocidad tangente
    centripetal({cap='En un círculo: v es tangente, a apunta al centro.'}={}){
      const cx=165,cy=100,R=62;let s='';
      s+=`<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${T}" stroke-width="2"/>`;
      s+=`<circle cx="${cx}" cy="${cy}" r="2.5" fill="${T}"/>`;
      const a=-0.6,px=cx+R*Math.cos(a),py=cy+R*Math.sin(a);
      s+=ball(px,py,9,'m');
      s+=line(cx,cy,px,py,{c:FAINT,w:1.5});s+=txt((cx+px)/2-4,(cy+py)/2-8,'R',{c:FAINT,fs:13});
      // velocidad tangente
      s+=arrow(px,py,px+44*Math.cos(a+Math.PI/2),py+44*Math.sin(a+Math.PI/2),AMB,'v',{dx:8,dy:0});
      // aceleración al centro
      s+=arrow(px,py,px+40*Math.cos(a+Math.PI),py+40*Math.sin(a+Math.PI),ACC,'a',{dx:-6,dy:14});
      return fig(330,200,s,cap);
    },

    // Rizo (loop) con resorte horizontal
    loop({a='a',cap='Resorte comprimido lanza la masa al rizo de radio a.'}={}){
      let s=ground(20,310,170);
      s+=wall(28,95,170,1);
      const lcx=235,lcy=110,R=46;
      s+=`<circle cx="${lcx}" cy="${lcy}" r="${R}" fill="none" stroke="${T}" stroke-width="2"/>`;
      // resorte horizontal
      s+=coil(34,150,120,150,{coils:7,amp:7});
      s+=rectC(135,150,26,26,'m');
      // pista hasta el loop
      s+=line(148,163,lcx-R,163,{c:T,w:2});
      s+=line(lcx-R,163,lcx-R,lcy,{c:T,w:2});
      // marca punto alto C
      s+=`<circle cx="${lcx}" cy="${lcy-R}" r="2.5" fill="${T}"/>`+txt(lcx,lcy-R-10,'C',{fs:13,it:false});
      s+=txt(lcx+R+12,lcy,'a',{c:FAINT,fs:13});s+=dash(lcx,lcy,lcx+R,lcy);
      return fig(330,195,s,cap);
    },

    // Cono giratorio con partícula
    cone({deg=45,cap='Partícula en cono que gira: N ⟂ pared, f a lo largo, peso abajo.'}={}){
      const ax=165,top=40,h=120,half=rad(deg),hw=h*Math.tan(half);
      let s='';
      s+=line(ax,top+h,ax-hw,top,{c:T,w:2});s+=line(ax,top+h,ax+hw,top,{c:T,w:2});
      s+=line(ax-hw,top,ax+hw,top,{c:FAINT,w:1.4,dash:'4 4'});
      s+=line(ax,top-12,ax,top+h+6,{c:FAINT,w:1.4,dash:'5 4'});s+=txt(ax+8,top-8,'z',{fs:13});
      // partícula en la pared derecha
      const t=0.62,px=ax+hw*t,py=top+h-h*t;
      s+=ball(px,py,8,'m');
      // vectores: N perpendicular a la pared derecha (hacia adentro/arriba)
      const wallAng=Math.atan2(top-(top+h),(ax+hw)-ax); // dir up the right wall
      const nrm=wallAng-Math.PI/2;
      s+=arrow(px,py,px+34*Math.cos(nrm),py+34*Math.sin(nrm),GRE,'N',{dx:6,dy:-6});
      s+=arrow(px,py,px+30*Math.cos(wallAng),py+30*Math.sin(wallAng),AMB,'f',{dx:8,dy:-2});
      s+=arrow(px,py,px,py+40,RED,'mg',{dx:10,dy:6});
      s+=txt(ax,top+h+16,deg+'°',{fs:12,it:false,c:FAINT});
      return fig(330,195,s,cap);
    },

    // Péndulo soltado desde la horizontal
    pendulum({horizontal=true,label='m',cap=''}={}){
      const px=110,py=55,L=120;let s='';
      s+=ceil(60,180,46);s+=`<circle cx="${px}" cy="${py}" r="3" fill="${T}"/>`;
      if(horizontal){
        s+=dash(px,py,px+L,py);s+=ball(px+L,py,9,label);
        s+=arc(px,py,L,0,Math.PI/2,{c:FAINT,w:1.4});
        s+=line(px,py,px,py+L,{c:T,w:2});s+=ball(px,py+L,9,'');
        s+=txt(px+L/2,py-10,'R',{c:FAINT,fs:13});
        s+=arrow(px,py+L,px,py+L+34,RED,'mg',{dx:9,dy:6});
      }else{
        const th=rad(28),bx=px+L*Math.sin(th),by=py+L*Math.cos(th);
        s+=line(px,py,bx,by,{c:T,w:2});s+=ball(bx,by,9,label);
        s+=dash(px,py,px,py+L+6);s+=angle(px,py,26,Math.PI/2-th,Math.PI/2,'θ');
        s+=arrow(bx,by,bx,by+34,RED,'mg',{dx:9,dy:6});
      }
      return fig(300,200,s,cap);
    },

    // Bolita sobre un domo (semiesfera)
    dome({cap='Bolita que baja por el domo: se despega cuando N=0.'}={}){
      const cx=165,cy=165,R=92;let s=ground(40,300,cy);
      s+=arc(cx,cy,R,-Math.PI,0,{c:T,w:2});
      s+=`<circle cx="${cx}" cy="${cy}" r="2.5" fill="${T}"/>`;
      const th=rad(38),px=cx+R*Math.sin(th),py=cy-R*Math.cos(th);
      s+=ball(px,py,8,'m');s+=line(cx,cy,px,py,{c:FAINT,w:1.4});
      s+=angle(cx,cy,26,-Math.PI/2,-Math.PI/2+th,'θ');
      s+=arrow(px,py,px+ (px-cx)*0.42,py+(py-cy)*0.42,GRE,'N',{dx:8,dy:-6});
      s+=arrow(px,py,px,py+34,RED,'mg',{dx:9,dy:6});
      return fig(330,195,s,cap);
    },

    // DCL genérico: cuerpo + flechas de fuerza etiquetadas (deg: 0=derecha, 90=arriba)
    dcl({body='m', shape='box', forces=[], cap='DCL: las fuerzas que actúan sobre el cuerpo.'}={}){
      const cx=160, cy=118, R=58;
      let s = shape==='ball' ? ball(cx,cy,15,body) : rectC(cx,cy,42,32,body);
      forces.forEach(fo=>{
        const r=(fo.deg)*Math.PI/180;
        const ex=cx+R*Math.cos(r), ey=cy-R*Math.sin(r);
        const c=fo.c||T;
        s+=arrow(cx,cy,ex,ey,c,fo.label,{dx:13*Math.cos(r),dy:-13*Math.sin(r),fs:14});
      });
      return fig(320,236,s,cap);
    },

    // ⭐ Argolla en guía circular (cuarto de círculo) con resorte — Control 2
    argollaGuia({cap='Tu Control 2: argolla en guía circular con resorte. A abajo, B arriba.'}={}){
      // centro O en esquina inferior derecha; A a la izquierda de O; B arriba de O
      const O=[235,165],R=120;
      const A=[O[0]-R,O[1]],B=[O[0],O[1]-R];
      let s=ground(40,O[0]+10,O[1]);
      s+=wall(B[0]+2,O[1]-R-2,O[1]-R+24,-1);
      // cuarto de circulo de A a B (centro O)
      s+=arc(O[0],O[1],R,Math.PI,-Math.PI/2,{c:T,w:2.4});
      // cotas R
      s+=dash(A[0],A[1],O[0],O[1]);s+=dash(O[0],O[1],B[0],B[1]);
      s+=txt((A[0]+O[0])/2,O[1]+13,'R',{c:FAINT,fs:13,it:false});
      s+=txt(O[0]+13,(O[1]+B[1])/2,'R',{c:FAINT,fs:13,it:false});
      // argolla en A
      s+=ball(A[0],A[1],9,'m');
      // resorte de la argolla (A) al punto B
      s+=coil(A[0]+10,A[1]-8,B[0]-4,B[1]+6,{coils:10,amp:6});
      s+=txt(A[0]+R*0.5,A[1]-R*0.5-6,'k',{c:PUR,fs:14});
      s+=txt(B[0]+10,B[1]-8,'B',{fs:13,it:false});s+=txt(A[0]-12,A[1]+8,'A',{fs:13,it:false});
      // velocidad inicial vertical en A
      s+=arrow(A[0],A[1],A[0],A[1]-44,AMB,'v₀',{dx:-10,dy:0});
      // gravedad
      s+=arrow(110,60,110,96,RED,'g',{dx:10,dy:4});
      return fig(330,200,s,cap);
    },

    // Resorte horizontal con bloque sobre piso con roce
    springFloor({rough=true,label='M',cap=''}={}){
      let s=ground(40,300,160);s+=wall(48,90,160,1);
      s+=coil(54,138,150,138,{coils:8,amp:7});
      s+=rectC(170,138,40,34,label);
      if(rough){for(let x=60;x<290;x+=9)s+=line(x,162,x-5,168,{c:FAINT,w:1.2});s+=txt(250,150,'μ',{c:AMB,fs:14});}
      return fig(330,185,s,cap);
    },

    // Resorte vertical colgando una masa
    springVert({label='m',cap='Resorte vertical: la gravedad solo corre el equilibrio.'}={}){
      let s=ceil(120,210,40);const x=165;
      s+=coil(x,46,x,118,{coils:8,amp:8});
      s+=rectC(x,140,40,38,label);
      s+=arrow(x,140,x,182,RED,'mg',{dx:9,dy:6});
      return fig(330,205,s,cap);
    },

    // Bloques apilados sobre resorte (m sobre M, roce entre ellos)
    stacked({cap='m descansa sobre M; el resorte hace oscilar al conjunto.'}={}){
      let s=ground(40,300,165);s+=wall(48,95,165,1);
      s+=coil(54,148,150,148,{coils:7,amp:7});
      s+=rectC(195,150,72,30,'M');
      s+=rectC(195,126,44,22,'m');
      s+=txt(245,138,'μₛ',{c:AMB,fs:13,it:false});
      return fig(330,190,s,cap);
    },

    // Bungee: plataforma arriba, persona colgando de cuerda elástica
    bungee({cap='Bungee: cae libre L, luego la cuerda elástica (resorte) lo frena.'}={}){
      const x=120;let s=ceil(70,180,40);
      s+=coil(x,46,x,120,{coils:9,amp:6});
      s+=ball(x,140,12,'m');
      s+=arrow(x,140,x,180,RED,'mg',{dx:9,dy:6});
      s+=dash(x+90,40,x+90,196);
      s+=line(x+84,118,x+96,118,{c:FAINT,w:1.4});s+=txt(x+108,80,'L',{c:FAINT,fs:12,it:false});
      s+=line(x+84,196,x+96,196,{c:FAINT,w:1.4});s+=txt(x+106,160,'2L',{c:FAINT,fs:12,it:false});
      return fig(300,210,s,cap);
    },

    // Bloque entre dos resortes (paredes a ambos lados)
    twoSpringsH({cap='Bloque entre dos resortes: oscila con k equivalente = k₁+k₂.'}={}){
      let s=ground(34,300,150);s+=wall(42,98,150,1);s+=wall(298,98,150,-1);
      s+=rectC(168,134,34,30,'m');
      s+=coil(50,134,149,134,{coils:6,amp:6});
      s+=coil(187,134,290,134,{coils:6,amp:6});
      return fig(330,180,s,cap);
    },

    // Rampa curva + tramo con roce + resorte (trabajo-energía)
    rampSpring({cap='Rampa lisa (altura h), tramo rugoso d, y resorte que frena.'}={}){
      let s=ground(40,300,165);
      s+=arc(40,60,105,0,Math.PI/2,{c:T,w:2.2});      // rampa curva (cuarto)
      s+=ball(40+105*Math.cos(0.5),60+105*Math.sin(0.5),8,'m');
      s+=dash(40,60,40,165);s+=txt(28,110,'h',{c:FAINT,fs:13,it:false});
      for(let x=150;x<236;x+=9)s+=line(x,165,x-5,171,{c:FAINT,w:1.2});   // tramo rugoso
      s+=txt(192,178,'d (μ)',{c:AMB,fs:12,it:false});
      s+=coil(240,159,290,159,{coils:5,amp:6});s+=wall(296,140,168,-1);
      return fig(330,195,s,cap);
    },

    // Choque 1D: dos bloques con flechas de velocidad
    collision1D({m1='m',m2='M',v1='v₀',v2='',cap='Choque 1D: el momentum total se conserva.'}={}){
      let s=ground(30,310,150);
      s+=rectC(95,132,38,32,m1);s+=arrow(118,116,160,116,AMB,v1,{dy:-10});
      s+=rectC(225,132,42,34,m2);
      if(v2)s+=arrow(204,116,180,116,AMB,v2,{dy:-10});else s+=txt(225,108,'reposo',{c:FAINT,fs:12,it:false});
      return fig(330,175,s,cap);
    },

    // Choque 2D: dos discos que se aproximan en ángulo
    collision2D({cap='Choque 2D: el momentum se conserva en cada eje.'}={}){
      const cx=165,cy=120;let s='';
      s+=dash(cx,30,cx,150);s+=dash(70,cy,260,cy);
      s+=ball(105,150,12,'m₁');s+=arrow(105,150,cx-12,cy+8,ACC,'',{});
      s+=ball(225,150,12,'m₂');s+=arrow(225,150,cx+12,cy+8,ACC,'',{});
      s+=arrow(cx,cy,cx,cy-46,GRE,'después',{dx:30,dy:0,fs:12});
      s+=angle(105,150,24,-1.0,0,'β');
      return fig(330,180,s,cap);
    },

    // Cuña sobre piso sin roce + bloque que desliza (momentum horizontal)
    wedgeMomentum({deg=35,cap='Cuña sin roce con el piso: el momentum horizontal se conserva.'}={}){
      const th=rad(deg),x0=120,yb=158,base=150,ht=base*Math.tan(th);
      let s=ground(20,320,yb+8);
      s+=`<circle cx="${x0+40}" cy="${yb+4}" r="5" fill="${SOFT}" stroke="${T}" stroke-width="1.6"/><circle cx="${x0+base-20}" cy="${yb+4}" r="5" fill="${SOFT}" stroke="${T}" stroke-width="1.6"/>`;
      s+=poly([[x0,yb],[x0+base,yb],[x0+base,yb-ht]],{c:T,w:2,fill:SOFT});
      s+=txt(x0+base*0.62,yb-ht*0.3,'M',{fs:14});
      const P=[x0+base*0.5,yb-ht*0.5],bk=blockSlope(P,th,26,'m');s+=bk.svg;
      s+=arrow(x0+base*0.5,yb-ht*0.5-6,x0+base*0.5-30,yb-ht*0.5+18,AMB,'',{});
      return fig(340,195,s,cap);
    }
  };
})();
