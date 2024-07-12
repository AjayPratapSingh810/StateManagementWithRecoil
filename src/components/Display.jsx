import { useRecoilState, useRecoilValue } from "recoil";
import { descriptionAtom, titleAtom, charCountState } from "../store/atoms/data";

function Display() {
    const [title, setTitle] = useRecoilState(titleAtom);
    const [desc, setDesc] = useRecoilState(descriptionAtom);
    const count = useRecoilValue(charCountState);
    const handleClick = () => {
        // Create the main div element
        const contentDiv = document.createElement('div');

        // Create the title element and set its content
        const titleElement = document.createElement('p');
        titleElement.textContent = title;
        titleElement.style.fontWeight = 'bold'; // Optional: make the title bold

        // Create the description element and set its content
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = desc;
        const descriptionCharCountElement = document.createElement('p');
        descriptionCharCountElement .textContent = count;
        // Append the title and description to the main div
        contentDiv.appendChild(titleElement);
        contentDiv.appendChild(descriptionElement);
        contentDiv.appendChild(descriptionCharCountElement);
        // Find the parent div and append the main div to it
        const parentDiv = document.getElementById("display");
        if (parentDiv) {
            parentDiv.appendChild(contentDiv);
        } else {
            console.error(`Parent div with id "${display}" not found.`);
        }
        setTitle("");
        setDesc("");
    }
    return <>
        <button onClick={handleClick}>Add</button>
        <div id="display">
        </div>
    </>
}
export default Display;