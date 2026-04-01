export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { origem, campanha, pagina } = req.body;

  await fetch("https://hook.us2.make.com/SEU_WEBHOOK_AQUI", {
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
}
