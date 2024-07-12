import { atom, selector } from "recoil"

export const titleAtom = atom({
    key: "titleAtom",
    default: ''
})

export const descriptionAtom = atom({
    key: "descriptionAtom",
    default: ''
})

export const charCountState = selector({
    key: 'charCountState',
    get: ({ get }) => {
        const text = get(descriptionAtom);

        return text.length;
    },
});