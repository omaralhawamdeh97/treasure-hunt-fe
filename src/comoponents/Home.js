import { useSelector } from "react-redux";

const Home = () => {
  const garbages = useSelector((state) => state.thingsReducer.things);
  const garbageList = garbages.map((garbage) => (
    <h3>
      <li>{garbage.name}</li>
    </h3>
  ));
  return (
    <div
      style={{
        justifyContent: "center",
        marginLeft: 20,
      }}
    >
      <h1>Garbages List </h1>
      <list>{garbageList}</list>
    </div>
  );
};
export default Home;
