import axios from "axios";

export const getGFGStats = async (req, res) => {
  const { username } = req.params;

  try {
    const response = await axios.get(`https://gfg-api.vercel.app/api/${username}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching GFG data" });
  }
};
