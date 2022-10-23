import React, {Suspense} from 'react';
import {Card, CardContent, Skeleton, Typography} from "@mui/material";
import NameArea from "@components/InfoCard/NameArea";
import DescriptionArea from "@components/InfoCard/DescriptionArea";

const InfoCard = () => {
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

export default InfoCard;
