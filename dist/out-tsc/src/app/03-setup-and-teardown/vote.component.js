"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VoteComponent = /** @class */ (function () {
    function VoteComponent() {
        this.totalVotes = 0;
    }
    VoteComponent.prototype.upVote = function () {
        this.totalVotes++;
    };
    VoteComponent.prototype.downVote = function () {
        this.totalVotes--;
    };
    return VoteComponent;
}());
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map