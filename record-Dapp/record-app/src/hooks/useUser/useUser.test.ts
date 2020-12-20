import { renderHook, act } from '@testing-library/react-hooks';

import { Wrapper } from 'tests';

import { useUser } from './useUser';

describe('useUser', () => {
  test('should update user', () => {
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    const user = { firstName: 'name', lastName: 'lastName' };
    const { result } = renderHook(() => useUser(), { wrapper: Wrapper });
    act(() => {
      result.current.setUser(user);
    });
    expect(result.current.user).toEqual(user);
    expect(localStorage.setItem).toBeCalledWith('user', JSON.stringify(user));
    act(() => {
      result.current.setUser({ email: 'mail@mail.com' });
    });
    expect(result.current.user).toEqual({ ...user, email: 'mail@mail.com' });
    expect(localStorage.setItem).toBeCalledWith('user', JSON.stringify({ ...user, email: 'mail@mail.com' }));
  });
});
