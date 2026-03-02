export default function PageHeader({ label, title, subtitle }) {
  return (
    <section className="page-header">
      {label && <p className="section-label">{label}</p>}
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p className="page-sub">{subtitle}</p>}
    </section>
  )
}
