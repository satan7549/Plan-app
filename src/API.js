import axios from "axios";

const url = "https://qa7.parentune.com/api/subscription/subscribe/v2/plans";

export const getData = async () => {
  try {
    const res = await axios.get(url);
    return res.data.data;
    // console.log(res.data.data, "data");
  } catch (err) {
    console.log("err :", err);
  }
};
