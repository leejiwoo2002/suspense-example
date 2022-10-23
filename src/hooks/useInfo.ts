import {useQuery} from 'react-query'
import axios from "axios";

interface InfoType {
  title: string;
  description: string;
}

async function getInfo(){
  const response = await axios.get<InfoType[]>('https://api.sampleapis.com/coffee/hot')
  return response.data[0]
}

const useInfo = () => {
  const {data} = useQuery(['info'], getInfo)

  return {data:data!}
};

export default useInfo;
