import { ITeam } from '.';
import { expectAssignable, expectNotAssignable } from 'tsd';

expectNotAssignable<ITeam>(null);
expectAssignable<ITeam>({
  iconUrl: '',
  name: '',
  id: '',
  channels: [],
});
