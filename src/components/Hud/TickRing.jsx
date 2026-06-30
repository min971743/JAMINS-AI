function TickRing() {

  const ticks = Array.from({ length: 72 });

  return (
    <div className="tick-ring">
      {ticks.map((_, i) => (
        <span
          key={i}
          className="tick"
          style={{
            transform: `translate(-50%, -50%) rotate(${i * 5}deg) translateY(-292px)`
          }}
        />
      ))}
    </div>
  );

}

export default TickRing;