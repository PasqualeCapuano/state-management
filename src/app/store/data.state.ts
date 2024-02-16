import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Data, DataForm, DataReset} from './data.actions';
import {patch} from '@ngxs/store/operators';

export class DataStateModel {
  dataList: any[] = [];
}

@State<DataStateModel>({
  name: 'data',
  defaults: {
    dataList: [],
  }
})
export class DataState {
  constructor() {}
  
  //serve per selezionare il valore da richiamare dallo STORE
  @Selector()
  static getAnimalList(state: DataStateModel): {} {
    return state.dataList;
  }
  //è l'azione che viene dispatchata dal componente
  @Action(DataForm)
  public addDataForm(ctx: StateContext<DataStateModel>, payload: DataForm) {
    const newObj: any[] = [...ctx.getState().dataList];
    console.log('payload',payload.payload);
    
    newObj.push(payload.payload);
    
    ctx.setState(
      patch({
        dataList: newObj
      })
    );
  }

  @Action(DataReset)
  public reset(ctx: StateContext<DataStateModel>, payload: DataReset) {
    const newObj: any[] = [];
    
    ctx.setState(
      patch({
        dataList: newObj
      })
    );
  }

}
