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
    },
    {
      fromPath: "/test",
      toPath: "/witaj-swiecie",
      Language: `pl`,
    },
    {
      fromPath: "/test",
      toPath: "/hola-mundo",
      Language: `es`,
    },
    {
      fromPath: "/test",
      toPath: "/hello-world",
      Language: `en`,
    },
    {
      fromPath: "/wat",
      toPath: "/hello-world",
    }
  )
}
