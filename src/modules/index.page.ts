import type { IModulePage } from "./common/types/IModulePage";

const modules = import.meta.glob("./*/index.page.ts", { eager: true });

const pageList: IModulePage[] = [];

for (const module of Object.values(modules)) {
  const pages = (module as { default?: IModulePage[] }).default;

  if (pages) {
    pageList.push(...pages);
  }
}

export default pageList;

