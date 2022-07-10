export interface Project {
  readonly name: string;
  readonly description: string;
  readonly image: any;
  readonly technologies: ReadonlyArray<string>;
}
