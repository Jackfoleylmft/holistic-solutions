export default function PageHeader({ label, children, subtitle }) {
  return (
    <section className="page-header">
      {label && <p className="section-label">{label}</p>}
      <h1>{children}</h1>
      {subtitle && <p className="page-sub">{subtitle}</p>}
    </section>
  )
}
