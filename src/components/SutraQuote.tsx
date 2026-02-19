export function SutraQuote({
  source,
  children,
}: {
  source?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-6 rounded-2xl border p-5">
      <blockquote className="text-base leading-relaxed opacity-90">
        {children}
      </blockquote>
      {source ? (
        <figcaption className="mt-3 text-sm opacity-70">— {source}</figcaption>
      ) : null}
    </figure>
  );
}
