import React from 'react';
import { Tabs } from '@mui/material';
import { Column } from './Column/Column';
import { GridTopBar } from './GridTopBar/GridTopBar';
import draw from '../../../test.json';
import { Buttons } from './Buttons/Buttons';
import {
  StyledRoundSettersBlock,
  StyledSettersBox,
  StyledTab,
  StyledGridBox,
  StyledColumn,
  StyledColumnRounds,
} from './styled';
/* eslint-disable */

const stagesNames = [
  "All",
  "Final",
  "Semi-Final",
  "1/4 Finals",
  "1/8 Finals",
  "1/16 Finals",
  "1/32 Finals",
  "1/64 Finals",
];

const stagesNames2 = [
  "All",
  "Final",
  "Semi-Final",
];

type Props = {
  showPanel: boolean,
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ColumnsBlock: React.FC<Props> = ({ setShowPanel }) => {
  function BasicTabs() {
    const [value, setValue] = React.useState<number>(0);
    const [index, setIndex] = React.useState<number>(0);
    const [selectedUserId, setSelectedUserId] = React.useState<number>(-1);
    const [cancelSelectUser, setCancelSelectUser] = React.useState<boolean>(false);

    const sortedPairs = draw.pairs.sort((a: Pair, b: Pair) => a.number - b.number);

    const allSerials = Array.from({length: [...draw.pairs].reduce((acc, value) => Math.max(acc, value.serial), 0)}, (_, i) => i + 1);

    const allSerialsReversed = allSerials.reverse();

    console.log(allSerialsReversed);

    const allSerialsLast = allSerialsReversed.slice(-2);

    console.log(allSerialsLast);

    const pairs = allSerials.map((i) => {
      const r = sortedPairs.filter((pair: Pair) => pair.serial === i).map((pair: Pair) => {
        let p = {...pair};
        p.user1 = null;
        p.user2 = null;
        if (p.sp1_id > 0) {
          p.user1 = draw.competitors.find((comp: Competitor) => comp.user.id === p.sp1_id)
        };
        if (p.sp2_id > 0) {
          p.user2 = draw.competitors.find((comp: Competitor) => comp.user.id === p.sp2_id)
        };

        return p;
      });

      return {
        serial: i,
        pairs: r,
      }
    });

    const pairsScroll = allSerials.filter((i) => i > 2).map((i) => {
      const r = sortedPairs.filter((pair: Pair) => pair.serial === i).map((pair: Pair) => {
        let p = {...pair};
        p.user1 = null;
        p.user2 = null;
        if (p.sp1_id > 0) {
          p.user1 = draw.competitors.find((comp: Competitor) => comp.user.id === p.sp1_id)
        };
        if (p.sp2_id > 0) {
          p.user2 = draw.competitors.find((comp: Competitor) => comp.user.id === p.sp2_id)
        };

        return p;
      })

      return {
        serial: i,
        pairs: r,
      }
    });

    const finalsPairs = [2, 1, 0];

    const finalPairsDraw = sortedPairs.filter((pair: Pair) => pair.serial < 3 && pair.sp1_id !== 0 && pair.sp2_id !== 0).map((pair: Pair) => {
        let p = {...pair};
        p.user1 = null;
        p.user2 = null;
        if (p.sp1_id > 0) {
          p.user1 = draw.competitors.find((comp: Competitor) => comp.user.id === p.sp1_id)
        };
        if (p.sp2_id > 0) {
          p.user2 = draw.competitors.find((comp: Competitor) => comp.user.id === p.sp2_id)
        };

        return p;
      }
    ).map((pair: Pair) => {
      return {
        serial: pair.serial,
        pairs: [pair],
      }
    });
    /* sp1_id & sp2_id != 0 */

    console.log(pairs);
    console.log(value);

    const hasScroll = pairsScroll.reduce((acc, value) => acc += value.pairs.length, 0) > 0;

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const screenWidth = window.innerWidth;

    const breakpoint = 900;

    let pairsSliced = pairsScroll.slice(index, index + 3);

    const pairsSlicedSmallScreen = pairsScroll.slice(index, index + 1);

    return (
      <>
        <GridTopBar setShowPanel={setShowPanel} />
        <StyledRoundSettersBlock >
          <StyledSettersBox>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="scrollable prevent tabs example"
              variant="fullWidth"
              scrollButtons={true}
              TabIndicatorProps={{
                style: {
                  display: 'none',
                }
              }}
            >
              <StyledTab
                style={{minHeight: '30px'}}
                label="All"
                onClick={() => setCancelSelectUser(false)}
              />
              {allSerialsReversed.map((i) => (
                <StyledTab
                  onClick={() => setCancelSelectUser(true)}
                  label={stagesNames[i]}
                />
              ))}
            </Tabs>
          </StyledSettersBox>
        </StyledRoundSettersBlock>

        {value === 0 ? (
          <>
              <StyledGridBox>
                {finalPairsDraw.map((pair, _i) => (
                  <>
                    {pair ? (
                      <StyledColumn>
                      <StyledColumnRounds>{stagesNames2[pair.serial]}</StyledColumnRounds>
                      <Column
                        pairs={pair.pairs}
                        selectedUserId={selectedUserId}
                        setSelectedUserId={setSelectedUserId}
                        cancelSelectUser={cancelSelectUser}
                        allSerialsLast={allSerialsLast}
                      />
                    </StyledColumn>
                    ) : (
                      ''
                    )}
                  </>
                ))}
            </StyledGridBox>
            {hasScroll ? (
              <>
                <Buttons
                  index={index}
                  setIndex={setIndex}
                  maxIndex={pairsScroll.length}
                  screenWidth={screenWidth}
                  breakpoint={breakpoint}
                />
                <StyledGridBox>
                  {screenWidth < breakpoint ? (
                    pairsSlicedSmallScreen.map((pair, _i) => (
                      <StyledColumn>
                        <StyledColumnRounds>{stagesNames[pair.serial]}</StyledColumnRounds>
                        <Column
                          allSerialsLast={allSerialsLast}
                          pairs={pair.pairs}
                          selectedUserId={selectedUserId}
                          setSelectedUserId={setSelectedUserId}
                          cancelSelectUser={cancelSelectUser}
                        />
                      </StyledColumn>
                    ))
                  ) : (
                    pairsSliced.map((pair, _i) => (
                      <StyledColumn>
                        <StyledColumnRounds>{stagesNames[pair.serial]}</StyledColumnRounds>
                        <Column
                          allSerialsLast={allSerialsLast}
                          pairs={pair.pairs}
                          selectedUserId={selectedUserId}
                          setSelectedUserId={setSelectedUserId}
                          cancelSelectUser={cancelSelectUser}
                        />
                      </StyledColumn>
                    ))
                  )}
                </StyledGridBox>
              </>
            ) : (
              null
            )}
          </>
        ) : (
          <StyledGridBox>
            <StyledColumn>
                <StyledColumnRounds>{stagesNames[pairs[value - 1].serial]}</StyledColumnRounds>
                <Column
                  pairs={pairs[value - 1].pairs}
                  selectedUserId={selectedUserId}
                  setSelectedUserId={setSelectedUserId}
                  cancelSelectUser={cancelSelectUser}
                  allSerialsLast={allSerialsLast}
                />
            </StyledColumn>
          </StyledGridBox>
        )}
      </>
    );
  };

  return (
    <BasicTabs />
  )
};
