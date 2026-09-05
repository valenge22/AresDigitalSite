import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from './reel-theme';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const CircuitBackground = () => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 840], [0, 70]);
  return <div className="ar-circuit" style={{backgroundPosition: `${drift}px ${drift * 0.55}px`}}>
    <svg viewBox="0 0 1080 1920" className="ar-circuit-lines">
      <path d="M-40 300 H230 V480 H430 M1080 230 H840 V410 H690 M0 1430 H260 V1240 H420 M1080 1510 H830 V1320 H650" />
      <circle cx="230" cy="480" r="6"/><circle cx="840" cy="410" r="6"/><circle cx="260" cy="1240" r="6"/><circle cx="830" cy="1320" r="6"/>
    </svg>
  </div>;
};

export const Background = ({children, darken = 0}: {children: React.ReactNode; darken?: number}) => (
  <AbsoluteFill className="ar-background" style={{fontFamily: FONTS.body}}>
    <CircuitBackground />
    <div className="ar-ambient ar-ambient-a"/><div className="ar-ambient ar-ambient-b"/>
    <div className="ar-noise"/><div className="ar-darken" style={{opacity: darken}}/>
    {children}
  </AbsoluteFill>
);

export const AresLogo = ({size = 130, label = true}: {size?: number; label?: boolean}) => (
  <div className="ar-logo-lockup">
    <Img src={staticFile('assets/ares-logo.png')} style={{width: size, height: size}} />
    {label && <div className="ar-wordmark" style={{fontSize: size * 0.34}}>ARES <span>Digital</span></div>}
  </div>
);

export const AnimatedTitle = ({children, delay = 0, align = 'center'}: {children: React.ReactNode; delay?: number; align?: 'left'|'center'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 95, mass: 0.8}});
  return <div className="ar-title" style={{textAlign: align, opacity: enter, transform: `translateY(${interpolate(enter, [0,1], [46,0])}px)`}}>{children}</div>;
};

const ICONS: Record<string, string> = {web: '⌁', sheet: '▦', chart: '↗', social: '◎', manual: '≡', cart: '◇', code: '</>', control: '◉', stock: '▥', ads: '◒'};

export const ServiceCard = ({title, subtitle, icon = 'web', active = false, style}: {title: string; subtitle?: string; icon?: string; active?: boolean; style?: React.CSSProperties}) => (
  <div className={`ar-service-card ${active ? 'is-active' : ''}`} style={style}>
    <span className="ar-service-icon">{ICONS[icon] ?? '◆'}</span>
    <div><strong>{title}</strong>{subtitle && <small>{subtitle}</small>}</div>
    <i>↗</i>
  </div>
);

export const DeviceMockup = ({type, title, style}: {type: 'desktop'|'dashboard'|'mobile'; title: string; style?: React.CSSProperties}) => (
  <div className={`ar-device ar-device-${type}`} style={style}>
    <div className="ar-device-top"><span/><span/><span/><em>{title}</em></div>
    <div className="ar-device-screen">
      <div className="ar-ui-title"/><div className="ar-ui-sub"/>
      {type === 'dashboard' ? <div className="ar-mini-bars">{[44,69,53,82,73].map((h) => <b key={h} style={{height: `${h}%`}}/>)}</div> : <><div className="ar-ui-card"/><div className="ar-ui-card short"/></>}
    </div>
  </div>
);

export const GlowLine = ({d, delay = 0}: {d: string; delay?: number}) => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [delay, delay + 34], [1, 0], clamp);
  return <path d={d} pathLength="1" className="ar-glow-line" style={{strokeDasharray: 1, strokeDashoffset: draw}}/>;
};

export const CTA = () => <div className="ar-cta"><span>Mensaje directo</span><b>↗</b></div>;

export const SceneTransition = ({children, duration, fadeOut = true}: {children: React.ReactNode; duration: number; fadeOut?: boolean}) => {
  const frame = useCurrentFrame();
  const opacity = fadeOut ? interpolate(frame, [0, 12, duration - 12, duration], [0,1,1,0], clamp) : interpolate(frame, [0,14], [0,1], clamp);
  return <AbsoluteFill style={{opacity}}>{children}</AbsoluteFill>;
};

export const Kicker = ({children}: {children: React.ReactNode}) => <div className="ar-kicker"><i/>{children}</div>;
export const colors = COLORS;
