import { useState, useRef } from "react";

const InputCode = ({ length, label, loading, onComplete }: any) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);
  // Typescript
  // useRef<(HTMLInputElement | null)[]>([])

  const processInput = (e: any, slot: any) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      // @ts-ignore
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e: any, slot: any) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      // @ts-ignore
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <div className="code-input">
      <label className="code-label">{label}</label>
      <div className="code-inputs">
        {code.map((num, idx) => {
          return (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              readOnly={loading}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              // @ts-ignore
              ref={(ref) => inputs.current.push(ref)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InputCode;