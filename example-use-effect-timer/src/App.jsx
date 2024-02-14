// import TimerClean from "./Components/TimerClean";
// import TimerDirty from "./Components/TimerDirty";
import useTimer from "./Components/useTimer";
import Timer from "./Components/Timer";

export default function App() {
  const count = useTimer();
  return (
    <div>
      {/* <TimerClean /> */}
      <p>Hello, this is where the timer goes</p>
      <div>Count: {count}</div>
      <Timer />
      {/* <TimerDirty /> */}
    </div>
  );
}
