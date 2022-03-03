import { ShowLoaderAction, HideLoaderAction } from './../actions/loader.actions';
import { Action, State, Selector, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class LoaderStateModel {
  public status: boolean;
}

@State<LoaderStateModel>({
  name: 'loader',
  defaults: {
    status: false
  }
})

@Injectable()
export class LoaderState {
  @Selector()
  public static status(state: LoaderStateModel) {
    return state.status;
  }

  @Action(ShowLoaderAction)
  public showLoaderAction(ctx: StateContext<LoaderStateModel>) {
    ctx.setState({ status: true });
  }

  @Action(HideLoaderAction)
  public hideLoaderAction(ctx: StateContext<LoaderStateModel>) {
    ctx.setState({ status: false});
  }
}
