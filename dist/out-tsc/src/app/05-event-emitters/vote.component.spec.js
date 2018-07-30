"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vote_component_1 = require("./vote.component");
describe('VoteComponent', function () {
    var component;
    beforeEach(function () {
        component = new vote_component_1.VoteComponent();
    });
    it('should raise an event when upVoted', function () {
        var totalVotes = null;
        component.voteChanged.subscribe(function (data) { return totalVotes = data; });
        component.upVote();
        expect(component.totalVotes).not.toBe(null);
    });
});
//# sourceMappingURL=vote.component.spec.js.map