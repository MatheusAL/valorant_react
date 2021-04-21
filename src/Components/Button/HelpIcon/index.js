import { AiFillQuestionCircle } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { grey } from '@material-ui/core/colors';

function HelpIcon() {
    return (
      <IconContext.Provider
        value={{ size: '20px', color: "lightgrey" }}
      >
        <div>
          <AiFillQuestionCircle />
        </div>
      </IconContext.Provider>
    );
  }

  export default HelpIcon;