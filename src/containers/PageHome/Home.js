import React from 'react'
import 'containers/PageHome/Home.css'
import { useRemoteData } from '@aic/react-remote-data-provider'
import useDevice from 'hooks/useDevice'

function Home() {
  const { response } = useRemoteData({
    request: {
      url: 'http://unclespace.beget.tech/products'
    }
  })
  console.log(response)

  const device = useDevice()
  console.log(device)

  return (
    <div className="Home">
      <div className="Home-header">
        <h2>Welcome to Razzle</h2>
      </div>
      <p className="Home-intro">
        To get started, edit <code>src/App.js</code> or{' '}
        <code>src/Home.js</code> and save to reload.
      </p>
      <ul className="Home-resources">
        <li>
          <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        </li>
        <li>
          <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        </li>
        <li>
          <a href="https://palmer.chat">Community Slack</a>
        </li>
      </ul>
    </div>
  )
}

export default Home;
