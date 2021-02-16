import * as actions from './actions';
import { ActionType } from 'typesafe-actions';


export type ApplicationActions = ActionType<typeof actions>;

export interface ApplicationState {
    resumeToken: string;
}