const router = require('express').Router();
const path = require('path')
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const cron = require('node-cron');
const HtmlTableToJson = require('html-table-to-json');

function getData() {
	router.get('/nepse', (req, res, next) => {
		axios.get('http://www.nepalstock.com/todaysprice/export')
			.then(
				function(response) {
					let nepseData;
					let nepseList = response.data;
					let jsonTables = HtmlTableToJson.parse(nepseList);

					nepseData = jsonTables.results.flat([2]);

					for (let i = 0; i < nepseData.length; i++) {
						nepseData[i]['companyName'] = nepseData[i]['Traded Companies'];
						delete nepseData[i]['Traded Companies'];

						nepseData[i]['noOfTransactions'] = parseInt(nepseData[i]['No. Of Transactions']);
						delete nepseData[i]['No. Of Transactions'];

						nepseData[i]['maxPrice'] = parseInt(nepseData[i]['Max Price']);
						delete nepseData[i]['Max Price'];

						nepseData[i]['minPrice'] = parseInt(nepseData[i]['Min Price']);
						delete nepseData[i]['Min Price'];

						nepseData[i]['closingPrice'] = parseInt(nepseData[i]['Closing Price']);
						delete nepseData[i]['Closing Price'];

						nepseData[i]['tradedShares'] = parseInt(nepseData[i]['Traded Shares']);
						delete nepseData[i]['Traded Shares'];

						nepseData[i]['amount'] = parseInt(nepseData[i]['Amount']);
						delete nepseData[i]['Amount'];

						nepseData[i]['previousClosing'] = parseInt(nepseData[i]['Previous Closing']);
						delete nepseData[i]['Previous Closing'];

						nepseData[i]['difference'] = parseInt(nepseData[i]['Difference Rs.']);
						delete nepseData[i]['Difference Rs.'];
					}
					return res.send(nepseData);
				})
	});
}
getData();

module.exports = router;