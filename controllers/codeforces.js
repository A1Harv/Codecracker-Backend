import axios from "axios";

export const getCodeforcesStats = async (req, res) => {
  const { username } = req.params;

  try {
    // Fetch all user submissions
    const submissions = await axios.get(`https://codeforces.com/api/user.status?handle=${username}`);

    const acceptedSet = new Map(); // store unique accepted problems with rating

    submissions.data.result.forEach((sub) => {
      if (sub.verdict === "OK" && sub.problem.rating) {
        const problemId = `${sub.problem.contestId}-${sub.problem.index}`;
        if (!acceptedSet.has(problemId)) {
          acceptedSet.set(problemId, sub.problem.rating);
        }
      }
    });

    // Count by difficulty
    let easy = 0, medium = 0, hard = 0;
    for (let rating of acceptedSet.values()) {
      if (rating <= 1299) easy++;
      else if (rating <= 1799) medium++;
      else hard++;
    }

    res.json({ easy, medium, hard });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error fetching Codeforces problem stats" });
  }
};
