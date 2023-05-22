import {atom} from 'recoil';
import {TUser} from '../types/user';

export const userState = atom({
	key: 'userState',
	default: {} as TUser,
});
