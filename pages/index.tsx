import React, {Suspense} from 'react';
import InfoCardA from "@components/InfoCardA/InfoCardA";
import InfoCardB from "@components/InfoCardB/InfoCardB";
import {Skeleton, Stack} from "@mui/material";

const Home = () => {
  return (
    <Stack direction={"column"} gap={2}>
      <InfoCardA/>
      <Suspense fallback={<Skeleton variant="rectangular" height={200}/>}>
        <InfoCardB/>
      </Suspense>
    </Stack>
  );
};

export default Home;
