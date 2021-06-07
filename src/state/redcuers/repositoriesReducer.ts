import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RedpostoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RedpostoriesState = initialState,
  action: Action
): RedpostoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

// #1
// why we use seperate interface?
// action이 SearchRepositoriesSuccessAction interface에 100% 일치
// 따라서 자동으로 리턴의  action.payload의 타입을 지정함
// if(action.type === 'search_repositories_success') {
//  action.payload -> string[]
// }
