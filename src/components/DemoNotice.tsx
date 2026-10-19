type DemoNoticeProps = {
  title?: string;
  children: React.ReactNode;
};

export function DemoNotice({
  title = "Demonstration content",
  children,
}: DemoNoticeProps) {
  return (
    <aside
      className="border-l-4 border-orange bg-white px-5 py-4 text-sm leading-6 text-muted shadow-[0_1px_0_rgba(48,48,48,0.06)]"
      role="note"
    >
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
        {title}
      </p>
      <div className="mt-2 space-y-2">{children}</div>
    </aside>
  );
}
