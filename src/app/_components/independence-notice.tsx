/**
 * Bilingual independence / trademark disclaimer.
 *
 * The text is intentionally hard-coded and shown in BOTH languages at once
 * (Spanish, with English in a more subtle italic underneath) regardless of the
 * site's language toggle — it's a legal notice, not UI copy. Keep this wording
 * in sync with section 1 of TERMS-OF-SERVICE.md.
 *
 * Pure presentational component (no client APIs) so it can be used from both
 * server components (legal pages) and the client landing footer.
 */
export function IndependenceNotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "rounded-xl border border-border bg-surface-2/40 px-5 py-4 backdrop-blur-sm " +
        className
      }
    >
      <p className="text-xs sm:text-[13px] text-soft leading-relaxed">
        Mythic Lobby es una aplicación independiente creada por la comunidad. No
        está afiliada, patrocinada ni avalada por ningún publisher de videojuegos
        (Moonton, Garena, Activision, Supercell, Lilith Games, ni ningún otro).
        Todas las marcas, logos y nombres de juegos pertenecen a sus respectivos
        dueños.
      </p>
      <p className="text-[11px] sm:text-xs text-muted italic leading-relaxed mt-2">
        Independent community app, not affiliated with any game publisher. All
        trademarks belong to their respective owners.
      </p>
    </div>
  );
}
