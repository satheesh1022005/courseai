import './Chat.css';
let a="Engineering";
let b="Arts and Science";
let c="Law";
let d="medical";
const Answer=()=>{
    return (
        <>
            <div className="option d-flex flex-column pt-5">
                <button>A ) . {a}</button>
                <button>B ) . {b}</button>
                <button>C ) . {c}</button>
                <button>D ) . {d}</button>
            </div>
        </>
    );
}
export default Answer;