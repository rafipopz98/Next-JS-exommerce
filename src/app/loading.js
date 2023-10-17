

import { PulseLoader } from "react-spinners";
import './account/Account.css'
export default function Loading() {

  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="uWULoader">
      <PulseLoader
        color={"#000000"}
        // loading={pageLevelLoader}
        size={30}
        data-testid="loader"
      />
    </div>
  );
}