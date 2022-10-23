import React  from 'react';
import {Card, CardContent, Skeleton, Typography} from "@mui/material";
import useInfo from "@hooks/useInfo";

const InfoCardB = () => {
  const {data} = useInfo()

  return (
    <Card>
      <CardContent>
        <Typography variant={"h3"}>{data.title}</Typography>
        <Typography>{data.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCardB;
