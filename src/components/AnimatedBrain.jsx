import { useEffect, useRef } from "react";

// Animated SVG Brain with draw + stagger-fade effects (pure CSS, no Velocity.js)
export default function AnimatedBrain({ className = "" }) {
  const svgRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    function staggerFadeIn() {
      if (!svgRef.current) return;
      const dots = svgRef.current.querySelectorAll(".cls-2");
      // Reset all dots
      dots.forEach((dot) => {
        dot.style.opacity = "0";
        dot.style.transition = "none";
      });

      // Stagger fade in
      dots.forEach((dot, i) => {
        setTimeout(() => {
          dot.style.transition = "opacity 0.6s ease-in";
          dot.style.opacity = "1";
        }, 2000 + i * 40);
      });

      // Stagger fade out after 14s
      dots.forEach((dot, i) => {
        setTimeout(() => {
          dot.style.transition = "opacity 0.5s ease-out";
          dot.style.opacity = "0";
        }, 14000 + i * 20);
      });
    }

    staggerFadeIn();
    intervalRef.current = setInterval(staggerFadeIn, 20000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={className}>
      <style>{`
        .brain-path {
          animation: brain-draw 20s infinite linear;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        @keyframes brain-draw {
          0%   { stroke-dashoffset: 1000; }
          50%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 1000; }
        }
        .cls-1, .cls-2 {
          fill: none;
          stroke-miterlimit: 10;
        }
        .cls-1 {
          stroke-width: 2.5px;
          stroke: var(--accent, #C8102E);
        }
        .cls-2 {
          stroke-width: 2.5px;
          stroke: var(--accent, #C8102E);
          fill: var(--accent, #C8102E);
          opacity: 0;
        }
      `}</style>

      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 383.88 358.88"
        width="100%"
        height="100%"
      >
        <path
          d="M200.44 349.44s-4-7-10-50-15-66-34-76-32-11-51-36-31-10-31-10M48.44 173.44s20.13-30.48 50.06 6.26M29.44 170.44s5-19 24-18 30 3.74 49.48 31.87M54.44 140.44s24-12 37 7 5 24 29 42 20.3 25.58 32.64 32.3M16.44 155.44s14-2 23-19 34-12 41-3 12.5 16.28 12.5 16.28M9.44 141.44s9-20 28-19 27.62 3.05 31.3 4M7.44 126.44s12.53 0 18.76-2M11.44 95.44s18 12 28 14 25 8 35 15 17.25 21.92 20.13 28M7.44 112.44s15.2 2.25 26.1-4.87M18.44 80.44a52.26 52.26 0 0 0 28 17c18 4 34 10 42 18s15 19 17 29 3.9 29.76 17.45 46.88M29.44 61.44s34.48 15.15 36.74 41.58M78.44 88.44a60.8 60.8 0 0 1 25.32 50.16M54.44 40.44s24 8 40 23 22 28 25 59 2 53 22 69 33 31 41 47 8 61.3 10 74.65M40.44 50.44s16 2 26 9 17 21 23 25 9.77 11 25.4 11M74.44 31.44s26 8 44 41 2.24 64.26 2.24 64.26M112.44 18.44s14 11 21 64-5.8 97.9 5.6 107M94.44 24.44a80 80 0 0 0 32.63 25.13M132.44 12.44a130.4 130.4 0 0 1 12 37c3 20 1 84 3 96s3.72 41.3 17.36 67.65M153.44 9.44s-1 20 3 36 12.5 58.95-9.74 89M170.44 48.44s11 19 8 45-18 60-19 68-3.27 30.45-1.64 35.22M171.44 7.44s-1 16 8 28 16 24 14 51-10 50-14 63-8 37-5 59 7.67 26.26 9.33 33.13M208.44 352.44s-10-25-8-52 0-60-5-70-7-31-5-46 13-39 25-58 14-40 15-50M191.44 7.44s2.6 30.33-5.2 38.17M194.64 168.36c.8-1.92-4.2-20.92 12.8-66.92s20-62 18-92M208.44 7.44s2 28 2 42-.8 44.95-3.9 54.48M207.35 140.3c1.1-.86 19.1-6.86 31.1-27.86s12-35 14-49 6-38 9-45M244.44 13.44s-3 16-4 27-2 17 0 27 4.58 29.5-.2 41.75M304.44 40.44a106.14 106.14 0 0 0-20 31c-8 19-12 40-26 56s-23 22-40 29-27.24 26.76-28.62 34.88M291.44 31.44s-18 22-24 45-9 33-18 45-19.23 30-28.62 34M277.44 24.44S266.77 44 267.1 77.74M314.44 48.44s-18 27-29 55-22 43-34 53-12 11-37 23-23.05 39.58-22 42.3M327.44 58.44s-6 13-13 19-22.5 15.78-29.75 27.9M199.24 245.84s.2-24.4 14.2-38.4 25-17 37-28 28-27 49-72M339.44 68.44s-15 10-22 37-31.75 54.37-48.87 54.7M350.44 79.44s-11 12-16 22-11 36-23 51-29 32-50 35a143.52 143.52 0 0 0-37.82 11.13M361.44 97.44s-5.8 16.56-36.9 30.28M371.44 120.44s-17 2-25 14-20 33-30 40-28.7 10.68-49.34 11.84M374.44 140.44a66 66 0 0 0-24 12c-11 9-25.34 17.42-31.17 19.7M376.44 160.44s-9-1-20 5-32 25-52 28-28 5-65 9-38 103-25 145M374.44 176.44s-10 6-17 10-18.34 6.58-38.17 2.3M366.44 198.44s-12 6-23 3-27.2-11.06-42.1-7.53M337.44 211.44s-10 4-23-4-33.77-7.37-44.38-8.7M220.44 340.44s-6-17-7-51 5-61 26-75 54-2 63 7 12 9 12 9M326.44 221.44s-18.7 1.2-28.35-3.4M239.44 230.44s-15.38-1.38-23.2 21.3M257.44 241.44s10-11 0-20-30.65 3.54-33.82 10.27M271.44 245.44s10-12 3-26-31.58-7-31.58-7M287.44 245.44s8-9-2-17-11-9-11-9M302.44 239.44s3-9-8-12a143.66 143.66 0 0 1-17.3-5.7"
          className="cls-1 brain-path"
        />
        <circle cx="71.94" cy="179.94" r="3.5" className="cls-2" />
        <circle cx="47.94" cy="176.94" r="3.5" className="cls-2" />
        <circle cx="29.94" cy="173.94" r="3.5" className="cls-2" />
        <circle cx="51.94" cy="142.94" r="3.5" className="cls-2" />
        <circle cx="12.94" cy="156.94" r="3.5" className="cls-2" />
        <circle cx="7.94" cy="144.94" r="3.5" className="cls-2" />
        <circle cx="3.94" cy="124.94" r="3.5" className="cls-2" />
        <circle cx="3.94" cy="111.94" r="3.5" className="cls-2" />
        <circle cx="8.94" cy="92.94" r="3.5" className="cls-2" />
        <circle cx="16.94" cy="76.94" r="3.5" className="cls-2" />
        <circle cx="75.94" cy="85.94" r="3.5" className="cls-2" />
        <circle cx="25.94" cy="59.94" r="3.5" className="cls-2" />
        <circle cx="36.94" cy="49.94" r="3.5" className="cls-2" />
        <circle cx="50.94" cy="38.94" r="3.5" className="cls-2" />
        <circle cx="70.94" cy="29.94" r="3.5" className="cls-2" />
        <circle cx="92.94" cy="20.94" r="3.5" className="cls-2" />
        <circle cx="110.94" cy="14.94" r="3.5" className="cls-2" />
        <circle cx="130.94" cy="8.94" r="3.5" className="cls-2" />
        <circle cx="153.94" cy="5.94" r="3.5" className="cls-2" />
        <circle cx="168.94" cy="44.94" r="3.5" className="cls-2" />
        <circle cx="171.94" cy="3.94" r="3.5" className="cls-2" />
        <circle cx="190.94" cy="3.94" r="3.5" className="cls-2" />
        <circle cx="208.94" cy="3.94" r="3.5" className="cls-2" />
        <circle cx="225.94" cy="5.94" r="3.5" className="cls-2" />
        <circle cx="230.94" cy="72.94" r="3.5" className="cls-2" />
        <circle cx="244.94" cy="9.94" r="3.5" className="cls-2" />
        <circle cx="262.94" cy="14.94" r="3.5" className="cls-2" />
        <circle cx="278.94" cy="20.94" r="3.5" className="cls-2" />
        <circle cx="293.94" cy="28.94" r="3.5" className="cls-2" />
        <circle cx="306.94" cy="37.94" r="3.5" className="cls-2" />
        <circle cx="316.94" cy="45.94" r="3.5" className="cls-2" />
        <circle cx="328.94" cy="54.94" r="3.5" className="cls-2" />
        <circle cx="300.94" cy="103.94" r="3.5" className="cls-2" />
        <circle cx="341.94" cy="65.94" r="3.5" className="cls-2" />
        <circle cx="352.94" cy="76.94" r="3.5" className="cls-2" />
        <circle cx="362.94" cy="93.94" r="3.5" className="cls-2" />
        <circle cx="374.94" cy="119.94" r="3.5" className="cls-2" />
        <circle cx="377.94" cy="139.94" r="3.5" className="cls-2" />
        <circle cx="379.94" cy="159.94" r="3.5" className="cls-2" />
        <circle cx="377.94" cy="175.94" r="3.5" className="cls-2" />
        <circle cx="369.94" cy="196.94" r="3.5" className="cls-2" />
        <circle cx="340.94" cy="209.94" r="3.5" className="cls-2" />
        <circle cx="329.94" cy="219.94" r="3.5" className="cls-2" />
        <circle cx="317.94" cy="231.94" r="3.5" className="cls-2" />
        <circle cx="301.94" cy="242.94" r="3.5" className="cls-2" />
        <circle cx="285.94" cy="248.94" r="3.5" className="cls-2" />
        <circle cx="269.94" cy="248.94" r="3.5" className="cls-2" />
        <circle cx="254.94" cy="243.94" r="3.5" className="cls-2" />
        <circle cx="242.94" cy="229.94" r="3.5" className="cls-2" />
        <circle cx="221.94" cy="343.94" r="3.5" className="cls-2" />
        <circle cx="215.94" cy="350.94" r="3.5" className="cls-2" />
        <circle cx="209.94" cy="355.94" r="3.5" className="cls-2" />
        <circle cx="201.94" cy="352.94" r="3.5" className="cls-2" />
      </svg>
    </div>
  );
}
