/** Quatro marcas de corte nos cantos do elemento posicionado pai. */
export function CropMarks({ lg = false }: { lg?: boolean }) {
  return (
    <>
      {(["tl", "tr", "bl", "br"] as const).map((c) => (
        <span key={c} className={`crop crop--${c} ${lg ? "crop--lg" : ""}`} />
      ))}
    </>
  );
}
