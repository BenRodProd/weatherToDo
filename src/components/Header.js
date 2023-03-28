export default function Header({ weather }) {
  return (
    <div className={weather ? "header good" : "header bad"}>
      <h1>I'll tell you weather to do it!</h1>
    </div>
  );
}
