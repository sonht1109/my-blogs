import InternalFYI from "./FYI";
import FYIContainer from "./FYIContainer";

type T = typeof InternalFYI & {
  Container: typeof FYIContainer;
};

const FYI: T = InternalFYI as T;
FYI.Container = FYIContainer;

export default FYI;
