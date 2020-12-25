import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import { FontSizeLevel } from '@/types';

@Module({ namespaced: true })
class Ratio extends VuexModule {
  public baseSize = 16

  public scale = 1.4

  public lineHeight = 1.1

  private fontSizeLevels = {
    [FontSizeLevel.Eyebrow]: 2,
    [FontSizeLevel.Header]: 5,
    [FontSizeLevel.Subheader]: 3,
    [FontSizeLevel.Meta]: 1,
    [FontSizeLevel.ParagraphHeader]: 2,
    [FontSizeLevel.Body]: 2,
    [FontSizeLevel.Caption]: 1,
  }

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

  @Mutation
  public setFontSizeLevel({ type, newLevel }: { type: FontSizeLevel; newLevel: number }): void {
    this.fontSizeLevels[type] = newLevel;
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

  @Action
  public updateFontSizeLevel(payload: { type: FontSizeLevel; newLevel: number }): void {
    this.context.commit('setFontSizeLevel', payload);
  }
}

export default Ratio;
