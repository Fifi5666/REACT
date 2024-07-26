// 액션 생성 함수 정의
import {createAction} from 'redux-actions';
import { DECREMENT, INCREMENT } from './actionTypes';

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)