function PageBackground({ side = "recto" }) {
  return (
    <>
      <div className={`parchment-bg ${side}`} />
      <div className="parchment-noise" />
      <div className="page-edge-shadow" />
    </>
  );
}

export default PageBackground;
