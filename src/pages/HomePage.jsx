import { useState } from 'react';
import { MapContainerComp } from '../components/MapContainerComp';
import { UserPanel, FilterPanel } from '../components/user/';
import { FilterProvider } from '../context'

export const HomePage = () => {

  const [leftPanel, setLeftPanel] = useState(true);
  const [rightPanel, setRightPanel] = useState(true);


  return (
    <>
      <FilterProvider>
        <FilterPanel leftPanel={leftPanel} setLeftPanel={setLeftPanel} />
        <UserPanel rightPanel={rightPanel} setRightPanel={setRightPanel} />
        <MapContainerComp />
      </FilterProvider>

    </>
  );
};

