import { VoteComponent } from './vote.component';
import { EventEmitter } from '@angular/core';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise an event when upVoted', () => {
    let totalVotes = null;

    component.voteChanged.subscribe(data => (totalVotes = data));
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });
});
