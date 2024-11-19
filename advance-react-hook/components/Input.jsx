import { useRecoilState } from "recoil";
import { nameState } from "./recoil/state";

const Input = () => {
  const [name, setName] = useRecoilState(nameState);

  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Input;
