import { useState } from "react";
import { isStrongPassword } from "validator";

function App() {
  const [pass, setPass] = useState("");
  const [isStrong, setIsStrong] = useState(false);
  const inputClass = isStrong ? "border-green-500" : "border-red-500";
  const strengthTextClass = isStrong ? "text-green-600" : "text-red-600";
  function checkStrength(pass: string) {
    return isStrongPassword(pass);
  }

  return (
    <>
      <div>
        <h1 className="font-bold text-4xl">Password Validator</h1>
        <form>
        
        <div className={`border-2 rounded px-2 py-2 my-4 min-h-[6.5vh] ${inputClass}`}><input
          type="text"
          className="outline-none"
          onChange={(e) => {
            const password = e.target.value;
            setPass(password);
            setIsStrong(checkStrength(password));
          }}
        /></div>
        
        </form>
      </div>
      <div>
        <h3 className={`mt-2 ${strengthTextClass}`}>
          Strength: {isStrong ? "Strong" : "Weak"}
        </h3>
      </div>

    </>
  );
}

export default App;
