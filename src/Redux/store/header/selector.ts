import { createSelector } from 'reselect'

const getValue = (state: any) => state;

export const getValueSelector = createSelector(
    [ getValue ],
    state => state
)

const getField = (state: any, field: any) => state[field];

export const getFieldSelector = createSelector(
    [ getField ],
    field => {
        return field;
    }
)
