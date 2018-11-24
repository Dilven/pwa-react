// This function gets the prices for the current date.
getTodayPrice () {
  // Get today's date in timestamp
  let t = moment().unix()
  // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
  axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
          let f = {
              date: moment.unix(t).format("MMMM Do YYYY"),
              eth: eth.data.ETH.USD,
              btc: btc.data.BTC.USD,
              ltc: ltc.data.LTC.USD
          }
          // Set the state of todayprice to the content of the object f
          this.setState({ todayprice: f });
      }));
}
// This function gets the prices for the yesterday.
getYesterdayPrice () {
  // Get yesterday's date in timestamp
  let t = moment().subtract(1, 'days').unix();
  // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
  axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
          let f = {
              date: moment.unix(t).format("MMMM Do YYYY"),
              eth: eth.data.ETH.USD,
              btc: btc.data.BTC.USD,
              ltc: ltc.data.LTC.USD
          }
          // Set the state of yesterdayprice to the content of the object f
          this.setState({ yesterdayprice: f });
      }));
}
// This function gets the prices for the two days ago.
getTwoDaysPrice () {
  // Get the date for two days ago in timestamp
  let t = moment().subtract(2, 'days').unix();
  // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
  axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
          let f = {
              date: moment.unix(t).format("MMMM Do YYYY"),
              eth: eth.data.ETH.USD,
              btc: btc.data.BTC.USD,
              ltc: ltc.data.LTC.USD
          }
          // Set the state of twodaysprice to the content of the object f
          this.setState({ twodaysprice: f });
      }));
}
// This function gets the prices for the three days ago.
getThreeDaysPrice () {
  // Get the date for three days ago in timestamp
  let t = moment().subtract(3, 'days').unix();
  // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
  axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
          let f = {
              date: moment.unix(t).format("MMMM Do YYYY"),
              eth: eth.data.ETH.USD,
              btc: btc.data.BTC.USD,
              ltc: ltc.data.LTC.USD
          }
          // Set the state of threedaysprice to the content of the object f
          this.setState({ threedaysprice: f });
      }));
}
// This function gets the prices for the four days ago.
getFourDaysPrice () {
  // Get the date for four days ago in timestamp
  let t = moment().subtract(4, 'days').unix();
  // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
  axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
          let f = {
              date: moment.unix(t).format("MMMM Do YYYY"),
              eth: eth.data.ETH.USD,
              btc: btc.data.BTC.USD,
              ltc: ltc.data.LTC.USD
          }
          // Set the state of fourdaysprice to the content of the object f
          this.setState({ fourdaysprice: f });
      }));
}
// This is called when an instance of a component is being created and inserted into the DOM.
componentWillMount () {
  this.getTodayPrice();
  this.getYesterdayPrice();
  this.getTwoDaysPrice();
  this.getThreeDaysPrice();
  this.getFourDaysPrice();
}