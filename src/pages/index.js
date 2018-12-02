import React from 'react'

import Layout from '../components/layout'
import Star from '../assets/images/starstreak-hilight.svg'

const IndexPage = () => (
  <Layout>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <Star style={{ width: '85%' }} />
    </div>
  </Layout>
)

export default IndexPage
