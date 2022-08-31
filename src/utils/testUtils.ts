export const getClassList = (element: HTMLElement | null) => element?.classList.toString().split(' ') ?? [];
export const testUtil = (arg: string) => arg + '1111';

export default getClassList;
