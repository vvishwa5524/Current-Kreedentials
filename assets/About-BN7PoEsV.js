import{b1 as l,aK as n,aY as t,aZ as d,ac as R,a4 as j,l as Z,a2 as C,f as O,t as S,i as E,d as N,a as M,af as I,c as P,bm as D,bc as B,s as V,N as K,r as W}from"./index-Cl740Rvo.js";import{Z as w}from"./zap-DfwA9G43.js";import{A as k}from"./activity-DyqXvihb.js";import{F as A}from"./flame-CN3_o8gR.js";import{D as $}from"./dumbbell-CqsTt_g_.js";import{T as q}from"./timer-DQzZ0akt.js";import{A as _}from"./award-DTGjh8_-.js";import{Q as T}from"./quote-C32w-PHS.js";import{T as F}from"./target-DrZe8sPY.js";import{T as U}from"./trending-up-BVAtVK3Z.js";const Y=()=>{const e=l.useRef(null),i=l.useRef(null),p=l.useRef(null),x=l.useRef(null),m=l.useRef(null),h=l.useRef(null);l.useEffect(()=>{n.to(e.current,{backgroundColor:"#f0f6f3",duration:12,repeat:-1,yoyo:!0,ease:"sine.inOut"}),n.to(i.current,{x:"random(-50, 50)",y:"random(-50, 50)",scale:"random(0.9, 1.1)",duration:22,repeat:-1,yoyo:!0,ease:"sine.inOut"}),n.to(p.current,{x:"random(-40, 40)",y:"random(-40, 40)",scale:"random(0.95, 1.05)",duration:18,repeat:-1,yoyo:!0,ease:"sine.inOut"}),n.to(x.current,{x:"random(-30, 30)",y:"random(-30, 30)",duration:14,repeat:-1,yoyo:!0,ease:"sine.inOut"})},[]);const s=o=>{const a=m.current,g=h.current;if(!a||!g)return;const y=a.getBoundingClientRect(),z=o.clientX-y.left-y.width/2,b=o.clientY-y.top-y.height/2;n.to(a,{rotationY:z*.015,rotationX:-b*.015,transformPerspective:1200,duration:.5,ease:"power2.out"}),n.to(g,{x:-z*.02,y:-b*.02,scale:1.04,duration:.5,ease:"power2.out"})},c=()=>{const o=m.current,a=h.current;!o||!a||(n.to(o,{rotationY:0,rotationX:0,duration:.6,ease:"power2.out"}),n.to(a,{x:0,y:0,scale:1,duration:.6,ease:"power2.out"}))};return t.jsxs("section",{id:"about-hero","data-section-title":"About Overview",ref:e,className:"relative min-h-screen pt-36 pb-28 overflow-hidden bg-[rgb(var(--sp-surface))] text-[rgb(var(--sp-text))] select-none transition-colors duration-300",children:[t.jsx("style",{children:`
        .text-outline {
          -webkit-text-stroke: 1.5px #17161A;
          color: transparent;
        }
        .bento-glow-sweep::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2.2rem;
          padding: 1.5px;
          background: linear-gradient(135deg, transparent 40%, rgba(57, 255, 20, 0.4), transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .bento-glow-sweep:hover::before {
          opacity: 1;
        }
      `}),t.jsx("div",{ref:i,className:"absolute top-1/4 left-[-12%] w-[650px] h-[650px] bg-gradient-to-tr from-[rgb(var(--sp-accent)/0.35)] via-[#7FCDBB]/20 to-transparent blur-[140px] rounded-full pointer-events-none"}),t.jsx("div",{ref:p,className:"absolute top-1/3 right-[-8%] w-[580px] h-[580px] bg-gradient-to-bl from-[rgb(var(--sp-inset)/0.3)] via-[#7FCDBB]/15 to-transparent blur-[130px] rounded-full pointer-events-none"}),t.jsx("div",{ref:x,className:"absolute bottom-10 left-1/4 w-[420px] h-[420px] bg-gradient-to-r from-[rgb(var(--sp-accent)/0.08)] via-[rgb(var(--sp-accent)/0.06)] to-transparent blur-[110px] rounded-full pointer-events-none"}),t.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#17161a_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"}),t.jsx("div",{className:"absolute top-28 left-[5%] text-[12rem] md:text-[20rem] font-black text-[rgb(var(--sp-muted))] tracking-tighter leading-none pointer-events-none select-none",children:"KREEDA"}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24",children:[t.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-center",children:[t.jsxs(d.div,{initial:{opacity:0,y:-15},animate:{opacity:1,y:0},transition:{duration:.5},className:"inline-flex items-center gap-2.5 mb-5 self-start text-[rgb(var(--sp-muted))] font-black text-xs uppercase tracking-[0.25em]",children:[t.jsx("span",{children:"["}),t.jsxs("span",{className:"relative flex h-2 w-2",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--sp-accent))] sp-accent-surface opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[rgb(var(--sp-accent))] sp-accent-surface"})]}),t.jsx("span",{children:"Connected Athletic Ecosystem"}),t.jsx("span",{children:"]"})]}),t.jsxs(d.h1,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-5xl sm:text-7xl lg:text-[5.8rem] font-black text-[rgb(var(--sp-text))] tracking-tighter leading-[0.98] uppercase",children:[t.jsx("span",{className:"text-outline",children:"The Story Behind"})," ",t.jsx("br",{}),t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))] bg-[length:200%_auto] animate-gradient-flow drop-shadow-sm",children:"Kreedentials"})]})]}),t.jsxs("div",{className:"lg:col-span-5 lg:pt-20",children:[t.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"mb-6 inline-block",children:t.jsxs("div",{className:"px-5.5 py-3 rounded-full bg-[rgb(var(--sp-dusk))] sp-inverse text-white border border-white/10 shadow-[0_12px_28px_-6px_rgba(23,22,26,0.35)] flex items-center gap-2.5 hover:border-[rgb(var(--sp-accent)/0.3)] hover:scale-[1.03] transition-all duration-300 cursor-pointer",children:[t.jsx(w,{size:14,className:"text-[rgb(var(--sp-accent-ink))] fill-[rgb(var(--sp-accent))] animate-pulse"}),t.jsx("span",{className:"text-xs font-black uppercase tracking-[0.18em] text-white/90",children:"Kreeda. Essentials. Credentials."})]})}),t.jsx(d.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"text-base sm:text-lg text-[rgb(var(--sp-muted))] font-semibold leading-relaxed max-w-[480px]",children:"Kreedentials exists to make youth sports matter earlier — combining custom gear, certified coaching, community leagues, and real-time performance tracking."})]})]}),t.jsxs(d.div,{ref:m,onMouseMove:s,onMouseLeave:c,initial:{opacity:0,y:35},animate:{opacity:1,y:0},transition:{duration:.7,delay:.4},className:"relative rounded-[2.5rem] md:rounded-[3.8rem] overflow-hidden shadow-[0_35px_70px_-15px_rgba(23,22,26,0.15)] border border-[rgb(var(--sp-border))] h-[360px] md:h-[550px] mb-24 group cursor-crosshair transform-gpu",children:[t.jsx("img",{ref:h,src:"/about_hero_banner.jpg",alt:"Warm sporting environment showing movement and coach interaction",className:"w-full h-full object-cover transform scale-100 select-none pointer-events-none transform-gpu"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none"}),t.jsx("div",{className:"absolute inset-0 bg-[rgb(var(--sp-accent)/0.05)] mix-blend-overlay pointer-events-none"}),t.jsxs("div",{className:"absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-[rgb(var(--sp-surface)/0.2)] backdrop-blur-[20px] text-white border border-white/25 rounded-3xl p-6 md:p-8 max-w-sm shadow-[0_20px_45px_rgba(23,22,26,0.15)] pointer-events-auto transition-all duration-300 hover:bg-[rgb(var(--sp-surface)/0.3)] hover:scale-[1.03] hover:border-white/40 group/glass",children:[t.jsx("div",{className:"w-10 h-10 rounded-2xl bg-[rgb(var(--sp-dusk))] sp-inverse flex items-center justify-center text-[rgb(var(--sp-accent-ink))] mb-4 shadow-sm group-hover/glass:rotate-12 transition-transform duration-300",children:t.jsx(R,{size:18})}),t.jsxs("h3",{className:"text-lg font-black text-white mb-2 flex items-center gap-1.5",children:[t.jsx("span",{children:"Connecting the Sporting Arena"}),t.jsx(j,{size:16,className:"text-[rgb(var(--sp-accent-ink))] animate-pulse"})]}),t.jsx("p",{className:"text-white/80 text-sm font-semibold leading-relaxed",children:"Where athletic commitment is met with institutional trust and digital verification. Capturing real-world growth, week-over-week."})]}),t.jsxs("div",{className:"absolute top-6 right-6 md:top-10 md:right-10 bg-[rgb(var(--sp-accent))] sp-accent-surface text-[rgb(var(--sp-text))] border border-[rgb(var(--sp-accent)/0.5)] shadow-[0_8px_24px_rgba(57,255,20,0.3)] rounded-full px-5 py-2.5 flex items-center gap-2 font-black text-xs uppercase tracking-wider select-none transform hover:scale-105 transition-transform duration-300",children:[t.jsx(k,{size:14,className:"animate-spin text-[rgb(var(--sp-text))]",style:{animationDuration:"4s"}}),t.jsx("span",{children:"500+ Athletes Verified"})]})]}),t.jsxs("div",{className:"w-full rounded-[3rem] bg-[rgb(var(--sp-surface)/0.6)] backdrop-blur-[16px] border border-[rgb(var(--sp-border))] p-8 md:p-12 shadow-[0_20px_50px_rgba(23,22,26,0.03)] relative overflow-hidden",children:[t.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[rgb(var(--sp-border))]",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgb(var(--sp-dusk))] sp-inverse text-white text-xs font-black uppercase tracking-wider mb-2",children:[t.jsx(A,{size:12,className:"text-[rgb(var(--sp-accent-ink))]"}),t.jsx("span",{children:"Kreedentials Ledger Metrics"})]}),t.jsx("h3",{className:"text-2xl font-black text-[rgb(var(--sp-text))] tracking-tight",children:"Performance Statistics"})]}),t.jsx("p",{className:"text-xs font-bold text-[rgb(var(--sp-muted))] max-w-xs leading-relaxed md:text-right",children:"Live validation and verification indexes mapped across regional academy databases."})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:$,title:"Power",sub:"Strength Capacity",metric:"94%",width:"94%",color:"#006666",glow:"rgba(0,102,102,0.15)"},{icon:w,title:"Fast",sub:"Speed Index",metric:"4.2s",width:"85%",color:"#39FF14",glow:"rgba(57,255,20,0.15)"},{icon:q,title:"Steady",sub:"Endurance Log",metric:"98%",width:"98%",color:"#00CC99",glow:"rgba(0,204,153,0.15)"},{icon:R,title:"Skilled",sub:"Agility Assessment",metric:"A+",width:"100%",color:"#00FF99",glow:"rgba(0,255,153,0.15)"}].map((o,a)=>t.jsxs(d.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:a*.1},style:{"--hover-glow":o.glow},className:"group relative bg-[rgb(var(--sp-surface)/0.8)] border border-[rgb(var(--sp-border))] rounded-[2.2rem] p-6 flex flex-col justify-between h-[180px] shadow-[0_4px_16px_rgba(23,22,26,0.01)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(23,22,26,0.06)] hover:bg-[rgb(var(--sp-surface))] cursor-pointer overflow-hidden bento-glow-sweep",children:[t.jsx("span",{className:"absolute inset-0 rounded-[2.2rem] bg-[var(--hover-glow)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[20px] scale-90 -z-10"}),t.jsx(o.icon,{size:90,style:{color:o.color},className:"absolute right-[-15px] bottom-[-15px] opacity-[0.03] group-hover:opacity-[0.06] transform group-hover:rotate-12 transition-all duration-300 pointer-events-none"}),t.jsxs("div",{className:"flex items-center justify-between w-full",children:[t.jsx("div",{style:{backgroundColor:`${o.color}15`,color:o.color,borderColor:`${o.color}25`},className:"w-11 h-11 rounded-2xl border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300",children:t.jsx(o.icon,{size:18,className:"stroke-[2.5]"})}),t.jsx("span",{className:"text-xl font-black font-mono tracking-tight text-[rgb(var(--sp-text))] bg-[rgb(var(--sp-dusk)/0.05)] px-3 py-1 rounded-xl group-hover:bg-[rgb(var(--sp-dusk))] group-hover:text-white transition-colors duration-300",children:o.metric})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx("h4",{className:"text-lg font-black text-[rgb(var(--sp-text))] tracking-tight leading-none group-hover:text-[rgb(var(--sp-accent-ink))] transition-all duration-300",children:o.title}),t.jsx("span",{className:"text-xs font-bold text-[rgb(var(--sp-muted))] mt-1 block",children:o.sub})]}),t.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[4px] bg-[rgb(var(--sp-dusk)/0.05)]",children:t.jsx("div",{style:{width:o.width,backgroundColor:o.color},className:"h-full rounded-r-full opacity-60 group-hover:opacity-100 transition-all duration-300 scale-x-[0.2] origin-left group-hover:scale-x-100"})})]},o.title))})]})]})]})},H=()=>{const e=l.useRef(null),i=l.useRef(null),p=l.useRef(null),x=l.useRef(null),m=l.useRef(null),h=l.useRef(null);l.useEffect(()=>{n.to(i.current,{x:"random(-50, 50)",y:"random(-50, 50)",scale:"random(0.9, 1.15)",duration:20,repeat:-1,yoyo:!0,ease:"sine.inOut"}),n.to(p.current,{x:"random(-40, 40)",y:"random(-40, 40)",scale:"random(0.85, 1.1)",duration:24,repeat:-1,yoyo:!0,ease:"sine.inOut"}),n.to(x.current,{x:"random(-30, 30)",y:"random(-30, 30)",duration:16,repeat:-1,yoyo:!0,ease:"sine.inOut"}),n.utils.toArray(".blob-diff-1").forEach(a=>{n.to(a,{x:"random(-45, 45)",y:"random(-35, 35)",scale:"random(0.95, 1.25)",duration:"random(10, 14)",repeat:-1,yoyo:!0,ease:"sine.inOut"})}),n.utils.toArray(".blob-diff-2").forEach(a=>{n.to(a,{x:"random(-35, 35)",y:"random(-45, 45)",scale:"random(0.9, 1.2)",duration:"random(12, 16)",repeat:-1,yoyo:!0,ease:"sine.inOut"})}),n.utils.toArray(".blob-diff-3").forEach(a=>{n.to(a,{x:"random(-25, 25)",y:"random(-25, 25)",scale:"random(0.95, 1.15)",duration:"random(8, 12)",repeat:-1,yoyo:!0,ease:"sine.inOut"})});const o=document.querySelector("#water-diffusion-filter feTurbulence");o&&n.to(o,{attr:{baseFrequency:.007},duration:20,repeat:-1,yoyo:!0,ease:"sine.inOut"})},[]);const s=o=>{const a=m.current,g=h.current;if(!a||!g)return;const y=a.getBoundingClientRect(),z=o.clientX-y.left-y.width/2,b=o.clientY-y.top-y.height/2;n.to(a,{rotationY:z*.02,rotationX:-b*.02,transformPerspective:1e3,duration:.4,ease:"power2.out"}),n.to(g,{scale:1.05,duration:.4,ease:"power2.out"})},c=()=>{const o=m.current,a=h.current;!o||!a||(n.to(o,{rotationY:0,rotationX:0,duration:.5,ease:"power2.out"}),n.to(a,{scale:1,duration:.5,ease:"power2.out"}))};return t.jsxs("section",{id:"about-story","data-section-title":"Our Story",ref:e,className:"origin-story py-24 md:py-36 bg-[rgb(var(--sp-surface))] text-[rgb(var(--sp-text))] relative overflow-hidden select-none border-t border-[rgb(var(--sp-border))]",children:[t.jsx("style",{children:`
        .text-outline-story {
          -webkit-text-stroke: 1.5px #17161A;
          color: transparent;
        }
        .flight-card-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2.5rem;
          padding: 1.5px;
          background: linear-gradient(135deg, transparent 30%, rgba(57, 255, 20, 0.4), transparent 70%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .flight-card-glow:hover::before {
          opacity: 1;
        }
      `}),t.jsx("svg",{style:{position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:0},"aria-hidden":"true",children:t.jsx("defs",{children:t.jsxs("filter",{id:"water-diffusion-filter",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[t.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.003",numOctaves:"4",result:"noise"}),t.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"45",xChannelSelector:"R",yChannelSelector:"G"})]})})}),t.jsx("div",{ref:i,className:"absolute top-[10%] left-[-15%] w-[550px] h-[550px] bg-gradient-to-tr from-[rgb(var(--sp-accent)/0.15)] via-[rgb(var(--sp-accent)/0.1)] to-transparent blur-[130px] rounded-full pointer-events-none"}),t.jsx("div",{ref:p,className:"absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-[rgb(var(--sp-accent)/0.15)] via-[rgb(var(--sp-accent)/0.12)] to-transparent blur-[120px] rounded-full pointer-events-none"}),t.jsx("div",{ref:x,className:"absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-[rgb(var(--sp-inset)/0.2)] blur-[100px] rounded-full pointer-events-none"}),t.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#142D25_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"}),t.jsx("div",{className:"absolute top-[35%] right-[-5%] text-[10rem] md:text-[15rem] font-semibold text-[rgb(var(--sp-muted))] tracking-tighter leading-none pointer-events-none select-none",children:"ORIGIN"}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[t.jsxs("div",{className:"origin-narrative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28",children:[t.jsx("div",{className:"lg:col-span-5 relative",children:t.jsxs(d.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},ref:m,onMouseMove:s,onMouseLeave:c,className:"relative rounded-[2.8rem] overflow-hidden bg-[rgb(var(--sp-inset))] border border-[rgb(var(--sp-border))] shadow-[0_30px_70px_-15px_rgba(23,22,26,0.15)] group transform-gpu cursor-crosshair",children:[t.jsx("img",{ref:h,src:"/about_story_banner.jpg",alt:"Young athletes training in community sporting environment",className:"w-full h-[450px] sm:h-[550px] object-cover select-none pointer-events-none transform-gpu transition-transform duration-300"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"}),t.jsxs("div",{className:"absolute bottom-6 left-6 right-6 p-6 rounded-[2rem] bg-[rgb(var(--sp-surface)/0.2)] backdrop-blur-[20px] border border-white/25 shadow-lg flex items-center gap-4 transition-all duration-300 hover:bg-[rgb(var(--sp-surface)/0.3)]",children:[t.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[rgb(var(--sp-dusk))] sp-inverse text-[rgb(var(--sp-accent-ink))] flex items-center justify-center font-bold shrink-0 shadow-sm animate-pulse",children:t.jsx(k,{size:20,className:"stroke-[2.5]"})}),t.jsxs("div",{children:[t.jsx("span",{className:"block text-xs font-semibold uppercase tracking-widest text-[rgb(var(--sp-accent-ink))]",children:"Our Root Origin"}),t.jsx("span",{className:"block text-sm font-semibold text-white",children:"Kreeda & Essentials"})]})]})]})}),t.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start",children:[t.jsxs(d.div,{initial:{opacity:0,y:-15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"inline-flex items-center gap-2.5 mb-5 text-[rgb(var(--sp-muted))] font-semibold text-xs uppercase tracking-[0.25em]",children:[t.jsx("span",{children:"["}),t.jsxs("span",{className:"relative flex h-2 w-2",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--sp-accent))] sp-accent-surface opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[rgb(var(--sp-accent))] sp-accent-surface"})]}),t.jsx("span",{children:"Our Story & Origin"}),t.jsx("span",{children:"]"})]}),t.jsxs(d.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},className:"text-4xl sm:text-6xl font-semibold text-[rgb(var(--sp-text))] tracking-tighter leading-[0.98] uppercase mb-8",children:[t.jsx("span",{className:"text-outline-story",children:"Sport Can"})," ",t.jsx("br",{}),t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))] bg-[length:200%_auto] animate-gradient-flow drop-shadow-sm",children:"Begin Anywhere."})]}),t.jsx(d.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"text-lg md:text-xl font-semibold text-[rgb(var(--sp-text))] mb-8 border-l-4 border-l-[rgb(var(--sp-accent))] pl-6 leading-relaxed",children:"A neighbourhood game. A first coaching session. A school team. A community court. A personal goal. A competitive ambition. The quality of that journey is shaped by everything around it."}),t.jsx(d.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.3},className:"text-base text-[rgb(var(--sp-muted))] font-semibold leading-relaxed",children:"Every session completed, skill developed, challenge faced, match played, result earned and milestone reached becomes part of a person’s sporting identity. Kreedentials brings these elements together through sports programmes, athlete performance, tournaments, rankings, apparel and partnerships."})]})]}),t.jsx("div",{className:"mb-28",children:t.jsx("div",{className:"origin-lexicon grid grid-cols-1 gap-8",children:[{title:"Kreeda",type:"Play & Movement",icon:Z,color:"#39FF14",imgSrc:"/who_we_are_kreate.jpg",desc:"The Sanskrit word associated with play, movement, and sport, representing the core urge to begin."},{title:"Essentials",type:"Support Systems",icon:_,color:"#00FF99",imgSrc:"/who_we_are_kommit.jpg",desc:"The support (access, coaching, gear) that helps raw participation grow into a lasting athletic journey."},{title:"Credentials",type:"Verified Identity",icon:C,color:"#00CC99",imgSrc:"/who_we_are_konquer.jpg",desc:"Every session logged, skill developed, and match played becomes a verified part of your sporting identity."}].map((o,a)=>t.jsxs(d.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:a*.1},className:"group relative rounded-[1.5rem] overflow-hidden border border-[rgb(var(--sp-border))] h-[480px] flex flex-col justify-between p-6 shadow-[0_20px_50px_rgba(23,22,26,0.1)] hover:scale-[1.03] transition-all duration-300 cursor-pointer flight-card-glow transform-gpu",children:[t.jsx("img",{src:o.imgSrc,alt:o.title,className:"absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-300 -z-10 pointer-events-none select-none"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25 -z-10 pointer-events-none"}),t.jsxs("div",{className:"flex items-center justify-between w-full relative z-10",children:[t.jsx("span",{className:"px-3.5 py-1.5 rounded-full bg-[rgb(var(--sp-surface)/0.1)] backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white",children:o.type}),t.jsx("div",{style:{color:"var(--sport-mint)"},className:"w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300",children:t.jsx(o.icon,{size:16,className:"stroke-[2.5]"})})]}),t.jsxs("div",{className:"relative z-10 mt-auto",children:[t.jsx("h3",{className:"text-3xl font-semibold text-white tracking-tight leading-none mb-1",children:o.title}),t.jsx("span",{className:"text-xs font-semibold uppercase tracking-widest text-[rgb(var(--sp-accent-ink))] block mb-4",children:"Kreedentials Core"}),t.jsx("p",{className:"text-xs text-white/80 leading-relaxed font-semibold mb-6",children:o.desc}),t.jsxs("button",{className:"w-full bg-[rgb(var(--sp-surface))] text-[rgb(var(--sp-text))] font-semibold text-xs normal-case tracking-normal py-3.5 rounded-full text-center hover:bg-[rgb(var(--sp-accent))] hover:text-[rgb(var(--sp-text))] transition-all duration-300 shadow-md",children:["Explore ",o.title]})]})]},o.title))})}),t.jsxs("div",{className:"mb-28",children:[t.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[rgb(var(--sp-border))]",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgb(var(--sp-dusk))] sp-inverse text-white text-xs font-semibold uppercase tracking-wider mb-2",children:[t.jsx(A,{size:12,className:"text-[rgb(var(--sp-accent-ink))]"}),t.jsx("span",{children:"Our Framework"})]}),t.jsx("h3",{className:"text-2xl font-semibold text-[rgb(var(--sp-text))] tracking-tight",children:"Our Philosophy Gives Direction"})]}),t.jsx("p",{className:"text-xs font-bold text-[rgb(var(--sp-muted))] max-w-xs leading-relaxed md:text-right",children:"Three essential phases that turn athletic interest into progress and competitive progress into recognition."})]}),t.jsx("div",{className:"origin-philosophy grid grid-cols-1 lg:grid-cols-3 gap-8",children:[{step:"Step 01",title:"KREATE",desc:"Create the environment and confidence to begin.",badge:"Opportunity",color:"#39FF14",color2:"#00FF99",color3:"#00CC99"},{step:"Step 02",title:"KOMMIT",desc:"Build through consistent participation, training and effort.",badge:"Consistency",color:"#00FF99",color2:"#00CC99",color3:"#009999"},{step:"Step 03",title:"KONQUER",desc:"Compete, learn, progress and pursue what comes next.",badge:"Recognition",color:"#00CC99",color2:"#009999",color3:"#39FF14"}].map((o,a)=>t.jsxs(d.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:a*.1},className:"relative rounded-[1.5rem] bg-[rgb(var(--sp-dusk))] sp-inverse border border-white/10 p-7 flex flex-col justify-between h-[360px] shadow-[0_25px_60px_-15px_rgba(23,22,26,0.45)] hover:scale-[1.03] transition-all duration-300 cursor-pointer group overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[rgb(var(--sp-dusk))] sp-inverse",style:{filter:"url(#water-diffusion-filter)"},children:[t.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[220px] h-[220px] rounded-full blur-[30px] blob-diff-1 transition-opacity duration-300 opacity-40 group-hover:opacity-65",style:{backgroundColor:"var(--sport-violet)"}}),t.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[220px] h-[220px] rounded-full blur-[30px] blob-diff-2 transition-opacity duration-300 opacity-30 group-hover:opacity-50",style:{backgroundColor:"var(--sport-mint)"}}),t.jsx("div",{className:"absolute top-[25%] left-[25%] w-[160px] h-[160px] rounded-full blur-[25px] blob-diff-3 transition-opacity duration-300 opacity-20 group-hover:opacity-35",style:{backgroundColor:"var(--sport-coral)"}})]}),t.jsxs("div",{className:"relative z-10 w-full h-full flex flex-col justify-between text-left",children:[t.jsxs("div",{className:"flex items-center justify-between w-full",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[rgb(var(--sp-surface)/0.1)] text-white flex items-center justify-center shadow-inner",children:t.jsx(w,{size:16,className:"text-white fill-white/10 group-hover:scale-110 transition-transform"})}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-white/80",children:o.step}),t.jsx("div",{className:"w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-[rgb(var(--sp-surface))] hover:text-black hover:border-transparent transition-colors duration-300",children:t.jsx(O,{size:14,className:"stroke-[2.5]"})})]})]}),t.jsx("div",{className:"my-4",children:t.jsxs("span",{style:{color:"var(--sport-mint)"},className:"text-4.5xl sm:text-5xl font-semibold font-mono tracking-tight flex items-start gap-0.5 leading-none select-none",children:[o.title,t.jsx("span",{className:"text-2xl font-bold opacity-85 select-none relative -top-1",children:"↗"})]})}),t.jsxs("div",{className:"mt-auto",children:[t.jsxs("h4",{className:"text-[15px] font-semibold text-white leading-snug mb-1",children:[o.badge," Stage"]}),t.jsx("p",{className:"text-xs text-white/60 leading-relaxed font-semibold mb-6",children:o.desc}),t.jsx("div",{className:"flex gap-1.5 w-full items-center",children:[0,1,2,3,4].map(g=>t.jsx("div",{style:{backgroundColor:g===a?"var(--sport-mint)":"rgba(255,255,255,0.15)"},className:"h-[3px] flex-grow rounded-full transition-all duration-300"},g))})]})]})]},o.title))})]}),t.jsxs(d.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"bg-[rgb(var(--sp-dusk))] sp-inverse text-white border border-white/5 p-8 md:p-12 rounded-[2.8rem] shadow-[0_25px_60px_-15px_rgba(23,22,26,0.4)] relative overflow-hidden group/quote w-full",children:[t.jsx("div",{className:"absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-bl from-[rgb(var(--sp-accent)/0.15)] via-[rgb(var(--sp-accent)/0.08)] to-transparent blur-[80px] rounded-full pointer-events-none"}),t.jsx("div",{className:"absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[rgb(var(--sp-accent)/0.15)] to-transparent blur-[70px] rounded-full pointer-events-none animate-pulse"}),t.jsx(T,{size:180,className:"absolute right-6 top-[-30px] opacity-[0.02] text-white group-hover/quote:rotate-12 transition-transform duration-300 pointer-events-none"}),t.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8 justify-between",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx(T,{className:"text-[rgb(var(--sp-accent-ink))] mb-4.5 mx-auto md:mx-0 fill-[rgb(var(--sp-accent))] opacity-80",size:32}),t.jsx("p",{className:"text-white text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed mb-6 italic",children:'"Sport can create health, confidence, friendships, discipline, achievement, resilience and ambition. Kreedentials exists to help more of those journeys take shape."'}),t.jsxs("div",{className:"flex items-center gap-3 justify-center md:justify-start",children:[t.jsx("div",{className:"w-10 h-10 rounded-2xl bg-[rgb(var(--sp-surface)/0.05)] border border-white/10 text-[rgb(var(--sp-accent-ink))] flex items-center justify-center shadow-sm",children:t.jsx(w,{size:16,className:"fill-[rgb(var(--sp-accent))] animate-pulse"})}),t.jsxs("div",{children:[t.jsx("span",{className:"block text-xs font-semibold uppercase tracking-widest text-[rgb(var(--sp-accent-ink))]",children:"The Kreedentials Mantra"}),t.jsx("span",{className:"block text-xs text-white/50 font-bold uppercase tracking-wider",children:"Kreate • Kommit • Konquer"})]})]})]}),t.jsx("div",{className:"w-24 h-24 rounded-full border border-white/10 flex items-center justify-center text-[rgb(var(--sp-accent-ink))] hover:scale-115 transition-transform duration-300 bg-[rgb(var(--sp-surface)/0.05)] shadow-inner",children:t.jsx(F,{size:36,className:"animate-spin text-[rgb(var(--sp-accent-ink))]",style:{animationDuration:"6s"}})})]})]})]})]})},G=()=>{const e=l.useRef(null),i=l.useRef(null);return l.useEffect(()=>{n.to(i.current,{x:"random(-40, 40)",y:"random(-40, 40)",scale:"random(0.9, 1.15)",duration:18,repeat:-1,yoyo:!0,ease:"sine.inOut"})},[]),t.jsxs("section",{id:"about-mission","data-section-title":"Mission & Vision",ref:e,className:"py-24 md:py-32 bg-[rgb(var(--sp-surface))] text-[rgb(var(--sp-text))] relative overflow-hidden border-t border-[rgb(var(--sp-border))]",children:[t.jsx("div",{ref:i,className:"absolute top-1/3 left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-[rgb(var(--sp-accent)/0.25)] via-[#7FCDBB]/15 to-transparent blur-[120px] rounded-full pointer-events-none"}),t.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#142D25_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"}),t.jsx("div",{className:"absolute bottom-6 right-[-5%] text-[9rem] md:text-[13rem] font-semibold text-[rgb(var(--sp-muted))] tracking-tighter leading-none pointer-events-none select-none",children:"FUTURE"}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[t.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[rgb(var(--sp-border))]",children:[t.jsxs("div",{className:"max-w-xl text-left",children:[t.jsxs("span",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(var(--sp-dusk))] sp-inverse text-white text-xs font-semibold uppercase tracking-wider mb-3",children:[t.jsx(j,{size:11,className:"text-[rgb(var(--sp-accent-ink))] animate-pulse"}),t.jsx("span",{children:"Guiding Philosophy"})]}),t.jsxs("h2",{className:"text-3xl sm:text-5xl font-semibold text-[rgb(var(--sp-text))] tracking-tight leading-[1.1] normal-case",children:["Mission & Vision ",t.jsx("br",{}),t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))]",children:"For Youth Sport."})]})]}),t.jsx("p",{className:"text-sm font-semibold text-[rgb(var(--sp-muted))] max-w-xs leading-relaxed",children:"Unifying access, physical development, and digital credentials under a single long-term sporting roadmap."})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsxs(d.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"bg-[rgb(var(--sp-surface)/0.7)] backdrop-blur-[12px] border border-[rgb(var(--sp-border))] rounded-[1.5rem] p-8 md:p-12 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(23,22,26,0.04)] hover:bg-[rgb(var(--sp-surface))] transition-all duration-300 min-h-[420px] group",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-8",children:[t.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[rgb(var(--sp-dusk))] sp-inverse text-[rgb(var(--sp-accent-ink))] flex items-center justify-center font-bold shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300",children:t.jsx(F,{size:26,className:"stroke-[2.5]"})}),t.jsx("span",{className:"text-xs font-semibold font-mono text-[rgb(var(--sp-muted))] uppercase tracking-widest",children:"CORE MISSION"})]}),t.jsx("span",{className:"text-xs font-semibold uppercase tracking-widest text-[rgb(var(--sp-accent-ink))] mb-2.5 block",children:"01 / Purpose"}),t.jsx("h3",{className:"text-3xl sm:text-4.5xl font-semibold text-[rgb(var(--sp-text))] tracking-tight mb-4",children:"Our Mission"}),t.jsx("p",{className:"text-[rgb(var(--sp-muted))] text-base font-semibold leading-relaxed mb-8",children:"To build connected sporting environments that help people begin, continue and progress through sport."})]}),t.jsxs(S,{to:"/tournaments",className:"inline-flex items-center justify-between w-full p-4 rounded-2xl bg-[rgb(var(--sp-dusk))] sp-inverse text-white font-semibold text-xs normal-case tracking-normal hover:bg-[rgb(var(--sp-accent))] hover:text-[rgb(var(--sp-text))] transition-all duration-300 shadow-sm",children:[t.jsx("span",{children:"Explore Tournaments"}),t.jsx(E,{size:16,className:"stroke-[2.5]"})]})]}),t.jsxs(d.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},className:"bg-[rgb(var(--sp-dusk))] sp-inverse text-white border border-white/5 rounded-[1.5rem] p-8 md:p-12 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(23,22,26,0.35)] transition-all duration-300 min-h-[420px] group relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 w-[200px] h-[200px] bg-[rgb(var(--sp-accent)/0.1)] blur-[60px] rounded-full pointer-events-none"}),t.jsxs("div",{className:"relative z-10",children:[t.jsxs("div",{className:"flex items-center justify-between mb-8",children:[t.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[rgb(var(--sp-accent))] sp-accent-surface text-[rgb(var(--sp-text))] flex items-center justify-center font-bold shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300",children:t.jsx(w,{size:26,className:"stroke-[2.5] fill-[rgb(var(--sp-dusk))]"})}),t.jsx("span",{className:"text-xs font-semibold font-mono text-white/40 uppercase tracking-widest",children:"FUTURE VISION"})]}),t.jsx("span",{className:"text-xs font-semibold uppercase tracking-widest text-[rgb(var(--sp-accent-ink))] mb-2.5 block",children:"02 / Outlook"}),t.jsx("h3",{className:"text-3xl sm:text-4.5xl font-semibold text-white tracking-tight mb-4",children:"Our Vision"}),t.jsx("p",{className:"text-white/70 text-base font-semibold leading-relaxed mb-8",children:"A future where sport becomes a lasting part of more lives, and every sporting journey has room to grow."})]}),t.jsxs(S,{to:"/township",className:"inline-flex items-center justify-between w-full p-4 rounded-2xl bg-[rgb(var(--sp-surface)/0.1)] text-white font-semibold text-xs normal-case tracking-normal border border-white/15 hover:bg-[rgb(var(--sp-accent))] hover:text-[rgb(var(--sp-text))] hover:border-transparent transition-all duration-300 shadow-sm relative z-10",children:[t.jsx("span",{children:"Township Programs"}),t.jsx(E,{size:16,className:"stroke-[2.5]"})]})]})]})]})]})},u=[{title:"Play",subtitle:"Engagement & Enjoyment",desc:"We preserve the curiosity, energy and enjoyment that make people want to participate and return.",icon:t.jsx(k,{size:24,className:"stroke-[2.5]"}),color:"#39FF14",color2:"#00FF99"},{title:"Opportunity",subtitle:"Access & Infrastructure",desc:"We create more accessible ways to experience sport across communities, schools, academies and sporting spaces.",icon:t.jsx(Z,{size:24,className:"stroke-[2.5]"}),color:"#00FF99",color2:"#00CC99"},{title:"Commitment",subtitle:"Consistency & Effort",desc:"Progress grows through consistency, preparation and the willingness to keep showing up.",icon:t.jsx(_,{size:24,className:"stroke-[2.5]"}),color:"#00CC99",color2:"#009999"},{title:"Development",subtitle:"Skill & Progress",desc:"We support the growth of skill, movement, confidence, understanding and performance over time.",icon:t.jsx(F,{size:24,className:"stroke-[2.5]"}),color:"#009999",color2:"#006666"},{title:"Character",subtitle:"Ethics & Discipline",desc:"Sport strengthens courage, discipline, resilience, humility, teamwork and respect.",icon:t.jsx(C,{size:24,className:"stroke-[2.5]"}),color:"#006666",color2:"#39FF14"},{title:"Trust",subtitle:"Community & Transparency",desc:"We communicate clearly, deliver responsibly and build relationships that can grow over time.",icon:t.jsx(I,{size:24,className:"stroke-[2.5]"}),color:"#39FF14",color2:"#00CC99"}],X=Array.from({length:12}).map((e,i)=>({id:i,color:["#39FF14","#00FF99","#00CC99","#009999","#006666"][i%5]})),J=()=>{const[e,i]=l.useState(0),p=l.useRef(null),x=l.useRef(null),m=l.useRef(null),h=l.useRef(null);return l.useEffect(()=>{n.to(x.current,{x:"random(-40, 40)",y:"random(-40, 40)",scale:"random(0.9, 1.15)",duration:20,repeat:-1,yoyo:!0,ease:"sine.inOut"});const s=m.current;if(!s)return;const c=(a,g)=>{const y=h.current;if(!y)return;n.set(y,{left:a,top:g}),y.querySelectorAll(".splash-drop").forEach(b=>{n.set(b,{x:0,y:0,scale:"random(0.6, 1.4)",opacity:1}),n.to(b,{x:"random(-50, 50)",y:"random(-70, -20)",opacity:0,scale:.1,duration:"random(0.5, 0.8)",ease:"power2.out"})})},o=n.timeline({repeat:-1});return o.set(s,{left:"10%",top:"15%",scale:1,rotation:0}).to(s,{left:"75%",top:"15%",rotation:120,duration:1.1,ease:"power1.out"}).to(s,{left:"75%",top:"70%",rotation:240,duration:.7,ease:"power1.in",onComplete:()=>c("78%","75%")}).to(s,{scaleY:.75,scaleX:1.25,duration:.08,yoyo:!0,repeat:1}).to(s,{left:"42.5%",top:"15%",rotation:360,duration:1,ease:"power1.out"}).to(s,{left:"10%",top:"70%",rotation:480,duration:.7,ease:"power1.in",onComplete:()=>c("13%","75%")}).to(s,{scaleY:.75,scaleX:1.25,duration:.08,yoyo:!0,repeat:1}).to(s,{left:"10%",top:"15%",rotation:600,duration:1,ease:"power1.out"}),()=>{o.kill()}},[]),t.jsxs("section",{id:"about-values","data-section-title":"Core Values",ref:p,className:"py-24 md:py-36 bg-[rgb(var(--sp-surface))] text-[rgb(var(--sp-text))] relative overflow-hidden select-none border-t border-[rgb(var(--sp-border))]",children:[t.jsx("div",{ref:x,className:"absolute top-1/3 right-[-10%] w-[480px] h-[480px] bg-gradient-to-tr from-[rgb(var(--sp-inset)/0.25)] via-[#7FCDBB]/15 to-transparent blur-[120px] rounded-full pointer-events-none"}),t.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#142D25_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"}),t.jsx("div",{className:"absolute bottom-6 left-[-5%] text-[9rem] md:text-[13rem] font-semibold text-[rgb(var(--sp-muted))] tracking-tighter leading-none pointer-events-none select-none",children:"VALUES"}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[t.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-[rgb(var(--sp-border))]",children:[t.jsxs("div",{className:"max-w-xl text-left",children:[t.jsxs("span",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(var(--sp-dusk))] sp-inverse text-white text-xs font-semibold uppercase tracking-wider mb-3",children:[t.jsx(j,{size:11,className:"text-[rgb(var(--sp-accent-ink))] animate-pulse"}),t.jsx("span",{children:"Core Principles"})]}),t.jsxs("h2",{className:"text-3xl sm:text-5xl font-semibold text-[rgb(var(--sp-text))] tracking-tight leading-[1.1] normal-case",children:["The Values ",t.jsx("br",{}),t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))]",children:"That Drive Us Forward."})]})]}),t.jsx("p",{className:"text-sm font-semibold text-[rgb(var(--sp-muted))] max-w-xs leading-relaxed",children:"Guiding athletic ecosystems and local townships through shared execution, verification, and community building."})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",children:[t.jsx("div",{className:"lg:col-span-7 flex flex-col gap-2",children:u.map((s,c)=>t.jsxs("div",{onMouseEnter:()=>i(c),className:"cursor-pointer py-4.5 border-b border-[rgb(var(--sp-border))] flex items-center justify-between group transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsxs("span",{className:`font-mono text-base font-semibold transition-colors duration-300 ${e===c?"text-[rgb(var(--sp-accent-ink))]":"text-[rgb(var(--sp-muted))]"}`,children:["0",c+1]}),t.jsx("h3",{className:`text-3xl sm:text-4xl lg:text-[2.8rem] font-semibold normal-case tracking-tight transition-all duration-300 ${e===c?"text-[rgb(var(--sp-text))] translate-x-2":"text-[rgb(var(--sp-muted))] hover:text-[rgb(var(--sp-muted))]"}`,children:s.title})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:`text-xs font-semibold uppercase tracking-wider transition-all duration-300 hidden sm:inline ${e===c?"text-[rgb(var(--sp-accent-ink))] opacity-100":"text-[rgb(var(--sp-muted))] opacity-0"}`,children:s.subtitle}),t.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${e===c?"bg-[rgb(var(--sp-dusk))] sp-inverse text-[rgb(var(--sp-accent-ink))] scale-110":"text-[rgb(var(--sp-muted))]"}`,children:t.jsx(N,{size:15,className:`stroke-[2.5] transition-transform duration-300 ${e===c?"rotate-0":"-rotate-45"}`})})]})]},s.title))}),t.jsx("div",{className:"lg:col-span-5 w-full",children:t.jsxs("div",{className:"relative rounded-[2.8rem] bg-gradient-to-br from-[rgb(var(--sp-dusk))] via-[rgb(var(--sp-dusk))] to-[rgb(var(--sp-dusk))] text-white p-8 md:p-10 h-[480px] flex flex-col justify-between overflow-hidden shadow-[0_30px_70px_-15px_rgba(23,22,26,0.45)] border border-white/5 transform-gpu hover:scale-[1.01] transition-transform duration-300",children:[t.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-0",viewBox:"0 0 400 400",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"200",cy:"200",r:"130",fill:"none",stroke:"white",strokeWidth:"1",strokeDasharray:"4 4"}),t.jsx("circle",{cx:"200",cy:"200",r:"60",fill:"none",stroke:"white",strokeWidth:"0.8"}),t.jsx("line",{x1:"40",y1:"200",x2:"360",y2:"200",stroke:"white",strokeWidth:"0.8"}),t.jsx("line",{x1:"200",y1:"40",x2:"200",y2:"360",stroke:"white",strokeWidth:"0.8"}),t.jsx("path",{d:"M 90 120 Q 200 320 310 120",fill:"none",stroke:"white",strokeWidth:"1"}),t.jsx("path",{d:"M 90 280 Q 200 80 310 280",fill:"none",stroke:"white",strokeWidth:"1",strokeDasharray:"3 3"})]}),t.jsx("div",{style:{backgroundColor:`${u[e].color}12`},className:"absolute inset-0 bg-radial-gradient from-transparent to-transparent opacity-80 z-0 transition-colors duration-300 blur-[80px]"}),t.jsxs("div",{className:"absolute inset-0 z-10 pointer-events-none",children:[t.jsx("div",{ref:m,className:"absolute w-14 h-14 transform -translate-x-1/2 -translate-y-1/2",children:t.jsx("svg",{viewBox:"2660 1975 305 305",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full overflow-visible drop-shadow-[0_4px_20px_rgba(57,255,20,0.6)]",children:t.jsxs("g",{className:"soccer1ball",children:[t.jsxs("g",{className:"bouncing-ball-facets",children:[t.jsx("polygon",{fill:"#39FF14",points:"2731.4,2053.3 2802.7,2098 2784.7,2026",opacity:"0.35"}),t.jsx("polygon",{fill:"#00FF99",points:"2764.7,2117.3 2802.7,2098 2798,2198.7",opacity:"0.25"}),t.jsx("polygon",{fill:"#00CC99",points:"2764.7,2117.3 2759.4,2176 2798,2198.7",opacity:"0.25"}),t.jsx("polygon",{fill:"#009999",points:"2852,2129.3 2802.7,2098 2868.7,2044.7",opacity:"0.35"}),t.jsx("polygon",{fill:"#006666",points:"2852,2129.3 2896.7,2094.7 2868.7,2044.7",opacity:"0.2"}),t.jsx("polygon",{fill:"#39FF14",points:"2812.7,2046 2868.7,2044.7 2878.7,2024.7",opacity:"0.2"}),t.jsx("polygon",{fill:"#00FF99",points:"2878.7,2024.7 2917.4,2046 2880.7,2013.3",opacity:"0.2"}),t.jsx("polygon",{fill:"#00CC99",points:"2920.7,2116 2939.4,2088 2917.4,2046",opacity:"0.35"}),t.jsx("polygon",{fill:"#009999",points:"2888.7,2198 2923.4,2170 2920.7,2116",opacity:"0.35"}),t.jsx("polygon",{fill:"#006666",points:"2892.7,2236.7 2934,2180.7 2888.7,2198",opacity:"0.35"}),t.jsx("polygon",{fill:"#39FF14",points:"2920.7,2116 2947.4,2137.3 2939.4,2088",opacity:"0.2"}),t.jsx("polygon",{fill:"#00FF99",points:"2798,2198.7 2804.7,2244 2867.4,2233.3",opacity:"0.35"}),t.jsx("polygon",{fill:"#00CC99",points:"2804.7,2244 2773.4,2252.7 2798,2198.7",opacity:"0.35"}),t.jsx("polygon",{fill:"#009999",points:"2773.4,2252.7 2718.7,2212.7 2759.4,2176",opacity:"0.35"}),t.jsx("polygon",{fill:"#006666",points:"2773.4,2252.7 2822,2262 2804.7,2244",opacity:"0.35"}),t.jsx("polygon",{fill:"#39FF14",points:"2822,2262 2865.4,2250.7 2804.7,2244",opacity:"0.35"}),t.jsx("polygon",{fill:"#00FF99",points:"2865.4,2250.7 2892.7,2236.7 2867.4,2233.3",opacity:"0.35"}),t.jsx("polygon",{fill:"#00CC99",points:"2718.7,2212.7 2737.4,2239.3 2773.4,2252.7",opacity:"0.35"}),t.jsx("polygon",{fill:"#009999",points:"2718.7,2212.7 2690,2184 2679.4,2126.7",opacity:"0.2"}),t.jsx("polygon",{fill:"#006666",points:"2694,2066 2731.4,2053.3 2720,2092",opacity:"0.2"}),t.jsx("polygon",{fill:"#39FF14",points:"2713.4,2037.3 2749.4,2007.3 2731.4,2053.3",opacity:"0.2"}),t.jsx("polygon",{fill:"#00FF99",points:"2696.7,2135.3 2718,2184 2759.4,2176",opacity:"0.2"}),t.jsx("polygon",{fill:"#00CC99",points:"2696.7,2135.3 2764.7,2117.3 2720,2092",opacity:"0.35"})]}),t.jsxs("g",{className:"bouncing-ball-lines soccer1ball-line",style:{fill:"none",stroke:"#39FF14",strokeLinejoin:"round",strokeWidth:"3px"},children:[t.jsx("polygon",{points:"2784.7 2026.01 2812.7 2046.01 2802.7 2098.01 2784.7 2026.01"}),t.jsx("polygon",{points:"2731.37 2053.34 2802.7 2098.01 2784.7 2026.01 2731.37 2053.34"}),t.jsx("polygon",{points:"2731.37 2053.34 2720.04 2092.01 2764.7 2117.34 2731.37 2053.34"}),t.jsx("polygon",{points:"2764.7 2117.34 2802.7 2098.01 2798.04 2198.68 2764.7 2117.34"}),t.jsx("polygon",{points:"2764.7 2117.34 2759.37 2176.01 2798.04 2198.68 2764.7 2117.34"}),t.jsx("polygon",{points:"2798.04 2198.68 2850.04 2170.68 2852.04 2129.34 2798.04 2198.68"}),t.jsx("polygon",{points:"2852.04 2129.34 2802.7 2098.01 2868.7 2044.68 2852.04 2129.34"}),t.jsx("polygon",{points:"2868.7 2044.68 2878.7 2024.68 2812.7 2046.01 2868.7 2044.68"}),t.jsx("polygon",{points:"2878.7 2024.68 2880.7 2013.34 2917.37 2046.01 2878.7 2024.68"}),t.jsx("polygon",{points:"2917.37 2046.01 2920.7 2116.01 2939.37 2088.01 2917.37 2046.01"}),t.jsx("polygon",{points:"2920.7 2116.01 2923.37 2170.01 2888.7 2198.01 2920.7 2116.01"}),t.jsx("polygon",{points:"2888.7 2198.01 2892.7 2236.68 2934.04 2180.68 2888.7 2198.01"}),t.jsx("polygon",{points:"2892.7 2236.68 2865.37 2250.68 2867.37 2233.34 2892.7 2236.68"}),t.jsx("polygon",{points:"2865.37 2250.68 2822.04 2262.01 2804.7 2244.01 2865.37 2250.68"}),t.jsx("polygon",{points:"2822.04 2262.01 2773.37 2252.68 2804.7 2244.01 2822.04 2262.01"}),t.jsx("polygon",{points:"2773.37 2252.68 2718.7 2212.68 2759.37 2176.01 2773.37 2252.68"}),t.jsx("polygon",{points:"2718.7 2212.68 2690.04 2184.01 2696.7 2135.34 2718.7 2212.68"}),t.jsx("polygon",{points:"2696.7 2135.34 2679.37 2126.68 2720.04 2092.01 2696.7 2135.34"}),t.jsx("polygon",{points:"2720.04 2092.01 2694.04 2066.01 2731.37 2053.34 2720.04 2092.01"}),t.jsx("polygon",{points:"2731.37 2053.34 2713.37 2037.34 2749.37 2007.34 2731.37 2053.34"}),t.jsx("polygon",{points:"2749.37 2007.34 2784.7 2026.01 2731.37 2053.34 2749.37 2007.34"})]})]})})}),t.jsx("div",{ref:h,className:"absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 z-10",children:X.map(s=>t.jsx("div",{style:{backgroundColor:s.color},className:"absolute w-2 h-2 rounded-full splash-drop opacity-0 pointer-events-none shadow-[0_2px_8px_rgba(255,255,255,0.2)] animate-pulse"},s.id))})]}),t.jsxs("div",{className:"relative z-10 flex flex-col justify-between h-full w-full text-left",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"px-4 py-1.5 rounded-full border border-white/10 bg-[rgb(var(--sp-surface)/0.05)] backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white",children:u[e].subtitle}),t.jsx("div",{style:{color:u[e].color,backgroundColor:`${u[e].color}15`},className:"w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center shadow-inner transition-colors duration-300",children:u[e].icon})]}),t.jsxs("div",{className:"my-8",children:[t.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-[rgb(var(--sp-accent-ink))] mb-3.5 block",children:"Core Philosophy"}),t.jsx(M,{mode:"wait",children:t.jsxs(d.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:-15},transition:{duration:.3},children:[t.jsx("h4",{className:"text-3xl font-semibold text-white normal-case tracking-tight leading-none mb-4",children:u[e].title}),t.jsx("p",{className:"text-white/80 text-sm md:text-base font-semibold leading-relaxed max-w-sm",children:u[e].desc})]},e)})]}),t.jsxs("div",{className:"flex items-center justify-between border-t border-white/10 pt-6",children:[t.jsxs("span",{className:"text-xs font-semibold font-mono text-white/40 uppercase tracking-wider",children:["Ledger: 0",e+1," / 06"]}),t.jsxs("div",{className:"flex items-center gap-1.5",children:[t.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-ping",style:{backgroundColor:u[e].color}}),t.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:u[e].color}})]})]})]})]})})]})]})]})},v=[{phase:"01",year:"2024",title:"Kreedentials Established",desc:"The company begins building an integrated sports ecosystem around participation, development, competition and apparel.",icon:t.jsx(Z,{size:24,className:"stroke-[2.5]"}),color:"#39FF14"},{phase:"02",year:"2024",title:"First Community Programme",desc:"Structured coaching is delivered within a residential community.",icon:t.jsx(I,{size:24,className:"stroke-[2.5]"}),color:"#00FF99"},{phase:"03",year:"2025",title:"Performance Apparel Launch",desc:"Kreedentials introduces apparel designed around movement, comfort and sporting identity.",icon:t.jsx(A,{size:24,className:"stroke-[2.5]"}),color:"#00CC99"},{phase:"04",year:"2025",title:"First Tournament Partnership",desc:"Competitive opportunities and athlete recognition become part of the ecosystem.",icon:t.jsx(_,{size:24,className:"stroke-[2.5]"}),color:"#009999"},{phase:"05",year:"2026",title:"Athlete Performance Introduced",desc:"Strength, mobility, speed, agility and conditioning are added to support sporting development.",icon:t.jsx(F,{size:24,className:"stroke-[2.5]"}),color:"#006666"},{phase:"06",year:"2026",title:"Growth Across Sports and Partnerships",desc:"Kreedentials expands through communities, academies, coaches, associations and sporting partners.",icon:t.jsx(U,{size:24,className:"stroke-[2.5]"}),color:"#39FF14"}],Q=()=>{const[e,i]=l.useState(0),[p,x]=l.useState({x:0,y:0}),[m,h]=l.useState(!1),[s,c]=l.useState(!1),o=l.useRef(null),a=l.useRef(null),g=l.useRef(null);l.useEffect(()=>{if(n.to(a.current,{x:"random(-50, 50)",y:"random(-50, 50)",scale:"random(0.85, 1.2)",duration:18,repeat:-1,yoyo:!0,ease:"sine.inOut"}),g.current){const r=g.current.children;for(let f=0;f<r.length;f++)n.to(r[f],{x:"random(-100, 100)",y:"random(-100, 100)",duration:"random(8, 15)",repeat:-1,yoyo:!0,ease:"sine.inOut",delay:f*.5})}},[]),l.useEffect(()=>{c(!0);const r=setTimeout(()=>c(!1),800);return()=>clearTimeout(r)},[e]);const y=r=>{if(o.current){const f=o.current.getBoundingClientRect();x({x:r.clientX-f.left,y:r.clientY-f.top})}},z=()=>{i(r=>r>0?r-1:v.length-1)},b=()=>{i(r=>r<v.length-1?r+1:0)};return t.jsxs("section",{id:"about-timeline","data-section-title":"Our Journey",ref:o,onMouseMove:y,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),className:"py-24 md:py-36 bg-[rgb(var(--sp-surface))] text-[rgb(var(--sp-text))] relative overflow-hidden border-t border-[rgb(var(--sp-border))] select-none",children:[t.jsx("style",{children:`
        .text-outline-timeline {
          -webkit-text-stroke: 1.5px #17161A;
          color: transparent;
        }
        /* Dashboard highlight shine sweep keyframes */
        @keyframes shine-sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .shine-sweep-active {
          animation: shine-sweep 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        /* Tactical playbook drawing loops */
        @keyframes draw-path {
          to { stroke-dashoffset: 0; }
        }
        .animate-playbook-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-path 12s linear infinite;
        }
      `}),t.jsx("div",{style:{left:`${p.x}px`,top:`${p.y}px`,opacity:m?.08:0,transition:"opacity 0.5s ease"},className:"absolute -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))] rounded-full blur-[100px] pointer-events-none z-0"}),t.jsx("div",{ref:a,className:"absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[rgb(var(--sp-accent)/0.2)] via-[rgb(var(--sp-accent)/0.15)] to-transparent blur-[130px] rounded-full pointer-events-none"}),t.jsxs("div",{ref:g,className:"absolute inset-0 pointer-events-none overflow-hidden z-0",children:[t.jsx("div",{className:"absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-[rgb(var(--sp-accent)/0.3)] blur-[1px]"}),t.jsx("div",{className:"absolute top-[45%] right-[12%] w-3.5 h-3.5 rounded-full bg-[rgb(var(--sp-accent)/0.2)] blur-[2px]"}),t.jsx("div",{className:"absolute bottom-[20%] left-[18%] w-2.5 h-2.5 rounded-full bg-[rgb(var(--sp-accent)/0.25)] blur-[1px]"}),t.jsx("div",{className:"absolute top-[70%] left-[75%] w-3 h-3 rounded-full bg-[rgb(var(--sp-accent)/0.2)] blur-[1.5px]"}),t.jsx("div",{className:"absolute bottom-[35%] right-[5%] w-2 h-2 rounded-full bg-[rgb(var(--sp-accent)/0.3)] blur-[0.5px]"})]}),t.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-0",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M-100,200 C300,100 500,600 800,300 C1100,50 1300,500 1700,250",fill:"none",stroke:"#17161A",strokeWidth:"2",strokeDasharray:"8 8",className:"animate-playbook-path",style:{animationDuration:"24s"}}),t.jsx("path",{d:"M200,800 C600,600 800,200 1200,600 C1500,900 1600,100 2000,400",fill:"none",stroke:"#17161A",strokeWidth:"1.5",strokeDasharray:"6 6",className:"animate-playbook-path",style:{animationDuration:"32s"}})]}),t.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#142D25_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none"}),t.jsx("div",{className:"absolute bottom-6 left-[-5%] text-[9rem] md:text-[13rem] font-semibold text-[rgb(var(--sp-muted))] tracking-tighter leading-none pointer-events-none select-none",children:"JOURNEY"}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[t.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-[rgb(var(--sp-border))]",children:[t.jsxs("div",{className:"max-w-xl text-left",children:[t.jsxs("span",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(var(--sp-dusk))] sp-inverse text-white text-xs font-semibold uppercase tracking-wider mb-3",children:[t.jsx(j,{size:11,className:"text-[rgb(var(--sp-accent-ink))] animate-pulse"}),t.jsx("span",{children:"Ecosystem Milestones"})]}),t.jsxs("h2",{className:"text-3xl sm:text-5xl font-semibold text-[rgb(var(--sp-text))] tracking-tight leading-[1.1] normal-case",children:["The Journey ",t.jsx("br",{}),t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))]",children:"So Far."})]})]}),t.jsx("p",{className:"text-sm font-semibold text-[rgb(var(--sp-muted))] max-w-xs leading-relaxed",children:"From establishing our initial support framework to nationwide community partnerships and athletic ledger milestones."})]}),t.jsxs("div",{className:"relative w-full h-28 mb-16 flex items-center",children:[t.jsx("div",{className:"absolute left-0 right-0 h-[2px] bg-[rgb(var(--sp-dusk)/0.1)] z-0"}),t.jsx("div",{style:{width:`${e/(v.length-1)*100}%`,transition:"width 0.5s cubic-bezier(0.25, 1, 0.5, 1)"},className:"absolute left-0 h-[2.5px] bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))] z-0"}),t.jsx("div",{className:"absolute inset-0 flex justify-between items-center px-2 sm:px-4",children:v.map((r,f)=>{const L=e===f;return t.jsxs("button",{onClick:()=>i(f),className:"relative z-10 flex flex-col items-center group focus:outline-none",children:[t.jsx(M,{children:L&&t.jsxs(d.div,{initial:{opacity:0,y:12,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:12,scale:.9},transition:{duration:.3},className:"absolute bottom-12 px-3.5 py-1.5 rounded-xl bg-[rgb(var(--sp-dusk))] sp-inverse text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap shadow-lg flex items-center gap-1.5 border border-white/5",children:[t.jsx("span",{style:{color:r.color},className:"animate-ping absolute left-2 w-1.5 h-1.5 rounded-full"}),t.jsx("span",{style:{color:r.color},className:"relative w-1.5 h-1.5 rounded-full"}),t.jsx("span",{className:"pl-1",children:r.title}),t.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-t-[rgb(var(--sp-border))] border-l-transparent border-r-transparent"})]})}),t.jsxs("div",{style:{borderColor:L?r.color:"rgba(23, 22, 26, 0.12)"},className:`w-8 h-8 rounded-full border-2 bg-[rgb(var(--sp-surface))] flex items-center justify-center shadow-sm relative transition-all duration-300 hover:scale-110 ${L?"scale-110 border-2":""}`,children:[L&&t.jsx("span",{style:{backgroundColor:r.color},className:"absolute inset-0 rounded-full animate-ping opacity-25 scale-125"}),t.jsx("div",{style:{backgroundColor:L?r.color:"rgba(23, 22, 26, 0.3)"},className:`rounded-full transition-all duration-300 ${L?"w-3 h-3":"w-2 h-2 group-hover:bg-[rgb(var(--sp-dusk))]"}`})]}),t.jsxs("span",{className:`text-xs font-semibold font-mono mt-2.5 transition-colors duration-300 ${L?"text-[rgb(var(--sp-text))]":"text-[rgb(var(--sp-muted))]"}`,children:["0",r.phase]})]},r.title)})})]}),t.jsxs("div",{className:"relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-[rgb(var(--sp-surface)/0.45)] backdrop-blur-md rounded-[1.5rem] p-8 md:p-12 border border-[rgb(var(--sp-border))] shadow-[0_20px_50px_rgba(23,22,26,0.03)] group",children:[t.jsx("div",{className:`absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none z-10 ${s?"shine-sweep-active":"left-[-100%]"}`}),t.jsxs("div",{className:"md:col-span-4 flex flex-col justify-between items-start h-full min-h-[160px] text-left",children:[t.jsx("div",{children:t.jsxs("h3",{className:"text-3.5xl sm:text-5xl font-semibold text-[rgb(var(--sp-text))] tracking-tighter leading-[0.95] normal-case",children:[t.jsx("span",{className:"text-outline-timeline",children:"OUR PATH"})," ",t.jsx("br",{}),t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))]",children:"HISTORY."})]})}),t.jsxs("div",{className:"flex items-center gap-3.5 mt-8",children:[t.jsx("button",{onClick:z,className:"w-11 h-11 rounded-full bg-[rgb(var(--sp-dusk))] sp-inverse text-white flex items-center justify-center hover:bg-[rgb(var(--sp-accent))] hover:text-[rgb(var(--sp-text))] transition-all duration-300 hover:scale-105","aria-label":"Previous step",children:t.jsx(P,{size:16,className:"stroke-[3]"})}),t.jsxs("span",{className:"text-xs font-semibold font-mono text-[rgb(var(--sp-text))] tracking-wider min-w-[50px] text-center",children:["0",e+1," / 06"]}),t.jsx("button",{onClick:b,className:"w-11 h-11 rounded-full bg-[rgb(var(--sp-dusk))] sp-inverse text-white flex items-center justify-center hover:bg-[rgb(var(--sp-accent))] hover:text-[rgb(var(--sp-text))] transition-all duration-300 hover:scale-105","aria-label":"Next step",children:t.jsx(N,{size:16,className:"stroke-[3]"})})]})]}),t.jsx("div",{className:"hidden md:flex md:col-span-2 justify-center items-center h-full border-l border-r border-[rgb(var(--sp-border))] min-h-[150px]",children:t.jsx("span",{className:"rotate-[-90deg] uppercase font-mono text-xs font-semibold text-[rgb(var(--sp-muted))] tracking-[0.25em] whitespace-nowrap select-none",children:"Kreedentials Ledger"})}),t.jsx("div",{className:"md:col-span-6 text-left flex flex-col justify-center h-full min-h-[180px]",children:t.jsx(M,{mode:"wait",children:t.jsxs(d.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:-15},transition:{duration:.3},children:[t.jsxs("span",{style:{color:v[e].color},className:"text-xs font-semibold font-mono tracking-widest uppercase block mb-1.5",children:["Phase 0",v[e].phase," // Established ",v[e].year]}),t.jsx("h4",{className:"text-2.5xl sm:text-3.5xl font-semibold text-[rgb(var(--sp-text))] tracking-tight leading-tight mb-4",children:v[e].title}),t.jsx("p",{className:"text-sm sm:text-base text-[rgb(var(--sp-muted))] font-semibold leading-relaxed mb-6 max-w-xl",children:v[e].desc}),t.jsxs("div",{className:"inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--sp-text))] hover:text-[rgb(var(--sp-accent-ink))] cursor-pointer group",children:[t.jsx("span",{className:"border-b-2 border-transparent group-hover:border-[rgb(var(--sp-accent))] transition-all",children:"Explore Ecosystem Program"}),t.jsx(N,{size:13,className:"group-hover:translate-x-1 transition-transform stroke-[2.5]"})]})]},e)})})]})]})]})},t1=`<svg xmlns="http://www.w3.org/2000/svg" opacity="0" xmlns:xlink="http://www.w3.org/1999/xlink" id="soccer1" x="0px" y="0px" enable-background="new 0 0 2948.4 2312.3" version="1.1" viewBox="0 0 2948.4 2312.3" xml:space="preserve">
		<title>
			soccer-1
		</title>
		<g class="soccer1ball">
			<g>
				<polygon fill="#00FF99" points="2731.4,2053.3 2802.7,2098 2784.7,2026" opacity="0.4" />
				<polygon fill="#00FF99" points="2764.7,2117.3 2802.7,2098 2798,2198.7" opacity="0.2" />
				<polygon fill="#00FF99" points="2764.7,2117.3 2759.4,2176 2798,2198.7" opacity="0.2" />
				<polygon fill="#00FF99" points="2852,2129.3 2802.7,2098 2868.7,2044.7" opacity="0.4" />
				<polygon fill="#00FF99" points="2852,2129.3 2896.7,2094.7 2868.7,2044.7" opacity="0.2" />
				<polygon fill="#00FF99" points="2812.7,2046 2868.7,2044.7 2878.7,2024.7" opacity="0.2" />
				<polygon fill="#00FF99" points="2878.7,2024.7 2917.4,2046 2880.7,2013.3" opacity="0.2" />
				<polygon fill="#00FF99" points="2920.7,2116 2939.4,2088 2917.4,2046" opacity="0.4" />
				<polygon fill="#00FF99" points="2888.7,2198 2923.4,2170 2920.7,2116" opacity="0.4" />
				<polygon fill="#00FF99" points="2892.7,2236.7 2934,2180.7 2888.7,2198" opacity="0.4" />
				<polygon fill="#00FF99" points="2920.7,2116 2947.4,2137.3 2939.4,2088" opacity="0.2" />
				<polygon fill="#00FF99" points="2798,2198.7 2804.7,2244 2867.4,2233.3" opacity="0.4" />
				<polygon fill="#00FF99" points="2804.7,2244 2773.4,2252.7 2798,2198.7" opacity="0.4" />
				<polygon fill="#00FF99" points="2773.4,2252.7 2718.7,2212.7 2759.4,2176" opacity="0.4" />
				<polygon fill="#00FF99" points="2773.4,2252.7 2822,2262 2804.7,2244" opacity="0.4" />
				<polygon fill="#00FF99" points="2822,2262 2865.4,2250.7 2804.7,2244" opacity="0.4" />
				<polygon fill="#00FF99" points="2865.4,2250.7 2892.7,2236.7 2867.4,2233.3" opacity="0.4" />
				<polygon fill="#00FF99" points="2718.7,2212.7 2737.4,2239.3 2773.4,2252.7" opacity="0.4" />
				<polygon fill="#00FF99" points="2718.7,2212.7 2690,2184 2679.4,2126.7" opacity="0.2" />
				<polygon fill="#00FF99" points="2694,2066 2731.4,2053.3 2720,2092" opacity="0.2" />
				<polygon fill="#00FF99" points="2713.4,2037.3 2749.4,2007.3 2731.4,2053.3" opacity="0.2" />
				<polygon fill="#00FF99" points="2696.7,2135.3 2718,2184 2759.4,2176" opacity="0.2" />
				<polygon fill="#00FF99" points="2696.7,2135.3 2764.7,2117.3 2720,2092" opacity="0.4" />
			</g>
			<g class="soccer1ball-line" style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px">
				<polygon points="2784.7 2026.01 2812.7 2046.01 2802.7 2098.01 2784.7 2026.01" />
				<polygon points="2731.37 2053.34 2802.7 2098.01 2784.7 2026.01 2731.37 2053.34" />
				<polygon points="2731.37 2053.34 2720.04 2092.01 2764.7 2117.34 2731.37 2053.34" />
				<polygon points="2764.7 2117.34 2802.7 2098.01 2798.04 2198.68 2764.7 2117.34" />
				<polygon points="2764.7 2117.34 2759.37 2176.01 2798.04 2198.68 2764.7 2117.34" />
				<polygon points="2798.04 2198.68 2850.04 2170.68 2852.04 2129.34 2798.04 2198.68" />
				<polygon points="2852.04 2129.34 2802.7 2098.01 2868.7 2044.68 2852.04 2129.34" />
				<polygon points="2852.04 2129.34 2896.7 2094.68 2868.7 2044.68 2852.04 2129.34" />
				<polygon points="2812.7 2046.01 2868.7 2044.68 2878.7 2024.68 2812.7 2046.01" />
				<polygon points="2784.7 2026.01 2796.7 1999.34 2812.7 2046.01 2784.7 2026.01" />
				<polygon points="2796.7 1999.34 2832.7 1996.01 2794.7 1995.34 2796.7 1999.34" />
				<polygon points="2832.7 1996.01 2878.7 2024.68 2880.7 2013.34 2832.7 1996.01" />
				<polygon points="2878.7 2024.68 2917.37 2046.01 2880.7 2013.34 2878.7 2024.68" />
				<polygon points="2917.37 2046.01 2896.7 2094.68 2920.7 2116.01 2917.37 2046.01" />
				<polygon points="2920.7 2116.01 2939.37 2088.01 2917.37 2046.01 2920.7 2116.01" />
				<polygon points="2852.04 2129.34 2888.7 2198.01 2850.04 2170.68 2852.04 2129.34" />
				<polygon points="2888.7 2198.01 2923.37 2170.01 2920.7 2116.01 2888.7 2198.01" />
				<polygon points="2888.7 2198.01 2867.37 2233.34 2892.7 2236.68 2888.7 2198.01" />
				<polygon points="2892.7 2236.68 2934.04 2180.68 2888.7 2198.01 2892.7 2236.68" />
				<polygon points="2923.37 2170.01 2934.04 2180.68 2947.37 2137.34 2923.37 2170.01" />
				<polygon points="2920.7 2116.01 2947.37 2137.34 2939.37 2088.01 2920.7 2116.01" />
				<polygon points="2798.04 2198.68 2804.7 2244.01 2867.37 2233.34 2798.04 2198.68" />
				<polygon points="2804.7 2244.01 2773.37 2252.68 2798.04 2198.68 2804.7 2244.01" />
				<polygon points="2773.37 2252.68 2718.7 2212.68 2759.37 2176.01 2773.37 2252.68" />
				<polygon points="2718.7 2212.68 2718.04 2184.01 2759.37 2176.01 2718.7 2212.68" />
				<polygon points="2773.37 2252.68 2822.04 2262.01 2804.7 2244.01 2773.37 2252.68" />
				<polygon points="2822.04 2262.01 2865.37 2250.68 2804.7 2244.01 2822.04 2262.01" />
				<polygon points="2865.37 2250.68 2892.7 2236.68 2867.37 2233.34 2865.37 2250.68" />
				<polygon points="2718.7 2212.68 2737.37 2239.34 2773.37 2252.68 2718.7 2212.68" />
				<polygon points="2718.7 2212.68 2690.04 2184.01 2679.37 2126.68 2718.7 2212.68" />
				<polygon points="2679.37 2126.68 2696.7 2135.34 2720.04 2092.01 2679.37 2126.68" />
				<polygon points="2679.37 2126.68 2694.04 2066.01 2720.04 2092.01 2679.37 2126.68" />
				<polygon points="2694.04 2066.01 2731.37 2053.34 2720.04 2092.01 2694.04 2066.01" />
				<polygon points="2694.04 2066.01 2713.37 2037.34 2731.37 2053.34 2694.04 2066.01" />
				<polygon points="2713.37 2037.34 2749.37 2007.34 2731.37 2053.34 2713.37 2037.34" />
				<polygon points="2749.37 2007.34 2784.7 2026.01 2794.7 1995.34 2749.37 2007.34" />
				<polygon points="2696.7 2135.34 2718.04 2184.01 2759.37 2176.01 2696.7 2135.34" />
				<polygon points="2696.7 2135.34 2764.7 2117.34 2720.04 2092.01 2696.7 2135.34" />
			</g>
		</g>
		<g class="soccer1_fill" data-name="FILL">
			<polygon fill="#00FF99" points="1859.2,936.7 1731.5,1087.9 1862.1,809.9 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1732.2,1089.9 1859.4,934.2 1781,750 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1771.9,816.2 1743.4,774.5 1810.6,726.6 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1736.3,906.8 1609.7,1049 1738.3,786.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1643.7,979.3 1646.1,868 1759.1,819.1 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1602.6,862.6 1628.7,811.5 1678.7,784.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1678.7,784.3 1643.9,920.2 1755.9,752.8 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1678.7,784.3 1751.5,732.2 1813.5,764.8 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1688.5,795.2 1668.9,757.2 1539.6,758.2 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1625.4,864.8 1563.5,846.3 1628.7,811.5 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1773.3,733.2 1807,662.6 1835.2,770.2 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1785.2,699.5 1800.4,576.7 1850.4,515.9 	" opacity="0.5" />
			<polygon fill="#00FF99" points="1800.4,576.7 1886.3,673.5 1942.8,585.4 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1828.5,583.5 1850.4,515.9 1942.8,585.4 	" opacity="0.5" />
			<polygon fill="#00FF99" points="1856.4,518.3 1944.4,598.8 2052.4,607.3 	" opacity="0.5" />
			<polygon fill="#00FF99" points="1850.4,515.9 2055.8,607.2 1955.8,502.8 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1850.4,515.9 1904.8,492 1966.7,514.8 	" opacity="0.5" />
			<polygon fill="#00FF99" points="1926.5,531.1 1942.8,585.4 2033,628.9 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2033,628.9 2055.8,607.2 1967.8,535.4 	" opacity="0.3" />
			<polyline fill="#00FF99" points="1593.7,1208.7 1537,1263.7 1608.7,1050.5 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1803.3,1171.7 1843.8,1399.1 1853.9,1100.2 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1970.3,1256.8 1843.8,1399.1 1972.3,1136.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1970.3,1256.8 1843.8,1399.1 1976.7,1292.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1932.7,1377.3 1843.8,1399.1 1976.7,1292.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1970.3,1256.8 1851.3,1152 1972.3,1136.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1858.4,981 1728,954.7 1883.8,942.4 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1731.2,1089.9 1729.1,955.6 1801.4,845.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1729.1,953.6 1631.4,1024.8 1736.3,905.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1697.4,1034.3 1593.8,1208 1666.7,1020.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1697.4,1034.3 1729,954 1724.7,1043.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1537.4,1264 1492.7,1213.3 1470,1278.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1491,1261 1435.4,1221.3 1538,1206 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1565,1137.3 1493,1213.3 1534.4,1140 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1675.4,1128.7 1554,1110 1581.4,1082 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1803.3,1171.7 1696.7,1177.3 1853.9,1100.2 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1803.3,1171.7 1734.7,1381.3 1581.4,1349.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1628.7,1236 1842,1391.3 1781.4,1234 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1883.4,944 1854,1100.7 1951.4,1008.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1979.4,1100.7 1899.4,1091.3 1956,1048 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1838.3,1519.1 1711.3,1413 1840.3,1399.1 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1838.3,1519.1 1711.3,1413 1548.7,1538.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1472.7,1538.7 1584,1428.7 1548.7,1538.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1681.4,1382 1584,1428.7 1548.7,1538.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1589.4,1641.3 1696.7,1528.7 1530,1580.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1696.7,1527.3 1581.9,1428.3 1711,1414.4 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1640.7,1668 1830,1561.3 1590,1642 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1838,1520 1910.7,1522.7 1938.4,1431.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1865.5,1429.5 1938.2,1432.2 1857.4,1471.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2058.9,1580.8 1908.4,1522.8 1857.4,1639.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1996.4,1533.8 1974.9,1507.8 1903.4,1564.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1880.4,1633.3 2198.4,1737.8 2038.9,1586.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2058.9,1580.8 2158.4,1661.3 2030.9,1663.8 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2158.4,1661.3 2220.4,1719.8 2114.9,1845.8 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1766.4,1639.3 1854.9,1721.3 1831.5,1561.5 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1865.4,1681.8 2115.9,1845.3 1903.4,1564.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2115.9,1845.3 2251.9,1814.3 2239.9,1756.8 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2220.4,1719.8 2239.9,1756.8 2108.9,1789.3 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2115.9,1845.3 2140.9,1976.8 2176.9,1905.3 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2140.9,1976.8 2232.9,2090.8 2176.9,1905.3 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2251.9,1814.3 2177.4,2020.8 2346.4,2033.8 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2346.4,2033.8 2380.9,2092.8 2177.4,2020.8 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1435.4,1221.3 1416.7,1258 1417.4,1274 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1417.4,1277.3 1428.4,1294.8 1461.4,1239.8 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1428.4,1294.8 1435.4,1301.3 1478.4,1252.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1435.4,1301.3 1446.4,1316.3 1470,1278.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1472.7,1538.7 1429.2,1789.2 1530.7,1732.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1472.7,1538.7 1380.7,1679.3 1556.7,1652 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1278,1550.7 1248.7,1626.7 1319.4,1707.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1363.4,1504 1122,1356.7 1278,1550.7 	" opacity="0.1" />
			<polygon fill="#00FF99" points="1122,1356.7 1066,1378 1286,1502 	" opacity="0.1" />
			<polygon fill="#00FF99" points="1087.4,1468 1100,1430 1256.7,1600 	" opacity="0.1" />
			<polygon fill="#00FF99" points="1117.4,1491.3 1248.7,1626.7 1278,1550.7 	" opacity="0.1" />
			<polygon fill="#00FF99" points="1165.4,1370 1150,1304 1038,1302 	" opacity="0.3" />
			<polygon fill="#00FF99" points="830.7,1352.7 860.7,1388 952.7,1298 	" opacity="0.3" />
			<polygon fill="#00FF99" points="896.7,1352.7 1066,1378 969.4,1318 	" opacity="0.1" />
			<polygon fill="#00FF99" points="1038,1302 1066,1378 969.4,1318 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1054.7,1383.3 983.4,1391.3 1030.7,1462 	" opacity="0.3" />
			<polygon fill="#00FF99" points="907.4,1404.7 999.4,1417.3 896.7,1352.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2425.4,2148.7 2472,2159.3 2439.4,2204 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2431.4,2243.3 2439.4,2204 2496,2226.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2496,2226.7 2539.4,2204 2472,2159.3 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2539.4,2204 2600,2149.3 2533.4,2146 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2600,2149.3 2607.4,2158 2571.4,2220 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2424.7,2270 2444.7,2282 2450,2251.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2444.7,2282 2464,2262.7 2450,2251.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2455.7,2248.3 2470.4,2243.7 2483.4,2256.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2430.7,2290 2444.7,2302 2456,2279.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2444.7,2302 2461,2292.3 2456,2279.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2411.7,2297.3 2428,2311.3 2424.4,2289.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2428,2311.3 2434,2304 2424.4,2289.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2492.4,2269.3 2513.4,2279 2506,2261.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2511.7,2261.7 2526,2271.3 2532.7,2251.7 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2526,2271.3 2537,2265 2532.7,2251.7 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2518,2233 2532,2238.3 2542.7,2216.3 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2529.7,2236 2543.7,2229.3 2535,2221 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2541,2246 2551.4,2253 2560.4,2242.3 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2541,2246 2560.4,2242.3 2558.4,2229.7 	" opacity="0.2" />
			<polygon fill="#00FF99" points="1649.4,927.8 1610.2,901.7 1602.6,862.6 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1539.6,758.2 1514.6,786.5 1563.5,846.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="1539.6,758.2 1521.1,722.4 1464.6,734.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2232.9,2090.8 2349.6,2198.7 2392.2,2183.4 
            2425.4,2148.7 	" opacity="0.2" />
			<polygon fill="#00FF99" points="2380.9,2092.8 2425.4,2148.7 2343.4,2165.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2399.4,2300 2343.4,2311.3 2431.4,2243.3 	" opacity="0.3" />
			<polygon fill="#00FF99" points="2343.4,2311.3 2303.4,2265.3 2348.7,2236.7 	" opacity="0.3" />

		</g>
		<g class="soccer1_extra-line" data-name="Extra Line">
			<polyline fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" points="753,1032.3 1,406 832.1,1366.1 
            1132.1,1348.1 795.2,1067.5 	" />
			<line x1="998.3" x2="1159.1" y1="683.3" y2="1378.1" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<line x1="1001.2" x2="987.1" y1="859.6" y2="677.3" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<line x1="1036.1" x2="1004.8" y1="1309.1" y2="905.1" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<line x1="587" x2="759.1" y1="788" y2="1028" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<polyline fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" points="790,1071.2 952.1,1297.1 103,928.1 
            199,247 545.3,730 	" />
			<line x1="541.5" x2="103" y1="771" y2="928.1" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<line x1="924.5" x2="614.5" y1="633.7" y2="744.8" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<polyline fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" points="1573.2,1426.1 1033.1,1261.1 595.1,337 
            915.8,565.8 	" />
			<line x1="892.3" x2="1" y1="594.1" y2="406" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<polyline fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" points="1239.4,1164.8 205,1339.1 942.5,650 	" />
			<line x1="1558.2" x2="1308" y1="1111.1" y2="1153.3" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<line x1="982.6" x2="605.6" y1="875.9" y2="771.3" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<polyline fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" points="1312.8,844.7 1603.2,1048.1 1029.6,889 	
            " />
			<line x1="1033" x2="1264.2" y1="648.7" y2="810.7" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<line x1="982.1" x2="982.1" y1="538.7" y2="160" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<line x1="1253.9" x2="1013.3" y1="1129.9" y2="672.4" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<line x1="1468.2" x2="1288.8" y1="1537.2" y2="1196.1" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<polyline fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" points="1233.6,458.1 670.1,1 922.8,557.5 	" />
			<line x1="1286.7" x2="1260.7" y1="792.7" y2="505.7" fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" />
			<polyline fill="none" stroke="#00CC99" stroke-linejoin="round" stroke-width="2" points="973.9,670.2 1351.1,1501.2 1293.2,863.5 
                " />
			<g>
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="886.9,599.3 951.6,520.5 1004,549 
                1068,609.2 1002.6,684.3 950.9,659.5 888.3,597.6 		" />
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="2" points="889.3,598.6 940.8,627.7 1002,685.5 		
                " />
				<line x1="940.8" x2="1004" y1="627.7" y2="549" fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" />
			</g>
			<g>
				<polygon fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="1240,439.7 1226.8,472.2 1244.9,509 
                1288.4,502.9 1300.8,470 1282.9,434.6 		" />
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="1245.7,508 1259.2,474.5 1242,440.8 		
                " />
				<line x1="1260" x2="1300.8" y1="475.1" y2="470" fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="2" />
			</g>
			<g>
				<polygon fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="550.7,715.7 534.3,763 553.8,781.9 
                598.6,791.8 615.2,744.1 595.2,726.1 		" />
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="554.3,780.7 570.5,733.6 552.7,717.4 		
                " />
				<line x1="615.2" x2="570.5" y1="744.1" y2="733.6" fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" />
			</g>
			<g>
				<line x1="783.7" x2="767.3" y1="1075.3" y2="1037.9" fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="2" />
				<polygon fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="2" points="743.7,1039.1 762.6,1076.7 783.7,1075.3 
                816.3,1055 797.8,1018.2 776.1,1019 		" />
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="2" points="744.9,1039.7 767.3,1037.9 797.2,1018.6 
                        " />
			</g>
			<g>
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="2" points="991,856.1 978.8,888.6 991,902.4 
                1021.1,910.4 1034.3,878.2 1021,865.1 990.5,856.3 		" />
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="2" points="990.8,857.2 1003.8,870.2 1032.6,877.6 
                        " />
				<line x1="991" x2="1003.8" y1="902.4" y2="870.2" fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="2" />
			</g>
			<g>
				<polygon fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="1258.8,815.9 1264.2,844.1 1293.3,862.3 
                1321.1,839.5 1314.3,810.5 1286.4,793.4 		" />
				<line x1="1288.1" x2="1314.3" y1="833.9" y2="810.5" fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" />
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="1260,817.3 1288.1,833.9 1292.8,861.5 		
                " />
			</g>
			<g>
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="1261.1,1121.2 1297.5,1139.3 
                1311.8,1159.1 1288.8,1197.5 1249.8,1180.1 1236.3,1160.4 1261.1,1121.2 		" />
				<polyline fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" points="1249.8,1180.1 1274.6,1142.3 
                1261.1,1122.4 		" />
				<line x1="1310.5" x2="1275.1" y1="1159.1" y2="1142.5" fill="none" stroke="#00CC99" stroke-miterlimit="10" stroke-width="3" />
			</g>
		</g>
		<g class="soccer1_line" data-name="LINE" style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px">
			<polygon points="1803.31 1171.71 1843.78 1399.05 1853.86 1100.2 1803.31 1171.71" />
			<polygon points="1803.31 1171.71 1744.04 1076.01 1853.86 1100.2 1803.31 1171.71" />
			<polygon points="1803.31 1171.71 1931.65 1119.43 1853.86 1100.2 1803.31 1171.71" />
			<polygon points="1970.32 1256.81 1843.78 1399.05 1972.35 1136.73 1970.32 1256.81" />
			<polygon points="1970.32 1256.81 1843.78 1399.05 1976.7 1292.68 1970.32 1256.81" />
			<polygon points="1932.7 1377.34 1843.78 1399.05 1976.7 1292.68 1932.7 1377.34" />
			<polygon points="1970.32 1256.81 1851.26 1152 1972.35 1136.73 1970.32 1256.81" />
			<polygon points="1978.79 1100.61 1851.26 1152 1972.35 1136.73 1978.79 1100.61" />
			<polygon points="1859.15 936.74 1731.48 1087.93 1862.05 809.87 1859.15 936.74" />
			<polygon points="1732.2 1089.92 1859.4 934.23 1781.04 750.04 1732.2 1089.92" />
			<polygon points="1771.88 816.19 1743.39 774.46 1810.55 726.64 1771.88 816.19" />
			<polygon points="1858.38 981.04 1728.04 954.68 1883.82 942.37 1858.38 981.04" />
			<polygon points="1822.76 1027.85 1764.76 1049.22 1859.37 980.68 1822.76 1027.85" />
			<polygon points="1736.27 906.75 1609.73 1049 1738.3 786.68 1736.27 906.75" />
			<polygon points="1731.18 1089.92 1729.14 955.6 1801.39 845.7 1731.18 1089.92" />
			<polygon points="1729.14 953.56 1631.45 1024.79 1736.27 905.74 1729.14 953.56" />
			<polygon points="1581.59 1082.8 1730.87 1090.34 1607.03 1054.3 1581.59 1082.8" />
			<polygon points="1593.71 1208.68 1537.01 1263.74 1608.7 1050.5 1593.71 1208.68" />
			<polygon points="1593.71 1208.68 1537.01 1263.74 1608.7 1050.5 1593.71 1208.68" />
			<polygon points="1730.16 1073.64 1592.79 1208.98 1724.37 1043.34 1730.16 1073.64" />
			<polygon points="1697.37 1034.34 1593.8 1207.96 1724.71 1043.34 1697.37 1034.34" />
			<polygon points="1697.37 1034.34 1593.8 1207.96 1724.71 1043.34 1697.37 1034.34" />
			<polygon points="1697.37 1034.34 1593.8 1207.96 1666.71 1020.34 1697.37 1034.34" />
			<polygon points="1697.37 1034.34 1729.04 954.01 1724.71 1043.34 1697.37 1034.34" />
			<polygon points="1666.37 1020.68 1608.37 1053.68 1643.71 979.34 1666.37 1020.68" />
			<polygon points="1537.37 1264.01 1492.71 1213.34 1470.04 1278.68 1537.37 1264.01" />
			<polygon points="1491.04 1261.01 1435.37 1221.34 1538.04 1206.01 1491.04 1261.01" />
			<polygon points="1491.04 1261.01 1537.37 1207.34 1537.37 1274.68 1491.04 1261.01" />
			<polygon points="1537.37 1208.68 1594.04 1206.01 1554.71 1110.01 1537.37 1208.68" />
			<polygon points="1565.04 1137.34 1493.04 1213.34 1534.37 1140.01 1565.04 1137.34" />
			<polygon points="1565.04 1137.34 1554.71 1109.68 1534.37 1140.01 1565.04 1137.34" />
			<polygon points="1675.37 1128.68 1554.04 1110.01 1581.37 1082.01 1675.37 1128.68" />
			<polygon points="1803.31 1171.71 1696.71 1177.34 1853.86 1100.2 1803.31 1171.71" />
			<polygon points="1803.31 1171.71 1696.71 1177.34 1581.37 1349.34 1803.31 1171.71" />
			<polygon points="1803.31 1171.71 1734.71 1381.34 1581.37 1349.34 1803.31 1171.71" />
			<polygon points="1638.71 1331.34 1578.04 1417.34 1581.37 1349.34 1638.71 1331.34" />
			<polygon points="1589.37 1367.34 1578.04 1417.34 1618.71 1388.68 1589.37 1367.34" />
			<polygon points="1589.37 1367.34 1718.71 1378.68 1618.71 1388.68 1589.37 1367.34" />
			<polygon points="1589.37 1367.34 1718.71 1378.68 1690.04 1294.01 1589.37 1367.34" />
			<polygon points="1673.37 1127.34 1662.04 1177.34 1728.04 1141.34 1673.37 1127.34" />
			<polygon points="1628.04 1236.68 1696.71 1176.68 1690.04 1295.34 1628.04 1236.68" />
			<polygon points="1628.71 1236.01 1842.04 1391.34 1781.37 1234.01 1628.71 1236.01" />
			<polygon points="1769.37 1417.34 1718.71 1378.68 1836.04 1395.34 1769.37 1417.34" />
			<polygon points="1883.37 944.01 1854.04 1100.68 1954.55 1004.99 1883.37 944.01" />
			<polygon points="1742.32 1081.81 1615.78 1224.05 1748.71 1117.68 1742.32 1081.81" />
			<polygon points="1979.37 1100.68 1899.37 1091.34 1956.04 1048.01 1979.37 1100.68" />
			<polygon points="1838.32 1519.14 1711.26 1413 1840.35 1399.06 1838.32 1519.14" />
			<polygon points="1838.32 1519.14 1711.26 1413 1548.71 1538.68 1838.32 1519.14" />
			<polygon points="1472.71 1538.68 1584.04 1428.68 1548.71 1538.68 1472.71 1538.68" />
			<polygon points="1681.37 1382.01 1584.04 1428.68 1548.71 1538.68 1681.37 1382.01" />
			<polygon points="1584.71 1551.34 1530.04 1582.01 1548.71 1538.68 1584.71 1551.34" />
			<polygon points="1589.37 1641.34 1696.71 1528.68 1530.04 1580.68 1589.37 1641.34" />
			<polygon points="1696.71 1527.34 1581.92 1428.33 1711.02 1414.4 1696.71 1527.34" />
			<polygon points="1806.71 1341.68 1748.04 1357.01 1766.71 1313.68 1806.71 1341.68" />
			<polygon points="1640.71 1668.01 1830.04 1561.34 1590.04 1642.01 1640.71 1668.01" />
			<polygon points="1838.04 1520.01 1910.7 1522.68 1827.37 1563.34 1838.04 1520.01" />
			<polygon points="1838.04 1520.01 1910.7 1522.68 1938.37 1431.34 1838.04 1520.01" />
			<polygon points="1865.54 1429.51 1938.2 1432.18 1857.37 1471.34 1865.54 1429.51" />
			<polygon points="1831.54 1561.51 1904.2 1564.18 1851.87 1717.84 1831.54 1561.51" />
			<polygon points="2058.87 1580.84 1908.37 1522.84 1857.37 1639.34 2058.87 1580.84" />
			<polygon points="1996.37 1533.84 1974.87 1507.84 1903.37 1564.34 1996.37 1533.84" />
			<polygon points="1880.37 1633.34 2198.37 1737.84 2038.87 1586.34 1880.37 1633.34" />
			<polygon points="2058.87 1580.84 2158.37 1661.34 2030.87 1663.84 2058.87 1580.84" />
			<polygon points="2158.37 1661.34 2220.37 1719.84 2114.87 1845.84 2158.37 1661.34" />
			<polygon points="1730.87 1617.34 1770.87 1649.84 1803.87 1538.34 1730.87 1617.34" />
			<polygon points="1766.37 1639.34 1854.87 1721.34 1831.54 1561.51 1766.37 1639.34" />
			<polygon points="1865.37 1681.84 2115.87 1845.34 1903.37 1564.34 1865.37 1681.84" />
			<polygon points="1854.87 1721.34 1885.37 1694.84 1865.37 1681.84 1854.87 1721.34" />
			<polygon points="2115.87 1845.34 2251.87 1814.34 2239.87 1756.84 2115.87 1845.34" />
			<polygon points="2220.37 1719.84 2239.87 1756.84 2108.87 1789.34 2220.37 1719.84" />
			<polygon points="2115.87 1845.34 2140.87 1976.84 2176.87 1905.34 2115.87 1845.34" />
			<polygon points="2140.87 1976.84 2232.87 2090.84 2176.87 1905.34 2140.87 1976.84" />
			<polygon points="2251.87 1814.34 2177.37 2020.84 2346.37 2033.84 2251.87 1814.34" />
			<polygon points="2120.37 1874.34 2184.87 1838.34 2269.87 1861.34 2120.37 1874.34" />
			<polygon points="2346.37 2033.84 2380.87 2092.84 2177.37 2020.84 2346.37 2033.84" />
			<polygon points="1435.37 1221.34 1416.71 1258.01 1417.37 1274.01 1435.37 1221.34" />
			<polygon points="1417.37 1277.34 1428.37 1294.84 1461.37 1239.84 1417.37 1277.34" />
			<polygon points="1428.37 1294.84 1435.37 1301.34 1478.37 1252.34 1428.37 1294.84" />
			<polygon points="1435.37 1301.34 1446.37 1316.34 1470.04 1278.68 1435.37 1301.34" />
			<polygon points="1446.37 1315.84 1483.87 1294.34 1485.87 1323.84 1446.37 1315.84" />
			<polygon points="1446.37 1316.34 1452.87 1326.34 1485.87 1323.84 1446.37 1316.34" />
			<polygon points="1483.87 1294.34 1525.37 1285.84 1485.87 1323.84 1483.87 1294.34" />
			<polygon points="1537.37 1274.68 1523.87 1314.34 1466.87 1280.34 1537.37 1274.68" />
			<polygon points="1472.71 1538.68 1429.15 1789.18 1530.71 1732.68 1472.71 1538.68" />
			<polygon points="1472.71 1538.68 1380.71 1679.34 1556.71 1652.01 1472.71 1538.68" />
			<polygon points="1380.71 1679.34 1325.37 1706.68 1429.37 1793.34 1380.71 1679.34" />
			<polygon points="1424.71 1610.01 1420.71 1598.68 1360.71 1623.34 1424.71 1610.01" />
			<polygon points="1360.71 1623.34 1319.37 1707.34 1380.71 1679.34 1360.71 1623.34" />
			<polygon points="1420.71 1598.68 1363.37 1504.01 1360.71 1623.34 1420.71 1598.68" />
			<polygon points="1363.37 1504.01 1278.04 1550.68 1360.71 1623.34 1363.37 1504.01" />
			<polygon points="1278.04 1550.68 1248.71 1626.68 1319.37 1707.34 1278.04 1550.68" />
			<polygon points="1363.37 1504.01 1122.04 1356.68 1278.04 1550.68 1363.37 1504.01" />
			<polygon points="1122.04 1356.68 1066.04 1378.01 1286.04 1502.01 1122.04 1356.68" />
			<polygon points="1066.04 1378.01 1045.37 1438.68 1088.04 1462.68 1066.04 1378.01" />
			<polygon points="1087.37 1468.01 1100.04 1430.01 1256.71 1600.01 1087.37 1468.01" />
			<polygon points="1117.37 1491.34 1248.71 1626.68 1278.04 1550.68 1117.37 1491.34" />
			<polygon points="1164.71 1382.01 1165.37 1370.01 1066.71 1317.34 1164.71 1382.01" />
			<polygon points="1165.37 1370.01 1150.04 1304.01 1038.04 1302.01 1165.37 1370.01" />
			<polygon points="1150.04 1304.01 1167.37 1341.34 1165.37 1370.01 1150.04 1304.01" />
			<polygon points="1038.04 1302.01 952.71 1298.01 969.37 1318.01 1038.04 1302.01" />
			<polygon points="952.71 1298.01 850.71 1328.01 830.71 1352.68 952.71 1298.01" />
			<polygon points="830.71 1352.68 860.71 1388.01 952.71 1298.01 830.71 1352.68" />
			<polygon points="860.71 1388.01 907.37 1404.68 897.37 1351.34 860.71 1388.01" />
			<polygon points="896.71 1352.68 1066.04 1378.01 969.37 1318.01 896.71 1352.68" />
			<polygon points="1038.04 1302.01 1066.04 1378.01 969.37 1318.01 1038.04 1302.01" />
			<polygon points="1054.71 1383.34 983.37 1391.34 1030.71 1462.01 1054.71 1383.34" />
			<polygon points="907.37 1404.68 999.37 1417.34 896.71 1352.68 907.37 1404.68" />
			<polygon points="2425.37 2148.68 2439.37 2204.01 2496.04 2226.68 2425.37 2148.68" />
			<polygon points="2425.37 2148.68 2472.04 2159.34 2439.37 2204.01 2425.37 2148.68" />
			<polygon points="2472.04 2159.34 2533.37 2146.01 2511.37 2218.68 2472.04 2159.34" />
			<polygon points="2431.37 2243.34 2439.37 2204.01 2496.04 2226.68 2431.37 2243.34" />
			<polygon points="2496.04 2226.68 2539.37 2204.01 2472.04 2159.34 2496.04 2226.68" />
			<polygon points="2539.37 2204.01 2600.04 2149.34 2533.37 2146.01 2539.37 2204.01" />
			<polygon points="2399.37 2300.01 2431.37 2243.34 2510.04 2270.68 2399.37 2300.01" />
			<polygon points="2510.04 2270.68 2571.37 2220.01 2539.37 2204.01 2510.04 2270.68" />
			<polygon points="2600.04 2149.34 2607.37 2158.01 2571.37 2220.01 2600.04 2149.34" />
			<polygon points="2424.7 2270.01 2444.7 2282.01 2450.04 2251.34 2424.7 2270.01" />
			<polygon points="2444.7 2282.01 2464.04 2262.68 2450.04 2251.34 2444.7 2282.01" />
			<polygon points="2456.37 2251.34 2471.04 2261.01 2483.37 2256.34 2456.37 2251.34" />
			<polygon points="2455.7 2248.34 2470.37 2243.68 2483.37 2256.34 2455.7 2248.34" />
			<polygon points="2430.7 2290.01 2444.7 2302.01 2456.04 2279.34 2430.7 2290.01" />
			<polygon points="2444.7 2302.01 2461.04 2292.34 2456.04 2279.34 2444.7 2302.01" />
			<polygon points="2411.7 2297.34 2428.04 2311.34 2424.37 2289.34 2411.7 2297.34" />
			<polygon points="2428.04 2311.34 2434.04 2304.01 2424.37 2289.34 2428.04 2311.34" />
			<polygon points="2492.37 2269.34 2513.37 2279.01 2506.04 2261.34 2492.37 2269.34" />
			<polygon points="2511.7 2261.68 2526.04 2271.34 2532.7 2251.68 2511.7 2261.68" />
			<polygon points="2526.04 2271.34 2537.04 2265.01 2532.7 2251.68 2526.04 2271.34" />
			<polygon points="2518.04 2233.01 2532.04 2238.34 2542.7 2216.34 2518.04 2233.01" />
			<polygon points="2529.7 2236.01 2543.7 2229.34 2535.04 2221.01 2529.7 2236.01" />
			<polygon points="2541.04 2246.01 2551.37 2253.01 2560.37 2242.34 2541.04 2246.01" />
			<polygon points="2541.04 2246.01 2560.37 2242.34 2558.37 2229.68 2541.04 2246.01" />
			<polygon points="1643.71 979.34 1646.1 868.01 1759.13 819.1 1643.71 979.34" />
			<polygon points="1649.36 927.78 1610.24 901.7 1602.63 862.57 1649.36 927.78" />
			<polygon points="1602.63 862.57 1628.71 811.49 1678.71 784.32 1602.63 862.57" />
			<polygon points="1678.71 784.32 1643.93 920.17 1755.87 752.8 1678.71 784.32" />
			<polygon points="1678.71 784.32 1751.53 732.15 1813.48 764.76 1678.71 784.32" />
			<polygon points="1751.53 732.15 1745.01 716.93 1810.55 726.64 1751.53 732.15" />
			<polygon points="1688.49 795.19 1668.93 757.15 1539.59 758.24 1688.49 795.19" />
			<polygon points="1539.59 758.24 1641.76 853.88 1652.62 784.32 1539.59 758.24" />
			<polygon points="1539.59 758.24 1514.6 786.49 1563.5 846.27 1539.59 758.24" />
			<polygon points="1625.45 864.75 1563.5 846.27 1628.71 811.49 1625.45 864.75" />
			<polygon points="1539.59 758.24 1521.12 722.37 1464.6 734.32 1539.59 758.24" />
			<polygon points="1525.47 806.06 1496.12 797.36 1464.6 734.32 1525.47 806.06" />
			<polygon points="1464.6 734.32 1434.17 743.02 1411.35 776.71 1464.6 734.32" />
			<polygon points="1411.35 776.71 1423.3 788.67 1464.6 734.32 1411.35 776.71" />
			<polygon points="1430.91 784.32 1465.69 765.84 1450.47 752.8 1430.91 784.32" />
			<polygon points="1452.65 771.28 1503.73 759.32 1464.6 734.32 1452.65 771.28" />
			<polygon points="1773.26 733.24 1806.96 662.59 1835.21 770.19 1773.26 733.24" />
			<polygon points="1785.22 699.55 1800.43 576.73 1850.43 515.87 1785.22 699.55" />
			<polygon points="1800.43 576.73 1886.3 673.46 1942.81 585.43 1800.43 576.73" />
			<polygon points="1850.43 515.87 2055.84 607.16 1955.85 502.83 1850.43 515.87" />
			<polygon points="1850.43 515.87 1904.77 491.96 1966.72 514.78 1850.43 515.87" />
			<polygon points="1926.51 531.09 1942.81 585.43 2033.02 628.9 1926.51 531.09" />
			<polygon points="2033.02 628.9 2055.84 607.16 1967.81 535.43 2033.02 628.9" />
			<polygon points="1850.43 633.25 1824.34 623.47 1813.48 649.55 1850.43 633.25" />
			<polygon points="1813.48 649.55 1835.21 697.37 1849.34 651.73 1813.48 649.55" />
			<polygon points="1837.39 725.63 1904.77 824.53 1947.16 803.88 1837.39 725.63" />
			<polygon points="1949.6 806.99 1959.02 788.13 1924.33 783.23 1949.6 806.99" />
			<polygon points="1959.65 787.51 1967.81 761.5 1924.33 783.23 1959.65 787.51" />
			<polygon points="1953.68 749.54 1987.37 769.1 1989.55 682.16 1953.68 749.54" />
			<polygon points="1923.25 668.03 1989.55 682.16 1967.81 724.54 1923.25 668.03" />
			<polygon points="1989.55 682.16 2014.54 696.28 1988.46 714.76 1989.55 682.16" />
			<polygon points="2014.54 696.28 2033.02 628.9 1913.47 627.81 2014.54 696.28" />
			<polygon points="1886.3 673.46 1924.33 783.23 1846.08 706.07 1886.3 673.46" />
			<polygon points="2232.87 2090.84 2349.59 2198.72 2392.22 2183.37 2425.37 2148.68 2232.87 2090.84" />
			<polygon points="2380.87 2092.84 2425.37 2148.68 2343.37 2165.34 2380.87 2092.84" />
			<polygon points="2343.37 2165.34 2336.7 2206.01 2386.7 2200.68 2343.37 2165.34" />
			<polygon points="2399.37 2300.01 2343.37 2311.34 2431.37 2243.34 2399.37 2300.01" />
			<polygon points="2343.37 2311.34 2303.37 2265.34 2348.7 2236.68 2343.37 2311.34" />
			<polygon points="2348.7 2236.68 2431.37 2243.34 2386.7 2200.68 2348.7 2236.68" />
			<polygon points="2303.37 2265.34 2304.04 2193.34 2348.7 2236.68 2303.37 2265.34" />
			<polygon points="2304.04 2193.34 2310.7 2164.01 2338.7 2189.34 2304.04 2193.34" />
			<polygon points="2348.7 2236.68 2399.37 2300.01 2416.7 2269.34 2348.7 2236.68" />
			<polygon points="1878.7 1393.34 1974.87 1507.84 1857.37 1471.34 1878.7 1393.34" />
			<polygon points="2058.87 1580.84 1996.37 1533.84 1962.7 1542.68 2058.87 1580.84" />
			<polygon points="1530.71 1732.68 1640.71 1668.01 1590.04 1642.01 1530.71 1732.68" />
			<polygon points="1828.46 583.49 1850.43 515.87 1942.81 585.43 1828.46 583.49" />
			<polygon points="1850.43 515.87 1943.96 598.49 2055.84 607.16 1850.43 515.87" />

		</g>
	</svg>

	<svg id="soccer2" opacity="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2538.46 2045.16">
		<title>
			soccer 2
		</title>
		<g class="soccer2_fill" data-name="FILL" style="fill:#00CC99;opacity:0.3">
			<polygon points="1669.27 544.27 1797.94 654.94 1865.94 535.61 1669.27 544.27" />
			<polygon points="1647.94 687.61 1786.61 741.61 1797.94 654.94 1647.94 687.61" />
			<polygon points="1669.27 544.27 1845.27 386.94 1865.94 535.61 1669.27 544.27" />
			<polygon points="1845.27 386.94 1917.27 432.27 1865.94 535.61 1845.27 386.94" />
			<polygon points="1865.94 535.61 1869.27 606.94 1837.27 586.94 1865.94 535.61" />
			<polygon points="1985.94 562.27 1906.61 628.27 1869.27 606.94 1985.94 562.27" />
			<polygon points="1869.27 606.94 1970.61 514.27 1985.94 562.27 1869.27 606.94" />
			<polygon points="1926.61 554.94 1917.27 432.27 1970.61 514.27 1926.61 554.94" />
			<polygon points="1926.61 554.94 1893.27 518.27 1869.27 606.94 1926.61 554.94" />
			<polygon points="1865.94 535.61 1917.27 432.27 1893.27 518.27 1865.94 535.61" />
			<polygon points="1733.94 317.61 1871.94 362.94 1917.27 432.27 1733.94 317.61" />
			<polygon points="1845.27 386.94 1741.27 375.61 1733.94 317.61 1845.27 386.94" />
			<polygon points="1845.27 386.94 1669.27 544.27 1741.27 375.61 1845.27 386.94" />
			<polygon points="1719.94 427.61 1571.94 442.94 1669.27 544.27 1719.94 427.61" />
			<polygon points="1647.94 687.61 1337.27 635.61 1571.94 442.94 1647.94 687.61" />
			<polygon points="1413.27 424.27 1229.94 589.61 1337.27 635.61 1413.27 424.27" />
			<polygon points="1229.94 589.61 1305.94 652.27 1337.27 635.61 1229.94 589.61" />
			<polygon points="1489.27 315.61 1515.94 398.27 1571.94 442.94 1489.27 315.61" />
			<polygon points="1440.61 548.94 1413.27 424.27 1489.27 315.61 1440.61 548.94" />
			<polygon points="1413.27 424.27 1381.94 380.94 1489.27 315.61 1413.27 424.27" />
			<polygon points="1413.27 424.27 1313.94 405.61 1381.94 380.94 1413.27 424.27" />
			<polygon points="1229.94 589.61 1201.94 549.61 1313.94 405.61 1229.94 589.61" />
			<polygon points="1679.94 420.94 1717.27 309.61 1733.94 317.61 1679.94 420.94" />
			<polygon points="1713.94 250.94 1723.27 256.27 1717.27 309.61 1713.94 250.94" />
			<polygon points="1663.94 354.94 1701.27 305.61 1713.94 250.94 1663.94 354.94" />
			<polygon points="1734.61 174.27 1700.61 172.27 1713.94 250.94 1734.61 174.27" />
			<polygon points="1713.94 226.94 1720.61 188.27 1743.94 172.27 1713.94 226.94" />
			<polygon points="1747.94 236.27 1755.94 179.61 1743.94 172.27 1747.94 236.27" />
			<polygon points="1713.94 226.94 1723.27 256.27 1747.94 236.27 1713.94 226.94" />
			<polygon points="1635.94 10.27 1735.94 76.94 1734.61 174.27 1635.94 10.27" />
			<polygon points="1692.61 36.94 1653.27 115.61 1720.61 151.61 1692.61 36.94" />
			<polygon points="1625.94 0.94 1720.61 51.61 1729.27 108.27 1625.94 0.94" />
			<polygon points="1520.61 114.94 1589.94 136.27 1653.27 115.61 1520.61 114.94" />
			<polygon points="1589.94 112.94 1653.27 115.61 1627.27 0.94 1589.94 112.94" />
			<polygon points="1589.94 112.94 1520.61 114.94 1627.27 0.94 1589.94 112.94" />
			<polygon points="1508.61 105.61 1539.94 39.61 1615.94 12.94 1508.61 105.61" />
			<polygon points="1508.61 105.61 1503.27 146.94 1520.61 114.94 1508.61 105.61" />
			<polygon points="1517.27 120.27 1627.27 0.94 1508.61 105.61 1517.27 120.27" />
			<polygon points="1503.22 146.31 1513.94 198.27 1509.13 136.77 1503.22 146.31" />
			<polygon points="1565.87 278.87 1576.32 284.77 1577.22 216.22 1565.87 278.87" />
			<polygon points="1571.32 204.87 1520.02 182.63 1513.94 198.27 1571.32 204.87" />
			<polygon points="1666.2 192.61 1648.05 178.54 1594.93 205.32 1666.2 192.61" />
			<polygon points="1537.26 291.11 1546.56 277.82 1561.97 350.89 1537.26 291.11" />
			<polygon points="1537.26 291.11 1519.99 252.58 1546.56 277.82 1537.26 291.11" />
			<polygon points="1513.94 198.27 1519.72 197.85 1519.99 252.58 1513.94 198.27" />
			<polygon points="1177.9 675.28 1229.88 711.07 1356.13 578.74 1177.9 675.28" />
			<polygon points="1211.65 687.44 1147.89 640.94 1146.84 640.18 1234.61 508.53 1211.65 687.44" />
			<polygon points="1224.48 699.59 1129.96 686.76 1146.84 640.18 1224.48 699.59" />
			<polygon points="1158.99 794.11 1220.43 805.58 1228.53 704.31 1158.99 794.11" />
			<polygon points="1138.74 999.35 1184.65 994.62 1220.43 805.58 1138.74 999.35" />
			<polygon points="1144.14 671.91 1192.75 668.53 1167.1 997.32 1144.14 671.91" />
			<polygon points="1106.33 842.04 1129.29 676.63 1158.99 680.69 1106.33 842.04" />
			<polygon points="1116.46 1000.02 1117.14 746.85 1204.9 756.3 1116.46 1000.02" />
			<polygon points="1138.07 1064.16 1197.48 1064.16 1190.05 992.59 1138.07 1064.16" />
			<polygon points="1107.68 1051.33 1116.46 1000.02 1186.67 1003.4 1107.68 1051.33" />
			<polygon points="1109.03 1033.1 1127.26 1060.11 1184.65 1056.06 1109.03 1033.1" />
			<polygon points="1170.47 1148.55 1211.65 1144.5 1199.5 1070.23 1170.47 1148.55" />
			<polygon points="1169.12 1197.16 1198.15 1195.13 1211.65 1144.5 1169.12 1197.16" />
			<polygon points="1182.62 1225.51 1163.72 1220.79 1180.6 1137.07 1182.62 1225.51" />
			<polygon points="1163.72 1220.79 1175.66 1229.02 1197.56 1189.54 1163.72 1220.79" />
			<polygon points="1069.49 1109.59 1132.86 1207.13 1176.32 1142.43 1069.49 1109.59" />
			<polygon points="1147.13 1174.28 1069.49 1109.59 1107.68 1051.33 1147.13 1174.28" />
			<polygon points="1159.4 1160.35 1098.69 1098.31 1199.55 1070.11 1159.4 1160.35" />
			<polygon points="1103.67 1220.07 1131.87 1226.7 1142.15 1184.23 1103.67 1220.07" />
			<polygon points="1152.1 1160.02 1106.65 1214.76 1120.59 1141.11 1152.1 1160.02" />
			<polygon points="1104.66 1253.57 1126.23 1254.24 1133.2 1221.39 1104.66 1253.57" />
			<polygon points="1104 1246.27 1123.57 1267.18 1126.89 1251.92 1104 1246.27" />
			<polygon points="1106.32 1217.41 1105.33 1267.51 1123.57 1267.18 1106.32 1217.41" />
			<polygon points="1061.86 1174.95 1053.9 1151.72 1069.49 1109.59 1061.86 1174.95" />
			<polygon points="1072.48 1103.62 1090.4 1116.89 1059.21 1161.01 1072.48 1103.62" />
			<polygon points="1087.74 1199.83 1102.67 1214.09 1115.94 1139.78 1087.74 1199.83" />
			<polygon points="1115.94 1139.78 1088.74 1195.85 1085.09 1132.15 1115.94 1139.78" />
			<polygon points="1064.52 1173.62 1073.14 1188.55 1087.41 1186.23 1064.52 1173.62" />
			<polygon points="1087.41 1186.23 1085.09 1132.15 1064.52 1173.62 1087.41 1186.23" />
			<polygon points="1356.13 578.74 1776.94 909.61 1786.61 741.61 1356.13 578.74" />
			<polygon points="1768.94 708.61 1378.94 960.61 1337.27 635.61 1768.94 708.61" />
			<polygon points="1690.94 941.61 1349.94 1118.61 1405.94 804.61 1690.94 941.61" />
			<polygon points="1769.94 937.61 1506.94 953.61 1545.94 791.61 1769.94 937.61" />
			<polygon points="1558.94 1180.61 1375.94 1182.61 1349.94 1118.61 1558.94 1180.61" />
			<polygon points="1385.94 1030.61 1558.94 1180.61 1800.94 1016.61 1385.94 1030.61" />
			<polygon points="1427.94 984.61 1591.94 1095.61 1782.94 960.61 1427.94 984.61" />
			<polygon points="1953.94 1087.61 1558.94 1180.61 1855.94 1001.61 1953.94 1087.61" />
			<polygon points="1858.94 1401.61 2093.94 1270.61 1953.94 1087.61 1858.94 1401.61" />
			<polygon points="1953.94 1087.61 1767.94 1241.61 2012.94 1188.61 1953.94 1087.61" />
			<polygon points="1486.94 1219.61 1699.94 1350.61 1799.94 1188.61 1486.94 1219.61" />
			<polygon points="1747.94 1314.61 1858.94 1401.61 1960.94 1281.61 1747.94 1314.61" />
			<polygon points="1558.94 1180.61 1810.94 978.61 1855.94 1001.61 1558.94 1180.61" />
			<polygon points="1446.94 1329.61 1375.94 1182.61 1712.94 1222.61 1446.94 1329.61" />
			<polygon points="1708.94 1284.61 1523.94 1478.61 1436.94 1305.61 1708.94 1284.61" />
			<polygon points="1604.94 1290.61 1716.94 1409.61 1721.94 1314.61 1604.94 1290.61" />
			<polygon points="1681.94 1548.61 1762.94 1471.61 1716.94 1409.61 1681.94 1548.61" />
			<polygon points="1523.94 1478.61 1610.94 1588.61 1733.94 1477.61 1523.94 1478.61" />
			<polygon points="1446.94 1329.61 1477.94 1314.61 1382.94 1180.61 1446.94 1329.61" />
			<polygon points="1446.94 1329.61 1523.94 1478.61 1477.94 1314.61 1446.94 1329.61" />
			<polygon points="2012.94 1314.61 2108.94 1367.61 2084.94 1276.61 2012.94 1314.61" />
			<polygon points="2157.94 1478.61 2149.94 1416.61 2108.94 1367.61 2157.94 1478.61" />
			<polygon points="2004.94 1496.61 2071.94 1522.61 2157.94 1478.61 2004.94 1496.61" />
			<polygon points="2012.94 1313.61 2004.94 1496.61 1875.94 1394.61 2012.94 1313.61" />
			<polygon points="1935.94 1358.61 2012.94 1313.61 2157.94 1478.61 1935.94 1358.61" />
			<polygon points="2200.94 1688.61 2188.94 1557.61 2157.94 1478.61 2200.94 1688.61" />
			<polygon points="2071.94 1522.61 2089.94 1561.61 2157.94 1478.61 2071.94 1522.61" />
			<polygon points="2089.94 1561.61 2004.94 1496.61 2071.94 1522.61 2089.94 1561.61" />
			<polygon points="2089.94 1561.61 2043.94 1593.61 2004.94 1496.61 2089.94 1561.61" />
			<polygon points="2145.94 1597.61 2019.94 1637.61 2019.94 1540.61 2145.94 1597.61" />
			<polygon points="2089.94 1561.61 2145.94 1597.61 2188.94 1557.61 2089.94 1561.61" />
			<polygon points="2145.94 1597.61 2034.94 1700.61 2019.94 1637.61 2145.94 1597.61" />
			<polygon points="2145.94 1597.61 2072.94 1730.61 2034.94 1700.61 2145.94 1597.61" />
			<polygon points="2178.94 1567.61 2200.94 1688.61 2145.94 1597.61 2178.94 1567.61" />
			<polygon points="2145.94 1597.61 2072.94 1730.61 2200.94 1688.61 2145.94 1597.61" />
			<polygon points="2072.94 1730.61 2197.94 1890.61 2200.94 1688.61 2072.94 1730.61" />
			<polygon points="2200.94 1688.61 2081.94 1856.61 2072.94 1730.61 2200.94 1688.61" />
			<polygon points="2188.94 1789.61 2088.94 1927.61 2077.94 1777.61 2188.94 1789.61" />
			<polygon points="2088.94 1927.61 2126.94 1946.61 2197.94 1890.61 2088.94 1927.61" />
			<polygon points="2233.94 1897.61 2221.94 1885.61 2197.94 1890.61 2233.94 1897.61" />
			<polygon points="2394.94 1989.61 2368.94 1955.61 2233.94 1897.61 2394.94 1989.61" />
			<polygon points="2197.94 1890.61 2275.94 2002.61 2394.94 1989.61 2197.94 1890.61" />
			<polygon points="2197.94 1890.61 2160.94 1981.61 2275.94 2002.61 2197.94 1890.61" />
			<polygon points="2126.94 1946.61 2084.94 1996.61 2160.94 1981.61 2126.94 1946.61" />
			<polygon points="2126.94 1946.61 2084.94 1996.61 2088.94 1927.61 2126.94 1946.61" />
			<polygon points="2084.94 1996.61 2069.94 1965.61 2088.94 1927.61 2084.94 1996.61" />
			<polygon points="2273.94 2003.61 2396.94 2006.61 2394.94 1989.61 2273.94 2003.61" />
			<polygon points="2160.94 1981.61 2151.94 2001.61 2273.94 2003.61 2160.94 1981.61" />
			<polygon points="2160.94 1981.61 2084.94 1996.61 2151.94 2001.61 2160.94 1981.61" />
			<polygon points="1798.94 1653.61 1824.94 1594.61 1762.94 1471.61 1798.94 1653.61" />
			<polygon points="1762.94 1700.61 1704.94 1545.61 1798.94 1653.61 1762.94 1700.61" />
			<polygon points="1692.94 1710.61 1727.94 1718.61 1762.94 1700.61 1692.94 1710.61" />
			<polygon points="1704.94 1545.61 1704.94 1707.61 1610.94 1588.61 1704.94 1545.61" />
			<polygon points="1523.94 1683.61 1620.94 1715.61 1692.94 1710.61 1523.94 1683.61" />
			<polygon points="1542.94 1562.61 1620.94 1715.61 1610.94 1588.61 1542.94 1562.61" />
			<polygon points="1523.94 1683.61 1542.94 1562.61 1588.94 1565.61 1523.94 1683.61" />
			<polygon points="1523.94 1683.61 1487.94 1617.61 1542.94 1562.61 1523.94 1683.61" />
			<polygon points="1620.94 1715.61 1610.94 1588.61 1692.94 1710.61 1620.94 1715.61" />
			<polygon points="1489.94 1542.61 1525.94 1546.61 1542.94 1562.61 1489.94 1542.61" />
			<polygon points="1515.94 1821.61 1460.94 1591.61 1489.94 1542.61 1515.94 1821.61" />
			<polygon points="1515.94 1821.61 1620.94 1715.61 1648.94 1752.61 1515.94 1821.61" />
			<polygon points="1546.94 1790.61 1523.94 1683.61 1623.94 1757.61 1546.94 1790.61" />
			<polygon points="1568.94 1714.61 1505.94 1733.61 1595.94 1740.61 1568.94 1714.61" />
			<polygon points="1559.94 1778.61 1511.94 1752.61 1579.94 1758.61 1559.94 1778.61" />
			<polygon points="1764.94 1823.61 1722.94 1776.61 1648.94 1752.61 1764.94 1823.61" />
			<polygon points="1515.94 1821.61 1789.94 1896.61 1764.94 1823.61 1515.94 1821.61" />
			<polygon points="1578.94 1787.61 1758.94 1993.61 1789.94 1896.61 1578.94 1787.61" />
			<polygon points="1578.94 1787.61 1689.94 2037.61 1758.94 1993.61 1578.94 1787.61" />
			<polygon points="1648.94 1752.61 1604.94 2044.61 1689.94 2037.61 1648.94 1752.61" />
			<polygon points="1764.94 1823.61 1528.94 2000.61 1604.94 2044.61 1764.94 1823.61" />
			<polygon points="1789.94 1896.61 1488.94 1913.61 1528.94 2000.61 1789.94 1896.61" />
			<polygon points="1789.94 1896.61 1515.94 1821.61 1488.94 1913.61 1789.94 1896.61" />
			<polygon points="1506.94 1912.61 1570.94 1855.61 1609.94 1905.61 1506.94 1912.61" />
			<polygon points="1506.94 1912.61 1558.94 1962.61 1609.94 1905.61 1506.94 1912.61" />
			<polygon points="1686.94 1859.61 1731.94 1924.61 1717.94 1990.61 1686.94 1859.61" />
			<polygon points="1686.94 1859.61 1669.94 2013.61 1717.94 1990.61 1686.94 1859.61" />
			<polygon points="1669.94 2013.61 1642.94 1888.61 1686.94 1859.61 1669.94 2013.61" />
			<polygon points="1722.94 1776.61 1644.94 1798.61 1764.94 1823.61 1722.94 1776.61" />
			<polygon points="1614.44 277.11 1591.94 293.11 1576.32 284.77 1614.44 277.11" />
			<polygon points="1598.44 279.11 1590.44 228.61 1614.44 277.11 1598.44 279.11" />
			<polygon points="1705.94 204.11 1633.44 242.61 1590.44 228.61 1705.94 204.11" />
			<polygon points="1599.94 231.61 1626.94 204.61 1676.94 219.11 1599.94 231.61" />
			<polygon points="1525.94 219.11 1542.44 208.61 1577.22 216.22 1525.94 219.11" />
			<polygon points="1540.44 217.61 1553.44 240.11 1577.22 216.22 1540.44 217.61" />
			<polygon points="1713.94 250.94 1653.44 275.61 1682.94 315.61 1713.94 250.94" />
			<polygon points="1682.94 315.61 1614.44 277.11 1653.44 275.61 1682.94 315.61" />
			<polygon points="1569.44 372.61 1619.44 381.11 1663.94 354.94 1569.44 372.61" />
			<polygon points="1569.94 307.61 1602.44 304.61 1638.44 317.11 1569.94 307.61" />
			<polygon points="1569.94 307.61 1596.44 324.61 1626.94 316.11 1569.94 307.61" />
			<polygon points="1638.44 317.11 1610.44 349.61 1598.44 332.11 1638.44 317.11" />
			<polygon points="1598.44 332.11 1561.97 350.89 1610.44 349.61 1598.44 332.11" />
			<polygon points="1569.44 372.61 1570.44 321.61 1598.44 332.11 1569.44 372.61" />
			<polygon points="1569.44 372.61 1537.94 295.11 1489.27 315.61 1569.44 372.61" />
			<polygon points="1977.27 696.27 1925.27 697.61 1869.27 606.94 1977.27 696.27" />
			<polygon points="1977.27 696.27 2026.61 652.94 1977.27 571.61 1977.27 696.27" />
			<polygon points="2162.61 976.94 2073.27 713.61 2026.61 652.94 2162.61 976.94" />
			<polygon points="2026.61 652.94 2049.27 906.27 1977.27 696.27 2026.61 652.94" />
			<polygon points="2107.94 1004.27 1969.27 801.61 1925.27 697.61 2107.94 1004.27" />
			<polygon points="2078.61 818.27 2107.94 1004.27 2162.61 976.94 2078.61 818.27" />
			<polygon points="2183.27 1045.61 2236.61 1041.61 2162.61 976.94 2183.27 1045.61" />
			<polygon points="2183.27 1045.61 2303.27 1115.61 2236.61 1041.61 2183.27 1045.61" />
			<polygon points="2273.94 1166.94 2293.27 1180.27 2303.27 1115.61 2273.94 1166.94" />
			<polygon points="2303.27 1115.61 2267.27 1108.94 2273.94 1166.94 2303.27 1115.61" />
			<polygon points="2267.27 1108.94 2183.27 1045.61 2269.28 1125.71 2267.27 1108.94" />
			<polygon points="2159.94 1086.11 2202.44 1073.11 2183.27 1045.61 2159.94 1086.11" />
			<polygon points="2162.61 976.94 2128.94 1059.61 2159.94 1086.11 2162.61 976.94" />
			<polygon points="2183.27 1045.61 2128.94 1059.61 2107.94 1004.27 2183.27 1045.61" />
			<polygon points="2236.44 1137.11 2248.44 1126.36 2242.94 1110.86 2236.44 1137.11" />
			<polygon points="2236.44 1137.11 2220.69 1124.11 2242.94 1110.86 2236.44 1137.11" />
			<polygon points="2202.44 1073.11 2159.94 1086.11 2220.69 1124.11 2202.44 1073.11" />
			<polygon points="2185.44 1091.86 2202.44 1073.11 2242.94 1110.86 2185.44 1091.86" />
			<polygon points="2252.44 1171.11 2260.44 1186.86 2277.19 1169.86 2252.44 1171.11" />
			<polygon points="2243.44 1163.61 2271.94 1143.36 2252.44 1171.11 2243.44 1163.61" />
			<polygon points="2245.44 1164.11 2242.69 1184.86 2258.19 1184.61 2245.44 1164.11" />
			<polygon points="2257.94 1153.11 2257.69 1113.86 2248.19 1159.36 2257.94 1153.11" />
		</g>
		<g class="soccer2_extra-line" data-name="Extra Line" style="fill:none;stroke:#17161A">
			<path d="M81.61,1351.1L897.51,1600.8"></path>
			<path transform="rotate(-72.96 489.5 1475.8)" width="2" height="853.25" d="M488.5 1049.2 L490.5 1049.2 L490.5 1902.45 L488.5 1902.45 Z"></path>
			<path d="M1218.2,573.2L1056.9,337.61"></path>
			<path transform="rotate(-34.4 1137.5 455.53)" width="2" height="285.51" d="M1136.5 312.77 L1138.5 312.77 L1138.5 598.28 L1136.5 598.28 Z"></path>
			<path d="m292 1723.2a1.0161 1.0161 0 0 0-2 0.36l0.36 2v0.13a0.92 0.92 0 0 0 0.13 0.24l-1.16 1a1 1 0 0 0-0.31 1.07 1 1 0 0 0 0.19 0.34 1 1 0 0 0 1.41 0.11l1.52-1.29a1 1 0 0 0 0.12-1.41 1 1 0 0 0 0.07-0.52l-0.36-2z"></path>
			<path d="m320.39 1729.3a1 1 0 0 0-1.12 0.86 0.82 0.82 0 0 0 0 0.44 1 1 0 0 0 0.82 0.68l2 0.27a1.0084 1.0084 0 1 0 0.26-2z"></path>
			<path d="m303.43 1728a1.14 1.14 0 0 0 0 0.45 1 1 0 0 0 0.82 0.67l2 0.27a1.0084 1.0084 0 0 0 0.26-2l-2-0.26a1 1 0 0 0-1.08 0.87z"></path>
			<path d="m298.36 1728.4a1.0084 1.0084 0 0 0 0.26-2l-2-0.27a1 1 0 0 0-1.12 0.86 1.14 1.14 0 0 0 0 0.45 1 1 0 0 0 0.82 0.67z"></path>
			<path d="m312.22 1730.2 2 0.27a1.0084 1.0084 0 0 0 0.26-2l-2-0.26a1 1 0 0 0-1.12 0.86 0.82 0.82 0 0 0 0 0.44 1 1 0 0 0 0.86 0.69z"></path>
			<path d="m290.59 1715.4a1.0161 1.0161 0 1 0-2 0.36l0.36 2v0.13a1.0005 1.0005 0 1 0 1.94-0.49l-0.36-2z"></path>
			<path d="m282.91 1684-26.91 23 7.9 43.21 40.68 5.66 0.31-0.27 27.2-23.27-7.9-43.21-39.88-5.55a1 1 0 0 0-0.69-0.14h-0.07a0.93 0.93 0 0 0-0.64 0.57zm0.29 2.17v0.22a1 1 0 0 0 1.93-0.5l-0.07-0.42 37.62 5.24 7.32 39.89-1.66-0.22a1 1 0 0 0-1.12 0.86 0.82 0.82 0 0 0 0 0.44 1 1 0 0 0 0.82 0.68l1.09 0.15-25.13 21.49-37.22-5.18 1-0.82a1.0006 1.0006 0 1 0-1.29-1.53l-1.21 1-7.28-39.79z"></path>
			<path d="m286.28 1691.8a1.0161 1.0161 0 1 0-2 0.36l0.36 2a0.28 0.28 0 0 0 0 0.13 1 1 0 0 0 1.93-0.49l-0.36-2z"></path>
			<path d="m289.11 1707.5a1.0161 1.0161 0 0 0-2 0.36l0.36 2v0.13a1 1 0 0 0 1.93-0.49l-0.36-2z"></path>
			<path d="m287.72 1699.7a1.0161 1.0161 0 0 0-2 0.36l0.36 2a0.28 0.28 0 0 0 0 0.13 1 1 0 0 0 1.93-0.49l-0.36-2z"></path>
			<path d="m280.1 1736.2a1 1 0 0 0-1.41-0.12l-1.53 1.3a1 1 0 1 0 1.3 1.52l1.52-1.29a1 1 0 0 0 0.12-1.41z"></path>
			<path d="m286.19 1731a1 1 0 0 0-1.41-0.12l-1.52 1.3a1 1 0 0 0-0.3 1.07 0.88 0.88 0 0 0 0.19 0.34 1 1 0 0 0 1.4 0.11l1.53-1.29a1 1 0 0 0 0.11-1.41z"></path>
			<path d="m274 1741.3a1 1 0 0 0-1.41-0.12l-1.52 1.3a1 1 0 0 0-0.3 1.08 1.06 1.06 0 0 0 0.18 0.33 1 1 0 0 0 1.41 0.11l1.53-1.29a1 1 0 0 0 0.11-1.41z"></path>
			<path d="m937.94 1605.4a1.0098 1.0098 0 0 0-0.28 2l2 0.28h0.41l0.57 1.42a1.0028 1.0028 0 0 0 1.86-0.75l-0.75-1.85a1 1 0 0 0-1.3-0.56 0.92 0.92 0 0 0-0.48-0.22l-2-0.28z"></path>
			<path d="m952.62 1580.4a1 1 0 0 0 0.46 1.33 1 1 0 0 0 0.44 0.1 1 1 0 0 0 0.89-0.56l0.88-1.8a1.0018 1.0018 0 1 0-1.8-0.88z"></path>
			<path d="m946.07 1596.1a1 1 0 0 0 0.44 0.1 1 1 0 0 0 0.9-0.56l0.87-1.8 0.09-0.17a1 1 0 0 0-0.6-1.29 1 1 0 0 0-1.28 0.59l-0.88 1.8a1 1 0 0 0 0.46 1.33z"></path>
			<path d="m944.78 1601a1.0018 1.0018 0 0 0-1.8-0.88l-0.87 1.8a1 1 0 0 0 0.46 1.33 1.13 1.13 0 0 0 0.44 0.1 1 1 0 0 0 0.9-0.57z"></path>
			<path d="m950.94 1588.5 0.88-1.8a1 1 0 0 0-1.8-0.87l-0.88 1.79a1 1 0 0 0 0.47 1.33 0.91 0.91 0 0 0 0.43 0.1 1 1 0 0 0 0.9-0.55z"></path>
			<path d="m930 1604.3a1.0098 1.0098 0 0 0-0.28 2l2 0.28h0.14a1.0028 1.0028 0 0 0 0.15-2l-2-0.27z"></path>
			<path d="m897.81 1601.7 13.38 32.81 43.5 6.11 18.18-36.82-0.15-0.38-13.52-33.15-43.5-6.11-17.83 36.1a1 1 0 0 0-0.35 0.61v0.08a1 1 0 0 0 0.29 0.75zm2.2 0.49h0.22a1.0024 1.0024 0 1 0 0.14-2l-0.42-0.06 16.82-34 40.11 5.63-0.73 1.51a1 1 0 0 0 0.46 1.33 1 1 0 0 0 0.44 0.1 1 1 0 0 0 0.9-0.56l0.48-1 12.46 30.56-16.64 33.7-0.47-1.17a1 1 0 0 0-1.31-0.55 1 1 0 0 0-0.55 1.3l0.6 1.46-40-5.62z"></path>
			<path d="m906.28 1601a1.0098 1.0098 0 1 0-0.28 2l2 0.28h0.14a1.0024 1.0024 0 0 0 0.14-2l-2-0.27z"></path>
			<path d="m921 1604.1a1 1 0 0 0 0.86 1.14l2 0.28h0.14a1.0021 1.0021 0 0 0 0.13-2l-2-0.28a1 1 0 0 0-1.13 0.86z"></path>
			<path d="m914.19 1602.1a1.0098 1.0098 0 0 0-0.28 2l2 0.28h0.14a1.0028 1.0028 0 0 0 0.15-2l-2-0.28z"></path>
			<path d="m945.9 1622.1 0.75 1.86a1 1 0 0 0 0.93 0.62 0.94 0.94 0 0 0 0.37-0.07 1 1 0 0 0 0.55-1.3l-0.75-1.86a1 1 0 1 0-1.85 0.75z"></path>
			<path d="m942.9 1614.6 0.75 1.86a1 1 0 0 0 0.93 0.62 0.94 0.94 0 0 0 0.37-0.07 1 1 0 0 0 0.56-1.3l-0.75-1.85a1 1 0 1 0-1.85 0.75z"></path>
			<path d="m948.9 1629.5 0.75 1.85a1 1 0 0 0 1.3 0.56 1 1 0 0 0 0.54-1.31l-0.75-1.85a1 1 0 1 0-1.85 0.75z"></path>
			<path d="m992.35 299.62 16.65 48.62 46-10.18 20.56-18.89-16.28-47.41a1 1 0 0 0-0.21-0.93l-0.15-0.11v-0.17h-0.15a1 1 0 0 0-1.06 0.19l-0.08 0.07-44.69 9.89zm2.23 1.42 0.3-0.07a1 1 0 0 0 0.75-1.2 0.89 0.89 0 0 0-0.4-0.58l18.44-17 42.2-9.34a1 1 0 0 0 0.26 0.65 0.92 0.92 0 0 0 0.51 0.3 1 1 0 0 0 0.9-0.24l0.5-0.45 15.68 45.55-18.61 17.13-0.28-0.83a1 1 0 0 0-1.89 0.65l0.39 1.13-43.15 9.56z"></path>
			<path d="m1031.6 290.47a1 1 0 0 0-0.75 0.75 1 1 0 0 0 0.75 1.2 0.86 0.86 0 0 0 0.45 0l1.94-0.45a1.025 1.025 0 0 0-0.45-2l-2 0.45z"></path>
			<path d="m1045.8 284.4 1.47-1.36a1 1 0 0 0 0.06-1.41 1 1 0 0 0-1.41-0.05l-1.47 1.36a1 1 0 0 0-0.06 1.41 1.05 1.05 0 0 0 0.52 0.3 1 1 0 0 0 0.89-0.25z"></path>
			<path d="m1023.6 292.23a1 1 0 0 0 0 1.94 0.86 0.86 0 0 0 0.45 0l2-0.45a1 1 0 0 0 0.75-1.2 1 1 0 0 0-1.2-0.75z"></path>
			<path d="m1051.7 279 1.48-1.35a1.005 1.005 0 0 0-1.36-1.48l-1.47 1.36a1 1 0 0 0-0.06 1.41 0.92 0.92 0 0 0 0.51 0.3 1 1 0 0 0 0.9-0.24z"></path>
			<path d="m1008.1 295.83a1 1 0 0 0-0.75 1.2 1 1 0 0 0 0.76 0.75 0.82 0.82 0 0 0 0.44 0l2-0.45a1.0006 1.0006 0 1 0-0.45-1.95z"></path>
			<path d="m1000.3 297.64a1 1 0 0 0 0 1.95 1.14 1.14 0 0 0 0.45 0l2-0.45a1 1 0 0 0 0.75-1.2 1 1 0 0 0-1.2-0.75z"></path>
			<path d="m1015.9 294.06a1 1 0 0 0 0 1.95 1.14 1.14 0 0 0 0.45 0l2-0.45a1 1 0 0 0 0.75-1.2 1 1 0 0 0-1.2-0.75z"></path>
			<path d="m1048.4 319.19a1 1 0 0 0-0.63 1.27l0.65 1.89v0.13a1.0019 1.0019 0 0 0 1.85-0.77l-0.65-1.89a1 1 0 0 0-1.26-0.63z"></path>
			<path d="m1050.4 328 0.64 1.9a1 1 0 0 0 0.73 0.65 1 1 0 0 0 0.55 0 1 1 0 0 0 0.62-1.27l-0.65-1.89a1 1 0 1 0-1.89 0.64z"></path>
			<path d="m1045.2 312.87 0.65 1.89a1 1 0 0 0 0.72 0.65 1 1 0 0 0 0.55 0 1 1 0 0 0 0.62-1.27l-0.64-1.9a1.0009 1.0009 0 0 0-1.9 0.63z"></path>
			<path d="m1038 288.91a1 1 0 0 0-0.6 1.28l0.65 1.89a1 1 0 0 0 1.89-0.65l-0.47-1.39a1 1 0 0 0 0.39-0.21l1.47-1.36a1 1 0 0 0-1.33-1.47l-1.47 1.35a1.06 1.06 0 0 0-0.29 0.54h-0.24z"></path>
			<path d="m1040 297.71 0.65 1.9a1 1 0 0 0 0.72 0.65 1 1 0 0 0 0.55 0 1 1 0 0 0 0.62-1.27l-0.64-1.89a1 1 0 0 0-1.9 0.61z"></path>
			<path d="m1042.6 305.29 0.65 1.9a1 1 0 0 0 0.72 0.65 1 1 0 0 0 0.55 0 1 1 0 0 0 0.62-1.27l-0.64-1.89a1 1 0 0 0-1.9 0.61z"></path>
			<path d="m2417.5 434.85-21.06 84.21 74.49 27.88 46.42-7.88 20.53-82.1a1.65 1.65 0 0 0 0.56-1.52 1.62 1.62 0 0 0-0.11-0.28l0.07-0.29-0.24-0.09a1.69 1.69 0 0 0-1.67-0.72h-0.17l-72.4-27.06zm1.78 4 0.49 0.18a1.68 1.68 0 0 0 2.15-1 1.63 1.63 0 0 0 0-1.19l41.72-7.09 68.36 25.61a1.68 1.68 0 0 0 1.71 2.55l1.12-0.19-19.73 78.91-42.1 7.15 0.36-1.42a1.6917 1.6917 0 0 0-3.28-0.83l-0.49 2-69.91-26.15z"></path>
			<path d="m2479.1 458.85a1.69 1.69 0 0 0 0.38 1.75 1.47 1.47 0 0 0 0.63 0.41l3.18 1.15 0.22 0.08a1.6902 1.6902 0 1 0 0.93-3.25l-3.18-1.16a1.7 1.7 0 0 0-2.16 1.02z"></path>
			<path d="m2507.1 462.46 3.33-0.56a1.69 1.69 0 0 0-0.57-3.33l-3.33 0.56a1.69 1.69 0 0 0-1.38 1.95 1.58 1.58 0 0 0 0.45 0.89 1.68 1.68 0 0 0 1.5 0.49z"></path>
			<path d="m2466.4 454.23a1.7 1.7 0 0 0 0.38 1.76 1.76 1.76 0 0 0 0.63 0.41l3.18 1.15a1.69 1.69 0 0 0 1.15-3.17l-3.17-1.16a1.71 1.71 0 0 0-2.17 1.01z"></path>
			<path d="m2520.4 460.2 3.33-0.57a1.68 1.68 0 0 0 1.35-1.94 1.7 1.7 0 0 0-1.95-1.39l-3.33 0.57a1.8 1.8 0 0 0-0.89 0.45 1.69 1.69 0 0 0 1.46 2.88z"></path>
			<path d="m2443.2 444a1.69 1.69 0 0 0-1.79 2.77 1.76 1.76 0 0 0 0.63 0.41l3.18 1.15a1.6908 1.6908 0 1 0 1.15-3.18z"></path>
			<path d="m2430.5 439.39a1.71 1.71 0 0 0-1.74 0.37 1.69 1.69 0 0 0 0 2.39 1.79 1.79 0 0 0 0.63 0.42l3.18 1.15a1.6908 1.6908 0 1 0 1.15-3.18l-3.17-1.15z"></path>
			<path d="m2455.9 448.61a1.69 1.69 0 0 0-1.79 2.77 1.76 1.76 0 0 0 0.63 0.41l3.18 1.15a1.6908 1.6908 0 1 0 1.15-3.18l-3.16-1.15z"></path>
			<path d="m2476.7 515.36-0.82 3.28a1.69 1.69 0 0 0 0.42 1.59 1.79 1.79 0 0 0 0.8 0.46 1.68 1.68 0 0 0 2.05-1.23l0.83-3.27a1.6917 1.6917 0 0 0-3.28-0.83z"></path>
			<path d="m2473.4 528.41-0.82 3.27a1.71 1.71 0 0 0 0.42 1.6 1.79 1.79 0 0 0 0.8 0.46 1.7 1.7 0 0 0 2.05-1.23l0.83-3.27a1.69 1.69 0 0 0-1.22-2 1.71 1.71 0 0 0-2.06 1.17z"></path>
			<path d="m2480 502.23-0.82 3.28a1.05 1.05 0 0 0-0.06 0.24 1.6901 1.6901 0 0 0 3.33 0.58l0.83-3.27a1.69 1.69 0 0 0-1.22-2 1.71 1.71 0 0 0-2.06 1.17z"></path>
			<path d="m2492 461.73a1.69 1.69 0 0 0-2 1.29l-0.82 3.27a1.69 1.69 0 0 0 0.42 1.59 1.58 1.58 0 0 0 0.8 0.46 1.69 1.69 0 0 0 2-1.22l0.61-2.4a1.59 1.59 0 0 0 0.75 0l3.33-0.56a1.69 1.69 0 0 0-0.57-3.33l-3.33 0.57a1.71 1.71 0 0 0-0.89 0.49 1.59 1.59 0 0 0-0.29-0.15z"></path>
			<path d="m2488.7 474.84a1.7 1.7 0 0 0-2 1.23l-0.82 3.27a1.46 1.46 0 0 0 0 0.2 1.69 1.69 0 1 0 3.32 0.63l0.83-3.28a1.69 1.69 0 0 0-1.23-2.05z"></path>
			<path d="m2483.3 489.11-0.82 3.28a1.69 1.69 0 0 0 0.42 1.59 1.58 1.58 0 0 0 0.8 0.46 1.69 1.69 0 0 0 2.05-1.22l0.83-3.28a1.69 1.69 0 0 0-1.22-2 1.71 1.71 0 0 0-2.06 1.17z"></path>
			<path d="m0 1324.9 16.7 48.62 46-10.18 20.52-18.88-16.28-47.43a1 1 0 0 0-0.21-0.93l-0.15-0.11-0.06-0.17h-0.14a1 1 0 0 0-1.07 0.18l-0.07 0.07-44.69 9.86zm2.24 1.39 0.3-0.07a1 1 0 0 0 0.57-0.38 1 1 0 0 0-0.22-1.4l18.44-17 42.2-9.34a1 1 0 0 0 0.25 0.66 1 1 0 0 0 0.52 0.29 1 1 0 0 0 0.9-0.24l0.49-0.45 15.65 45.55-18.61 17.12-0.28-0.83a1 1 0 0 0-1.89 0.65l0.38 1.14-43.15 9.55z"></path>
			<path d="m39.11 1315.6a1 1 0 0 0 0 1.95 0.86 0.86 0 0 0 0.45 0l1.95-0.45a1.025 1.025 0 1 0-0.45-2l-2 0.45z"></path>
			<path d="m53.42 1309.6 1.48-1.36a1 1 0 0 0 0.06-1.41 1 1 0 0 0-1.42-0.06l-1.47 1.36a1.07 1.07 0 0 0-0.3 0.51 1 1 0 0 0 0.75 1.2 1 1 0 0 0 0.9-0.24z"></path>
			<path d="m31.32 1317.4a1 1 0 0 0 0 2 1.14 1.14 0 0 0 0.45 0l1.95-0.46h0.18a1.0009 1.0009 0 0 0-0.63-1.9l-2 0.45z"></path>
			<path d="m59.31 1304.2 1.47-1.35a1 1 0 1 0-1.36-1.41l-1.42 1.34a1 1 0 0 0-0.06 1.41 0.92 0.92 0 0 0 0.51 0.3 1 1 0 0 0 0.86-0.29z"></path>
			<path d="m15.68 1321.1a1 1 0 0 0 0 1.94 0.86 0.86 0 0 0 0.45 0l2-0.45a1.025 1.025 0 0 0-0.45-2l-1.95 0.46z"></path>
			<path d="m7.84 1322.9a1 1 0 0 0 0 2 1.14 1.14 0 0 0 0.45 0l2-0.45a1.0261 1.0261 0 1 0-0.46-2l-1.94 0.45z"></path>
			<path d="m23.43 1319.3a1.0003 1.0003 0 0 0 0.05 2 1.09 1.09 0 0 0 0.44 0l2-0.45a1.025 1.025 0 0 0-0.45-2l-1.95 0.45z"></path>
			<path d="m55.42 1345.6 0.64 1.9a1.07 1.07 0 0 0 1.27 0.65 1 1 0 0 0 0.63-1.27l-0.65-1.89a1 1 0 0 0-1.89 0.61z"></path>
			<path d="m58 1353.2 0.64 1.9a1 1 0 0 0 1.27 0.62 1 1 0 0 0 0.63-1.27l-0.65-1.89a1 1 0 0 0-1.89 0.64z"></path>
			<path d="m52.82 1338.1 0.64 1.89a1 1 0 0 0 0.73 0.66 1 1 0 0 0 0.55 0 1 1 0 0 0 0.62-1.27l-0.65-1.9a1 1 0 0 0-1.89 0.65z"></path>
			<path d="m45.08 1315.4 0.65 1.89a1 1 0 0 0 0.72 0.66 1 1 0 0 0 0.55 0 1 1 0 0 0 0.62-1.27l-0.47-1.39a1 1 0 0 0 0.39-0.21l1.46-1.36 0.09-0.08a1.0007 1.0007 0 1 0-1.44-1.39l-1.48 1.36a1 1 0 0 0-0.28 0.53h-0.19a1 1 0 0 0-0.62 1.26z"></path>
			<path d="m48.29 1321.7a1 1 0 0 0-0.63 1.27l0.65 1.9a1 1 0 0 0 0.72 0.65 1 1 0 0 0 0.55 0 1 1 0 0 0 0.62-1.27l-0.65-1.89a1 1 0 0 0-1.26-0.63z"></path>
			<path d="m50.24 1330.5 0.64 1.89a1 1 0 0 0 0.73 0.65 0.83 0.83 0 0 0 0.54 0 1 1 0 0 0 0.63-1.26l-0.65-1.9a1 1 0 0 0-1.89 0.62z"></path>
			<path d="m641.73 1010.1-11.67 25.23 21.76 13.22 15.07 0.3 11.37-24.6a0.51 0.51 0 0 0 0.27-0.44v-0.18h-0.07a0.53 0.53 0 0 0-0.48-0.32h-0.05l-21.15-12.86zm0.28 1.43 0.14 0.09a0.55 0.55 0 0 0 0.74-0.19 0.5 0.5 0 0 0 0.06-0.38l13.55 0.27 20 12.14a0.61 0.61 0 0 0-0.15 0.36 0.54 0.54 0 0 0 0.53 0.55h0.36l-10.93 23.63-13.67-0.27 0.2-0.43a0.54 0.54 0 0 0-0.26-0.72 0.55 0.55 0 0 0-0.72 0.27l-0.27 0.59-20.42-12.44z"></path>
			<path d="m660.39 1021.2a0.55 0.55 0 0 0-0.58 0 0.55 0.55 0 0 0-0.15 0.75 0.58 0.58 0 0 0 0.18 0.17l0.93 0.55a0.52 0.52 0 0 0 0.72-0.2 0.54 0.54 0 0 0-0.19-0.74l-0.93-0.55z"></path>
			<path d="m668.25 1024.2h1.08a0.54 0.54 0 0 0 0.47-0.47 0.55 0.55 0 0 0-0.47-0.62h-1.08a0.54 0.54 0 0 0-0.55 0.53 0.56 0.56 0 0 0 0.09 0.31 0.53 0.53 0 0 0 0.46 0.25z"></path>
			<path d="m656 1019.2a0.53 0.53 0 0 0 0 0.57 0.46 0.46 0 0 0 0.17 0.17l0.93 0.55a0.54023 0.54023 0 0 0 0.55-0.93l-0.93-0.55a0.54 0.54 0 0 0-0.72 0.19z"></path>
			<path d="m672.56 1024.3h1.08a0.54 0.54 0 0 0 0.55-0.53 0.54 0.54 0 0 0-0.53-0.55h-1.1a0.53 0.53 0 0 0-0.53 0.53 0.55 0.55 0 0 0 0.08 0.31 0.54 0.54 0 0 0 0.45 0.24z"></path>
			<path d="m648.51 1014.7a0.55 0.55 0 0 0 0 0.58 0.58 0.58 0 0 0 0.18 0.17l0.93 0.55a0.54023 0.54023 0 0 0 0.55-0.93l-0.93-0.55a0.53 0.53 0 0 0-0.73 0.18z"></path>
			<path d="m645 1012.4a0.54 0.54 0 0 0-0.19 0.75 0.55 0.55 0 0 0 0.18 0.16l0.93 0.56a0.54023 0.54023 0 0 0 0.55-0.93l-0.93-0.56a0.55 0.55 0 0 0-0.54 0.02z"></path>
			<path d="m652.38 1016.8a0.55 0.55 0 0 0-0.15 0.75 0.46 0.46 0 0 0 0.17 0.17l0.93 0.55a0.54279 0.54279 0 0 0 0.56-0.93l-0.93-0.55a0.55 0.55 0 0 0-0.58 0.01z"></path>
			<path d="m655.55 1039-0.45 1a0.55 0.55 0 0 0 0 0.53 0.45 0.45 0 0 0 0.22 0.19 0.54 0.54 0 0 0 0.72-0.26l0.45-1a0.54 0.54 0 0 0-0.26-0.72 0.55 0.55 0 0 0-0.68 0.26z"></path>
			<path d="m653.73 1042.9-0.46 1a0.53 0.53 0 0 0 0 0.52 0.45 0.45 0 0 0 0.22 0.19 0.54 0.54 0 0 0 0.72-0.26l0.46-1a0.55 0.55 0 0 0-0.26-0.72 0.56 0.56 0 0 0-0.68 0.27z"></path>
			<path d="m657.36 1035.1-0.46 1a0.55 0.55 0 0 0 0 0.53 0.45 0.45 0 0 0 0.22 0.19 0.53 0.53 0 0 0 0.7-0.27l0.46-1a0.52326 0.52326 0 1 0-0.94-0.46z"></path>
			<path d="m662.86 1023.3-0.46 1a0.53 0.53 0 0 0 0 0.52 0.45 0.45 0 0 0 0.22 0.19 0.54 0.54 0 0 0 0.72-0.26l0.33-0.72a0.73 0.73 0 0 0 0.24 0.07h1.09a0.54 0.54 0 0 0 0.55-0.53 0.53 0.53 0 0 0-0.53-0.53h-1.08a0.5 0.5 0 0 0-0.31 0.1l-0.09-0.07a0.54 0.54 0 0 0-0.68 0.23z"></path>
			<path d="m661 1027.2-0.46 1a0.53 0.53 0 0 0 0 0.52 0.63 0.63 0 0 0 0.23 0.2 0.54 0.54 0 0 0 0.7-0.28l0.46-1a0.53 0.53 0 0 0-0.26-0.7 0.54 0.54 0 0 0-0.67 0.26z"></path>
			<path d="m659.2 1031.2-0.45 1a0.55 0.55 0 0 0 0 0.53 0.57 0.57 0 0 0 0.22 0.19 0.55 0.55 0 0 0 0.72-0.26l0.45-1a0.52326 0.52326 0 1 0-0.94-0.46z"></path>
			<path d="m804 399-55 44.4 34.74 54.72 34.08 17.68 53.71-43.34a1.37 1.37 0 0 0 1.11-0.71 1.05 1.05 0 0 0 0.06-0.24l0.19-0.15-0.11-0.18a1.37 1.37 0 0 0-0.73-1.29l-0.13-0.07-33.8-53.19zm-0.76 3.54 0.23 0.36a1.37 1.37 0 0 0 2.47-0.39l30.62 15.89 31.92 50.23a1.43 1.43 0 0 0-0.73 0.64 1.4 1.4 0 0 0-0.15 0.8 1.42 1.42 0 0 0 0.74 1.06l0.82 0.42-51.61 41.65-30.9-16 0.93-0.75a1.38 1.38 0 0 0-1.72-2.15l-1.29 1-32.57-51.41z"></path>
			<path d="m833 444.63a1.37 1.37 0 0 0-1.22 1.52 1.2 1.2 0 0 0 0.21 0.58l1.5 2.31a1.38 1.38 0 0 0 2.31-1.5l-1.5-2.31a1.37 1.37 0 0 0-1.3-0.6z"></path>
			<path d="m848.77 460.92 2.45 1.27a1.3731 1.3731 0 0 0 1.26-2.44l-2.48-1.27a1.38 1.38 0 0 0-1.86 0.59 1.48 1.48 0 0 0-0.14 0.8 1.39 1.39 0 0 0 0.77 1.05z"></path>
			<path d="m827 435.39a1.37 1.37 0 0 0-1.22 1.52 1.5 1.5 0 0 0 0.21 0.58l1.5 2.31a1.38 1.38 0 0 0 1.91 0.4 1.36 1.36 0 0 0 0.38-1.89l-1.48-2.31a1.37 1.37 0 0 0-1.3-0.61z"></path>
			<path d="m858.6 466 2.44 1.27 0.2 0.11a1.3827 1.3827 0 0 0 1.07-2.55l-2.44-1.27a1.38 1.38 0 0 0-1.86 0.59 1.32 1.32 0 0 0-0.14 0.8 1.35 1.35 0 0 0 0.73 1.05z"></path>
			<path d="m816.35 417.56a1.38 1.38 0 0 0-2.52 0.92 1.2 1.2 0 0 0 0.21 0.58l1.46 2.26a1.38 1.38 0 0 0 2.31-1.5l-1.5-2.31z"></path>
			<path d="m809 407.67a1.37 1.37 0 0 0-1.22 1.52 1.5 1.5 0 0 0 0.21 0.58l1.5 2.31a1.38 1.38 0 0 0 2.31-1.5l-1.5-2.31a1.37 1.37 0 0 0-1.3-0.6z"></path>
			<path d="m821 426.12a1.37 1.37 0 0 0-1.16 1.55 1.2 1.2 0 0 0 0.21 0.58l1.5 2.31a1.38 1.38 0 0 0 2.31-1.5l-1.5-2.31a1.37 1.37 0 0 0-1.36-0.63z"></path>
			<path d="m805 480.63a1.38 1.38 0 0 0-1.93-0.21l-2.07 1.72a1.4 1.4 0 0 0-0.51 1.25 1.37 1.37 0 0 0 2.23 0.9l2.15-1.72a1.38 1.38 0 0 0 0.21-1.94z"></path>
			<path d="m796.42 487.53a1.38 1.38 0 0 0-1.93-0.22l-2.15 1.69-0.15 0.12a1.38 1.38 0 0 0 1.87 2l2.15-1.73a1.37 1.37 0 0 0 0.21-1.93z"></path>
			<path d="m811.66 473.52-2.14 1.73a1.38 1.38 0 0 0-0.51 1.24 1.24 1.24 0 0 0 0.3 0.69 1.35 1.35 0 0 0 1.91 0.19l2.15-1.72a1.38 1.38 0 1 0-1.73-2.15z"></path>
			<path d="m839.36 453.05a1.37 1.37 0 0 0-1.93-0.2l-2.14 1.72a1.38 1.38 0 0 0-0.22 1.94 1.39 1.39 0 0 0 1.94 0.21l1.57-1.27a1.39 1.39 0 0 0 0.46 0.41l2.45 1.27a1.38 1.38 0 0 0 1.27-2.45l-2.45-1.27a1.37 1.37 0 0 0-0.82-0.11 1.34 1.34 0 0 0-0.12-0.24z"></path>
			<path d="m828.84 459.73-2.14 1.73a1.38 1.38 0 0 0-0.51 1.24 1.37 1.37 0 0 0 2.23 0.9l2.15-1.72a1.38 1.38 0 1 0-1.73-2.15z"></path>
			<path d="m820.25 466.63-2.14 1.72a1.4 1.4 0 0 0-0.51 1.25 1.37 1.37 0 0 0 2.23 0.9l2.15-1.73a1.38 1.38 0 1 0-1.73-2.14z"></path>
			<path d="m323.79 1690.8a1 1 0 0 1-0.19-1.17l327-642.2 1.78 0.91-325.56 639.28 1029.6-569.56 1 1.75-1032.4 571.14a0.91 0.91 0 0 1-0.48 0.13 1 1 0 0 1-0.73-0.28z"></path>
			<path d="M2397.1,519.18L1702.2,1016.6"></path>
			<path transform="rotate(-35.59 2049.6 767.8)" d="M1622.3 766.8 L2476.94 766.8 L2476.94 768.8 L1622.3 768.8 Z"></path>
			<path d="M923.33,1566.3L818.32,513.16"></path>
			<path transform="rotate(-5.69 870.8 1039.8)" d="M869.78 510.6 L871.78 510.6 L871.78 1568.9 L869.78 1568.9 Z"></path>
		</g>
		</g>
		<g class="soccer2_line" data-name="LINE" style="fill:#17161A">
			<path d="m1666.4 193.59a1 1 0 0 0 0.63-0.38 1 1 0 0 0-0.19-1.4l-18.16-14.07a1 1 0 0 0-1.06-0.1l-53.12 26.78a1 1 0 0 0 0.45 1.89h0.18l71.27-12.71zm-2.57-1.53-62.33 11.08 46.45-23.42z" style="fill:#17161A" />
			<path d="m1052.9 1152.1 8 23.22a1 1 0 0 0 0.94 0.68h0.11a1 1 0 0 0 0.89-0.88l2.44-20.94 16.64-23.54 1.59 2.45-19.69 39.9a1 1 0 0 0-0.09 0.34 0.2 0.2 0 0 0 0 0.11 1 1 0 0 0 0 0.24v0.12a0.29 0.29 0 0 0 0 0.13l8.63 14.93a1 1 0 0 0 0.86 0.5h0.17l13.93-2.26 0.5 8.63a1 1 0 0 0 0.4 0.73l-1.3 2.77a1 1 0 0 0 0.21 1.15l14.93 14.27a1 1 0 0 0 0.69 0.27 0.81 0.81 0 0 0 0.31 0 1 1 0 0 0 0.67-0.77l7-39.43 1.92 3-7 36.76a1 1 0 0 0 0.56 1.09 0.87 0.87 0 0 0 0.42 0.1h0.23l-0.8 0.74a1 1 0 0 0-0.7 0.66l-2.4 2.22a1.05 1.05 0 0 0-0.3 0.52 1 1 0 0 0 0.76 1.19l1.8 0.42-0.48 24-0.52-0.13a1 1 0 0 0-1 1.66l1.43 1.53-0.07 3.61-0.72 0.81a1 1 0 0 0 0.67 1.65l-0.26 12.93a1 1 0 0 0 0.3 0.72 1 1 0 0 0 0.7 0.3l18.25-0.33h0.24a0.72 0.72 0 0 0 0.2-0.09h0.07l0.13-0.1 0.06-0.08 0.06-0.06a1.3 1.3 0 0 0 0.14-0.32l3.32-15.26a0.94 0.94 0 0 0-0.06-0.55l6.37-30a0.88 0.88 0 0 0 0-0.23l5.46-22.55 33.25-49.51 4.29-0.42-14.45 71.7v0.27a0.75 0.75 0 0 0 0.09 0.29v0.1a1 1 0 0 0 0.28 0.3l11.94 8.24a1.06 1.06 0 0 0 0.57 0.17h0.23a1 1 0 0 0 0.64-0.49l2.19-3.94 3.66 0.91h0.24a1 1 0 0 0 0.63-0.22 1 1 0 0 0 0.37-0.8l-0.19-8.42 11.49-20.71 3.3-0.23a1 1 0 0 0 0.9-0.74l13.5-50.63v-0.06a0.86 0.86 0 0 0 0-0.32l-12.12-74a1 1 0 0 0-0.22-0.84 1 1 0 0 0-1-0.3l-77.72 21.75-12.55-39.13 8.19-5 9.36 13.87a1 1 0 0 0 0.83 0.44h0.07l12.35-0.87-2.42 3.34a1 1 0 0 0 0.81 1.55h59.55a1 1 0 0 0 0.88-1.11l-7.47-71.55a1 1 0 0 0-0.4-0.69 1 1 0 0 0-1.4 0.21l-7.33 9.9-41.4-2 25.68-2.64a1 1 0 0 0 1 0.79 1 1 0 0 0 1-0.92v-0.07l16.65-1.72a1 1 0 0 0 0.88-0.8l35.78-189v-0.06l7.52-94 0.37 0.25a0.94 0.94 0 0 0 0.56 0.18 1 1 0 0 0 0.73-0.31l64.24-67.34 10.45 8.62a1 1 0 0 0 0.64 0.23 1.12 1.12 0 0 0 0.47-0.11l30-16 41.12 320.73-28.56 160.48a1.31 1.31 0 0 0 0 0.28 1.34 1.34 0 0 0 0.07 0.27l26 64 71 147 77 149v0.13l84.75 107.14-24.17-9.24 6.09-11a1 1 0 0 0 0-1 1 1 0 0 0-0.82-0.52l-45.64-3-16.74-15.75a1 1 0 0 0-0.57-0.27l-36-4h-0.41l-0.21 0.1h-0.09l-0.17 0.17-0.07 0.09-29 49a1 1 0 0 0-0.11 0.74l54.93 229.74-26.92 91.74v0.39a0.11 0.11 0 0 0 0 0.08 0.88 0.88 0 0 0 0.07 0.23l40 87 0.09 0.14a0.27 0.27 0 0 0 0.07 0.08 0.69 0.69 0 0 0 0.13 0.11l0.07 0.06 76 44h0.15a0.85 0.85 0 0 0 0.35 0.08h0.08l85-7h0.06a0.71 0.71 0 0 0 0.28-0.09h0.07l69-44a1 1 0 0 0 0.27-0.27 1 1 0 0 0 0.11-0.23l31-97v-0.45l-25-73v-0.07l-0.09-0.13-42-47-0.21-0.18h-0.09l-0.14-0.06-73.7-23.91-26.7-35.27 70-4.87 34.86 8h0.22a1 1 0 0 0 0.46-0.11l35-18a1.3 1.3 0 0 0 0.31-0.26l36-47a0.09 0.09 0 0 0 0-0.07 0.57 0.57 0 0 0 0.08-0.13l26-59a1 1 0 0 0 0-0.85l-62-123v-0.15l-45.72-61.66 4.94-94 44.89-72.72h0.36l147.51-31.91-24.42 80.72-143.57 22.35a1 1 0 0 0-0.47 1.77l111 87a0.78 0.78 0 0 0 0.2 0.11h0.09a1 1 0 0 0 0.33 0.06 1 1 0 0 0 0.37-0.08h0.12l21.53-12-5.53 3.28a1 1 0 0 0-0.27 0.24 1 1 0 0 0 0.16 1.4l128.76 101.84 17.26 42.93-1-0.46a1 1 0 0 0-1.41 0.91v97a0.88 0.88 0 0 0 0 0.23l15 63a0.68 0.68 0 0 0 0.07 0.2 1 1 0 0 0 0.24 0.29l37.65 29.73 9 125.56a1 1 0 0 0 0.73 0.89h0.27a1 1 0 0 0 0.82-0.43l5.15 70.24-18.88 37.76a1 1 0 0 0 0 0.88l15 31 0.05 0.06a0.27 0.27 0 0 0 0.07 0.08l0.07 0.06h0.39l67 5h0.06l122 2 123 3a1 1 0 0 0 0.74-0.33 1 1 0 0 0 0.25-0.79l-2-17v-0.34l-0.06-0.08v-0.06l-26-34a0.94 0.94 0 0 0-0.4-0.31l-134.82-57.93-11.86-11.86a1 1 0 0 0-0.91-0.27l-22.78 4.74 3-200.75-12-131a1.34 1.34 0 0 0-0.07-0.27l-31-78.88-8-61.88a1 1 0 0 0-0.22-0.52l-40.86-48.82-23.94-90.79v-0.09l8.57-4.78a1 1 0 0 0 0.3-1.48l-140-183-0.07-0.07-0.06-0.08-98-86-0.17-0.11-45-23a1 1 0 0 0-1.08 0.11l-48.79 39.11-59.38 2 81.38-57.52a1 1 0 0 0 0.41-0.88 1 1 0 0 0-1.06-0.93l-143.08 9.67 49.66-25.78 80.55-4.9a1 1 0 0 0 0.49-1.83l-175.66-114.48 38.11-24.62 143.37 112.72a1 1 0 0 0 0.62 0.22 1 1 0 0 0 0.41-0.09 1 1 0 0 0 0.59-0.86l9.66-168 11.3-86.43 38.29-67.2 31.35 19.59 55.84 90.41 44 103.93a1 1 0 0 0 0.1 0.17l138.6 202.57 21 55.22v0.08a0.54 0.54 0 0 0 0.07 0.13l0.11 0.13 0.06 0.07 31 26.5h0.07l60.69 38 15.7 13h0.12l0.12 0.06h0.09a1.64 1.64 0 0 0 0.62 0.06l0.24-0.14 12-10.75a1 1 0 0 0 0.27-1.08l-5.5-15.5v-0.26l-0.09-0.09-40.43-37.57-13.74-19.71 67 62.35-9.2 44.06a0.92 0.92 0 0 0 0 0.52l-4.39 3.12a1 1 0 0 0-0.42 0.78 1 1 0 0 0 0.36 0.8l1.44 1.2-2.54 19.15a0.76 0.76 0 0 0 0 0.15 1 1 0 0 0 1 1l15.5-0.25a1.19 1.19 0 0 0 0.42-0.11l0.92 1.81a1 1 0 0 0 0.74 0.53h0.15a1 1 0 0 0 0.71-0.3l16.56-16.81 15 10.35a1.06 1.06 0 0 0 0.57 0.17 0.8 0.8 0 0 0 0.4-0.08 1 1 0 0 0 0.59-0.76l10-64.67v-0.27a0.43 0.43 0 0 0 0-0.16v-0.12a0.38 0.38 0 0 0-0.09-0.13 0.11 0.11 0 0 0 0-0.08l-66.67-74-0.06-0.06-73.79-64.49-89.28-263.08a1.51 1.51 0 0 0-0.15-0.28l-46.58-60.65-49.3-81.28a1 1 0 0 0-0.68-0.45l9.13-7.6 0.1-0.12a0.66 0.66 0 0 0 0.12-0.17 0.19 0.19 0 0 0 0.05-0.13 0.74 0.74 0 0 0 0-0.21 0.33 0.33 0 0 0 0-0.14 0.81 0.81 0 0 0 0-0.22v-0.04l-15.33-48a2.56 2.56 0 0 0-0.11-0.24l-53.33-82-45.33-69.34a1 1 0 0 0-0.53-0.4l-137.81-45.4-16-7.67 5.87-52.22 24.36-19.73v-0.05a1.56 1.56 0 0 0 0.16-0.2v-0.09a0.9 0.9 0 0 0 0.08-0.23v-0.06l8-56.66a1 1 0 0 0-0.47-1l-12-7.33h-0.52a0.66 0.66 0 0 0-0.28 0 0.85 0.85 0 0 0-0.26 0.11l-8.55 5.86 0.75-2.78v-0.07a0.48 0.48 0 0 0 0-0.17l1.33-97.33a1 1 0 0 0-0.45-0.84l-12.39-8.26-2.51-16.39a1 1 0 0 0-0.51-0.74l-92.83-49.72-0.08-0.37v-0.22l-0.08-0.14-0.05-0.09-0.11-0.09-0.06-0.05h-0.89l-0.13 0.06-0.09 0.07-0.22-0.12a1 1 0 0 0-1 0.06 1 1 0 0 0-0.3 1.38l-13.48 11.88-72 25.28a1 1 0 0 0-0.57 0.52l-31.34 66a1.59 1.59 0 0 0-0.07 0.2v0.06l-5.19 40.22v0.08a1 1 0 0 0-0.13 0.73v0.3a1 1 0 0 0 0.17 0.69l10.5 50.93 6 54.26v0.13a0.48 0.48 0 0 0 0 0.17l17.17 38.61 1.12 2.72-48.58 20.46-107.24 65.28-68 24.66h-0.09l-0.13 0.07a1.07 1.07 0 0 0-0.16 0.14l-0.07 0.06-112.11 144.01a1 1 0 0 0 0 1.19l2.31 3.31-57.42 86.13a0.42 0.42 0 0 0-0.06 0.14v0.08l-13.14 36.26-3.34-0.46a1 1 0 0 0-1.12 0.86l-9.68 69.49-1.41-0.16a1 1 0 0 0-0.77 0.25 1 1 0 0 0-0.33 0.74v17.63l-10.86 77.54a1 1 0 0 0 0.77 1.11h0.22a1 1 0 0 0 1-0.69l8.67-26.56-0.49 184.15-5.54 32.39-0.6-0.19a1 1 0 0 0-1.12 1.52l1.19 1.76-2.66 15.54-33.9 51.72a1.05 1.05 0 0 0-0.7 0 1 1 0 0 0-0.62 0.71l-0.47 2-2.38 3.63v0.16l-15.55 42.13a1 1 0 0 0-0.08 0.69zm33.47-14.64 16.93 26.07-13.8 28.45zm-0.2-4 14.76 3.65 10.81 9-7.42 15.28zm27.34 14.13-3.91 21.92-3.8-5.84 7.6-16.17zm-8.14-9.39 9.11 2.25-1.84 3.81zm-3.63-3-14.63-12.17 4-5.62 0.06-0.13 35.24 10.83 7.1 7.26 4.9 15.27-17.43-10.46a1 1 0 0 0-1.5 0.67l-1.49 7.88-2.41-2 1.23-6.84v-0.1a0.33 0.33 0 0 0 0-0.14 0.66 0.66 0 0 0-0.06-0.27v-0.09a1.18 1.18 0 0 0-0.22-0.28 1 1 0 0 0-0.33-0.17h-0.06zm18.06 15.06 1.43-7.57 18.14 10.88 4.65 14.52-1.1 1.43zm21.84 20.75-17.42 21-9.5-14.62 4.7-24.87zm3.46 0.3-0.65-0.54 0.35-0.41zm-3.06-16.17 8.55 5.13-5 6zm-9.81-24-1.74-1.78 1.29 0.4zm1.79-0.67 33 10.13-8 18-23.67-24.27zm-6.45-4.1-27-27.58 19.53-5.46 10.94 34.11zm-41.88-4.61-11.71-9.73 14 4.29 1.09 0.81zm-12.3-16.28 9.73 7.21-10.91-3.35 0.73-3.16zm11.17 18-2.54 3.59-8.08-12.5zm26.9-88.6 14.21 4.31-8 4.89-6.17-9.13zm6.52-225.24 19.45-59.61 11.33 1.22 9.22 131.39-40.52 111.65zm46.2 132 7.69-18.26-4.71 60.47zm1.8 53.93-25.65 2.64 22.13-52.5zm-2.11-58.34-3.83-54.3 19.1-52.64-6.76 86.74zm-18.64-264.4 39.12-2.72 0.41 0.32-7.32 4a1.11 1.11 0 0 0-0.36 0.32 1 1 0 0 0 0.27 1.39l13.12 9-0.68 8.73-32.58-4.42 2.77-8.42a1 1 0 0 0-0.1-0.84 1 1 0 0 0-0.71-0.46l-13.57-1.85zm0.46 7.05 12 1.63-2.5 7.66-8.89-1.2zm-1.42 7.81-12.92-1.75 2.76-7.64 9.59 1.31zm4.1 29 8.26-25.29 33 4.49-4.47 57.3-34.53-3.72zm0.19 32.56-10.58-1.16 8.61-26.37zm-0.65-37.86-1.51-21.36 8.12 1.11zm43.28-36-0.58 7.44-10.82-7.44 6.67-3.62zm-0.91-5.68 1.36-0.1-0.15 1.9-1.94-1.41zm3.45-1.1a1 1 0 0 0-0.21-0.66l21.07-11.42-3.73 29.1-17.47-12.73zm27.13 29.48-10.07-1.37-18.28-12.58 0.57-7.3zm-14.46-1.95-14.66-2 0.59-7.69zm3.63 2.5 14.08 9.7-35 45.25-2-0.21 4.47-57.25zm-22.38 56.81-0.78 1 0.09-1.08zm2.29 0.25 13.53 1.46-15 41.44-4.82-0.9 2.94-37.62zm-8.26 41.63-20.91-3.91 23.59-30.46zm6.1 3.12-5.53 15.25 1.25-16zm2 0.46 29.24 5.46-44.22 104.85 6.86-88zm-30.15 77-8.92-126.52 34.27 3.74-0.33 4.17-26.46 34.16a1 1 0 0 0-0.14 1 1 1 0 0 0 0.75 0.63l22.73 4.25-1.83 23.45zm-41.65-74.83 0.1-38.5 2.28-16.41 15 1.62zm-2-23.82-0.08 30-7.1 21.76zm2.33-31.3-0.25 1.79v-1.82zm13.63-70-3 8.4a1 1 0 0 0 0.81 1.33l14.57 2 1.88 26.69-10.22 31.46-15.37-1.65 9.5-68.46zm2.77-1.62 12.53-34.58 34.6 26.48-37.86 2.64a1 1 0 0 0-0.68 0.34 1 1 0 0 0-0.25 0.73l0.4 5.59zm69.88-121.16 19.38 27.7-9.11 71.15-25.2 13.65-3.09 0.21-38.42-28zm701.87 71.9-34.94-20 75.7-29 33.36-12.77zm-227.48-206.43a1 1 0 0 0 0.6 1.2 1 1 0 0 0 0.39 0.08 1 1 0 0 0 0.89-0.54l52.52-100.5 6.9 54.56-21.9 51.31-145.9 15.11-79.5-122.42 75.87 54 0.12 0.06 0.1 0.06h0.15l50 8.5h0.17a1 1 0 0 0 0.51-0.14l44.5-26.17a0.81 0.81 0 0 0 0.27-0.25l37.31-49.33a1.21 1.21 0 0 0 0.18-0.38l11.09-47.86 2.92 51.5-37.19 111.15zm20.87-249a1 1 0 0 0-0.55 0.8l5.23 30.87-45.5 9.66-32.13-9.32a1 1 0 0 0-1 0.25l-20.42 20.42-15.58 3.31h-0.1l-0.17 0.09-0.11 0.1a0.53 0.53 0 0 0-0.12 0.14 0.83 0.83 0 0 0-0.08 0.12 1.34 1.34 0 0 0-0.07 0.18v0.34a0.14 0.14 0 0 1 0 0.09l8 50.5a0.9 0.9 0 0 0 0.08 0.23l-20.2 4.06 0.89-67.32v-0.34a0.57 0.57 0 0 0-0.08-0.13v-0.09a1 1 0 0 0-0.26-0.19h-0.07a0.67 0.67 0 0 0-0.18-0.07l-34.79-7.61a1 1 0 0 0-0.75 0.13l-16.5 10.5a1 1 0 0 0 0.54 1.85h0.06l14.26-0.8 12.31 21.31a1 1 0 0 0 0.74 0.49h0.13a1 1 0 0 0 0.71-0.3l21.52-21.61-10.78 59.49a1 1 0 0 0 0.49 1l10.44 5.9 15.63 8.34a1 1 0 0 0 0.47 0.12 1 1 0 0 0 0.58-0.19l22-15.63 67.05 37.69-18.3 38.07-91.63 17.09 14.26-19.91 24.51-0.65a1.06 1.06 0 0 0 0.35-0.09h0.07a1.29 1.29 0 0 0 0.3-0.22l28-32.5v-0.06l0.09-0.14a0.44 0.44 0 0 0 0.06-0.16v-0.49a0.7 0.7 0 0 0-0.06-0.19 0.83 0.83 0 0 0-0.07-0.13v-0.06l-0.2-0.2-0.22-0.13h-0.07l-36-12.5a1.18 1.18 0 0 0-0.42-0.05l-32.5 3-0.19 0.06h-0.15l-0.14 0.11-0.13 0.1-0.1 0.17-0.08 0.13a1.13 1.13 0 0 0 0 0.26v0.07a1 1 0 0 0 0.06 0.34l0.06 0.12a0.77 0.77 0 0 0 0.1 0.18l0.24 0.22 26.5 17a1 1 0 0 0 0.54 0.16 1.22 1.22 0 0 0 0.27 0l30.5-8.5a1 1 0 0 0 0.57-0.43l6.61 0.91-36 13.49-27.75-10.44a1 1 0 0 0-1.35 0.92l-0.48 24.58-6.28 3.23-15.15-71.78a0.43 0.43 0 0 0 0-0.16v-0.09a1 1 0 0 0-0.19-0.26l-26.31-24.91-0.25-52.09 50.48 5.8h0.11a1 1 0 0 0 0.93-0.61 1 1 0 0 0-0.53-1.31l-51.3-22.24a1.05 1.05 0 0 0-0.78 0 1 1 0 0 0-0.55 0.56l-4.56 11.56-4.43-57.15a0.74 0.74 0 0 0 0-0.21l9.1-16.79 3-3.23 67.5 20.77a0.71 0.71 0 0 0 0.29 0 0.81 0.81 0 0 0 0.31-0.05l62.93-20.53 66.95 35.8a1.14 1.14 0 0 0 0.26 0.09l12.38 20.58-32.11-1.89a1 1 0 0 0-0.8 0.34zm1.69-93.54-18.76-19.48 6-11.91 6.14 4.1zm-4.16-25.65 24.82 16.57 5.55 36.29-23.42-24.32zm-7.71-7.51 2.55-5.11 2 8.14zm-49.52-30.62 46.94 31.3-5.75 11.49zm40.28 44.76-6.45 12.68-31-51.58zm22.12 22.94 15.25 62.46-42.52-70.69 6.62-13.23zm15.84 67.31-63.82-34.12 19.65-39.29zm-208.24-43.73 92.75-80.08-82.43 88.1zm14.41 8.27 100.27-108.79-35.65 106.94zm-7.14 4.78-5.31-9 7.18 5.59-1.79 3.31zm109.56-113.98 25 109.9-60.7-2.55zm-27.7 109.68-19.65-0.09 10.27-0.3zm47.74 2.25-57.12 18.61-62.56-19.25zm-126.35 81.23a1 1 0 0 0-0.32-0.73 1 1 0 0 0-0.75-0.26l-4.2 0.31 5.13-13.2 44.16 19.15-44-5.06zm89.84 150.19-10.53-15.41 35.14-13.17zm-2 0.69-21.15 0.56 11-15.37zm-23.64 0.58-14 0.37v-2.25l24.28-12.51zm-14-4.15 0.43-22.09 24.57 9.21zm-2.09 4.58-2.57 0.07 2.59-1.34zm14.61 1.61-13 18.08 0.35-17.74zm-21.4 0.58 6.75-0.18-0.32 16zm-3.36-11.36-20.36-49.27 2.5-3.57 5.16-7.37zm63.4-24.09-25.55 7.12-22.2-14.24zm-43.49-8.59 23.66-2.19 26.2 9.1zm79.94 49.15-39.26 23.09-44.12-7.5zm6.45-64.06 14.41 19.54-61.36-34.48 34.93-1.34zm-9.95-16.88 56.86-23.2-29.21 60.75-24.92-33.79zm55.9-16.54-10.57 45.61-31.18 41.21 14.44-30 0.06-0.06a0.86 0.86 0 0 0 0.15-0.22zm-111.62 18.48-6.83-43 20.47 41.36zm10.76 1.05-18.18 12.95-12.61-6.73zm-35.39-61.65-21 21.11-11.15-19.3zm-44.92 0.52 12.92-8.22 26.7 5.85-28.93 1.09a1 1 0 0 0-0.84 0.51 2 2 0 0 0-0.08 0.22zm37.27 60.42 9.08-50.12-0.72 54.84zm92.26-63.28 13.12 3.8-69.56 11.29 4-4zm-49.86 8.49 17.83-17.83 28 8.12zm54-9.44 35.75-7.59-21.88 11.62h-0.08zm8.78 6.77-38.86 20.63-29.32-9.51zm-77.91 7.92 8.91-1.89-3.61 3.62zm118.52 21.5-59.6 24.29-38.19 1.47-22.65-45.72 40.74 13.27a0.81 0.81 0 0 0 0.31 0 1 1 0 0 0 0.47-0.12l71.33-37.88zm-301.69 174.58-178.25 160.75 81.67-178.9zm486.83 48.62 15.56-31.33-21.06 75.46-24 15.21zm-26.79 130.38 22.62-83.58 31.24 34.34zm-20.32-184.5-4.19-30.13 69.37 43.39-38.52 77.54-11 22.08zm-130 8.62a1 1 0 0 0-0.11-1 1 1 0 0 0-0.24-0.23l21.39-50.11 18.25 2 82.78 9-144.89 129.58-26 23.25 48.86-112.49zm14.34-108.43 105.26 65.84-98.29-10.71zm79.73 217.28-142.89 6.3 172.54-154.15 20.26 145.7zm-240.89-93.13 143.41-14.81-48.41 113.62zm-342.28 145.64 179.21-161.62-54 150.3-0.44-0.17h-0.59l-0.17 0.06h-0.08l-66.51 36zm181.28-161.48 26.59 121.34a1 1 0 0 0 0.54 0.68l-49.72 40.82-31.64-12zm-29.61 171.06 7.35-6 240 90.79-177.25-29.67zm66 54.43-109.78-18.37 42.28-34.71zm-67.55-55.66-20-15.72 26.79 10.14zm105.46-277.55-46.72 224-26.24-119.67zm83 122.79-128.58 105.62 47.78-229.06 25.5 79.07a0.92 0.92 0 0 0 0.33 0.47zm-53.53-45.27-24.26-75.21 75.2 115.84zm54.63 47 75.07 241.69-5.58-0.93-248.31-93.95zm-232 187.87 18.4-51.17 22.5 17.62zm16.7-52.35-19.45 54.09-22.82-9.78zm-44.24 43.47-20.43-8.76 59.57-32.27zm613.46-71.49-31-34.1 22.33-80zm-58.32-15.97 24.67-15.65-21.67 80zm-69.3 117.22-125.86-108.23 192.33-8.47zm-1.83 1.1-147.15 32-74.47-239.75 94.4 98.29zm-136 36.67 106.39 18-22.64 14.63zm81.13 34.24-108 69.77-175.83-138.28 185.75 31.42zm-430.55-100.21-15.75 16.51-20.88-17.23 15.44-8.36zm-38.32-2.17-36.13-29.74 50.94 21.83zm-1.85 1.15-53.15 28.79 8.67-67.54 3.36 4.8 0.07 0.08 0.09 0.09zm-64.4-70.7 27.21-40.83-8.64 67.32zm-2.68-3.82 19.73-25.36-18.29 27.42zm106.28-136.75-79.72 174.63-3.63-5.17 9.47-73.78a1 1 0 0 0-0.1-0.56zm8.24-7.67 63.85-23.16 29.43 40.69zm168-86.36-72.46 103.61-29.88-41.32zm51.67-22.49 29.83 73.38-75.91-54zm-14.39-39.65 22.27 21.16-7.27 10.42-0.5 0.71zm-4.08-23.06-3.82-34.33 3.66 0.42zm-7.19-51.29-7.35-35.42 2.84-5.25 1.15-1.84zm-6.73-40.79 4.26-33 7.13 12.07-10.86 20zm102.66-124.76-96.06 84.73 29.06-61.22zm21.8-10.87 7.38 7.67 36.16 60.19-19.38 38.77zm1.59-1.22 60.34 32.3-3.35 6.7-51.54-34.41a1 1 0 0 0-1 0zm90.82 61.53-25.12-16.71-2.75-11.09 25.68 13.71zm13.13 11.13-1.28 93.28-12.36-20.54-16-65.36 23.21 24.12a1 1 0 0 0 1.17 0.2 1 1 0 0 0 0.54-1l-5.75-37.6zm-2.72 101.56-12.24 8.4a1 1 0 0 0-0.42 0.65l-6.6 38.73a1 1 0 0 0 0 0.25v0.17l3.41 10.73-2.24 8.3-12.36-72.93 31.52 1.86zm-14.71 62.46 4 12.63-6.43-3.68zm29.26-6.61-25.66-7 6.4-23.75 15.57-28.36zm-27.59-7.58-3.83-1 8.09-14.75zm-3.34-6 5.58-32.35 10-6.83-5.78 21.3zm2.82 8-1.38 5.11-1.91-6zm22.28-53.8-11.19 20.53 4.23-15.68zm13.8 4.65-6.54 46.28-3.26-52.27zm-9.08 56.6-22 17.85-5.3-16.65 2.19-8.1zm-23.58 20.06-4.6 40.94-2.56-45zm10.39 61.28-47.73 91.22 33-98.28zm181.39 110.94-68.12-42.9-104.28-64.91 129.77 42.63zm4.65 7.15 50.74 78-41.89 38.3zm66.13 125.53-110.81 42.42 53.39-48.4 42.85-39.6zm-8.43 10v122.49l-97.42-80.59 27.26 15.58a1 1 0 0 0 0.5 0.13 1 1 0 0 0 0.64-0.23zm73.91 333.76-22-246.12 124.82 297.41-73.51-138.93a1 1 0 0 0-1.87 0.63l28.52 180.87zm160.5 193.82-23.49-7.76 14.85-16.38zm59.57 26.83a0.86 0.86 0 0 0 0-0.39l-1.84-15.42 33.27 6.16-13.29 23.27-13.83 24.19-2.22-19.3 0.4-0.56a1 1 0 0 0-0.12-1.28 0.92 0.92 0 0 0-0.52-0.26zm-72.88-71 100.42 58.58-30.12-5.58zm-35.15-22.09 1.21-49.69 18.16 60.32zm18.34 12.35-18.76 4.83 0.36-14.92zm0.64 1.91-20.18 35 0.73-30zm-50.2 12.8 28.7-7.31-0.7 31.25zm-0.44-1.87 13.41-32.93 16.18 8.88-0.4 16.53zm14.17-34.77 16.68-41-1.21 49.47zm-1.73-1-33-18.07 50.62-25.24zm-34.33-19.59-28.18-178.73 80.69 152.49zm-82.9-347.83 21.75 243.15-69.1-201.56zm19 241.29-117.77-197.73 49.5-1.22zm-19.5-243.59-7.82 6.87-39.23 34.45v-118.79zm127.21 297.59-122-290.7 41.87 54.43zm12.1 29.65 69.58 60.81-50.15 3.76zm133.63 131.53-111.69-65.12 39.68-3 10-0.75zm-5.67 67-17.27-11.9 26.2-45.84zm-17.37-9.5-20.67 1 16.2-23 2.31 20.1v0.06a0.29 0.29 0 0 0 0 0.13 1.08 1.08 0 0 0 0.08 0.19l0.07 0.11a0.91 0.91 0 0 0 0.17 0.17zm-7.38-21.46-15.54 22.1-4.53-3.78-1.42-2.28a1 1 0 0 0-0.51-0.41zm-13.69 24.49 20.64-1-14 14.18zm-1.2 2.17-1.79-2.88 0.57 0.47zm-6.81-7.06 0.13 0.1 10.23 16.45-12.58 0.2zm3.56-9.89 7.1-34 0.19 29.31zm9-40 9.53 8.87 2 17.24-11.29 8zm-60.65-59.22 68.3 51.49 1.56 13.57-9.2-8.56v-0.64a1 1 0 0 0-0.9-1 1 1 0 0 0-0.66 0.17zm2.82 14.56-9.82 3-29 8.85 21.32-36.94zm38.07 35.91-25.81-8.53-8.34-23.3zm-25-6.13 26.58 8.79-19.32 11.51zm33.35 23.73-9.08 8.14 1-4.22 3.88-15.65zm-24.92-1.81 19-11.3-5.54 22.38zm-3.61-2.51-56.45-35.31 36.93-11.3-14.56 16.06a1 1 0 0 0-0.23 0.93 1 1 0 0 0 0.66 0.7l26.42 8.73zm-108.94-115.28 32.42 17.79-13.19 32.64zm-178-295.83 116.23 194.89 0.37 1.07a1 1 0 0 0 0.64 0.63l41.83 70.22-120.68-176.31zm-58.55-99 101.27 83.76-48.76 1.25zm-34.71-25 26.49-47.45 3.08 65.93zm-41.83 69.61-11 84-39.88-15.53 23.58-15.23a1 1 0 0 0 0.44-1 1 1 0 0 0-0.81-0.78l-117.29-19.83zm-161.96 140.23 108.64-70.2 42.2 16-9.56 165.36zm132.21 140.31-75 4.56a1 1 0 0 0-0.53-0.65l-160.4-77.12 62.07-40.1zm-236.82-75 16.5-68.54 44.59 29.06zm158.45 79.77-180.3 11 21.07-87.56zm9.94 77.53-165.33 5.53 102.21-53 144.11-9.75zm-204.68 8.88 30.58-1-18.17 9.43zm10.31 9.48-68.13 35.31-47.49-41.24 101.87-3.44zm24.92-10.64 166.51-5.62-103.56 73.2-83.84-56.75zm-38.08-0.72-60-40.65 199.45-13.49-101.86 52.88zm268-7-200 160.28-121.25-105.13 68.36-35.48 85.31 57.74a0.94 0.94 0 0 0 0.56 0.18 1 1 0 0 0 0.58-0.19l106.65-75.38zm-204.17 159.33-202.19-60 83.2-43.19zm207.48-159.46 35.25-1.19-218.53 148.01zm91.56-17.27-263.27 158.67 210.89-142.92a1 1 0 0 0-0.61-1.82l-36 1.21 46.2-37zm98 85.42-386.92 91 290.91-175.33zm59.56 100.83-92.84 20.06 35.67-117.91zm96 177.71-91.4-50.47 36.25-20.24 32-16.88zm32.14 235.07 2.47-0.78-106.47 98.8-14.39-60.43zm-65.35 133.1 36.17 46.29-32.29-3.47a1 1 0 0 0-0.8 0.28zm287.81 238.18-157.09-79 28.71 5.59zm-235-23.91 32 32.9-71.41 14.1zm-35.46-20.29 101.22-34.36-65.93 52zm104.06-34.06-35 86.08-32.16-33.11zm78.14 107.47-111.4-20.35 35.84-88.15zm2.72 0.37-75.46-108.31 190.43 95.7zm-187.08-64.06 0.48-8.32 35.51 17.75-13.08 15.58-26.17 31.15zm2.17-11.8 63.74-88 41 52.42zm65-89.68 33.2-45.82a1 1 0 0 0-0.7-1.58l-53.61-5.79 64.46-91-2.9 195.91zm41.37-169.81-18-98.78 8.22-7.66zm-43.51-193.14-135.27-153.83 89 49.13zm-0.27 8.62-64 78.06-15-32.61-1.88-4.07zm-66.79 76.68-76.21-58.3 60.07 23.33zm-78.3-61.23 143.49-16.88-80.65 41.26zm164 60.12-80.9 3.27 65.26-79.65zm0.38 2 2 9.61-29.57 27.5-52.69-33.86zm-45.76 73.83 18.34-33.44 53.45 88.44-67.39 22.1-57 18.71zm48.33-61.4 22.83 111.47-51.58-85.34zm2.31-2.13 5.5 30.28-6.09-29.75zm20 120.92-65.21 92.07-20-2.17-38.51-49.29zm-22.87-131.3 10.83-0.44-9.17 8.54zm-20.18 275.22-29.55-37.83 8.39-11.86 53 5.74zm-30.85-39.5-9.6-12.29 17 1.84zm-1.17 1.7-38.86 54.87-5.34-72.73 33 3.57zm-86.82-96 105.61-98-69.41 126.52zm97.5-109.48-51.26-23.21 7.29-5.07zm-127.92-95.69 4.18-95.61 144.5 78.16zm4.34-97.78 3.55-81.23 0.16-0.1 139.45 158.66zm-2-1.08-69.88-37.77 11.27-6.66 62.06-34.6zm147.66 75.29-43.33-98.17 36.28 43.35zm5.2 17.89 26.25 66.89-12.45 0.51zm69.71 406.23-27.92-5.43 18.61-3.87zm160.22 90.28-141.4-80.8 118.56 50.94zm-102.87 16.72 105.79-12.25 1.75 14.87zm-25.65-0.54-109.15-1.79 8.06-17.89zm-170.25-6.26 57.53-11.36 9.33-1.84-2.13 4.74-5.79 12.86zm-21.36-30.59 16.61-33.21-3.5 60.31zm13.54-111 39.92-56.36 29.54 37.81-64.31 88.74zm-62.14-311.77 20.6 51.16a1 1 0 0 0 0.64 0.58 0.94 0.94 0 0 0 0.86-0.13l36.24-25.22 62.4 28.23-108.63 34.49-13.58 4.31v-94.08zm21.91 49.22-19.31-48 53.58 24.19zm-20.31-50.71-16.82-41.74 30.38 23.24 50.63 38.72-7.7 5.35zm-146.33-146.62 58.72-34.72 71.79 38.8-4.18 95.8zm12.86-101.21-32.19 106.4-108-84.68zm2.22-0.29 65.65-10.17-97.1 114.24zm25.06-83.08 95.25-20.61a1 1 0 0 0 0.7-0.57 1 1 0 0 0 0-0.91l-51-87.12 129.54 169.33-41.12 22.92-37.46 19.81-0.08-0.09a0.87 0.87 0 0 0-0.23-0.19h-0.07a0.83 0.83 0 0 0-0.22-0.08h-0.41a1.36 1.36 0 0 0-0.28 0.11l-77 45a1.26 1.26 0 0 0-0.24 0.22l-71.91 40.08 98.42-115.8a1 1 0 0 0-0.91-1.63l-67.36 10.43zm-146.11 29.61 180.3-149.27-35.7 118zm-1.12-1.68 30.27-49a1 1 0 0 0 0.14-0.68 1 1 0 0 0-1.14-0.84l-203.47 20.15-205-24.32 167.53-1.83h0.2l390.84-92zm-49 75.41-32.54-6.68 20.55-21.55a1 1 0 0 0 0.18-1.12 1 1 0 0 0-1-0.57l-96.67 7.46-7.05-1.44a1 1 0 0 0-1.07 0.49 1 1 0 0 0-0.11 0.28l-22.49-13.83 131.84-53a1 1 0 0 0-0.25-1.92l-107.43-12.75 192.46-19.06zm-12.7-90.28-129.59 52.13-89.36-55 106.36-10.54zm-106.49 68.69-72.9 5.63 49.61-20zm104-6.1-19.61 20.58-67.51-13.85zm14.08 29.51-20.92 33.89-32.09-19.74 20-20.93zm-54.71 13.07-56.69-34.86-0.21-0.23 3.18-0.24 73.11 15zm-1.43 1.56-10.6 11.12-39.41-42zm-12 12.46-127.95 134.18-44.65-159.18 43.6-17.53 82-6.33 2.46 1.51zm-175-26.08-3.61 1.45 3.54-1.71zm0.55 1.93 42.26 150.68-70.14-139.46zm-39.43-11.74 30.77-2.38 7.17 10.11-16.57 8-10.82 5.23zm33.1-2.58 45.15-3.48-37.51 15.09-0.34-1.2a0.55 0.55 0 0 0-0.08-0.15 0.46 0.46 0 0 0-0.07-0.16zm182.15 40 62.09 66-16.79 66.84-172.72 0.82zm-266.17-155 80.35 113.32-30.65 2.37zm-0.32-3.94 199.87 23.72-100.28 9.93a1 1 0 0 0-0.42 1.85l90.62 55.73-54.1 21.78-52.67 4.07zm333.44 133.89-4.65 88.37-60.91-64.73 11-11.51 33.31 20.49a1 1 0 0 0 1.37-0.33zm40.89 152.65-77.86 74 6.93-27.51 43.93-39.64a1 1 0 0 0 0.33-0.74 1 1 0 0 0-1-1l-32.87 0.15 16.37-64.85zm-30.24 7.13-39.76 35.89 9-35.74zm-234.12 131.14 44.27-44.27-18.06 115-23.65-43.35zm0.13 23-8.15-15 6.18-6.18zm-6.8 281.74 16.08-0.91 51.71 49.72a1 1 0 0 0 0.69 0.28 1 1 0 0 0 0.7-0.34l49.63-55.46 15.36-0.87-3.5 23.24-91.84 68.88zm260.49 68.36-24.43-27.9 6.4-30.17a1 1 0 0 0-0.16-0.77l-1.94-2.8 57.52-22.92-29.81 93.29zm-11-185.68 19.69 22-58.07-35.55 21-5.92zm-230.18 114.2 61-54.35 37.18 47.68zm113.18 19.88 14-10.47 13.45 30.29-32.3 12.88zm-7 33.6-80.38 32 85.18-63.89zm48.18 17 6.66 15-1.16 10.48zm-9.18-180.16 2.89 20-10.84-0.09-7-3.59 8.93-58.63 5.11 35.53-9.36 2.64a1.0006 1.0006 0 0 0 0.07 2zm-5.75-3.3 5.18-1.46 0.37 2.62zm10 31.63 4.44 30.83-25.19-6.9-3.15-3.6 4-26.88 7.29 0.06zm-8.16-6.48 7.19 0.06 0.57 3.95zm57.27 76.53-10.52 0.59-5.13-21.69 4.37-3.28 14.14 20.42zm4.07-2.21 1.32 1.9-2.82 0.16zm-16.53-23.82-3.74 2.81-1.55-6.57 3.32 0.91zm1-2 1.23 0.34-0.66 0.49zm-21.79-6-8 5.3-1.13-7.81zm10.81 12.71 1-9.49 1.47 0.4 2 8.48-4.86 3.64zm1.21-11.45 0.22-2 0.51 2.14zm8.58 33.51-12.38 0.7 1.87-17 5.66-4.25zm-22.65-7.2 9.94-7.46-1.7 15.42-1.22 0.07zm-3.33-3.83-2.34-16.27 10.3-6.79 7.24 2-1.63 14.71-11.56 8.67zm-2.42-2.75-7.45-8.53 5.68-3.75zm-8.78-10-17.78-20.35 23.1 6.32 1.38 9.61zm21.38-11.7 5.82-3.84-0.58 5.27zm9.19-0.92 3 4.25-2.08-0.56zm34.22 14.92-11 15.15-13.78-19.91 2-1.47zm2 0.55 58.4 16-67.8 3.83-2.42-3.49zm-29.18 40.32 3.07-4.24 2.52 10.64zm-1.35-1.54-11.87-13.71 0.16-1.45 13.08-0.74 2.49 10.56zm-17.79 21.78-5.22-36.26 7.42-0.42 1.65 1.89-3.84 34.78zm-16.1-37.65 7.82-5.86 0.77 5.38zm9.59-7.26 0.91-0.68 6.09 7-6 0.34zm-35.62-42.51zm-23.34-29.75 25.71 0.21-3.75 24.92zm49.46 7.81 54.36 28.08-15.52 11.64-5-1.38-7.31-10.55a0.86 0.86 0 0 0-0.13-0.14l-0.06-0.06-0.18-0.07h-0.75l-9.06 6-11.71-3.2zm45.74 71.1-6.53 9-2-8.53zm-31 42.92-15 20.69-3.32-15.41 18-7.18zm-18.76 3.34-7.93-36.71 9-6.77 11.77-0.66 5.3 36.9zm-8.42-38.86-0.87-4 6.76-0.38zm-1.7 1.36-9 6.71-5-11.23 12.81-0.72zm0.39-7.32-3.16-14.61 14.11-9.29 9.67 11.06 0.56 3.94-11.09 8.32zm-123.54-81 70 0.56 9.41 21.19zm72.14 0.56 13 0.1 24.24 27.74-0.18 1.5-27.3-7.47zm-0.83-2-12.43-28 24.55 28.1zm-11.82-30.35 54.74 28.28-0.36 2.39-27.77-0.22zm56.62 29.23 2.84 1.46h-3.06zm17.27-17.95 97.86 20.34-95-0.77zm104.92 22.47-44.57 33.43-56.48-29.26-0.73-5.07zm-1.71 3.75-27.29 37.68-13.59-7zm-28.43 39.3-7.23 10-22-6 15-11.29zm1.75 0.94 47.46 24.51-54.44-14.86zm50.26 29.36-54.2 21.6-12.36-17.84zm-56.11 22.36-23.23 9.26-3.71-15.68 8.49-11.73 5.66-0.32zm1.19 1.62 1.95 2.82-6 28.28-19.13-21.8zm-26.59 8.48-19 7.59 11.64-16.03zm-22.47 9-0.78 0.31 3.53-31.9 3.54 4.06 7.47 8.54zm-7.54 61.16 4 8.89-5.21 2.5zm-10.3-28.26-0.81-3.75 14.82-20.47 0.07 0.45-4.91 44.42zm-3.93-9-5-11.14 2.34-0.93zm-5.81-13-13.67-30.78 8.59-6.44 7.8 36.14zm-28.88-21.9 3.26-21.64 4-0.23 5.48 12.34zm-16.94-20.5-47.59 53.2-49.62-47.71zm20.54-3.16 0.72-4.82 2.07 4.66zm1.28-8.54 6.21-41.21 2.73 0.74 19.58 22.42-14.43 9.51a1 1 0 0 0-0.43 1l3.23 15-13.24 0.75zm-1.56-3.4-20.18-45.45 26 7.11zm-106.81-72.27 59-30.59 13.84 31.17zm62.46-32.38 65.27-33.86-9.45 62.7zm67.84-33.69 46.42 28.41-40.66 11.49zm48.76 29.9 60.53 37-102.77-21.4-0.52-3.6zm89.22 110.12-53.42-27.59 29.85-41.23zm-63.81 61-6.51 30.48-12.3-52zm-7.58 34.53-30.6 14.6-8.09-56.19 0.43-3.89 2.6-3.59 22-8.75 11.07 46.78zm-32.45 15.49-6.18 3-5.32-12 4.43-40.13zm0.33 2.09 3.3 22.91-9-20.19zm3.85 29.12-81.43 6.7 52.32-72.27 0.79 1.78 8.83 40.88a0.85 0.85 0 0 0 0.09 0.22l0.06 0.08a1 1 0 0 0 0.13 0.16l0.08 0.07 0.15 0.07a0.24 0.24 0 0 0 0.11 0.06 1.06 1.06 0 0 0 0.31 0h0.06a1 1 0 0 0 0.37-0.09l6.78-3.25zm-82 3.89 11.21-74.4 33.51-13.35 7.15 16.11zm-2.32 2.31-73-42.23 84.38-33.62zm-114.06-130.54 26.32-89.7 87.5 24 22.11 49.81-1.25 8.33-14 0.79v-0.3a0.49 0.49 0 0 0 0-0.17v-0.08l-0.06-0.1-39-50a1 1 0 0 0-0.7-0.38 1 1 0 0 0-0.76 0.25l-63.72 56.75zm18.61-177.58 25.49 2 3.68 17.08-26-2.29a1 1 0 0 0-0.52 1.88l30 16.23 4.37 20.32-29 29.28zm158.14-23.47-45 3.13-1.14-14.46 63.43 10.13zm37-6.64-91.42-115.72 91.43-41.83zm2 3a0.5 0.5 0 0 1 0-0.13v-156.46l55.63 148.66-55.65 8zm-1.91 0.28-10.57 1.51-67.13-99.87zm-13.11 1.24-70.28-11.24-8.32-105.7zm-156.75 16.9 32.43-9.79 12.07 8.93 14.63 14.09-57.24-4.45zm-0.19 8.62-22.58-1.76 20.85-6.29zm6.63 21.35 35.71 3.16-17.42 17.58-15.65-8.47zm0.32 11-24.22-13.11 21.81 1.92zm-0.76-13.06-3.67-17.11 57.49 4.47-15.84 16zm-6.42-29.89-8.22-38.2 39.06 28.9zm-4.24-37.67 89.55 29.54-20.88 21.18-18.2-13.47-10.27-9.88a1 1 0 0 0-1-0.24l-1.73 0.52zm67.19 52.16-0.64 0.64-5-4.8zm1.6 1.2 23.64 17.49-71.19 30.52 8.46-8.54 0.25 0.14a1 1 0 0 0 1.19-0.18l20-20 0.09-0.1a1 1 0 0 0-0.2-1.4zm-50.82 48.47-3.74-17.38 13.63 7.38zm-38.91-56.58-8.34-89.55 22.78 41.81 8.78 40.81zm-11.61-124.6-5.88-63.06 50.06 18.88zm67.75 0.35-38.9 70.62 17.41-110.9 0.23-1.43zm-19.69-43 35.86 13.71-15 27.22zm20.79 45.2 44.19 86.67-84.5-13.5zm45.29 88.88 7.82 15.35-82.91-27.36zm2.44 0.39 5.13 0.82 0.86 10.92zm2.8-114.08 71.57-64.59-7 28a1 1 0 0 0 0.46 1.11 1 1 0 0 0 0.51 0.14 1 1 0 0 0 0.69-0.28l79.68-75.75 34.91 176.49-91.54-105.17a1.12 1.12 0 0 0-0.2-0.18h-0.08l-0.21-0.07h-0.39a0.81 0.81 0 0 0-0.22 0.07zm207.54 9.76-24.53 55.66-34-171.71zm-26.21 59-34.41 44.91-55.44-148.15zm-99.24 57.16 58.77-8.39-29.38 15.11zm-51 41.38-67.22 34.88-0.8-0.42h-0.15l-0.18-0.05h-0.34a1.27 1.27 0 0 0-0.32 0.13l-0.09 0.09a1.07 1.07 0 0 0-0.16 0.14l-0.09 0.16a1 1 0 0 0-0.07 0.15 0.33 0.33 0 0 0 0 0.14v0.33a0.74 0.74 0 0 0 0 0.21l0.09 0.21-57 29.57 26-26.22h0.23l77-33a1 1 0 0 0 0.42-0.33 1 1 0 0 0-0.22-1.4l-24.81-18.36 21.12-21.31zm9.24 4 62.82 20.38-20.22 5.7zm100.83 237.25-66.71 42.54-4.2-29.16 31.86-15.26 0.1-0.07 0.14-0.1 0.11-0.12 0.09-0.14a0.44 0.44 0 0 0 0.06-0.16 0.37 0.37 0 0 0 0-0.11l7.08-33.38zm-295.49-401.69 27.22-46 5.89 63.24-7.89 7.89a1 1 0 0 0-0.17 1.19l10.8 19.72 8.82 94.58-1 0.29a1 1 0 0 0 0.21 1.95l1 0.08 6.81 73zm76.66-31.84-40.88-15.42 27.77 3.08zm43.24 16.51-32.39-12.41 37.83 2.47zm0.91 2.46 27.23 10.41 7.37 93.63 1.17 14.77-6.09-1-45.49-89.18zm-56.81-99.32 172.49-0.82-9.6 38.14-77.83 70.23zm-148.37-295.83 5.9 0.7 44.65 104zm-26-63.61 200.65 59.52-167.5 1.83-1-1.48a1 1 0 0 0-1.73 1l0.23 0.54-5.64 0.06zm-0.34-3.4 27.71-155.18a1 1 0 0 0 0.52-0.15l147.48-95.3-21 87.22a1.24 1.24 0 0 0 0 0.27 1 1 0 0 0 1 1h0.06l177.54-10.8-49.74 25.82-206.93 14a1 1 0 0 0-0.49 1.82l60.19 40.75-101.67 3.43a1 1 0 0 0-0.9 0.66 1 1 0 0 0 0.28 1.09l48.9 42.39zm28.43-157.78-0.12-1 27.08-151.87 120.2 57.73zm-41.27-322.11 114.55 19.38 178.28 140.13-38.28 24.73-46.55-30.34a1 1 0 0 0-0.92-0.09 1 1 0 0 0-0.6 0.69l-17 70.77-121.56-58.44a0.79 0.79 0 0 0-0.26-0.08 1 1 0 0 0-1.16 0.81l-26.15 146.89zm-42.27 6.18 16.16-17 3 1.27 19.6 8.4-28.94 15.39zm-67.1 66.5 0.4-5a1 1 0 0 0-0.39-0.87 1 1 0 0 0-1.4 0.18l-2.36 3-10.92-7.51 9.89 1.34h0.13a1 1 0 0 0 0.81-0.4 1 1 0 0 0-0.2-1.4l-13.53-10.37h0.12a0.9 0.9 0 0 0 0.4-0.09 1 1 0 0 0 0.6-0.79l4.13-32.2 55.12-29.86 21.4 17.65-63.55 66.61zm-1.87-1.44-0.2-0.14 0.24-0.31zm-7.75 96.37-29-5.43 15.36-42.33a1 1 0 0 0-0.09-0.87 1 1 0 0 0-0.74-0.47l-13.57-1.46 34.36-44.37 1.25 0.86zm-51.22 190.9 6.07-77.79 43.37-102.87-33.9 179.06zm-30.42 3.67a1 1 0 0 0 0.12 1 0.53 0.53 0 0 0 0.14 0.12l-20.22-1 40.45-111.56 3.79 53.75-24.32 57.69zm42.63 5.12-2.47 3.4-50 30.32-16.17-4.91 5.45-31.85zm-5.58 7.58-24 33.09-20.32-6.17zm8.5-7.44-1 0.58 0.43-0.61zm-41 55.89 42.43-3a1.006 1.006 0 1 0 0.22-2l-32-9.72 26.43-36.38 7.82-4.75a1 1 0 0 0 0.47-0.8 1 1 0 0 0-0.94-1.05l-2.47-0.12 5.07-7 7 67.87h-56.4zm36.83-4.71-35.36 2.5 7.87-10.84zm-60.39-9.7 9.5-5.77 21.38 6.49-8.45 11.64-13.45 1zm-9.78 3.63 2-11.52 4.94 7.32zm10.49 42.11-21.08 5.9a1 1 0 0 0-0.42 0.25 1 1 0 0 0 0 1.41l25.6 26.16-34.74-10.68-14.38-10.65 32.91-50.21zm78.27-19.8-29.87 67.16-34.51-10.61-11.41-35.41zm-10.08 27.57-15.19 41-2.68-0.82zm8.38 95.07 2.36-4.25a1 1 0 0 0-0.14-1.15 1 1 0 0 0-1.41-0.07l-6.34 5.85-7.61 0.53-0.3-13.16 26.85-33.24-12.11 45.39zm-13.52-15.35-0.7-30.5 27.52-2.7zm-13.26 19.25 11.68-0.82 0.14 6-15.83 14.6zm11.93 7.86 0.24 10.55-3.71 6.68-12-3zm1.72-8.85 5.22-0.36-5.12 4.72zm-11.63-1.19 9.34-11.56 0.25 10.89zm12 17.11-0.2-8.89 8.24-7.61 1.16-0.08zm-3.67 10.65 1.79-3.22 0.08 3.69zm-10.89-0.69 7.88 2-1.39 2.5zm10.45-74.38 0.58-0.06 0.75 32.71-10.55 13.02zm0.43-2 0.11-0.57v0.55zm-5.35 0.49 2.8-4.17a1.15 1.15 0 0 0 0.12-0.25 1 1 0 0 0-0.65-1.26l-2.21-0.68 24.72-66.67 11.36 69.48-28.68 2.82-0.21-9.38a1.004 1.004 0 1 0-2-0.18l-2 10zm0.38-4.14-2.55 3.81 1.52-4.12zm-33.78 50.16 2.11-8.74a1 1 0 0 0-0.46-1.1 1 1 0 0 0-1.19 0.13l-14.18 13.21-1.91-2.94 17.82-21.46 3.29 2.74a1 1 0 0 0 0.64 0.23 1 1 0 0 0 0.56-0.17 1 1 0 0 0 0.39-1.13l-1.75-5.45 6.54-7.87 0.09-0.13a1 1 0 0 0-0.34-1.37l-11.51-6.91-4.37-13.63 22 22.43a1 1 0 0 0 0.71 0.3h0.18a1 1 0 0 0 0.74-0.58l8.68-19.52 2.8 0.86-2.27 6.11a1 1 0 0 0 0.82 1.36zm-3.21 4.85-4.92 7.31-4.48-6.9 12-11.17zm-1.36 5.57-4.23 17.34-3.5 3.94-20.4-4.8-0.79-2.29 19.38-18 5.11 7.87a1 1 0 0 0 0.83 0.46 1 1 0 0 0 0.83-0.45zm-28.8 48.17 1 1-1.81-0.06zm-0.63-3.65 1 0.24-0.37 0.41zm3.19 0.78 6.51 1.61 0.88 2.53-6.13-0.19-2.44-2.61zm13.15 14.62-2.92-8.42 4.72 0.14zm2.07-10.3-5.69-0.17-0.7-2 6.52 1.6zm-4.25 9.87-7.78-8.21 4.9 0.15zm-9.47-15.91 2.78-3.13 1.45 4.17zm4.3-4.85 13.43-15.14 1.45 0.35-4.92 23.16-7.72-1.91zm14.93-16.84 0.29-0.31-0.09 0.36zm-24.59 41 0.23-11.86 4 0.13 10.73 11.46zm0.41-20.57 0.46-22.89 6.52 18.81-4.22 4.76zm2.39-23.55 18.11 4.26-12 13.49zm-1-7.8 15.91-19.16 1.76 2.71zm6.07-34.35 8.7 13.39-14.55 17.51zm-3-8.29 4.09-22.9 2.39 2-4.58 23.91zm-22.1 27.64 15.87-33.79 4.28 6.58-7.09 39.69zm-21.77-23.37 8.62 4.75 8.59 4.72-10.73 1.75zm-1.34-3.07 18.42-37.12 2.07 48.41zm17.3-44.33 2.91-4.1 11.34 9.45-12.1-3a1.27 1.27 0 0 0-0.39 0h-0.16zm-17.33 21.1 3-26.19 2.28-9.85 9.65 14.85zm-2.52 3.42-2 2.89 3.45-14.91zm-8.4-1.67 12.57-34-0.66 5.66-8.63 37.36a0.69 0.69 0 0 0 0 0.25 1 1 0 0 0 1.84 0.55l2.86-4-1.51 12.91z" style="fill:none;stroke:#d3d3d3" />

		</g>
	</svg>
	<svg id="basket" opacity="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2367.55 2475">
		<title>
			basketball
		</title>
		<g class="basket_fill" data-name="FILL" style="fill:#00FF99;opacity:0.3;isolation:isolate">
			<polyline points="1326.7 558.63 1382.61 609.4 1301.17 662.21 1326.7 558.63" />
			<polygon points="1382.61 609.4 1401.06 656.98 1301.17 662.21 1382.61 609.4" />
			<polyline points="1301.17 662.21 1222.39 570.3 1141.92 527.54 1301.17 662.21 1301.17 662.21" />
			<polyline points="1301.17 662.21 1263.56 714.73 1401.06 656.98 1301.17 662.21" />
			<polygon points="1141.92 527.54 1004.92 362.79 1102.35 561.2 1141.92 527.54" />
			<polygon points="1102.35 561.2 1301.17 662.21 1141.92 527.54 1102.35 561.2" />
			<polygon points="1102.35 561.2 1038.58 614.93 1301.17 662.21 1102.35 561.2" />
			<polygon points="1038.58 614.93 1004.92 362.79 1102.35 561.2 1038.58 614.93" />
			<polygon points="1004.92 362.79 943.51 251.19 896.27 258.27 1004.92 362.79" />
			<polygon points="896.27 258.27 1045.66 472.03 870.29 281.3 896.27 258.27" />
			<polygon points="870.29 281.3 958.27 506.87 989.57 431.88 870.29 281.3" />
			<polygon points="958.27 506.87 1038.58 614.93 989.57 431.88 958.27 506.87" />
			<polygon points="1038.58 614.93 1145.46 666.9 1217.5 630.88 1038.58 614.93" />
			<polygon points="1145.46 666.9 1263.56 714.73 1217.5 630.88 1145.46 666.9" />
			<polygon points="1401.06 656.98 1386.97 733.62 1263.56 714.73 1401.06 656.98" />
			<polygon points="1386.97 733.62 1390.51 786.77 1317.29 712.36 1386.97 733.62" />
			<polygon points="1390.51 786.77 1363.94 848.77 1301.35 826.92 1390.51 786.77" />
			<polygon points="1301.35 826.92 1214.55 698.19 1390.51 786.77 1301.35 826.92" />
			<polygon points="1263.56 714.73 1386.97 733.62 1333.83 780.86 1263.56 714.73" />
			<polygon points="943.51 251.19 805.97 192 896.27 258.27 943.51 251.19" />
			<polyline points="805.97 192 724.97 171 814.97 156 805.97 192" />
			<polygon points="724.97 171 733.97 158 829.97 163 724.97 171" />
			<polygon points="814.97 156 737.97 94 829.97 134 814.97 156" />
			<polygon points="737.97 94 740.97 77 829.97 134 737.97 94" />
			<polygon points="829.97 134 943.51 251.19 829.97 191 829.97 134" />
			<polygon points="829.97 134 853.97 115 860.97 192 829.97 134" />
			<polygon points="835.97 127 778.97 46 853.97 115 835.97 127" />
			<polygon points="778.97 46 784.97 30 853.97 115 778.97 46" />
			<polygon points="853.97 115 910.97 132 943.51 251.19 853.97 115" />
			<polygon points="872.97 120 873.97 34 910.97 132 872.97 120" />
			<polygon points="873.97 34 894.97 36 903.97 120 873.97 34" />
			<polygon points="918.97 167 968.97 203 936.97 231 918.97 167" />
			<polygon points="944.97 186 968.97 169 968.97 203 944.97 186" />
			<polygon points="1029.97 605 990.97 771 1207.97 795 1029.97 605" />
			<polygon points="990.97 771 1012.97 1080 1134.97 822 990.97 771" />
			<polygon points="1012.97 1080 1094.97 1117 1067.97 838 1012.97 1080" />
			<polygon points="1094.97 1117 1254.97 1060 1168.97 838 1094.97 1117" />
			<polygon points="1254.97 1060 1330.97 1092 1363.94 848.77 1254.97 1060" />
			<polygon points="1301.35 826.92 1139.97 1037 1064.97 747 1301.35 826.92" />
			<polygon points="1214.55 698.19 1031.97 844 1301.35 826.92 1214.55 698.19" />
			<polygon points="986.97 555 951.97 573 1012.97 672 986.97 555" />
			<polygon points="951.97 573 816.97 583 1012.97 672 951.97 573" />
			<polygon points="816.97 583 762.97 725 1012.97 672 816.97 583" />
			<polygon points="1012.97 672 767.97 684 789.97 606 1012.97 672" />
			<polygon points="816.97 583 757.97 417 789.97 606 816.97 583" />
			<polygon points="772.97 463 783.97 350 702.97 367 772.97 463" />
			<polygon points="702.97 367 704.97 700 762.97 725 702.97 367" />
			<polygon points="767.97 684 691.97 577 702.97 367 767.97 684" />
			<polygon points="702.97 367 676.97 185 721.97 238 702.97 367" />
			<polygon points="721.97 238 773.97 273 702.97 367 721.97 238" />
			<polygon points="785.97 349 707.97 261 702.97 367 785.97 349" />
			<polygon points="676.97 185 688.97 168 707.97 261 676.97 185" />
			<polygon points="688.97 168 691.97 109 723.97 49 688.97 168" />
			<polygon points="723.97 49 774.97 8 843.97 1 723.97 49" />
			<polygon points="843.97 1 921.97 27 953.97 77 843.97 1" />
			<polygon points="953.97 77 972.97 129 968.97 169 953.97 77" />
			<polygon points="688.97 168 721.97 238 694.97 207 688.97 168" />
			<polygon points="721.97 238 834.97 288 773.97 273 721.97 238" />
			<polygon points="834.97 288 870.29 281.3 871.97 290 834.97 288" />
			<polygon points="1093.48 440.06 1102.97 463 1130.97 457 1093.48 440.06" />
			<polygon points="1092.97 440 1130.97 392 1130.97 457 1092.97 440" />
			<polygon points="1130.55 391.51 1150.97 364 1191.97 382 1130.55 391.51" />
			<polygon points="1131.43 391.51 1144.23 416.23 1183.95 383.13 1131.43 391.51" />
			<polygon points="1200.97 428 1241.97 346 1338.97 398 1200.97 428" />
			<polygon points="1174.97 332 1241.97 346 1249.97 326 1174.97 332" />
			<polygon points="1174.97 332 1207.97 315 1279.97 330 1174.97 332" />
			<polygon points="1279.97 330 1337.97 372 1341.97 428 1279.97 330" />
			<polygon points="1241.97 346 1253.97 419 1341.97 428 1241.97 346" />
			<polygon points="1299.97 419 1308.97 457 1343.97 464 1299.97 419" />
			<polygon points="1341.97 428 1343.97 464 1295.97 539 1341.97 428" />
			<polygon points="1295.97 539 1290.97 481 1328.97 460 1295.97 539" />
			<polygon points="1290.97 481 1315.97 424 1328.97 460 1290.97 481" />
			<polygon points="1109.97 419 1130.55 361.06 1174.97 332 1109.97 419" />
			<polygon points="1144.23 416.23 1150.85 392.4 1179.1 401.66 1144.23 416.23" />
			<polygon points="1130.97 392 1120.84 378.27 1112.45 414.02 1130.97 392" />
			<polygon points="1239.56 481.55 1290.97 481 1299.58 430.79 1239.56 481.55" />
			<polygon points="1273.54 475.81 1267.81 428.15 1299.58 430.79 1273.54 475.81" />
			<polygon points="1012.97 1080 953.97 1065 918.97 1125 1012.97 1080" />
			<polygon points="1012.97 1080 1047.97 1138 959.34 1373.25 1012.97 1080" />
			<polygon points="959.34 1373.25 896.1 1358.28 923.97 1389 959.34 1373.25" />
			<polygon points="923.97 1389 1344.97 1395 1385.97 1173 923.97 1389" />
			<polygon points="1385.97 1173 1374.97 1128 1330.97 1092 1385.97 1173" />
			<polygon points="1330.97 1092 959.34 1373.25 1385.97 1173 1330.97 1092" />
			<polygon points="1254.97 1060 1124.97 1179 1330.97 1092 1254.97 1060" />
			<polygon points="1029.97 1105 1130.97 1149 1047.97 1138 1029.97 1105" />
			<polygon points="1095.97 1145 1208.97 1109 1215.97 1131 1095.97 1145" />
			<polygon points="1092.97 1309 1187.97 1361 923.97 1389 1092.97 1309" />
			<polygon points="1187.97 1361 1357.97 1319 1344.97 1395 1187.97 1361" />
			<polygon points="1005.97 1124 848.97 1130 880.97 1195 1005.97 1124" />
			<polygon points="880.97 1195 859.97 1349 1005.97 1124 880.97 1195" />
			<polygon points="859.97 1349 959.34 1373.25 1005.97 1124 859.97 1349" />
			<polygon points="849.94 1134.17 649.24 1165.62 593.05 1280.68 849.94 1134.17" />
			<polygon points="864.65 1308.78 712.8 1292.72 719.49 1342.23 864.65 1308.78" />
			<polygon points="872.68 1250.58 732.2 1243.89 865.99 1295.4 872.68 1250.58" />
			<polygon points="859.97 1349 719.49 1342.23 864.65 1308.78 859.97 1349" />
			<polygon points="719.49 1342.23 655.26 1432.54 427.81 1595.1 719.49 1342.23" />
			<polygon points="593.05 1280.68 370.28 1508.81 719.49 1342.23 593.05 1280.68" />
			<polygon points="455.24 1488.07 849.94 1134.17 662.62 1193.71 455.24 1488.07" />
			<polygon points="370.28 1508.81 417.77 1547.61 427.81 1595.1 370.28 1508.81" />
			<polygon points="370.28 1508.81 248.52 1591.09 427.81 1595.1 370.28 1508.81" />
			<polygon points="427.81 1595.1 342.18 1680.07 400.38 1554.96 427.81 1595.1" />
			<polygon points="354.89 1546.94 263.91 1609.15 427.81 1595.1 354.89 1546.94" />
			<polygon points="242.5 1587.74 263.91 1609.15 212.39 1718.87 242.5 1587.74" />
			<polygon points="263.91 1609.15 327.46 1629.22 342.18 1680.07 263.91 1609.15" />
			<polygon points="342.18 1680.07 269.26 1794.46 263.91 1609.15 342.18 1680.07" />
			<polygon points="242.5 1587.74 205.04 1586.41 170.92 1682.74 242.5 1587.74" />
			<polygon points="205.04 1586.41 169.58 1579.05 130.11 1649.96 205.04 1586.41" />
			<polygon points="169.58 1579.05 87.96 1528.87 130.11 1649.96 169.58 1579.05" />
			<polygon points="87.96 1528.87 35.78 1477.36 1 1490.74 87.96 1528.87" />
			<polygon points="28.42 1503.45 130.11 1649.96 87.96 1528.87 28.42 1503.45" />
			<polygon points="1 1490.74 5.01 1544.93 28.42 1503.45 1 1490.74" />
			<polygon points="5.01 1544.93 63.88 1651.3 130.11 1649.96 5.01 1544.93" />
			<polygon points="5.01 1544.93 28.42 1503.45 130.11 1649.96 5.01 1544.93" />
			<polygon points="130.11 1649.96 239.82 1742.28 184.97 1793.12 130.11 1649.96" />
			<polygon points="63.88 1651.3 184.97 1793.12 130.11 1649.96 63.88 1651.3" />
			<polygon points="184.97 1793.12 236.48 1829.92 269.26 1794.46 184.97 1793.12" />
			<polygon points="239.82 1742.28 269.26 1794.46 184.97 1793.12 239.82 1742.28" />
			<polygon points="236.48 1829.92 265.91 1815.87 269.26 1794.46 236.48 1829.92" />
			<polygon points="1040.97 1390 1040.97 1465 1344.97 1395 1040.97 1390" />
			<polygon points="1040.97 1465 1153.97 1704 1344.97 1395 1040.97 1465" />
			<polygon points="1153.97 1704 1408.97 1493 1323.97 1403 1153.97 1704" />
			<polygon points="1408.97 1493 1154.97 1652 1350.97 1461 1408.97 1493" />
			<polygon points="1408.97 1493 1361.97 1626 1339.97 1550 1408.97 1493" />
			<polygon points="1339.97 1550 1368.97 1650 1236.97 1634 1339.97 1550" />
			<polygon points="1368.97 1650 1416.97 1800 1195.97 1667 1368.97 1650" />
			<polygon points="1172.97 1690 1264.97 1862 1236.97 1634 1172.97 1690" />
			<polygon points="1222.97 1784 1323.97 1795 1243.97 1821 1222.97 1784" />
			<polygon points="1264.97 1862 1621.97 2130 1350.97 1869 1264.97 1862" />
			<polygon points="1265.97 1777 1349.97 1888 1460.97 1909 1265.97 1777" />
			<polygon points="1416.97 1800 1551.97 1902 1686.97 2058 1416.97 1800" />
			<polygon points="1460.97 1909 1579.97 1940 1661.97 2073 1460.97 1909" />
			<polygon points="1621.97 2130 1477.97 1878 1474.97 2007 1621.97 2130" />
			<polygon points="1621.97 2130 1652.97 2081 1761.97 2173 1621.97 2130" />
			<polygon points="1621.97 2130 1742.97 2219 1787.97 2132 1621.97 2130" />
			<polygon points="1652.97 2081 1686.97 2058 1787.97 2132 1652.97 2081" />
			<polygon points="1787.97 2132 1886.97 2134 1897.97 2181 1787.97 2132" />
			<polygon points="1897.97 2181 1884.97 2226 1742.97 2219 1897.97 2181" />
			<polygon points="1742.97 2219 1815.97 2356 1874.97 2294 1742.97 2219" />
			<polygon points="1884.97 2226 1786.97 2282 1880.97 2261 1884.97 2226" />
			<polygon points="1880.97 2261 1867.97 2328 1807.97 2313 1880.97 2261" />
			<polygon points="1815.97 2356 1781.97 2424 1811.97 2434 1815.97 2356" />
			<polygon points="1811.97 2434 1860.97 2379 1815.97 2356 1811.97 2434" />
			<polygon points="1860.97 2379 1867.97 2328 1815.97 2356 1860.97 2379" />
			<polygon points="1886.97 2134 1932.97 2136 1939.97 2161 1886.97 2134" />
			<polygon points="1939.97 2161 1934.97 2212 1886.97 2134 1939.97 2161" />
			<polygon points="1897.97 2181 1934.97 2212 1886.97 2134 1897.97 2181" />
			<polygon points="1897.97 2181 1884.97 2226 1934.97 2212 1897.97 2181" />
			<polygon points="1934.97 2212 1909.97 2295 1884.97 2226 1934.97 2212" />
			<polygon points="1884.97 2226 1867.97 2328 1909.97 2295 1884.97 2226" />
			<polygon points="1909.97 2295 1906.97 2370 1867.97 2328 1909.97 2295" />
			<polygon points="1906.97 2370 1880.97 2425 1867.97 2328 1906.97 2370" />
			<polygon points="1860.97 2379 1867.97 2328 1880.97 2425 1860.97 2379" />
			<polygon points="1811.97 2434 1880.97 2425 1860.97 2379 1811.97 2434" />
			<polygon points="1880.97 2425 1835.97 2464 1811.97 2434 1880.97 2425" />
			<polygon points="1781.97 2424 1811.97 2434 1835.97 2464 1781.97 2424" />
			<polygon points="1781.97 2424 1796.97 2474 1835.97 2464 1781.97 2424" />
			<polygon points="1222.39 570.3 1301.17 662.21 1326.7 558.63 1222.39 570.3" />
			<polygon points="870.29 281.3 805.97 192 896.27 258.27 870.29 281.3" />
		</g>
		<g class="basket_extra-line" data-name="Extra Line">
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M1357.97,1319L1929.32,1188.18L1408.97,1493L1999.81,1788.15"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M1411.4,1491.11L1963.81,1062.19L1363.94,848.77"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M269.26,1794.46L938.55,1870.19L342.18,1680.07"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M427.81,1595.1L922.55,2046.19L618.55,1902.19"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M1686.97,2058L2166.55,1458.19L2162.55,2002.19"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M1780.57,1415.56L1416.97,1800L2366.55,1122.19L1932.97,2136"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M1777.11,1315.03L1385.97,1173L1627.83,1059.19"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M1916.94,1300.67L2173.77,1027.51L1615.73,1156.28"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M1704.35,1039.5L1947.12,922.77L1386.97,733.62"></path>
			<path style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" d="M1579.97,1940L1785.1,1411.75"></path>
			<path d="M596.35,1846.36l-41,4.26-.24-.1a1,1,0,0,0-1.15,1.58l-.42,45.15,23,10.34,42.36-4.4.43-46.48Zm21.11,55.51-40.66,4.22L555,1896.3l.4-43.45.7.31a1,1,0,0,0,.93-.06,1,1,0,0,0,.39-.44,1,1,0,0,0,0-.78l38.64-4,20,9a1,1,0,0,0-.7,1,1,1,0,0,0,1.08.91l1.38-.13Z" style="fill:#17161A"></path>
			<path d="M578.45,1860.36l-1.19.11-.25-.11a1,1,0,0,0-.92,1.75v1.41a1,1,0,0,0,2,0v-1.1l.55-.05a1,1,0,0,0,.43-.14,1,1,0,0,0-.62-1.85Z" style="fill:#17161A"></path>
			<path d="M586.45,1859.61l-2,.19a1,1,0,1,0,.19,2l2-.19a.91.91,0,0,0,.42-.14,1,1,0,0,0-.61-1.86Z" style="fill:#17161A"></path>
			<path d="M569.73,1857.08a1,1,0,1,0-.93,1.77l.11.05,1.82.82a1,1,0,0,0,.93-.06,1,1,0,0,0,.39-.44,1,1,0,0,0-.5-1.32Z" style="fill:#17161A"></path>
			<path d="M594.39,1858.86l-2,.19a1,1,0,1,0,.19,2l2-.19a1,1,0,0,0,.43-.14,1,1,0,0,0-.62-1.85Z" style="fill:#17161A"></path>
			<path d="M562.45,1853.8a1,1,0,1,0-.82,1.82l1.82.82a1,1,0,0,0,.93-.06,1,1,0,0,0-.11-1.76Z" style="fill:#17161A"></path>
			<path d="M610.32,1857.36l-2,.19a1,1,0,0,0,.19,2h0l2-.19a1,1,0,0,0,.43-.14,1,1,0,0,0-.62-1.85Z" style="fill:#17161A"></path>
			<path d="M602.36,1858.11l-2,.19a1,1,0,0,0,.19,2l2-.19a.91.91,0,0,0,.42-.14,1,1,0,0,0-.61-1.86Z" style="fill:#17161A"></path>
			<path d="M577,1884.52a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0v-2A1,1,0,0,0,577,1884.52Z" style="fill:#17161A"></path>
			<path d="M576.84,1900.52a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1,1.07,1.07,0,0,0,.52-.14,1,1,0,0,0,.49-.85v-2a1,1,0,0,0-1-1Z" style="fill:#17161A"></path>
			<path d="M576.89,1892.52a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1,1,1,0,0,0,1-1v-2a1,1,0,0,0-1-1Z" style="fill:#17161A"></path>
			<path d="M577,1876.52a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1,1,1,0,0,0,1-1v-2a1,1,0,0,0-1-1Z" style="fill:#17161A"></path>
			<path d="M577.06,1868.52a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0v-2A1,1,0,0,0,577.06,1868.52Z" style="fill:#17161A"></path>
			<path d="M2023.75,1777.7l-31.1,9.24,6.2,34.87,18.67,4.51,31.09-9.23-6.16-34.87Zm23.59,38.6-28.89,8.58-.33-1.84a1,1,0,0,0-2,.36h0l.27,1.51-16.6-4-5.74-32.3a.93.93,0,0,0,.35.16l1.95.46a1,1,0,0,0,1.2-.74,1,1,0,0,0-.73-1.21h0l-.75-.17,27.69-8.23,16.34,4a1,1,0,0,0-.07.71,1,1,0,0,0,1.23.69h0l.33-.09Z" style="fill:#17161A"></path>
			<path d="M2011.9,1790.52l-.47.14-1-.23a1,1,0,0,0-.46,2l.58.13.24,1.33a1,1,0,0,0,1.16.8.83.83,0,0,0,.34-.13,1,1,0,0,0,.47-1l-.2-1.1h.09a1,1,0,0,0-.79-1.82Z" style="fill:#17161A"></path>
			<path d="M2004.17,1791a1,1,0,0,0,1.2-.74,1,1,0,0,0-.74-1.2l-2-.46a1,1,0,0,0-.46,1.94Z" style="fill:#17161A"></path>
			<path d="M2027.28,1786.16l-1.92.55a1,1,0,0,0,.54,1.92h0l1.92-.55a1.12,1.12,0,0,0,.25-.11,1,1,0,0,0-.8-1.81Z" style="fill:#17161A"></path>
			<path d="M2019.59,1788.36l-1.92.55a1,1,0,0,0,.45,1.95l.1,0,1.92-.55a.72.72,0,0,0,.24-.1,1,1,0,0,0-.79-1.82Z" style="fill:#17161A"></path>
			<path d="M2035,1784l-1.92.55a1,1,0,1,0,.45,2l.1,0,1.92-.55a1.09,1.09,0,0,0,.25-.1,1,1,0,0,0-.8-1.82Z" style="fill:#17161A"></path>
			<path d="M2015.54,1814.37a1,1,0,0,0-.81,1.16h0l.36,2a1,1,0,1,0,2-.36l-.35-2A1,1,0,0,0,2015.54,1814.37Z" style="fill:#17161A"></path>
			<path d="M2012.7,1798.62a1,1,0,0,0-.81,1.16h0l.36,2a1,1,0,0,0,1.16.81h0a1.4,1.4,0,0,0,.34-.13,1,1,0,0,0,.47-1l-.36-2a1,1,0,0,0-1.13-.84Z" style="fill:#17161A"></path>
			<path d="M2014.12,1806.52a1,1,0,0,0-.81,1.16h0l.36,2a1,1,0,0,0,2-.32l-.36-2a1,1,0,0,0-1.13-.84Z" style="fill:#17161A"></path>
			<path d="M1691,1021.36l-44.69-9.89-.08-.07a1,1,0,0,0-1.06-.19H1645v.17s-.11.06-.15.1a1,1,0,0,0-.21.94l-16.28,47.41,20.51,18.88,46,10.18,16.69-48.62Zm2.75,65.6-43.15-9.56.39-1.13a1,1,0,0,0-1.87-.72.19.19,0,0,1,0,.07l-.28.83-18.61-17.13,15.64-45.56.5.46a1,1,0,0,0,.9.24.92.92,0,0,0,.51-.3,1,1,0,0,0,.26-.65l42.2,9.34,18.43,17a1,1,0,0,0,.36,1.78h0l.29.07Z" style="fill:#17161A"></path>
			<path d="M1672.45,1031.08l-2-.45a1,1,0,0,0-.45,2l1.94.45a1.14,1.14,0,0,0,.45,0,1,1,0,0,0,0-2Z" style="fill:#17161A"></path>
			<path d="M1659,1025.3a1.13,1.13,0,0,0,.52-.3,1,1,0,0,0-.06-1.41l-1.47-1.36a1,1,0,0,0-1.41,0h0a1,1,0,0,0,.06,1.41l1.47,1.36A1,1,0,0,0,1659,1025.3Z" style="fill:#17161A"></path>
			<path d="M1680.22,1032.89l-2-.46a1,1,0,1,0-.45,2l2,.45a.86.86,0,0,0,.45,0,1,1,0,0,0,0-1.94Z" style="fill:#17161A"></path>
			<path d="M1653.13,1019.88a.92.92,0,0,0,.51-.3,1,1,0,0,0-.06-1.41l-1.47-1.36a1,1,0,1,0-1.36,1.48l1.48,1.35A1,1,0,0,0,1653.13,1019.88Z" style="fill:#17161A"></path>
			<path d="M1695.81,1036.52l-2-.45a1,1,0,0,0-.45,2l2,.45a.82.82,0,0,0,.44,0,1,1,0,0,0,.09-2Z" style="fill:#17161A"></path>
			<path d="M1703.6,1038.3l-2-.45a1,1,0,0,0-1.2.75h0a1,1,0,0,0,.75,1.2h0l1.95.45a1.14,1.14,0,0,0,.45,0,1,1,0,0,0,.75-.75A1,1,0,0,0,1703.6,1038.3Z" style="fill:#17161A"></path>
			<path d="M1688,1034.69l-2-.45a1,1,0,0,0-1.2.75h0a1,1,0,0,0,.75,1.2h0l2,.45a1.14,1.14,0,0,0,.45,0,1,1,0,0,0,.75-.75,1,1,0,0,0-.76-1.19Z" style="fill:#17161A"></path>
			<path d="M1655.51,1059.85a1,1,0,0,0-1.27.63h0l-.64,1.89a1,1,0,0,0,.62,1.27,1,1,0,0,0,.55,0,1,1,0,0,0,.72-.66l.65-1.89A1,1,0,0,0,1655.51,1059.85Z" style="fill:#17161A"></path>
			<path d="M1652.94,1067.42a1,1,0,0,0-1.27.63h0l-.65,1.89a1,1,0,0,0,.62,1.27,1,1,0,0,0,.55,0,1,1,0,0,0,.72-.65l.65-1.9A1,1,0,0,0,1652.94,1067.42Z" style="fill:#17161A"></path>
			<path d="M1658.09,1052.28a1,1,0,0,0-1.27.62l-.64,1.9a1,1,0,0,0,.62,1.26,1,1,0,0,0,.55,0,1,1,0,0,0,.72-.65l.65-1.89A1,1,0,0,0,1658.09,1052.28Z" style="fill:#17161A"></path>
			<path d="M1665.83,1029.52h-.19a1,1,0,0,0-.29-.53l-1.47-1.35a1,1,0,1,0-1.44,1.38l.09.09,1.47,1.36a1,1,0,0,0,.39.21l-.47,1.39a1,1,0,0,0,.62,1.27,1,1,0,0,0,.55,0,1,1,0,0,0,.72-.65l.64-1.89a1,1,0,0,0-.61-1.28Z" style="fill:#17161A"></path>
			<path d="M1663.25,1037.13a1,1,0,0,0-1.27.63h0l-.64,1.89a1,1,0,0,0,.62,1.27,1,1,0,0,0,.55,0,1,1,0,0,0,.72-.65l.65-1.9A1,1,0,0,0,1663.25,1037.13Z" style="fill:#17161A"></path>
			<path d="M1660.67,1044.71a1,1,0,0,0-1.27.62l-.64,1.89a1,1,0,0,0,.62,1.27,1,1,0,0,0,.55,0,1,1,0,0,0,.72-.65l.65-1.9A1,1,0,0,0,1660.67,1044.71Z" style="fill:#17161A"></path>
			<path d="M1832,1297.74h-.18l-57.69,15.11,6.79,101.77h87.86l57.71-15.1-6.8-101.76Zm-40.53,114,1.06-.27a1.14,1.14,0,0,0,.43-.24,1,1,0,0,0-.93-1.7l-1.94.51a1,1,0,0,0-.71,1.22.88.88,0,0,0,.32.48h-4.56a1,1,0,0,0-.86-.19l-.67.18-6.46-96.71,55-14.41,84.79.05,6.46,96.7-.33.09h-.15a1,1,0,0,0-.55.18l-4.53,1.19a1.23,1.23,0,0,0,.08-.38,1,1,0,0,0-1-1h-2a1,1,0,0,0,0,2h.52l-47.07,12.33Z" style="fill:#17161A"></path>
			<path d="M1837.45,1366.33a1,1,0,0,0-2,.13h0l.14,2a1,1,0,0,0,1.06.93,1,1,0,0,0,.62-.26,1,1,0,0,0,.31-.8Z" style="fill:#17161A"></path>
			<path d="M1837.05,1390.41l.14,2a1,1,0,0,0,1.06.93,1,1,0,0,0,.93-1.06l-.13-2a1,1,0,1,0-2,.13Z" style="fill:#17161A"></path>
			<path d="M1838.08,1397.52l-1.58.41a1,1,0,0,0,.35,2l.15,0,1.84-.48a.79.79,0,0,0,.38-.21,1.14,1.14,0,0,0,.36-.92,1,1,0,0,0-1.06-.88A.86.86,0,0,0,1838.08,1397.52Z" style="fill:#17161A"></path>
			<path d="M1830.69,1399.45l-1.93.51a1,1,0,0,0,.35,2l.15,0,1.94-.5a1.14,1.14,0,0,0,.43-.24,1,1,0,0,0-.94-1.7Z" style="fill:#17161A"></path>
			<path d="M1838.12,1376.31l-.14-2a1,1,0,1,0-2,.13l.13,2a1,1,0,0,0,1.68.66A1,1,0,0,0,1838.12,1376.31Z" style="fill:#17161A"></path>
			<path d="M1838.34,1385.09a1,1,0,0,0,.31-.8l-.13-2a1,1,0,0,0-1.06-.93h0a1,1,0,0,0-.93,1.06l.13,2a1,1,0,0,0,1.06.93h0A1.08,1.08,0,0,0,1838.34,1385.09Z" style="fill:#17161A"></path>
			<path d="M1823,1401.52l-1.93.51a1,1,0,0,0-.72,1.22h0a1,1,0,0,0,1.22.71l1.94-.5a1.14,1.14,0,0,0,.43-.24,1,1,0,0,0-.94-1.7Z" style="fill:#17161A"></path>
			<path d="M1799.73,1407.52l-1.94.5a1,1,0,0,0-.78,1.18,1,1,0,0,0,1.17.78l.12,0,1.93-.5a.92.92,0,0,0,.43-.24,1,1,0,0,0-.93-1.69Z" style="fill:#17161A"></path>
			<path d="M1833,1305.27a1,1,0,0,0,.32-.8l-.14-2a1,1,0,1,0-2,.13l.13,2a1,1,0,0,0,1.68.66Z" style="fill:#17161A"></path>
			<path d="M1807.45,1405.52l-1.94.5a1,1,0,0,0,.51,1.94l1.93-.51a.92.92,0,0,0,.43-.24,1,1,0,0,0-.93-1.69Z" style="fill:#17161A"></path>
			<path d="M1815.21,1403.52l-1.94.5a1,1,0,0,0,.51,1.94l1.93-.51a1.1,1.1,0,0,0,.44-.23,1,1,0,0,0-.94-1.7Z" style="fill:#17161A"></path>
			<path d="M1835.85,1357.42a1,1,0,0,0-.93,1.07h0l.13,2a1,1,0,0,0,1.06.93h0a1,1,0,0,0,.62-.27,1,1,0,0,0,.31-.79l-.13-2a1,1,0,0,0-1.06-.94Z" style="fill:#17161A"></path>
			<path d="M1833.32,1334.52l.13,2a1,1,0,0,0,1.06.94h0a1,1,0,0,0,.62-.27,1,1,0,0,0,.31-.8l-.13-2a1,1,0,1,0-2,.13Z" style="fill:#17161A"></path>
			<path d="M1832.79,1326.52l.13,2a1,1,0,0,0,1.06.93h0a.93.93,0,0,0,.61-.27,1,1,0,0,0,.32-.79l-.14-2a1,1,0,1,0-2,.14Z" style="fill:#17161A"></path>
			<path d="M1833.85,1342.52l.14,2a1,1,0,0,0,1.06.93,1,1,0,0,0,.62-.27,1,1,0,0,0,.31-.8l-.13-2a1,1,0,1,0-2,.13Z" style="fill:#17161A"></path>
			<path d="M1834.07,1321.23a1,1,0,0,0,.31-.79l-.13-2a1,1,0,1,0-2,.13l.14,2a1,1,0,0,0,1.06.93A1,1,0,0,0,1834.07,1321.23Z" style="fill:#17161A"></path>
			<path d="M1833.85,1312.45l-.13-2a1,1,0,0,0-1.06-.93h0a1,1,0,0,0-.93,1.06l.13,2a1,1,0,0,0,1.06.93h0a1,1,0,0,0,.62-.27A1,1,0,0,0,1833.85,1312.45Z" style="fill:#17161A"></path>
			<path d="M1835.32,1349.44a1,1,0,0,0-.93,1.06l.13,2a1,1,0,1,0,2-.13l-.14-2A1,1,0,0,0,1835.32,1349.44Z" style="fill:#17161A"></path>
			<path d="M1898.92,1397.45a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" style="fill:#17161A"></path>
			<path d="M1906.92,1397.45a1,1,0,0,0,0,2h2a1,1,0,0,0,.69-.27,1,1,0,0,0-.68-1.73Z" style="fill:#17161A"></path>
			<path d="M1874.92,1397.44a1,1,0,0,0,0,2h2a1,1,0,0,0,.69-.27,1,1,0,0,0-.68-1.73Z" style="fill:#17161A"></path>
			<path d="M1890.92,1397.44a1,1,0,0,0,0,2h2a1,1,0,0,0,.68-.28,1,1,0,0,0,0-1.41,1,1,0,0,0-.71-.31Z" style="fill:#17161A"></path>
			<path d="M1866.92,1397.44a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" style="fill:#17161A"></path>
			<path d="M1850.92,1397.43a1,1,0,0,0,0,2h2a1,1,0,0,0,.69-.27,1,1,0,0,0-.68-1.73Z" style="fill:#17161A"></path>
			<path d="M1858.92,1397.43a1,1,0,0,0,0,2h2a1,1,0,0,0,.69-.27,1,1,0,0,0-.68-1.73Z" style="fill:#17161A"></path>
			<path d="M1882.92,1397.44a1,1,0,0,0,0,2h2a1,1,0,0,0,.69-.27,1,1,0,0,0-.68-1.73Z" style="fill:#17161A"></path>
			<path d="M1842.92,1397.43a1,1,0,0,0,0,2h2a1,1,0,0,0,.69-.27,1,1,0,0,0-.68-1.73Z" style="fill:#17161A"></path>
		</g>
		<g class="basket_line" style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2px" data-name="LINE">

			<path d="M1326.7,558.63L1382.61,609.4L1301.17,662.21L1326.7,558.63"></path>
			<path d="M1382.61,609.4L1401.06,656.98L1301.17,662.21L1382.61,609.4Z"></path>
			<path d="M1301.17,662.21L1222.39,570.3L1141.92,527.54L1301.17,662.21L1301.17,662.21"></path>
			<path d="M1301.17,662.21L1263.56,714.73L1401.06,656.98L1301.17,662.21"></path>
			<path d="M1141.92,527.54L1004.92,362.79L1102.35,561.2L1141.92,527.54Z"></path>
			<path d="M1102.35,561.2L1301.17,662.21L1141.92,527.54L1102.35,561.2Z"></path>
			<path d="M1102.35,561.2L1038.58,614.93L1301.17,662.21L1102.35,561.2Z"></path>
			<path d="M1038.58,614.93L1004.92,362.79L1102.35,561.2L1038.58,614.93Z"></path>
			<path d="M1004.92,362.79L943.51,251.19L896.27,258.27L1004.92,362.79Z"></path>
			<path d="M896.27,258.27L1045.66,472.03L870.29,281.3L896.27,258.27Z"></path>
			<path d="M870.29,281.3L958.27,506.87L989.57,431.88L870.29,281.3Z"></path>
			<path d="M958.27,506.87L1038.58,614.93L989.57,431.88L958.27,506.87Z"></path>
			<path d="M1038.58,614.93L1145.46,666.9L1217.5,630.88L1038.58,614.93Z"></path>
			<path d="M1145.46,666.9L1263.56,714.73L1217.5,630.88L1145.46,666.9Z"></path>
			<path d="M1401.06,656.98L1386.97,733.62L1263.56,714.73L1401.06,656.98Z"></path>
			<path d="M1386.97,733.62L1390.51,786.77L1317.29,712.36L1386.97,733.62Z"></path>
			<path d="M1390.51,786.77L1363.94,848.77L1301.35,826.92L1390.51,786.77Z"></path>
			<path d="M1301.35,826.92L1214.55,698.19L1390.51,786.77L1301.35,826.92Z"></path>
			<path d="M1263.56,714.73L1386.97,733.62L1333.83,780.86L1263.56,714.73Z"></path>
			<path d="M943.51,251.19L805.97,192L896.27,258.27L943.51,251.19Z"></path>
			<path d="M805.97,192L724.97,171L814.97,156L805.97,192"></path>
			<path d="M724.97,171L733.97,158L829.97,163L724.97,171Z"></path>
			<path d="M814.97,156L737.97,94L829.97,134L814.97,156Z"></path>
			<path d="M737.97,94L740.97,77L829.97,134L737.97,94Z"></path>
			<path d="M829.97,134L943.51,251.19L829.97,191L829.97,134Z"></path>
			<path d="M829.97,134L853.97,115L860.97,192L829.97,134Z"></path>
			<path d="M835.97,127L778.97,46L853.97,115L835.97,127Z"></path>
			<path d="M778.97,46L784.97,30L853.97,115L778.97,46Z"></path>
			<path d="M853.97,115L910.97,132L943.51,251.19L853.97,115Z"></path>
			<path d="M872.97,120L873.97,34L910.97,132L872.97,120Z"></path>
			<path d="M873.97,34L894.97,36L903.97,120L873.97,34Z"></path>
			<path d="M918.97,167L968.97,203L936.97,231L918.97,167Z"></path>
			<path d="M944.97,186L968.97,169L968.97,203L944.97,186Z"></path>
			<path d="M1029.97,605L990.97,771L1207.97,795L1029.97,605Z"></path>
			<path d="M990.97,771L1012.97,1080L1134.97,822L990.97,771Z"></path>
			<path d="M1012.97,1080L1094.97,1117L1067.97,838L1012.97,1080Z"></path>
			<path d="M1094.97,1117L1254.97,1060L1168.97,838L1094.97,1117Z"></path>
			<path d="M1254.97,1060L1330.97,1092L1363.94,848.77L1254.97,1060Z"></path>
			<path d="M1301.35,826.92L1139.97,1037L1064.97,747L1301.35,826.92Z"></path>
			<path d="M1214.55,698.19L1031.97,844L1301.35,826.92L1214.55,698.19Z"></path>
			<path d="M986.97,555L951.97,573L1012.97,672L986.97,555Z"></path>
			<path d="M951.97,573L816.97,583L1012.97,672L951.97,573Z"></path>
			<path d="M816.97,583L762.97,725L1012.97,672L816.97,583Z"></path>
			<path d="M1012.97,672L767.97,684L789.97,606L1012.97,672Z"></path>
			<path d="M816.97,583L757.97,417L789.97,606L816.97,583Z"></path>
			<path d="M772.97,463L783.97,350L702.97,367L772.97,463Z"></path>
			<path d="M702.97,367L704.97,700L762.97,725L702.97,367Z"></path>
			<path d="M767.97,684L691.97,577L702.97,367L767.97,684Z"></path>
			<path d="M702.97,367L676.97,185L721.97,238L702.97,367Z"></path>
			<path d="M721.97,238L773.97,273L702.97,367L721.97,238Z"></path>
			<path d="M773.97,273L834.97,288L783.97,350L773.97,273Z"></path>
			<path d="M783.97,350L871.97,290L834.97,288L783.97,350Z"></path>
			<path d="M785.97,349L707.97,261L702.97,367L785.97,349Z"></path>
			<path d="M676.97,185L688.97,168L707.97,261L676.97,185Z"></path>
			<path d="M688.97,168L691.97,109L723.97,49L688.97,168Z"></path>
			<path d="M723.97,49L774.97,8L843.97,1L723.97,49Z"></path>
			<path d="M843.97,1L921.97,27L953.97,77L843.97,1Z"></path>
			<path d="M953.97,77L972.97,129L968.97,169L953.97,77Z"></path>
			<path d="M688.97,168L721.97,238L694.97,207L688.97,168Z"></path>
			<path d="M721.97,238L834.97,288L773.97,273L721.97,238Z"></path>
			<path d="M834.97,288L870.29,281.3L871.97,290L834.97,288Z"></path>
			<path d="M1093.48,440.06L1102.97,463L1130.97,457L1093.48,440.06Z"></path>
			<path d="M1092.97,440L1130.97,392L1130.97,457L1092.97,440Z"></path>
			<path d="M1130.55,391.51L1150.97,364L1191.97,382L1130.55,391.51Z"></path>
			<path d="M1131.43,391.51L1144.23,416.23L1183.95,383.13L1131.43,391.51Z"></path>
			<path d="M1130.97,457L1200.97,428L1235.97,538L1130.97,457Z"></path>
			<path d="M1200.97,428L1241.97,346L1338.97,398L1200.97,428Z"></path>
			<path d="M1174.97,332L1241.97,346L1249.97,326L1174.97,332Z"></path>
			<path d="M1174.97,332L1207.97,315L1279.97,330L1174.97,332Z"></path>
			<path d="M1279.97,330L1337.97,372L1341.97,428L1279.97,330Z"></path>
			<path d="M1241.97,346L1253.97,419L1341.97,428L1241.97,346Z"></path>
			<path d="M1299.97,419L1308.97,457L1343.97,464L1299.97,419Z"></path>
			<path d="M1341.97,428L1343.97,464L1295.97,539L1341.97,428Z"></path>
			<path d="M1295.97,539L1290.97,481L1328.97,460L1295.97,539Z"></path>
			<path d="M1290.97,481L1315.97,424L1328.97,460L1290.97,481Z"></path>
			<path d="M1102.97,463L1098.97,477L1141.92,527.54L1102.97,463Z"></path>
			<path d="M1109.97,419L1130.55,361.06L1174.97,332L1109.97,419Z"></path>
			<path d="M1144.23,416.23L1150.85,392.4L1179.1,401.66L1144.23,416.23Z"></path>
			<path d="M1130.97,392L1120.84,378.27L1112.45,414.02L1130.97,392Z"></path>
			<path d="M1239.56,481.55L1290.97,481L1299.58,430.79L1239.56,481.55Z"></path>
			<path d="M1273.54,475.81L1267.81,428.15L1299.58,430.79L1273.54,475.81Z"></path>
			<path d="M1012.97,1080L953.97,1065L918.97,1125L1012.97,1080Z"></path>
			<path d="M1012.97,1080L1047.97,1138L959.34,1373.25L1012.97,1080Z"></path>
			<path d="M959.34,1373.25L896.1,1358.28L923.97,1389L959.34,1373.25Z"></path>
			<path d="M923.97,1389L1344.97,1395L1385.97,1173L923.97,1389Z"></path>
			<path d="M1385.97,1173L1374.97,1128L1330.97,1092L1385.97,1173Z"></path>
			<path d="M1330.97,1092L959.34,1373.25L1385.97,1173L1330.97,1092Z"></path>
			<path d="M1254.97,1060L1124.97,1179L1330.97,1092L1254.97,1060Z"></path>
			<path d="M1029.97,1105L1130.97,1149L1047.97,1138L1029.97,1105Z"></path>
			<path d="M1095.97,1145L1208.97,1109L1215.97,1131L1095.97,1145Z"></path>
			<path d="M1092.97,1309L1187.97,1361L923.97,1389L1092.97,1309Z"></path>
			<path d="M1187.97,1361L1357.97,1319L1344.97,1395L1187.97,1361Z"></path>
			<path d="M1005.97,1124L848.97,1130L880.97,1195L1005.97,1124Z"></path>
			<path d="M880.97,1195L859.97,1349L1005.97,1124L880.97,1195Z"></path>
			<path d="M859.97,1349L959.34,1373.25L1005.97,1124L859.97,1349Z"></path>
			<path d="M849.94,1134.17L649.24,1165.62L593.05,1280.68L849.94,1134.17Z"></path>
			<path d="M864.65,1308.78L712.8,1292.72L719.49,1342.23L864.65,1308.78Z"></path>
			<path d="M872.68,1250.58L732.2,1243.89L865.99,1295.4L872.68,1250.58Z"></path>
			<path d="M859.97,1349L719.49,1342.23L864.65,1308.78L859.97,1349Z"></path>
			<path d="M719.49,1342.23L655.26,1432.54L427.81,1595.1L719.49,1342.23Z"></path>
			<path d="M593.05,1280.68L370.28,1508.81L719.49,1342.23L593.05,1280.68Z"></path>
			<path d="M455.24,1488.07L849.94,1134.17L662.62,1193.71L455.24,1488.07Z"></path>
			<path d="M370.28,1508.81L417.77,1547.61L427.81,1595.1L370.28,1508.81Z"></path>
			<path d="M370.28,1508.81L248.52,1591.09L427.81,1595.1L370.28,1508.81Z"></path>
			<path d="M427.81,1595.1L342.18,1680.07L400.38,1554.96L427.81,1595.1Z"></path>
			<path d="M354.89,1546.94L263.91,1609.15L427.81,1595.1L354.89,1546.94Z"></path>
			<path d="M242.5,1587.74L263.91,1609.15L212.39,1718.87L242.5,1587.74Z"></path>
			<path d="M263.91,1609.15L327.46,1629.22L342.18,1680.07L263.91,1609.15Z"></path>
			<path d="M342.18,1680.07L269.26,1794.46L263.91,1609.15L342.18,1680.07Z"></path>
			<path d="M242.5,1587.74L205.04,1586.41L170.92,1682.74L242.5,1587.74Z"></path>
			<path d="M205.04,1586.41L169.58,1579.05L130.11,1649.96L205.04,1586.41Z"></path>
			<path d="M169.58,1579.05L87.96,1528.87L130.11,1649.96L169.58,1579.05Z"></path>
			<path d="M87.96,1528.87L35.78,1477.36L1,1490.74L87.96,1528.87Z"></path>
			<path d="M28.42,1503.45L130.11,1649.96L87.96,1528.87L28.42,1503.45Z"></path>
			<path d="M1,1490.74L5.01,1544.93L28.42,1503.45L1,1490.74Z"></path>
			<path d="M5.01,1544.93L63.88,1651.3L130.11,1649.96L5.01,1544.93Z"></path>
			<path d="M5.01,1544.93L28.42,1503.45L130.11,1649.96L5.01,1544.93Z"></path>
			<path d="M130.11,1649.96L239.82,1742.28L184.97,1793.12L130.11,1649.96Z"></path>
			<path d="M63.88,1651.3L184.97,1793.12L130.11,1649.96L63.88,1651.3Z"></path>
			<path d="M184.97,1793.12L236.48,1829.92L269.26,1794.46L184.97,1793.12Z"></path>
			<path d="M239.82,1742.28L269.26,1794.46L184.97,1793.12L239.82,1742.28Z"></path>
			<path d="M236.48,1829.92L265.91,1815.87L269.26,1794.46L236.48,1829.92Z"></path>
			<path d="M1040.97,1390L1040.97,1465L1344.97,1395L1040.97,1390Z"></path>
			<path d="M1040.97,1465L1153.97,1704L1344.97,1395L1040.97,1465Z"></path>
			<path d="M1153.97,1704L1408.97,1493L1323.97,1403L1153.97,1704Z"></path>
			<path d="M1408.97,1493L1154.97,1652L1350.97,1461L1408.97,1493Z"></path>
			<path d="M1408.97,1493L1361.97,1626L1339.97,1550L1408.97,1493Z"></path>
			<path d="M1339.97,1550L1368.97,1650L1236.97,1634L1339.97,1550Z"></path>
			<path d="M1368.97,1650L1416.97,1800L1195.97,1667L1368.97,1650Z"></path>
			<path d="M1172.97,1690L1264.97,1862L1236.97,1634L1172.97,1690Z"></path>
			<path d="M1222.97,1784L1323.97,1795L1243.97,1821L1222.97,1784Z"></path>
			<path d="M1264.97,1862L1621.97,2130L1350.97,1869L1264.97,1862Z"></path>
			<path d="M1265.97,1777L1349.97,1888L1460.97,1909L1265.97,1777Z"></path>
			<path d="M1416.97,1800L1551.97,1902L1686.97,2058L1416.97,1800Z"></path>
			<path d="M1460.97,1909L1579.97,1940L1661.97,2073L1460.97,1909Z"></path>
			<path d="M1621.97,2130L1477.97,1878L1474.97,2007L1621.97,2130Z"></path>
			<path d="M1621.97,2130L1652.97,2081L1761.97,2173L1621.97,2130Z"></path>
			<path d="M1621.97,2130L1742.97,2219L1787.97,2132L1621.97,2130Z"></path>
			<path d="M1652.97,2081L1686.97,2058L1787.97,2132L1652.97,2081Z"></path>
			<path d="M1787.97,2132L1886.97,2134L1897.97,2181L1787.97,2132Z"></path>
			<path d="M1897.97,2181L1884.97,2226L1742.97,2219L1897.97,2181Z"></path>
			<path d="M1742.97,2219L1815.97,2356L1874.97,2294L1742.97,2219Z"></path>
			<path d="M1884.97,2226L1786.97,2282L1880.97,2261L1884.97,2226Z"></path>
			<path d="M1880.97,2261L1867.97,2328L1807.97,2313L1880.97,2261Z"></path>
			<path d="M1815.97,2356L1781.97,2424L1811.97,2434L1815.97,2356Z"></path>
			<path d="M1811.97,2434L1860.97,2379L1815.97,2356L1811.97,2434Z"></path>
			<path d="M1860.97,2379L1867.97,2328L1815.97,2356L1860.97,2379Z"></path>
			<path d="M1886.97,2134L1932.97,2136L1939.97,2161L1886.97,2134Z"></path>
			<path d="M1939.97,2161L1934.97,2212L1886.97,2134L1939.97,2161Z"></path>
			<path d="M1897.97,2181L1934.97,2212L1886.97,2134L1897.97,2181Z"></path>
			<path d="M1897.97,2181L1884.97,2226L1934.97,2212L1897.97,2181Z"></path>
			<path d="M1934.97,2212L1909.97,2295L1884.97,2226L1934.97,2212Z"></path>
			<path d="M1884.97,2226L1867.97,2328L1909.97,2295L1884.97,2226Z"></path>
			<path d="M1909.97,2295L1906.97,2370L1867.97,2328L1909.97,2295Z"></path>
			<path d="M1906.97,2370L1880.97,2425L1867.97,2328L1906.97,2370Z"></path>
			<path d="M1860.97,2379L1867.97,2328L1880.97,2425L1860.97,2379Z"></path>
			<path d="M1811.97,2434L1880.97,2425L1860.97,2379L1811.97,2434Z"></path>
			<path d="M1880.97,2425L1835.97,2464L1811.97,2434L1880.97,2425Z"></path>
			<path d="M1781.97,2424L1811.97,2434L1835.97,2464L1781.97,2424Z"></path>
			<path d="M1781.97,2424L1796.97,2474L1835.97,2464L1781.97,2424Z"></path>
			<path d="M1222.39,570.3L1301.17,662.21L1326.7,558.63L1222.39,570.3Z"></path>
			<path d="M870.29,281.3L805.97,192L896.27,258.27L870.29,281.3Z"></path>
		</g>
	</svg>
  <svg xmlns="http://www.w3.org/2000/svg" opacity="0" id="volley" viewBox="0 0 2400 2400">
    <title>volleyball</title>
    <g class="volley_fill" style="fill:#00FF99;opacity:0.3">
      <!-- Head & Neck -->
      <polygon points="1280,680 1330,650 1300,730" fill="#00CC99" />
      <polygon points="1330,650 1360,700 1320,730" fill="#00CC99" />
      <polygon points="1300,730 1320,730 1300,750" fill="#00CC99" />
      <!-- Torso -->
      <polygon points="1200,800 1300,750 1250,900" fill="#00FF99" />
      <polygon points="1300,750 1380,820 1320,950" fill="#00CC99" />
      <polygon points="1250,900 1320,950 1280,1050" fill="#009999" />
      <polygon points="1320,950 1400,1000 1350,1100" fill="#00FF99" />
      <!-- Striking Arm -->
      <polygon points="1380,820 1450,700 1420,800" fill="#00CC99" />
      <polygon points="1450,700 1520,550 1480,580" fill="#009999" />
      <polygon points="1520,550 1560,480 1530,500" fill="#00FF99" />
      <!-- Non-Striking Arm -->
      <polygon points="1200,800 1150,720 1180,820" fill="#009999" />
      <polygon points="1150,720 1100,650 1130,680" fill="#00CC99" />
      <!-- Shorts -->
      <polygon points="1280,1050 1350,1100 1240,1150" fill="#17161A" opacity="0.8" />
      <polygon points="1350,1100 1380,1180 1300,1170" fill="#17161A" opacity="0.8" />
      <!-- Left Leg -->
      <polygon points="1240,1150 1200,1280 1250,1320" fill="#00CC99" />
      <polygon points="1200,1280 1150,1450 1180,1470" fill="#009999" />
      <polygon points="1150,1450 1120,1520 1160,1520" fill="#17161A" />
      <!-- Right Leg -->
      <polygon points="1300,1170 1350,1300 1400,1330" fill="#00FF99" />
      <polygon points="1350,1300 1420,1480 1460,1460" fill="#00CC99" />
      <polygon points="1420,1480 1450,1550 1480,1530" fill="#17161A" />
      
      <!-- Volleyball Sphere (Low Poly) -->
      <polygon points="1600,420 1620,400 1640,420" fill="#39FF14" />
      <polygon points="1640,420 1650,440 1630,455" fill="#39FF14" />
      <polygon points="1630,455 1600,455 1580,440" fill="#39FF14" />
      <polygon points="1580,440 1570,410 1600,420" fill="#39FF14" />
      <polygon points="1600,420 1640,420 1630,455" fill="#39FF14" opacity="0.7" />
      <polygon points="1600,420 1630,455 1600,455" fill="#39FF14" opacity="0.7" />
      <polygon points="1600,420 1600,455 1580,440" fill="#39FF14" opacity="0.7" />
      <polygon points="1600,420 1580,440 1570,410" fill="#39FF14" opacity="0.7" />
      <polygon points="1600,420 1570,410 1620,400" fill="#39FF14" opacity="0.7" />
      <polygon points="1620,400 1640,420 1650,440" fill="#39FF14" opacity="0.7" />
      <polygon points="1640,420 1630,455 1650,440" fill="#39FF14" opacity="0.7" />
    </g>
    <g class="volley_line" style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2.5px">
      <!-- Head & Neck -->
      <polygon points="1280,680 1330,650 1300,730" />
      <polygon points="1330,650 1360,700 1320,730" />
      <polygon points="1300,730 1320,730 1300,750" />
      <!-- Torso -->
      <polygon points="1200,800 1300,750 1250,900" />
      <polygon points="1300,750 1380,820 1320,950" />
      <polygon points="1250,900 1320,950 1280,1050" />
      <polygon points="1320,950 1400,1000 1350,1100" />
      <!-- Striking Arm -->
      <polygon points="1380,820 1450,700 1420,800" />
      <polygon points="1450,700 1520,550 1480,580" />
      <polygon points="1520,550 1560,480 1530,500" />
      <!-- Non-Striking Arm -->
      <polygon points="1200,800 1150,720 1180,820" />
      <polygon points="1150,720 1100,650 1130,680" />
      <!-- Shorts -->
      <polygon points="1280,1050 1350,1100 1240,1150" />
      <polygon points="1350,1100 1380,1180 1300,1170" />
      <!-- Left Leg -->
      <polygon points="1240,1150 1200,1280 1250,1320" />
      <polygon points="1200,1280 1150,1450 1180,1470" />
      <polygon points="1150,1450 1120,1520 1160,1520" />
      <!-- Right Leg -->
      <polygon points="1300,1170 1350,1300 1400,1330" />
      <polygon points="1350,1300 1420,1480 1460,1460" />
      <polygon points="1420,1480 1450,1550 1480,1530" />
      <!-- Ball -->
      <polygon points="1600,420 1620,400 1640,420 1650,440 1630,455 1600,455 1580,440 1570,410 1600,420" />
    </g>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" opacity="0" id="tennis" viewBox="0 0 2400 2400">
    <title>tennis</title>
    <g class="tennis_fill" style="fill:#00FF99;opacity:0.3">
      <!-- Head & Neck -->
      <polygon points="1060,780 1110,750 1080,830" fill="#00CC99" />
      <polygon points="1110,750 1140,800 1100,830" fill="#00CC99" />
      <polygon points="1080,830 1100,830 1080,850" fill="#00CC99" />
      <!-- Torso -->
      <polygon points="1000,900 1100,850 1050,1050" fill="#00FF99" />
      <polygon points="1100,850 1180,920 1120,1100" fill="#00CC99" />
      <polygon points="1050,1050 1120,1100 1080,1220" fill="#009999" />
      <polygon points="1120,1100 1190,1150 1140,1270" fill="#00FF99" />
      <!-- Racket Arm -->
      <polygon points="1180,920 1250,780 1210,880" fill="#00CC99" />
      <polygon points="1250,780 1320,620 1280,650" fill="#009999" />
      <polygon points="1320,620 1350,560 1330,580" fill="#00FF99" />
      <!-- Racket Oval & Handle -->
      <polygon points="1340,570 1390,470 1370,460" fill="#17161A" />
      <polygon points="1390,470 1410,400 1440,380" fill="#39FF14" />
      <polygon points="1440,380 1470,410 1450,440" fill="#39FF14" />
      <polygon points="1450,440 1420,460 1390,470" fill="#39FF14" />
      <!-- Left Leg -->
      <polygon points="1030,1350 990,1500 1040,1540" fill="#00CC99" />
      <polygon points="990,1500 930,1700 960,1720" fill="#009999" />
      <polygon points="930,1700 890,1780 930,1780" fill="#17161A" />
      <!-- Right Leg -->
      <polygon points="1090,1370 1140,1520 1190,1550" fill="#00FF99" />
      <polygon points="1140,1520 1200,1740 1240,1720" fill="#00CC99" />
      <polygon points="1200,1740 1230,1820 1260,1800" fill="#17161A" />
      <!-- Tossed Ball -->
      <polygon points="1280,200 1295,185 1310,200 1295,215" fill="#39FF14" />
    </g>
    <g class="tennis_line" style="fill:none;stroke:#17161A;stroke-linejoin:round;stroke-width:2.5px">
      <!-- Head & Neck -->
      <polygon points="1060,780 1110,750 1080,830" />
      <polygon points="1110,750 1140,800 1100,830" />
      <!-- Torso -->
      <polygon points="1000,900 1100,850 1050,1050" />
      <polygon points="1100,850 1180,920 1120,1100" />
      <polygon points="1050,1050 1120,1100 1080,1220" />
      <polygon points="1120,1100 1190,1150 1140,1270" />
      <!-- Racket Arm -->
      <polygon points="1180,920 1250,780 1210,880" />
      <polygon points="1250,780 1320,620 1280,650" />
      <polygon points="1320,620 1350,560 1330,580" />
      <!-- Racket -->
      <line x1="1340" y1="570" x2="1390" y2="470" />
      <path d="M1390,470 C1370,430 1400,350 1440,380 C1480,410 1470,480 1450,440" />
      <!-- Left Leg -->
      <polygon points="1030,1350 990,1500 1040,1540" />
      <polygon points="990,1500 930,1700 960,1720" />
      <polygon points="930,1700 890,1780 930,1780" />
      <!-- Right Leg -->
      <polygon points="1090,1370 1140,1520 1190,1550" />
      <polygon points="1140,1520 1200,1740 1240,1720" />
      <polygon points="1200,1740 1230,1820 1260,1800" />
      <!-- Ball -->
      <polygon points="1280,200 1295,185 1310,200 1295,215 1280,200" />
    </g>
  </svg>`,o1=()=>{const e=D(),{session:i}=B(),p=l.useRef(null);l.useEffect(()=>{if(p.current){const m=p.current.querySelectorAll("#soccer1 .soccer1_line polygon, #soccer1 .soccer1ball-line polygon, #soccer1 .soccer1_extra-line polygon, #soccer1 .soccer1_extra-line polyline, #soccer1 .soccer1_extra-line line"),h=p.current.querySelectorAll("#soccer1 .soccer1_extra-line > g"),s=p.current.querySelectorAll("#soccer1 .soccer1_fill > polygon"),c=p.current.querySelectorAll("#soccer1 .soccer1ball > g:first-child > polygon");m.forEach(a=>{const g=a.getTotalLength?a.getTotalLength():900;n.set(a,{strokeDasharray:g,strokeDashoffset:g,opacity:1})}),n.set(s,{x:-3500,opacity:0}),n.set(h,{x:-3e3,rotation:-1e3,transformOrigin:"50% 50%",opacity:0}),n.set(c,{scale:0,transformOrigin:"50% 50%",opacity:0}),n.timeline({defaults:{ease:"power3.out"}}).to(m,{strokeDashoffset:0,duration:2.2,stagger:.005}).to(h,{x:0,rotation:0,opacity:1,duration:1.5,stagger:.12,ease:"power4.out"},"-=2.0").to(s,{x:0,opacity:.16,duration:.8,stagger:.012,ease:"power3.out"},"-=1.5").to(c,{scale:1,opacity:.35,duration:.6,stagger:.08},"-=0.8"),n.to(p.current,{y:-10,duration:4.5,repeat:-1,yoyo:!0,ease:"sine.inOut"})}},[]);const x=()=>{e(i?"/dashboard":"/login?view=sign_up")};return t.jsx("section",{id:"about-cta","data-section-title":"Join Us",className:"py-16 md:py-24 px-6 max-w-7xl mx-auto select-none",children:t.jsxs(d.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"relative rounded-[1.5rem] md:rounded-[1.5rem] overflow-hidden py-16 md:py-24 px-6 md:px-12 bg-[rgb(var(--sp-dusk))] sp-inverse text-white border border-white/10 shadow-2xl",children:[t.jsx("style",{children:`
          /* Scoped styling for parsed SVG markup */
          #cta-soccer-container svg {
            display: none;
            opacity: 0;
            width: 100%;
            height: auto;
            max-height: 420px;
            overflow: visible;
          }
          #cta-soccer-container #soccer1 {
            display: block !important;
            opacity: 1 !important;
          }
          /* Custom vector highlights matching our brand palette */
          #cta-soccer-container .soccer1_line polygon,
          #cta-soccer-container .soccer1_line path,
          #cta-soccer-container .soccer1_line polyline {
            stroke: #39FF14 !important;
            stroke-width: 2.5px !important;
            fill: none !important;
          }
          #cta-soccer-container .soccer1ball-line polygon {
            stroke: #00FF99 !important;
            stroke-width: 3px !important;
            fill: none !important;
          }
          #cta-soccer-container .soccer1_extra-line polygon,
          #cta-soccer-container .soccer1_extra-line polyline,
          #cta-soccer-container .soccer1_extra-line line,
          #cta-soccer-container .soccer1_extra-line path {
            stroke: #00CC99 !important;
            stroke-width: 2px !important;
            fill: none !important;
          }
          #cta-soccer-container .soccer1_fill polygon {
            fill: #39FF14 !important;
          }
          #cta-soccer-container .soccer1ball > g:first-child polygon {
            fill: #00FF99 !important;
          }
        `}),t.jsx("div",{className:"absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[rgb(var(--sp-accent)/0.15)] blur-[140px] rounded-full pointer-events-none"}),t.jsx("div",{className:"absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[rgb(var(--sp-accent)/0.15)] blur-[140px] rounded-full pointer-events-none"}),t.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"}),t.jsxs("div",{className:"relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto",children:[t.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-center items-start text-left",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgb(var(--sp-surface)/0.05)] border border-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-8",children:[t.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[rgb(var(--sp-accent))] sp-accent-surface animate-pulse"}),t.jsx("span",{children:"Ready To Ascend To Excellence?"})]}),t.jsxs("h2",{className:"text-4xl sm:text-5.5xl lg:text-6.5xl font-semibold text-white tracking-tighter leading-[0.98] normal-case mb-6",children:["Join The ",t.jsx("br",{}),t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))]",children:"Kreedentials Ecosystem."})]}),t.jsx("p",{className:"text-white/70 text-sm sm:text-base font-semibold max-w-xl mb-10 leading-relaxed",children:"Creating an account is simple. Start tracking athletic progress, registering for active tournaments, and securing certified credentials today."}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto",children:[t.jsxs("button",{onClick:x,className:"group flex items-center justify-center gap-3 bg-gradient-to-r from-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))] text-[rgb(var(--sp-text))] px-9 py-4 rounded-full font-semibold text-xs normal-case tracking-normal hover:opacity-90 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 w-full sm:w-auto",children:[t.jsx("span",{children:"Get Started Now"}),t.jsx(O,{size:16,className:"group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[2.5]"})]}),t.jsxs("button",{onClick:()=>e("/coaches"),className:"flex items-center justify-center gap-3 bg-[rgb(var(--sp-surface)/0.05)] border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-xs normal-case tracking-normal hover:bg-[rgb(var(--sp-surface)/0.1)] transition-all duration-300 hover:scale-105 w-full sm:w-auto",children:[t.jsx("span",{children:"Meet Our Coaches"}),t.jsx(C,{size:16,className:"text-[rgb(var(--sp-accent-ink))]"})]})]}),t.jsxs("div",{className:"mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--sp-accent-ink))]",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(w,{size:14,className:"text-[rgb(var(--sp-accent-ink))]"})," Easy Online Registration"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(k,{size:14,className:"text-[rgb(var(--sp-accent-ink))]"})," Personal Athlete Log"]})]})]}),t.jsx("div",{className:"lg:col-span-5 w-full flex justify-center items-center relative overflow-hidden min-h-[350px]",children:t.jsx("div",{ref:p,id:"cta-soccer-container",className:"w-full h-auto max-h-[420px] filter drop-shadow-[0_0_20px_rgba(57,255,20,0.15)] pointer-events-none select-none overflow-visible",dangerouslySetInnerHTML:{__html:t1}})})]})]})})},g1=()=>(l.useEffect(()=>{const e=new V({duration:1.2,easing:p=>Math.min(1,1.001-Math.pow(2,-10*p))});function i(p){e.raf(p),requestAnimationFrame(i)}return requestAnimationFrame(i),()=>e.destroy()},[]),t.jsxs("div",{className:"bg-[rgb(var(--sp-canvas))] text-[rgb(var(--sp-text))] min-h-screen selection:bg-[rgb(var(--sp-accent))] selection:text-[rgb(var(--sp-text))]",children:[t.jsx("div",{className:"fixed top-0 left-0 w-full h-[3px] z-[110] pointer-events-none",children:t.jsx("div",{className:"h-full bg-gradient-to-r from-[rgb(var(--sp-accent))] via-[rgb(var(--sp-accent))] to-[rgb(var(--sp-accent))] origin-left scale-x-0 transition-transform duration-100",id:"scroll-progress"})}),t.jsx(K,{}),t.jsxs("main",{children:[t.jsx(Y,{}),t.jsx(H,{}),t.jsx(G,{}),t.jsx(J,{}),t.jsx(Q,{}),t.jsx(o1,{})]}),t.jsx(W,{})]}));export{g1 as default};
