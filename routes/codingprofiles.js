import express from 'express'

import { getLeetCodeStats } from '../controllers/leetcode.js'
import { getCodeChefStats } from '../controllers/codechef.js'
import { getGFGStats } from '../controllers/gfg.js'
import { getCodeforcesStats } from '../controllers/codeforces.js'

const codingprofiles = express.Router();

codingprofiles.get("/leetcode/:username", getLeetCodeStats);
codingprofiles.get("/gfg/:username", getGFGStats);
codingprofiles.get("/codeforces/:username", getCodeforcesStats);
codingprofiles.get("/codechef/:username", getCodeChefStats);

export default codingprofiles;