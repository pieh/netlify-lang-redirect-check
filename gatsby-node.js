exports.createPages = ({ actions: { createRedirect } }) => {
  createRedirect({
    fromPath: "/",
    toPath: "/witaj-swiecie",
    Language: `pl`,
  })
  createRedirect({
    fromPath: "/",
    toPath: "/hola-mundo",
    Language: `es`,
  })
  createRedirect({
    fromPath: "/",
    toPath: "/hello-world",
    Language: `en`,
  })
}
