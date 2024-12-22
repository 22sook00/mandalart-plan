import React, { useState, Fragment, FC, useEffect, useMemo, memo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { SookGrid } from "react-sook-style";
import Input from "../common/Input";
import * as SC from "../../styles/mandalartForm.styles";

import { useSetRecoilState } from "recoil";
import { mobileBottomSheet, mobileSelectCell } from "src/atoms/mandalartAtom";

interface MandalartFormContentProps {
  value: string;
  detailIdx?: number;
}
const MandalartFormSubInput: FC<MandalartFormContentProps> = ({
  value,
  detailIdx = 0,
}) => {
  const isMain = detailIdx === 4;
  const IDX = detailIdx < 5 ? detailIdx + 1 : detailIdx;

  const { control, setValue } = useFormContext();
  const setIsOpen = useSetRecoilState(mobileBottomSheet);
  const setMobileSelectCell = useSetRecoilState(mobileSelectCell);
  const [mobilePlaceholder, setMobilePlaceholder] = useState("");

  const [center, subValue] = useWatch({
    control,
    name: ["center", `${value}.subGoals[${IDX}]`],
  });

  const mapping: Record<string, number> = useMemo(() => {
    return {
      leftTop: 1,
      top: 2,
      rightTop: 3,
      left: 4,
      right: 5,
      leftBottom: 6,
      bottom: 7,
      rightBottom: 8,
    };
  }, []);

  useEffect(() => {
    if (!center?.subGoals) return;
    if (value in mapping) {
      const goalIndex = mapping[value];

      setValue(`${value}.mainGoal`, center.subGoals[goalIndex]);
      setMobilePlaceholder(center.subGoals[goalIndex]);
    }
  }, [value, center, setValue, mapping]);

  const isReadonly = useMemo(() => {
    if (!center?.subGoals?.length) return true;
    if (value in mapping) {
      const goalIndex = mapping[value];
      if (!center?.subGoals[goalIndex]) return true;
    }
    return false;
  }, [center?.subGoals, mapping, value]);

  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
    setMobileSelectCell({ value, idx: detailIdx, type: "detail" });
  };

  const isReadOnly = isMain || isReadonly;

  return (
    <>
      <SC.DesktopWrapper>
        <Input
          placeholder={isMain ? `목표 ${mapping[value]}` : "세부 목표"}
          value={isMain ? `${value}.mainGoal` : `${value}.subGoals[${IDX}]`}
          readOnly={isMain || isReadonly}
        />
      </SC.DesktopWrapper>
      <SC.MobileWrapper>
        <SC.MobileMandalartContent
          readOnly={isReadOnly}
          onClick={!isReadOnly ? toggleSheet : undefined}
        >
          <p>
            {isMain && (mobilePlaceholder || `${mapping[value]}`)}
            {!isMain && subValue}
          </p>
        </SC.MobileMandalartContent>
      </SC.MobileWrapper>
    </>
  );
};
const MandalartFormMainInput: FC<MandalartFormContentProps> = ({
  value,
  detailIdx,
}) => {
  const setIsOpen = useSetRecoilState(mobileBottomSheet);
  const setMobileSelectCell = useSetRecoilState(mobileSelectCell);

  const { control, getValues } = useFormContext();
  const [center] = useWatch({
    control,
    name: ["center"],
  });
  const IDX = detailIdx < 5 ? detailIdx + 1 : detailIdx;
  const idxMapping: Record<number, string> = useMemo(() => {
    return {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "6": "5",
      "7": "6",
      "8": "7",
      "9": "8",
    };
  }, []);

  const getSubGoalValue = (detailIdx: number) => {
    // mainGoal은 중앙 4번째 셀
    return detailIdx === 4 ? `${value}.mainGoal` : `${value}.subGoals[${IDX}]`; // subGoal은 0부터 7까지 할당
  };

  const fieldName = getSubGoalValue(detailIdx || 0);
  const isMain = useMemo(() => detailIdx === 4, [detailIdx]);

  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
    setMobileSelectCell({ value: fieldName, idx: detailIdx, type: "center" });
  };
  const isReadOnly = isMain ? false : !center?.mainGoal;
  const placeholder = isMain
    ? `🔥 \n핵심 목표`
    : `목표 ${idxMapping[detailIdx + 1]}`;
  return (
    <>
      <SC.DesktopWrapper>
        <Input
          maxLength={16}
          placeholder={placeholder}
          value={fieldName || ""}
          isMain={detailIdx === 4}
          readOnly={isMain ? false : !center?.mainGoal}
        />
      </SC.DesktopWrapper>
      <SC.MobileWrapper>
        <SC.MobileMandalartContent
          readOnly={isReadOnly}
          isMain={detailIdx === 4}
          onClick={!isReadOnly ? toggleSheet : undefined}
        >
          {center?.mainGoal && isMain && <p>{center?.mainGoal}</p>}
          {center?.subGoals[IDX] && !isMain && <p>{center?.subGoals[IDX]}</p>}
          {!center?.mainGoal && isMain && (
            <p style={{ color: "#cbd5e1" }}>{`🔥`}</p>
          )}
          {!center?.subGoals[IDX] && !isMain && (
            <p style={{ color: "#cbd5e1" }}>{`${IDX}`}</p>
          )}
        </SC.MobileMandalartContent>
      </SC.MobileWrapper>
    </>
  );
};
const MandalartFormItem: FC<Omit<MandalartFormContentProps, "detailIdx">> = ({
  value,
}) => {
  return (
    <SookGrid col={"repeat(3, 1fr)"} gap={2}>
      {Array.from({ length: 9 }).map((_, detailIdx) => {
        return (
          <Fragment key={`detail-${detailIdx}`}>
            {value === "center" ? (
              <MandalartFormMainInput value={value} detailIdx={detailIdx} />
            ) : (
              <MandalartFormSubInput value={value} detailIdx={detailIdx} />
            )}
          </Fragment>
        );
      })}
    </SookGrid>
  );
};

export default MandalartFormItem;
