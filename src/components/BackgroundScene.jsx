export default function BackgroundScene() {
    return (
        <div className="office-scene" aria-hidden="true">
            <div className="scene-wall scene-wall-left"></div>
            <div className="scene-wall scene-wall-right"></div>
            <div className="scene-sunbeam"></div>
            <div className="scene-corner-shadow"></div>

            <div className="scene-shelf">
                <div className="scene-plant scene-plant-small">
                    <div className="scene-leaf-fan">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="scene-pot scene-pot-round"></div>
                </div>

                <div className="scene-binders">
                    <span className="scene-binder binder-blue"></span>
                    <span className="scene-binder binder-light"></span>
                    <span className="scene-binder binder-white"></span>
                </div>
            </div>

            <div className="scene-desk">
                <div className="scene-left-decor">
                    <div className="scene-polyhedron"></div>
                    <div className="scene-stone-cube"></div>
                </div>

                <div className="scene-laptop-shadow"></div>
                <div className="scene-laptop">
                    <div className="scene-laptop-lid">
                        <div className="scene-laptop-screen">
                            <div className="scene-screen-glow"></div>
                            <div className="scene-screen-network">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="scene-screen-cube cube-a">
                                <span className="cube-face cube-top"></span>
                                <span className="cube-face cube-left"></span>
                                <span className="cube-face cube-right"></span>
                            </div>
                            <div className="scene-screen-cube cube-b">
                                <span className="cube-face cube-top"></span>
                                <span className="cube-face cube-left"></span>
                                <span className="cube-face cube-right"></span>
                            </div>
                            <div className="scene-screen-cube cube-c">
                                <span className="cube-face cube-top"></span>
                                <span className="cube-face cube-left"></span>
                                <span className="cube-face cube-right"></span>
                            </div>
                            <div className="scene-screen-cube cube-d">
                                <span className="cube-face cube-top"></span>
                                <span className="cube-face cube-left"></span>
                                <span className="cube-face cube-right"></span>
                            </div>
                            <div className="scene-screen-cube cube-e">
                                <span className="cube-face cube-top"></span>
                                <span className="cube-face cube-left"></span>
                                <span className="cube-face cube-right"></span>
                            </div>
                            <div className="scene-screen-cube cube-f">
                                <span className="cube-face cube-top"></span>
                                <span className="cube-face cube-left"></span>
                                <span className="cube-face cube-right"></span>
                            </div>
                        </div>
                    </div>

                    <div className="scene-laptop-keyboard"></div>
                    <div className="scene-laptop-base"></div>
                </div>

                <div className="scene-mug"></div>

                <div className="scene-plant scene-plant-large">
                    <div className="scene-leaf-fan scene-leaf-fan-large">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="scene-pot scene-pot-square"></div>
                </div>

                <div className="scene-notebook">
                    <div className="scene-notebook-band"></div>
                </div>
                <div className="scene-pen"></div>
            </div>
        </div>
    );
}
