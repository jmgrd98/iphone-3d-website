import React, {
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle, useEffect,
} from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck,
    CanvasSnipperPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WebgiViewer() {

    const canvasRef = useRef(null);

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        await addBasePlugins(viewer)
        await viewer.addPlugin(CanvasSnipperPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("scene-black.glb");
    }, []);

    useEffect(() => {
        setupViewer();
    } ,[]);

    return (
        <div id='webgi-canvas-container'>
            <canvas id='webgi-canvas' ref={canvasRef}/>
        </div>
    )
}

export default WebgiViewer;