import gql from "graphql-tag"

export const GRAPHQL = gql`
    mutation updateActivityAddActivityForm($activityId: String!, $updatedActivityData: UpdateActivityData!) {
        updateActivity(activityId: $activityId, updatedActivityData: $updatedActivityData) {
            id
        }
    }
`
