import createDataContext from './createDataContext'
import _ from 'lodash'

const likedJobsReducer = (state, action) => {
    switch(action.type) {
        case 'like_job':
            return _.uniqBy([
                action.payload, ...state
            ], 'jobkey')
        case 'clear_liked_jobs':
            return []
        default:
            return state
    }
}

const likeJob = (dispatch) => {
    return (job) => {
        console.log('inside like job')
        dispatch({ type: 'like_job', payload: job })
    }
}

const clearLikedJobs = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_liked_jobs' })
    }
}

export const { Context, Provider } = createDataContext(
    likedJobsReducer,
    { likeJob, clearLikedJobs },
    []
)