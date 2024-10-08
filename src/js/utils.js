export function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
}
export function formateDate(date) {
  return new Date(date).toLocaleDateString('es-PE', {
    timeZone: "UTC",
  })
}