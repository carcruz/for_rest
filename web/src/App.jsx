import HeroBanner from "./sections/HeroBanner/HeroBanner";
import Theory from "./sections/Theory/Theory";
import FactorsOfGrowing from "./sections/FactorsOfGrowing/FactorsOfGrowing";
import Biodiversity from "./sections/Biodiversity/Biodiversity";
import ModelPlayground from "./sections/ModelPlayground/Model";
import { lazy, Suspense } from "react";

const Model = lazy(() => import("./sections/Model/Model"));

function App() {
  return (
    <main>
      <HeroBanner />
      <Theory />
      <FactorsOfGrowing />
      <Biodiversity />
      <Suspense fallback={<div>Loading ...</div>}>
        <Model />
      </Suspense>
      <ModelPlayground />
      <HeroBanner />
    </main>
  );
}

export default App;
