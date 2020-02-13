const apiUrl = `https://api.coindesk.com/v1/bpi/currentprice.json`;

axios
  .get(apiUrl)
  .then(res => {
    printTheChart(res.data)
    console.log(res)
  })
  .catch(err => console.log("Error while getting the data: ", err));