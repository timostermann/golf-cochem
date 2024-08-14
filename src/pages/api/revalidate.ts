import { type NextApiHandler } from "next";

let lastRevalidation: number;

const revalidateHandler: NextApiHandler = async (req, res) => {
  const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET;
  console.log(req);

  try {
    if (req.method !== "POST")
      return res.status(405).json({ message: "Only POST requests allowed" });

    if (!REVALIDATION_SECRET)
      return res
        .status(401)
        .json({ message: "Revalidation secret token is missing on server" });

    if (req.headers.secret !== REVALIDATION_SECRET)
      return res.status(401).json({ message: "Invalid token" });

    if (lastRevalidation && Date.now() - lastRevalidation < 5000)
      return res.status(425).json({
        message: "Not enough time passed since last revalidation request",
      });

    lastRevalidation = Date.now();

    const contentType: string | undefined = req.body?.model;
    const slug: string | undefined = req.body?.entry?.slug;

    if (!contentType || !slug)
      return res.status(415).json({
        message: "Payload doesn't match supported schema",
      });

    const paths: string[] = [];

    if (contentType === "blogpost") {
      paths.push(`/clubleben/news/${slug}`);
      paths.push("/clubleben/news");
    }

    if (paths.length === 0)
      return res.status(404).json({ message: "No paths revalidated" });

    await Promise.all(paths.map((path) => res.revalidate(path)));
    return res.json({ revalidated: true, paths });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error revalidating");
  }
};

export default revalidateHandler;
