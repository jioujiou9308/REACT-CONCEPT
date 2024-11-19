import { useRecoilState, useRecoilValue } from "recoil";
import { nameState, charState } from "./recoil/state";
const DisPlay = () => {
  const charName = useRecoilValue(charState);
  const [name, setName] = useRecoilState(nameState);

  return (
    <div>
      <div>My name is {name}</div>
      <div>My name has {charName} characters</div>
    </div>
  );
};

export default DisPlay;
