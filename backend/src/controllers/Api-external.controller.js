import axios from "axios";


const baseUrl = 'https://v3.football.api-sports.io'
const getLiveFootball = async (req, res) => {
    const url = `${baseUrl}/fixtures?live=all`;
    try {
        const response = await axios.get(url, {
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.API_KEY
            }
        });
        res.json(response.data);
        console.log(response)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error en el servidor');
    }
};


const getCountries = async (req, res) => {
    const url = `${baseUrl}/countries`;
    try {
        const response = await axios.get(url, {
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.API_KEY
            }
        });
        res.json(response.data);
        console.log(response)
    } catch (error){
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
}
const getLeaguesByCountry = async (req, res) => {
    const code = req.params;
    const id_country = code.id_country
    const url = `${baseUrl}/leagues?code=${id_country}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.API_KEY
            }
        });
        res.json(response.data);
        console.log(response)
    } catch (error){
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
}
const getBetsByMatch = async (req, res) => {
    const code = req.params;
    const id_match = code.id_match
    const url = `https://v3.football.api-sports.io/odds/live?fixture=${id_match}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': process.env.API_KEY
            }
        });
        res.json(response.data);
        console.log(response)
    } catch (error){
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

module.exports = {
    getLiveFootball,
    getCountries,
    getLeaguesByCountry,
    getBetsByMatch
};