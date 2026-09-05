import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const fade = (frame: number, from: number, to: number) => interpolate(frame, [from, from + 14, to - 14, to], [0, 1, 1, 0], clamp);
const rise = (frame: number, from: number, distance = 48) => interpolate(frame, [from, from + 18], [distance, 0], clamp);

const Brand = ({small = false}: {small?: boolean}) => (
  <div className={`brand ${small ? 'brand-small' : ''}`}>
    <Img src={staticFile('ares-logo-128.png')} className="logo" />
    <span>ARES <i>Digital</i></span>
  </div>
);

const Pill = ({children}: {children: React.ReactNode}) => <span className="pill">{children}</span>;

const Dashboard = ({frame, compact = false}: {frame: number; compact?: boolean}) => {
  const bar = (i: number) => interpolate(frame, [480 + i * 7, 530 + i * 7], [16, [38, 58, 44, 72, 65, 86, 96][i]], clamp);
  const progress = interpolate(frame, [490, 650], [0, 76], clamp);
  return <div className={`dashboard ${compact ? 'compact' : ''}`}>
    <div className="dash-top"><Brand small /><Pill><b className="dot" /> Sistemas activos</Pill></div>
    <div className="dash-content">
      <section className="focus-card">
        <p>FOCO ACTUAL</p><h3>Propuesta Q3</h3>
        <div className="timer"><span>{Math.round(interpolate(frame, [245, 450], [25, 18], clamp))}:00</span><em>Sesión de foco</em></div>
      </section>
      <section className="progress-card">
        <p>PROGRESO SEMANAL</p>
        <div className="progress-line"><div style={{width: `${progress}%`}} /></div>
        <strong>{Math.round(progress)}%</strong><span> +18% vs. semana pasada</span>
      </section>
    </div>
    <div className="chart"><p>PRODUCTIVIDAD</p><div className="bars">{[0,1,2,3,4,5,6].map((i) => <div className="bar" key={i} style={{height: `${bar(i)}%`}} />)}</div></div>
  </div>;
};

const Chaos = ({frame}: {frame: number}) => <div className="scene scene-chaos" style={{opacity: fade(frame, 0, 104)}}>
  <div className="eyebrow">MARTES · 09:12</div>
  <h1 style={{transform: `translateY(${rise(frame, 8)}px)`}}>Tu día empieza<br/>con <span>caos.</span></h1>
  {['12 pendientes', 'Reunión en 5 min', 'Cliente espera respuesta', '3 prioridades compiten'].map((item, i) => <div className="chaos-card" key={item} style={{transform: `translate(${[390, 560, 750, 930][i]}px, ${[470, 600, 430, 620][i]}px) rotate(${[-7, 5, -4, 6][i]}deg)`, opacity: interpolate(frame, [i * 5, 25 + i * 8], [0, 1], clamp)}}>{item}<b>↗</b></div>)}
</div>;

const Reveal = ({frame}: {frame: number}) => <div className="scene solution" style={{opacity: fade(frame, 86, 250)}}>
  <div className="solution-copy"><div className="eyebrow">UNA NUEVA FORMA DE AVANZAR</div><h2>Menos ruido.<br/><span>Más dirección.</span></h2><p>Conocé FocusPilot: tu centro de control para cada día.</p></div>
  <div className="phone" style={{transform: `translateY(${rise(frame, 105, 75)}px) rotateY(-9deg)`}}><div className="phone-glow"/><div className="phone-head"><Brand small /><Pill>Hoy</Pill></div><h3>Buenos días, Valen.</h3><p className="muted">Tu agenda, bajo control.</p><div className="task active"><b>01</b> Preparar propuesta <span>Alta</span></div><div className="task"><b>02</b> Revisar métricas <span>Media</span></div><div className="task"><b>03</b> Llamar a Martina <span>Baja</span></div></div>
</div>;

const Feature = ({frame}: {frame: number}) => {
  const messages = ['Planificá.', 'Priorizá.', 'Enfocate.'];
  const index = Math.min(2, Math.floor(Math.max(0, frame - 240) / 80));
  return <div className="scene feature" style={{opacity: fade(frame, 230, 480)}}>
    <div className="feature-index">0{index + 1} <span>/ 03</span></div>
    <h2 key={index} className="feature-title">{messages[index]}</h2>
    <p>{['Convertí objetivos en un plan simple para hoy.', 'Dale peso a lo que realmente mueve tu negocio.', 'Entrá en modo profundo. Sin distracciones.'][index]}</p>
    <div className="feature-visual"><div className={`orb orb-${index}`}><div className="orb-inner">{index === 0 ? '✓' : index === 1 ? '↑' : '25:00'}</div></div><div className="orbit"/><div className="orbit orbit-two"/></div>
  </div>;
};

const Progress = ({frame}: {frame: number}) => <div className="scene progress" style={{opacity: fade(frame, 465, 710)}}>
  <div className="progress-copy"><div className="eyebrow">DECISIONES QUE SE VEN</div><h2>El progreso<br/>deja de ser<br/><span>una intuición.</span></h2><p>Seguimiento claro, prioridades alineadas y un equipo que sabe qué sigue.</p></div>
  <Dashboard frame={frame} />
</div>;

const Closing = ({frame}: {frame: number}) => <div className="scene closing" style={{opacity: fade(frame, 695, 900)}}>
  <div className="end-halo"/><Brand /><h2>FocusPilot</h2><p>Plan your day. Own your focus.</p><div className="line"/><strong>TECNOLOGÍA QUE HACE CRECER TU NEGOCIO</strong><span className="cta">Conocé más <b>↗</b></span><small>ARES DIGITAL · ARGENTINA</small>
</div>;

export const FocusPilotAd = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  // Música: agregá <Audio src={staticFile('music.mp3')} volume={0.25} /> cuando haya una pista licenciada en public/.
  return <AbsoluteFill className="video"><div className="grid" /><div className="blue-glow glow-one" /><div className="blue-glow glow-two" /><div className="grain" /><Chaos frame={frame}/><Reveal frame={frame}/><Feature frame={frame}/><Progress frame={frame}/><Closing frame={frame}/><div className="frame-counter">{String(Math.floor(frame / fps) + 1).padStart(2, '0')}<span> / 30</span></div></AbsoluteFill>;
};
