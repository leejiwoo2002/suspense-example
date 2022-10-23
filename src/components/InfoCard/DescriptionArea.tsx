import React from 'react';
import {Typography} from "@mui/material";
import useInfo from "@hooks/useInfo";

const DescriptionArea = () => {
  const {data} = useInfo()

  return (
    <Typography >
      {data.description}
    </Typography>
  );
};

export default DescriptionArea;
