"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  Camera,
  CircleDot,
  CloudSnow,
  TrainFront,
  Wallet,
} from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=88",
    label: "SICHUAN / 01",
    title: "Into the mountains",
    text: "A trip that starts in Chengdu, then leaves the city behind for the high valleys of western Sichuan.",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=88",
    label: "SIGUNIANG / 02",
    title: "Four sisters, one valley",
    text: "Siguniang is the first deep-nature chapter — snow, winding roads, and a slower rhythm.",
  },
  {
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=88",
    label: "JIUZHAIGOU / 03",
    title: "Turquoise after snow",
    text: "Then north to Jiuzhaigou: lakes, forests and winter colour, experienced mostly from the scenic shuttle and boardwalks.",
  },
  {
    src: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=2200&q=88",
    label: "CHONGQING / 04",
    title: "Back to the city",
    text: "The landscape changes again. Skyscrapers, neon, hotpot and the steep geometry of Chongqing.",
  },
];

const days = [
  ["04 Mar", "Chengdu", "Arrival + city night"],
  ["05 Mar", "Siguniang", "Chengdu → Siguniang + scenic"],
  ["06 Mar", "Siguniang → Chengdu", "Full scenic + balik Chengdu"],
  ["07 Mar", "Jiuzhaigou", "HSR + Jiuzhaigou"],
  ["08 Mar", "Jiuzhaigou → Chongqing", "Balik + HSR ke Chongqing"],
  ["09 Mar", "Chongqing", "City"],
  ["10 Mar", "Wulong", "Day trip"],
  ["11 Mar", "Chongqing", "City"],
  ["12 Mar", "Chengdu", "Balik + final Chengdu"],
  ["13 Mar", "Chengdu", "✈ 13:20 JKT"],
];

const hotels = [
  ["04", "Chengdu"], ["05", "Siguniang"], ["06", "Chengdu"],
  ["07", "Jiuzhaigou"], ["08", "Chongqing"], ["09", "Chongqing"],
  ["10", "Chongqing"], ["11", "Chongqing"], ["12", "Chengdu"],
];

const budget = [
  ["✈", "Flight", "8.238.000"],
  ["🚆", "Bus + train + local transport", "2.800.000"],
  ["🎟", "Attraction", "1.150.000"],
  ["🏨", "Hotel", "1.250.000"],
  ["🍜", "Food", "1.350.000"],
  ["📱", "Internet", "100.000"],
  ["🧳", "Misc", "150.000"],
  ["◉", "Buffer", "1.500.000"],
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.16 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  const [progress, setProgress] = useState(0);

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
    <main>
      <div className="progress"><span style={{ transform: `scaleX(${progress})` }} /></div>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-vignette" />
        <div className="hero-copy">
          <p className="eyebrow">CHINA · 04—13 MAR 2027 · 8 PEOPLE</p>
          <h1>Siguniang <i>→</i><br />Jiuzhaigou</h1>
          <p className="hero-sub">A little story about going west, chasing snow, and finding our way back to the city.</p>
        </div>
        <div className="hero-meta"><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></div>
      </section>

      <section className="intro chapter" data-reveal>
        <p className="eyebrow">THE ROUTE</p>
        <h2>From city lights<br /><em>to mountain air.</em></h2>
        <p className="lede">Nine days across Chengdu, Siguniang, Jiuzhaigou, Chongqing and Wulong. The itinerary is the practical part — this page is the memory of how it should feel.</p>
      </section>

      <section className="photo-story">
        {photos.map((photo, index) => (
          <article className="story-photo" key={photo.title} data-reveal>
            <img src={photo.src} alt="" />
            <div className="photo-shade" />
            <div className="photo-caption">
              <p className="eyebrow">{photo.label}</p>
              <h2>{photo.title}</h2>
              <p>{photo.text}</p>
            </div>
            <span className="photo-index">0{index + 1}</span>
          </article>
        ))}
      </section>

      <section className="route-section">
        <div className="route-sticky">
          <div className="route-copy" data-reveal>
            <p className="eyebrow">THE JOURNEY</p>
            <h2>Five places.<br /><em>One moving line.</em></h2>
            <p>Tap nothing. Just scroll. The route unfolds as the story moves from Chengdu to the mountains, north to Jiuzhaigou, then east to Chongqing.</p>
          </div>
          <div className="route-map" data-reveal>
            <div className="map-grid" />
            <svg viewBox="0 0 700 620" className="route-svg" aria-label="Stylized route map">
              <path d="M155 470 C220 390 185 315 270 280 C350 245 310 170 405 145 C475 126 530 175 590 112" />
              {[['Chengdu',155,470,'01'],['Siguniang',270,280,'02'],['Jiuzhaigou',405,145,'03'],['Chongqing',590,112,'04'],['Wulong',535,230,'05']].map(([name,x,y,n]) => (
                <g key={name as string}>
                  <circle cx={x as number} cy={y as number} r="12" className="route-dot" />
                  <circle cx={x as number} cy={y as number} r="4" className="route-core" />
                  <text x={(x as number)+20} y={(y as number)+5}>{name as string}</text>
                  <text x={(x as number)-5} y={(y as number)-20} className="route-number">{n as string}</text>
                </g>
              ))}
            </svg>
            <div className="map-note"><span>03</span> JIUZHAIGOU</div>
          </div>
        </div>
      </section>

      <section className="details chapter" data-reveal>
        <div>
          <p className="eyebrow">DAY BY DAY</p>
          <h2>The plan,<br /><em>without the clutter.</em></h2>
        </div>
        <div className="day-table">
          <div className="table-head"><span>TANGGAL</span><span>LOKASI</span><span>AKTIVITAS</span></div>
          {days.map(([date, location, activity]) => (
            <div className="day-row" key={date}><strong>{date}</strong><span>{location}</span><span>{activity}</span></div>
          ))}
        </div>
      </section>

      <section className="split-section" data-reveal>
        <div className="hotel-card dark-card">
          <div className="card-label"><BedDouble size={17} /> HOTEL</div>
          {hotels.map(([day, place]) => <div className="hotel-row" key={day}><span>{day}</span><b>{place}</b></div>)}
        </div>
        <div className="budget-card">
          <div className="card-label"><Wallet size={17} /> TARGET / PERSON</div>
          {budget.map(([icon, label, amount]) => <div className="budget-row" key={label}><span>{icon} {label}</span><b>{amount}</b></div>)}
          <div className="budget-total"><span>TOTAL</span><strong>Rp16.538.000</strong></div>
        </div>
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

      <footer><span>CHINA 2027</span><span>SIGUNIANG → JIUZHAIGOU</span><span>MADE FOR THE GROUP</span></footer>
    </main>
  );
}
