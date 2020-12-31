import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import { FontSizeLevel, FontSizeLevels } from '@/types';

@Module({ namespaced: true })
class Ratio extends VuexModule {
  public baseSize = 16

  public scale = 1.4

  public bodyLineHeight = 1.618

  public displayLineHeight = 1.1

  public fontSizeLevels: FontSizeLevels = {
    [FontSizeLevel.Eyebrow]: 2,
    [FontSizeLevel.Header]: 5,
    [FontSizeLevel.Subheader]: 3,
    [FontSizeLevel.Meta]: 1,
    [FontSizeLevel.ParagraphHeader]: 2,
    [FontSizeLevel.Body]: 2,
    [FontSizeLevel.Caption]: 1,
  }

  public lineHeightLevels = {
    [FontSizeLevel.Eyebrow]: 1,
    [FontSizeLevel.Header]: 2,
    [FontSizeLevel.Subheader]: 2,
    [FontSizeLevel.Meta]: 1,
    [FontSizeLevel.ParagraphHeader]: 1,
    [FontSizeLevel.Body]: 1,
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
  public setBodyLineHeight(newBodyLineHeight: number): void {
    this.bodyLineHeight = newBodyLineHeight;
  }

  @Mutation
  public setMaxLineHeight(newDisplayLineHeight: number): void {
    this.displayLineHeight = newDisplayLineHeight;
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
  public updateBodyLineHeight(newBodyLineHeight: number): void {
    this.context.commit('setBodyLineHeight', newBodyLineHeight);
  }

  @Action
  public updateDisplayLineHeight(newDisplayLineHeight: number): void {
    this.context.commit('setDisplayLineHeight', newDisplayLineHeight);
  }

  @Action
  public updateFontSizeLevel(payload: { type: FontSizeLevel; newLevel: number }): void {
    this.context.commit('setFontSizeLevel', payload);
  }
}

export default Ratio;
