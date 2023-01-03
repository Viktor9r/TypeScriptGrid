/// <reference types="react-scripts" />
type User = {
  "id": number,
  "name": string,
  "surname": string,
  "link": string,
  "image_url": string
};

type Competitor = {
  "user": User,
  "org": {
    "image_url": string,
    "title": string,
    "link": string,
    "id": number
  },
  "coach_one": Coach | null,
  "coach_two": Coach | null,
};

type Coach = {
  "id": number,
  "link": string,
  "name": string,
  "surname": string,
  "followers_count": number,
  "mini_image_url": string,
  "place_id": number
}

type Pair = {
  "id": number,
  "event_id": number,
  "division_id": number,
  "group_id": number,
  "category_id": number,
  "sp1_id": number,
  "sp2_id": number,
  "leftId": number,
  "rightId": number,
  "winner_id": number,
  "score_one": number,
  "score_two": number,
  "winner_n": number,
  "is_final": number,
  "serial": number,
  "win_type_id": number,
  "number": number,
  "type": number,
  "tp_score_one": number,
  "tp_score_two": number,
  "p1_score_one": number,
  "p2_score_one": number,
  "p3_score_one": number,
  "p1_score_two": number,
  "p2_score_two": number,
  "p3_score_two": number,
  "j1_score_one": number,
  "j2_score_one": number,
  "j3_score_one": number,
  "j4_score_one": number,
  "j1_score_two": number,
  "j2_score_two": number,
  "j3_score_two": number,
  "j4_score_two": number,
  "court": number,
  "warnings_one": number,
  "warnings_two": number,
  "currentRoundTime": string,
  "currentRoundNumber": number,
  "currentRoundType": number,
  "currentRoundStatus": number,
  "lastStartTime": string,
  "is_finished": number,
  "faultsOne": number,
  "faultsTwo": number,
  "is_active": number,
  "day": number,
  "set_score_time": number,
  "place": number,
  "user1"?: Competitor | null | undefined,
  "user2"?: Competitor | null | undefined,
};
