import { useRecoilState } from "recoil";
import { descriptionAtom, titleAtom } from "../store/atoms/data";

function Input() {
    const [title, setTitle] = useRecoilState(titleAtom);
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const [desc, setDesc] = useRecoilState(descriptionAtom);
    const handleDesc = (event) => {
        setDesc(event.target.value);
    }
    return <>
        <label for="title">Title</label>
        <input type="text" id="title" placeholder="Enter Title" value={title} onChange={handleTitle} />
        <label for="desc">Description</label>
        <input type="text" id="desc" placeholder="Enter Description" value={desc} onChange={handleDesc} />
    </>
}
export default Input;