import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LetterFrequencyAnalyzer = () => {
    const [input, setInput] = useState("");
    const [frequencies, setFrequencies] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setInput(value);
            setFrequencies([]);
        } else {
            toast.error('Apenas letras são permitidas');
        }
    };

    const calculateFrequency = () => {
        if (!input.trim()) {
            toast.error('A entrada não pode estar vazia');
            setFrequencies([]);
            return;
        }

        if (input.length > 1000) {
            toast.error('A entrada não pode exceder 1000 caracteres');
            setFrequencies([]);
            return;
        }

        const sanitizedInput = input.toLowerCase().replace(/[^a-z]/g, "");
        const totalLetters = sanitizedInput.length;

        if (totalLetters === 0) {
            toast.error('A entrada deve conter pelo menos uma letra válida');
            setFrequencies([]);
            return;
        }

        const letterCounts = {};

        for (let char of sanitizedInput) {
            letterCounts[char] = (letterCounts[char] || 0) + 1;
        }

        const sortedFrequencies = Object.entries(letterCounts)
            .map(([letter, count]) => ({
                letter,
                percentage: ((count / totalLetters) * 100).toFixed(2),
            }))
            .sort((a, b) => b.percentage - a.percentage);

        setFrequencies(sortedFrequencies);
    };

    return (
        <div className="centered">
            <div className="input-container">
                <div className="container">
                    <h2>Analisador de Frequência de Letras</h2>
                    <textarea
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        maxLength={1000}
                        placeholder="Digite uma cadeia de caracteres"
                    />

                    <button onClick={calculateFrequency}>Analisar</button>
                </div>

                <ul>
                    {frequencies.map(({ letter, percentage }) => (
                        <li key={letter}>{`${letter} = ${percentage}%`}</li>
                    ))}
                </ul>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
            </div>
        </div>
    );
};

export default LetterFrequencyAnalyzer;
