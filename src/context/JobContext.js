import createDataContext from './createDataContext'
import axios from 'axios'
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'

const JOB_ROOT_URL = ''

const JOB_QUERY_PARAMS = {
    publisher: '',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
}

const jobReducer = (state, action) => {
    switch(action.type) {
        case 'fetch_jobs':

        default:
            return state
    }
}

const buildJobsUrl = (zip) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip })
    return `${JOB_ROOT_URL}${query}`
}

const fetchJobs = (region) => {
    return async (dispatch) => {
        try {
            const zip = await reverseGeocode(region)
            const url = buildJobsUrl(zip)
            const { data } = await axios.get(url)
            dispatch({ type: 'fetch_jobs', payload: data })
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }
}

export const { Context, Provider } = createDataContext(
    jobReducer,
    { fetchJobs },
    { }
)