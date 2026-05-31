import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ end, suffix = "", duration = 1.6 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { num: 2, suffix: "+", label: "Years Experience" },
  { num: 10, suffix: "+", label: "Projects Completed" },
  { num: 100, suffix: "%", label: "Responsive Design" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl grid md:grid-cols-5 gap-12 items-start">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Building from <span className="text-gradient">start to finish.</span>
          </h2>
        </motion.div>
        <motion.div
          className="md:col-span-3 space-y-5 text-muted-foreground text-lg leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            I'm a <span className="text-foreground font-medium">MERN Stack Developer</span> passionate
            about building full-featured web applications from start to finish. I enjoy turning ideas
            into clean, responsive, and user-friendly digital experiences.
          </p>
          <p>
            With expertise in MongoDB, Express, React, and Node.js, I focus on writing maintainable
            code, implementing secure authentication, and deploying scalable applications. Always
            eager to learn and tackle new challenges.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-4"
              >
                <div className="font-display text-3xl font-bold text-gradient">
                  <CountUp end={s.num} suffix={s.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
