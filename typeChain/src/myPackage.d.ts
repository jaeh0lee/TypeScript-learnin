interface Confing {
  url: string;
}
declare module "myPackage" {
  function init(confing: Confing): boolean;
  function exit(code: number): number;
}
