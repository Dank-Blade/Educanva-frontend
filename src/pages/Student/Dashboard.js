import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import ModuleCard from "../../components/UI/Cards/ModuleCard";

const Dashboard = () => {
  const [data, setData] = useState([
    { module: "Artificial Intelligence and Machine Learning", id: '1' },
    { module: "Concepts and Technologies of AI", id: '2' },
    { module: "Big Data", id: '3' },
    { module: "High Performance Computing", id: '4' },
    { module: "Distributed and Cloud Computing", id: '5' },
    { module: "Collaborative Development", id: '6' },
]);

return (
    <Flex gap={'10'} justifyContent={'center'} wrap={'wrap'}>
      {data.map((item, index) => {
        return <ModuleCard key={index} module={item.module} id={item.id}/>;
      })}
    </Flex>
  );
};

export default Dashboard;
