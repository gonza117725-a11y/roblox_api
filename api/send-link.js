export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { link } = req.body;

      if (!link) {
        return res.status(400).json({ error: "Falta el enlace en la solicitud." });
      }

      // Aquí puedes reemplazar este correo por el tuyo si quieres usar otro
      const destinatario = "gonza117725@gmail.com";

      // En lugar de un correo real, simulamos el envío (ya que Vercel no permite envío directo)
      console.log(`Nuevo enlace recibido: ${link}`);
      console.log(`Simulado: Enviado a ${destinatario}`);

      return res.status(200).json({
        message: "✅ Enlace recibido correctamente.",
        link: link
      });

    } catch (error) {
      console.error("Error en el servidor:", error);
      return res.status(500).json({ error: "Error interno del servidor." });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido. Usa POST." });
  }
}{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "type": "module"
}
