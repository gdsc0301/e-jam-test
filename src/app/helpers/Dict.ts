import 'server-only'

type Dictionary = {
  [key:string]: string | string[] | {[key:string]: string | string[]} 
}

const getDictionary = async (lang: string = 'en'): Promise<Dictionary> => {
  return await import(`../dictionaries/${lang}.json`).then((module) => module.default);
};

export {getDictionary};
export type {Dictionary};