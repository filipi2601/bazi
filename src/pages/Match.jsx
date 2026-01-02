import CalculatorDay from "../components/CalculatorDay";
import { fetchPlayers } from "../services/axios";

export default function Match() {
  fetchPlayers(1023);
  return (
    <>
      <CalculatorDay />
    </>
  );
}
