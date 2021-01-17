import axios from 'axios'

const LOCATIONS_URL = `${process.env.VUE_APP_API_BASE_URL}/api/locations?type=:locationType`

export const LocationsAPI = {
    async getLocations(locationType) {
        //   Replace locationType for takeaway or delivery
        const URL = LOCATIONS_URL.replace(':locationType', locationType)

        try {
            let response = await axios.get(URL)
            return response.data  
        } catch (error) {
            return error
        }
    }
};