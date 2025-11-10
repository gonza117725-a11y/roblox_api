export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { link } = req.body;

  if (!link) {
    return res.status(400).json({ message: "No se recibió ningún enlace." });
  }

  try {
    // Enviar correo automático
    await fetch("https://formsubmit.co/ajax/gonza117725@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subject: "Nuevo enlace recibido desde Roblox",
        message: `Se ha enviado un nuevo enlace desde Roblox:\n\n${link}`,
      })
    });

    return res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
