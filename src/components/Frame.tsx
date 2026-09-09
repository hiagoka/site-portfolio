import { profile } from "../data/portfolio";

/** Moldura fixa com marcas de corte — a "prancheta". */
export function Frame() {
  return (
    <div className="frame" aria-hidden>
      <span className="frame-corner frame-corner--tl" />
      <span className="frame-corner frame-corner--tr" />
      <span className="frame-corner frame-corner--bl" />
      <span className="frame-corner frame-corner--br" />
      <span className="frame-tick frame-tick--t" />
      <span className="frame-tick frame-tick--b" />
      <span className="frame-tick frame-tick--l" />
      <span className="frame-tick frame-tick--r" />
      <span className="frame-label frame-label--l">HK &mdash; Portfolio &rsquo;26</span>
      <span className="frame-label frame-label--r">
        {profile.location} &mdash; {"-23.55, -46.63"}
      </span>
    </div>
  );
}
