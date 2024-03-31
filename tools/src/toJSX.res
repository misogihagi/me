let camerize = kebab => {
  let s = String.split(kebab, "-")->Array.reduce("", (xs, f) =>
    xs ++
    String.get(f, 0)
    ->Option.getOr("")
    ->String.toUpperCase ++
    String.sliceToEnd(f, ~start=1)
  )

  String.get(s, 0)
  ->Option.getOr("")
  ->String.toLowerCase ++ String.sliceToEnd(s, ~start=1)
}

let kebabs = [
  "fill-opacity",
  "font-size",
  "font-weight",
  "font-style",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-dasharray",
  "stroke-width",
]

let toJSX = source =>
  Buffer.fromString(
    kebabs
    ->Array.reduce(source, (xs, f) => {
      String.replaceAll(xs, f, camerize(f))
    })
    ->String.replaceAll("class=\"clickable-group\"", "")
    ->String.replaceAll("style=\"font-family: balsamiq\"", "")
    ->String.replaceAll("xmlns:xlink=\"http://www.w3.org/1999/xlink\"", ""),
  )

Fs.readdirSync("../src/app/components/skills")->Array.forEach(file => {
  let path = "../src/app/components/skills/" ++ file
  let source = Fs.readFileSync(path)->Buffer.toString
  Fs.writeFileSync(path, toJSX(source))
})
