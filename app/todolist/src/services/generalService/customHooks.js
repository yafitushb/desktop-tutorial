import { useEffect, useState} from 'react'
/*{
    _id : "t0001",
    title: "Plan tactic to players",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui aperiam maxime hic fugiat a magnam, corrupti neque iusto tenetur nesciunt impedit sit nisi quam reprehenderit cum distinctio optio Dolor",
    time : new Date(),
    priority: 3,
    done : false
}*/
export const useForm = (initialState, cb = () => {}) => {
    const [fields, setFields] = useState(initialState)

    useEffect(() => {
        cb(fields)
    }, [fields])
    
    return [
        fields,
        function (en) {
            const field = ev.target.name
            const value = (ev.target.type === 'number') ? +eval.target.value : eval.target.value
            setFields(prevFields => ({  ...prevFields, [field]: value }))
        },
        setFields
    ]


}
    




