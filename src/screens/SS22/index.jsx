import React, { useEffect, useState } from "react";
import apiClient from "../../lip/apiClient";
import {
  Card,
  Center,
  Container,
  Flex,
  RingProgress,
  SemiCircleProgress,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

const SS22 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    apiClient
      .get("/")
      .then((_data) => {
        console.log("_data", _data);
        setData(_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) {
    return <div>Loader...</div>;
  }
  const { kpis } = data || {};
  return (
    <SimpleGrid
      cols={3}
      m={20}
    >
      {Object.entries(kpis).map(
        ([key, { utilization, units, color = "green" }], index) => {
          return (
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Flex
                h={"100%"}
                direction="column"
                justify="space-between"
                align={"center"}
              >
                {units === "percent" ? (
                  <RingProgress
                    sections={[{ value: utilization, color }]}
                    label={
                      <Text
                        c={color}
                        fw={700}
                        ta="center"
                        size="xl"
                      >
                        {utilization}%
                      </Text>
                    }
                  />
                ) : (
                  <Flex h={100}>
                    <Center>
                      <Text
                        c={color}
                        fw={700}
                        ta="center"
                        size="xl"
                      >
                        {utilization}
                        <Text>{units}</Text>
                      </Text>
                    </Center>
                  </Flex>
                )}
                <Text
                  c="dark"
                  fw={400}
                  ta="center"
                  size="lg"
                >
                  {key}
                </Text>
              </Flex>
            </Card>
          );
        }
      )}
    </SimpleGrid>
  );
};

export default SS22;
