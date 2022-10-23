import React from 'react';
import {Typography} from "@mui/material";
import useInfo from "@hooks/useInfo";

const NameArea = () => {
  const {data} = useInfo()

  return (
    <Typography variant={"h3"}>
      {data.title}
    </Typography>
  );
};

export default NameArea;
