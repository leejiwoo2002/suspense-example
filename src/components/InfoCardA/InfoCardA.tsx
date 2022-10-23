import React, {Suspense} from 'react';
import {Card, CardContent, Skeleton, Typography} from "@mui/material";
import NameArea from "@components/InfoCardA/NameArea";
import DescriptionArea from "@components/InfoCardA/DescriptionArea";

const InfoCardA = () => {
  return (
    <Card>
      <CardContent>
        <Suspense fallback={<Skeleton variant="circular" width={40} height={40}/>}>
          <NameArea/>
        </Suspense>
        <Suspense fallback={<Skeleton variant="text"/>}>
          <DescriptionArea/>
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default InfoCardA;
