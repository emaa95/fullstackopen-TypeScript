import { ContentProps } from "../types";
import Part from "./Part";


const Content = (props: ContentProps) => {
    return (
        <div>
            {props.courseParts.map((part, index)=> 
                <p key={index}>
                    <Part part={part}/>
                </p>
            )}
        </div>
    )
}

export default Content;