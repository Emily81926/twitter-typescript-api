import { RoleType } from '../../types/enum'

interface TweetResponse {
	_id: string;
	description: string;
	user: {
		_id: string;
		name: string;
		password: string;
		email: string;
		account: string;
		introduction: string;
		avatarImg: string;
		coverImg: string;
		role: RoleType;
		createAt: Date;
	};
	createAt: '2022-12-03T04:09:55.813Z';
}

export default TweetResponse
