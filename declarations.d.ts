// Images
declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module '*.gif' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

// Documents
declare module '*.pdf' {
  const value: string;
  export default value;
}
declare module '*.doc' {
  const value: string;
  export default value;
}
declare module '*.docx' {
  const value: string;
  export default value;
}
declare module '*.txt' {
  const value: string;
  export default value;
}
declare module '*.json' {
  const value: Record<string, unknown>;
  export default value;
}

// Spreadsheets and data
declare module '*.csv' {
  const value: string;
  export default value;
}
declare module '*.xls' {
  const value: string;
  export default value;
}
declare module '*.xlsx' {
  const value: string;
  export default value;
}

// Media
declare module '*.mp3' {
  const value: string;
  export default value;
}
declare module '*.mp4' {
  const value: string;
  export default value;
}
declare module '*.wav' {
  const value: string;
  export default value;
}
declare module '*.ogg' {
  const value: string;
  export default value;
}
