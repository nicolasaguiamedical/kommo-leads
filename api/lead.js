export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { origem, campanha, pagina } = req.body;

  try {
    await fetch("https://hook.us2.make.com/6okabri5bp7ap2h61x458n4stfe2yvqc, {
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

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
