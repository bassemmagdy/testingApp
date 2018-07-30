"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VoteComponent = /** @class */ (function () {
    function VoteComponent() {
        this.totalVotes = 0;
        this.voteChanged = new core_1.EventEmitter();
    }
    VoteComponent.prototype.upVote = function () {
        this.totalVotes++;
        this.voteChanged.emit(this.totalVotes);
    };
    return VoteComponent;
}());
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map