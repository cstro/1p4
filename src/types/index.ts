export interface HeadingData {
  level: number;
  fontSize: number;
  text: string;
  lineHeight: number;
}

export enum DisplayCardElementType {
  Eyebrow = 'DisplayCardEyebrow',
  Header = 'DisplayCardHeader',
  Subheader = 'DisplayCardSubheader',
  Meta = 'DisplayCardMeta',
  ParagraphHeader = 'DisplayCardParagraphHeader',
  Body = 'DisplayCardBody',
  Caption = 'DisplayCardCaption',
}

export interface DisplayCardElement {
  type: DisplayCardElementType;
  content: string;
  config: {
    headerLevel: number;
  };
}
