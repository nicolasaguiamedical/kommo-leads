export default async function handler(req, res) {
  try {
    let origem = "teste";
    let campanha = "teste";
    let pagina = "teste";

    // 🔹 tenta pegar do body (POST)
    if (req.body) {
      origem = req.body.origem || origem;
      campanha = req.body.campanha || campanha;
      pagina = req.body.pagina || pagina;
    }

    // 🔹 tenta pegar da URL (GET)
    if (req.query) {
      origem = req.query.origem || origem;
      campanha = req.query.campanha || campanha;
      pagina = req.query.pagina || pagina;
    }

    // 🔹 envia para o Make
    await fetch("https://hook.us2.make.com/6okabri5bp7ap2h61x458n4stfe2yvqc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        origem,
        campanha,
        pagina
      })
    });

    return res.status(200).json({
      success: true,
      origem,
      campanha,
      pagina
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
