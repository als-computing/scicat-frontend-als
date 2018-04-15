import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { map, mergeMap, take, catchError } from 'rxjs/operators';

import { ProposalsService } from 'proposals/proposals.service';

import {
	FetchProposalsOutcomeAction,
	FetchProposalsAction, FETCH_PROPOSALS,
	FetchProposalsCompleteAction, FETCH_PROPOSALS_COMPLETE,
	FetchProposalsFailedAction, FETCH_PROPOSALS_FAILED,

	FetchProposalOutcomeAction,
	FetchProposalAction, FETCH_PROPOSAL,
	FetchProposalCompleteAction, FETCH_PROPOSAL_COMPLETE,
	FetchProposalFailedAction, FETCH_PROPOSAL_FAILED,
} from '../actions/proposals.actions';

import { Proposal } from '../models';

@Injectable()
export class ProposalsEffects {
	@Effect() getProposals$: Observable<FetchProposalsOutcomeAction> = this.actions$.pipe(
		ofType<FetchProposalsAction>(FETCH_PROPOSALS),
		mergeMap(action => 
			this.proposalsService.getProposals().pipe(
				map(proposals => new FetchProposalsCompleteAction(proposals)),
				catchError(() => Observable.of(new FetchProposalsFailedAction()))
			)
		)
	);

	@Effect() getProposal$: Observable<FetchProposalOutcomeAction> = this.actions$.pipe(
		ofType<FetchProposalAction>(FETCH_PROPOSAL),
		mergeMap(action => 
			this.proposalsService.getProposal(action.proposalId).pipe(
				map(proposal => new FetchProposalCompleteAction(proposal)),
				catchError(() => Observable.of(new FetchProposalFailedAction()))
			)
		)
	);

	constructor(
		private actions$: Actions,
		private proposalsService: ProposalsService,
	) {}
}
