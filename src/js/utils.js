export function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
}
export function formateDate(date) {
  return new Date(date).toLocaleDateString('es-PE', {
    timeZone: "UTC",
  })
}

export function formatBlogPosts(posts, {
  filterOutDrafts = true,
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = undefined
} = {}) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;
    if (filterOutDrafts && draft) return acc;
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;
    acc.push(post)
    return acc
  }, [])
  //Sort by Date or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    )
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }
  //Limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts
}