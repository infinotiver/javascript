interface QuestionProps {
    question: string;
    option: Array<string>;
    feedback: string;
    onOptionClick: (selectedOption: string) => void; // Pass the selected option
}

function Question({ question, option, feedback, onOptionClick }: QuestionProps) {
    const optionsDiv = option.map((opt, index) => (
        <button
            key={index}
            className="option-button bg-cyan-50 p-2 m-1 border border-gray-400 rounded-sm hover:bg-cyan-200"
            onClick={() => onOptionClick(opt)}
        >
            {opt}
        </button>
    ));

    return (
        <div className="p-4 flex flex-col justify-center bg-gray-50 rounded border">
            <div className="font-bold text-2xl m-4 p-4 text-center text-black">{question}</div>
            <div className="options flex flex-col justify-center">{optionsDiv}</div>
            <div className="feedback mt-4 text-center font-medium">{feedback}</div>
        </div>
    );
}

export default Question;
