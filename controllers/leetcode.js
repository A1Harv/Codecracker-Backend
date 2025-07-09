import axios from "axios";

export const getLeetCodeStats = async (req, res) => {
  const { username } = req.params;

  const query = `
    query {
      matchedUser(username: "${username}") {
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post("https://leetcode.com/graphql", { query });
    const stats = response.data.data.matchedUser.submitStats.acSubmissionNum;
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: "Error fetching LeetCode data" });
  }
};
