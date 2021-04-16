import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconContext } from "react-icons";

function IconLarge() {
    return (
      <IconContext.Provider
        value={{ size: '50px' }}
      >
        <div>
          <AiOutlineArrowRight />
        </div>
      </IconContext.Provider>
    );
  }

  export default IconLarge;