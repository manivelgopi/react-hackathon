import axios from "axios";
import { useState } from "react";

export default function Notfound() {

    const [healthCheck, setHealthCheck] = useState('');
    const [healthCheckApp, setHealthCheckApp] = useState('');

    function httpIp() {
      // Make a request for a user with a given ID
      axios.get('http://20.79.228.29:9000/herHackathon/CarbonFootprint/health-check')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        setHealthCheck(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }

    function httpsIp() {
      // Make a request for a user with a given ID
      axios.get('https://20.79.228.29:9000/herHackathon/CarbonFootprint/health-check')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        setHealthCheck(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }

    function httUrl() {
      // Make a request for a user with a given ID
      axios.get('http://herhackathon-f9dd5008.hcp.germanywestcentral.azmk8s.io/herHackathon/CarbonFootprint/health-check')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        setHealthCheck(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }

    function httpsUrl() {
      // Make a request for a user with a given ID
      axios.get('https://herhackathon-f9dd5008.hcp.germanywestcentral.azmk8s.io/herHackathon/CarbonFootprint/health-check')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        setHealthCheck(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }

    function httpsUrlAppService() {
      // Make a request for a user with a given ID
      axios.get('https://herhackathon-app.azurewebsites.net/herHackathon/CarbonFootprint/health-check')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        setHealthCheckApp(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Error 404: Sorry, The page you are looking is not available.</h2>
        {healthCheck}
        {healthCheckApp}
        <button onClick={httpIp}>HTTP - IP</button>
        <button onClick={httpsIp}>HTTPS - IP</button>
        <button onClick={httUrl}>HTTP - URL</button>
        <button onClick={httpsUrl}>HTTPS - URL</button>
        <button onClick={httpsUrlAppService}>https app serviceL</button>
      </main>
    );
  }