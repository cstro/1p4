export interface HeadingData {
  level: number;
  fontSize: number;
  text: string;
  lineHeight: number;
}

export enum DisplayCardElementType {
  Eyebrow = 'eyebrow',
  Header = 'header',
  Subheader = 'subheader',
  Meta = 'meta',
  ParagraphHeader = 'paragraph header',
  Body = 'body',
  Caption = 'caption',
}

export interface DisplayCardElement {
  type: DisplayCardElementType;
  content: string;
  config: {
    headerLevel: number;
  };
}

export enum FontSizeLevel {
  Eyebrow = 'eyebrow',
  Header = 'header',
  Subheader = 'subheader',
  Meta = 'meta',
  ParagraphHeader = 'paragraph header',
  Body = 'body',
  Caption = 'caption',
}

export interface FontSizeLevels {
  [FontSizeLevel.Eyebrow]: number;
  [FontSizeLevel.Header]: number;
  [FontSizeLevel.Subheader]: number;
  [FontSizeLevel.Meta]: number;
  [FontSizeLevel.ParagraphHeader]: number;
  [FontSizeLevel.Body]: number;
  [FontSizeLevel.Caption]: number;
}
