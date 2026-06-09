// React test stub for LegalPageSection — used only for unit tests.
// The production component is LegalPageSection.astro.

type Props = {
  t: Record<string, string>;
  titleKey: string;
  descKey: string;
  updatedKey: string;
  contentKey: string;
}

export function LegalPageSection({ t, titleKey, updatedKey, contentKey }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">{t[titleKey]}</h1>
      <p className="mb-8 text-sm">{t[updatedKey]}</p>
      <div className="space-y-4 leading-relaxed">
        {t[contentKey]}
      </div>
    </section>
  );
}
