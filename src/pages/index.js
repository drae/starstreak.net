import React from 'react'

import Layout from '../components/layout'
import Star from '../assets/images/starstreak-hilight.svg'

const IndexPage = () => (
  <Layout>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Star style={{ width: '100%', position: 'absolute' }} />
    </div>
  </Layout>
)

export default IndexPage
