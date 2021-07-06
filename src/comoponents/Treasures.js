import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchTreasures } from "../store/actions/thingsAuctions";

const Treasures = () => {
  const user = useSelector((state) => state.authReducer.user);
  const fetch = useSelector((state) => state.thingsReducer.fetch);
  const dispatch = useDispatch();

  const history = useHistory();
  if (!user) {
    history.push("/signin");
  }
  console.log(fetch);
  if (fetch && user) dispatch(fetchTreasures());

  const treasures = useSelector((state) => state.thingsReducer.treasures);
  const treasuresList = treasures.map((treasure) => (
    <h3>
      <li>{treasure.name}</li>
    </h3>
  ));

  return (
    <div
      style={{
        justifyContent: "center",
        marginLeft: 20,
      }}
    >
      <h1>TreasureList </h1>
      <list>{treasuresList}</list>
    </div>
  );
};
export default Treasures;
