import axios from "axios";
export const baseUrL = "https://bayut.p.rapidapi.com";
// headers: {
//     'X-RapidAPI-Key': '6d1f635362msh02f19cfd92582efp1b0e92jsn3b55a1d5c903',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "6d1f635362msh02f19cfd92582efp1b0e92jsn3b55a1d5c903",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
