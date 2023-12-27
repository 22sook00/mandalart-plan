import { SookCard } from "react-sook-style";
import { MandalartData } from "../data/initGoal";
import { Fragment } from "react";
import * as SC from "../styles/mandalart.styles";
import { useState } from "react";
import { useEffect } from "react";

export interface MandalartItemDataProps {
  id: number;
  isMain?: boolean;
  code: string;
  goal?: string;
  desc?: string;
  includes?: string[];
}

interface MandalartItemProps {
  MandalartSubData?: MandalartItemDataProps;
  handleOpenDialog: (list?: string) => void;
}
const MandalartItem = ({
  MandalartSubData,
  handleOpenDialog,
}: MandalartItemProps) => {
  const [subList, setSubList] = useState<MandalartItemDataProps | undefined>(
    MandalartSubData
  );

  useEffect(() => {
    if (MandalartSubData) {
      const moveGoalToIndex = () => {
        setSubList((prevData: any) => {
          const newIncludes = [...(prevData.includes || [])];
          const goalValue = prevData.goal;
          const filteredIncludes = newIncludes.filter(
            (item) => item !== goalValue
          );
          filteredIncludes.splice(4, 0, goalValue || "");

          return {
            ...prevData,
            includes: filteredIncludes,
          };
        });
      };
      moveGoalToIndex();
    }
  }, []);

  return (
    <SC.MandalartGridContainer col={"repeat(3, 1fr)"} gap={10}>
      {MandalartSubData?.isMain ? (
        <>
          {MandalartData.map((list) => {
            return (
              <Fragment key={`${list.id}-${list.goal}`}>
                <SookCard
                  onClick={() => handleOpenDialog(list?.goal)}
                  size="sm"
                >
                  {list.goal}
                </SookCard>
              </Fragment>
            );
          })}
        </>
      ) : (
        <>
          {subList?.includes?.map((list, idx) => {
            return (
              <Fragment key={idx}>
                <SookCard onClick={() => handleOpenDialog(list)} size="sm">
                  {list}
                </SookCard>
              </Fragment>
            );
          })}
        </>
      )}
    </SC.MandalartGridContainer>
  );
};

export default MandalartItem;
