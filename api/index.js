export default function handler(req, res) {
  if (req.method === "POST") {
    const { link } = req.body;
    console.log("Nuevo enlace recibido:", link);
    res.status(200).json({ message: "Enlace recibido correctamente" });
  } else {
    res.status(200).json({ message: "API funcionando correctamente" });
  }
}
