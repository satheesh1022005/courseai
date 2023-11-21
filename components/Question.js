import './Chat.css';
let question="Which is domain will you really interested ?"
const Question=()=>{
    return(
        <>
            <div className="question bg-dark">
                {question}
            </div>
        </>
    );
}
export default Question;