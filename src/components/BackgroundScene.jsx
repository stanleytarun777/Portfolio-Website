export default function BackgroundScene() {
  return (
    <div className="studio-scene" aria-hidden="true">
      <div className="studio-wall studio-wall-left" />
      <div className="studio-wall studio-wall-right" />
      <div className="studio-light-beam" />
      <div className="studio-shelf">
        <div className="studio-binders">
          <span className="studio-binder studio-binder-deep" />
          <span className="studio-binder studio-binder-soft" />
          <span className="studio-binder studio-binder-light" />
        </div>
      </div>

      <div className="studio-desk">
        <div className="studio-sculpture" />
        <div className="studio-cube" />

        <div className="studio-laptop">
          <div className="studio-screen">
            <div className="studio-grid" />
            <div className="studio-node studio-node-one" />
            <div className="studio-node studio-node-two" />
            <div className="studio-node studio-node-three" />
            <div className="studio-block studio-block-one" />
            <div className="studio-block studio-block-two" />
            <div className="studio-block studio-block-three" />
            <div className="studio-block studio-block-four" />
          </div>
          <div className="studio-keyboard" />
          <div className="studio-base" />
        </div>

        <div className="studio-mug" />
        <div className="studio-notebook" />
      </div>
    </div>
  );
}
