interface CoursePartProps{
    name: string;
    exerciseCount: number;
}

interface ContentProps{
    courseParts: CoursePartProps[];
}

const Content = (props: ContentProps) => {
    return (
        <div>
            {props.courseParts.map((part, index)=> 
                <p key={index}>
                    {part.name} {part.exerciseCount}
                </p>
            )}
        </div>
    )
}

export default Content;