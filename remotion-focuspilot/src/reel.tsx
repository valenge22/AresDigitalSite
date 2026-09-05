import React from 'react';
import {AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {AnimatedTitle, AresLogo, Background, CTA, DeviceMockup, GlowLine, Kicker, SceneTransition, ServiceCard} from './reel-components';
import {AUDIO_ENABLED, COLORS, SCENES} from './reel-theme';
import './reel.css';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const Scene01Hook = () => {
  const frame = useCurrentFrame();
  const logoScale = interpolate(frame, [0, 30], [.95, 1], clamp);
  return <SceneTransition duration={SCENES.hook.duration}><Background>
    <div className="ar-safe ar-hook">
      <div style={{opacity: interpolate(frame,[0,18],[0,1],clamp), transform:`scale(${logoScale})`}}><AresLogo size={94}/></div>
      <AnimatedTitle delay={12}>¿Tu negocio está aprovechando<br/><span>realmente la tecnología?</span></AnimatedTitle>
      <p className="ar-hook-caption">PRESENCIA DIGITAL · SOFTWARE · CRECIMIENTO</p>
    </div>
  </Background></SceneTransition>;
};

const PROBLEMS = [
  {title:'Sitio web', subtitle:'Presencia aislada', icon:'web'},
  {title:'Planillas', subtitle:'Procesos dispersos', icon:'sheet'},
  {title:'Estadísticas', subtitle:'Datos sin contexto', icon:'chart'},
  {title:'Redes sociales', subtitle:'Acciones sin dirección', icon:'social'},
  {title:'Administración manual', subtitle:'Tiempo que se pierde', icon:'manual'},
];

export const Scene02Problem = () => {
  const frame = useCurrentFrame();
  return <SceneTransition duration={SCENES.problem.duration}><Background>
    <div className="ar-safe ar-problem"><Kicker>CUANDO CADA HERRAMIENTA VA POR SU LADO</Kicker><AnimatedTitle align="left">Web · Sistemas<br/><span>· Marketing</span></AnimatedTitle><p>Todo debería trabajar en conjunto.</p>
      <div className="ar-problem-stack">{PROBLEMS.map((item,i) => {const show=interpolate(frame,[10+i*8,24+i*8],[0,1],clamp); return <ServiceCard key={item.title} {...item} style={{opacity:show,transform:`translateY(${(1-show)*34}px) translateX(${i%2 ? 18 : -10}px)`}}/>;})}</div>
    </div>
  </Background></SceneTransition>;
};

export const Scene03Ares = () => {
  const frame = useCurrentFrame();
  const float = Math.sin(frame/18)*8;
  return <SceneTransition duration={SCENES.ares.duration}><Background>
    <div className="ar-safe ar-intro"><Kicker>TECNOLOGÍA PARA NEGOCIOS REALES</Kicker><div className="ar-intro-logo"><AresLogo size={120}/></div><AnimatedTitle delay={8}>Desarrollo Web<br/><span>& Software</span></AnimatedTitle><p>Soluciones digitales pensadas<br/>para tu negocio.</p>
      <div className="ar-device-stage"><DeviceMockup type="desktop" title="Sitio web" style={{transform:`translateY(${float}px) rotate(-3deg)`}}/><DeviceMockup type="dashboard" title="Dashboard" style={{transform:`translateY(${-float}px) rotate(3deg)`}}/><DeviceMockup type="mobile" title="Mobile" style={{transform:`translateY(${float*.6}px) rotate(5deg)`}}/></div>
    </div>
  </Background></SceneTransition>;
};

const SERVICES = [
  {title:'Sitios Web',subtitle:'Presencia que convierte',icon:'web'}, {title:'E-commerce',subtitle:'Ventas más simples',icon:'cart'},
  {title:'Software a medida',subtitle:'Procesos más claros',icon:'code'}, {title:'ControlARES',subtitle:'Tu operación, bajo control',icon:'control'},
  {title:'StockARES',subtitle:'Inventario inteligente',icon:'stock'}, {title:'Meta Ads',subtitle:'Campañas con dirección',icon:'ads'},
  {title:'Gestión de redes',subtitle:'Una marca consistente',icon:'social'},
];

export const Scene04Services = () => {
  const frame = useCurrentFrame();
  const index = Math.min(SERVICES.length - 1, Math.floor(frame / (SCENES.services.duration / SERVICES.length)));
  return <SceneTransition duration={SCENES.services.duration}><Background>
    <div className="ar-safe ar-services"><Kicker>SOLUCIONES A TU MEDIDA</Kicker><h2>De la idea<br/><span>al resultado.</span></h2><div className="ar-services-window"><div className="ar-service-number">0{index+1}<small>/ 07</small></div><ServiceCard {...SERVICES[index]} active/><div className="ar-next-service">SIGUE · {SERVICES[(index+1)%SERVICES.length].title}</div></div><div className="ar-service-progress">{SERVICES.map((_,i)=><i key={i} className={i<=index?'filled':''}/>)}</div>
    </div>
  </Background></SceneTransition>;
};

export const Scene05Connected = () => {
  const nodes = [{x:120,y:540,t:'WEB'},{x:730,y:520,t:'SOFTWARE'},{x:95,y:1130,t:'ADS'},{x:755,y:1160,t:'REDES'},{x:415,y:1390,t:'STOCK'}];
  return <SceneTransition duration={SCENES.connected.duration}><Background>
    <div className="ar-safe ar-connected"><Kicker>UN MISMO OBJETIVO</Kicker><AnimatedTitle>Una estrategia.<br/><span>Distintas soluciones.</span></AnimatedTitle><p>Todo conectado.</p></div>
    <svg viewBox="0 0 1080 1920" className="ar-network"><GlowLine d="M210 600 C340 650 360 850 540 960" delay={6}/><GlowLine d="M840 580 C700 660 720 820 540 960" delay={12}/><GlowLine d="M180 1180 C330 1110 350 1000 540 960" delay={18}/><GlowLine d="M850 1220 C700 1140 710 1020 540 960" delay={24}/><GlowLine d="M500 1450 C500 1240 540 1130 540 960" delay={30}/></svg>
    {nodes.map((n,i)=><div key={n.t} className="ar-node" style={{left:n.x,top:n.y,animationDelay:`${i*.08}s`}}>{n.t}</div>)}<div className="ar-center-logo"><AresLogo size={105} label={false}/></div>
  </Background></SceneTransition>;
};

export const Scene06CTA = () => {
  const frame = useCurrentFrame();
  const fadeDark = interpolate(frame,[68,89],[0,.92],clamp);
  return <SceneTransition duration={SCENES.cta.duration} fadeOut={false}><Background darken={fadeDark}>
    <div className="ar-safe ar-final"><AresLogo size={125}/><AnimatedTitle delay={5}>¿Tenés un proyecto?<br/><span>Hablemos.</span></AnimatedTitle><CTA/><a>supportares@controlares.com</a><small>TECNOLOGÍA PARA HACER CRECER TU NEGOCIO.</small></div>
  </Background></SceneTransition>;
};

export const AresPromoReel = () => <AbsoluteFill style={{backgroundColor:COLORS.backgroundDeep}}>
  <Sequence from={SCENES.hook.from} durationInFrames={SCENES.hook.duration}><Scene01Hook/></Sequence>
  <Sequence from={SCENES.problem.from} durationInFrames={SCENES.problem.duration}><Scene02Problem/></Sequence>
  <Sequence from={SCENES.ares.from} durationInFrames={SCENES.ares.duration}><Scene03Ares/></Sequence>
  <Sequence from={SCENES.services.from} durationInFrames={SCENES.services.duration}><Scene04Services/></Sequence>
  <Sequence from={SCENES.connected.from} durationInFrames={SCENES.connected.duration}><Scene05Connected/></Sequence>
  <Sequence from={SCENES.cta.from} durationInFrames={SCENES.cta.duration}><Scene06CTA/></Sequence>
  {AUDIO_ENABLED.music && <Audio src={staticFile('audio/music.mp3')} volume={(f)=>interpolate(f,[0,30,780,839],[0,.26,.26,0],clamp)}/>} 
  {AUDIO_ENABLED.voiceover && <Audio src={staticFile('audio/voiceover.mp3')} volume={1}/>} 
</AbsoluteFill>;
