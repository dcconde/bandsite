class BandSiteApi {
    constructor(apiKey) {
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/"
        this.apiKey = apiKey;
    }

    async getComments () {
        try {
            const response = await axios.get(`${this.baseUrl}/comments`);

            //sort the data by date posted
            response.data.sort((a, b)=> {
                return b.posted - a.posted;
            });

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async postComment (comment) {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async getShowDates () {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates`);

            //sort the data by date
            response.data.sort((a, b) => {
                return b.posted - a.posted;
            });

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default BandSiteApi;