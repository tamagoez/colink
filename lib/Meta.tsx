export default function Meta({ title, description }) {
  // document.title = title;
  let titlename;
  if (title === "Colink") {
    titlename = "Colink";
  } else {
    titlename = `${title} - Colink`;
  }
  return (
    <>
      <title>{titlename}</title>
      <meta charSet="utf-8" />
      <meta name="application-name" content="Colink" />
      <meta name="description" content={description} />
    </>
  );
}
