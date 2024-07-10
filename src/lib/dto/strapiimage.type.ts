export type StrapiImage = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: object;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
}
