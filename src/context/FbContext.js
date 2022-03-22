import { createContext, useEffect, useState } from "react";

const FbContext = createContext();

export const FbProvider = ({children}) => {

    const [feedback, setFeedback] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(false);
    const [editFb, setEditFb] = useState({item: {}, edit: false});

    const fbURL = "http://localhost:5001/feedback";

    useEffect(() => {
        const fetchData = async (url) => {
            try{
                const res = await fetch(url);
                if(res.ok){
                    const data = await res.json();
                    setPending(false);
                    setFeedback(data);
                }
            }catch(er){
                console.log(er);
                setPending(false);
                setError(true);
            }
        }

        setTimeout(() => {
            fetchData(fbURL);
        }, 1000);
    }, [])

    const handleDelete = async (id) => {
        try{
            const res = await fetch(`${fbURL}/${id}`, {
                method: "DELETE"
            })
            if(res.ok){
                setFeedback(feedback.filter(value => value.id !== id));
            }else{
                throw new Error();
            }
        }catch(er){
            console.log(er);
            setError(true);
        }
    } 

    const handleAddFeedback = async (review) => {
        let id = 0;
        feedback.forEach(value => {
            value.id > id && (id = value.id)
        })
        id++;
        const newFeedback = {id, ...review};
        try{
            const res = await fetch(fbURL, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newFeedback)
            })
            if(res.ok){
                setFeedback([newFeedback, ...feedback]);
            }else{
                throw new Error()
            }
        }catch(er){
            console.log(er);
        }
    }

    const handleEdit = (item) => {
        setEditFb({item, edit: true})
    }

    const updateFbEdit = async (item) => {
        try{
            const res = await fetch(`${fbURL}/${item.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(item)
            })
            console.log(res.ok);
            if(res.ok){
                setFeedback(feedback.map(value => {
                    value.id === item.id && (value = item)
                    return value;
                }))
                setEditFb({edit: false});
            }else{
                throw new Error()
            }
        }catch(er){
            console.log(er);
        }
    }

    return(
        <FbContext.Provider value={{
            feedback,
            pending,
            error,
            editFb,
            handleEdit,
            updateFbEdit,
            handleDelete,
            handleAddFeedback
        }}>
            {children}
        </FbContext.Provider>
    )
}

export default FbContext;