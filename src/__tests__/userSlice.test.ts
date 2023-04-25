import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import userSlice from '../reducers/users';
import fetchUsers from '../services/users.service';
import { Users } from '../types';

describe('userSlice', () => {
  let store: Store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        users: userSlice,
      },
    });
  });

  it('should handle fetchUsers.fulfilled', () => {
    const users: Users[] = [
      { id: 1, username: 'Alice', icon: 'Test image' },
      { id: 2, username: 'Bob', icon: 'Test image 1' },
    ];
    const action: AnyAction = {
      type: fetchUsers.fulfilled.type,
      payload: users,
    };
    store.dispatch(action);
    const state = store.getState().users;
    expect(state.loading).toEqual('succeeded');
    expect(state.users).toEqual(users);
  });

  it('should handle fetchUsers.pending', () => {
    const action: AnyAction = {
      type: fetchUsers.pending.type,
    };
    store.dispatch(action);
    const state = store.getState().users;
    expect(state.loading).toEqual('pending');
  });

  it('should handle fetchUsers.rejected', () => {
    const action: AnyAction = {
      type: fetchUsers.rejected.type,
    };
    store.dispatch(action);
    const state = store.getState().users;
    expect(state.loading).toEqual('failed');
  });
});
