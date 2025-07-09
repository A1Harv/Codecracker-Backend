import axios from "axios";

export const getCodeChefStats = async (req, res) => {
  const { username } = req.params;

  try {
    const response = await axios.get(`https://codechef-api.vercel.app/${username}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching CodeChef data" });
  }
};
