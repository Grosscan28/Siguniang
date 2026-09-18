"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, BedDouble, Camera, Check, CloudSnow, TrainFront, Wallet } from "lucide-react";

type Option = {
  id: string;
  title: string;
  short: string;
  subtitle: string;
  route: string[];
  hero: string;
  accent: string;
  days: [string, string, string][];
  hotels: [string, string][];
  budget: [string, string, string][];
  total: string;
};

const options: Option[] = [
  {
    id: "siguniang",
    title: "Siguniang → Jiuzhaigou",
    short: "SIGUNIANG",
    subtitle: "Snow mountains, alpine valleys & turquoise lakes",
    route: ["Chengdu", "Siguniang", "Huanglongjiuzhai", "Jiuzhaigou", "Chongqing", "Wulong"],
    hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90",
    accent: "#d9ff63",
    days: [
      ["04 Mar", "Chengdu", "Arrival + Chunxi Road / Taikoo Li"],
      ["05 Mar", "Siguniang", "Bus Chengdu → Siguniang + Shuangqiao Valley"],
      ["06 Mar", "Siguniang → Chengdu", "Morning scenic + balik Chengdu"],
      ["07 Mar", "Jiuzhaigou", "HSR + bus → Jiuzhaigou, scenic day"],
      ["08 Mar", "Jiuzhaigou → Chongqing", "Bus + HSR → Chongqing"],
      ["09 Mar", "Chongqing", "City day: Liziba, Hongyadong, Jiefangbei"],
      ["10 Mar", "Wulong", "Day trip: Three Natural Bridges"],
      ["11 Mar", "Chongqing", "City / food / night view"],
      ["12 Mar", "Chengdu", "HSR back + final Chengdu"],
      ["13 Mar", "Chengdu", "✈ 13:20 → Jakarta"],
    ],
    hotels: [["04", "Chengdu"], ["05", "Siguniang"], ["06", "Chengdu"], ["07", "Jiuzhaigou"], ["08", "Chongqing"], ["09", "Chongqing"], ["10", "Chongqing"], ["11", "Chongqing"], ["12", "Chengdu"]],
    budget: [["✈", "Flight", "8.238.000"], ["🚆", "Bus + train + local", "2.800.000"], ["🎟", "Attraction", "1.150.000"], ["🏨", "Hotel", "1.250.000"], ["🍜", "Food", "1.350.000"], ["📱", "Internet", "100.000"], ["🧳", "Misc", "150.000"], ["◉", "Buffer", "1.500.000"]],
    total: "Rp16.538.000",
  },
  {
    id: "bipenggou",
    title: "Bipenggou → Jiuzhaigou",
    short: "BIPENGGOU",
    subtitle: "Glacial valley, snowy forests & the Jiuzhaigou lakes",
    route: ["Chengdu", "Bipenggou", "Huanglongjiuzhai", "Jiuzhaigou", "Chongqing", "Wulong"],
    hero: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2400&q=90",
    accent: "#9ee7ff",
    days: [
      ["04 Mar", "Chengdu", "Arrival + Chunxi Road / Taikoo Li"],
      ["05 Mar", "Bipenggou", "Early bus → Bipenggou + scenic valley"],
      ["06 Mar", "Bipenggou → Chengdu", "Morning scenic + balik Chengdu"],
      ["07 Mar", "Jiuzhaigou", "HSR + bus → Jiuzhaigou, scenic day"],
      ["08 Mar", "Jiuzhaigou → Chongqing", "Bus + HSR → Chongqing"],
      ["09 Mar", "Chongqing", "City day + night views"],
      ["10 Mar", "Wulong", "Day trip: Three Natural Bridges"],
      ["11 Mar", "Chongqing", "City / food / free time"],
      ["12 Mar", "Chengdu", "HSR back + final Chengdu"],
      ["13 Mar", "Chengdu", "✈ 13:20 → Jakarta"],
    ],
    hotels: [["04", "Chengdu"], ["05", "Bipenggou / Lixian"], ["06", "Chengdu"], ["07", "Jiuzhaigou"], ["08", "Chongqing"], ["09", "Chongqing"], ["10", "Chongqing"], ["11", "Chongqing"], ["12", "Chengdu"]],
    budget: [["✈", "Flight", "8.238.000"], ["🚆", "Bus + train + local", "2.710.000"], ["🎟", "Attraction", "1.060.000"], ["🏨", "Hotel", "1.300.000"], ["🍜", "Food", "1.350.000"], ["📱", "Internet", "100.000"], ["🧳", "Misc", "150.000"], ["◉", "Buffer", "1.500.000"]],
    total: "Rp16.408.000",
  },
  {
    id: "yading",
    title: "Daocheng Yading",
    short: "DAOCHENG YADING",
    subtitle: "High-altitude valleys, snow peaks & a slower western Sichuan road trip",
    route: ["Chengdu", "Kangding", "Xinduqiao", "Litang", "Daocheng", "Yading", "Chongqing"],
    hero: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=2400&q=90",
    accent: "#ffc96b",
    days: [
      ["04 Mar", "Chengdu", "Arrival + city night"],
      ["05 Mar", "Kangding", "Long-distance bus Chengdu → Kangding"],
      ["06 Mar", "Daocheng", "Kangding → Xinduqiao → Litang → Daocheng"],
      ["07 Mar", "Yading", "Transfer to Shangri-La Town + Yading scenic area"],
      ["08 Mar", "Daocheng", "Return to Daocheng + recovery / buffer"],
      ["09 Mar", "Chengdu", "Long-distance bus Daocheng → Chengdu"],
      ["10 Mar", "Chongqing", "HSR Chengdu → Chongqing + city night"],
      ["11 Mar", "Chongqing", "Full city day"],
      ["12 Mar", "Chengdu", "HSR back + final Chengdu"],
      ["13 Mar", "Chengdu", "✈ 13:20 → Jakarta"],
    ],
    hotels: [["04", "Chengdu"], ["05", "Kangding"], ["06", "Daocheng"], ["07", "Shangri-La Town"], ["08", "Daocheng"], ["09", "Chengdu"], ["10", "Chongqing"], ["11", "Chongqing"], ["12", "Chengdu"]],
    budget: [["✈", "Flight", "8.238.000"], ["🚌", "Long bus + train + local", "3.420.000"], ["🎟", "Yading + local transport", "820.000"], ["🏨", "Hotel", "1.450.000"], ["🍜", "Food", "1.400.000"], ["📱", "Internet", "100.000"], ["🧳", "Misc", "150.000"], ["◉", "Buffer", "1.500.000"]],
    total: "Rp17.078.000",
  {
    id: "bipenggou-dagu",
    title: "Bipenggou → Dagu → Siguniang",
    short: "BIPENGGOU · DAGU · SIGUNIANG",
    subtitle: "Glacial valley, Dagu Glacier & snow mountains — the full western Sichuan loop",
    route: ["Chengdu", "Bipenggou", "Heishui / Dagu", "Siguniang", "Chengdu", "Chongqing"],
    hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90",
    accent: "#b8e7ff",
    days: [
      ["04 Mar", "Chengdu", "Arrival + Chunxi Road / Taikoo Li"],
      ["05 Mar", "Bipenggou → Heishui", "Chengdu → Bipenggou + scenic valley, then continue to Heishui"],
      ["06 Mar", "Heishui → Dagu → Siguniang", "Dagu Glacier + continue to Siguniang"],
      ["07 Mar", "Siguniang", "Full day at Shuangqiaogou"],
      ["08 Mar", "Siguniang → Chengdu", "Morning / final scenic time + private van back to Chengdu"],
      ["09 Mar", "Chengdu", "Panda Base + city / food"],
      ["10 Mar", "Chongqing", "HSR Chengdu → Chongqing + Jiefangbei / night views"],
      ["11 Mar", "Chongqing", "Full city day: Liziba, Hongyadong, Jiefangbei"],
      ["12 Mar", "Chongqing", "Full city / food / free time"],
      ["13 Mar", "Chengdu", "HSR Chongqing → Chengdu + airport → ✈ Jakarta"],
    ],
    hotels: [["04", "Chengdu"], ["05", "Heishui"], ["06", "Siguniang"], ["07", "Siguniang"], ["08", "Chengdu"], ["09", "Chengdu"], ["10", "Chongqing"], ["11", "Chongqing"], ["12", "Chongqing"]],
    budget: [
      ["✈", "Flight", "8.000.000"],
      ["🏨", "Hotel · 8 nights", "1.200.000"],
      ["🚐", "9-seater + driver · D1–D4", "1.300.000"],
      ["🚄", "HSR Chengdu–Chongqing PP", "805.000"],
      ["🚇", "City transport + airport", "400.000"],
      ["🏔", "Bipenggou", "437.000"],
      ["🏔", "Dagu Glacier", "851.000"],
      ["🏔", "Siguniang", "276.000"],
      ["🐼", "Panda Base", "127.000"],
      ["🍜", "Food · 9 days", "1.050.000"],
      ["🧾", "Misc", "400.000"],
      ["◉", "Buffer", "1.500.000"]
    ],
    total: "Rp16.346.000",
  },
  },
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  const [selectedId, setSelectedId] = useState("siguniang");
  const [progress, setProgress] = useState(0);
  const selected = options.find((option) => option.id === selectedId) ?? options[0];

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ "--option-accent": selected.accent } as React.CSSProperties}>
      <div className="progress"><span style={{ transform: `scaleX(${progress})` }} /></div>

      <section className="hero group-hero">
        <div className="hero-image group-photo" />
        <div className="hero-vignette" />
        <div className="hero-nav"><span>CHINA TRIP 2027</span><span>8 PEOPLE</span><span>04—13 MAR</span></div>
        <div className="hero-copy">
          <p className="eyebrow">EIGHT PEOPLE · THREE ROUTES · ONE TRIP</p>
          <h1>Where should<br /><i>we go?</i></h1>
          <p className="hero-sub">Three ways to cross Sichuan. Pick the route, then explore the trip day by day.</p>
        </div>
        <div className="hero-meta"><span>SCROLL TO CHOOSE</span><ArrowDown size={16} /></div>
      </section>

      <section className="choice-section" id="options">
        <div className="choice-intro" data-reveal>
          <p className="eyebrow">THE BIG DECISION</p>
          <h2>Same people.<br /><em>Different route.</em></h2>
          <p>We keep Chengdu, Chongqing and the same flight dates. The middle of the trip changes depending on which landscape we want to chase.</p>
        </div>

        <div className="option-grid">
          {options.map((option, index) => (
            <button className={`option-card ${selectedId === option.id ? "active" : ""}`} key={option.id} onClick={() => setSelectedId(option.id)} style={{ "--card-accent": option.accent } as React.CSSProperties}>
              <div className="option-image" style={{ backgroundImage: `url(${option.hero})` }} />
              <div className="option-overlay" />
              <span className="option-number">0{index + 1}</span>
              <div className="option-content">
                <p>{option.short}</p>
                <h3>{option.title}</h3>
                <span>{option.subtitle}</span>
                <div className="option-bottom"><b>{option.total}</b><span>{selectedId === option.id ? <Check size={16} /> : <ArrowRight size={16} />}</span></div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="selected-hero" data-reveal>
        <div className="selected-image" style={{ backgroundImage: `url(${selected.hero})` }} />
        <div className="selected-shade" />
        <div className="selected-copy">
          <p className="eyebrow">YOUR SELECTED ROUTE</p>
          <h2>{selected.title}</h2>
          <p>{selected.subtitle}</p>
        </div>
        <div className="route-pills">{selected.route.map((place) => <span key={place}>{place}</span>)}</div>
      </section>

      <section className="details chapter" data-reveal>
        <div className="sticky-detail">
          <p className="eyebrow">ITINERARY · {selected.short}</p>
          <h2>Day by day,<br /><em>without the clutter.</em></h2>
          <p className="detail-note">Select another route above anytime. The itinerary, hotels and budget below update automatically.</p>
        </div>
        <div className="day-table">
          <div className="table-head"><span>DATE</span><span>PLACE</span><span>PLAN</span></div>
          {selected.days.map(([date, location, activity]) => (
            <div className="day-row" key={`${selected.id}-${date}`}><strong>{date}</strong><span>{location}</span><span>{activity}</span></div>
          ))}
        </div>
      </section>

      <section className="route-section" data-reveal>
        <div className="route-heading"><p className="eyebrow">ROUTE AT A GLANCE</p><h2>One line,<br /><em>many views.</em></h2></div>
        <div className="route-map">
          <div className="map-grid" />
          <svg viewBox="0 0 900 420" className="route-svg" aria-label={`${selected.title} route`}>
            <path d="M80 300 C180 250 220 315 315 220 C390 145 455 185 540 110 C620 45 690 145 820 90" />
            {selected.route.map((name, i) => {
              const points = [[80,300],[220,270],[315,220],[455,165],[610,145],[820,90]];
              const [x,y] = points[Math.min(i, points.length - 1)];
              return <g key={name}><circle cx={x} cy={y} r="13" className="route-dot" /><circle cx={x} cy={y} r="4" className="route-core" /><text x={x + 19} y={y + 5}>{name}</text><text x={x - 5} y={y - 21} className="route-number">0{i + 1}</text></g>;
            })}
          </svg>
          <div className="map-note"><span>ROUTE</span>{selected.short}</div>
        </div>
      </section>

      <section className="split-section" data-reveal>
        <div className="hotel-card dark-card">
          <div className="card-label"><BedDouble size={17} /> HOTELS</div>
          {selected.hotels.map(([day, place]) => <div className="hotel-row" key={`${selected.id}-${day}`}><span>{day}</span><b>{place}</b></div>)}
        </div>
        <div className="budget-card">
          <div className="card-label"><Wallet size={17} /> TARGET BUDGET / PERSON</div>
          {selected.budget.map(([icon, label, amount]) => <div className="budget-row" key={`${selected.id}-${label}`}><span>{icon} {label}</span><b>Rp{amount}</b></div>)}
          <div className="budget-total"><span>TOTAL</span><strong>{selected.total}</strong></div>
        </div>
      </section>

      <section className="photo-memory" data-reveal>
        <div className="memory-photo group-photo" />
        <div className="memory-copy"><p className="eyebrow">THE GROUP</p><h2>Same faces,<br /><em>new views.</em></h2><p>This is the silly part of the trip. Eight people, one mountain background, and absolutely no reason to take ourselves seriously.</p></div>
      </section>

      <section className="closing">
        <div className="closing-image" />
        <div className="closing-content" data-reveal>
          <p className="eyebrow">AND THEN</p>
          <h2>We go home<br /><em>with too many photos.</em></h2>
          <p>Chengdu → Jakarta · 13 Mar · 13:20</p>
          <div className="closing-stats"><span><Camera size={16} /> PHOTOS</span><span><TrainFront size={16} /> TRAINS</span><span><CloudSnow size={16} /> SNOW</span></div>
        </div>
      </section>

      <footer><span>CHINA 2027</span><span>{selected.title.toUpperCase()}</span><span>MADE FOR THE GROUP</span></footer>
    </main>
  );
}
