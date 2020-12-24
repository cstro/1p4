import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';

@Module({ namespaced: true })
class Ratio extends VuexModule {
  public baseSize = 16

  public scale = 1.4

  public lineHeight = 1.1

  @Mutation
  public setBaseSize(newBaseSize: number): void {
    this.baseSize = newBaseSize;
  }

  @Mutation
  public setScale(newScale: number): void {
    this.scale = newScale;
  }

  @Mutation
  public setLineHeight(newLineHeight: number): void {
    this.lineHeight = newLineHeight;
  }

  @Action
  public updateBaseSize(newBaseSize: number): void {
    this.context.commit('setBaseSize', newBaseSize);
  }

  @Action
  public updateScale(newScale: number): void {
    this.context.commit('setScale', newScale);
  }

  @Action
  public updateLineHeight(newLineHeight: number): void {
    this.context.commit('setLineHeight', newLineHeight);
  }
}

export default Ratio;
