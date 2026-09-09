import { motion } from "framer-motion";

type Props = {
  kicker: string;
  title: string;
  onDark?: boolean;
};

export function SectionTitle({ kicker, title, onDark }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <p
        className={`font-heading text-xs uppercase tracking-[0.4em] ${
          onDark ? "text-gold-light" : "text-seal"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-2 font-display text-4xl sm:text-5xl ${
          onDark ? "text-parchment-100" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className="gold-rule mx-auto mt-4 w-40" />
    </motion.header>
  );
}
