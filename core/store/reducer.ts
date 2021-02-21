import produce from 'immer'
import { writeConfig } from 'core/config'
import { ApplicationActions } from './types'
import ActionTypes from './actionTypes'
import { getInitialState } from './utils'

const rootReducer = (state = getInitialState(), action: ApplicationActions) => {
  switch (action.type) {
    //
    case ActionTypes.UPDATE_RESUME_TOKEN: {
      writeConfig({ RESUME_TOKEN: action.payload.token })
      return produce(state, (nextState) => {
        nextState.resumeToken = action.payload.token
      })
    }
    //
    case ActionTypes.UPDATE_SEQUENCE_NUMBER: {
      writeConfig({ SEQUENCE_NUMBER: action.payload.sequence })
      return produce(state, (nextState) => {
        nextState.sequenceNumber = action.payload.sequence
      })
    }
    //
    case ActionTypes.UPDATE_USERNAME: {
      return produce(state, (nextState) => {
        nextState.username = action.payload.username
      })
    }
    //
    case ActionTypes.UPDATE_TOKEN: {
      return produce(state, (nextState) => {
        nextState.token = action.payload.token
      })
    }
    //
    case ActionTypes.UPDATE_URL: {
      return produce(state, (nextState) => {
        nextState.url = action.payload.url
      })
    }
    //
    case ActionTypes.UPDATE_CAPTCHA_REQUIRED: {
      return produce(state, (nextState) => {
        nextState.isCaptchaRequired = action.payload.required
      })
    }
    //
    case ActionTypes.UPDATE_CHANNEL_ID: {
      return produce(state, (nextState) => {
        nextState.channelId = action.payload.channelId
      })
    }
    //
    case ActionTypes.UPDATE_ID: {
      return produce(state, (nextState) => {
        nextState.id = action.payload.id
      })
    }
    //
    case ActionTypes.UPDATE_OWO_CHANNEL_ID: {
      return produce(state, (nextState) => {
        nextState.owoChannelId = action.payload.id
      })
    }
    //
    case ActionTypes.UPDATE_PREVIOUS_CAPTCHA: {
      return produce(state, (nextState) => {
        nextState.previousCaptcha = {
          type: action.payload.type,
          link: action.payload.link,
        }
      })
    }
    //
    default: {
      return state
    }
  }
}

export default rootReducer
