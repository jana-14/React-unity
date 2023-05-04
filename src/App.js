import React from "react";
import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, isLoaded, loadingProgression } = new useUnityContext({
    loaderUrl: "/assets/0003.loader.js",
    dataUrl: "/assets/0003.data",
    frameworkUrl: "/assets/0003.framework.js",
    codeUrl: "/assets/0003.wasm",
  });
  const loadingPercentage = Math.round(loadingProgression * 100);
  return (
    <div>
      {isLoaded === false && (
        <div className="center">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
export default App;
