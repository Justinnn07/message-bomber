import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import countryData from "../../data/countryCode";
import indianSpamData, { nepalData } from "../../data/spamData";
import axios from "axios";
const useStyles = makeStyles({
  main: {
    margin: 20,
  },
});
const Hero = () => {
  const [countryCode, setCountryCode] = useState("Select Country Code");
  const [spamType, setSpamType] = useState("Select Type");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [howMany, setHowMany] = useState("0");
  const styles = useStyles();

  const submit = async () => {
    let finalData = [];
    const _dataIndia =
      parseInt(howMany) > 0
        ? indianSpamData.slice(0, parseInt(howMany))
        : indianSpamData;

    console.log(_dataIndia);

    const _dataNepal =
      parseInt(howMany) > 0 ? nepalData.slice(0, parseInt(howMany)) : nepalData;

    const _finalCountry = countryCode === "+91" ? _dataIndia : null;

    console.log(_finalCountry);

    for (let index = 0; index < _finalCountry.length; index++) {
      const datas = JSON.stringify(_finalCountry[index]).replace(
        "{target}",
        phoneNumber
      );
      const parseData = JSON.parse(datas);
      finalData.push(parseData);

      if (finalData[index].method === "GET") {
        await axios
          .get(finalData[index].url, finalData[index])
          .then((res) => console.log(res.data));
      } else {
        await axios
          .post(finalData[index].url, finalData[index])
          .then((res) => console.log(res.data));
      }
    }
  };
  return (
    <div className={styles.main}>
      <div style={{ textAlign: "center" }}>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          height="250px"
        />
      </div>

      <FormControl fullWidth className="form">
        <Select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <MenuItem value="Select Country Code" disabled>
            Select Country Code
          </MenuItem>
          {countryData.map(({ countryCode, countryName }, index) => (
            <MenuItem value={countryCode} key={index}>
              {countryCode} - {countryName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth className="form">
        <Select value={spamType} onChange={(e) => setSpamType(e.target.value)}>
          <MenuItem value="Select Type" disabled>
            Select Type
          </MenuItem>
          <MenuItem value="Mail">Mail</MenuItem>
          <MenuItem value="Call">Call</MenuItem>
          <MenuItem value="SMS">SMS</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="form">
        <Input
          placeholder="How Many .."
          value={howMany}
          onChange={(e) => setHowMany(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth className="form">
        <Input
          placeholder="Enter Mobile Number."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormControl>
      <Button variant="contained" fullWidth onClick={submit}>
        Submit
      </Button>
    </div>
  );
};

export default Hero;
