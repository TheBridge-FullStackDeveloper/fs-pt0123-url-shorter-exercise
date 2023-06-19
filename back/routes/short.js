const router = express.Router();
const { authorizer } = require('../middlewares');
const shortControllers = require('../controllers/short');

router.post('/generator', authorizer, shortControllers.getUrl);

module.exports = router;
