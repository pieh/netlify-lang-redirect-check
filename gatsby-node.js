exports.createPages = ({ store }) => {
  store.getState().redirects.push(
    {
      fromPath: "/",
      toPath: "/witaj-swiecie",
      Language: `pl`,
    },
    {
      fromPath: "/",
      toPath: "/hola-mundo",
      Language: `es`,
    },
    {
      fromPath: "/",
      toPath: "/hello-world",
      Language: `en`,
    }
  )
}
