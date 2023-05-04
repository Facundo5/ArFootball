const {Router} = require('express');
import { getLiveFootball, getCountries, getLeaguesByCountry, getBetsByMatch} from '../controllers/Api-external.controller'

const router = Router();


router.get('/getLiveMatches',getLiveFootball)
router.get('/getCountries',getCountries)
router.get('/leagues/:id_country', getLeaguesByCountry )
router.get('/betsByMatch/:id_match', getBetsByMatch)


module.exports = router;