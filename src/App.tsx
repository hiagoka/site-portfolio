import { LogPose } from "./components/LogPose";
import { WantedPoster } from "./components/WantedPoster";
import { GrandLine } from "./components/GrandLine";
import { DevilFruits } from "./components/DevilFruits";
import { Nakama } from "./components/Nakama";
import { TheShip } from "./components/TheShip";
import { DenDenMushi } from "./components/DenDenMushi";

export default function App() {
  return (
    <div className="min-h-screen bg-ocean-900">
      <LogPose />
      <main>
        <WantedPoster />
        <GrandLine />
        <DevilFruits />
        <Nakama />
        <TheShip />
        <DenDenMushi />
      </main>
    </div>
  );
}
