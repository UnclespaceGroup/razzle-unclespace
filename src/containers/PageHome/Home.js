import React from 'react'
import css from './home.module.scss'
import { useRemoteData } from '@aic/react-remote-data-provider'
import useDevice from 'hooks/useDevice'

function Home() {
  const { response } = useRemoteData({
    request: {
      url: 'http://unclespace.beget.tech/products'
    }
  })
  console.log(response)

  const { currentDevice } = useDevice()

  return (
    <div className={css[currentDevice]}>
      <h2>Сборка Unclespace</h2>
    </div>
  )
}

export default Home;
