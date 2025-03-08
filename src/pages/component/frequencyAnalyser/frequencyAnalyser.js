import React, { useState } from "react";

const LetterFrequencyAnalyzer = () => {
    const [input, setInput] = useState("");
    const [frequencies, setFrequencies] = useState([]);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setInput(value);
            setError("");
        } else {
            setError("Apenas letras são permitidas.");
        }
    };

    const calculateFrequency = () => {
        if (!input.trim()) {
            setError("A entrada não pode estar vazia.");
            setFrequencies([]);
            return;
        }

        if (input.length > 1000) {
            setError("A entrada não pode exceder 1000 caracteres.");
            setFrequencies([]);
            return;
        }

        const sanitizedInput = input.toLowerCase().replace(/[^a-z]/g, "");
        const totalLetters = sanitizedInput.length;

        if (totalLetters === 0) {
            setError("A entrada deve conter pelo menos uma letra válida.");
            setFrequencies([]);
            return;
        }

        setError("");
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
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Analisador de Frequência de Letras</h2>
        </div>
    );
};

export default LetterFrequencyAnalyzer;
