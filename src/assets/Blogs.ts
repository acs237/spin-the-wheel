export interface Blog {
    id: number;
    name: string;
    date: string;
    time: string;
    content: string;
}

export const BLOGS: Blog[] = [
    {
        id: 1,
        name: 'React Hook Should be Within a Component',
        date: "2025-05-31",
        time: "13:21",
        content: "### For example, navigate is a React hook which needs to be placed inside a component or a custom hook"
    },
    {
        id: 2,
        name: 'how does ? play in Typescript and React',
        date: "31 May 2025",
        time: "15:08",
        content: "### It is used for conditional expressions. For example, instead of if(condition) then expression1 else then expression2, we can write const v1 = condition ? expression1 : expression2. That way, the code is more concise"
    },
    {
        id: 3,
        name: 'HTML tag attributes in React',
        date: "31 May 2025",
        time: "15:36",
        content: "### Not every HTML tag attribute can be called verbatim in React component even though the tag is in HTML format, for example in <label>, 'for' renders error. Solution is to use 'htmlFor'."
    }
]